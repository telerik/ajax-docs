---
title: OnClientDropDownOpening
page_title: OnClientDropDownOpening | RadToolBar for ASP.NET AJAX Documentation
description: OnClientDropDownOpening
slug: toolbar/client-side-programming/onclientdropdownopening
tags: onclientdropdownopening
published: True
position: 15
---

# OnClientDropDownOpening

## 

The **OnClientDropDownOpening** client-side event occurs when the drop-down is about to expand, showing its child buttons.

The event handler receives two parameters:

1. The instance of the toolbar firing the event.

1. An eventArgs parameter containing the following methods:

* **get_item** returns a reference to the **RadToolBarItem** that is about to expand. In this case it is a drop-down.

* **set_cancel** lets you prevent the toolbar from showing its children.

* **get_domEvent** - returns the browser's event object.

You can use this event to control when drop-down can expand, or customize the child buttons before the toolbar expands:

````ASPNET	
<script>
    function OnClientDropDownOpening(sender, args) {
        var status = $get("hdCurrentStatus");
        var dropDown = args.get_item();
        if (status.value == "")
            args.set_cancel(true);
        else {
            dropDown.get_buttons().getButton(0).set_text(status.value);
        }
    }       
</script>

<telerik:RadToolBar ID="RadToolBar1" runat="server" Orientation="Horizontal" OnClientDropDownOpening="OnClientDropDownOpening">
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
<asp:HiddenField ID="hdCurrentStatus" runat="server" Value="you can set this value to blank" />
````


