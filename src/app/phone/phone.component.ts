import { Component } from '@angular/core';
import { Product } from '../core/model/product';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent {
  ListProduct :Product[]= [
    {id :1, title :'tv 1 ', price:2000 ,quantity:10 , like:0 , image: '../../assets/iphone.jpg'},
    {id :2 ,title :'tv 1 ',price:2000 ,quantity:10 , like:0 , image: '../../assets/iphone.jpg'},
    {id :3 ,title:'tv 1 ',price:2000 ,quantity:10 , like:0 , image: '../../assets/iphone.jpg'}
   
     ]
     afterRecieveData(t:any){
      t= t.like++ ;
     t.like= t;
  
  
    }
}
