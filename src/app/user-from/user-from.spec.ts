import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFrom } from './user-from';

describe('UserFrom', () => {
  let component: UserFrom;
  let fixture: ComponentFixture<UserFrom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserFrom],
    }).compileComponents();

    fixture = TestBed.createComponent(UserFrom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('requires a username', () => {
    const nameControl = component.userForm.controls.name;

    expect(nameControl.hasError('required')).toBe(true);
    nameControl.setValue('Samira');
    expect(nameControl.valid).toBe(true);
  });

  it('limits the password to 8 characters', () => {
    const passwordControl = component.userForm.controls.password;

    passwordControl.setValue('12345678');
    expect(passwordControl.valid).toBe(true);
    passwordControl.setValue('123456789');
    expect(passwordControl.hasError('maxlength')).toBe(true);
  });

  it('shows that a valid form is ready but is not permanently saved', () => {
    component.userForm.setValue({
      name: 'Samira',
      email: 'samira@example.com',
      password: '12345678',
    });

    component.onSubmit();

    expect(component.submitMessage).toContain('Formulaire validé');
    expect(component.submitMessage).toContain('backend');
  });

  it('does not show a success message for an invalid form', () => {
    component.onSubmit();

    expect(component.submitMessage).toBe('');
    expect(component.userForm.controls.name.touched).toBe(true);
  });
});
