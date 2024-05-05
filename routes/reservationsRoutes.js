const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationsController');

router.post('/', reservationController.makeReservation);

module.exports = router;



 