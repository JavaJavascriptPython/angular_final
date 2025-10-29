import { Injectable } from '@angular/core';

export interface CardData {
  title: string;
  value: string;
  growth: string;
  positive: boolean;
  icon: string;
}

export interface Transaction {
  id: string;
  customer: string;
  date: string;
  amount: string;
  status: 'active' | 'pending' | 'inactive';
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getCardData(): CardData[] {
    return [
      {
        title: 'Total Revenue',
        value: '$24,580',
        growth: '12.5% from last month',
        positive: true,
        icon: 'fas fa-dollar-sign'
      },
      {
        title: 'New Users',
        value: '1,248',
        growth: '8.2% from last month',
        positive: true,
        icon: 'fas fa-users'
      },
      {
        title: 'Orders',
        value: '356',
        growth: '3.4% from last month',
        positive: false,
        icon: 'fas fa-shopping-bag'
      },
      {
        title: 'Conversion Rate',
        value: '4.8%',
        growth: '1.2% from last month',
        positive: true,
        icon: 'fas fa-percentage'
      }
    ];
  }

  getTransactions(): Transaction[] {
    return [
      {
        id: '#TRX-7812',
        customer: 'John Smith',
        date: 'Jun 12, 2023',
        amount: '$248.00',
        status: 'active'
      },
      {
        id: '#TRX-7811',
        customer: 'Sarah Johnson',
        date: 'Jun 11, 2023',
        amount: '$189.50',
        status: 'pending'
      },
      {
        id: '#TRX-7810',
        customer: 'Michael Brown',
        date: 'Jun 10, 2023',
        amount: '$420.00',
        status: 'active'
      },
      {
        id: '#TRX-7809',
        customer: 'Emily Davis',
        date: 'Jun 9, 2023',
        amount: '$312.75',
        status: 'inactive'
      },
      {
        id: '#TRX-7808',
        customer: 'Robert Wilson',
        date: 'Jun 8, 2023',
        amount: '$156.20',
        status: 'active'
      }
    ];
  }
}