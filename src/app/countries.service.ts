import { Injectable } from "@angular/core";
import { Http,Response } from "@angular/http";
import "rxjs/Rx";
import { Observable } from "rxjs/Observable";
@Injectable()
export class CountriesService{
    constructor(private _http:Http){
    };
    public getCountries():any{
        return this._http.get("https://restcountries.eu/rest/v2/all")
                .map((res:Response)=>{
                    return res.json();
                }).catch(this._handleError);
    };
    public _handleError(err){
        console.error("Error Raised...."+err);
        return Observable.throw(err || "Internal Server Error !");
    };
};