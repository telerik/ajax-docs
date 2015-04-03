---
title: OnClientCheckedStateChanged
page_title: OnClientCheckedStateChanged | UI for ASP.NET AJAX Documentation
description: OnClientCheckedStateChanged
slug: toolbar/client-side-programming/onclientcheckedstatechanged
tags: onclientcheckedstatechanged
published: True
position: 16
---

# OnClientCheckedStateChanged



## 

The __OnClientCheckedStateChanged__ client-side event occurs immediately after a button has been checked.

>caution To check a button it should be marked with __CheckOnClick="True"__ 
>


The event handler receives two parameters:

1. The instance of the toolbar firing the event.

1. An eventArgs parameter containing the following methods:

* __get_item__ returns a reference to the toolbar item that was checked. In this case this is a __RadToolBarButton__.

* __get_domEvent__ returns the browser's event object

You can use this event to respond when a button has been checked.

````ASPNET
	
	    <script type="text/javascript">
	        function checkedStateChanged(sender, args) {
	            alert("checked");
	        }
	    </script>
	
	    <telerik:RadToolBar ID="RadToolBar1" runat="server" OnClientCheckedStateChanged="checkedStateChanged">
	        <Items>
	            <telerik:RadToolBarButton Text="Button1" CheckOnClick="true">
	            </telerik:RadToolBarButton>
	            <telerik:RadToolBarButton Text="Button1" CheckOnClick="true">
	            </telerik:RadToolBarButton>
	            <telerik:RadToolBarButton Text="Button1" CheckOnClick="true">
	            </telerik:RadToolBarButton>
	        </Items>
	    </telerik:RadToolBar>
````






