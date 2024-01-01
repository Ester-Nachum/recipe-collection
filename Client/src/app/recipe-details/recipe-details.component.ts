import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/Models/Recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  myRecipe: Recipe = new Recipe("", "", "", 0, 0, null, null, null, null, null);
  userId: string;
  constructor(public activatedRoute: ActivatedRoute, public recSer: RecipeService) { }
  deleteRecipe() {
    this.recSer.deleteRe(this.myRecipe.RecipeCode).subscribe();
  }
  recipeId: string = "";
  ngOnInit(): void {
    this.recipeId += this.activatedRoute.snapshot.paramMap.get('RecipeCode');
    this.recSer.GetByID(this.recipeId).subscribe(ret => this.myRecipe = ret);
    this.userId = JSON.parse(sessionStorage.getItem("user")).Code;
    console.log(this.userId);
  }

}
