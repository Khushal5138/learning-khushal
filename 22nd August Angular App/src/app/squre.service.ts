import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SqureService {

  constructor() { }

  doSquare( no : number){

    return "Square service found that the square of " + no + " is : " + no * no;
  }
}
