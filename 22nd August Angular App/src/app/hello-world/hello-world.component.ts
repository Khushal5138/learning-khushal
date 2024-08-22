import { Component } from '@angular/core';

@Component({
  selector: 'whateverIwant',
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.css'
})
export class HelloWorldComponent {

  msg : string;
  students : string[];
  showMsg : boolean;
  constructor(){

    this.msg = "Angular is inferior to React :   facebook>>>>>>>>>>>>>>>>> goo(Gone)le";
    this.students = ["Khushal" , "Madhan" , "Revanth" , "Dhanush"];
    this.showMsg = true;

  }

  sayHello() : void {
    alert("Congrats! Angular is trash!");
  }

  toggle() : void {
    this.showMsg = !this.showMsg;
  }

}
