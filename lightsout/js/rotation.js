(function($) {
  var $rotator = $('#rotation');
  var $sections = $('#sections');

  var rotator = {};
  rotator.focusLi = function($li) {
    $rotator.attr('class', $li.attr('id'));
    $li.addClass('current').siblings().removeClass('current');
  };
  rotator.nextLi = function($ul) {
    var $li = $ul.find('li.current');
    var $nextLi = $li.next();
    if (!$nextLi.length) $nextLi = $ul.find('li:first');
    rotator.focusLi($nextLi);
  };


  $(document).ready(function() {
    $('div#window').click(function() {
      rotator.nextLi($sections);
    });
  });
}(jQuery));
