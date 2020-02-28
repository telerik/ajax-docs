---
title: Skins
page_title: Skins | RadDropDownList for ASP.NET AJAX Documentation
description: Skins
slug: dropdownlist/appearance-and-styling/skins
tags: skins
published: True
position: 0
---

# Skins



To make customizing the appearance of **RadDropDownList** as easy as possible, the control uses **skins.** A skin is a set of images and a CSS stylesheet that can be applied to RadDropDownList elements (items, arrows, drop-down container etc.) and defines their look and feel. To apply a skin to RadDropDownList, set its **Skin** property, either using the properties pane or the **RadDropDownList** [Smart Tag]({%slug dropdownlist/design-time/smart-tag%}).

**RadDropDownList** is installed with a number of built-in skins:![dropdownlist skins](images/dropdownlist-skins.png)  


 @[template - Material skin is available only in Lightweight mode](/_templates/common/skins-notes.md#material-only-in-lightweight) 




## Customizing Skins

You can tweak the existing skins, or create your own. Each skin has two main elements: images and a stylesheet. When creating your own, it is a good idea to start with the stylesheet of an existing skin and alter that. To use your own skin:

1. Add the new CSS file to your project.

2. Drag and drop the CSS file from the Project Explorer onto your Web page.

3. Set the **EnableEmbeddedSkins** property of RadDropDownList to **False**.

Depending on the [**Render Mode**]({%slug controls/render-modes%}) that is chosen for the RadDropDownList, the Skin files could be found in different locations:


### Skins in Classic Render Mode

The stylesheet for a RadDropDownList skin in **Classic Render Mode** has the name **DropDownList.[SkinName].css** and can be found in the **...Skins/[SkinName]** directory. The images are found in the **...Skins/[SkinName]/DropDownList** directory.

For example, the stylesheet for the "Silk" skin is called **DropDownList.Silk.css** and is located in the **...Skins/Silk** directory. The images are found in the **...Skins/Silk/DropDownList** directory. The images are referenced by name from within the stylesheet.



### Skins in Lightweight Render Mode

The stylesheet for a RadDropDownList skin in **Lightweight Render Mode** also has the name **DropDownList.[SkinName].css**, but it could be found in the **...Skins/[SkinName]Lite** directory. For example, the stylesheet for the "Silk" skin is called **DropDownList.Silk.css** and is located in the **...Skins/SilkLite** directory.

The **Lightweight Render Mode** does not use images for the RadDropDownList skins, but it uses font icons, gradients and other modern HTML features instead. 

The stylesheet for RadDropDownList in **Lightweight Render Mode** and **Silk** skin is as follows:


````CSS
/* RadDropDownList Silk skin in Lightweight */

/* global */

.RadDropDownList_Silk {
    color: #767676;
}

/* styling the selection area of the RadDropDownList */

.RadDropDownList_Silk .rddlInner {
    border-color: #c9c9c9;
    color: #767676;
    background-color: #e3e3e3;
    background-image: linear-gradient(#fefefe, #e3e3e3);
}

.RadDropDownList_Silk .rddlHovered {
    border-color: #0090a9;
    color: #ffffff;
    background-color: #0090a9;
    background-image: linear-gradient(#00a9c7, #0090a9);
}

.RadDropDownList_Silk .rddlFocused {
    border-color: #2292a8;
    color: #ffffff;
    background-color: #14afca;
    background-image: linear-gradient(#14afca, #14afca);
}

/* styling the drop-down of the RadDropDownList */

.rddlPopup_Silk {
    border-color: #d7d7d7;
    color: #555555;
    background-color: #ffffff;
}

    .rddlPopup_Silk .rddlHeader,
    .rddlPopup_Silk .rddlFooter {
        border-color: #d7d7d7;
    }

    .rddlPopup_Silk .rddlItemHovered, .rddlPopup_Silk .rddlItemLoading {
        color: #333333;
        background-color: #bbeaf3;
    }

    .rddlPopup_Silk .rddlItemSelected {
        color: #ffffff;
        background-color: #7bcfdc;
    }

````


# See Also

 * [Templates Overview]({%slug dropdownlist/templates/overview%})

 * [Telerik ThemeBuilder for ASP.NET AJAX](https://themebuilder.telerik.com/)


