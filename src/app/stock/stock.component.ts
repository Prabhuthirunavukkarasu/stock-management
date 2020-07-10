import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  productName: string = "Apple";
  productQuantity: number;
  productRate: number;
  constructor() { }

  ngOnInit(): void {
  }

  addProduct(): void{
    const product = {
      "productName" : this.productName,
      "productQuantity": this.productQuantity,
      "productRate": this.productRate
    };
    console.log(product);
  }

}
