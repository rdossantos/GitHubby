define("ItemView",["backbone","underscore"],function(e,t){var n=e.View.extend({initialize:function(){t.bindAll(this,"render"),this.listenTo(this.model,"change",this.render),this.listenTo(this.model,"remove",this.remove),this.template=this.template||this.options.template,this.render()},render:function(){return this.$el.html(this.template(this.model.toJSON())),this}});return n});