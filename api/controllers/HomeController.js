/**
 * HomeController
 *
 * @description :: Server-side logic for managing Homes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  index: function(req, res) {
      
      return res.view('homepage', {
          site:{
              title:"Homepage"
          }
      });
      
//    return res.json({
//      todo: 'Not implemented yet!'
//    });
  },

};
