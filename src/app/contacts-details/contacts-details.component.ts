import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-contacts-details',
  templateUrl: './contacts-details.component.html',
  styleUrls: ['./contacts-details.component.css']
})
export class ContactsDetailsComponent implements OnInit {
  id = 0;
  name = '';
  phoneNumber = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = parseInt(params.get('id'));
      this.name = params.get('name');
      this.phoneNumber = params.get('phoneNumber');
    });
  }

}
