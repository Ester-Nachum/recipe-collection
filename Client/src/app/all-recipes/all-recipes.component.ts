import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/Models/Recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.scss']
})
export class AllRecipesComponent implements OnInit {

  arrRecipe: Recipe[];
  filterL: number;
  filterC: string = 'all';
  filterP: number;
  arrFilter: Recipe[];
  message: string = "";
  constructor(public recipeSrv: RecipeService) {

  }
  AllRecipes() {
    this.recipeSrv.getAllRecipes().subscribe(data => {
      this.arrRecipe = data;
      this.arrFilter = data;
      console.log(this.arrRecipe)
    });

  }
  FilterSearch() {
    this.message = "";
    this.arrFilter = this.arrRecipe;
    if (this.filterL != null)
      this.arrFilter = this.arrFilter.filter(x => x.Difficulty == this.filterL)
    if (this.filterC != 'all')
      this.arrFilter = this.arrFilter.filter(x => x.CategoryCode == this.filterC)
    if (this.filterP != null)
      this.arrFilter = this.arrFilter.filter(x => x.PreparationTime <= this.filterP)
    if (this.arrFilter.length == 0)
      this.message = "No item matching your search was found🙁"
    this.filterL = null;
    this.filterC = 'all';
    this.filterP = null;
  }

  ngOnInit(): void {
    this.AllRecipes();
  }

}

