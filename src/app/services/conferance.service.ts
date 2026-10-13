import { Injectable } from '@angular/core';

export interface Conferance {
  id: number;
  name: string;
  date: string;
  place: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConferanceService {
  private readonly conferances: Conferance[] = [
    { id: 1, name: 'angular', date: '2023-01-01', place: 'tunis' },
    { id: 2, name: 'react', date: '2023-02-01', place: 'sfax' },
    { id: 3, name: 'vue', date: '2023-03-01', place: 'sousse' }
  ];

  getAll(): Conferance[] {
    return this.conferances;
  }

  getById(id: number): Conferance | undefined {
    return this.conferances.find(conferance => conferance.id === id);
  }
}
