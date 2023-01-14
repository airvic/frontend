import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }   
  authtoken:any;
  user:any;
   
  // private loggedinstatus = JSON.parse(localStorage.getItem('loggedin') || 'false')
 constructor(private http:HttpClient,
             private router:Router){


 }

  setlogin(value:boolean){
 
  }
  // tokenNotExpired(){
  //   const jwtService: JwtHelperService = new JwtHelperService();
  //   const item: string = jwtService.tokenGetter();
  //   return item != null && !jwtService.isTokenExpired(item);
  // }
  loggedIn(){  
    if (localStorage.getItem('brivima_blog_token') === '' ||
        localStorage.getItem('brivima_blog_token') === null ||
        localStorage.getItem('brivima_blog_token') === undefined) {
      return false;
    } else {
         this.authtoken = localStorage.getItem('brivima_blog_token');
       if(this.authtoken){
         console.log(this.authtoken)
         return true
       }else{
         return false
       }
      
    }
  }

  getisloggedin(){
    const token = localStorage.getItem('brivima_blog_token');
    this.authtoken  = token 
  } 
  storeUserData(token:any,user:any){
    localStorage.setItem('user',JSON.stringify(user));
    this.user = user;
       localStorage.setItem('brivima_blog_token',token);
   this.authtoken = token;
  }

  loggout(){
    this.authtoken = null;
    localStorage.clear();
    this.router.navigate([''])
  }


}
