import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Data} from "./Data";
import {Observable} from "rxjs";

@Injectable()
export class RestService {
  constructor(private http : HttpClient){}
    url : string = "/assets/data.json";
  getData(): Observable<Data[]>{
    return this.http.get<Data[]>(this.url);
  }
}
