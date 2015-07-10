---
title: Skins
page_title: Skins | RadButton for ASP.NET AJAX Documentation
description: Skins
slug: button/appearance-and-styling/skins
tags: skins
published: True
position: 0
---

# Skins

**RadButton** uses **skins** to control its overall look-and-feel. A skin is a set of images and a CSS stylesheet that can be applied to the controlelements (items, images, etc.) and defines their look and feel.

To apply a skin to a **RadButton** control, set its **Skin** property.

**RadButton** is installed with a number of preset skins. These are shown below:

![radbutton-skins](images/radbutton-skins.png)

## Customizing Skins

You can tweak the existing skins or create your own. Each skin has two main elements: images and a stylesheet. When creating your own, it is a good idea to start with the stylesheet for an existing skin and alter that. See [Creating a Custom Skin For RadButton]({%slug button/appearance-and-styling/creating-a-custom-skin%}) for a step-by-step walk through. To use your own skin

1. Add the new CSS file to your project.

1. Drag and drop the CSS file from the Project Explorer onto your Web page.

1. Set the **EnableEmbeddedSkins** property of the control to **False**.

The stylesheet for a **RadButton** skin has the name **Button.[SkinName].css** and can be found in the **...Skins/[SkinName]** directory. The images are found in the **...Skins/[SkinName]/Button** directory. For example, the stylesheet for the "Black" skin is called Button.Black.css and is located in the ...Skins/Black directory. The images are found in the ...Skins/Black/Button directory. The images are referenced by name from within the stylesheet.

## See Also

 * [CSS Classes]({%slug button/appearance-and-styling/css-classes%})

 * [Creating a Custom Skin]({%slug button/appearance-and-styling/creating-a-custom-skin%})

 * [Custom Height Tutorial]({%slug button/appearance-and-styling/custom-height-tutorial%})

 * [Primary and Secondary Action Buttons]({%slug button/appearance-and-styling/primary-and-secondary-action-buttons%})
