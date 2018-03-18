import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common'; 
import { Holiday } from '../../models/Holiday';
import {HolidayService} from '../../services/data.service';
 
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  posts:Holiday[];
  passName:string;
  constructor(
    private route:ActivatedRoute,
    private location:Location,
    private dataService:HolidayService
  ){}
  ngOnInit() {
    
    this.dataService.getAll().subscribe((post)=>{
      //console.log(post);
      this.posts=post;
      this.passName=this.route.snapshot.paramMap.get('name');      
      console.log("This is the value passed: "+ this.passName);
      
    })
  }
  // ngOnInit() {
  //   const name=this.route.snapshot.paramMap.get('name');
  //   console.log("This is the value passed: "+name);
  //   // Make API call
  //   this.dataService.getAll(name).subscribe((post)=>{this.post=post})
    
  //   //console.log(this.post);
  //   }
}
