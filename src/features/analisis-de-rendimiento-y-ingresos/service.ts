// Implementación de análisis de rendimiento
import type { PaginatedResponse, User } from '@/shared/types/index.ts';

const performanceData: PerformanceData[] = [];

export async function getPerformanceData(page: number, pageSize: number): Promise<PaginatedResponse<PerformanceData>> {
  try {
    const skip = (page - 1) * pageSize;
    const total = performanceData.length;
    const data = performanceData.slice(skip, skip + pageSize);

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