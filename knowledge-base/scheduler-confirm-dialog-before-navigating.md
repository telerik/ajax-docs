---
title: Add Confirmation Dialog For Scheduler Navigation
description: Learn how to implement a confirmation dialog in RadScheduler.
type: how-to
page_title: Add Confirmation Dialog For Scheduler Navigation
slug: scheduler-confirm-dialog-before-navigating
tags: radScheduler, asp.net ajax, navigation, confirmation, unsaved changes
res_type: kb
ticketid: 1666796
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>RadScheduler for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>All</td>
</tr>
</tbody>
</table>

## Description

When using [RadScheduler](https://docs.telerik.com/devtools/aspnet-ajax/controls/scheduler/overview) to display appointments with the ability for users to drag and drop, navigating to a different view (e.g., changing months) without saving changes leads to loss of unsaved modifications. The goal is to introduce a confirmation dialog that alerts the user about potential data loss when attempting to navigate away from the current view.

This KB article also answers the following questions:

- How to implement a confirmation dialog in RadScheduler before changing views?
- Is it possible to alert users about unsaved changes in RadScheduler when navigating?

## Solution

To prevent loss of unsaved changes in RadScheduler when navigating between different views, you can implement a confirmation dialog. This dialog will prompt users if they attempt to navigate away, ensuring they are aware of the potential data loss.

The solution involves using the `OnClientNavigationCommand` event to intercept navigation attempts, display a confirmation dialog, and proceed based on the user's response. Here's how to set it up:

Define the Scheduler and WindowManager on your page to manage dialog windows.

````ASP.NET
<telerik:RadWindowManager ID="windowmanager1" runat="server" />

<telerik:RadScheduler RenderMode="Lightweight" runat="server" ID="RadScheduler1" OnClientNavigationCommand="onClientNavigationCommand" ... />
````

Implement the confirmation logic in JavaScript. This involves intercepting navigation commands, displaying a confirmation dialog, and executing the navigation command if confirmed.

````JavaScript
function onClientNavigationCommand(sender, args) {
    args.set_cancel(true); // Canncel the event

    let text = "Are you sure you want to navigate away? Unsaved changes will be lost.";
    let command = args.get_command();

    radconfirm(text, (confirmed) => {
        callBackFn(confirmed, command);
    });  
}

function callBackFn(confirmed, command) {
    if (confirmed === true) {
        let navigationCommands = Telerik.Web.UI.SchedulerNavigationCommand;
        let commandName = "";

        switch (command) {
            case navigationCommands.NavigateToNextPeriod:
                commandName = "NavigateToNextPeriod";
                break;
            case navigationCommands.NavigateToPreviousPeriod:
                commandName = "NavigateToPreviousPeriod";
                break;
            default:
                commandName = "GoToToday";
                break;
        }

        __doPostBack('<%= RadScheduler1.UniqueID %>', JSON.stringify({ Command: commandName }));
    }
}
````

This approach uses a RadWindow for the confirmation dialog, but it's adaptable to other dialog types. The key is to intercept the navigation event, display a confirmation dialog, and conditionally proceed with navigation based on the user's response, ensuring that users are made aware of unsaved changes before navigation.

## See Also

- [RadScheduler Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/scheduler/overview)
- [RadWindow Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/window/overview)
