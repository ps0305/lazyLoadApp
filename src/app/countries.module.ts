import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CountriesService } from "./countries.service";
import { CountriesComponent } from "./countries.component";
import { Routes,RouterModule } from "@angular/router";
export const appRoutes:Routes = [
    {path:"",component:CountriesComponent}
]
@NgModule({
    declarations:[CountriesComponent],
    imports:[CommonModule,RouterModule.forChild(appRoutes)],
    providers:[CountriesService],
    exports:[CountriesComponent]
})
export class CountriesModule{
}