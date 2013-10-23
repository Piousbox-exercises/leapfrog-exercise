
var W = {};

function IsNumeric(input) {
    return (input - 0) == input && (input+'').replace(/^\s+|\s+$/g, "").length > 0;
}

$(document).ready( function() {
  
        W.LeapView = Backbone.View.extend({
                el: $('.leap-view'),
                api_url: "http://127.0.0.1:3000/",

                events: {
                    'click input[type=submit]': 'submit_request'
                },
                
                initialize: function() {
                    _.bindAll( this, 'render', 'submit_request' );
                    this.render();
                },

                render: function() {
                },

                j_render: function(result) {
                    W.propensity = result.propensity;
                    W.ranking = result.ranking;
                    $('.result', this.el).empty().append('<ul><li>Propensity: ' + W.propensity + '</li><li>Ranking: ' + W.ranking + '</li></ul>');
                },

                submit_request: function() {
                    var that = this;
                    $( '.errors', this.el ).empty()
                    $( '.result', this.el ).empty()

                    var income = $("input[name=income]").val()
                    var zipcode = $("input[name=zipcode]").val()
                    var age = $("input[name=age]").val()
                    
                    W.valid = true;
                    if ( !IsNumeric(income) ) {
                        $( '.errors', this.el ).append('<li>Income should be numeric</li>');
                        W.valid = false;
                    }
                    if ( !IsNumeric(zipcode) || zipcode.length !== 5 ) {
                        $( '.errors', this.el ).append( '<li>Zipcode appears invalid</li>');
                        W.valid = false;
                    }
                    if ( !IsNumeric(age) ) {
                        $( '.errors', this.el ).append( '<li>Age should be numeric</li>' );
                        W.valid = false;
                    }
                    
                    if ( W.valid ) {
                        $.ajax({
                                url: this.api_url,
                                dataType: 'jsonp',
                                data: {
                                    income: income,
                                    zipcode: zipcode,
                                    age: age
                                },
                                contentType: 'application/json',
                                success: function(result) {
                                    that.j_render(result)
                                }
                            });
                    }
                }

            });

        W.leap_view = new W.LeapView();
});
