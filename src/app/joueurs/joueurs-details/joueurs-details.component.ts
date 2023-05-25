import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Joueur } from '../joueur';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { JoueurService } from '../joueur.service';

@Component({
  selector: 'gsri-admin-joueurs-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './joueurs-details.component.html',
  styleUrls: ['./joueurs-details.component.scss'],
})
export class JoueursDetailsComponent implements OnInit {

  private activatedRoute = inject(ActivatedRoute);

  public joueur?: Joueur;

  constructor(
    private joueurService: JoueurService,
    private location: Location
  ) { }

  async ngOnInit(): Promise<void> {
    const id = this.activatedRoute.snapshot.paramMap.get('id') ?? '';
    this.joueur = await this.joueurService.getJoueur(id);
  }

  goBack(): void {
    this.location.back();
  }
}
