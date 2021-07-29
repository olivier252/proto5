import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

// Components
import { ZoneUtilityComponent } from './utilities/zone-utility/zone-utility.component';

// Material module
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';

// Others modules
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZoneDetailComponent } from './utilities/zone-detail/zone-detail.component';
import { FocusDirective } from './directives/focus.directive';
import { StockSheetComponent } from './general/stock-sheet/stock-sheet.component';
import { PictureModelComponent } from './general/picture-model/picture-model.component';

@NgModule({
  declarations: [
    AppComponent,

    // Custom components
    LayoutComponent,
    ZoneUtilityComponent,
    ZoneDetailComponent,
    FocusDirective,
    StockSheetComponent,
    PictureModelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Material module
    MatSidenavModule,
    MatButtonModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,

    // Others modules
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
