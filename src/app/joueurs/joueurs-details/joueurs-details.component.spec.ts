import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JoueursDetailsComponent } from './joueurs-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('JoueursDetailsComponent', () => {
  let component: JoueursDetailsComponent;
  let fixture: ComponentFixture<JoueursDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        JoueursDetailsComponent,
        HttpClientTestingModule,
        RouterTestingModule
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(JoueursDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
