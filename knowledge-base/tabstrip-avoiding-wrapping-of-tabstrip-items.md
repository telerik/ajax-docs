---
title: Avoiding wrapping of tabstrip items
description: Avoiding wrapping of tabstrip items. Check it now!
type: how-to
page_title: Avoiding wrapping of tabstrip items
slug: tabstrip-avoiding-wrapping-of-tabstrip-items
res_type: kb
---



 ## HOW-TO  
Avoid wrapping of tabstrip items when resizing the browser below the tabstrip width.  
   
## SOLUTION  
This KB shows how to force the tabstrip items to remain on a single line regardless of their number. If the length of the root group is larger than the width of the page, a scrollbar will be created to accommodate the desired behavior (no wrapping of the items).   
   

Due to the changed rendering mechanism, the tabstrip does not stretch its container. However, there is an easy way to do this - call this script at the end of the page. The best place is just before the closing form tag:  
   
````ASP.NET
<script type="text/javascript">     
function nowrap (mytabstr)     
{     
    var tabStripWidth = 0;  
      
    var tabDomElements = mytabstr.getElementsByTagName("LI");  
      
    for (var i = 0, len = tabDomElements.length; i < len; i++)  
    {  
        tabStripWidth += tabDomElements[i].offsetWidth;  
    }  
      
    mytabstr.style.width = tabStripWidth + "px";     
}     
    
var mytabstr = $get("<%= RadTabStrip1.ClientID %>");  
nowrap(mytabstr);     
</script> 
````


  