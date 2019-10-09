import { Component, OnInit } from '@angular/core';
import { Personal} from '../personal';
import{Educate} from '../educate';
import{DataService} from '../data.service';
import{Search} from '../search'

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  per:Personal[]=[];
  new1:Personal;
  name:string;
  dob:string;
  address:string;
  phone:number;
  id:number;
  name1:string;
  ser:Search[]=[];
  see:Search;
  se1:string;


  constructor(private svc:DataService) { }

  ngOnInit() {
    this.per=this.svc.per;
  }
 del(){
   this.new1=new Personal(this.name,this.dob,this.address,this.phone,this.id);
   this.svc.dell(this.new1);

 }
 search(){
   this.see=new Search(this.se1);
   this.new1=new Personal(this.name,this.dob,this.address,this.phone,this.id);
   this.svc.search1(this.see,this.new1);
  

 }
}
