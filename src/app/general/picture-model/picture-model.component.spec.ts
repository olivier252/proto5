import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureModelComponent } from './picture-model.component';

describe('PictureModelComponent', () => {
  let component: PictureModelComponent;
  let fixture: ComponentFixture<PictureModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PictureModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
