const create_table = `
CREATE TABLE IF NOT EXISTS tasks (
	id INT PRIMARY KEY,
	body TEXT,
	isComplete BOOLEAN
)
`;

async function getAll(db){
	let tasks = [];
	let error = null;
	try{

		tasks = await db.any('SELECT body, isComplete FROM tasks');

	} catch (e){
		console.log("error");
		tasks = [];
		error = e;
	}

	return{
		tasks, 
		error
	}; //close return 


} //close getAll

module.exports = {
	getAll
};