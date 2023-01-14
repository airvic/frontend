import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/compat/storage';


@Injectable({
  providedIn: 'root'
})
export class FirebasecrudService {

  constructor(public firestore : AngularFirestore) { }
  getpost(){
    return this.firestore.collection('posts').valueChanges();
  }
  addnewpost(Record:any){
  return this.firestore.collection('posts').add(Record)
}

getsingledoc(uid:any){
  console.log(uid)
//  return  this.firestore.collection.('posts').document(uid)
}
// updatepost(postid:string , payload:post){
//   return this.firestore.doc('posts/' + postid).update(payload);
// }
// deletepost(postid:string){
//   return this.firestore.doc('posts/' + postid).delete()
// }
}
export interface post{
  title:String,
  image1:String,
  image2:string,
  image3:string,
  description: String,
  author:String,
  content:String,
  content2:string,
  content3:string,
  category:String,
}