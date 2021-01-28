---
title: Skins
page_title: Skins - RadImageEditor
description: Check our Web Forms article about Skins.
slug: imageeditor/appearance-and-styling/skins
tags: skins
published: True
position: 0
---

# Skins



**RadImageEditor** uses **skins** to control its overall look-and-feel. A skin is a set of images and a CSS stylesheet that can be applied to the control elements (items, images, etc.) and defines their look and feel.

To apply a skin to a **RadImageEditor** control, set its **Skin** property.

**RadImageEditor** is installed with a number of preset skins. These are shown below:


![RadImageEditor-skins](images/imageeditor-skins.png) 


 @[template - Material skin is available only in Lightweight mode](/_templates/common/skins-notes.md#material-only-in-lightweight) 




## Customizing Skins

You can tweak the existing skins or create your own. Each skin has two main elements: images and a stylesheet. When creating your own, it is a good idea to start with the stylesheet for an existing skin and alter that. See [Creating a Custom Skin For RadImageEditor]({%slug imageeditor/appearance-and-styling/creating-a-custom-skin%}) for a step-by-step walk through. To use your own skin

1. Add the new CSS file to your project.

1. Drag and drop the CSS file from the Project Explorer onto your Web page.

1. Set the **EnableEmbeddedSkins** property of the control to **False**.

The stylesheet for a **RadImageEditor** skin has the name **ImageEditor.[SkinName].css** and can be found in the **...Skins/[SkinName]** directory. The images are found in the **...Skins/[SkinName]/ImageEditor** directory. For example, the stylesheet for the "Black" skin is called ImageEditor.Black.css and is located in the ...Skins/Black directory. The images are found in the ...Skins/Black/ImageEditor directory. The images are referenced by name from within the stylesheet.


## See Also

 * [Telerik ThemeBuilder for ASP.NET AJAX](https://themebuilder.telerik.com/)


