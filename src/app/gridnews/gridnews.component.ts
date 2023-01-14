import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';
import { FirebasecrudService } from '../firebasecrud.service';
import { ValidateService } from '../validate.service';

@Component({
  selector: 'app-gridnews',
  templateUrl: './gridnews.component.html',
  styleUrls: ['./gridnews.component.css']
})
export class GridnewsComponent implements OnInit {

  constructor(private fetch:FetchService,private firebasecrude:FirebasecrudService,private validate:ValidateService) { }
  post:any = [];
  Post:any = []
  Fpost:any = []
  firebase:any = []
  gottrending!: boolean;
  ngOnInit(): void {
    this.getgridnews();
    this.firebasecrude.getpost().subscribe(fpost =>{
    console.log(fpost)
    this.Fpost = fpost
    })

  }
  getgridnews(){
    this.validate.getallfashion().subscribe(gridnews =>{
    
    this.post = gridnews;
    console.log("grid section post"+this.post)
  //  console.log('grid post = ' + this.Post) 
   })
}
fetchfromfirebase(id:any){
  console.log( "firebase post id" + id)
}

}
