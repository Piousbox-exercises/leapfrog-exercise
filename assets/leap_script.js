
W = {};

function IsNumeric(input) {
    return (input - 0) == input && (input+'').replace(/^\s+|\s+$/g, "").length > 0;
}

$(document).ready( function() {
  
        var LeapView = Backbone.View.extend({
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
                    console.log( 'rendering' );
                    $('.result', this.el).empty().append('<ul><li>Propensity: ' + W.propensity + '</li><li>Ranking: ' + W.ranking + '</li></ul>');
                },

                submit_request: function() {
                    var that = this;
                    $( '.errors', this.el ).empty()
                    $( '.result', this.el ).empty()

                    var income = $("input[name=income]").val()
                    var zipcode = $("input[name=zipcode]").val()
                    var age = $("input[name=age]").val()
                    
                    var valid = true;
                    if ( !IsNumeric(income) ) {
                        $( '.errors', this.el ).append('<li>Income should be numeric</li>');
                        valid = false;
                    }
                    if ( !IsNumeric(zipcode) || zipcode.length !== 5 ) {
                        $( '.errors', this.el ).append( '<li>Zipcode appears invalid</li>');
                        valid = false;
                    }
                    if ( !IsNumeric(age) ) {
                        $( '.errors', this.el ).append( '<li>Age should be numeric</li>' );
                        valid = false;
                    }
                    
                    if ( valid ) {
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
                                    console.log( 'success' );
                                    console.log( result );
                                    that.j_render(result)
                                }
                            });
                    }
                }

            });

        var leap_view = new LeapView();
});
