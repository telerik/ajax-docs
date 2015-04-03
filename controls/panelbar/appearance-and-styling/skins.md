---
title: Skins
page_title: Skins | UI for ASP.NET AJAX Documentation
description: Skins
slug: panelbar/appearance-and-styling/skins
tags: skins
published: True
position: 4
---

# Skins



__RadPanelBar__ uses __skins__ to control the overall look-and-feel of the panel bar. A skin is a set of images and a CSS stylesheet that can be applied to the panel bar elements (items, images, etc.) and defines their look and feel. To apply a skin to the panel bar, set its __Skin__ property, either using the properties pane or the __RadPanelBar__[Smart Tag]({%slug panelbar/design-time/smart-tag%}).

__RadPanelBar__ is installed with a number of preset skins:![PanelBar Skins](images/panelbar_skins_thumb.png)

>note The __Hay__ , __Forest__ , __Sitefinity__ and __Transparent__ skins are obsolete and have been removed from the Telerik.Web.UI.Skins.dll assembly as of __Q1 2014__ .You can find more information on the matter in[this blog post](http://blogs.telerik.com/aspnet-ajax/posts/13-04-11/6-telerik-asp.net-ajax-skins-going-obsolete).
>


## Using No Skin

To use the panel bar with no skin, set the __Skin__ property to an empty string and set the __EnableEmbeddedSkins__ property to __False__. When using no skin, you will probably want to use your own [CSS classes]({%slug panelbar/appearance-and-styling/setting--the-css-class-of-items%}) to adjust the appearance of the panel bar.

## Customizing Skins

You can tweak the existing skins, or create your own. Each skin has two main elements: images and a stylesheet. When creating your own, it is a good idea to start with the stylesheet for an existing skin and alter that. See [Tutorial: Creating a Custom Skin]({%slug panelbar/appearance-and-styling/tutorial:-creating-a-custom-skin%}) for a step-by-step walk through. To use your own skin

1. Add the new CSS file to your project.

1. Drag and drop the CSS file from the Project Explorer onto your Web page.

1. Set the __EnableEmbeddedSkins__ property of the __RadPanelBar__ to __False__.

The stylesheet for a __RadPanelBar__ skin has the name __PanelBar.[SkinName].css__ and can be found in the __...Skins/[SkinName]__ directory. The images are found in the __...Skins/[SkinName]/PanelBar__ directory. For example, the stylesheet for the "Black" skin is called PanelBar.Black.css and is located in the ...Skins/Black directory. The images are found in the ...Skins/Black/PanelBar directory. The images are referenced by name from within the stylesheet.

For more information on the CSS File structure, see [Understanding the Skin CSS File]({%slug panelbar/appearance-and-styling/understanding-the-skin-css-file%}).

# See Also

 * [Setting  the CSS Class of Items]({%slug panelbar/appearance-and-styling/setting--the-css-class-of-items%})

 * [Adding Images to Items]({%slug panelbar/appearance-and-styling/adding-images-to-items%})

 * [Overview]({%slug panelbar/templates/overview%})
