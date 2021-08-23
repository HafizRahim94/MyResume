import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  Name:string = "Hafizuddin Rahim";
  constructor() { }
  DateDisplay = "";
  DateHide = false;
  DisplayDate = ()=>{
    this.DateDisplay = new Date().toString();
    if(this.DateHide == true){
      this.DateHide = false;
    }
    else
    {
      this.DateHide = true; 
    }

    
  };
  // HideDate = ()=>{
  //   this.DateHide = false;
  //   console.log('Click Hide Date');
  // };
  ngOnInit(): void {
  }

}
