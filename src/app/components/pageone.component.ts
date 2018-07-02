import { Component } from "@angular/core";
@Component({
    templateUrl:"./pageone.component.html"
})
export class PageoneComponent{
    private var_one:any;
    constructor(){
        this.var_one = "I am from Page one Component !";
    }
}