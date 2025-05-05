---
title: Displaying a Prompt for RadTreeView Menu Items in ASP.NET AJAX
description: Learn how to display a prompt when a menu item is clicked in the RadTreeView for ASP.NET AJAX and trigger server-side events based on user confirmation.
type: how-to
page_title: Trigger Server-Side Events After Prompt Confirmation in RadTreeView
slug: treeview-display-prompt-menu-item-click
tags: radtreeview, asp.net ajax, menu-item, contextmenuitemclicking, server-side-event, javascript, prompt
res_type: kb
ticketid: 1686420
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>RadTreeView for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>All</td>
</tr>
</tbody>
</table>

## Description

I want to display a prompt when a user clicks on a menu item in the RadTreeView for ASP.NET AJAX. If the user confirms the prompt, I need to trigger the server-side `ContextMenuItemClick` event to execute specific logic.

This knowledge base article also answers the following questions:

- How to use JavaScript to show a confirmation prompt for RadTreeView menu items?
- How to cancel a menu click event based on user input in RadTreeView?
- How to handle server-side logic after a prompt confirmation in RadTreeView?

## Solution

To achieve this functionality, use the client-side `OnClientContextMenuItemClicking` event to display a prompt and control whether the event proceeds. Then, use the server-side `ContextMenuItemClick` event to execute logic based on the user's confirmation.

Add the `OnClientContextMenuItemClicking` event to the RadTreeView control. Use JavaScript to display a confirmation dialog and cancel the event if the user chooses to cancel.

````ASP.NET
<telerik:RadTreeView ID="RadTreeView1" runat="server" 
    OnClientContextMenuItemClicking="onClientContextMenuItemClicking" 
    OnContextMenuItemClick="RadTreeView1_ContextMenuItemClick">
    <ContextMenus>
        <telerik:RadTreeViewContextMenu>
            <Items>
                <telerik:RadMenuItem Text="Menu Item 1"></telerik:RadMenuItem>
                <telerik:RadMenuItem Text="Menu Item 2"></telerik:RadMenuItem>
            </Items>
        </telerik:RadTreeViewContextMenu>
    </ContextMenus>
    <Nodes>
        <telerik:RadTreeNode Text="Node" />
    </Nodes>
</telerik:RadTreeView>
````

````JavaScript
function onClientContextMenuItemClicking(sender, args) {
    let confirmed = confirm("Do you want to proceed?");

    if (!confirmed) {
        args.set_cancel(true);
    }
}
````

Handle the `ContextMenuItemClick` event on the server side to execute your desired logic only if the user confirms the prompt.

````C#
protected void RadTreeView1_ContextMenuItemClick(object sender, RadTreeViewContextMenuEventArgs e)
{
    if (e.MenuItem.Text == "Menu Item 1")
    {
        // Your server-side logic here
    }
}
````

This approach ensures that the prompt is displayed on the client side and server-side logic is executed only if the user confirms the action.

## See Also

- [RadTreeView Client-Side Events: OnClientContextMenuItemClicking](https://www.telerik.com/products/aspnet-ajax/documentation/controls/treeview/client-side-programming/events/onclientcontextmenuitemclicking#onclientcontextmenuitemclicking)
- [RadTreeView Server-Side Events: ContextMenuItemClick](https://docs.telerik.com/devtools/aspnet-ajax/controls/treeview/server-side-programming/events/contextmenuitemclick) 
- [RadTreeView Overview Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/treeview/overview) 
