import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { SocialAuthService } from 'angularx-social-login';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule,MatSnackBarModule, ReactiveFormsModule],
      declarations: [ SignUpComponent ],
      providers:[{ provide: SocialAuthService, useValue: spy }, SlickCarouselComponent]
    })
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Componente Sign Up deve existir!', () => {
    expect(component).toBeTruthy();
  });

  it('Formulario deve ser valido', ()=>{
    component.form.get('nome').setValue('saulo')
    component.form.get('email').setValue('sauloramosjunior@hotmail.com')
    component.form.get('password').setValue('abcd1234')
    expect(component.form.valid).toBeTruthy()
  })
  it('Formulario deve ser invalido devido ao email fora de padrao', ()=>{
    component.form.get('nome').setValue('saulo')
    component.form.get('email').setValue('hotmail.comsauloramosjunior@')
    component.form.get('password').setValue('abcd1234')
    expect(component.form.valid).toBeFalsy()
  })
  it('Formulario deve ser invalido devido ao nome em branco', ()=>{
    component.form.get('nome').setValue('')
    component.form.get('email').setValue('sauloramosjunior@hotmail.com')
    component.form.get('password').setValue('abcd1234')
    expect(component.form.valid).toBeFalsy()
  })
  it('Formulario deve ser invalido devido ao email em branco', ()=>{
    component.form.get('nome').setValue('saulo')
    component.form.get('email').setValue('')
    component.form.get('password').setValue('abcd1234')
    expect(component.form.valid).toBeFalsy()
  })
  it('Formulario deve ser invalido devido ao password em branco', ()=>{
    component.form.get('nome').setValue('saulo')
    component.form.get('email').setValue('sauloramosjunior@hotmail.com')
    component.form.get('password').setValue('')
    expect(component.form.valid).toBeFalsy()
  })
  it('Formulario deve ser invalido devido ao password ter menos de 6 digitos', ()=>{
    component.form.get('nome').setValue('saulo')
    component.form.get('email').setValue('sauloramosjunior@hotmail.com')
    component.form.get('password').setValue('123ab')
    expect(component.form.valid).toBeFalsy()
  })
});
