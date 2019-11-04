const express = require('express');

// database access using knex
const knex = require('../data/db-config.js');

const router = express.Router();

router.get('/', (req, res) => {
    knex('posts')
        .then(posts => res.send(posts))
        .catch(err => res.status(500).json({ error: "Failed to get posts." }))
});

router.get('/:id', (req, res) => {
    const id = req.params.id;

    knex('posts')
        .where({ id })
        .then(post => res.json(post))
        .catch(err => res.status(500).json({ error: "Failed to get post." }))
});

router.post('/', (req, res) => {
    knex
        .insert(req.body, 'id') // Ignore the console warning on SQLite 
        .into('posts')
        .then(id => res.status(201).json(id))
        .catch(err => res.status(500).json({ error: "Failed to post the new post." }));
});

router.put('/:id', (req, res) => {
    knex('posts').where({ id: req.params.id }).update(req.body)
    .then(updated => res.status(201).json(updated))
    .catch(err => res.status(500).json({ error: "Failed to update post." }))
});

router.delete('/:id', (req, res) => {
    knex('posts').where({ id: req.params.id }).del()
    .then(deleted => res.status(200).json(deleted))
    .catch(err => res.status(500).json({ error: "Failed to delete post." }))
});

module.exports = router;