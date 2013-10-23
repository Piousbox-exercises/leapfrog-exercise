
$(document).ready( function() {

        describe("Player", function() {
                
                beforeEach(function() {
                    });

                afterEach( function() {
                        // $(".leap-view").empty();
                    });
                
                it("should instantiate the view", function() {
                        expect( W.leap_view ).toBeDefined();
                    });

                it( 'should make the ajax call', function() {
                        // spyOn( W.leap_view, 'submit_request' );

                        /*
                        W.leap_view.submit_request = function() {
                            console.log( 'ssssssubmitted' );
                        };
                        $( "input[type=submit]", ".leap-view" ).click();
                        */

                        W.leap_view.submit_request();

                        expect( W.leap_view.submit_request ).toHaveBeenCalled();
                    });
                
            });

    });