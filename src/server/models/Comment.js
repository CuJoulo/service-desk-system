// Модель коментаря (Comment) для обговорення заявки
class Comment {
  constructor(id, ticketId, authorId, text) {
    this.id = id;
    this.ticketId = ticketId;
    this.authorId = authorId;
    this.text = text;
    this.createdAt = new Date();
  }
}

module.exports = Comment;
