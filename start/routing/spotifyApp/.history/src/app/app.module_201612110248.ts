
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { LocationStrategy,HashLocationStrategy,PathLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component.ts';

import { SearchComponent } from './searchComponent/search.component';
import { SearchResult } from './searchResult/search-result.component';
import { ImageComponent } from './searchResult/image.component';
import { AlbumDetailsComponent } from './searchResult/album-details.component.ts';
import { CaptionComponent } from './searchResult/caption.component';
import { AttributionComponent } from './searchResult/attribution.component.ts';
import { TrackComponent } from './searchResult/track.component';

import { MainRoutes } from './routes/main';
import { SPOTIFY_PROVIDERS } from './services/spotify.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductComponent,
    SearchComponent,
    SearchResult,
    ImageComponent,
    AlbumDetailsComponent,
    CaptionComponent,
    AttributionComponent,
    TrackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    /**
     *  The RouterModule.forRoot(routes). RouterModule.forRoot(routes) is a
     *  function that will take our routes, configure the router, and return a list of dependencies
     *  like RouteRegistry, Location, and several other classes that are necessary to make routing work.
     *  */
    RouterModule.forRoot(MainRoutes)
  ],
  providers: [
       /**
        * The default strategy is PathLocationStrategy, which is what we call HTML5 routing. While using this strategy, routes are represented by regular paths, like /home or /contact.
          We can change the location strategy used for our application by binding the LocationStrategy class to a new, concrete strategy class.
          Instead of using the default PathLocationStrategy we can also use the HashLocationStrategy.
          The reason we’re using the hash strategy as a default is because if we were using HTML5 routing, our URLs would end up being regular paths (that is, not using hash/anchor tags).
                  */
       //{provide:LocationStrategy,useClass:HashLocationStrategy},//hastag
       {provide:LocationStrategy,useClass:PathLocationStrategy},//html5
       SPOTIFY_PROVIDERS

       //{ provide: APP_BASE_HREF, useValue: '/' } //configures basepath <--- this right here
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
