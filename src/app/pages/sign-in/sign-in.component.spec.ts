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

  beforeEach(async () => {
    let spy
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule,MatSnackBarModule, ReactiveFormsModule],
      declarations: [ SignInComponent ],
      providers:[{ provide: SocialAuthService, useValue: spy }, SlickCarouselComponent]
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
});
