---
title: OnClientItemClicked
page_title: OnClientItemClicked - RadMenu
description: Check our Web Forms article about OnClientItemClicked.
slug: menu/client-side-programming/events/onclientitemclicked
tags: onclientitemclicked
published: True
position: 4
---

# OnClientItemClicked



## 

The **OnClientItemClicked** client-side event occurs when the user clicks on a menu item, after the menu responds to the mouse click.

The event handler receives two parameters:

1. The instance of the menu firing the event.

1. An eventArgs parameter containing the following methods:

* **get_item** returns a reference to the **RadMenuItem** that was clicked.

* **get_targetElement** (**RadContextMenu** only) returns a reference to the target element attached to the context menu that is responsible for the context menu showing.

* **get_domEvent** returns a reference to the DOM event that caused the clicking.

You can use this event to respond when the user clicks on a menu item:

````ASP.NET	
<script type="text/javascript">
    var clipboardEmpty = true;
    function copyPasterItemClicked(sender, args) {
        var clipboardElement = $get("hdClipboard");
        var itemValue = args.get_item().get_value();
        if (itemValue == "Cut") {
            clipboardElement.value = args.get_targetElement().value;
            args.get_targetElement().value = "";
            clipboardEmpty = false;
        }
        if (itemValue == "Copy") {
            clipboardElement.value = args.get_targetElement().value;
            clipboardEmpty = false;
        }
        else if (itemValue == "Paste") {
            args.get_targetElement().value = clipboardElement.value;
        }
    }  
</script>

<telerik:RadContextMenu ID="CopyPaster" runat="server" OnClientItemClicked="copyPasterItemClicked">
    <Items>
        <telerik:RadMenuItem Text="Cut" Value="Cut" ExpandMode="ClientSide" />
        <telerik:RadMenuItem Text="Copy" Value="Copy" ExpandMode="ClientSide" />
        <telerik:RadMenuItem Text="Paste" Value="Paste" ExpandMode="ClientSide" />
    </Items>
    <Targets>
        <telerik:ContextMenuElementTarget ElementID="simpleTextArea" />
        <telerik:ContextMenuControlTarget ControlID="serverTextBox" />
    </Targets>
</telerik:RadContextMenu>
<input type="hidden" id="hdClipboard" />
<textarea id="simpleTextArea" rows="5" cols="40">Founded in 2002, Telerik Corporation is a leading vendor of User Interface (UI) components for ASP.NET and Windows Forms. Building on our expertise in interface development and Microsoft technologies, Telerik helps customers build applications with unparalleled richness, responsiveness and interactivity. Created with passion, Telerik products help thousands of developers every day to be more productive and deliver reliable applications under budget and on time.</textarea>
<asp:TextBox ID="serverTextBox" runat="server" TextMode="MultiLine" Rows="5" Columns="40"></asp:TextBox>
````



# See Also

 * [OnClientItemClicking]({%slug menu/client-side-programming/events/onclientitemclicking%})

 * [Overview]({%slug menu/client-side-programming/overview%})

 * [RadMenuItem Object]({%slug menu/client-side-programming/objects/radmenuitem-object%})

 * [ItemClick]({%slug menu/server-side-programming/itemclick%})

 * [RadContextMenu Object]({%slug menu/context-menus/radcontextmenu-object%})
