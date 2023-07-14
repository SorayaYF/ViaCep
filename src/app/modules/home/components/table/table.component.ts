import { Component, Input } from '@angular/core';
import { Address } from '../../models/address';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() address!: Address;
}
