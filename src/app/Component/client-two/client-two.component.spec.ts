import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientTwoComponent } from './client-two.component';

describe('ClientTwoComponent', () => {
  let component: ClientTwoComponent;
  let fixture: ComponentFixture<ClientTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
