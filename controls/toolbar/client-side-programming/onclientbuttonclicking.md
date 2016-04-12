---
title: OnClientButtonClicking
page_title: OnClientButtonClicking | RadToolBar for ASP.NET AJAX Documentation
description: OnClientButtonClicking
slug: toolbar/client-side-programming/onclientbuttonclicking
tags: onclientbuttonclicking
published: True
position: 11
---

# OnClientButtonClicking

## 

The **OnClientButtonClicking** client-side event occurs when the user clicks on a toolbar button, before the toolbar responds to the mouse click.

The event handler receives two parameters:

1. The instance of the toolbar firing the event.

1. An eventArgs parameter containing the following methods:

* **get_item** returns a reference to the toolbar item that was clicked. In this case it is a RadToolBarButton.

* **set_cancel** lets you prevent the toolbar from responding to the mouse click.

* **get_domEvent** - returns the browser's event object.

You can use this event to pre-process an item click or to cancel the default response:

````ASPNET	
<script>
    function OnClientButtonClicking(sender, args) {
        args.set_cancel(true);
    }       
</script>

<telerik:RadToolBar RenderMode="Lightweight" ID="RadToolBar1" runat="server" Orientation="Horizontal" OnClientButtonClicking="OnClientButtonClicking">
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


