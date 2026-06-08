// Implementación del servicio para la onboarding experience 3D
import { User } from '@/shared/types';

export async function createUserOnboarding(user: User): Promise<User> {
  // Lógica para crear el proceso de onboarding 3D
  return user;
}

export async function completeUserOnboarding(userId: string, completed: boolean): Promise<void> {
  // Lógica para marcar la onboarding como completada
}
