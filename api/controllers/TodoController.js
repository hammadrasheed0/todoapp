/**
 * TodoController
 *
 * @description :: Server-side logic for managing Todoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    getTodos: function (req, res) {
        TodoService.getTodos(function (todos) {
            res.json(todos);
        });
    }

};