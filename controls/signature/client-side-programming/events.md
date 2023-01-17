---
title: Events
page_title: RadSignature Client-side Events
description: Check our Web Forms article about the API of RadSignature object.
slug: signature/client-side-programming/events
tags: overview
published: True
position: 1
---

# Events

This article lists the client-side events of the **RadSignature** and how to use them.

All events follow the MS AJAX client events convention and receive two arguments:

1. `sender` - the [RadSignature]({%slug signature/client-side-programming/overview%}) instance that raised the event.
1. `event arguments` - event-specific data provided to the developer.

RadSignature is a wrapper over the Kendo UI Signature widget and so it exposes the [client events](https://docs.telerik.com/kendo-ui/api/javascript/ui/signature#events) and data it does. You can find a list below.

>note The event data is wrapped according to the MS AJAX conventions and the fields you can see in the underlying Kendo Widget are available through a method like `get_<fieldName>()` in the `event arguments` argument of the handler (that is, the second argument the event handler receives). To cancel a   cancelable event, you must call its `args.set_cancel(true);` method.

The exceptions are the OnInitialize and OnLoad events that are specific to the MS AJAX framework.

>caption Listing 1: The client-side events exposed by RadSignature

* **OnInitialize** — Fired just before the RadSignature client-side object is initialized.

* **OnLoad** — Fired when RadSignature is initialized.
  
* [OnChange](https://docs.telerik.com/kendo-ui/api/javascript/ui/signature/events/change) — Fires when the value of the component is changed by the user.

* [OnOpen](https://docs.telerik.com/kendo-ui/api/javascript/ui/signature/events/open) — Fires when the PopUp signature-pad is opened by the user.

* [OnClose](https://docs.telerik.com/kendo-ui/api/javascript/ui/signature/events/close) — Fires when the PopUp signature-pad is closed by the user.
## Examples

>caption Example 1: Store a reference to the client-side object through the OnLoad event

````ASP.NET
<script>
    var signature, kendoSignature;
    function OnLoad(sender, args) {
        signature = sender; //the RadSignature
        kendoSignature = sender.get_kendoWidget(); //the underlying Kendo Signature Widget
    }
</script>
<telerik:RadSignature runat="server" ID="RadSignature1">
    <ClientEvents OnLoad="OnLoad" />
</telerik:RadSignature>
````

>caption Example 2: Handling opening and closing Signature Popup:

````ASPX
<script>
    function popUpOpen(sender, args) {
        alert("Signature PopUp Open!")
    }
    function popUpClose(sender, args) {
        alert("Signature PopUp Close!")
    }
</script>
<telerik:RadSignature runat="server" ID="RadSignature1">
    <ClientEvents OnOpen="popUpOpen" OnClose="popUpClose" />
</telerik:RadSignature>
````

>caption Example 3: Get the base64 string representation associated with currently applied signature

````ASPX
<script>
    function valueChanged(sender, args) {
        alert('Signature added/changed! \n New signature as Base64String:\n' + sender.get_value());
    }
</script>

<telerik:RadSignature runat="server" ID="RadSignature1">
    <ClientEvents OnChange="valueChanged" />
</telerik:RadSignature>
````

See live sample of handling the client events in our [Client-side events demo](https://demos.telerik.com/aspnet-ajax/signature/events/defaultcs.aspx)


# See Also

 * [RadSignature Client-side Object]({%slug signature/client-side-programming/overview%})
 * [Client-side events demo](https://demos.telerik.com/aspnet-ajax/signature/events/defaultcs.aspx)


