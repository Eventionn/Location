import { prisma } from '../src/prismaClient.js';

const locationsData = [
  {
    locationId: 'eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee',
    localtown: 'Denver', 
    city: 'Colorado'
  },
  {
    locationId: 'ffffffff-ffff-ffff-ffff-ffffffffffff',
    localtown: 'Manila',
    city: 'Philippines'
  },
];

const seedDatabase = async () => {
  try {
    console.log('🌱 Starting seeding process...');

    // Seed Locations
    for (const location of locationsData) { 
      const createdLocation = await prisma.location.create({ 
        data: location,
      });
      console.log(`✅ Created location with ID: ${createdLocation.locationId}`);
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
