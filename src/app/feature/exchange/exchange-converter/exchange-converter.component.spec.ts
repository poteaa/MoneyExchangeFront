import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeConverterComponent } from './exchange-converter.component';

describe('ExchangeConverterComponent', () => {
  let component: ExchangeConverterComponent;
  let fixture: ComponentFixture<ExchangeConverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExchangeConverterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
