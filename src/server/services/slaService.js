function calculateSlaHours(priority) {
  if (!priority || typeof priority !== 'string') {
    throw new Error("Invalid priority: priority must be a non-empty string");
  }

  const normalized = priority.toUpperCase();
  switch (normalized) {
    case 'CRITICAL': return 2;  // Критичний інцидент: 2 години
    case 'HIGH':     return 4;  // Високий: 4 години
    case 'MEDIUM':   return 8;  // Середній: 8 годин
    case 'LOW':      return 24; // Низький: 24 години
    default:
      throw new Error(`Unknown priority level: ${priority}`);
  }
}

module.exports = { calculateSlaHours };
