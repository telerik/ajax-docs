---
title: Skins
page_title: Skins | RadGrid for ASP.NET AJAX Documentation
description: Skins
slug: grid/appearance-and-styling/skins
tags: skins
published: True
position: 0
---

# Skins



This help article discusses using skins in **RadGrid**. You can see examples of the built-in skins, you can learn how to create custom skins, plus you'llsee major properties you'll use to customize skins as well as a list of required names for skin images you must use for custom skins.

By default, all controls in the Telerik UI for ASP.NET suite have a polished look and feel, which is consistent across the whole product line.

All resources (scripts, skins, etc.) are implemented as Embedded WebResources in ASP.NET 3.x\4.x for a very easy and convenient deployment. The only thing you need to do is drag **RadGrid** from your toolbox onto your web page (no external files will be required) and **RadGrid** will use its default skin.

Generally, you can change the existing grid skins by setting the **Skin** property to the name of the skin. See the sections below for more info.

## Built-in Skins

The image below shows a thumbnail view of the embedded skins provided by Telerik. They are embedded in the Telerik.Web.UI.dll assembly as web resources.To use a built-in skin, the user only needs to set the **Skin** property of the control. Built-in skins are also provided in "C:\Program Files\Telerik\RadControls for ASP.NET AJAX Qx 20xx\Skins".![RadGrid Skins](images/grid_skins.png)

>note The **Hay** , **Forest** , **Sitefinity** and **Transparent** skins are obsolete and have been removed from the Telerik.Web.UI.Skins.dll assembly as of **Q1 2014** .	You can find more information on the matter in[this blog post](http://blogs.telerik.com/aspnet-ajax/posts/13-04-11/6-telerik-asp.net-ajax-skins-going-obsolete).
>


Except setting the **Skin** property to one of the built-in skins you can use it in the following ways:

* If a skin is not explicitly defined, the **Default** skin from the embedded web resources will be used.

* You can use a predefined skin or your own skin. When following the second approach you need to set EnableEmbeddedSkins=false and define **Skin** and **ImagesPath** property values (see the next paragraph for more details).

## Creating Custom Skins for RadGrid

A developer can create custom skins to use in **RadGrid**. They are not embedded so the control cannot register them automatically.If you use a custom skin you need to set the **Skin** property, and the **EnableEmbeddedSkins** property of thecontrol to **false**. If you do not do so, the following exception will be thrown saying that there is no embedded skin matching the**Skin** property:

* Telerik.Web.UI.RadGrid with ID='RadGrid1' was unable to find embedded skin with name **'MySkin'**. Please, make sure that you spelled the skin name correctly, or if you want to use a custom skin, set EnableEmbeddedSkins=false. *

**RadGrid with**

By default, **RadGrid** expects the icons for its various action buttons to be part of the CSS skin's styles. Usually, all icons are part of a single sprite image, although this is not a requirement. However, you can also use separate icons, which are not part of the skin's styles. In order to set the filtering/sorting/paging/expand/collapse images and the data editing images (edit/update/delete/add record/refresh), you can create your own images and set the path to them through the **ImagesPath** property of **RadGrid**. Note that the names of these images should match those for the predefined skins(**Table 2**) in order to be referenced properly from the folder pointed through the **ImagesPath** property. Below is a list of those images:

**Filtering images**

Filter.gif

**Sorting images**

SortAsc.gif

SortDesc.gif

**Expand/Collapse images**

SinglePlus.gif

SingleMinus.gif

**Pager images**

PagingFirst.gif

PagingLast.gif

PagingNext.gif

PagingPrevious.gif

**Edit/Update/Delete/Insert/Cancel/Add record/Refresh images**

Edit.gif

Update.gif

Delete.gif

Cancel.gif

AddRecord.gif

Refresh.gif

**Reorder indicators images**

MoveUp.gif

MoveDown.gif

## Properties (Applicable When Not Using an Embedded or External Skin)

You can customize the appearance of the **RadGrid** control by setting the style properties for the different parts of the control. **Table 1** lists the different style properties.


>caption  

|  **Style Property**  |  **Description**  |
| ------ | ------ |
| **AlternatingItemStyle** |Specifies the style for alternating items in the **RadGrid** control.|
| **EditItemStyle** |Specifies the style for the item being edited in the **RadGrid** control.|
| **FooterStyle** |Specifies the style for the footer section in the **RadGrid** control.|
| **HeaderStyle** |Specifies the style for the header section in the **RadGrid** control.|
| **ItemStyle** |Specifies the style for the items in the **RadGrid** control.|
| **PagerStyle** |Specifies the style for the page selection section of the **RadGrid** control.|
| **SelectedItemStyle** |Specifies the style for the selected item in the **RadGrid** control.|
| **GroupHeaderItemStyle** |Specifies the style for the group header in the **RadGrid** control.|

## Images

The skin's images have to be named as follows:


>caption  

|  **Image**  |  **File name**  |
| ------ | ------ |
|![AddRecord.gif](images/grd_AddRecord.gif)| **AddRecord.gif** |
|![Cancel.gif](images/grd_Cancel.gif)| **Cancel.gif** |
|![Delete.gif](images/grd_Delete.gif)| **Delete.gif** |
|![Edit.gif](images/grd_Edit.gif)| **Edit.gif** |
|![Filter.gif](images/grd_Filter.gif)| **Filter.gif** |
|![Refresh.gif](images/grd_Refresh.gif)| **Refresh.gif** |
|![SingleMinus.gif](images/grd_SingleMinus.gif)| **SingleMinus.gif** |
|![SinglePlus.gif](images/grd_SinglePlus.gif)| **SinglePlus.gif** |
|![SortAsc.gif](images/grd_SortAsc.gif)| **SortAsc.gif** |
|![SortDesc.gif](images/grd_SortDesc.gif)| **SortDesc.gif** |
|![Update.gif](images/grd_Update.gif)| **Update.gif** |

# See Also

 * [HTML Output]({%slug grid/appearance-and-styling/html-output%})

 * [Modifying Existing Skins]({%slug grid/appearance-and-styling/modifying-existing-skins%})
