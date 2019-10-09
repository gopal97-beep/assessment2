import { Injectable } from '@angular/core';
import { Personal } from './personal';
import { Educate } from './educate';
import {Search} from './search'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  per:Personal[]=[];
  edu:Educate[]=[];
  id:number=1;
  id1:number=1;
  name:string;
  dob:string;
  address:string;
  phone:number;
  see:Search[]=[];
  se1:string;
  se11:Personal[]=[];


  constructor() { }
  create1(a:Personal){
    a.id=this.id;
    ++this.id;
    this.per.push(a);
  }
  create2(b:Educate){
    b.id1=this.id1;
    ++this.id1;
    this.edu.push(b);
  }
  dell(c:Personal){
        c.id=this.id;
        
        this.name="";
        this.dob="";
        this.address="";
        this.phone=null;
        c.id=this.id;
        c.name=this.name;
        c.address=this.address;
        c.dob=this.dob;
        c.phone=this.phone;
        this.per.push(c);
  }
  search1(d:Search,e:Personal){
    if(d.se1==this.name)
    {
      this.se11.push(e);
    }

  }
}
