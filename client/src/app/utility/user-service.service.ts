import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  baseUrl:string = "http://localhost:3000/";  
  
  userData: any ;
  constructor(private http: HttpClient) {

  }

  async getUser(): Promise<any>{
    let userId: any = "602a4a5214315c2a00e234af";
    if(this.userData==undefined){
      let temp=await this.getUserById(userId).toPromise();
      console.log(temp);
      this.userData=temp.user;
    }
    return this.userData;
  }

  getUserById(id:any):Observable<any>{
    console.log('hello');
    
    let queryParam = new HttpParams({fromString:"id="+id});
    // queryParam.append("id",'602ca48cf2697638d43f4f11');    
    return this.http.get<any>(this.baseUrl+"getUserById",{params:queryParam});
  }


  incrementCartItem(){

  }
  
}
