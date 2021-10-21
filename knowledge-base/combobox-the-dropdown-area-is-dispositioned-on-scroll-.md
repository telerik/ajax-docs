---
title: The DropDown area is dispositioned on scroll 
description: The DropDown area of RadCombobox is dispositioned on scroll . Check it now!
type: how-to
page_title: The DropDown area is dispositioned on scroll 
slug: combobox-the-dropdown-area-is-dispositioned-on-scroll
res_type: kb
---

## The DropDown area of RadCombobox is dispositioned on scroll

To solve the problem you should use the following workaround:  
   
## SOLUTION

Hook on the **scroll** event of the container element holding the combobox:  
   
````JavaScript
<script>
content.onscroll = function()           
{           
      var combo = $find("<%= RadComboBox1.ClientID %>");       
      combo.hideDropDown();        
}
</script>
````
 
   
 


