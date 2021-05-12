import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-state',
  templateUrl: './second-state.component.html',
  styleUrls: ['./second-state.component.scss']
})
export class SecondStateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  stateList = [
    {id:'1', name:"Neetu" , state:"Rajasthan"},
    {id:'2', name:"Reetu" , state:"Karnataka"},
    {id:'3', name:"Priya" , state:"Karnataka"},
    {id:'4', name:"Seema" , state:"Karnataka"},
    {id:'5', name:"Shilpa" , state:"Karnataka"},
    {id:'6', name:"Ketki" , state:"Rajasthan"},
    {id:'7', name:"Anu" , state:"Rajasthan"},
    {id:'8', name:"Pooja" , state:"Goa"},
    {id:'9', name:"Shina" , state:"Karnataka"}
]
}
