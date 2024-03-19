import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  personDetails: FormGroup;
  container = document.getElementById('container');
  output;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.personDetails = new FormGroup({
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      email: new FormControl(null),
      phnNumber: new FormControl(null),
      dateOfBirth: new FormControl(null),
      section:new FormControl(null),
      elements:this.formBuilder.array([])
      
    })
    
  //   this.personDetails = this.formBuilder.group({
  //   eleClass: new FormArray([this.createItem()])
  // })
    
  }

  // createItem(): FormGroup {
  //   return this.formBuilder.group({
  //     class: [],
     
  //   })
  // }
  onSubmit(val){
    this.personDetails.get('name')
    console.log("onSubmit",val);
  }

  getValue(val){
  console.log(val)
  }

 get elements(){
  return  this.personDetails.get('elements') as FormArray;

  }

  addInfo(){
    this.elements.push(this.formBuilder.group({
      class:'',
      section:''
    }))
  }
}


