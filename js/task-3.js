// * Задача 3. Сортування за кількістю друзів * //

const sortByDescendingFriendCount = (users) => users.toSorted((firstFriend, lastFriend) =>
	lastFriend.friends.length - firstFriend.friends.length);

console.table(
	sortByDescendingFriendCount([
		{
			name: 'Moore Hensley',
			friends: ['Sharron Pace'],
			gender: 'male'
		},
		{
			name: 'Sharlene Bush',
			friends: ['Briana Decker', 'Sharron Pace'],
			gender: 'female'
		},
		{
			name: 'Ross Vazquez',
			friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
			gender: 'male'
		},
		{
			name: 'Elma Head',
			friends: ['Goldie Gentry', 'Aisha Tran'],
			gender: 'female'
		},
		{
			name: 'Carey Barr',
			friends: ['Jordan Sampson', 'Eddie Strong'],
			gender: 'male'
		},
		{
			name: 'Blackburn Dotson',
			friends: ['Jacklyn Lucas', 'Linda Chapman'],
			gender: 'male'
		},
		{
			name: 'Sheree Anthony',
			friends: ['Goldie Gentry', 'Briana Decker'],
			gender: 'female'
		}
	])
);

// [
//   {
//     name: 'Ross Vazquez',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     gender: 'male'
//   },
//   {
//     name: 'Sharlene Bush',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     gender: 'female'
//   },
//   {
//     name: 'Elma Head',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     gender: 'female'
//   },
//   {
//     name: 'Carey Barr',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     gender: 'male'
//   },
//   {
//     name: 'Blackburn Dotson',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     gender: 'male'
//   },
//   {
//     name: 'Sheree Anthony',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     gender: 'female'
//   },
//   {
//     name: 'Moore Hensley',
//     friends: ['Sharron Pace'],
//     gender: 'male'
//   }
// ]

// ---------- REMARKS OF THE MENTOR ---------- //

// task-3.js - Well executed moments/Добре виконані моменти //

// Гарне іменування змінних: твій вибір імен змінних, таких як users, gender, totalBalanceUsers і user, є зрозумілий та описовий.
// Легко зрозуміти, що кожна змінна представляє, що є чудовим для читабельності та підтримки коду.

// Правильне форматування коду: твій код має правильне форматування зі стабільним відступом та прогалиною, що полегшує читання
// та розуміння.

// Правильне використання методів: ти правильно використовував методи filter та reduce, щоб фільтрувати користувачів за статтю
// та розраховувати загальний баланс. Твій код слідує правильній послідовності викликів методів, щоб досягти бажаного результату.
