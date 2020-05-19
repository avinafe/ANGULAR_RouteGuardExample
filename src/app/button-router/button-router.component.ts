import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-router',
  templateUrl: './button-router.component.html',
  styleUrls: ['./button-router.component.css'],
})
export class ButtonRouterComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  getClassObject(state) {
    return {
      active: this.router.url === state,
    };
  }
  redirectoTo(path) {
    this.router.navigate([path]);
  }
}
