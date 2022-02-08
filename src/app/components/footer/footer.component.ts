import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ROUTE_TO_PRIVACY} from '../../utils/common-contanst';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  currentYear: number;
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    const date = new Date();
    this.currentYear = date.getFullYear();
  }

  navigate(): void {
    const nav = this.router.navigate([ROUTE_TO_PRIVACY]);
  }
}
