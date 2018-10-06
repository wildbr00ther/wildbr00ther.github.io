(function ($) {
    $(document).ready(function () {
        $('.slider').flexslider({
            animation: "slide",
            controlNav: false,
            slideshow: false,
            itemWidth: 650,
            minItems: 1,
            maxItems: 1
        });

        function createPictures(count, path, block) {
            var str = '';
            for (var i = 1; i <= count; i++) {
                str += '<img src="img/' +  path  + '/img (' + i + ').png" class="drag">'
            }

            return $(block).append(str);
        }
        createPictures(41, '01s', '.body-01s');
        createPictures(35, '02f', '.body-02f');
        createPictures(29, '03x', '.body-03x');
        createPictures(29, '04z', '.body-04z');
        createPictures(33, '05r', '.body-05r');
        createPictures(34, '06g', '.body-06g');
        createPictures(49, '07q', '.body-07q');
    });
})(jQuery);
