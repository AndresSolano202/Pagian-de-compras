import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagcompra',
  templateUrl: './pagcompra.component.html',
  styleUrls: ['./pagcompra.component.css']
})
export class PagcompraComponent implements OnInit {

  carro: number=0;
  
  p1: number=75;
  p2: number=980;
  p3: number=980;
  p4: number=1299;
  p5: number=179;
  p6: number=1790;
  p7: number=1818;
  p8: number=1299;

  ngOnInit():void{
    
    //localStorage.clear()
    localStorage.clear()
    
  }

  producto1()
  {
    localStorage.setItem('p1', this.p1.toString())
    this.carro=+Number(this.p1)
  }

  producto2()
  {
    localStorage.setItem('p2', this.p2.toString())
  }

  producto3()
  {
    localStorage.setItem('p3', this.p3.toString())
  }

  producto4()
  {
    localStorage.setItem('p4', this.p4.toString())
  }

  producto5()
  {
    localStorage.setItem('p5', this.p5.toString())
  }

  producto6()
  {
    localStorage.setItem('p6', this.p6.toString())
  }

  producto7()
  {
    localStorage.setItem('p7', this.p7.toString())
  }

  producto8()
  {
    localStorage.setItem('p8', this.p8.toString())
  }
  
  carrito()
  {
    this.carro=Number(this.p1)+Number(this.p2)+Number(this.p3)+Number(this.p4)+Number(this.p5)+Number(this.p6)+Number(this.p7)+Number(this.p8)
  }
  
}


