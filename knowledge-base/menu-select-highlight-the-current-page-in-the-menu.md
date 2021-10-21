---
title: Select (highlight) the current page in the RadMenu
description: Select (highlight) the current page in the RadMenu. Check it now!
type: how-to
page_title: Select (highlight) the current page in the RadMenu
slug: menu-select-highlight-the-current-page-in-the-menu
res_type: kb
---

## Description 
  
When the client navigates to a page, if there is an item with NavigateUrl equal to the path in the address bar, it should be highlighted.   
 
## Solution
  
This functionality comes out of the box for Menu bound to a SiteMapDataSource. This is because only in this scenario the NavigateUrl is automatically populated. For other databinding scenarios, the NavigateUrl should be populated by setting the DataNavigateUrlField property.   
  
Then, in the [ItemDataBound]({%slug menu/server-side-programming/itemdatabound%}) event [show the path to the item]({%slug menu/how-to/showing-the-path-to-an-item%}) if its NavigateUrl is the same as the Request.Path property.   
  
````C#
protected void RadMenu1_ItemDataBound(object sender, RadMenuEventArgs e)
{
    RadMenuItem item = e.Item;
    string path = item.NavigateUrl;
 
    if (string.Equals(path, Request.Path, StringComparison.OrdinalIgnoreCase))
    {
        item.HighlightPath();
    }
}
````

 