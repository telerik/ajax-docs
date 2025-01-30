---
title: Adding Navigation URLs to RadStepper Steps
description: Learn how to add navigation URLs to steps in the RadStepper control for ASP.NET AJAX, enabling redirection upon step selection.
type: how-to
page_title: How to Implement Navigation for RadStepper Steps in ASP.NET AJAX
slug: stepper-add-navigation-urls
tags: radstepper, asp.net ajax, navigation, client-side, javascript
res_type: kb
ticketid: 1677261
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>RadStepper for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>2024.4.1114</td>
</tr>
</tbody>
</table>

## Description

In scenarios where clicking a step in the RadStepper control should navigate the user to a specific URL, it's necessary to handle the step selection client-side and perform the navigation using JavaScript. The RadStepper does not have a built-in property to set a navigation URL directly.

This knowledge base article also answers the following questions:
- How can I navigate to a URL when a RadStepper step is clicked?
- Is it possible to assign a navigation URL to steps in the RadStepper control?
- Can I use JavaScript to handle step selection in RadStepper for navigation purposes?

## Solution

To achieve navigation from RadStepper steps, follow these steps:

1. **Handle the OnClientStepSelected Event**: Utilize the [OnClientStepSelected](https://docs.telerik.com/devtools/aspnet-ajax/controls/stepper/client-side-programming/events) event to detect when a step is selected by the user.

2. **Implement JavaScript for Navigation**: Within the event handler, use JavaScript to navigate to the URL associated with the selected step.

### Sample Implementation

```asp
<telerik:RadStepper runat="server" ID="RadStepper1">
    <ClientEvents OnStepSelected="onStepSelected" />
    <Steps>
        <telerik:StepperStep Label="Step 1" />
        <telerik:StepperStep Label="Step 2" />
        <telerik:StepperStep Label="Step 3" />
    </Steps>
</telerik:RadStepper>

<script type="text/javascript">
    function onStepSelected(sender, args) {
        var stepIndex = args.get_step().getIndex();

        // Define URLs for each step
        var urls = [
            "http://example.com/step1",
            "http://example.com/step2",
            "http://example.com/step3"
        ];

        // Navigate to the URL corresponding to the selected step
        window.location.href = urls[stepIndex];
    }
</script>
```

**Explanation:**
- `OnClientStepSelected`: This event triggers when a user selects a step, providing an opportunity to execute custom JavaScript code.
- `args.get_step().getIndex()`: This method retrieves the index of the selected step, which is used to identify the correct URL from the `urls` array.
- `URLs Array`: An array that holds the URLs for each step. The navigation occurs based on the array index matching the step index.

Using this approach, you can easily add navigation functionality to the RadStepper steps without the need for server-side processing.

## See Also

- [RadStepper Client-Side Programming Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/stepper/client-side-programming/overview)
- [RadStepper Server-Side Programming Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/stepper/server-side-programming/overview)
