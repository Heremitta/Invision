import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PrincipalComponent } from './principal.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SocialAuthService } from 'angularx-social-login';
import * as JQuery from 'jquery'

describe('PrincipalComponent', () => {
  let component: PrincipalComponent;
  let fixture: ComponentFixture<PrincipalComponent>;

  beforeEach(async () => {
    let spy
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule,MatSnackBarModule, ReactiveFormsModule, SlickCarouselModule],
      declarations: [ PrincipalComponent ],
      providers:[{ provide: SocialAuthService, useValue: spy }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Componente Principal deve existir!', () => {
    expect(component).toBeTruthy();
  });
});
