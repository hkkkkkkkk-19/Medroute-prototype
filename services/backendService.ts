
import { Medicine, User, UserRole } from '../types.ts';

const DB_KEY = 'medroute_local_db';

interface Database {
  users: any[];
  medicines: Medicine[];
  donations: any[];
  requests: any[];
}

const getDB = (): Database => {
  const data = localStorage.getItem(DB_KEY);
  return data ? JSON.parse(data) : { users: [], medicines: [], donations: [], requests: [] };
};

const saveDB = (db: Database) => {
  localStorage.setItem(DB_KEY, JSON.stringify(db));
};

export const backendService = {
  // User Management
  register: (userData: any) => {
    const db = getDB();
    if (db.users.find(u => u.email === userData.email)) {
      throw new Error("User already exists");
    }
    db.users.push(userData);
    saveDB(db);
    return userData;
  },

  getUserByEmail: (email: string) => {
    const db = getDB();
    return db.users.find(u => u.email === email);
  },

  // Donation Management
  addDonation: (donation: any) => {
    const db = getDB();
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    const receiptNumber = 'MR-' + Math.random().toString(36).substr(2, 6).toUpperCase();
    
    const medName = (donation.name || '').toLowerCase();
    
    // Impact scenarios with tags for matching
    const scenarios = [
      {
        tags: ['pain', 'combiflam', 'relief'],
        impact: `Your donated ${donation.quantity || 1} unit of ${donation.name || 'medicine'} travelled 42 km to Baramulla, helping provide pain relief to a construction worker with a verified prescription. Your contribution prevented medicine waste and supported timely treatment.`,
        message: "Thank you for donating this medicine. It really helped me when I needed it."
      },
      {
        tags: ['fever', 'cold', 'flu'],
        impact: `Your medicine travelled 27 km to Budgam and was delivered to a school student recovering from fever. Your donation ensured the medicine was used before expiry.`,
        message: "Thank you for helping me get the medicine I needed."
      },
      {
        tags: ['pain', 'body', 'ache'],
        impact: `Your donated medicine travelled 63 km to Anantnag, supporting treatment for a local shopkeeper experiencing severe body pain.`,
        message: "I’m very grateful for your kindness. Thank you for helping someone you don’t even know."
      },
      {
        tags: ['fever', 'pain', 'combiflam'],
        impact: `Your ${donation.name || 'medicine'} tablets travelled 18 km to Srinagar, where they helped a college student manage high fever and pain.`,
        message: "Thank you for your generosity. This helped me a lot."
      },
      {
        tags: ['pain', 'relief'],
        impact: `Your medicine travelled 51 km to Pulwama, where it was delivered to a farmer needing pain relief after a long day of work.`,
        message: "Thank you for your thoughtful donation."
      },
      {
        tags: ['child', 'mother', 'family', 'pediatric'],
        impact: `Your donation travelled 36 km to Ganderbal and helped provide treatment for a mother caring for her sick child.`,
        message: "Your help means a lot to our family. Thank you."
      },
      {
        tags: ['pain', 'worker', 'body'],
        impact: `Your donated medicine travelled 74 km to Shopian, supporting recovery for a daily wage worker suffering from severe body pain.`,
        message: "Thank you for sharing what you didn’t need."
      },
      {
        tags: ['pain', 'injury', 'athlete'],
        impact: `Your medicine travelled 29 km to Kupwara, helping provide pain relief to a young athlete recovering from an injury.`,
        message: "I really appreciate your help. Thank you."
      },
      {
        tags: ['fever', 'teacher'],
        impact: `Your donation travelled 47 km to Bandipora, where it helped a local teacher continue treatment for fever.`,
        message: "Thank you for helping someone in need."
      },
      {
        tags: ['fever', 'pain', 'child', 'combiflam'],
        impact: `Your ${donation.quantity || 1} unit of ${donation.name || 'medicine'} travelled 55 km to Kulgam, helping a 10-year-old child recover from fever and body pain.`,
        message: "Thank you for your kindness. It made a difference."
      }
    ];

    // Find matching scenarios
    let matchingScenarios = scenarios.filter(s => 
      s.tags.some(tag => medName.includes(tag))
    );

    // Fallback to all if no match
    if (matchingScenarios.length === 0) {
      matchingScenarios = scenarios;
    }

    const randomScenario = matchingScenarios[Math.floor(Math.random() * matchingScenarios.length)];
    
    const newDonation = {
      ...donation,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date().toISOString(),
      status: 'VERIFIED',
      quantity: Number(donation.quantity || 1),
      otp,
      receiptNumber,
      impactMessage: randomScenario.impact,
      thankYouMessage: randomScenario.message
    };
    db.donations.push(newDonation);
    // Add to shared pool
    db.medicines.push({
      id: newDonation.id,
      name: newDonation.name,
      expiryDate: newDonation.expiryDate,
      quantity: newDonation.quantity,
      status: 'VERIFIED',
      donorId: 'current-user',
      otp,
      receiptNumber,
      impactMessage: newDonation.impactMessage,
      thankYouMessage: newDonation.thankYouMessage
    });
    saveDB(db);
    return newDonation;
  },

  getDonations: () => {
    const db = getDB();
    // Ensure all donations have impact messages for the "See Report" feature
    return db.donations.map(donation => {
      if (!donation.impactMessage) {
        const medName = (donation.name || '').toLowerCase();
        const scenarios = [
          {
            tags: ['pain', 'combiflam', 'relief'],
            impact: `Your donated ${donation.quantity || 1} unit of ${donation.name || 'medicine'} travelled 42 km to Baramulla, helping provide pain relief to a construction worker with a verified prescription. Your contribution prevented medicine waste and supported timely treatment.`,
            message: "Thank you for donating this medicine. It really helped me when I needed it."
          },
          {
            tags: ['fever', 'cold', 'flu'],
            impact: `Your medicine travelled 27 km to Budgam and was delivered to a school student recovering from fever. Your donation ensured the medicine was used before expiry.`,
            message: "Thank you for helping me get the medicine I needed."
          },
          {
            tags: ['pain', 'body', 'ache'],
            impact: `Your donated medicine travelled 63 km to Anantnag, supporting treatment for a local shopkeeper experiencing severe body pain.`,
            message: "I’m very grateful for your kindness. Thank you for helping someone you don’t even know."
          }
        ];

        let matchingScenarios = scenarios.filter(s => 
          s.tags.some(tag => medName.includes(tag))
        );

        if (matchingScenarios.length === 0) {
          matchingScenarios = scenarios;
        }

        const randomScenario = matchingScenarios[Math.floor(Math.random() * matchingScenarios.length)];
        return {
          ...donation,
          impactMessage: randomScenario.impact,
          thankYouMessage: randomScenario.message,
          receiptNumber: donation.receiptNumber || ('MR-' + Math.random().toString(36).substr(2, 6).toUpperCase())
        };
      }
      return donation;
    });
  },
  getMedicines: () => getDB().medicines,

  // Stats
  getTotalUnitsShared: () => {
    const db = getDB();
    return db.donations.reduce((sum, d) => sum + (Number(d.quantity) || 0), 0);
  },

  // Receiver Management
  addRequest: (requestData: any) => {
    const db = getDB();
    const newRequest = {
      ...requestData,
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date().toISOString(),
      status: requestData.status || 'Prescription Uploaded',
      otp: Math.floor(1000 + Math.random() * 9000).toString()
    };
    db.requests.push(newRequest);
    saveDB(db);
    return newRequest;
  },

  getRequests: () => {
    const db = getDB();
    return db.requests;
  },

  updateRequestStatus: (requestId: string, status: string, additionalData: any = {}) => {
    const db = getDB();
    const index = db.requests.findIndex(r => r.id === requestId);
    if (index !== -1) {
      db.requests[index] = { ...db.requests[index], status, ...additionalData };
      saveDB(db);
      return db.requests[index];
    }
    return null;
  }
};
