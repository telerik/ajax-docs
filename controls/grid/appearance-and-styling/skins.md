---
title: Skins
page_title: Skins | UI for ASP.NET AJAX Documentation
description: Skins
slug: grid/appearance-and-styling/skins
tags: skins
published: True
position: 0
---

# Skins



This help article discusses using skins in __RadGrid__. You can see examples of the built-in skins, you can learn how to create custom skins, plus you'llsee major properties you'll use to customize skins as well as a list of required names for skin images you must use for custom skins.

By default, all controls in the Telerik UI for ASP.NET suite have a polished look and feel, which is consistent across the whole product line.

All resources (scripts, skins, etc.) are implemented as Embedded WebResources in ASP.NET 3.x\4.x for a very easy and convenient deployment. The only thing you need to do is drag __RadGrid__ from your toolbox onto your web page (no external files will be required) and __RadGrid__ will use its default skin.

Generally, you can change the existing grid skins by setting the __Skin__ property to the name of the skin. See the sections below for more info.

## Built-in Skins

The image below shows a thumbnail view of the embedded skins provided by Telerik. They are embedded in the Telerik.Web.UI.dll assembly as web resources.To use a built-in skin, the user only needs to set the __Skin__ property of the control. Built-in skins are also provided in "C:\Program Files\Telerik\RadControls for ASP.NET AJAX Qx 20xx\Skins".![RadGrid Skins](images/grid_skins.png)

>note The __Hay__ , __Forest__ , __Sitefinity__ and __Transparent__ skins are obsolete and have been removed from the Telerik.Web.UI.Skins.dll assembly as of __Q1 2014__ .	You can find more information on the matter in[this blog post](http://blogs.telerik.com/aspnet-ajax/posts/13-04-11/6-telerik-asp.net-ajax-skins-going-obsolete).
>


Except setting the __Skin__ property to one of the built-in skins you can use it in the following ways:

* If a skin is not explicitly defined, the __Default__ skin from the embedded web resources will be used.

* You can use a predefined skin or your own skin. When following the second approach you need to set EnableEmbeddedSkins=false and define __Skin__ and __ImagesPath__ property values (see the next paragraph for more details).

## Creating Custom Skins for RadGrid

A developer can create custom skins to use in __RadGrid__. They are not embedded so the control cannot register them automatically.If you use a custom skin you need to set the __Skin__ property, and the __EnableEmbeddedSkins__ property of thecontrol to __false__. If you do not do so, the following exception will be thrown saying that there is no embedded skin matching the__Skin__ property:

* Telerik.Web.UI.RadGrid with ID='RadGrid1' was unable to find embedded skin with name __'MySkin'__. Please, make sure that you spelled the skin name correctly, or if you want to use a custom skin, set EnableEmbeddedSkins=false. *

__RadGrid with__

By default, __RadGrid__ expects the icons for its various action buttons to be part of the CSS skin's styles. Usually, all icons are part of a single sprite image, although this is not a requirement. However, you can also use separate icons, which are not part of the skin's styles. In order to set the filtering/sorting/paging/expand/collapse images and the data editing images (edit/update/delete/add record/refresh), you can create your own images and set the path to them through the __ImagesPath__ property of __RadGrid__. Note that the names of these images should match those for the predefined skins(__Table 2__) in order to be referenced properly from the folder pointed through the __ImagesPath__ property. Below is a list of those images:

__Filtering images__

Filter.gif

__Sorting images__

SortAsc.gif

SortDesc.gif

__Expand/Collapse images__

SinglePlus.gif

SingleMinus.gif

__Pager images__

PagingFirst.gif

PagingLast.gif

PagingNext.gif

PagingPrevious.gif

__Edit/Update/Delete/Insert/Cancel/Add record/Refresh images__

Edit.gif

Update.gif

Delete.gif

Cancel.gif

AddRecord.gif

Refresh.gif

__Reorder indicators images__

MoveUp.gif

MoveDown.gif

## Properties (Applicable When Not Using an Embedded or External Skin)

You can customize the appearance of the __RadGrid__ control by setting the style properties for the different parts of the control. __Table 1__ lists the different style properties.


>caption  

|  __Style Property__  |  __Description__  |
| ------ | ------ |
| __AlternatingItemStyle__ |Specifies the style for alternating items in the __RadGrid__ control.|
| __EditItemStyle__ |Specifies the style for the item being edited in the __RadGrid__ control.|
| __FooterStyle__ |Specifies the style for the footer section in the __RadGrid__ control.|
| __HeaderStyle__ |Specifies the style for the header section in the __RadGrid__ control.|
| __ItemStyle__ |Specifies the style for the items in the __RadGrid__ control.|
| __PagerStyle__ |Specifies the style for the page selection section of the __RadGrid__ control.|
| __SelectedItemStyle__ |Specifies the style for the selected item in the __RadGrid__ control.|
| __GroupHeaderItemStyle__ |Specifies the style for the group header in the __RadGrid__ control.|

## Images

The skin's images have to be named as follows:


>caption  

|  __Image__  |  __File name__  |
| ------ | ------ |
|![AddRecord.gif](images/grd_AddRecord.gif)| __AddRecord.gif__ |
|![Cancel.gif](images/grd_Cancel.gif)| __Cancel.gif__ |
|![Delete.gif](images/grd_Delete.gif)| __Delete.gif__ |
|![Edit.gif](images/grd_Edit.gif)| __Edit.gif__ |
|![Filter.gif](images/grd_Filter.gif)| __Filter.gif__ |
|![Refresh.gif](images/grd_Refresh.gif)| __Refresh.gif__ |
|![SingleMinus.gif](images/grd_SingleMinus.gif)| __SingleMinus.gif__ |
|![SinglePlus.gif](images/grd_SinglePlus.gif)| __SinglePlus.gif__ |
|![SortAsc.gif](images/grd_SortAsc.gif)| __SortAsc.gif__ |
|![SortDesc.gif](images/grd_SortDesc.gif)| __SortDesc.gif__ |
|![Update.gif](images/grd_Update.gif)| __Update.gif__ |

# See Also

 * [HTML Output]({%slug grid/appearance-and-styling/html-output%})

 * [Modifying Existing Skins]({%slug grid/appearance-and-styling/modifying-existing-skins%})
