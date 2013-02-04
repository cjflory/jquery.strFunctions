(function ($) {
    $.extend({
        strContains: function (haystack, needle) {
            return haystack.indexOf(needle) > -1;
        },
        strStartsWith: function (haystack, needle) {
            return haystack.lastIndexOf(needle, 0) === 0;
        },
        strEndsWith: function (haystack, needle) {
            return haystack.indexOf(needle) === (haystack.length - needle.length);
        }
    });
})(jQuery);
