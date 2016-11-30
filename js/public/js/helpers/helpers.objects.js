/**
 * Helpers
 * @module objects
 */
Helpers.prototype.modules.objects = function() {
  
    /**
     * Get an objects length
     * @param {obj} object to get length of
     */
    this.length = function(obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    }

    // Return self
    return this;
};