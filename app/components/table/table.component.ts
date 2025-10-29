import { Component, Input } from '@angular/core';
import { Transaction } from '../../services/data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() transactions: Transaction[] = [];
  @Input() title = 'Recent Transactions';

  getStatusClass(status: string): string {
    switch (status) {
      case 'active': return 'status status-active';
      case 'pending': return 'status status-pending';
      case 'inactive': return 'status status-inactive';
      default: return 'status';
    }
  }

  getStatusText(status: string): string {
    switch (status) {
      case 'active': return 'Completed';
      case 'pending': return 'Pending';
      case 'inactive': return 'Cancelled';
      default: return status;
    }
  }
}