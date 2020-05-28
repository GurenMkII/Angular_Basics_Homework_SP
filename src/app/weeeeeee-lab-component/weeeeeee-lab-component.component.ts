import { Component, OnInit } from '@angular/core';
import { WorkService } from '../work.service';
import { Person } from '../person';

@Component({
  selector: 'app-weeeeeee-lab-component',
  templateUrl: './weeeeeee-lab-component.component.html',
  styleUrls: ['./weeeeeee-lab-component.component.css']
})
export class WeeeeeeeLabComponentComponent implements OnInit {

  personFirstName: string;
  personLastName: string;
  
  constructor(private workService: WorkService) {
    
  }
  
  ngOnInit(): void {
    this.workService.getPerson().subscribe((item)=>{
      this.personFirstName = item.getFirstName();
    });
    this.workService.getPerson().subscribe((item)=>{
      this.personLastName = item.getLastName();
    });
    
  }
  
  

}
