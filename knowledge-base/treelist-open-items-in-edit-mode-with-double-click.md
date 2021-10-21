---
title: Open RadTreeList Items in Edit Mode with Double Click
description: Open RadTreeList Items in Edit Mode with Double Click. Check it now!
type: how-to
page_title: Open RadTreeList Items in Edit Mode with Double Click
slug: treelist-open-items-in-edit-mode-with-double-click
res_type: kb
---

### DESCRIPTION  
 
 You might find it convenient to provide your users with the option to enter edit mode by double clicking the specific treelist item.  
  

### SOLUTION

You can achieve this functionality using the following approach:


```ASP.NET
<telerik:RadTreeList ID="RadTreeList1" runat="server">
    <ClientSettings>
        <ClientEvents OnItemDblClick="dblClick" />
    </ClientSettings>
</telerik:RadTreeList>
```

JavaScript:


```JavaScript
function dblClick(sender, args) {
    args.get_item().fireCommand("Edit", "");
}
```





