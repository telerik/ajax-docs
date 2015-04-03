---
title: OnClientButtonClicked
page_title: OnClientButtonClicked | UI for ASP.NET AJAX Documentation
description: OnClientButtonClicked
slug: toolbar/client-side-programming/onclientbuttonclicked
tags: onclientbuttonclicked
published: True
position: 10
---

# OnClientButtonClicked



## 

The __OnClientButtonClicked__ client-side event occurs when the user clicks on a toolbar button, after the toolbar responds to the mouse click.

The event handler receives two parameters:

1. The instance of the toolbar firing the event.

1. An eventArgs parameter containing the following methods:

* __get_item__ returns a reference to the toolbar item that was clicked. In this case it is __RadToolBarButton__.

* __get_domEvent__ returns the browser's event object.

You can use this event to respond when the user clicks on a toolbar button:

````ASPNET
	
	    <script>
	        function OnClientButtonClicked(sender, args) {
	            var button = args.get_item();
	            alert(button.get_text());
	        }       
	    </script>
	
	    <telerik:RadToolBar ID="RadToolBar1" runat="server" Orientation="Horizontal" OnClientButtonClicked="OnClientButtonClicked">
	        <CollapseAnimation Duration="200" Type="OutQuint" />
	        <Items>
	            <telerik:RadToolBarButton Text="button1" runat="server">
	            </telerik:RadToolBarButton>
	            <telerik:RadToolBarDropDown Text="dropdown" runat="server">
	                <Buttons>
	                    <telerik:RadToolBarButton Text="Button2" runat="server">
	                    </telerik:RadToolBarButton>
	                </Buttons>
	            </telerik:RadToolBarDropDown>
	        </Items>
	    </telerik:RadToolBar>
````


