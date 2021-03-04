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
});
