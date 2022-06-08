import {Component, OnInit} from '@angular/core';
import {RestService} from "../assets/rest.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-app';
  public data: any;
  public _object: any;
  constructor(private rest : RestService){}
  columns = ["Product Id", "Product Descriptions"];
  id = "ProductId";
  info = ["Price", "ColorIdx", "ProductCode", "VoDatum", "RestrictedLands", "ProductDescription"];
  ngOnInit(): void {
    this.rest.getData().subscribe(
      (response) =>  {
        this.data = response;
        console.log(response)
      }
    );
  }
  renderDescription(object: any){
    this._object = object;
  }
  close(){
    this._object = null;
  }
}
