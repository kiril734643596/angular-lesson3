import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lesson03 } from './lesson03';

describe('Lesson03', () => {
  let component: Lesson03;
  let fixture: ComponentFixture<Lesson03>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson03],
    }).compileComponents();

    fixture = TestBed.createComponent(Lesson03);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
