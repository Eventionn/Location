import { prisma } from '../src/prismaClient.js';

const locationsData = [
  {
    localtown: 'eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee', 
    city: 'Colorado',
  },
  {
    localtown: 'ffffffff-ffff-ffff-ffff-ffffffffffff',
    city: 'Philippines',
  }
];

const seedDatabase = async () => {
  try {
    console.log('🌱 Starting seeding process...');

    // Seed Locations
    for (const location of locationsData) { 
      const createdLocation = await prisma.location.create({ 
        data: location,
      });
      console.log(`✅ Created location with ID: ${createdLocation.localtown}`);
    }

    console.log('🌱 Seeding completed successfully!');
  } catch (error) {
    console.error('❌ Error during seeding:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

seedDatabase();
