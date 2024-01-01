using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace angularProject.Models
{
    public class Category
    {
        public int Code { get; set; }
        public string Name { get; set; }
        public string RoutingToIcon { get; set; }

        public Category(int code, string name, string routingToIcon)
        {
            Code = code;
            Name = name;
            RoutingToIcon = routingToIcon;
        }
    }
}