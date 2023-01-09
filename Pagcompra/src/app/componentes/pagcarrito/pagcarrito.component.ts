
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pagcarrito',
  templateUrl: './pagcarrito.component.html',
  styleUrls: ['./pagcarrito.component.css']
})
export class PagcarritoComponent implements OnInit {

  constructor(private router: Router){}

  p1: any;
  p2: any;
  p3: any;
  p4: any;
  p5: any;
  p6: any;
  p7: any;
  p8: any;

  resultado:any;
  resultado2:any;
  resultado3:any;
  resultado4:any;
  resultado5:any;
  resultado6:any;
  resultado7:any;
  resultado8:any;

  ngOnInit():void{
    
    this.resultado=localStorage.getItem('valor1');
    this.resultado2=localStorage.getItem('valor2');
    this.resultado3=localStorage.getItem('valor3');
    this.resultado4=localStorage.getItem('valor4');
    this.resultado5=localStorage.getItem('valor5');
    this.resultado6=localStorage.getItem('valor6');
    this.resultado7=localStorage.getItem('valor7');
    this.resultado8=localStorage.getItem('valor8');  

    this.p1 = localStorage.getItem('p1')
    this.p2 = localStorage.getItem('p2')
    this.p3 = localStorage.getItem('p3')
    this.p4 = localStorage.getItem('p4')
    this.p5 = localStorage.getItem('p5')
    this.p6 = localStorage.getItem('p6')
    this.p7 = localStorage.getItem('p7')
    this.p8 = localStorage.getItem('p8')

    //localStorage.clear()
  }


  home()
  {
    this.router.navigate(['pagP'])
  }



}
