const db = require("../config/database.js");

class Student{
    static tableName = 'students';

    static all() {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM ${this.tableName}`;
            db.query(sql, (err,results)=> {
                resolve(results);
            })
        });
    }

    static find(id) {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM ${this.tableName} WHERE id = ${id}`
            db.query(sql, id, (err,results)=> {
                resolve(results);
            })
        });
    }

    static create(body) {
        return new Promise((resolve, reject) => {
            const sql = `INSERT INTO ${this.tableName} SET ?`
            db.query(sql, body, (err,results) => {
                resolve(results.insertId);
            })
        });
    }
}

module.exports = Student;