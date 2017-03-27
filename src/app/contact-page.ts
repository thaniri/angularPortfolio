import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.html',
})

export default class ContactPage {
  constructor(private route: ActivatedRoute) { }
}
