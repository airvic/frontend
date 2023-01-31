import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { LoaderService } from 'loader/loader.service';
import { DatabaseComponent } from '../database/database.component';
import { FetchService } from '../fetch.service';
import { TrendingComponent } from '../trending/trending.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  title = "Brivima"
  opened = false;
  gottrending!: boolean;
 static sp:boolean;
sp = true

  content = false;



  sidenav(event:any){
     this.opened =  !this.opened
  }
  
  constructor(private fetch:FetchService,public loaderService:LoaderService) {
    
  }


  


  ngOnInit(): void {
  
  }


}

