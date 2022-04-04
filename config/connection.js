
const Sequelize = require('sequelize');
require('dotenv').config();

<<<<<<< .merge_file_a13136
// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: 'localhost',
//     dialect: 'mysql',
//     port: 3306,
//   }
// );
=======

// if (process.env.JAWSDB_URL) {
//   const sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else {
//   const sequelize = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD,
//     {
//       host: 'localhost',
//       dialect: 'mysql',
//       port: 3306,
//     },
//   );
// } 
>>>>>>> .merge_file_a13584

// create connection to our db
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    });
<<<<<<< .merge_file_a13136

module.exports = sequelize;
=======
    
module.exports = sequelize;
>>>>>>> .merge_file_a13584
