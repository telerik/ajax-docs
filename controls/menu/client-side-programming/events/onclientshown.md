---
title: OnClientShown
page_title: OnClientShown - RadMenu
description: Check our Web Forms article about OnClientShown.
slug: menu/client-side-programming/events/onclientshown
tags: onclientshown
published: True
position: 17
---

# OnClientShown

## 

(**RadContextMenu** only) The **OnClientShown** client-side event occurs when the context menu first appears, either in response to a right-click on one of its targets or a call to its **show** or **showAt** method.

The event handler receives two parameters:

1. The instance of the context menu firing the event.

1. An eventArgs parameter containing the following methods:

* **get_targetElement** returns a reference to the DOM element that was right-clicked to show the context menu. If the menu appeared in response to a call to the **show** or **showAt** method rather than a right-click on one of its targets, **get_targetElement** returns null.

* **get_domEvent** returns a reference to the DOM event.

You can use this event to initialize the context menu when it appears:

````ASP.NET
<script type="text/javascript">
    function initializeContextMenu(menu, args) {
        var target = args.get_targetElement();
        if (target)
            menu.get_items().getItem(1).disable();
    }
</script>

<telerik:RadContextMenu ID="RadContextMenu1" runat="server" OnClientShown="initializeContextMenu">
    <Items>
        ...
    </Items>
</telerik:RadContextMenu>
````



# See Also

 * [RadContextMenu Object]({%slug menu/context-menus/radcontextmenu-object%})

 * [OnClientShowing]({%slug menu/client-side-programming/events/onclientshowing%})

 * [OnClientHidden]({%slug menu/client-side-programming/events/onclienthidden%})

 * [Overview]({%slug menu/client-side-programming/overview%})

 * [RadMenu and RadContextMenu Objects]({%slug menu/client-side-programming/objects/radmenu-and-radcontextmenu-objects%})
