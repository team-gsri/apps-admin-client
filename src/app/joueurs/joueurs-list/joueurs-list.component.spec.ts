import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JoueursListComponent } from './joueurs-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('JoueursComponent', () => {
  let component: JoueursListComponent;
  let fixture: ComponentFixture<JoueursListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoueursListComponent, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(JoueursListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
