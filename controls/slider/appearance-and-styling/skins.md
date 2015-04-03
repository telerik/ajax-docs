---
title: Skins
page_title: Skins | UI for ASP.NET AJAX Documentation
description: Skins
slug: slider/appearance-and-styling/skins
tags: skins
published: True
position: 0
---

# Skins



To make customizing the appearance of __RadSlider__as easy as possible, the control uses __skins.__ A skin is a set of images and a CSS stylesheet that are applied to the HTML elements which make up the RadSlider control, defining the look and feel.

To apply a skin, set the __Skin__ property of the __RadSlider__control. Set the __Skin__ property using the Properties Window or the control's [Smart Tag]({%slug slider/design-time%}).

__RadSlider__is installed with a number of preset skins. These are shown below:
>caption 

![radslider-skins](images/radslider-skins.png)

>note The __Hay__ , __Forest__ , __Sitefinity__ and __Transparent__ skins are obsolete and have been removed from the Telerik.Web.UI.Skins.dll assembly as of __Q1 2014__ .	You can find more information on the matter in[this blog post](http://blogs.telerik.com/aspnet-ajax/posts/13-04-11/6-telerik-asp.net-ajax-skins-going-obsolete).
>


## Customizing Skins

You can tweak the existing skins, or create your own. Each skin has two main elements: images and a stylesheet. When creating your own, it is a good idea to start with the stylesheet for an existing skin and alter that. See the [Tutorial: Creating a Custom Skin]({%slug slider/appearance-and-styling/tutorial:-creating-a-custom-skin%}) topic for a step-by-step walk through. To use your own skin

1. Add the new CSS file to your project.

1. Drag and drop the CSS file from the Project Explorer onto your Web page.

1. Set the __EnableEmbeddedSkins__ property of the controls that use the skin to __False__.

The stylesheet for a __RadSlider__skin has the name __RadSlider.[SkinName].css__ and can be found in the __...Skins/[SkinName]__ directory. The images are found in the __...Skins/[SkinName]/Slider__directory. For example, the stylesheet for the "Black" skin is called Slider.Black.css and is located in the ...Skins/Black directory.The images are found in the ...Skins/Black/Slider directory. The images are referenced by name from within the stylesheet.

For information on the CSS File structure, see the [Understanding the Skin CSS File]({%slug slider/appearance-and-styling/understanding-the-skin-css-file%}) topic.

# See Also

 * [Tutorial: Creating a Custom Skin]({%slug slider/appearance-and-styling/tutorial:-creating-a-custom-skin%})

 * [Understanding the Skin CSS File]({%slug slider/appearance-and-styling/understanding-the-skin-css-file%})

 * [CSS Classes]({%slug slider/appearance-and-styling/css-classes%})
