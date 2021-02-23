import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantServiceService {

  baseUrl: string = "http://localhost:3000/";
  restaurantsData: any;
  constructor(private http: HttpClient) { }

  // getRestaurantById(id:any):Observable<any>{

  //   let queryParam = new HttpParams({fromString:"id="+id});
  //   // queryParam.append("id",'602ca48cf2697638d43f4f11');
  //   // console.log(this.http.get<any>(this.baseUrl+"getRestaurantById",{params:queryParam}));

  //   return this.http.get<any>(this.baseUrl+"getRestaurantById",{params:queryParam});
  // }
  async getRestaurantById(id: any): Promise<any> {
    let restaurant;

    if (this.restaurantsData == undefined) {

      this.restaurantsData = await this.getAllRestaurants().toPromise();

    }

    restaurant = this.restaurantsData.find((restaurant: any) => {
      return restaurant._id == id;
    })
    console.log("in restaurant service restaurant by id:",restaurant);
    
    
    return restaurant;
  }

  getAllRestaurants(): Observable<any> {
    return this.http.get<any>(this.baseUrl + "getRestaurants");
  }

  getFoodByRestaurant(id: any): Observable<any> {

    let queryParam = new HttpParams({ fromString: "id=" + id });
    // queryParam.append("id",'602ca48cf2697638d43f4f11');
    // console.log(this.http.get<any>(this.baseUrl+"getRestaurantById",{params:queryParam}));

    return this.http.get<any>(this.baseUrl + "getFoodByRestaurant", { params: queryParam });
  }
}
