(function ($) {

  // url
  // timezone
  // welcome
  // noframes
  // width
  // height
  $.fn.hipchat = function (options) {
    if (options && options.url && options.timezone) {
      var params = {
        anonymous: 1,
        timezone: options.timezone,
        minimal: 1
      };
      if (options.welcome) {
        params.welcome_msg = options.welcome;
      }
      var url = options.url + (options.url.indexOf('?') > 0 ? '&' : '?') + $.param(params);
      console.log(url);
      var w = options.width || '100%';
      var h = options.height || 400;
      var nf = (options.noframes || '');
      this.html('<iframe src="' + url + '" frameborder="' + 0 + '" width="' + w + '" height="' + h + '">' + nf + '</iframe>');
    }
    return this;
  };

}(jQuery));
