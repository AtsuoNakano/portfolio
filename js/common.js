/* ----------------------

nav

------------------------*/

$(function() {

    var _window = $(window),
        _header = $('.btn-menu'),
        heroBottom;

    _window.on('scroll',function(){     
        heroBottom = $('.section-home').height();
        if(_window.scrollTop() > heroBottom){
            _header.addClass('fixed');   
        }
        else{
            _header.removeClass('fixed');   
        }
    });

    _window.trigger('scroll');

});

$(function() {

    const btn = document.querySelector('.btn-menu');
    const nav = document.querySelector('.nav-wrapper');

    btn.addEventListener('click', () => {
        btn.classList.toggle('btn-batsu')
        nav.classList.toggle('open-menu')
    });

    $(".nav-list a").on("click", function() {
        btn.classList.remove('btn-batsu')
        nav.classList.remove('open-menu')

    });
    return false;
    
});

/* ----------------------

リンク　scroll

------------------------*/

$(function(){
    $('a[href^="#"]').click(function(){
        var speed = 600;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
});

/* ----------------------

jquery.scrollify.js

------------------------*/

$(function() {

    var $section = $('.js-section'); // 各スライド
    var $pager = $('#js-pager'); // ページャー枠
    var current;

    // scrollifyのオプション設定
    var option = {
        section : '.js-section',
        easing: "swing",
        scrollSpeed: 600,
        scrollbars: true,
        before:function(index, section) {
            setCurrent(index); // 現在のsectionにクラスを設定
            pagerCurrent(index); // ページャーに対応する順番にクラス名を付与
            
        },
        afterRender:function() {
            createPager(); // ページャーの作成
            setCurrent(); // 現在のsectionにクラスを設定
        }
    };

    $(function() {
        $.scrollify(option); // scrollifyの実行
    });



    // ==============================
    // functions
    // ------------------------------

    // 現在のsectionにクラスを設定
    function setCurrent(index = 0) {
        // 一旦、すべてのsectionのクラスをとる
        $section.removeClass('is-show');
        // 現在のsectionのみにクラスを付与
        $section.eq(index).addClass('is-show');
    }

    // ページャーに対応する順番にクラス名を付与
    function pagerCurrent(index = 0) {
        var $li = $pager.find('li');
        $li.removeClass('is-current');
        $li.eq(index).addClass('is-current');
    }

    // ページャーの作成
    function createPager() {
        $section.each(function(i, e){
            // ページ内リンク先の作成
            var sectionName = $(e).attr('data-section-name');
            // 最初のliにはクラスを付与
            var addClass = '';
            if (i === 0) {
                addClass = 'is-current';
            }
            // liのHTML作成
            var html = '';
            html += '<li class="' + addClass + '">';
            html += '<a href="#' + sectionName + '"></a>';
            html += '</li>';
            $pager.append(html);
        });

        pagerLink();
    }

    // ページャーでaタグをクリックされたらスクロールする
    function pagerLink () {
        $pager.find('a').on('click', function() {
            $.scrollify.move($(this).attr("href"));
        });
    }


});

