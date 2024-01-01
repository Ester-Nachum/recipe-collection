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
    public class RecipeController : ApiController
    {
        [HttpGet]
        // GET: api/Recipe
        public List<Recipe> GetAll()
        {
            return DataBase.recipes;
        }
        [HttpGet]
        // GET: api/Recipe/5
        public Recipe Get(string code)
        {
            return DataBase.recipes.FirstOrDefault(r => r.RecipeCode == code);
        }

        [HttpPost]
        public Recipe AddRecipe(Recipe r)
        {
            if (r != null)
            {
                r.RecipeCode += DataBase.recipes.Count + 1;
                DataBase.recipes.Add(r);
            }
            return r;
        }

        // POST: api/Recipe

        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Recipe/5
        public void Put(int id, [FromBody] string value)
        {
        }
        [HttpDelete]
        // DELETE: api/Recipe/5
        public Recipe Delete(string code)
        {
            Recipe r = DataBase.recipes.FirstOrDefault(d => d.RecipeCode == code);
            DataBase.recipes.Remove(r);
            return r;
        }
    }
}
