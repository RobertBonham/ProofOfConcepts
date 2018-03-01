using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AspDotNetMVC.Models
{
    public class Customer
    {
        public int CustomerID { get; set; }
        public string CompanyName { get; set; }
        public string ContactName { get; set; }
        public string Country { get; set; }
    }

    public class CustomerFactory {

        public static Customer CreateCustomer(int id) {
            var customer = new Customer
            {
                CustomerID = id,
                CompanyName = "Company Name "+id,
                ContactName = "Contact Name "+id,
                Country = "U.S.A."
            };

            return customer;
        }

        public static List<Customer> CreateCustomerList() {
            var list = new List<Customer>();

            for (int i = 0; i < 10; i++)
            {
                list.Add(CreateCustomer(i));
            }

            return list;
        }
    }
}