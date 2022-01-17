import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { WishListService } from 'src/app/services/wish-list.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  public idArray : any = [];

  addedToWishList: boolean = true;
  addedInWishlist: boolean = false;

    public booklist : any;
  constructor(private api: ApiService,
    private WishListService: WishListService
    ) {   }

  ngOnInit(): void {
    this.api.getTotalBooks()
    .subscribe(res=>{
      this.booklist = res;
      console.log(this.booklist);
    })

    this.WishListService.getWishListItems().subscribe(res=>{
      for(let item of res){
        this.idArray.push(item['bookId']);
      }
    })
    }

    addtowishlist(bookId :any){
      this.WishListService.addtowishlist(bookId).subscribe((resp=>{
      alert("added to cart");
      this.idArray.push(bookId);
      this.WishListService.changeMessage(this.idArray.length);
    }));

    }
   

    removeItem(bookId: any){
      // console.log(this.idArray);
      this.WishListService.addtowishlist(bookId).subscribe(resp=>{
        alert("removed from cart");
        const index=this.idArray.indexOf(bookId);
        if(index>-1){
        this.idArray.splice(index,1);
        // console.log(this.idArray);
        this.WishListService.changeMessage(this.idArray.length);
        }
    
    });
    
    }
    
}
