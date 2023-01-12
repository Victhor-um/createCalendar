window.onload = function () {
  console.log('Воспользуйтесь функцией createCalendar(год, месяц)');
  createCalendar(2023, 1);

  function createCalendar(year, month) {
    const firstDay = new Date(year, month - 1, 1);
    const days = [7, 1, 2, 3, 4, 5, 6];
    const tbody = document.querySelector('tbody');
    const daysInMonth = 32 - new Date(year, month - 1, 32).getDate();
    let dayNumber = 1;
    let fDay = days[firstDay.getDay()];
    let day = (fDay - 1) % 7;

    for (const week of tbody.rows) {
      for (let i = day; i < 7; i++) {
        if (dayNumber > daysInMonth) break;
        week.cells[i].innerText = dayNumber;
        dayNumber++;
      }
      day = 0;
    }
  }
};
