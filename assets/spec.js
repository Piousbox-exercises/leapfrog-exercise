
$(document).ready( function() {

        describe("Player", function() {
                
                beforeEach(function() {
                    });

                afterEach( function() {
                        
                        $("input[name=income]").val('');
                        $("input[name=zipcode]").val('');
                        $("input[name=age]").val('');

                        $(".leap-view").css('display', 'none');
                    });
                
                it("should instantiate the view", function() {
                        expect( W.leap_view ).toBeDefined();
                    });

                it( "checking validations", function() {
                        W.leap_view.submit_request();
                        expect( W.valid === false ).toBeTruthy( 'no input is invalid' );
                        
                        $("input[name=zipcode]").val(5);
                        W.leap_view.submit_request();
                        expect( W.valid === false ).toBeTruthy();
                        
                        $("input[name=age]").val(5);
                        W.leap_view.submit_request();
                        expect( W.valid === false ).toBeTruthy();

                        $("input[name=income]").val(5);
                        W.leap_view.submit_request();
                        expect( W.valid === false ).toBeTruthy();

                        $("input[name=zipcode]").val(11223);
                        W.leap_view.submit_request();
                        expect( W.valid ).toBeTruthy();
                        
                    });
                
            });
    
    });