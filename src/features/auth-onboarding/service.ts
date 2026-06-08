// Implementación del servicio de autenticación
import { User } from '@/shared/types';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createUser(email: string, name: string, role: 'admin' | 'user'): Promise<User> {
  const user = await prisma.user.create({
    data: { email, name, role }
  });
  return user;
}

export async function getUserByEmail(email: string): Promise<User | null> {
  const user = await prisma.user.findUnique({ where: { email } });
  return user;
}