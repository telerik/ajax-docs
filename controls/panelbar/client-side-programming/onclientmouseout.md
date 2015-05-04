---
title: OnClientMouseOut
page_title: OnClientMouseOut | RadPanelBar for ASP.NET AJAX Documentation
description: OnClientMouseOut
slug: panelbar/client-side-programming/onclientmouseout
tags: onclientmouseout
published: True
position: 13
---

# OnClientMouseOut



## 

The **OnClientMouseOut** client-side event occurs when the mouse moves off an item in the panel bar.

The event handler receives two parameters:

1. The instance of the panel bar firing the event.

1. An eventArgs parameter containing the following methods:

	* **get_item** returns a reference to the **RadPanelItem** that the mouse just left.

	* **get_domEvent()** returns the DOM event object.

You can use this event to respond when the mouse moves off an item:

````ASPNET
<script type="text/javascript">
    function markItem(panelbar, args) {
        var attributes = args.get_item().get_attributes();
        ttributes.setAttribute("visited", "true");
    }
</script>
<telerik:radpanelbar id="RadPanelBar1" runat="server" onclientmouseout="markItem">    
<Items>
     ...    
</Items>
</telerik:radpanelbar>
````



# See Also

 * [OnClientMouseOver]({%slug panelbar/client-side-programming/onclientmouseover%})
