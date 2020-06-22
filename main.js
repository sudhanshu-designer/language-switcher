$(document).ready(function () {
    var currul = window.location.href;
    var spliturl = currul.split('/');
    $.each(spliturl,function(i,item){
        if(item === 'th'){
            $('#language').val('th').prop('selected',true);
        }
    })
    $(".failure-text").hide();
    $(".blank-text").hide();
    $(".main-social-items").hide();
    $("#button").click(function () {
        var zip = $("#zipcode").val();
        if ( (zip == "10320") || (zip == "10700" ) ) {
            window.location.href = "http://MVL.ordernow.getfresh.co.th";
        }  else if (zip == "10110") {
            window.location.href = "http://XCH.ordernow.getfresh.co.th";
        } else if ( (zip == "10400") || (zip == "10310" ) || (zip == "10250" )  ) {
            window.location.href = "http://SNG.ordernow.getfresh.co.th";
        } else if ( (zip == "10260") ) {
            window.location.href = "http://WZD.ordernow.getfresh.co.th";
        } else if ( (zip == "10100") || (zip == "10600" ) || (zip == "10170" ) || (zip == "10300" ) || (zip == "10200" ) ) {
                window.location.href = "http://SYM.ordernow.getfresh.co.th";
        } else if ( (zip == "10120") ) {
            window.location.href = "http://NLC.ordernow.getfresh.co.th";
        } else if (zip == "10500")  {
            window.location.href = "https://qhl.ordernow.getfresh.co.th/";
        } else if ( (zip == "10330" ) )  {
            window.location.href = "http://ASP.ordernow.getfresh.co.th";
        } else if (zip == "") {
            $(".blank-text").fadeIn(1000);
        } else {
            $(".delivery").hide();
            $(".main-social-items").fadeIn(1000);
        }
    });
    $(document).on("click",'.language-switcher-flags li',function(){
        var val = $(this).attr("data-language"),
            currul = window.location.href;
            var spliturl = currul.split('/');
        if(val === 'en' && $.inArray( 'en' , spliturl  ) ){
            window.location.href = "/";
        }
        else {
            window.location.href = "/th";
        }   
    });
});