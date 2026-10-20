
function calculateNextMaintenance(currentKm, maintenanceIntervalKm) {
  if (typeof currentKm !== 'number' || typeof maintenanceIntervalKm !== 'number') {
    throw new Error('Km values must be numbers');
  }
  return currentKm + maintenanceIntervalKm;
}

module.exports = { calculateNextMaintenance };
