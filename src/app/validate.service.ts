import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { Observable } from 'rxjs';

interface Obj {
  success: boolean;
  user:string;
  token:string;
  msg: string;
}
@Injectable({
  providedIn: 'root'
})
export class ValidateService {
 

  constructor(private http : HttpClient,
              private router:Router,
              private auth :AuthGuard) { }

  getlogin(Username:any,Password:any){
     return this.http.post<Obj>('https://brivimaapi.onrender.com/login',{
     Username,Password
    }).subscribe(data =>{ 
      console.log(data)
   if(data.success){
     this.auth.storeUserData(data.token,data.user);
     this.router.navigate(['admin'])
   }else{
    this.router.navigate([''])
   }
      
    })

  }
 
  savecontactmessage(name:any,email:any,message:any){
    return this.http.post('https://brivimaapi.onrender.com/contactmessage', {
      name,email,message
    }).subscribe(res =>{
      if(res == true){
        window.alert('Thank for your message we get back to you as soon as possible')
        this.router.navigate([''])
      }else{
        window.alert('error sending message!!')
      }
    })
  }

  // test(){
  //   return this.http.get('/api/test').subscribe(data =>{
  //     console.log(data)
  //   })
  // }
  postarticle(title:any,author:any,description:any,image1:any,image2:any,image3:any,category:any,content:any,content2:any,content3:any){
    return this.http.post('https://brivimaapi.onrender.com/savepost',{
      title,author,description,image1,image2,image3,category,content,content2,content3
    })
  }
  postsport(title:any,author:any,description:any,image1:any,image2:any,image3:any,category:any,content:any,content2:any,content3:any){
    return this.http.post('https://brivimaapi.onrender.com/savesport',{
      title,author,description,image1,image2,image3,category,content,content2,content3
    })
  }
  postfashion(title:any,author:any,description:any,image1:any,image2:any,image3:any,category:any,content:any,content2:any,content3:any){
    return this.http.post('https://brivimaapi.onrender.com/savefashion',{
      title,author,description,image1,image2,image3,category,content,content2,content3
    })
  }
  postpolitics(title:any,author:any,description:any,image1:any,image2:any,image3:any,category:any,content:any,content2:any,content3:any){
    return this.http.post('https://brivimaapi.onrender.com/savepolitics',{
      title,author,description,image1,image2,image3,category,content,content2,content3
    })
  }
  postcelebrity(title:any,author:any,description:any,image1:any,image2:any,image3:any,category:any,content:any,content2:any,content3:any){
    return this.http.post('https://brivimaapi.onrender.com/savecelebrity',{
      title,author,description,image1,image2,image3,category,content,content2,content3
    })
  }

  postaffilate(link:any){
    return this.http.post('https://brivimaapi.onrender.com/affilate',{
    link
    })
  }
joinnewsletter(personalname:any,email:any){
    return this.http.post('https://brivimaapi.onrender.com/newsletter',{
      personalname,email
  })
  }
  getallpostfromdatabase(){
    return this.http.post('https://brivimaapi.onrender.com/getallpost',{ responseType: 'json'})
  }
  getaffilate(){
    return this.http.post('https://brivimaapi.onrender.com/getaffilate',{ responseType: 'json'})
  }
  getallmessagefromdatabase(){
    return this.http.post('https://brivimaapi.onrender.com/getallmessages',{ responseType: 'json'})
  }
  deletemessgaefromdatabase(id:any){
    return this.http.post('https://brivimaapi.onrender.com/deletemessage',id )
  }

  getallsport(){
    return this.http.post('https://brivimaapi.onrender.com/getallsport',{ responseType: 'test'})
  }
  getallpolitics(){
    return this.http.post('https://brivimaapi.onrender.com/getallpolitics',{ responseType: 'test'})
  }
  getallfashion(){
    return this.http.post('https://brivimaapi.onrender.com/getallfashion',{ responseType: 'test'})
  }
  getallcelerity(){
    return this.http.post('https://brivimaapi.onrender.com/getallcelebrity',{ responseType: 'test'})
  }

  deletepostfromdatabase(title:any){
    return this.http.post('https://brivimaapi.onrender.com/deletepost',{
      title
    })
  }
}
