import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-book-title',
  templateUrl: './book-title.component.html',
  styleUrls: ['./book-title.component.scss']
})
export class BookTitleComponent implements OnInit {

  public particularBook:any;
  bookId;

  constructor(private serv:ApiService,private route: ActivatedRoute,) {
    this.bookId = this.route.snapshot.paramMap.get('id');
    console.log("from constructor"+this.bookId)

   }

  ngOnInit(): void {
  this.bookDetails(this.bookId)
  }

  bookDetails(id:any){
    this.serv.bookDetails(id).subscribe((res=>{
       this.particularBook=res;
       console.log("from function"+JSON.stringify(this.particularBook))
    }))
  }
}
