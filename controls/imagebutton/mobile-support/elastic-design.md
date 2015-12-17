---
title: Elastic Design
page_title: Elastic Design | RadImageButton for ASP.NET AJAX Documentation
description: Elastic Design
slug: imagebutton/mobile-support/elastic-design
tags: elastic,design
published: True
position: 1
---

# Elastic Design

This article explains the **elastic design capabilities RadImageButton offers**. **Example 1** below shows the basic approaches you can use to scale the control by only changing its default font size.

Generally, responsive design means that the page and its content are able to adapt to different screen resolutions without deteriorating the user experience. This often includes changing the font size and having dimensions set in percent.

>caption Figure 1: Comparison between appearance of a RadImageButton with regular font size and with increased font size.

![imagebutton-elastic-design](images/imagebutton-elastic-design.png)

>caption Example 1: Shows how to increase the font size of a RadImageButton in Figure 1.

````CSS
<style type="text/css">
    button.RadButton {
        font-size: 19px;
    }
</style>
````

````ASP.NET
<telerik:RadImageButton runat="server" ID="RadImageButton2" Text="Elastic Button" Width="140px" Height="50px">
    <Image Url="images/blue_button_bg.png" />
</telerik:RadImageButton>
````

You can download the image used in this example from here—[blue_button_bg.png](images/blue_button_bg.png).

## See Also

 * [Mobile Support Overview]({%slug imagebutton/mobile-support/overview%})

 * [Render Modes]({%slug imagebutton/mobile-support/render-modes%})

 * [Fluid Design]({%slug imagebutton/mobile-support/fluid-design%})

