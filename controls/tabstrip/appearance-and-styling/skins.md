---
title: Skins
page_title: Skins | RadTabStrip for ASP.NET AJAX Documentation
description: Skins
slug: tabstrip/appearance-and-styling/skins
tags: skins
published: True
position: 4
---

# Skins



**RadTabStrip** uses **skins** to control the overall look-and-feel of the tab strip. A skin is a set of images and a CSS stylesheet that can be applied to the tab strip elements (items, images, etc.) and defines their look and feel. To apply a skin to the tab strip, set its **Skin** property, either using the properties pane or the **RadTabStrip** [Smart Tag]({%slug tabstrip/design-time/smart-tag%}).

**RadTabStrip** is installed with a number of common skins:

![](images/tabstrip-skins.png) 


 @[template - Material skin is available only in Lightweight mode](/_templates/common/skins-notes.md#material-only-in-lightweight) 





## Using No Skin

To use the tab strip with no skin, set the **Skin** property to an empty string and set the **EnableEmbeddedSkins** property to **False**. When using no skin, you will probably want to use your own [CSS classes]({%slug tabstrip/appearance-and-styling/setting-the-css-class-of-tabs%}) to adjust the appearance of the tab strip.

## Customizing Skins

You can tweak the existing skins, or create your own. Each skin has two main elements: images and a stylesheet. When creating your own, it is a good idea to start with the stylesheet for an existing skin and alter that. See [Tutorial: Creating a Custom Skin]({%slug tabstrip/appearance-and-styling/tutorial-creating-a-custom-skin%}) for a step-by-step walk through. To use your own skin

1. Add the new CSS file to your project.

1. Drag and drop the CSS file from the Project Explorer onto your Web page.

1. Set the **EnableEmbeddedSkins** property of the **RadTabStrip** to **False**.

The stylesheet for a **RadTabStrip** skin has the name **TabStrip.[SkinName].css** and can be found in the **...Skins/[SkinName]** directory. The images are found in the **...Skins/[SkinName]/TabStrip** directory. For example, the stylesheet for the "Black" skin is called TabStrip.Black.css and is located in the ...Skins/Black directory. The images are found in the ...Skins/Black/TabStrip directory. The images are referenced by name from within the stylesheet.

For more information on the CSS File structure, see [Understanding the Skin CSS File]({%slug tabstrip/appearance-and-styling/understanding-the-skin-css-file%}).

# See Also

 * [Setting the CSS Class of Tabs]({%slug tabstrip/appearance-and-styling/setting-the-css-class-of-tabs%})

 * [Adding Images to Tabs]({%slug tabstrip/appearance-and-styling/adding-images-to-tabs%})

 * [Controlling Appearance]({%slug tabstrip/appearance-and-styling/controlling-appearance%})

 * [Telerik ThemeBuilder for ASP.NET AJAX](http://themebuilder.telerik.com/)


