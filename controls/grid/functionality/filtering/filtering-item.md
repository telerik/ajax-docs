---
title: Filtering Item
page_title: Filtering Item | RadGrid for ASP.NET AJAX Documentation
description: Filtering Item
slug: grid/functionality/filtering/filtering-item
tags: filtering,item
published: True
position: 1
---

# Filtering Item



## 

The **FilteringItem** is the row that holds the filtering boxes. It appears automatically when you enable the filtering (Set **AllowFilteringByColumn** to **true**):

![GridFilteringItem](images/grd_FilteringItem.png)

The **FilteringItem** is always placed in <THEAD> section of a grid. As a result, it always appears on top of the grid (not at the bottom). You can customize the **FilteringItem** by setting a CSS class to the **FilterItemStyle** property of **RadGrid** or **GridTableView**. You can set the **FilterItemStyle** globally in the **RadGrid** declaration or set it individually for each table in the grid.

>caution If you are using a skin with your **RadGrid** control and want to customize the look and feel of the **FilteringItem** , alter the .GridFilterRow_[SkinName] class, where [SkinName] is the name of the skin. Applying changes to **FilterItemStyle** will not override the **Skin** properties.
>


## See Also

 * [Overview]({%slug grid/functionality/filtering/overview%})

 * [Localize Filtering Menu Options]({%slug grid/how-to/filtering/localize-filtering-menu-options%})
