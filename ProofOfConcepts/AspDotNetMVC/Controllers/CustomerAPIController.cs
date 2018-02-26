using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AspDotNetMVC.Models;

namespace AspDotNetMVC.Controllers
{
    public class CustomerController : ApiController
    {
        // GET: api/CustomerAPI
        public IEnumerable<Customer> Get()
        {
            return CustomerFactory.CreateCustomerList();
        }

        // GET: api/CustomerAPI/5
        public Customer Get(int id)
        {
            return CustomerFactory.CreateCustomer(id);
        }

        // POST: api/CustomerAPI
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/CustomerAPI/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/CustomerAPI/5
        public void Delete(int id)
        {
        }
    }
}
