Handlebars.registerHelper("withSpaces", function() {
    var args = Array.prototype.slice.apply(arguments);
    var withSpaces = '';
    for(var i=0; i<args.length; i++){
        var thing = args[i];
        if(typeof thing === 'string' || typeof thing === 'number'){
            withSpaces += thing + ' ';
        }
    }

    //remove trailing space
    return withSpaces.replace(/ $/, "");
});