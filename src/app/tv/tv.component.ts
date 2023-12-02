import { Component, ViewChild } from '@angular/core';
import { Product } from '../core/model/product';
import { ShowOneProductComponent } from '../show-one-product/show-one-product.component';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent {
  ListProduct :Product[]= [
 {id :1, title :'tv 1 ', price:2000 ,quantity:10 , like:0 , image: '../../assets/img.jpg'},
 {id :2 ,title :'tv 1 ',price:2000 ,quantity:10 , like:0 , image: '../../assets/img.jpg'},
 {id :3 ,title:'tv 1 ',price:2000 ,quantity:10 , like:0 , image: '../../assets/img.jpg'}

  ]
  
  afterRecieveData(t:any){
    t= t.like++ ;
   t.like= t;
  }
  @ViewChild(ShowOneProductComponent) child:any;
  affichemsg(){
this.child.showtschild();
  }
}

