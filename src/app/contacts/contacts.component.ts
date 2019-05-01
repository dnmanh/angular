import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts = [
    {id: 1, name:'Manh', phoneNumber:'+84989599576'},
    {id: 2, name:'Anh', phoneNumber:'+8494824200'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
