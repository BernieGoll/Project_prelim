import { Component, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  @ViewChild("myEmlForm") myEmlForm: NgForm;
submit() 
{ 
  console.log(this.myEmlForm);
  console.log(this.myEmlForm.value.emailInput);
  console.log(this.myEmlForm.value.password);
  
  this.myEmlForm.reset();
}

}

