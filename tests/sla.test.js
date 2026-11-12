const { calculateSlaHours } = require('../src/server/services/slaService');

console.log("=== ЗАПУСК МОДУЛЬНИХ ТЕСТІВ SLA ===");
console.assert(calculateSlaHours('CRITICAL') === 2, "Test Critical Failed");
console.assert(calculateSlaHours('HIGH') === 4, "Test High Failed");
console.assert(calculateSlaHours('LOW') === 24, "Test Low Failed");
console.log("✓ Усі 3 тести для розрахунку нормативів SLA пройдено успішно!");
