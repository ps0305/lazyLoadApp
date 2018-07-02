import { Injectable } from "@angular/core";
import { CanLoad } from "@angular/router";
@Injectable()
export class AuthService implements CanLoad{
    canLoad():boolean{
        return confirm("Do you want to enter into lazy module ??");
    }
}