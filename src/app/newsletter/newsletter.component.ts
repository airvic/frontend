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
