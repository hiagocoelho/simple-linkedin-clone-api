import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getCandidates = async (take: number) => {
  const [candidates, total] = await prisma.$transaction([
    prisma.candidate.findMany({
      take: take,
      select: { id: true, name: true, title: true, salary: true, image_url: true }
    }),
    prisma.candidate.count()
  ]);
  return { candidates, total, take };
};

export const getCandidatesById = async (id: number) => {
  const candidate = await prisma.candidate.findUnique({ where: { id } });
  if (candidate) {
    return candidate;
  } else {
    return null;
  }
};
