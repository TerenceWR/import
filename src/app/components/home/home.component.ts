import { Component, OnInit } from '@angular/core';
import {HolidayService} from '../../services/data.service';
import {Holiday} from '../../models/holiday';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts:Holiday[];
  
 constructor(private dataService:HolidayService) { }

  ngOnInit() {
    
    this.dataService.getAll().subscribe((post)=>{
      console.log(post);
      this.posts=post;
      
    })
  }

}

