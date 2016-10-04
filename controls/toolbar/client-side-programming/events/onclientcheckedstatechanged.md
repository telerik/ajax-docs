---
title: OnClientCheckedStateChanged
page_title: OnClientCheckedStateChanged | RadToolBar for ASP.NET AJAX Documentation
description: OnClientCheckedStateChanged
slug: toolbar/client-side-programming/onclientcheckedstatechanged
tags: onclientcheckedstatechanged
published: True
position: 8
---

# OnClientCheckedStateChanged

## 

The **OnClientCheckedStateChanged** client-side event occurs immediately after a button has been checked.

>caution To check a button it should be marked with **CheckOnClick="True"** 
>


The event handler receives two parameters:

1. The instance of the toolbar firing the event.

1. An eventArgs parameter containing the following methods:

* **get_item** returns a reference to the toolbar item that was checked. In this case this is a **RadToolBarButton**.

* **get_domEvent** returns the browser's event object

You can use this event to respond when a button has been checked.

````ASPNET	
<script type="text/javascript">
    function checkedStateChanged(sender, args) {
        alert("checked");
    }
</script>

<telerik:RadToolBar RenderMode="Lightweight" ID="RadToolBar1" runat="server" 
	OnClientCheckedStateChanged="checkedStateChanged">
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






