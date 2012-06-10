/*

jquery.select-with-keys - super simple jQuery utility to select radio/checkbox
inputs with configurable keyboards shortcuts

Copyright (c) 2012 Abhishek Anand

Dual licensed under the MIT and GPL version 2 licenses.
http://github.com/jquery/jquery/blob/master/MIT-LICENSE.txt
http://github.com/jquery/jquery/blob/master/GPL-LICENSE.txt

Github/docs site: http://github.com/dr-r3d/jquery.select-with-keys

*/

(function( $ ) {
  $.fn.inputKeyPress = function(options) {

    var settings = $.extend( {
      'keys'        : [65, 66, 67, 68],
      'type'        : 'radio'
    }, options);

    $(document).keydown(function(event){
      var index = settings.keys.indexOf(event.which)
      selector = 'input:'+settings.type+':nth('+index+')'
      $(this).find(selector).attr('checked', 'checked');
    });

    return this

  };
})( jQuery );
