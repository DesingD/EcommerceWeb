import { isValidEmail } from './emailValidate';

describe('isValidEmail', () => {
  it('should return true for valid email addresses', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('user.name@domain.co')).toBe(true);
    expect(isValidEmail('user_name@sub.domain.org')).toBe(true);
    expect(isValidEmail('"user.name"@example.com')).toBe(true);
    expect(isValidEmail('"quoted@local.part"@example.com')).toBe(true);
  });

  it('should return false for invalid email addresses', () => {
    expect(isValidEmail('test@')).toBe(false);
    expect(isValidEmail('@example.com')).toBe(false);
    expect(isValidEmail('test@domain')).toBe(false);
    expect(isValidEmail('test@domain..com')).toBe(false);
    expect(isValidEmail('test@domain.')).toBe(false);
    expect(isValidEmail('test@.com')).toBe(false);
  });
});