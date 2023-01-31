import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../validate.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {
  Name:any = ''
  Email:any = ''

  constructor( private validate:ValidateService) { }
  

  ngOnInit(): void {
  }

  joinnewsletter(e:any){
    console.log(this.Name)
    if(this.Name === undefined || this.Email === undefined){
      window.alert('please input your name and email')
    }else{
      this.validate.joinnewsletter(this.Name,this.Email).subscribe(feedback =>{
        if(true){
          window.alert('successfully joined brivima community newsletter')
        }
        else{
          window.alert('error joining newsletter')
        }
      })
  
    }
 
  }

}
