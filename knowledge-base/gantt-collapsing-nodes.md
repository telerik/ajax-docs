---
title: Collapsing Gantt Nodes in UI for ASP.NET AJAX
description: Learn how to collapse nodes in the Gantt component in UI for ASP.NET AJAX using client-side methods.
type: how-to
page_title: How to Collapse Gantt Nodes in UI for ASP.NET AJAX
meta_title: How to Collapse Gantt Nodes in UI for ASP.NET AJAX
slug: gantt-collapsing-nodes
tags: aspnet-ajax,gantt,client-side,collapse-nodes
res_type: kb
ticketid: 1695987
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>UI for ASP.NET AJAX Gantt</td>
</tr>
<tr>
<td>Version</td>
<td>All</td>
</tr>
</tbody>
</table>

## Description

I want to collapse all nodes in the [Gantt](https://docs.telerik.com/devtools/aspnet-ajax/controls/gantt/overview) component for UI for ASP.NET AJAX using a button. The provided client-side code does not work, and there are no JavaScript errors. I need to know the correct approach for accomplishing this functionality.

This knowledge base article also answers the following questions:
- How to collapse Gantt nodes using client-side methods?

## Solution

The UI for ASP.NET AJAX Gantt does not provide a public client-side API for directly collapsing or expanding tasks. However, you can use the following workaround to achieve this functionality.

````ASP.NET
<telerik:RadButton ID="btnCollapseNodes" runat="server" Text="Collapse Nodes" AutoPostBack="false" OnClientClicked="onClientClicked" />
````

The provided JavaScript function references private properties, which is not recommended. Use the public API instead:

````JavaScript
function onClientClicked(sender, args) {
    let gantt = $find("<%= RadGantt1.ClientID %>"); // Replace RadGantt1 with your Gantt's ClientID
    let tasks = gantt.get_tasks(); // Get all tasks in the Gantt

    for (let i = 0; i < tasks.get_count(); i++) {
        let task = tasks.getTask(i);

        if (task._data.hasChildren) { // Check if the task has child nodes
            task.set_expanded(false); // Set the expanded state to false
        }
    }

    gantt.repaint(); // Refresh the Gantt to reflect the changes
}
````

## See Also

- [UI for ASP.NET AJAX Gantt Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/gantt/overview)
- [RadButton Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/button/overview)
