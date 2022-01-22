import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Subject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class WishListService {

  public userId:number=447;
  
  public wishItemList : any =[]
  public wishList = new BehaviorSubject<any>([]);
  public totalItem = new BehaviorSubject<any>([]);
  constructor(private http:HttpClient) { }

  public url="https://bookcart.azurewebsites.net/api/Book";
  public urll="https://bookcart.azurewebsites.net/api/shoppingcart/addToCart/447";
  public urlll="https://bookcart.azurewebsites.net/api/Wishlist/447"

  private wishlistCount = new Subject<number>();
  messageChanges$ = this.wishlistCount.asObservable();

  changeMessage(message: number) {
    console.log(message);
    this.wishlistCount.next(message);
  }

  getwishlist(){
    return this.wishList.asObservable();
  }


  
  addtowishlist(bookId :any){
    let url = "https://bookcart.azurewebsites.net/api/Wishlist/ToggleWishlist/447" +  "/" + bookId
    return this.http.post<any>(url,{},{headers:(new HttpHeaders().set(
      "Authorization","Bearer "+"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiaGFneWEiLCJ1c2VyaWQiOiI0NDciLCJ1c2VyVHlwZUlkIjoiMiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IjIiLCJqdGkiOiJlZTAxMTRmOS1hMTBkLTRhYjAtYjI1Mi04NDdlMThiZWY5OGMiLCJleHAiOjE2NDI4MzA3MzQsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzY0LyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzY0LyJ9.9amii7vcz3hiJno9WvqmeAnXt7WBnTKNKxZJFeuioss"
      
    ))})
  }

  getWishListItems(){
    return this.http.get<any>(this.urlll)
  }

  removeAllwishlist(){
    let url = "https://bookcart.azurewebsites.net/api/Wishlist/447"
    return this.http.delete(url,{headers:(new HttpHeaders().set(
      "Authorization","Bearer "+"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiaGFneWEiLCJ1c2VyaWQiOiI0NDciLCJ1c2VyVHlwZUlkIjoiMiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IjIiLCJqdGkiOiJlZTAxMTRmOS1hMTBkLTRhYjAtYjI1Mi04NDdlMThiZWY5OGMiLCJleHAiOjE2NDI4MzA3MzQsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzY0LyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzY0LyJ9.9amii7vcz3hiJno9WvqmeAnXt7WBnTKNKxZJFeuioss"
      
    ))})
    
  }
  

  removeCartItem(bookId :any){
    let url = "https://bookcart.azurewebsites.net/api/Wishlist/ToggleWishlist/447" +  "/" + bookId
    let header = new HttpHeaders().set(
      "Authorization","Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiaGFneWEiLCJ1c2VyaWQiOiI0NDciLCJ1c2VyVHlwZUlkIjoiMiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IjIiLCJqdGkiOiJlZTAxMTRmOS1hMTBkLTRhYjAtYjI1Mi04NDdlMThiZWY5OGMiLCJleHAiOjE2NDI4MzA3MzQsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzY0LyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzY0LyJ9.9amii7vcz3hiJno9WvqmeAnXt7WBnTKNKxZJFeuioss"
    );
    return this.http.delete(url,{headers:header});

  }
}
