const express = require('express');
const db = require('../model/connection');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('add', { viewTitle: 'Add Employee' });
})
router.post('/employee', (req, res) => {
    const user = { name: req.body.fullName, email: req.body.email, phone: req.body.mobile, city: req.body.city }
    let sql = "INSERT INTO `users` SET ?";
    db.query(sql, user, (err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

router.get('/listemployee', (req, res) => {
    let sql = 'SELECT * FROM users';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.render('list', { list: result });
    });
})

router.get('/showoperations', (req, res) => {
    let sql = 'SELECT * FROM users';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.render('showoperations', { list: result });
    })
})

router.get('/update/:id', (req, res) => {
    email = req.params.id;
    let sql = `SELECT * FROM USERS where EMAIL = '${email}'`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.render('update', { list: result, viewTitle: 'Update Employee' });
    })
})

router.post('/employee-update', (req, res) => {
    console.log(req.body);
    const name = req.body.fullName;
    const email = req.body.email;
    const phone = req.body.mobile;
    const city = req.body.city;

    let sql = `UPDATE users SET NAME = '${name}',PHONE='${phone}',CITY='${city}' where EMAIL='${email}'`;
    console.log(sql);
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.redirect('/listemployee');
    })
})

router.get('/delete/:id', (req, res) => {
    const email1 = req.params.id;
    console.log(email1);
    let sql = `DELETE FROM USERS where email = '${email1}'`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.redirect('/listemployee')
    })
})

module.exports = router;