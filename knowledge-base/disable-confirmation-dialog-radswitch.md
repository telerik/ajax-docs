---
title: Disabling Confirmation Dialog When Turning RadSwitch Off
description: Learn how to disable the confirmation dialog for the RadSwitch component in ASP.NET AJAX when switching from ON to OFF state.
type: how-to
page_title: How to Disable Confirmation Dialog on RadSwitch for ASP.NET AJAX
slug: disable-confirmation-dialog-radswitch
tags: radswitch, asp.net ajax, confirmation dialog, toggle, event handling
res_type: kb
ticketid: 1659523
---

## Environment

| Product | Version |
| --- | --- |
| RadSwitch for ASP.NET AJAX | 2024.2.513 |

## Description

When using the RadSwitch, a confirmation dialog appears when toggling the switch from the ON to OFF state, which can be unnecessary for some use cases. This article demonstrates how to disable the confirmation dialog when turning the switch OFF, ensuring it only appears when toggling the switch ON.

This KB article also answers the following questions:
- How can I conditionally show a confirmation dialog with RadSwitch in ASP.NET AJAX?
- How do I prevent a confirmation dialog from appearing when turning a switch OFF?
- What event handler should I use to control the display of confirmation dialogs in RadSwitch?

## Solution

To control when the confirmation dialog appears for a RadSwitch, use the `OnClientCheckedChanging` event handler. This allows you to conditionally display the confirmation dialog based on the switch's current state.

1. Define the `onClientCheckedChanging` JavaScript function. This function checks the switch's state and displays the confirmation dialog only when the switch is being turned ON.

```javascript
<script type="text/javascript">
    function onClientCheckedChanging(sender, args) {
        if (!sender.get_checked()) {
            var confirmText = "Are you sure you want to continue?";
            var userConfirmed = confirm(confirmText);

            if (!userConfirmed) {
                // If the user cancels, prevent the toggle
                args.set_cancel(true);
            }
        }
    }
</script>
```

2. Update the RadSwitch control to use the `OnClientCheckedChanging` event handler. Ensure this function is defined in your JavaScript and is accessible when the event triggers.

```asp
<telerik:RadSwitch ID="RadSwitchPoints" runat="server" 
      OnClientCheckedChanging="onClientCheckedChanging"
      Width="65px">
      <ToggleStates>
          <ToggleStateOn Text="ON" />
          <ToggleStateOff Text="OFF" />
      </ToggleStates>
</telerik:RadSwitch>
```

By implementing the above steps, the confirmation dialog will no longer appear when the switch is toggled OFF. It will only be displayed when the switch is toggled ON, as desired.

## See Also

- [RadSwitch Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/switch/overview)
- [Client-Side Events of RadSwitch](https://docs.telerik.com/devtools/aspnet-ajax/controls/switch/client-side-programming/events)
