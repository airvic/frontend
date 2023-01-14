import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  parentData: any;
  author:any;
  image1:any;
  image2:any;
  image3:any;
   content2:any;
   content3:any;
      title:any;
  description:any;
  _id:any;
  _title:any;
     content:any;
     websitename = "Brivima"
     opened = false;
     gottrending!: boolean;
   Data:any = [];
     
 //  @Input() public parentData: any;
 constructor(private fetch:FetchService,
             private router:Router,private route : ActivatedRoute) { }
            
             sidenav(event:any){
                this.opened =  !this.opened
             }
 ngOnInit(): void {

   this._id = this.route.snapshot.params['id']
  this._title = this.route.snapshot.params['title']
   this.getexplore(this._title,this._id);
}
 
getexplore(_title:any,_id:any){
  
   this.fetch.getexplore(_id,_title).subscribe(data=>{
    this.Data.push(data)
   })

}




}
