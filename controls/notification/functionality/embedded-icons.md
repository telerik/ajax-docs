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

The icons are an `<img />` element in the Classic [RenderMode]({%slug notification/mobile-support/render-modes%}) and font-icons in the Lightweight RenderMode.

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


## Using Custom Font Icons

The [Lightweight RenderMode]({%slug notification/mobile-support/render-modes%}) uses font-icons for the embedded icons and lets you use font-icons for your custom icons.

If you do not provide an URL to an image, the string value will be treated as a CSS class that will be applied to the `<span>` element that creates the icon. **Examples 2-5** show how you can override the built-in CSS so you can use your custom icons.

**Example 2**: Changing the font-icon from the Telerik built-in font.

````CSS
div.RadNotification .myFontIconCssClass:before
{
	content: "\E043";
}
````

````ASP.NET
<telerik:RadNotification ID="RadNotification2" runat="server" VisibleOnPageLoad="true" Position="Center" Width="200" Height="200" RenderMode="Lightweight" AutoCloseDelay="0"
	ContentIcon="myFontIconCssClass" >
</telerik:RadNotification>
````

**Example 3**: Using a custom font for a RadNotification's icon. Note that the `fa fa-camera-retro` class is provided by the font author and contains the needed rules to create a font-icon with the appropriate symbol. What you need to do is to ensure that the `.rnIcon:before` element has the desired font applied (See **Example 5**).
````CSS
div.RadNotification .fa.fa-camera-retro.rnIcon:before
{
	font-family: "FontAwesome";
}
````

````ASP.NET
<telerik:RadNotification ID="RadNotification1" runat="server" VisibleOnPageLoad="true" Position="Center" Width="200" Height="200" RenderMode="Lightweight" AutoCloseDelay="0"
	TitleIcon="fa fa-camera-retro"></telerik:RadNotification>
````


**Example 4**: A sample declaration for including FontAwesome CSS on the page so you can run Example 3.
````HTML
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />
````

**Example 5**: Using a custom font with your own CSS rules for selecting the content.
````CSS
div.RadNotification .myFontIconCssClass:before
{
	font-family: "myCustomFontIconFont";
	content: "\E043"; /* Apply your desired content according to your own font */
}
````

````ASP.NET
<telerik:RadNotification ID="RadNotification2" runat="server" VisibleOnPageLoad="true" Position="Center" Width="200" Height="200" RenderMode="Lightweight" AutoCloseDelay="0"
				ContentIcon="myFontIconCssClass" >
</telerik:RadNotification>
````


# See Also

 * [Notification Configurator](http://demos.telerik.com/aspnet-ajax/notification/examples/configurator/defaultcs.aspx)

 * [Render Modes]({%slug notification/mobile-support/render-modes%}) 
