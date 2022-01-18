import { hashSync } from 'bcrypt';

export function encrypt(value: string): string {
  return hashSync(value, 10);
}
