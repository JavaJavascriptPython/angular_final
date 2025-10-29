import { Component, OnInit } from '@angular/core';
import { DataService, CardData } from '../../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cards: CardData[] = [];
  transactions: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.cards = this.dataService.getCardData();
    this.transactions = this.dataService.getTransactions();
  }
}