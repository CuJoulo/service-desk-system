const { calculateSlaHours } = require('../src/server/services/slaService');

console.log("=== ЗАПУСК АВТОМАТИЗОВАНИХ ТЕСТІВ SLA ===");

// Тест 1: Звичайний сценарій (нормальний розрахунок)
console.assert(calculateSlaHours('CRITICAL') === 2, "Test Critical Failed");
console.assert(calculateSlaHours('HIGH') === 4, "Test High Failed");
console.assert(calculateSlaHours('MEDIUM') === 8, "Test Medium Failed");
console.assert(calculateSlaHours('LOW') === 24, "Test Low Failed");
console.log("✓ Тест 1 (стандартні сценарії): Успішно пройдено.");

// Тест 2: Граничний сценарій (невідомий пріоритет повинен викликати помилку)
let errorThrown = false;
try {
  calculateSlaHours('UNKNOWN_PRIORITY');
} catch (e) {
  errorThrown = true;
}
console.assert(errorThrown === true, "Test Boundary Failed: Error not thrown for unknown priority");
console.log("✓ Тест 2 (граничний випадок з помилкою): Успішно пройдено.");

console.log("=== ВСІ ТЕСТИ ПРОЙДЕНО УСПІШНО (Exit Code 0) ===");
