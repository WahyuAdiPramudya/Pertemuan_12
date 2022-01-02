const Student = require("../models/student.js");

class StudentController {
    async index(req, res) {
        const students = await Student.all();

        const response = {
            "message": "get all students",
            "data": students
        }
        
        res.json(response);
    }

    async store(req, res) {
        
        const studentId = await Student.create(req.body);
        const student = await Student.find(studentId);

        const response = {
            "message": "store student data",
            "data":student
        }

        res.json(response);
    }


    update(req, res) {
        const { id } = req.params;
        res.send(`Mengedit data student id ${id}`);
    }

    destroy(req, res) {
        res.send(`Menghapus data student id ${id}`);
    }
}

const controller = new StudentController();
module.exports = controller; 