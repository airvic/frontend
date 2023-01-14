import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchService {

public detials: any

  constructor(private http:HttpClient,
              private router:Router) { }
  gettrending(){
    
    return this.http.post('https://brivimaapi.onrender.com/trending',{ responseType: 'application/json'});
    
    
  }
  getnewsletter(){
    return this.http.post('https://brivimaapi.onrender.com/getnewsletter',{ responseType: 'application/json'});
  }
  geteverything(){
    
    return this.http.post('https://brivimaapi.onrender.com/everything',{ responseType: 'application/json'});
    
    
  }
  
  getsport(){
    
    return this.http.post('https://brivimaapi.onrender.com/sport',{ responseType: 'application/json'});
    
    
  }

  getgridnews(){
    return this.http.post('https://brivimaapi.onrender.com/grid',{ responseType: 'application/json'});
  }
  getexplore(_id:any,_title:any){
    return this.http.post('https://brivimaapi.onrender.com/explore',{
      _id,_title
    })
  }
 
  getsinglepage(title:any,author:any,description:any,url:any){
    return this.http.post('https://brivimaapi.onrender.com/singlepage',{
      title,author,description,url
    })
  }
  getsinglepagefromdatabase(_id:any){
    console.log(_id)
    return this.http.post('https://brivimaapi.onrender.com/singlepagefromdatabase',{
    _id
    })
    
  }
  getsinglecelebrity(_id:any){
    console.log(_id)
    return this.http.post('https://brivimaapi.onrender.com/singlecelebrity',{
     _id
    })
    
  }
  getsinglesport(_id:any){
    console.log(_id)
    return this.http.post('https://brivimaapi.onrender.com/singlesport',{
     _id
        })
    
  }
  getsidefromdatabase(){
    
    return this.http.post('https://brivimaapi.onrender.com/getgridfromdatabase',{ responseType: 'application/json'})
    
  }
 

}
