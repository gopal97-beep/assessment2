import { Component, OnInit } from '@angular/core';
import { Personal} from '../personal';
import{Educate} from '../educate';
import{DataService} from '../data.service';

@Component({
  selector: 'app-educational',
  templateUrl: './educational.component.html',
  styleUrls: ['./educational.component.css']
})
export class EducationalComponent implements OnInit {
  edu:Educate[]=[];

  constructor(private svc:DataService) { }

  ngOnInit() {
    this.edu=this.svc.edu;

  }

}
