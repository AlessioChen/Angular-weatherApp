import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeContainerComponent } from './home-container/home-container.component';
import { HomeListComponent } from './home-list/home-list.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HomeService } from 'src/app/services/home.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { SearchPipe } from 'src/app/pipes/search.pipe';


@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeListComponent, 
    SearchPipe
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule
  ],
  providers: [HomeService]
})

export class HomeModule { }
