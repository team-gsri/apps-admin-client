import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Configuration } from './configuration';
import { firstValueFrom, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  private configurationUrl = '/assets/config.json';
  private configuration?: Configuration;
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  async getConfiguration(): Promise<Configuration> {
    this.configuration ??= await firstValueFrom(this.http.get<Configuration>(this.configurationUrl, this.httpOptions));
    return this.configuration ?? throwError(() => new Error('Impossible de lire la confguration'));
  }
}
