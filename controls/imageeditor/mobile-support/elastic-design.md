---
title: Elastic Design
page_title: Elastic Design | RadImageEditor for ASP.NET AJAX Documentation
description: Elastic Design
slug: imageeditor/mobile-support/elastic-design
tags: elastic,design,image editor
published: True
position: 1
---

# Elastic Design


This article explains the **elastic design capabilities RadImageEditor offers**. The [Lightweight RenderMode]({%slug imageeditor/mobile-support/render-modes%}) of RadImageEditor supports **elastic design as of Q3 2015** (**Figure 1**).

@[template](/_templates/common/render-mode.md#resp-design-desc "slug-el: no, slug-fl: no")


>caption Figure 1: Comparison between the appearance of a RadImageEditor with regular font size and with increased font size (50% scale). See the code in **Example 2**.

![image-editor-elastic-design](images/image-editor-elastic-design.png)


**RadImageEditor** does not create elastic design by itself, but can fit in a page that follows this pattern. This means that its **Lightweight RenderMode** supports **changing the font size** without breaking the control's appearance - if the new size is larger than the original, the elements in the control will simply increase their size as well to accommodate the text. This fluid layout is achieved by using `em` units for setting dimensions and paddings in the control, instead of `px`because `em` units are tied to the font size. This allows dimensions and sizes to scale with the font size.


>note **RadImageEditor** takes the font-size of the page automatically. If the developer does not set it explicitly (**Example 1**), this is up to the client's browser and a common default value is 16px.


>caption **Example 1**: Setting default font for the page with the default value for the Telerik controls.

```CSS
body {
	font-size: 12px; /* 12px is the default value for Telerik controls */
	font-family: "Segoe UI", Arial, Sans-serif;
}
````

>important As of Q3 2015 only the ImageEditor control itself is fully elastic (i.e., takes the font size of the page). The toolbar requires additional CSS rules and the dialogs do not support elastic design (i.e., there may be issues with their appearance). This will be improved in future releases.


>caption **Example 2**: Changing the font-size of an ImageEditor and its toolbar. 

````CSS
div.RadImageEditor,
div.RadImageEditor div.RadToolBar
{
	font-size: 16px;
}
````
````ASP.NET
<telerik:RadImageEditor RenderMode="Lightweight" runat="server" ID="RadImageEditor1" ImageUrl="~/images/logo.jpg"></telerik:RadImageEditor>
````


# See Also


 * [Render Modes]({%slug imageeditor/mobile-support/render-modes%})


