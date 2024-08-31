import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private _formBuilder=inject(FormBuilder);
  form!:FormGroup;
  usuarioLocalStorage?:any;
  correcto:boolean=false;
  usuario={
    email:"",
    nombre:"",
    password:""
  }
  constructor(){
    this.initForm();
    localStorage.setItem("usuario", JSON.stringify({
      email:"vmtdev@mail.com",
      nombre:"DevBootCamp",
      password:"0123456."
    }))
  }
  initForm(){
    this.form=this._formBuilder.group(
      {
        nombre:["",[Validators.required]],
        email:["",[Validators.required, Validators.pattern("[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}")]],
        password:["",[Validators.required]],
      }
    )
  }
  getInvalid(argument:string){
    return this.form.get(argument)?.invalid && this.form.get(argument)?.touched
  }
  getUsuario(){
    let variable:any;
    if(localStorage.getItem("usuario")!=null){
      variable=localStorage.getItem("usuario");
    }
    this.usuarioLocalStorage=JSON.parse(variable);
  }
  guardar(){
    
    if(this.form.invalid){
      return;

    }
    this.getUsuario()
    console.log(this.usuarioLocalStorage)
    console.log(this.usuario)
    console.log(this.validacion())
    if(this.validacion()){
      this.correcto=true;
      return;
    }
    console.log("correto")
  }
  validacion(){
    this.getUsuario()
    let validado:boolean=true;
    if(this.usuarioLocalStorage.email===this.usuario.email ){
      if(this.usuarioLocalStorage.usuario===this.usuario.nombre ){
        if(this.usuarioLocalStorage.password===this.usuario.password){
          validado=false  ;
        }
      }
    }
    return validado;
  }
}
