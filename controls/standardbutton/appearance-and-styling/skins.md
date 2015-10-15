---
title: Skins
page_title: Skins | RadStandardButton for ASP.NET AJAX Documentation
description: Skins
slug: standardbutton/appearance-and-styling/skins
tags: skins
published: True
position: 0
---

# Skins

**RadStandardButton** uses **skins** to control its overall look-and-feel. A skin is a set of images and a CSS stylesheet that can be applied to the control elements (items, images, etc.) and defines their look and feel.

To apply a skin to a **RadStandardButton** control, set its **Skin** property.

**RadStandardButton** is installed with a number of preset skins. These are shown below:

![radstandardbutton-skins](images/radstandardbutton-skins.png)

## Customizing Skins

You can tweak the existing skins or create your own. Each skin has two main elements: images and a stylesheet. When creating your own, it is a good idea to start with the stylesheet for an existing skin and alter that. See [Creating a Custom Skin For RadStandardButton]({%slug standardbutton/appearance-and-styling/creating-a-custom-skin%}) for a step-by-step walk through. To use your own skin

1. Add the new CSS file to your project.

1. Drag and drop the CSS file from the Project Explorer onto your Web page.

1. Set the **EnableEmbeddedSkins** property of the control to **False**.

The stylesheet for a **RadStandardButton** skin has the name **Button.[SkinName].css** and can be found in the **...Skins/[SkinName]** directory. The images are found in the **...Skins/[SkinName]/Button** directory. For example, the stylesheet for the "Black" skin is called Button.Black.css and is located in the ...Skins/Black directory. The images are found in the ...Skins/Black/Button directory. The images are referenced by name from within the stylesheet.

## See Also

 * [CSS Classes]({%slug standardbutton/appearance-and-styling/css-classes%})

 * [Creating a Custom Skin]({%slug standardbutton/appearance-and-styling/creating-a-custom-skin%})

 * [Primary and Secondary Action Buttons]({%slug standardbutton/appearance-and-styling/primary-and-secondary-action-buttons%})
