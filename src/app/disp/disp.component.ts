import { Component, OnInit } from '@angular/core';
import { Personal} from '../personal';
import{Educate} from '../educate';
import{DataService} from '../data.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-disp',
  templateUrl: './disp.component.html',
  styleUrls: ['./disp.component.css']
})
export class DispComponent implements OnInit {
  per:Personal[]=[]

  constructor(private svc :DataService) { }

  ngOnInit() {
    this.per=this.svc.per;
    
  }

}
