import { TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    }).compileComponents();
  });

  it('should return an array of CSS classes with "storybook-button--primary"', () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    const component = fixture.componentInstance;

    component.primary = true;

    expect(component.classes).toEqual(['storybook-button', 'storybook-button--medium', 'storybook-button--primary']);
  });

  it('should return an array of CSS classes with "storybook-button--secondary"', () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    const component = fixture.componentInstance;

    expect(component.classes).toEqual(['storybook-button', 'storybook-button--medium', 'storybook-button--secondary']);
  });

  it('should match with the snapshot', () => {
    const fixture = TestBed.createComponent(ButtonComponent);

    expect(fixture).toMatchSnapshot();
  });
});
