jQuery HipChat Plugin
=====================

The jQuery HipChat Plugin is a jQuery plugin that embeds a minimal HipChat chat UI into the target page, allowing
visitor to anonymously chat in a HipChat room that has public access enabled.

Requirements
-----

* jQuery probably any version

Getting Started
-----

# Load jQuery and the plugin:

  <!-- use local jQuery if you prefer -->
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js" type="text/javascript"></script>
  <script src="jquery.hipchat.js" type="text/javascript"></script>

# Find your HipChat room's guest access URL:
  # Visit the HipChat room you want to allow guest access to
  # Click the checkbox next to "Guest access is off" if
    guest access is not already allowed.
  # Right-click on the guest access URL

# In $(document).ready(), invoke the plugin, replacing "YOUR_GUEST_ACCESS_URL" with the copied value from above:

     $(function() {
       $('.any-div-class').hipchat({
           url: "YOUR_GUEST_ACCESS_URL",
           timezone: "PST"
         };
       });
     });

# When you reload the page, it should now have a window that allows visitors to chat in your room anonymously!

Options
------

| Name        | Description | Required  |
| ----------- | ----------- | --------- |
| url         | The guest access URL for the Hipchat room | Yes |
| timezone    | The timezone for message time rendering.  Can be hardcoded or determined via something like [jstz](http://pellepim.bitbucket.org/jstz/)      |  Yes |
| welcome     | The welcome message you want to show to visitors as the first message in the chat window | No |
| noframes    | Content to include when iframes are disabled in the browser | No |
| width       | The width of the iframe, defaults to 100% | No |
| height      | The height of the iframe | No |

License
------

This project is available under the Apache License, Version 2
