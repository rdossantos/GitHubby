define("IssueSummaryItemView",["backbone","underscore","template","ItemView","App"],function(e,t,n,r,i){var s=r.extend({App:i,tagName:"a",className:"list-group-item",template:n.issueItemView,attributes:function(){return{href:"#issues/"+this.model.get("number")}}});return s});