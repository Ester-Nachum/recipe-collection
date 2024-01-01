import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from 'src/Models/Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  baseURL="https://localhost:44328/api/Recipe/";
  getAllRecipes(){
    return this.http.get<Recipe[]>(this.baseURL+"GetAll")
  }
  
  add(addNewRecipe:Recipe){
    return this.http.post<Recipe>(this.baseURL+"AddRecipe",addNewRecipe)
  }
  GetByID(id:string){
return this.http.get<Recipe>(this.baseURL+`Get?code=${id}`)
  }
  deleteRe(id:string){
   
return this.http.delete<Recipe>(this.baseURL+`Delete?code=${id}`);
  }
  constructor(public http: HttpClient) { }
}
