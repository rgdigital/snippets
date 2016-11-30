/**
 * Helpers class.
 * @constructor
 */
var Helpers = function() {
  var self  = {};
  for (key in this.modules) {
    self[key] = new this.modules[key]();
  }
  return self;
};

/**
  Plug modules into this object
  @name modules
  @type object
*/
Helpers.prototype.modules = {};