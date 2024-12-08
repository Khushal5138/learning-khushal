import { Component } from '@angular/core';

@Component({
  selector: 'app-formsexample',
  templateUrl: './formsexample.component.html',
  styleUrl: './formsexample.component.css'
})
export class FormsexampleComponent {


  username : string;
  email : string;

  constructor(){

    this.username = "";
    this.email = "";
  }

  onSubmit(khushal : any){

    console.log(khushal.value);
    this.username = khushal.value.username;
    this.email = khushal.value.email;
  }

}
