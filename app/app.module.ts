import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
// import { FormsModule } from "@angular/forms";
import { DashboardModule } from "./dashboard/dashboard.module";

// Routing
import { appRouting } from "./app.routing";

// Components
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { NotFoundComponent } from "./not-found/not-found.component";

@NgModule({
  imports: [
    BrowserModule,
    // FormsModule,
    // for lazy loading - about
    /* AboutModule,*/
    DashboardModule,
    appRouting
  ],
  declarations: [
    AppComponent, 
    HomeComponent, 
    ContactComponent,
    NotFoundComponent
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
