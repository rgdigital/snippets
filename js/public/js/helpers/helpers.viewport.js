/**
 * Helpers
 * @module viewport
 */
Helpers.prototype.modules.viewport = function() {

    /**
     * Get the viewport size
     */
    this.size = function() {
        var w = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            x = w.innerWidth || e.clientWidth || g.clientWidth,
            y = w.innerHeight|| e.clientHeight|| g.clientHeight;
        return {
          width : x,
          height : y
        };
    };

    // Return self
    return this;
};