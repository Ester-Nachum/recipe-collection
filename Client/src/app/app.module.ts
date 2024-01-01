import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import { SmallRecipeComponent } from './small-recipe/small-recipe.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { TimePipe } from './time.pipe';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { NgxWebstorageModule } from 'ngx-webstorage';

const routes: Routes = [
  { path: "register/:Name", component: RegisterComponent },
  { path: "register", component: RegisterComponent },
  { path: "all-recipes", component: AllRecipesComponent },
  { path: "add-recipe", component: AddRecipeComponent },
  { path: "login", component: LoginComponent },
  { path: "recipe-details/:RecipeCode", component: RecipeDetailsComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: "**", component: LoginComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AllRecipesComponent,
    SmallRecipeComponent,
    AddRecipeComponent,
    RecipeDetailsComponent,
    TimePipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    NgxWebstorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


