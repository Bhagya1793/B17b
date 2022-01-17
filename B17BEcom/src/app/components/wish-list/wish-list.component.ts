import { Component, OnInit } from '@angular/core';
import { WishListService } from 'src/app/services/wish-list.service';


@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
  public wishListArray : any = [];
  constructor(private wishListServe : WishListService) { }

  ngOnInit(): void {
   this.getWishListItems();
  }

  getWishListItems(){
    this.wishListServe.getWishListItems().subscribe(res=>{
      this.wishListArray = res;
      console.log(res);
    })
  }
  removeItem(item: any){
    this.wishListServe.addtowishlist(item).subscribe(res=>{
      alert("item removed from cart")
      this.getWishListItems();
      this.wishListServe.changeMessage(this.wishListArray.length-1);
      
    });
  }

  emptywishlist(){
    this.wishListServe.removeAllwishlist().subscribe(res=>{
      this.wishListArray.length = 0;
      console.log(this.wishListArray);
      console.log(res);
      this.wishListServe.changeMessage(0);
    })
  }

}


function bookId(bookId: any) {
  throw new Error('Function not implemented.');
}

