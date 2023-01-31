import { Component, OnInit, Output } from '@angular/core';
import { FetchService } from '../fetch.service';
import { Router } from '@angular/router';
import { ValidateService } from '../validate.service';
@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
   detials:any = [];
   database:any = []
   Sport:any = []
   Celebrity:any = []
   image:any = []
   Celeb:any = []

 
  d:any = []

  constructor(private fetch:FetchService,private router:Router,private validate:ValidateService) {
    
 
  }
  fetchnewsfromdatabase(_id:any){
  //   this.fetch.getsinglepagefromdatabase(title,author,description,image).subscribe(feedback=>{
  //     this.database.push(feedback)
  //     this.router.navigate(['explore'],{state:{data:this.database}})
    
  // })  
  this.fetch.getsinglepagefromdatabase(_id).subscribe(feedback=>{
        this.database.push(feedback)
        this.router.navigate(['explore'],{state:{data:this.database}})
      
    })  
  }

  
//   fetchnews(title:any,author:any,description:any,url:any){
//   this.fetch.getsinglepage(title,author,description,url).subscribe(detial=>{
//     this.detials.push(detial)
//     this.router.navigate(['read'],{state:{data:this.detials}})
  
// })  
//   }

show = false
  post:any = [];
  Post:any = []
  result:any = [];
  Result:any = []
  mongo:any = [];
  Mongo:any = []
  Grid:any = []

  gottrending!: boolean;
  ngOnInit(): void {
    this.gettrendingfromserver();
    this.geteverythingfromserver()
    this.getmongodatafromserver();
    this.getsport()
    this.getcelebrity()
  }

  gettrendingfromserver(){
    this.fetch.gettrending().subscribe(trending =>{
      
    this.post = trending;
   this.Post = this.post.articles
   if(this.Post == undefined){
  console.log('slow network detected!');
  // this.fetch.getproxy().subscribe(data=>{
  //   console.log(data);
    
  // })
  
  
  }else{
    // console.log(this.Post);
    
  }
    this.gottrending =true;

   

    
    
   })

 }


 geteverythingfromserver(){
  this.fetch.geteverything().subscribe(everything =>{
    
  this.result = everything;
 this.Result = this.result.articles
 if(this.Result == undefined){
console.log('slow network detected!');
// this.fetch.getproxy().subscribe(data=>{
//   console.log(data);
  
// })


}else{
  // console.log(this.Result);
 
  
}
  this.gottrending =true;
 

  
  
 })
}

getmongodatafromserver(){
  //mongodb server router
  this.validate.getallpostfromdatabase().subscribe(res =>{
      // console.log(res)
      this.Mongo = res
  })
}
getsport(){
  //mongodb server router
  this.validate.getallsport().subscribe(sport =>{
      this.Sport = sport
      // console.log('trending section post: '+sport)
  })
}
getcelebrity(){
  //mongodb server router
  this.validate.getallcelerity().subscribe(celebrity =>{
      // console.log(celebrity)
      this.Celebrity = celebrity
  })
}
fetchnewssport(_id:any){
  this.fetch.getsinglesport(_id).subscribe(sport =>{
    this.Sport.push(sport)
    this.router.navigate(['explore'],{state:{data:this.Sport}})
  })
}
fetchnewscelebrity(_id:any){
this.fetch.getsinglecelebrity(_id).subscribe(celeb =>{
  this.Celeb.push(celeb)
  this.router.navigate(['explore'],{state:{data:this.Celeb}})
})
}
getgrid(){
  this.fetch.getgridnews().subscribe(grid =>{
    this.Grid = grid
    })
}

getmore(title:any,_id:any){
console.log('getting'+title+'/'+_id)
}
}

