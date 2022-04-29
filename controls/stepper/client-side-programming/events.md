---
title: Events
page_title: Client-side Events - RadStepper
description: Check our the client-side events of RadStepper - OnInitialize, OnLoad, OnSelect, OnActivate
slug: stepper/client-side-programming/events
tags: events
published: True
position: 1
---

# Events

This article lists the client-side events of the **RadStepper** and how to use them.

All events follow the MS AJAX client events convention and receive two arguments:

1. `sender` - the [RadStepper]({%slug stepper/client-side-programming/overview%}) instance that raised the event.
1. `event arguments` - event-specific data provided to the developer.

RadStepper is a wrapper over the Kendo UI Stepper widget and so it exposes the [client events](https://docs.telerik.com/kendo-ui/api/javascript/ui/stepper#events) and data it does. You can find a list below.

>note The event data is wrapped according to the MS AJAX conventions and the fields you can see in the underlying Kendo Widget are available through a method like `get_<fieldName>()` in the `event arguments` argument of the handler (that is, the second argument the event handler receives). To cancel a cancelable event, you must call its `args.set_cancel(true);` method.

The exceptions are the OnInitialize and OnLoad events that are specific to the MS AJAX framework.

>caption Listing 1: The client-side events exposed by RadStepper

* **OnInitialize** — Fired just before the RadStepper client-side object is initialized.

* **OnLoad** — Fired when RadStepper is initialized and loaded on the page.
  
* [OnSelect](https://docs.telerik.com/kendo-ui/api/javascript/ui/stepper/events/select) — Fires when the user clicks on a Step to select it. (Cancelable event) 
  
* [OnActivate](https://docs.telerik.com/kendo-ui/api/javascript/ui/stepper/events/activate) — Fires when a new Step has been selected upon user interaction.


## Examples

>caption Example 1: Store a reference to the client-side object through the OnLoad event

````ASP.NET
<script>
    var stepper, kendoStepper;
    function OnLoad(sender, args) {
        stepper = sender; //the RadStepper
        kendoStepper = sender.get_kendoWidget(); //the underlying Kendo Stepper widget
    }
</script>
<telerik:RadStepper runat="server" ID="RadStepper1">
    <ClientEvents OnLoad="OnLoad" />
</telerik:RadStepper>
````

>caption Example 2: Get the data associated with the activated Step

````ASP.NET
<script>
    function onActivate(sender, args) {
        //kendo object of the activated step 
        var step = args.get_step()
        //client side object of the step properties
        var stepProperties = step.options;

        //access the desired step options
        var labelText = stepProperties.label;
        var iconName = stepProperties.icon;
        var successIconName = stepProperties.successIcon;
        var enabled = stepProperties.enabled;
        var error = stepProperties.error;
    }
</script>
<telerik:RadStepper runat="server" ID="RadStepper1">
    <ClientEvents OnActivate="onActivate" />
    <Steps>
        <telerik:StepperStep Label ="Step 1"/>
        <telerik:StepperStep Label ="Step 2"/>
        <telerik:StepperStep Label ="Step 3"/>
    </Steps>
</telerik:RadStepper>
````

# See Also

 * [RadStepper Client-side Object]({%slug stepper/client-side-programming/overview%})


