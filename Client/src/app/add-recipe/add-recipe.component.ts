import { createInput } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from 'src/Models/Recipe';
import Swal from 'sweetalert2';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {
  addNewRecipe: Recipe = new Recipe("","", "",0,0, new Date(Date.now()), [""], [""], "", "");
  inputs = [{ line: '' }];
  inputs2 = [{ line: '' }];
  constructor(public recSer: RecipeService,public route:Router ){ }
  addRecipe() {
    for(let i=0;i<this.inputs.length;i++){
      this.addNewRecipe.ListOfComponents.push(this.inputs[i].line)
    }
    for(let i=0;i<this.inputs2.length;i++){
      this.addNewRecipe.Preparation.push(this.inputs2[i].line)
    }
  
     this.addNewRecipe.ListOfComponents.splice(this.addNewRecipe.ListOfComponents.length - 1, 1);
     this.addNewRecipe.Preparation.splice(this.addNewRecipe.Preparation.length - 1, 1);
    
    this.recSer.add(this.addNewRecipe).subscribe(e=>console.log(e));
    Swal.fire({  icon: 'success',  title: 'WOW!!!!!',  text: 'The recipe was successfully added!',  footer: '<a href="/all-recipes">to all recipes</a>'})
  }
  
  addInput() {
    this.inputs = this.inputs.filter((l) => l.line != '');
    this.inputs.push({ line: '' });
  }
  add() {
    this.inputs2 = this.inputs2.filter((l) => l.line != '');
    this.inputs2.push({ line: '' });
  }

  save() {
    this.addNewRecipe.PictureSrc = "../../assets/images/newRecipy.png"
 
    }
  ngOnInit(): void {
  }

}
