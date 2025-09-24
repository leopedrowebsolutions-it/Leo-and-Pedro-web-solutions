import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootonContactanosComponent } from './booton-contactanos.component';

describe('BootonContactanosComponent', () => {
  let component: BootonContactanosComponent;
  let fixture: ComponentFixture<BootonContactanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BootonContactanosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootonContactanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
