// Implementación del servicio de autenticación
import { User } from '@/shared/types';
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export async function createUser(email: string, name: string, role: User['role']): Promise<User> {
  const user = await prisma.user.create({
    data: { email, name, role }
  });
  return user;
}

export async function getUserByEmail(email: string): Promise<User | null> {
  const user = await prisma.user.findUnique({ where: { email } });
  return user;
}