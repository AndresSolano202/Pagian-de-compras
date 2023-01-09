
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pagcarrito',
  templateUrl: './pagcarrito.component.html',
  styleUrls: ['./pagcarrito.component.css']
})
export class PagcarritoComponent implements OnInit {

  constructor(private router: Router){}

  resultado:any;
  resultado2:any;
  resultado3:any;
  resultado4:any;
  resultado5:any;
  resultado6:any;
  resultado7:any;
  resultado8:any;

  ngOnInit():void{
    
    

    //localStorage.clear()
  }


  pagar()
  {
    this.resultado=localStorage.getItem('valor1')
    this.resultado2=localStorage.getItem('valor2')
    this.resultado3=localStorage.getItem('valor3')
    this.resultado4=localStorage.getItem('valor4')
    this.resultado5=localStorage.getItem('valor5')
    this.resultado6=localStorage.getItem('valor6')
    this.resultado7=localStorage.getItem('valor7')
    this.resultado8=localStorage.getItem('valor8')
    
    
  }

  home()
  {
    this.router.navigate(['pagP'])
  }



}
