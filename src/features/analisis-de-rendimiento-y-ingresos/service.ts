// Implementación de análisis de rendimiento
import { PrismaClient } from '@prisma/client';
import type { PaginatedResponse, User } from '@/shared/types/index.ts';

const prisma = new PrismaClient();

export async function getPerformanceData(page: number, pageSize: number): Promise<PaginatedResponse<PerformanceData>> {
  try {
    const total = await prisma.reservation.count();
    const data = await prisma.reservation.findMany({
      skip: (page - 1) * pageSize,
      take: pageSize,
      include: {
        user: true,
        instructor: true,
      },
    });

    return {
      data,
      total,
      page,
      pageSize,
      success: true,
      error: null,
    };
  } catch (error) {
    console.error(error);
    return {
      data: [],
      total: 0,
      page,
      pageSize,
      success: false,
      error: 'Error al obtener los datos de rendimiento',
    };
  }
}

interface PerformanceData {
  id: string;
  user: User;
  instructor: User;
  createdAt: Date;
}