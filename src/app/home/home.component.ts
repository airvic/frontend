import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { FetchService } from '../fetch.service';


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
  


  sidenav(event:any){
     this.opened =  !this.opened
  }
  
  constructor(private fetch:FetchService) {
    
  }


  


  ngOnInit(): void {
  

  
  }

}
