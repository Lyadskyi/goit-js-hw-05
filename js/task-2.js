// * Задача 2. Користувачі з другом * //

const allUsers1 = [
	{
		name: 'Moore Hensley',
		friends: ['Sharron Pace'],
	},
	{
		name: 'Sharlene Bush',
		friends: ['Briana Decker', 'Sharron Pace'],
	},
	{
		name: 'Ross Vazquez',
		friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
	},
	{
		name: 'Elma Head',
		friends: ['Goldie Gentry', 'Aisha Tran'],
	},
	{
		name: 'Carey Barr',
		friends: ['Jordan Sampson', 'Eddie Strong'],
	},
	{
		name: 'Blackburn Dotson',
		friends: ['Jacklyn Lucas', 'Linda Chapman'],
	},
	{
		name: 'Sheree Anthony',
		friends: ['Goldie Gentry', 'Briana Decker'],
	}
];

const getUsersWithFriend = (users, friendName) => users.filter(user => user.friends.includes(friendName));

console.table(getUsersWithFriend(allUsers1, 'Briana Decker')); 
// [
//   {
//     name: 'Sharlene Bush',
//     friends: ['Briana Decker', 'Sharron Pace']
//   },
//   {
//     name: 'Sheree Anthony',
//     friends: ['Goldie Gentry', 'Briana Decker']
//   }
// ]

console.table(getUsersWithFriend(allUsers1, 'Goldie Gentry'));
// [
//   {
//     name: 'Elma Head',
//     friends: ['Goldie Gentry', 'Aisha Tran']
//   },
//   {
//     name: 'Sheree Anthony',
//     friends: ['Goldie Gentry', 'Briana Decker']
//   }
// ]

console.log(getUsersWithFriend(allUsers1, 'Adrian Cross' )); // []

// ---------- REMARKS OF THE MENTOR ---------- //

// task-2.js - Well executed moments/Добре виконані моменти //

// Гарне іменування змінних: твій вибір назв змінних, таких як users, friendName і user у методі filter, є зрозумілим і описовим.
// Це робить код легким для читання і розуміння, що дуже важливо для підтримки.

// Вдале використання стрілкових функцій: ти правильно і послідовно використовував синтаксис стрілкових функцій у своєму коді.
// Це робить код більш стислим і сучасним за стилем.

// Відмінне форматування коду: твій код належним чином форматований з чітким відступом і послідовним використанням круглих дужок
// і фігурних дужок. Це робить код більш читабельним і легшим для слідування.

// Чіткі тестування: ти додав тестові випадки в кінці свого коду, щоб перевірити правильність твого рішення.
// Це гарна практика, щоб переконатися, що твій код працює так, як очікується.
