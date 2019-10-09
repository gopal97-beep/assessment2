import { Component, OnInit } from '@angular/core';
import { Personal} from '../personal';
import{Educate} from '../educate';
import{DataService} from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name:string;
    dob:string;
    address:string;
    phone:number;
    degree:string;
    marks:number;
    stream:string;
    college:string;
    per:Personal[]=[];
    edu:Educate[]=[];
    newper:Personal;
    newedu:Educate;
    id:number;
    id1:number;

  constructor(private svc:DataService) { }

  ngOnInit() {
  }
  createemp1(){
    this.newper=new Personal(this.name,this.dob,this.address,this.phone,this.id);
    this.svc.create1(this.newper);
   


  }
  createemp2(){
    this.newedu=new Educate(this.degree,this.marks,this.stream,this.college,this.id1);
    this.svc.create2(this.newedu);
  }

}
