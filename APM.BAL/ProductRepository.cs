using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Hosting;
using APM.DAL;
using Newtonsoft.Json;

namespace APM.BAL
{
    public class ProductRepository
    {
        public Product Create()
        {
            Product product = new Product
            {
                ReleaseDate = DateTime.Now
            };

            return product;
        }

        public List<Product> Retrieve()
        {
            //var filePath = HostingEnvironment.MapPath(@"~/App_Data/product.json");

            //var json = System.IO.File.ReadAllText(filePath);

            //var products = JsonConvert.DeserializeObject<List<Product>>(json);
            var productDal = new ProductDAL();
            return productDal.GetProducts();
        }

        public Product Save(Product product)
        {
            // Read in all existing products
            var products = this.Retrieve();

            // Assign new id
            var maxId = products.Max(p => p.ProductId);
            product.ProductId = maxId + 1;
            products.Add(product);

            WriteData(products);
            return product;

        }

        public Product Save(int id, Product product)
        {
            // Read in the existing products
            var products = this.Retrieve();

            // Locate and replace the item
            var itemIndex = products.FindIndex(p => p.ProductId == product.ProductId);
            if (itemIndex > 0)
            {
                products[itemIndex] = product;
            }
            else
            {
                return null;
            }

            WriteData(products);
            return product;
        }

        private bool WriteData(List<Product> products)
        {
            // Write out the Json
            var filePath = HostingEnvironment.MapPath(@"~/App_Data/product.json");

            var json = JsonConvert.SerializeObject(products, Formatting.Indented);
            System.IO.File.WriteAllText(filePath, json);

            return true;
        }
    }
}