import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {

  firstName:string = 'Иванов';
  lastName:string = 'Иван';
  middleName:string = 'Иванович';
  organization:string = 'ООО "Ромашки"';
  department:string = 'Главное отделение';
  position:string = 'Эксперт';
  email:string = 'ivan.ivanov@romashki.com';
  phone:string = '+380443456789';

  constructor() { }

  ngOnInit(): void {
  }

}
