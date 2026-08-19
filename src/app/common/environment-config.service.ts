import {inject, Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentConfigService {
  private readonly http = inject(HttpClient)
  private env : Record<string, string> = {
    API_URL: ''
  };

  load() {
    return this.http.get<Record<string, string>>('/assets/env.json').pipe(
      tap((data: any) => {
        this.env = data;
        if (!this.env?.["CRUD_URL"]) {
          console.warn('⚠️ Warning: CRUD_URL is not defined in env.json');
        }
        if (!this.env?.["GRID_URL"]) {
          console.warn('⚠️ Warning: GRID_UR is not defined in env.json');
        }
        if (!this.env?.["WORKFLOW_URL"]) {
          console.warn('⚠️ Warning: WORKFLOW_URL is not defined in env.json');
        }
      })
    )
  }

  get(key: string): string {
    return this.env?.[key] ?? '';
  }
}

