---
title: OnClientMouseOver
page_title: OnClientMouseOver | UI for ASP.NET AJAX Documentation
description: OnClientMouseOver
slug: panelbar/client-side-programming/onclientmouseover
tags: onclientmouseover
published: True
position: 14
---

# OnClientMouseOver



## 

The __OnClientMouseOver__ client-side event occurs when the mouse moves over an item in the panel bar.

The event handler receives two parameters:

1. The instance of the panel bar firing the event.

1. An eventArgs parameter containing the following methods:

* __get_item__ returns a reference to the __RadPanelItem__ under the mouse.

* __get_domEvent()__ returns the DOM event object.

You can use this event to respond when the mouse is over an item:

````ASPNET
	    <script type="text/javascript">
	        function showItem(panelbar, args) {
	            var label = document.getElementById("Label1");
	            label.innerText = args.get_item().get_text();
	        }
	    </script>
	    <telerik:radpanelbar id="RadPanelBar1" runat="server" onclientmouseover="showItem">    
	    <Items> 
	          ...    
	    </Items>
	    </telerik:radpanelbar>
	    <br />
	    <br />
	    <asp:Label ID="Label1" runat="server" Text=""></asp:Label>
````



# See Also

 * [OnClientMouseOut]({%slug panelbar/client-side-programming/onclientmouseout%})
