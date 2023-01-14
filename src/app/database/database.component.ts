import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';
import { ValidateService } from '../validate.service';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {
  celeb:any = []
 time = Math.floor(Math.random()*60)
  constructor(private fetch:FetchService,
              private validate:ValidateService) { }

  ngOnInit(): void {
    this.getcelebrity();
  }

 getcelebrity(){
    //mongodb server router
    this.validate.getallcelerity().subscribe(res =>{

      this.celeb = res
        console.log("database section of post :"+res)
    })
  }

}
