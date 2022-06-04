import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  public langs:string[]=[];
  lang?:string;
  constructor() { }

  ngOnInit(): void {
  }

  getLangs(event:any):void{
      this.langs.push();
      
  }



  
}
