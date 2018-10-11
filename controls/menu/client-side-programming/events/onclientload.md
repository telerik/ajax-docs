---
title: OnClientLoad
page_title: OnClientLoad | RadMenu for ASP.NET AJAX Documentation
description: OnClientLoad
slug: menu/client-side-programming/events/onclientload
tags: onclientload
published: True
position: 1
---

# OnClientLoad

## 

The **OnClientLoad**client-side event occurs when the menu is first loaded and fully initialized on the client.

The event handler receives a single parameter: a reference to the client-side menu object.

You can use this event to perform your own initialization to the menu when it is loaded, or to save a reference to the menu in a global variable for reference from within your client-side code.

The following example illustrates the use of the **OnClientLoad** event handler for saving a reference to the client-side object:

````ASP.NET
<script type="text/javascript">
    var menu1;
    function StoreMenuClientObject(sender) {
        menu1 = sender;
    }
    
    function UtilizeMenuClientObject() {
        alert(menu1.get_id());
    }
</script>

<telerik:RadMenu RenderMode="Lightweight" ID="RadMenu1" runat="server" OnClientLoad="StoreMenuClientObject">
    <Items>
        <telerik:RadMenuItem runat="server" ExpandMode="ClientSide" Text="One" />
        <telerik:RadMenuItem runat="server" ExpandMode="ClientSide" Text="Two" />
        <telerik:RadMenuItem runat="server" ExpandMode="ClientSide" Text="Three" />
    </Items>
</telerik:RadMenu>
<input id="Button1" type="button" onclick="UtilizeMenuClientObject()" value="button" />
````

>tip The technique illustrated here can be used when the menu is nested within another control, but the RadMenu must be rendered only once. For example, you can use this approach if RadMenu is nested in a toolbar template button. However, if RadMenu is nested in a grid with more than one row, the method fails since there will be multiple instances of the rendered menu.
>


# See Also

 * [Overview]({%slug menu/client-side-programming/overview%})

 * [RadMenu and RadContextMenu Objects]({%slug menu/client-side-programming/objects/radmenu-and-radcontextmenu-objects%})

 * [OnClientShowing]({%slug menu/client-side-programming/events/onclientshowing%})

 * [OnClientShown]({%slug menu/client-side-programming/events/onclientshown%})

 * [ItemCreated]({%slug menu/server-side-programming/itemcreated%})

 * [ItemDataBound]({%slug menu/server-side-programming/itemdatabound%})
