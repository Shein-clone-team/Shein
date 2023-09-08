import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

//componentes de angular materia
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ComponentsModule } from './components/components.module';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { ShopComponent } from './pages/shop/shop.component';
import { LoginComponent } from './auth/page/login/login.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthRegisterComponent } from './auth/page/Registro/auth-register/auth-register.component';
import { environment } from 'src/environments/environment';
import { HomepageComponent } from './pages/homepage/homepage.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    ImageSliderComponent,
    ShopComponent,
    LoginComponent,
    AuthRegisterComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }
