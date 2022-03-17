import bcrypt from "bcrypt";

export const encryptPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

export const comparePassword = async (
  passwordFound: string,
  passwordHash: string
): Promise<boolean> => {
  return await bcrypt.compare(passwordFound, passwordHash);
};
