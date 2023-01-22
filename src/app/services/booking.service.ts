import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class BookingService {

  base_url = 'http://localhost:5000/booking'
  constructor( private http:HttpClient) { }

  getMatrix(id:any){
    return this.http.get(`${this.base_url}/${id}`)
}

addTableMatrix(item:any,keyname:any){
  localStorage.setItem(keyname, JSON.stringify(item));
}

getTableMatrix(keyName:any){
  var item:any = localStorage.getItem(keyName);
return JSON.parse(item);
}

}
