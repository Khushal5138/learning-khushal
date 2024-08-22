import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SqureService } from '../squre.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css'
})
export class DynamicFormComponent {

  contactForm : FormGroup;
  result : any = 1000;
  constructor(private formBuilder: FormBuilder , public squareServiceOb : SqureService,){

    // this.result = console.log(squareServiceOb.doSquare(4));

    this.contactForm = this.formBuilder.group({

      fullName : [""],
      email : [""],
      message : [""],

    });

  }

  onSubmit(){

    console.log("Your form data : ", this.contactForm.value);
  }



}
