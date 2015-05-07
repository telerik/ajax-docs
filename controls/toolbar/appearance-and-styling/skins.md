---
title: Skins
page_title: Skins | RadToolBar for ASP.NET AJAX Documentation
description: Skins
slug: toolbar/appearance-and-styling/skins
tags: skins
published: True
position: 3
---

# Skins


**RadToolBar** uses **skins** to control the overall look-and-feel of the toolbar. A skin is a set of images and a CSS stylesheet that can be applied to the toolbar elements (items, images, etc.) and defines their look and feel. To apply a skin to the toolbar, set its **Skin** property, either using the properties pane or the **RadToolBar** [Smart Tag](5BB964CF-AA36-443D-824B-60964E411B25).

**RadToolBar** is installed with a number of built-in skins:

![ToolBar Skins Thumbnails](images/toolbar_skins_thumb.png)

>note The **Hay**, **Forest**, **Sitefinity** and **Transparent** skins are obsolete and have been removed from the Telerik.Web.UI.Skins.dll assembly as of **Q1 2014**. You can find more information on the matter in [this blog post](http://blogs.telerik.com/aspnet-ajax/posts/13-04-11/6-telerik-asp.net-ajax-skins-going-obsolete).
>


## Using No Skin

To use the toolbar with no skin, set the **Skin** property to an empty string and set the **EnableEmbeddedSkins** property to **False**. When using no skin, you will probably want to use your own [CSS classes]({%slug toolbar/appearance-and-styling/setting--the-css-class-of-buttons%}) to adjust the appearance of the toolbar.

## Customizing Skins

You can tweak the existing skins, or create your own. Each skin has two main elements: images and a stylesheet. When creating your own, it is a good idea to start with the stylesheet for an existing skin and alter that. See [Tutorial: Creating a Custom Skin]({%slug toolbar/appearance-and-styling/tutorial-creating-a-custom-skin%}) for a step-by-step walk through. To use your own skin

1. Add the new CSS file to your project.

1. Drag and drop the CSS file from the Project Explorer onto your Web page.

1. Set the **EnableEmbeddedSkins** property of the **RadToolBar** to **False**.

The stylesheet for a **RadToolBar** skin has the name **ToolBar.[SkinName].css** and can be found in the **...Skins/[SkinName]** directory. The images are found in the **...Skins/[SkinName]/ToolBar** directory. For example, the stylesheet for the "Black" skin is called ToolBar.Black.css and is located in the ...Skins/Black directory. The images are found in the ...Skins/Black/ToolBar directory. The images are referenced by name from within the stylesheet.

For more information on the CSS File structure, see [Understanding the Skin CSS File]({%slug toolbar/appearance-and-styling/understanding-the-skin-css-file%}).

# See Also

 * [Setting  the CSS Class of Buttons]({%slug toolbar/appearance-and-styling/setting--the-css-class-of-buttons%})

 * [Adding Images to Buttons]({%slug toolbar/appearance-and-styling/adding-images-to-buttons%})

 * [Controlling Appearance]({%slug toolbar/appearance-and-styling/controlling-appearance%})
