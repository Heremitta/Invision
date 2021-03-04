import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule} from 'angularx-social-login';

const googleLoginOptions = {
  scope: 'profile email'
};
  const config :SocialAuthServiceConfig = {
    autoLogin: false,
    providers: [{
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider('576310716061-8j1uv8rv69irhgntfg83m041fhg0kuck.apps.googleusercontent.com', googleLoginOptions)
    }]
  }
export function provideConfig(){
  return config
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SocialLoginModule

  ],
  exports:[],
  providers: [ {
    provide: 'SocialAuthServiceConfig',
    useFactory: provideConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
  title:'Invision'
 }
