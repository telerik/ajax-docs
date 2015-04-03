---
title: Skins
page_title: Skins | UI for ASP.NET AJAX Documentation
description: Skins
slug: asyncupload/appearance-and-styling/skins
tags: skins
published: True
position: 0
---

# Skins



__RadAsyncUpload__ use *skins* to control its overall look-and-feel. A skin is a set of images and a CSS style sheet that can be applied to the control elements (items, images, etc.) and defines their look and feel. To apply a skin to a __RadAsyncUpload__ set its __Skin__ property, either using the properties pane or the control's Smart Tag.

__RadAsyncUpload__ is installed with a number of preset skins:![Skins](images/asyncupload_skins_thumb.png)

>note The __Hay__ , __Forest__ , __Sitefinity__ and __Transparent__ skins are obsolete and have been removed from the Telerik.Web.UI.Skins.dll assembly as of __Q1 2014__ .You can find more information on the matter in[this blog post](http://blogs.telerik.com/aspnet-ajax/posts/13-04-11/6-telerik-asp.net-ajax-skins-going-obsolete).
>


## Not Using Skins

If you do not set the __Skin__ property, __RadAsyncUpload__ will automatically use the "Default" skin. If you do not want to use a skin with your control, set its __Skin__ property to an empty string and set the __EnableEmbeddedSkins__ property to __false__.

## Customizing Skins

You can tweak the existing skins or create your own. Each skin has two main elements: images and a style sheet. When creating your own, it is a good idea to start with the style sheet for an existing skin and alter that. See [ Tutorial: Creating a Custom Skin ]({%slug asyncupload/appearance-and-styling/tutorial-creating-a-custom-skin%}) for a step-by-step walk through. To use your own skin:

1. Add the new CSS file to your project.

1. Drag and drop the CSS file from the Project Explorer onto your webpage.

1. Set the __EnableEmbeddedSkins__ property of the control to __false__.

The style sheet for a __RadAsyncUpload__ skin has the name __Upload.[SkinName].css__ and can be found in the __...Skins/[SkinName]__ directory. The images are found in the __...Skins/[SkinName]/Upload__ directory. For example, the style sheet for the "Black" skin is called __Upload.Black.css__ and is located in the ...__Skins/Black__ directory. The images are found in the ...__Skins/Black/Upload__ directory. The images are referenced by name from within the style sheet.

## See Also

[Getting Started]({%slug asyncupload/getting-started%})

[Migrating from RadUpload for ASP.NET AJAX to RadAsyncUpload]({%slug asyncupload/migrating-from-radupload-for-asp.net-ajax-to-radasyncupload%})

[RadAsyncUpload vs. RadUpload for ASP.NET AJAX]({%slug asyncupload/radasyncupload-vs-radupload%})
