---
title: Styling the CommandItem
page_title: Styling the CommandItem | UI for ASP.NET AJAX Documentation
description: Styling the CommandItem
slug: grid/appearance-and-styling/styling-the-commanditem
tags: styling,the,commanditem
published: True
position: 10
---

# Styling the CommandItem



## 

In order to show the command item, you should set __CommandItemDisplay__ property of __GridTableView__. It can take four values: __None__, __Top__, __Bottom__, __TopAndBottom__ corresponding to the place where it will appear. The command item content can be customized using the template of a __GridTableView.CommandItemTemplate__.

![CommandItemTemplate](images/grd_CommandItemTemplate_markedup.png)

>note If you are using the RadGrid skinning and you want to customize the look and feel of the CommandItemTemplate you should alter the .GridCommandRow_[Your_Skin] class, where Your_Skin is the specific Skin you use. You should also be aware that applying changes to the CommandItemTemplate declaratively will not override the properties set in the Skin!
>


# See Also

 * [Command Item Template]({%slug grid/data-editing/commanditem/command-item-template%})
