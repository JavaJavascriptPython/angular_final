import { Component, Input } from '@angular/core';
import { CardData } from '../../services/data.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input() cards: CardData[] = [];
  @Input() bigCard = false;
}