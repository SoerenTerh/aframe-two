$(document).ready(function () {
    "use strict";

    function hide() {
        $(".oneInfo").addClass("hide");
        $(".twoInfo").addClass("hide");
        $(".threeInfo").addClass("hide");
        $(".fourInfo").addClass("hide");
        $(".fiveInfo").addClass("hide");
        $(".sixInfo").addClass("hide");
        $(".sevenInfo").addClass("hide");
        $(".eightInfo").addClass("hide");
    }

    function color(x) {
        $(".primary-color").css("background-color", "turquoise");
        $(".no-color").css("background-color", "inherit");
        $(x).css("background-color", "orange");
    }

    $(".one").on('click mouseover', function () {
        color(this);
        if ($(".oneInfo").hasClass("hide")) {
            hide();
            $(".oneInfo").removeClass("hide");
        }
    });
    $(".two").on('click mouseover', function () {
        color(this);
        if ($(".twoInfo").hasClass("hide")) {
            hide();
            $(".twoInfo").removeClass("hide");
        }
    });
    $(".three").on('click mouseover', function () {
        color(this);
        if ($(".threeInfo").hasClass("hide")) {
            hide();
            $(".threeInfo").removeClass("hide");
        }
    });
    $(".four").on('click mouseover', function () {
        color(this);
        if ($(".fourInfo").hasClass("hide")) {
            hide();
            $(".fourInfo").removeClass("hide");
        }
    });
    $(".five").on('click mouseover', function () {
        color(this);
        if ($(".fiveInfo").hasClass("hide")) {
            hide();
            $(".fiveInfo").removeClass("hide");
        }
    });
    $(".six").on('click mouseover', function () {
        color(this);
        if ($(".sixInfo").hasClass("hide")) {
            hide();
            $(".sixInfo").removeClass("hide");
        }
    });
    $(".seven").on('click mouseover', function () {
        color(this);
        if ($(".sevenInfo").hasClass("hide")) {
            hide();
            $(".sevenInfo").removeClass("hide");
        }
    });
    $(".eight").on('click mouseover', function () {
        color(this);
        if ($(".eightInfo").hasClass("hide")) {
            hide();
            $(".eightInfo").removeClass("hide");
        }
    });
    
        //fancybox
    $(function () {
        var addToAll = true,
            gallery = true,
            titlePosition = 'inside';
        $(addToAll ? 'img' : 'img.fancybox').each(function () {
            var $this = $(this),
                title = $this.attr('title'),
                src = $this.attr('data-big') || $this.attr('src'),
                a = $('<a href="#" class="fancybox"></a>').attr('href', src).attr('title', title);
            $this.wrap(a);
        });
        if (gallery) {
            $('a.fancybox').attr('rel', 'fancyboxgallery');
        }
        $('a.fancybox').fancybox({
            titlePosition: titlePosition
        });
    });

    


});