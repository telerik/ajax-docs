---
title: Avoiding wrapping of root menu items
description: Avoiding wrapping of root menu items - RadMenu for ASP.NET AJAX. Check it now!
type: how-to
page_title: Avoiding wrapping of root menu items
slug: menu-avoiding-wrapping-of-root-menu-items
res_type: kb
---


## HOW-TO  
Avoid wrapping of the root menu items.  
   
## SOLUTION  
This KB shows how to force the root menu items to remain on a single line regardless of their number. If the length of the root group is larger than the width of the page, a scrollbar will be created to accommodate the desired behavior (no wrapping of the items).   
   
Define the following JavaScript function:  
   
 
````ASP.NET
<script type="text/javascript"> 
function pageLoad()   
{    
    var menu = $find("<%= RadMenu2.ClientID %>"); 
     
    var Items = menu.get_items(); 
  
    var totalWidth = 0; 
    for (var i = 0; i < Items.get_count(); i++)  
    { 
        totalWidth += Items.getItem(i).get_element().offsetWidth; 
    } 
     
    menu.get_element().style.width = totalWidth + "px"; 
}    
</script> 
````
   
   
    