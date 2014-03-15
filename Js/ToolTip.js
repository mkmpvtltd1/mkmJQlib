(function ($) {
    $.Code = function (Setting) {
        var Options = $.extend({
            Event: 'hover'
        }, Setting);
        ToolTips = {
            init: function () {
                $('.tooltip').on('click', function () {
                    alert("manoj");
                });
            }
        };
        ToolTips.init();
    };
    $.fn.MKMToolTip = function (Setting) {
        $.Code(Setting);
    };
}(jQuery));