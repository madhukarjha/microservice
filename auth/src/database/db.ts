import level from 'level-ts';

const database = new level('./data');
export default database;

