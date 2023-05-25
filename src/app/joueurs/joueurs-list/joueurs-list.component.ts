import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JoueursDetailsComponent } from '../joueurs-details/joueurs-details.component';
import { Joueur } from '../joueur';
import { JoueurService } from '../joueur.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'gsri-admin-joueurs-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    JoueursDetailsComponent
  ],
  templateUrl: './joueurs-list.component.html',
  styleUrls: ['./joueurs-list.component.scss'],
})
export class JoueursComponent implements OnInit {

  joueurs: Joueur[] = [];

  current?: Joueur;

  constructor(
    private joueurService: JoueurService) { }

  async ngOnInit(): Promise<void> {
    this.joueurs = await this.joueurService.getJoueurs();
  }

  async add(pseudonyme: string): Promise<void> {
    pseudonyme = pseudonyme.trim();
    if (!pseudonyme) { return; }
    const created = await this.joueurService.add({ pseudonyme } as Joueur);
    this.joueurs.push(created);
  }

  async delete(joueur: Joueur): Promise<void> {
    this.joueurs = this.joueurs.filter(item => item !== joueur);
    await this.joueurService.delete(joueur.pseudonyme);
  }
}
