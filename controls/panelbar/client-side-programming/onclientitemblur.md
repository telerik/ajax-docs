---
title: OnClientItemBlur
page_title: OnClientItemBlur | RadPanelBar for ASP.NET AJAX Documentation
description: OnClientItemBlur
slug: panelbar/client-side-programming/onclientitemblur
tags: onclientitemblur
published: True
position: 10
---

# OnClientItemBlur



## 

The **OnClientItemBlur** client-side event occurs when an item in the panel bar loses focus.

The event handler receives two parameters:

1. The instance of the panel bar firing the event.

1. An eventArgs parameter containing the following methods:

	* **get_item** returns a reference to the **RadPanelItem** that lost focus.

	* **get_domEvent()** returns the DOM event object.

You can use this event to respond when an item receives focus.

````ASPNET
<script type="text/javascript">
    function blurItem(sender, args) {
        alert("Leaving " + args.get_item().get_text());
    }
</script>
<telerik:radpanelbar id="RadPanelBar1" runat="server" onclientitemblur="blurItem"> 
<Items>   
... 
</Items>
</telerik:radpanelbar>
````



# See Also

 * [OnClientItemFocus]({%slug panelbar/client-side-programming/onclientitemfocus%})
