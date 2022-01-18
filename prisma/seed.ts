import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  const admin = await prisma.user.create({
    data: {
      email: 'admin@nance.com',
      name: 'Main Admin',
      password: 'nance@POWER!',
      status: 'ACTIVE',
      role: 'ADMIN'
    }
  });

  console.info(admin);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
