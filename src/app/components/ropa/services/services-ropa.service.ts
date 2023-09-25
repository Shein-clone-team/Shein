import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServicesRopaService {
  private readonly URL = environment.api;

  constructor() {}
}
