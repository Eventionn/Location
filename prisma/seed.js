import { prisma } from '../src/prismaClient.js';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';  

const loadLocationsFromFile = () => {
  return new Promise((resolve, reject) => {
    fs.readFile('./freguesias-metadata.json', 'utf8', (err, data) => {
      if (err) {
        return reject(err);
      }
      try {
        const parsedData = JSON.parse(data);
        resolve(parsedData.d); 
      } catch (parseError) {
        reject(parseError);
      }
    });
  });
};

const seedDatabase = async () => {
  try {
    console.log('🌱 Starting seeding process...');

    const locationsData = await loadLocationsFromFile();

    const formattedLocations = locationsData.map(location => ({
      locationId: uuidv4(), 
      localtown: location.concelho, 
      city: location.freguesia,
    }));

    for (const location of formattedLocations) {
      const createdLocation = await prisma.location.create({
        data: location,
      });
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
