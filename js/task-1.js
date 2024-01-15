// * Задача 1. Імена користувачів * //

const getUserNames = (users) => users.map(value => value.name);

console.log(
	getUserNames([
	{
		name: 'Moore Hensley',
		email: 'moorehensley@indexia.com',
		balance: 2811
	},
	{
		name: 'Sharlene Bush',
		email: 'sharlenebush@tubesys.com',
		balance: 3821
	},
	{
		name: 'Ross Vazquez',
		email: 'rossvazquez@xinware.com',
		balance: 3793
	},
	{
		name: 'Elma Head',
		email: 'elmahead@omatom.com',
		balance: 2278
	},
	{
		name: 'Carey Barr',
		email: 'careybarr@nurali.com',
		balance: 3951
	},
	{
		name: 'Blackburn Dotson',
		email: 'blackburndotson@furnigeer.com',
		balance: 1498
	},
	{
		name: 'Sheree Anthony',
		email: 'shereeanthony@kog.com',
		balance: 2764
	},
])
); // ['Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony']

// ---------- REMARKS OF THE MENTOR ---------- //

// task-1.js - Well executed moments/Добре виконані моменти //

// Гарне ім'я змінної: твоє ім'я функції getUserNames є зрозумілим і описовим, яке дає хорошу індикацію того, що робить функція.
// Параметр users також має відповідне ім'я.

// Гарне форматування коду: твій код має гарне форматування з однорідним відступом та проміжком, що робить його легким для читання
// і розуміння. Молодець!
