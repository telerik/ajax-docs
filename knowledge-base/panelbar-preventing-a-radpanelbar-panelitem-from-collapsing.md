---
title: Preventing a RadPanelBar PanelItem from collapsing
description: Preventing a RadPanelBar PanelItem from collapsing. Check it now!
type: how-to
page_title: Preventing a RadPanelBar PanelItem from collapsing
slug: panelbar-preventing-a-radpanelbar-panelitem-from-collapsing
res_type: kb
---


## HOW-TO  
Prevent a RadPanelBar item from collapsing  
   
 
## SOLUTION  
 A common way to prevent a RadPanelBar item from collapsing is hooking on the OnClientItemClicking client side event of RadPanelBar and cancel the event when the item is about to be collapsed.
 
````ASP.NET
<script type="text/javascript"> 
function onClientItemClicking(sender, eventArgs) 
{ 
    var item = eventArgs.get_item(); 
    if (item.get_expanded()) 
    { 
        eventArgs.set_cancel(true); 
    } 
} 
</script> 
<telerik:RadPanelBar ID="RadPanelBar1" OnClientItemClicking="onClientItemClicking" runat="server"> 
````


