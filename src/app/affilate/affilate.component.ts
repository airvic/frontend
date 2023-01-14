import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../validate.service';

@Component({
  selector: 'app-affilate',
  templateUrl: './affilate.component.html',
  styleUrls: ['./affilate.component.css']
})
export class AffilateComponent implements OnInit {

  Affilate:any  = []
  constructor(private val:ValidateService) { }

  ngOnInit(): void {
  this.affilate()
  }

affilate(){
  this.val.getaffilate().subscribe(affilate =>{
    
    this.Affilate = affilate;
    console.log("affilate links "+this.Affilate)
  //  console.log('grid post = ' + this.Post) 
   })
}
 
}
