import { Component } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from "rxjs";
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = 'task tracker';
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(
    private uiService: UiService,
    private router: Router
  ) {
    this.subscription = uiService.onToggle().subscribe(value => this.showAddTask = value);
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string): boolean {
    return this.router.url === route;
  }
}
