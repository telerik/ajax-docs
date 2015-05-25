---
title: Embedded Icons
page_title: Embedded Icons | RadNotification for ASP.NET AJAX Documentation
description: Embedded Icons
slug: notification/functionality/embedded-icons
tags: embedded,icons
published: True
position: 1
---

# Embedded Icons



## Built-in Icons

**RadNotification** provides two icons in its UI to help convey the message - the **TitleIcon** and **ContentIcon**. The list with the possible values for the embedded icons is as follows:

* info
* delete
* deny
* edit
* ok
* warning
* none

>note The built-in icons work only when the embedded skins are used. If you externalize the skins or use a custom skin, you cannot set them via the above shorthand values. If you wish to use them in this case please examine the [Using the built-in icons with a custom skin](http://www.telerik.com/support/kb/aspnet-ajax/notification/using-the-built-in-icons-with-a-custom-skin.aspx) Knowledge Base article on the matter.

## Using a Custom Image

You can point the **ContentIcon** and **TitleIcon** properties to a URL with your own image as shown in **Example 1**. You can use an absolute or a relative URL, and an ASP root-relative path (e.g., `~/images/my-custom-image.png`).

In this case, the **TitleIcon**'s size is 16 by 16 pixels and the **ContentIcon**'s size is 32 by 32 pixels. With the Classic [RenderMode]({%slug notification/mobile-support/render-modes%}), you will get `<img />` tags, while the Lightweight mode uses a `span` element with the `background-image` CSS property.

**Example 1**: Setting the URL to a custom image to a RadNotification

````ASP.NET
<telerik:RadNotification ID="RadNotification1" runat="server" TitleIcon="~/images/icon_16x16.png" ContentIcon="~/images/icon_32x32.png">
</telerik:RadNotification>
````
````C#
RadNotification1.TitleIcon = "~/images/icon_16x16.png";
RadNotification1.ContentIcon = "~/images/icon_32x32.png";
````
````VB
RadNotification1.TitleIcon = "~/images/icon_16x16.png"
RadNotification1.ContentIcon = "~/images/icon_32x32.png"
````


# See Also

 * [Notification Configurator](http://demos.telerik.com/aspnet-ajax/notification/examples/configurator/defaultcs.aspx)
