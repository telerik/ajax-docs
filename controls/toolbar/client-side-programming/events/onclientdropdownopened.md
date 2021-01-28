---
title: OnClientDropDownOpened
page_title: OnClientDropDownOpened - RadToolBar
description: Check our Web Forms article about OnClientDropDownOpened.
slug: toolbar/client-side-programming/onclientdropdownopened
tags: onclientdropdownopened
published: True
position: 6
---

# OnClientDropDownOpened

## 

The **OnClientDropDownOpened** client-side event occurs immediately after the drop-down expands to show its child buttons.

The event handler receives two parameters:

1. The instance of the toolbar firing the event.

1. An eventArgs parameter containing the following methods:

* **get_item** returns a reference to the **RadToolBarItem** that was opened. In this case it is a drop-down.

* **get_domEvent** returns the browser's event object

You can use this event to respond to an action right after the drop-down has been expanded:

````ASPNET	
<script>
    function OnClientDropDownOpened(sender, args) {
        alert(args.get_item().get_buttons().get_count());
    }       
</script>

<telerik:RadToolBar RenderMode="Lightweight" ID="RadToolBar1" runat="server" Orientation="Horizontal" 
	OnClientDropDownOpened="OnClientDropDownOpened">
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




