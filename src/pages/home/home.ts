import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormControl, FormBuilder,Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


////////////////////////////////////////////////////////////////
export class HomePage {
  user = {
    skills: {

    }

  }

  userFG: FormGroup;
  skills: FormGroup;


 constructor(public navCtrl: NavController,private fb:FormBuilder) {
    this.userFG = new FormGroup({
     /*  username: new FormControl(' null'),
      name: new FormControl('null'),
      password: new FormControl('null'),
 */
skills: new FormGroup({
  type: new FormControl(''),
  level: new FormControl('')
      })
      })


  this.userFG = this.fb.group({

    name: new FormControl('', Validators.compose([
      Validators.required,
      Validators.maxLength(50),
      Validators.minLength(2),
      Validators.required
    ])),

    username: new FormControl('', Validators.compose([
      Validators.required,
      Validators.maxLength(8),
      Validators.minLength(2),
      Validators.required
    ])),

    password: new FormControl('', Validators.compose([
      Validators.required,
      Validators.maxLength(8),
      Validators.minLength(6),
      Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
      Validators.required
    ])),

    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])),

    skills:this.fb.group({
      type: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(8),
        Validators.minLength(2),
        Validators.required
      ])),
      level: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(1),
        Validators.required
      ])),
    }),

    })

   }

  submit() {
    console.log(this.user);

  }

  formSubmit({value,valid}:{value:User,valid:boolean}) {
    console.log(value);
    console.log(valid);
   
  }

}

export interface User{
  name:string;
  username:string;
  email:string;
  password:string;
  skills:{
    type:string
    level:number
  }
}
