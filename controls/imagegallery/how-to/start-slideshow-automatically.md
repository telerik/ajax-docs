---
title: Start Slideshow automatically
page_title: Start Slideshow automatically | UI for ASP.NET AJAX Documentation
description: Start Slideshow automatically
slug: imagegallery/how-to/start-slideshow-automatically
tags: start,slideshow,automatically
published: True
position: 0
---

# Start Slideshow automatically


There are occasions when you would like to start a slideshow in **RadImageGallery** as soon as the page is loaded. This feature can be enabled with just one line of JavaScript. You need to handle the client-side **pageLoad()** method and call **playSlideshow()** for the ImageGallery control.

````JavaScript
function pageLoad() {
    $find("<%= RadImageGallery1.ClientID %>").playSlideshow();
}
````
````ASP.NET
<telerik:RadImageGallery RenderMode="Lightweight" runat="server" ID="RadImageGallery1" ImagesFolderPath="~/Images">
</telerik:RadImageGallery>
````


In addition you can also enable looping for the items. This way the slideshow will start over after the last image is displayed. For that you need to set the **LoopItems** property to **true**.


# See Also

* [Slideshow for RadImageGallery]({%slug imagegallery/functionality/animations#slideshow%})


