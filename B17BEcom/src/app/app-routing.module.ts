import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { WishListComponent } from './components/wish-list/wish-list.component';

const routes: Routes = [

  {
    path:'', component: BookListComponent
  },
  {
    path:'wishlist/:id', component: WishListComponent
  },
  {
    path:'allbooks', component: BookListComponent
  },
  {
    path:'wishlist', component: WishListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
