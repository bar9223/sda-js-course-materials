(function ($) {
    $.fn.findLongestText = function () {

        var longest = null;
        for (var i = 0; i <= this.length; i++) {

            if ($(this[i]).text().length >= $(longest).text().length) {
                longest = this[i];
            }

        }
        return longest;
    };
    console.log($('p').findLongestText());
}(jQuery));
