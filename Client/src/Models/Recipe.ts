export class Recipe{
    constructor(public RecipeCode:string,
        public RecipeName:string,
        public CategoryCode:string,
        public  PreparationTime:number,
        public  Difficulty:number,
        public  DateAddRecipeToSite:Date,
        public  ListOfComponents:string[],
        public  Preparation:string[] ,
        public  UserCode:string,
        public PictureSrc:string){
            
         }
}