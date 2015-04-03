---
title: Skins
page_title: Skins | UI for ASP.NET AJAX Documentation
description: Skins
slug: button/appearance-and-styling/skins
tags: skins
published: True
position: 0
---

# Skins



__RadButton__uses __skins__ to control its overall look-and-feel.A skin is a set of images and a CSS stylesheet that can be applied to the controlelements (items, images, etc.) and defines their look and feel.

To apply a skin to a __RadButton__control, set its __Skin__ property.

__RadButton__ is installed with a number of preset skins. These are shown below:
>caption 

![radbutton-skins](images/radbutton-skins.png)

>note The __Hay__ , __Forest__ , __Sitefinity__ and __Transparent__ skins are obsolete and have been removed from the Telerik.Web.UI.Skins.dll assembly as of __Q1 2014__ .	You can find more information on the matter in[this blog post](http://blogs.telerik.com/aspnet-ajax/posts/13-04-11/6-telerik-asp.net-ajax-skins-going-obsolete).
>


## Customizing Skins

You can tweak the existing skins or create your own. Each skin has two main elements: images and a stylesheet.When creating your own, it is a good idea to start with the stylesheet for an existing skin and alter that.See [Creating a Custom Skin For RadButton]({%slug button/appearance-and-styling/creating-a-custom-skin%}) for astep-by-step walk through. To use your own skin

1. Add the new CSS file to your project.

1. Drag and drop the CSS file from the Project Explorer onto your Web page.

1. Set the __EnableEmbeddedSkins__ property of the control to __False__.

The stylesheet for a __RadButton__skin has the name __Button.[SkinName].css__ and canbe found in the __...Skins/[SkinName]__ directory. The images are found inthe __...Skins/[SkinName]/Button__ directory. For example, the stylesheet for the "Black" skin iscalled Button.Black.css and is located in the ...Skins/Black directory. The images are found in the ...Skins/Black/Button directory.The images are referenced by name from within the stylesheet.

# See Also

 * [CSS Classes]({%slug button/appearance-and-styling/css-classes%})

 * [Creating a Custom Skin]({%slug button/appearance-and-styling/creating-a-custom-skin%})

 * [Custom Height Tutorial]({%slug button/appearance-and-styling/custom-height-tutorial%})

 * [Primary and Secondary Action Buttons]({%slug button/appearance-and-styling/primary-and-secondary-action-buttons%})
