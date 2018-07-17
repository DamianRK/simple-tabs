(function ($) {
    $(document).ready(() => {
        $(document).on('click', '.simple-tab-trigger', function (e) {
            e.preventDefault();
            let _this = $(this);
            let _wrapper = _this.closest('.simple-tabs');
            let _target = $(_this.attr('data-target'));

            if (_this.hasClass('active')) {
                // Close current tab
                _this.removeClass('active');
                _target.removeClass('active');
            } else {
                // Close other tabs
                _wrapper.find('.simple-tab-trigger').removeClass('active');
                _wrapper.find('.simple-tab-content').removeClass('active');

                // Open current tab
                _this.addClass('active');
                _target.addClass('active');
            }
        })
    });
})(jQuery);
