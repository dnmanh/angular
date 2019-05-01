import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule} from '@angular/common';
import { ContactsModule} from './contacts/contacts.module';

import { ContactsDetailsComponent } from './contacts-details/contacts-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'details/:id/:name/:phoneNumber', component:ContactsDetailsComponent},
  {path:'', redirectTo: '/contacts', pathMatch:'full'},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  declarations:[
    ContactsDetailsComponent,
    PageNotFoundComponent
  ],
  imports: [ContactsModule, RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
