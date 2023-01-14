import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../validate.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  Name = ""
 Email = ""
  Message = ""
  constructor(private validate:ValidateService) { }

  ngOnInit(): void {
  }
  postmessage(e:any){
    this.validate.savecontactmessage(this.Name,this.Email,this.Message)
    console.log(this.Name,this.Email,this.Message)
  }
}
