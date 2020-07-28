import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginClientePage } from './login-cliente.page';

describe('LoginClientePage', () => {
  let component: LoginClientePage;
  let fixture: ComponentFixture<LoginClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginClientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
