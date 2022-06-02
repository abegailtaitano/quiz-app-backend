const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const quiz = require('../models/quizSchema');
const cors = require("cors");
router.use(cors());

//SETUP PARSE TO EXPECT JSON
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// @route GET /api/questionRoutes/test
router.get('/test', (req,res) => {
    res.send('questions route working');
});

router.post('/createQuestion', (req,res, next) => {
    quiz.create(req.body)
        .then(quiz => {
            console.log('question Created ', quiz);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(quiz);
        })
        .catch(err => next(err));
})
 router.get('/getQuestions', (req, res,next) => {
    quiz.find({})
        .then(quiz => {
            console.log('get questions', quiz);
            res.statusCode = 200;

            res.send(quiz);
        })
        .catch(err => next(err));

})


module.exports = router;