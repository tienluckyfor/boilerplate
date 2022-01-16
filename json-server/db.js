var faker = require('faker');
faker.locale = 'vi';

module.exports = function() {
	var students = [];
	for (var i = 0; i < 100; i++) {
		students.push({
			id: i,
			name: faker.name.firstName(),
			avatar: faker.internet.avatar()
		});
	}
	return {
		students: students
	};
};
