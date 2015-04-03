---
title: Skins
page_title: Skins | UI for ASP.NET AJAX Documentation
description: Skins
slug: splitter/appearance-and-styling/skins
tags: skins
published: True
position: 1
---

# Skins



__RadSplitter__uses __skins__ to control its overall look-and-feel. A skin is a set of images and a CSS stylesheet that can be applied to the control elements (items, images, etc.) and defines their look and feel. The __RadSplitter__skin affects the appearance of any __RadPane__, __RadSplitBar__, __RadSlidingZone__, and __RadSlidingPane__ controls nested inside the splitter. You can however, assign a different skin to any nested splitters.

To apply a skin to a __RadSplitter__control, set its __Skin__ property, either using the properties pane or the [Smart Tag]({%slug splitter/design-time%}).

__RadSplitter__ is installed with a number of preset skins. These are shown below:![radsplitter-skins](images/radsplitter-skins.png)

>note The __Hay__ , __Forest__ , __Sitefinity__ and __Transparent__ skins are obsolete and have been removed from the Telerik.Web.UI.Skins.dll assembly as of __Q1 2014__ .You can find more information on the matter in[this blog post](http://blogs.telerik.com/aspnet-ajax/posts/13-04-11/6-telerik-asp.net-ajax-skins-going-obsolete).
>


## Customizing Skins

You can tweak the existing skins or create your own. Each skin has two main elements: images and a stylesheet. When creating your own, it is a good idea to start with the stylesheet for an existing skin and alter that. See [Tutorial: Creating a Custom Skin]({%slug splitter/appearance-and-styling/tutorial:-creating-a-custom-skin%}) for a step-by-step walk through. To use your own skin

1. Add the new CSS file to your project.

1. Drag and drop the CSS file from the Project Explorer onto your Web page.

1. Set the __EnableEmbeddedSkins__ property of the control to __False__.

The stylesheet for a __RadSplitter__skin has the name __Splitter.[SkinName].css__ and can be found in the __...Skins/[SkinName]__ directory. The images are found in the __...Skins/[SkinName]/Splitter__ directory. For example, the stylesheet for the "Black" skin is called Splitter.Black.css and is located in the ...Skins/Black directory. The images are found in the ...Skins/Black/Splitter directory. The images are referenced by name from within the stylesheet.

For more information on the CSS File structure, see [Understanding the Skin CSS File]({%slug splitter/appearance-and-styling/understanding-the-skin-css-file%}).
