// Модель заявки (Ticket) для системи Service-desk
class Ticket {
  constructor(id, title, description, priority, categoryId, initiatorId) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.priority = priority; // 'LOW', 'MEDIUM', 'HIGH', 'CRITICAL'
    this.status = 'OPEN';
    this.categoryId = categoryId;
    this.initiatorId = initiatorId;
    this.createdAt = new Date();
  }
}

module.exports = Ticket;
