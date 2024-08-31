import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalpersonasComponent } from './modalpersonas.component';

describe('ModalpersonasComponent', () => {
  let component: ModalpersonasComponent;
  let fixture: ComponentFixture<ModalpersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalpersonasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalpersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
