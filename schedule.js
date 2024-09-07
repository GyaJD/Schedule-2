document.addEventListener('DOMContentLoaded', () => {
    const dayButtons = document.querySelectorAll('.day-btn');
    const scheduleDays = document.querySelectorAll('.schedule-day');

    // Получаем текущий день недели и отображаем соответствующее расписание
    const today = new Date().getDay();
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

    const todayId = days[today];
    const todayButton = document.querySelector(`.day-btn[data-day="${todayId}"]`);
    const todaySchedule = document.getElementById(todayId);

    if (todayButton && todaySchedule) {
        todayButton.classList.add('active');
        todaySchedule.classList.add('active');
    }

    // Обработчики нажатий на кнопки
    dayButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Сбрасываем активные классы у всех кнопок и расписаний
            dayButtons.forEach(btn => btn.classList.remove('active'));
            scheduleDays.forEach(day => day.classList.remove('active'));

            // Добавляем активные классы к нажатой кнопке и соответствующему расписанию
            button.classList.add('active');
            document.getElementById(button.getAttribute('data-day')).classList.add('active');
        });
    });
});
