using angularProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace angularProject.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class UserController : ApiController
    {
        // GET: api/User
        
        public List<User> Get()
        {
            return  DataBase.user;
        }

        // GET: api/User/5
        [HttpGet]
        public IHttpActionResult Login(string userName,string Password)
        {
            User user = DataBase.user.FirstOrDefault(x => x.Name == userName );
            if (user != null)
            {
                if (user.Password == Password)
                    return Ok(user);
            }
            return BadRequest("Invalid password or name");
        }
        
        [HttpPost]
        public IHttpActionResult Register( User u)
        {
            User u1 = DataBase.user.FirstOrDefault(x => u.Name == x.Name && u.Password == x.Password);
            if ( u1!=null)
                return Conflict();
            //u.Code = DataBase.user.Count + 1;
            DataBase.user.Add(u);
            return Ok(u);
        }
        public User Get(string code)
        {
            return DataBase.user.FirstOrDefault(x => x.Code == code);
        }

        public User Add(User u) {
            u.Code += DataBase.user.Count + 1;
            DataBase.user.Add(u);
            return u;
        }

        //// POST: api/User
        //public void Post([FromBody]string value)
        //{
        //}

        //// PUT: api/User/5
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        // DELETE: api/User/5
        public User Delete(string code)
        {
            User r = DataBase.user.FirstOrDefault(d => d.Code == code);
            DataBase.user.Remove(r);
            return r;
        }
    }
}
