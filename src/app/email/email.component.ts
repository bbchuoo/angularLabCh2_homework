import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  title = 'homework2';
  router;
  regions = [{ name: '台中' }, { name: '台北' }, { name: '台南' }];
  value: string;
  recipients = [];
  recipient;
  add;
  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit() {

  }

  addRecipient() {
    this.recipients.push(this.add);
    this.add = '';
  }

  onChange($event) {
    this.value = $event;
    console.log(this.value);
  }

  deleteRecipient() {
    this.recipients = [];
  }

  send() {

    this.router.navigate(['send'], { queryParams: { city: this.value } });

  }
}
