import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesInternosComponent } from './reportes-internos.component';

describe('ReportesInternosComponent', () => {
  let component: ReportesInternosComponent;
  let fixture: ComponentFixture<ReportesInternosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportesInternosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportesInternosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
