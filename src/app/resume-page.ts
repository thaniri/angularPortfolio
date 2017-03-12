import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'resume-page',
  templateUrl: './resume-page.html',
})

export default class ResumePage {

  constructor(private route: ActivatedRoute) {}

}