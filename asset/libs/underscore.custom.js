define([
    'underscoreBase',
    'underscore.string'
], function (_, _string) {
    "use strict";

    _.mixin({
        //mixins will not overwrite functions with the same name
        //they appear to be lost

        camelizeArray: function(thing){
            if(_.isArray(thing)){
                return _string.camelize(thing.join('-'));
            }

            return _string.camelize(thing);
        },

        /**
         * This method compares two things together to see if they are equal.
         * It treats false, undefined, empty string and null as equal
         *
         * @todo maybe make this method take n number of parameters
         * @return {bool}
         */
        isKindaLike: function(item1, item2) {
            if (item1 !== false && item1 !== undefined && item1 !== null) {
                /* jshint eqeqeq: false */
                return item1 == item2;
            } else if ((item1 === false || item1 === undefined || item1 === null || item === "") && (item2 === false || item2 === undefined || item2 === null || item2 === "")) {
                return true;
            } else {
                return false;
            }
        }
    });

    _.mixin(_string.exports());

    return _;
});
