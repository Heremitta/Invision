import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public hide = true
  public form: FormGroup

  constructor(private authService:SocialAuthService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('',[
                    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
                    Validators.required]),
      password: new FormControl('',[Validators.required, Validators.pattern("^([a-zA-Z0-9@$!%*#?&.]{6,20})$")]),
      nome: new FormControl('',[Validators.required])
    })
  }

  cadastroComGoogle(){
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
    .then(e=>{
      console.log(e)
    })
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 4000,
     horizontalPosition:'center',
     verticalPosition:'top'
    });
  }
  signUp(){
    if(this.form.valid){
      this.openSnackBar('Formulario está valido!','fechar')
    }else{
      if(this.form.get('nome').hasError('required')){
      this.openSnackBar('O nome precisa ser preenchido!','fechar')
      }
      if(this.form.get('email').hasError('required') && !this.form.get('nome').hasError('required')){
        this.openSnackBar('O email precisa ser preenchido!','fechar')
      }
      if(this.form.get('password').hasError('required') && !this.form.get('email').hasError('required') && !this.form.get('nome').hasError('required')){
      this.openSnackBar('O password precisa ser preenchido!','fechar')
      }
      if(this.form.get('email').hasError('pattern')){
      this.openSnackBar('O email precisa ser um formato de email valido!','fechar')
      }
      if(this.form.get('password').hasError('pattern')){
      this.openSnackBar('O password precisa ter no minimo 6 caracteres!','fechar')
      }
    }
  }
}
