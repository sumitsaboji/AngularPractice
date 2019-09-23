import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientOneComponent } from './client-one.component';

describe('ClientOneComponent', () => {
  let component: ClientOneComponent;
  let fixture: ComponentFixture<ClientOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
