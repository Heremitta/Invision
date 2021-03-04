import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  hide = true
  form: FormGroup

  constructor(private authService:SocialAuthService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('',[
                    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
                    Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }

  entrarComGoogle(){
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
    .then(e=>{
      console.log(e)
    })
  }
  signIn(){
    if(this.form.valid){
      this.openSnackBar('O formulario está válido!', 'fechar')
      return true
    }else{
      if(this.form.get('email').hasError('pattern')){
        this.openSnackBar('Email precisa estar em um formato válido!', 'fechar')
      }
      if(this.form.get('email').hasError('required')){
        this.openSnackBar('Email não pode ser vazio!', 'fechar')
      }
      if(this.form.get('password').hasError('required')){
        this.openSnackBar('Senha não pode ser vazia!', 'fechar')
      }
      return false
    }
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 4000,
     horizontalPosition:'center',
     verticalPosition:'top'
    });
  }
}
