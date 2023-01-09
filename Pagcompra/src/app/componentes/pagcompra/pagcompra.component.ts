import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pagcompra',
  templateUrl: './pagcompra.component.html',
  styleUrls: ['./pagcompra.component.css']
})
export class PagcompraComponent implements OnInit {

  
  constructor(private router: Router){}


  user: any;


  p1: number=0;
  p2: number=0;
  p3: number=0;
  p4: number=0;
  p5: number=0;
  p6: number=0;
  p7: number=0;
  p8: number=0;

  precio1:number=0;
  precio2:number=0;
  precio3:number=0;
  precio4:number=0;
  precio5:number=0;
  precio6:number=0;
  precio7:number=0;
  precio8:number=0;

  total:number=this.p1+this.p2+this.p3+this.p4+this.p5+this.p6+this.p7+this.p8;
  suma:number=0;

  totalpaga:any;
  r:number=0;
  resultado:any;
  resultado2:any;
  resultado3:any;
  resultado4:any;
  resultado5:any;
  resultado6:any;
  resultado7:any;
  resultado8:any;

  ngOnInit():void{
    this.datos()
    this.p1;
    this.p2;
    this.p3;
    this.p4;
    this.p5;
    this.p6;
    this.p7;
    this.p8;
    this.precio1;
    this.precio2;
    this.precio3;
    this.precio4;
    this.precio5;
    this.precio6;
    this.precio7;
    this.precio8;
    this.total;
    this.r

    this.produc1;
    this.produc2;
    this.produc3;
    this.produc4;
    this.produc5;
    this.produc6;
    this.produc7;
    this.produc8;

    this.pagar;

    localStorage.clear()
  }

  produc1()
  {
    localStorage.setItem('valor1', this.precio1.toString())
    localStorage.setItem('p1', this.p1.toString())
  }

  produc2()
  {
    localStorage.setItem('valor2', this.precio2.toString())
    localStorage.setItem('p2', this.p2.toString())
  }

  produc3()
  {
    localStorage.setItem('valor3', this.precio3.toString())
    localStorage.setItem('p3', this.p3.toString())
  }

  produc4()
  {
    localStorage.setItem('valor4', this.precio4.toString())
    localStorage.setItem('p4', this.p4.toString())
  }

  produc5()
  {
    localStorage.setItem('valor5', this.precio5.toString())
    localStorage.setItem('p5', this.p5.toString())
  }

  produc6()
  {
    localStorage.setItem('valor6', this.precio6.toString())
    localStorage.setItem('p6', this.p6.toString())
  }

  produc7()
  {
    localStorage.setItem('valor7', this.precio7.toString())
    localStorage.setItem('p7', this.p7.toString())
  }

  produc8()
  {
    localStorage.setItem('valor8', this.precio8.toString())
    localStorage.setItem('p8', this.p8.toString())
  }


  nav()
  {
    this.router.navigate(['pagC'])
    
    localStorage.setItem('valor1', this.precio1.toString())
    localStorage.setItem('p1', this.p1.toString())

    localStorage.setItem('valor2', this.precio2.toString())
    localStorage.setItem('p2', this.p2.toString())

    localStorage.setItem('valor3', this.precio3.toString())
    localStorage.setItem('p3', this.p3.toString())

    localStorage.setItem('valor4', this.precio4.toString())
    localStorage.setItem('p4', this.p4.toString())

    localStorage.setItem('valor5', this.precio5.toString())
    localStorage.setItem('p5', this.p5.toString())

    localStorage.setItem('valor6', this.precio6.toString())
    localStorage.setItem('p6', this.p6.toString())

    localStorage.setItem('valor7', this.precio7.toString())
    localStorage.setItem('p7', this.p7.toString())

    localStorage.setItem('valor8', this.precio8.toString())
    localStorage.setItem('p8', this.p8.toString())
  }

  log()
  {
    this.router.navigate([''])
  }

  pagar()
  {
    this.resultado=localStorage.getItem('valor1');
    this.resultado2=localStorage.getItem('valor2');
    this.resultado3=localStorage.getItem('valor3');
    this.resultado4=localStorage.getItem('valor4');
    this.resultado5=localStorage.getItem('valor5');
    this.resultado6=localStorage.getItem('valor6');
    this.resultado7=localStorage.getItem('valor7');
    this.resultado8=localStorage.getItem('valor8');
    
    this.r=Number(this.resultado)+Number(this.resultado2)+Number(this.resultado3)+Number(this.resultado4)+Number(this.resultado5)
    +Number(this.resultado6)+Number(this.resultado7)+Number(this.resultado8)
  }

  datos()
  {
    this.user = localStorage.getItem('user');
  }

  
  
}


