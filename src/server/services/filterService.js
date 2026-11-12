// Сервіс фільтрації заявок за статусом та пріоритетом
function filterTickets(tickets, { status, priority }) {
  return tickets.filter(ticket => {
    const matchStatus = status ? ticket.status === status : true;
    const matchPriority = priority ? ticket.priority === priority : true;
    return matchStatus && matchPriority;
  });
}

module.exports = { filterTickets };
