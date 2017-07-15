/**
 * Created by yifantian on 5/7/17.
 */

var express = require('express');
var router = express.Router();
var problemService = require('../services/problemService');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

// get /api/v1/problems/
// get /api/v1/problems/2
// post /api/v1/problems

router.get('/problems', function (req,res) {
    problemService.getProblems()
        .then(problems => res.json(problems));
});

router.get('/problems/:id', function(req, res) {
    var id = req.params.id;
    problemService.getProblem(+id)                          // + convert string to number
        .then(problem => res.json(problem));
});

router.post('/problems', jsonParser, function(req,res) {
    problemService.addProblem(req.body)
        .then(problem => {
            res.json(problem);
        },
        error => {
            res.status(400).send('already exists!');
    });
});


module.exports = router;