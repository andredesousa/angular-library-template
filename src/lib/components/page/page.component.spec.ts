import { TestBed } from '@angular/core/testing';
import { HeaderComponent } from '../header/header.component';
import { PageComponent } from './page.component';

describe('PageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent, PageComponent],
    }).compileComponents();
  });

  it('should set #user to null when #doLogout is called', () => {
    const fixture = TestBed.createComponent(PageComponent);
    const component = fixture.componentInstance;

    component.user = { name: 'Jane Doe' };
    component.doLogout();

    expect(component.user).toEqual(null);
  });

  it('should set #user when #doLogin is called', () => {
    const fixture = TestBed.createComponent(PageComponent);
    const component = fixture.componentInstance;

    component.doLogin();

    expect(component.user).toEqual({ name: 'Jane Doe' });
  });

  it('should set #user when #doCreateAccount is called', () => {
    const fixture = TestBed.createComponent(PageComponent);
    const component = fixture.componentInstance;

    component.doCreateAccount();

    expect(component.user).toEqual({ name: 'Jane Doe' });
  });

  it('should match with the snapshot', () => {
    const fixture = TestBed.createComponent(PageComponent);

    expect(fixture).toMatchSnapshot();
  });
});
