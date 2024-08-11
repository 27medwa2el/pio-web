import { Component } from '@angular/core';

@Component({
  selector: 'app-additional-tables',
  templateUrl: './additional-tables.component.html',
  styleUrl: './additional-tables.component.scss'
})
export class AdditionalTablesComponent {
  currentTab: string = 'tab1';

  changeTab(tab: string): void {
    this.currentTab = tab
  }
}
