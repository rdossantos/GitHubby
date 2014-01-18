beforeEach(function(){
    this.addMatchers({
        isBetweenInclusive: function(min, max){
            return this.actual >= min && this.actual <= max;
        },

        isBetween: function(min, max){
            return this.actual > min && this.actual < max;
        }
    });
});

define(['jquery', 'IssueCollection'], function($, IssueCollection){
    describe('simple tests', function(){
        it('works!', function(){
            expect(1).toBe(1);
        });

        it('loads 25 models into the issues collection', function(){
            var testCollection = new IssueCollection();
            waitsFor(function(){
                return testCollection.models.length === 25;
            });
        });
    });
});