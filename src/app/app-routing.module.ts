import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";

/* To define paths for the routing, we use 'Routes' as import from angular/router
and define all the paths below as shown  */

const appRoutes : Routes = [
    {path:'',redirectTo:'/recipes',pathMatch:'full'},//empty path should always use 'full' as pathMatch
    {path:'recipes',component:RecipesComponent, children:[
        {path:'',component:RecipeStartComponent, pathMatch:'full'},
        {path:':id',component:RecipeDetailComponent}
    ]},

    {path:'shopping-list',component:ShoppingListComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]

})
export class appRoutingModel{

}
