import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConferanceService } from '../services/conferance.service';

@Component({
  selector: 'app-conferance-list',
  imports: [RouterLink],
  templateUrl: './conferance-list.html',
  styleUrl: './conferance-list.css'
})
export class ConferanceList {
  private readonly conferanceService = inject(ConferanceService);
  readonly conferances = this.conferanceService.getAll();

  inc() {
    alert('increment');
  }
}
