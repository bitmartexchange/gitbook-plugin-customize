/**
 * @author znz
 * @Date 2020/5/1
 */
require(['gitbook', 'jQuery'], function(gitbook, $) {
    var LANG_KEY = 'blang',
				LANG_CLASS = 'current';

    var init = function () {
			$('.lang-picker').remove();
			var lang = window.localStorage.getItem(LANG_KEY);
			console.log('lang:' + lang)
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

    gitbook.events.bind('page.change', function() {
        init();
    });
});
