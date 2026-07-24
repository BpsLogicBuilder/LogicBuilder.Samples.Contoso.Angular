import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlsService {

  constructor() { }

  crudUrl: string = 'http://localhost:5000';
  gridUrl: string = 'http://localhost:5002';
  workflowUrl: string = 'http://localhost:5004';
}
