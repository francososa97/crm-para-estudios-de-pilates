// Implementación de la lógica del servicio para gestionar reservas
import { PrismaClient } from '@prisma/client';
import { ApiResponse, PaginatedResponse } from '@/shared/types';

const prisma = new PrismaClient();

export async function getReservations(page: number, pageSize: number): Promise<PaginatedResponse<Reservation>> {
  const total = await prisma.reservation.count();
  const reservations = await prisma.reservation.findMany({
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  return {
    data: reservations,
    error: null,
    success: true,
    total,
    page,
    pageSize,
  };
}

export async function createReservation(reservationData: ReservationCreateInput): Promise<ApiResponse<Reservation>> {
  try {
    const reservation = await prisma.reservation.create({
      data: reservationData,
    });

    return {
      data: reservation,
      error: null,
      success: true,
    };
  } catch (error) {
    return {
      data: null,
      error: 'Error creating reservation',
      success: false,
    };
  }
}

export async function updateReservation(id: string, reservationData: ReservationUpdateInput): Promise<ApiResponse<Reservation>> {
  try {
    const reservation = await prisma.reservation.update({
      where: { id },
      data: reservationData,
    });

    return {
      data: reservation,
      error: null,
      success: true,
    };
  } catch (error) {
    return {
      data: null,
      error: 'Error updating reservation',
      success: false,
    };
  }
}

export async function deleteReservation(id: string): Promise<ApiResponse<void>> {
  try {
    await prisma.reservation.delete({ where: { id } });

    return {
      data: null,
      error: null,
      success: true,
    };
  } catch (error) {
    return {
      data: null,
      error: 'Error deleting reservation',
      success: false,
    };
  }
}
