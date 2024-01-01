using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace angularProject.Models
{
    public class User
    {
        public string Code { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Mail { get; set; }
        public string Password { get; set; }

        public User(string code, string name, string adress, string mail, string password)
        {
            Code = code;
            Name = name;
            Address = adress;
            Mail = mail;
            Password = password;
        }
    }
}