import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ConferanceService } from '../services/conferance.service';

@Component({
  selector: 'app-conferance-details',
  imports: [RouterLink],
  templateUrl: './conferance-details.html',
  styleUrl: './conferance-details.css'
})
export class ConferanceDetails {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly conferanceService = inject(ConferanceService);

  readonly id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  readonly conferance = this.conferanceService.getById(this.id);
}
