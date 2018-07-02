import { Component } from "@angular/core";
import { CountriesService } from "./countries.service";
import { HttpErrorResponse } from "@angular/common/http";
@Component({
    selector:"countries",
    templateUrl:"./countries.component.html"
})
export class CountriesComponent{
    private result:any;
    constructor(private _service:CountriesService){
    }
    ngOnInit(){
        this._service.getCountries().subscribe(res=>{
            this.result = res;
        },(err:HttpErrorResponse)=>{
            if(err.error instanceof Error){
                console.log("Client Side Error !");
            }else{
                console.log("Server Side Error !");
            }
        });
    }
}