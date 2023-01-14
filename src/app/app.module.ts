import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { FooterComponent } from './footer/footer.component';
import { TrendingComponent } from './trending/trending.component';
import {MatListModule} from '@angular/material/list';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FetchService } from './fetch.service';
import { SportComponent } from './sport/sport.component';
import { GridnewsComponent } from './gridnews/gridnews.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { InterceptorService } from 'loader/interceptor.service';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { DatabaseComponent } from './database/database.component';
import { FormsModule } from '@angular/forms';
import { ValidateService } from './validate.service';
import { AuthGuard } from './auth.guard';
import { RouterModule} from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { ExploreComponent } from './explore/explore.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import { AngularFireStorageModule ,AngularFireStorage} from '@angular/fire/compat/storage';
// import { AngularFireDatabase } from "@angular/fire/compat/database";
import { environment } from 'src/environments/environment';
import { FirebasecrudService} from './firebasecrud.service';
import { ReadDetailsComponent } from './read-details/read-details.component';
import { ReadComponent } from './read/read.component';

import { AffilateComponent } from './affilate/affilate.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    TrendingComponent,
    SportComponent,
    GridnewsComponent,
    AdminComponent,
    LoginComponent,
    DatabaseComponent,
    ContactusComponent,
    PrivacypolicyComponent,
    ExploreComponent,
    PagenotfoundComponent,
    NewsletterComponent,
    ReadDetailsComponent,
    ReadComponent,
    AffilateComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    // AngularFireDatabase,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    HttpClientModule,
    MatProgressBarModule,
    FormsModule,
    MatTabsModule,
    RouterModule
  ],
  // ,{provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true}
  providers: [FetchService,ValidateService,AuthGuard,FirebasecrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
