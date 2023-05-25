import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JoueursDetailsComponent } from './joueurs-details.component';

describe('JoueursDetailsComponent', () => {
  let component: JoueursDetailsComponent;
  let fixture: ComponentFixture<JoueursDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoueursDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JoueursDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
