const { calculateSlaHours } = require('../src/server/services/slaService');

console.log("=== ЗАПУСК ТЕСТІВ (СИМУЛЯЦІЯ ПОМИЛКИ) ===");

// Навмисна помилка для перевірки реакції CI: очікуємо 999 замість 2
const expected = 999;
const actual = calculateSlaHours('CRITICAL');

if (actual !== expected) {
  throw new Error(`AssertionError: Critical SLA expected ${expected} hours, but got ${actual} hours!`);
}

console.log("Тест пройдено");
