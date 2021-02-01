import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CanActivateViaAuthGuard } from './auth/bz-can-activate-auth';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginService } from './services/login.service';
import { JobsComponent } from './components/jobs/jobs.component';
import { LoginComponent } from './components/login/login.component';
import { MeComponent } from './components/me/me.component';
import { JobsService } from './services/jobs.service';
import { MANAGER_INITIAL_STATE, ROOT_REDUCER } from './store/store';
import { effects } from './store/effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { RestApiInterceptorService } from './auth/rest-api-interceptor.service';
import { ProfileMeService } from './services/me.service';
import { HeaderComponent } from './components/header/header.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    MeComponent,
    LoginComponent,
    JobsComponent,
    HeaderComponent
  ],
  imports: [  
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    
    StoreModule.forRoot(ROOT_REDUCER, {
      initialState: MANAGER_INITIAL_STATE
    }),
    EffectsModule.forRoot([...effects]),
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyBpGtPx9OHPPlo2X1y-Up_tjUs1zNeIZV0'
    // }),
    AgmCoreModule.forRoot(
      {
        apiKey: 'AIzaSyBpGtPx9OHPPlo2X1y-Up_tjUs1zNeIZV0',
        libraries: ['places']
      }
    ),
  ],
  providers: [CanActivateViaAuthGuard, LoginService, JobsService, CookieService,ProfileMeService,
    { provide: HTTP_INTERCEPTORS, useClass: RestApiInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
