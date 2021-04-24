import { NgModule } from '@angular/core';
import { ModulesRoutingModule } from './modules-routing.module';
import { HomeComponent } from './home/home.component';
import { ModulesComponent } from './modules.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  

@NgModule({
  declarations: [
    HomeComponent,
    ModulesComponent,
    ManageProductsComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ModulesRoutingModule
  ]
})
export class ModulesModule { }
