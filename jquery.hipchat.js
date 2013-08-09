(function ($) {

  // Creates an iframe with an embedded HipChat conversation window.
  //
  // Options:
  //   url        - The url to the room to embed; required
  //   timezone   - The timezone to use in the embedded room; required
  //   welcome    - A welcome message to display when the room is joined; optional
  //   noframes   - Content to include when iframes are disabled in the browser; optional
  //   width      - The width of the iframe; defaults to 100%
  //   height     - The height of the iframe; defaults to 400px
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
      if (url.indexOf('https://') !== 0) {
        url = 'https://' + url;
      }
      var w = options.width || '100%';
      var h = options.height || 400;
      var nf = (options.noframes || '');
      this.html('<iframe src="' + url + '" frameborder="' + 0 + '" width="' + w + '" height="' + h + '">' + nf + '</iframe>');
    }
    return this;
  };

}(jQuery));
