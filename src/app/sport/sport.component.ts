import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';
import { Router } from '@angular/router';
import { ValidateService } from '../validate.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {

  constructor(private fetch:FetchService,private router:Router,private validate:ValidateService) { }
  post:any = [];
  Post:any = [];
  Side:any = []
  newgrid:any = []
  database:any = []
  Grid:any=[];
  detials:any = []
  gottrending!: boolean;
  ngOnInit(): void {
  this.getgridfromdatabase();
  
  }
//   getsport(){
//     this.fetch.getsport().subscribe(sport =>{
    
//     this.post = sport;
//    this.Post = this.post.articles
//    if(this.Post == undefined){
//     console.log("slow network detected");
    
//   }else{
//     console.log(this.Post);
    
//   }
  

    
    
//    })
// }
//politics or celebrity news
// getgridnews(){
//   this.fetch.getgridnews().subscribe(grid =>{
//     this.Grid = grid
//     this.newgrid = this.Grid.articles
//     if(this.newgrid == undefined){
//       console.log("slow network detected please check internet connection");
      
//     }else{
//       console.log(this.newgrid);
      
//     }

//   })
// }
getgridfromdatabase(){
  this.validate.getallfashion().subscribe(side =>{
    this.Side = side
  })
}
fetchnewsfromdatabase(_id:any){
  this.fetch.getsinglepagefromdatabase(_id).subscribe(feedback=>{
    this.database.push(feedback)
    console.log(_id)
    this.router.navigate(['explore'],{state:{data:this.database}})
  
})  
}

// fetchnews(title:any,author:any,description:any,url:any){
//   this.fetch.getsinglepage(title,author,description,url).subscribe(detial=>{
//     this.detials.push(detial)
//     this.router.navigate(['explore'],{state:{data:this.detials}})
  
// })  
//   }
}