---
title: OnClientDropDownClosing
page_title: OnClientDropDownClosing | RadToolBar for ASP.NET AJAX Documentation
description: OnClientDropDownClosing
slug: toolbar/client-side-programming/onclientdropdownclosing
tags: onclientdropdownclosing
published: True
position: 5
---

# OnClientDropDownClosing

## 

The **OnClientDropDownClosing** client-side event occurs when the drop-down is about to close, hiding its child buttons.

The event handler receives two parameters:

1. The instance of the toolbar firing the event.

1. An eventArgs parameter containing the following methods:

* **get_item** returns a reference to the **RadToolBarItem** that is about to close. In this case it is a drop-down.

* **set_cancel** lets you prevent the drop-down from closing.

* **get_domEvent** - returns the browser's event object.

You can use this event to respond to an action before the buttons list of the drop-down closes:

````ASPNET	
<script>   
	function OnClientDropDownClosing(sender, args)   
	{
	    //this will prevent the dropdown from closing
	    args.set_cancel(true);
	}       
</script>

<telerik:RadToolBar RenderMode="Lightweight" ID="RadToolBar1" runat="server" Orientation="Horizontal" 
	OnClientDropDownClosing="OnClientDropDownClosing">
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


