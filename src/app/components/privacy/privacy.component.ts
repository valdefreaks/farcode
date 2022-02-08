import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ROUTE_TO_HOME} from '../../utils/common-contanst';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss'],
})
export class PrivacyComponent implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  navigate(): void {
    const nav = this.router.navigate([ROUTE_TO_HOME]);
  }
}
