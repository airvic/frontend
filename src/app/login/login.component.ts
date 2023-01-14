import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../validate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  
   Password = ""
   Username = ""
  constructor(private validate:ValidateService) { }

  ngOnInit(): void {
  
  } 

   login(e:any){
  this.validate.getlogin(this.Username,this.Password);
   }


   //if is get the true response from the server i will setloggin(true)
}
