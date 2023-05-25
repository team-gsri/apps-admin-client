import { Injectable } from '@angular/core';
import { Joueur } from './joueur';
import { firstValueFrom } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ConfigurationService } from '../configuration/configuration.service';
import { MessageService } from '../messages/message.service';

@Injectable({
  providedIn: 'root'
})
export class JoueurService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private configurationService: ConfigurationService) { }

  private async getServiceUrl(): Promise<string> {
    const configuration = await this.configurationService.getConfiguration();
    return configuration.joueursApiUrl;
  }

  async getJoueurs(): Promise<Joueur[]> {
    const url = await this.getServiceUrl();
    return await firstValueFrom(this.http.get<Joueur[]>(url));
  }

  async getJoueur(id: string): Promise<Joueur> {
    const url = `${await this.getServiceUrl()}/${id}`;
    return await firstValueFrom(this.http.get<Joueur>(url));
  }

  async add(joueur: Joueur): Promise<Joueur> {
    try {
      return await firstValueFrom(this.http.post<Joueur>(await this.getServiceUrl(), joueur));
    } catch (exception) {
      if (exception instanceof HttpErrorResponse) {
        this.messageService.add(exception.error);
      }
      throw exception;
    }
  }

  async delete(id: string): Promise<Joueur> {
    const url = `${await this.getServiceUrl()}/${id}`;
    return await firstValueFrom(this.http.delete<Joueur>(url, this.httpOptions));
  }
}
