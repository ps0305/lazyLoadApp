import { PageoneComponent } from "./components/pageone.component";
import { Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthService } from "./auth.service";
export const appRoutes:Routes = [
    {path:"",component:PageoneComponent},
    {path:"lazy",
     loadChildren:"./countries.module#CountriesModule",
     canLoad:[AuthService]}
];
export const lazyRoutes:ModuleWithProviders = 
                        RouterModule.forRoot(appRoutes);

