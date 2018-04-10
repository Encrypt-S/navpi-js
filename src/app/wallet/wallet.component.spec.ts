import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WalletComponent} from './wallet.component';
import {HeaderMockComponent} from '../shared-ui/ui/components/header/mocks/header.component.mock';
import {WalletService} from '../services/wallet/wallet.service';
import {WalletServiceStub} from '../services/wallet/wallet.service.stub';

describe('WalletComponent', () => {
  let component: WalletComponent;
  let fixture: ComponentFixture<WalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: WalletService, useClass: WalletServiceStub}
      ],
      declarations: [
        WalletComponent,
        HeaderMockComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
