
var JQ = jQuery.noConflict();

JQ(document).ready(function () {

  JQ.fn.countProducts = function (namirnice) {
    return Object.keys(namirnice.products).length;
  };

 JQ.ajax({
    url: 'https://nsoft.com/js-tecaj-a/',
    type: 'GET',
    dataType: 'jsonp',
    success: function (response) {
      var size = JQ(this).countProducts(response);
      console.log('success', size);
	  var namirnice = response;
      console.log(namirnice);
      console.log(namirnice.products);
 
    },
    error: function (error) {
      console.log('error', error);
    }
  });

});



jQuery(document).ready(function($){
    $('.tab-panels .tabs li').on('click', function(){
        //figure out which panel to show
        var panelToShow = $(this).attr('rel');

        $('li').click(function(){
           $(this).css({'font-weight':'bold'});
          });
        
        //hide current panel
        $('.tab-panels .panel.active').slideUp(300, function(){

            $('#'+panelToShow).slideDown(300, function(){
                $('this').addCLass('active');
            });
        }); 
    });
});





