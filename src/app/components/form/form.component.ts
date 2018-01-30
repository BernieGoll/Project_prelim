import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'mat-checkbox',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(public router: Router) { }
  

  ngOnInit() {
  }
  @ViewChild("myEmlForm") myEmlForm: NgForm;
  submit() 
  { 
    console.log(this.myEmlForm);
    console.log(this.myEmlForm.value.emailInput);
    console.log(this.myEmlForm.value.password);
    console.log(this.myEmlForm.valid);
    if (this.myEmlForm.valid === false)
    {
      this.router.navigate(['error']);
    }
    
    this.myEmlForm.reset();
  }
  
}
