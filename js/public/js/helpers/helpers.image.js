/**
 * Helpers
 * @module image
 */
Helpers.prototype.modules.image = function() {

    /**
    getImageSize
    */
    this.getImageSize = function(img, callback) {

        // Original
        var width, height;
        
        // Display
        var d_width = img.width;
        var d_height = img.height;
        
        var size = function() {
            return {
              width : width,
              height : height,
              d_width : d_width,
              d_height : d_height
            };
        };
        
        // Using naturalWidth/Height
        if (img.naturalWidth) {
          width = img.naturalWidth;
          height = img.naturalHeight;
          return callback(size());
        } else {
          // Using an Image Object
          tmp = new Image();
          tmp.onload = function() {
            width = this.width;
            height = this.height;
            return callback(size());
          };
          tmp.src = img.src;
        }

    };

    // Return self
    return this;
};