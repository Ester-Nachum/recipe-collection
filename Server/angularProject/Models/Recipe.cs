using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace angularProject.Models
{
    public class Recipe
    {
        public string RecipeCode { get; set; }
        public string RecipeName { get; set; }
        public string CategoryCode { get; set; }
        public int PreparationTime { get; set; }
        public int Difficulty { get; set; }
        public DateTime DateAddRecipeToSite { get; set; }
        public List<string> ListOfComponents { get; set; }
        public List<string> Preparation { get; set; }
        public string UserCode { get; set; }
        public string PictureSrc { get; set; }

        public Recipe(string recipeCode, string recipeName, string categoryCode, int preparationTime, int difficulty, DateTime dateAddRecipeToSite, List<string> listOfComponents, List<string> preparation, string userCode, string pictureSrc)
        {
            RecipeCode = recipeCode;
            RecipeName = recipeName;
            CategoryCode = categoryCode;
            PreparationTime = preparationTime;
            Difficulty = difficulty;
            DateAddRecipeToSite = dateAddRecipeToSite;
            ListOfComponents = listOfComponents;
            Preparation = preparation;
            UserCode = userCode;
            PictureSrc = pictureSrc;
        }
    }
}