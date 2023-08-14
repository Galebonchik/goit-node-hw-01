# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)

node index.js --action="list"

https://drive.google.com/file/d/18PAmSS1Axur4-7KVVe_AhDkqjcSFzexk/view?usp=sharing

# Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.

node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6

https://drive.google.com/file/d/1KGurW0BmdEvXnGTIxueeOrBWt0VxF2NL/view?usp=sharing

# Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту

node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22

https://drive.google.com/file/d/1UyhMBnZfRZF0HZPkUK92sDxMpn6rGW62/view?usp=sharing

# Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.

node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH

https://drive.google.com/file/d/1u3cCnOwXgp0T6pEOdmr0G-A0EN8_-eYK/view?usp=sharing
