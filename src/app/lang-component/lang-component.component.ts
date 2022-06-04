import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lang-component',
  templateUrl: './lang-component.component.html',
  styleUrls: ['./lang-component.component.css']
})
export class LangComponentComponent implements OnInit {
 //  @Input:()
   devName?:string="";
   
  constructor() { }

  ngOnInit(): void {
  }

  radiochange(event:any):void{

    this.devName=event.target.value + " developer. That s great";

  }
}
