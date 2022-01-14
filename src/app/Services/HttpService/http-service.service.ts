import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http:HttpClient) { }
  post(url : string, data :any=null, token : any=false,headers:any = null){
    return this.http.post(url,data,token && headers)
  }
  put(url : string, data :any=null, token : any=false,headers:any = null){
    return this.http.put(url,data,token && headers)
  }
  get(url : string, token : any=false,headers:any = null){
    return this.http.get(url,token && headers)
  }
}
