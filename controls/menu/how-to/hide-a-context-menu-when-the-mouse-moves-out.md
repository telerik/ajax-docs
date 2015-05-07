---
title: Hide a Context Menu When the Mouse Moves Out
page_title: Hide a Context Menu When the Mouse Moves Out | RadMenu for ASP.NET AJAX Documentation
description: Hide a Context Menu When the Mouse Moves Out
slug: menu/how-to/hide-a-context-menu-when-the-mouse-moves-out
tags: hide,a,context,menu,when,the,mouse,moves,out
published: True
position: 4
---

# Hide a Context Menu When the Mouse Moves Out

## 

This topic shows how to hide a RadContextMenu when mouse moves away.

Let's have a square panel which is the target of the context menu - right clicking in the panel will show our menu. The goal is to hide the menu when the mouse moves out of the menu.

````ASPNET
<asp:Panel Width="200px" Height="200px" BackColor="Aqua" runat="server" ID="pnl1">
</asp:Panel>
<telerik:RadContextMenu ID="RadContextMenu1" runat="server" OnClientShowing="OnClientShowingHandler"
    Skin="Inox">
    <Items>
        <telerik:RadMenuItem runat="server" Text="Cut">
        </telerik:RadMenuItem>
        <telerik:RadMenuItem runat="server" Text="Copy">
        </telerik:RadMenuItem>
        <telerik:RadMenuItem runat="server" Text="Paste">
        </telerik:RadMenuItem>
    </Items>
    <Targets>
        <telerik:ContextMenuControlTarget ControlID="pnl1" />
    </Targets>
</telerik:RadContextMenu>
````

Here is the javascript handler of the OnClientMouseOut event:

````JavaScript
function OnClientShowingHandler(sender, args) {
    var element = sender.get_contextMenuElement();
    var handler = function(e) {
    var relatedTarget = e.rawEvent.relatedTarget || e.rawEvent.toElement;
    if (!$telerik.isDescendantOrSelf(element, relatedTarget)) {
        sender.hide();
        $removeHandler(element, "mouseout", handler);
        return;
    }
};    
$addHandler(element, "mouseout", handler);}
````


