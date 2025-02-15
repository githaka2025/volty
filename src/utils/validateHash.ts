import bcrypt from 'bcryptjs';

export async function validateHash(
  string: string,
  hash: string
): Promise<boolean> {
  const result = await bcrypt.compare(string, hash);
  return result;
}
