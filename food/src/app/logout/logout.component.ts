import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['/landing'])
  }
}
