/**
 * @author znz
 * @Date 2020/5/1
 */
require(['gitbook', 'jQuery'], function(gitbook, $) {
    var LANG_KEY = 'blang',
				LANG_CLASS = 'current';

    var init = function () {
      searchHtml();


			$('.lang-picker').remove();
      
      var lang = '';
      if(window.location.pathname.indexOf("/zh/") == 0){
        lang = 'zh'
      } else if(window.location.pathname.indexOf("/en/") == 0){
        lang = 'en'
      } else {
         lang = window.localStorage.getItem(LANG_KEY);
      }
			$('.book-header').append(createDIV(lang));


			$('.lang-item')
         .on('click', function(e) {
					  	 window.localStorage.setItem(LANG_KEY, $(this).attr("name"));
							 init();
         });
    };

		var createDIV = function ($lang) {
				if($lang == 'zh') {
						return '<div class="lang-picker"><span>中文</span><ul>'
											+ li('zh', 'current')
											+ li('en', '')
											+ '</ul></div>';
				} else {
					return '<div class="lang-picker"><span>English</span><ul>'
										+ li('zh', '')
										+ li('en', 'current')
										+ '</ul></div>';
				}
    };

		var li = function ($lang, $selected) {
				if($lang == 'zh') {
						return '<li class="' + $selected + '"><a href="/zh" class="lang-item" name="zh">中文</a></li>';
				} else {
						return '<li class="' + $selected + '"><a href="/en" class="lang-item" name="en">English</a></li>';
				}
    };

    var searchHtml = function () {
        var searchHtml = $('#book-search-input').html();
        $('#book-search-input').remove();

        $('.book-header h1').before(
          '<a class="btn pull-left js-toolbar-action" aria-label="" href="#"><i class="fa fa-align-justify"></i></a>'
          + '<a class="btn pull-left" href="#"><div id="book-search-input" role="search">'
          // + searchHtml
          + '<input type="text" placeholder="search">'
          + '</div></a>'
        );

        $('#book-search-input').css('padding','0px');

    }

    gitbook.events.bind('page.change', function() {
        init();
    });
});
