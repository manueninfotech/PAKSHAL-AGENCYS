import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const dbPath = path.resolve(__dirname, '../Server/data/db.json');

export const DEFAULT_COLLECTIONS = [
  {
    id: "col1",
    title: "MARINE PLYWOOD",
    subtitle: "Strong. Durable. Reliable.",
    image: ""
  },
  {
    id: "col2",
    title: "VENEERS",
    subtitle: "Natural Beauty. Perfect Finish",
    image: ""
  },
  {
    id: "col3",
    title: "LAMINATES",
    subtitle: "Style That Stands Out",
    image: ""
  },
  {
    id: "col4",
    title: "HARDWARE FITTINGS",
    subtitle: "Precision in Every Detail",
    image: ""
  },
  {
    id: "col5",
    title: "DOORS & ACCESSORIES",
    subtitle: "Complete Your Interior",
    image: ""
  }
];

export const readDB = () => {
  try {
    if (!fs.existsSync(dbPath)) {
      return { offers: [], collections: DEFAULT_COLLECTIONS, images: [] };
    }
    const data = fs.readFileSync(dbPath, 'utf8').trim();
    if (!data) {
      return { offers: [], collections: DEFAULT_COLLECTIONS, images: [] };
    }
    const parsed = JSON.parse(data);
    
    // Ensure all required arrays are initialized
    return {
      offers: Array.isArray(parsed.offers) ? parsed.offers : [],
      collections: Array.isArray(parsed.collections) && parsed.collections.length > 0 
        ? parsed.collections 
        : DEFAULT_COLLECTIONS,
      images: Array.isArray(parsed.images) ? parsed.images : [],
      settings: parsed.settings || { offersEnabled: true }
    };
  } catch (error) {
    console.error('Error reading DB:', error);
    // Return standard defaults if there is a parsing error, but do not overwrite
    return { offers: [], collections: DEFAULT_COLLECTIONS, images: [], settings: { offersEnabled: true } };
  }
};

export const writeDB = (data) => {
  try {
    const dir = path.dirname(dbPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    const payload = {
      offers: Array.isArray(data.offers) ? data.offers : [],
      collections: Array.isArray(data.collections) ? data.collections : DEFAULT_COLLECTIONS,
      images: Array.isArray(data.images) ? data.images : [],
      settings: data.settings || { offersEnabled: true }
    };
    
    const tempPath = dbPath + '.tmp';
    fs.writeFileSync(tempPath, JSON.stringify(payload, null, 2), 'utf8');
    fs.renameSync(tempPath, dbPath);
  } catch (error) {
    console.error('Error writing DB:', error);
  }
};
