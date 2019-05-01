import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule} from '@angular/common';
import {ContactsComponent} from './contacts.component';

const routeConfig: Routes = [
    {path:'contacts', component: ContactsComponent}
];

@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(routeConfig)
    ],
    declarations:[ContactsComponent]
})

export class ContactsModule {}
