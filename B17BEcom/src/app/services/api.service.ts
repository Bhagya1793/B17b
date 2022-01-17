import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  public url="https://bookcart.azurewebsites.net/api/Book"

  getTotalBooks(){
    return this.http.get(this.url);
  }

  bookDetails(id:any){
    return this.http.get(`${this.url}/${id}`)}

}
