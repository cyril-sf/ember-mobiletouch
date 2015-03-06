/* jshint node: true */
module.exports = {
  name: 'ember-mobiletouch',

  included : function (app) {
    app.import(app.bowerDirectory + '/hammerjs/hammer.js');
  }

};
