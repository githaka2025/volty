import bcrypt from 'bcryptjs';

export async function generateHash(string: string) {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(string, salt);
  return hash;
}
