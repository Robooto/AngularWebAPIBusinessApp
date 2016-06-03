using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using APM.Common;
using Dapper;

namespace APM.DAL
{
    public class ProductDAL
    {
        private readonly string _connectionString;
        public ProductDAL()
        {
            _connectionString = ConfigurationManager.ConnectionStrings["DapperTest"].ConnectionString;
        }

        public List<Product> GetProducts()
        {
            using (IDbConnection dbConnection = new SqlConnection(_connectionString))
            {
                //dbConnection.Query<AuthorProduct>("[dbo].[GetProducts]", null, commandType: CommandType.StoredProcedure).ToList();
                return dbConnection.Query<Product>("Select * From dbo.Products").ToList();
            }
        }
    }
}
