import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { FetchService } from '../fetch.service';
import { FirebasecrudService } from '../firebasecrud.service';
import { ValidateService } from '../validate.service';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  title = "";
  link = "";
  description = "";
   author = "";
   image1 = "";
   image2 = "";
   image3 = "";
   content = "";
   content2 = "";
   content3 = "";
   category = "";
  Adminpost:any = []
  Celebrity:any = []
  Politics:any = []
  Sport:any = []
  Fashion:any = []
  Msg:any = []
  Newsletter:any = []
  Fpost:any = []

  constructor(private auth:AuthGuard,
              private validate:ValidateService,
              private fetch:FetchService,
              private firebasecrud:FirebasecrudService,
              private router:Router) { }

  ngOnInit(): void {
  this.loginstatus()
  this.getallpostfromdatabase()
  this.getallcelebrityfromdatabase()
  this.getallfashionfromdatabase()
  this.getallpoliticsfromdatabase()
  this.getallsportfromdatabase()
  this.getnewsletter()
  this.getallmessagefromdatabase()
  // this.getfirebasepost()
  }
  loggout(e:any){
    this.auth.loggout()
  }
  getnewsletter(){
    this.fetch.getnewsletter().subscribe(newsletter =>{
      this.Newsletter = newsletter
    })
  }
  
  Postarticle(e:any){
    this.validate.postarticle(this.title,this.author,this.description,this.image1,this.image2,this.image3,this.category,this.content,this.content2,this.content3).subscribe(response =>{
      
        if(response == true){
          window.alert('succefully posted article')
        }else{
          //console.log('error posting data')
          window.alert('data parsing error')
        }
    })
  }
  Postcelebrity(e:any){
    this.validate.postcelebrity(this.title,this.author,this.description,this.image1,this.image2,this.image3,this.category,this.content,this.content2,this.content3).subscribe(response =>{
        if(response == true){
          window.alert('succefully posted celebrity')
        }else{
          //console.log('error posting data')
          window.alert('data parsing error')
        }
    })
  }
  Postsport(e:any){
    this.validate.postsport(this.title,this.author,this.description,this.image1,this.image2,this.image3,this.category,this.content,this.content2,this.content3).subscribe(response =>{
        if(response == true){
          window.alert('succefully posted sport')
        }else{
          //console.log('error posting data')
          window.alert('data parsing error')
        }
    })
  }
  Postpolitics(e:any){
    this.validate.postpolitics(this.title,this.author,this.description,this.image1,this.image2,this.image3,this.category,this.content,this.content2,this.content3).subscribe(response =>{
        if(response == true){
          window.alert('succefully posted politics')
        }else{
          //console.log('error posting data')
          window.alert('data parsing error')
        }
    })
  }
  Postfashion(e:any){
    this.validate.postfashion(this.title,this.author,this.description,this.image1,this.image2,this.image3,this.category,this.content,this.content2,this.content3).subscribe(response =>{
        if(response == true){
          window.alert('succefully posted fashion')
        }else{
          //console.log('error posting data')
          window.alert('data parsing error')
        }
    })
  }
  affilate(e:any){
    this.validate.postaffilate(this.link).subscribe(linkres =>{
        if(linkres == true){
          window.alert('succefully posted affilate')
        }else{
          //console.log('error posting data')
          window.alert('data parsing error in link')
        }
    })
  }

  getallpostfromdatabase(){
    this.validate.getallpostfromdatabase().subscribe(post=>{
      this.Adminpost = post
      console.log(this.Adminpost)
    })
  }
  getallcelebrityfromdatabase(){
    this.validate.getallcelerity().subscribe(celebrity=>{
      this.Celebrity = celebrity
      console.log(  'celebrity :'+ this.Celebrity)
    })
  }
  
  getallfashionfromdatabase(){
    this.validate.getallfashion().subscribe(fashion=>{
      this.Fashion= fashion
      console.log(  'fahion :'+ this.Fashion)
    })
  }

  getallsportfromdatabase(){
    this.validate.getallcelerity().subscribe(sport=>{
      this.Sport = sport
      console.log(  'sport :'+ this.Sport)
    })
  }

  getallpoliticsfromdatabase(){
    this.validate.getallpolitics().subscribe(politics=>{
      this.Politics  = politics
      console.log(  'politics :'+ this.Politics)
    })
  }
  getallmessagefromdatabase(){
    this.validate.getallmessagefromdatabase().subscribe(msg=>{
   this.Msg = msg;

    })
  }
  delete(title:any){
this.validate.deletepostfromdatabase(title).subscribe(status=>{
  console.log(title)
  if(true){
    console.log('succefully deleted')
  }else{
    console.log('error deleting')
  }
})
  }
  deleteMsg(id:any){
console.log(id)
this.validate.deletemessgaefromdatabase(id).subscribe(result =>{
 if(true){
   console.log('successfully deleted message')
 }else{
   console.log('error deleting message')
 }
})}
Postonfirebase(e:any){
  let Record:any = {};
  Record['title'] = this.title;
  Record['description'] = this.description;
  Record['author'] = this.author;
  Record['image1'] = this.image1;
  Record['image2'] = this.image2;
  Record['image3'] = this.image3;
  Record['content'] = this.content;
  Record['content2'] = this.content2;
  Record['content3'] = this.content3;
  Record['category'] = this.category;
  this.firebasecrud.addnewpost(Record).then(res =>{
  }).catch(error =>{
    console.log(error)
    window.alert(error)
  })
}
getfirebasepost(){
  this.firebasecrud.getpost().subscribe(fpost =>{
    this.Fpost = fpost;
  })
}
loginstatus(){
 if(this.auth.loggedIn()){

   return true
 }else{
  this.router.navigate(['login'])
  return false
 }
}

}
