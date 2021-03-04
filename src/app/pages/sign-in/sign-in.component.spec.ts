import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { SocialAuthService } from 'angularx-social-login';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

import { SignInComponent } from './sign-in.component';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;
  let SocialAuth: SocialAuthService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule,MatSnackBarModule, ReactiveFormsModule],
      declarations: [ SignInComponent ],
      providers:[{ provide: SocialAuthService, useValue: SocialAuth }, SlickCarouselComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('O componente Sign In deve existir!', () => {
    expect(component).toBeTruthy();
  });

  it('Formulario deve ser valido', ()=>{
    component.form.get('email').setValue('sauloramosjunior@hotmail.com')
    component.form.get('password').setValue('abcd1234')
    expect(component.form.valid).toBeTruthy()
  })
  it('Formulario deve ser invalido devido ao email fora de padrao', ()=>{
    component.form.get('email').setValue('hotmail.comsauloramosjunior@')
    component.form.get('password').setValue('abcd1234')
    expect(component.form.valid).toBeFalsy()
  })
  it('Formulario deve ser invalido devido ao email em branco', ()=>{
    component.form.get('email').setValue('')
    component.form.get('password').setValue('abcd1234')
    expect(component.form.valid).toBeFalsy()
  })
  it('Formulario deve ser invalido devido ao password em branco', ()=>{
    component.form.get('email').setValue('sauloramosjunior@hotmail.com')
    component.form.get('password').setValue('')
    expect(component.form.valid).toBeFalsy()
  })

});
