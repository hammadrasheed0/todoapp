module.exports = {

    getTodos: function (next) {

        Todo.find().exec(function (err, todos) {
            if (err) throw err;
            next(todos);
        })

    }

}