---
title: Styling the CommandItem
page_title: Styling the CommandItem - RadGrid
description: Learn how to display and style the RadGrid CommandItem by configuring CommandItemDisplay and CommandItemTemplate.
slug: grid/appearance-and-styling/styling-the-commanditem
tags: styling,the,commanditem
published: True
position: 10
---

# Styling the CommandItem

To display the command item, set the **CommandItemDisplay** property of **GridTableView**. The property accepts **None**, **Top**, **Bottom**, or **TopAndBottom**. Customize the command item content with **GridTableView.CommandItemTemplate**.

> caption Figure 1: RadGrid CommandItemTemplate

![RadGrid CommandItemTemplate](images/grd_CommandItemTemplate_markedup.png)

>note If you are using the RadGrid skinning and you want to customize the look and feel of the CommandItemTemplate you should alter the .GridCommandRow_[Your_Skin] class, where Your_Skin is the specific Skin you use. You should also be aware that applying changes to the CommandItemTemplate declaratively will not override the properties set in the Skin!
>


## See Also

 * [Command Item Template]({%slug grid/data-editing/commanditem/command-item-template%})
