// Сервіс розрахунку ліміту часу SLA (у годинах) відповідно до пріоритету
function calculateSlaHours(priority) {
  switch (priority) {
    case 'CRITICAL': return 2;  // 2 години на усунення аварії
    case 'HIGH':     return 4;  // 4 години
    case 'MEDIUM':   return 8;  // 8 годин (1 робочий день)
    case 'LOW':      return 24; // 24 години
    default:         return 8;
  }
}

module.exports = { calculateSlaHours };
