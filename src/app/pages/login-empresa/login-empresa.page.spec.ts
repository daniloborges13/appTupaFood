import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginEmpresaPage } from './login-empresa.page';

describe('LoginEmpresaPage', () => {
  let component: LoginEmpresaPage;
  let fixture: ComponentFixture<LoginEmpresaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginEmpresaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginEmpresaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
