---
title: Events
page_title: OTPInput Client-side Events
description: "Client-side Events of the Telerik WebForms OTPInput component."
slug: otpinput/client-side-programming/events
tags: otpinput,javascript
published: True
position: 2
---

# Events

Client-side Events of the Telerik WebForms OTPInput component.

- [Load](#load)
- [Change](#change)

## Load

Fires when the OTPInput component and its kendo widget is fully initialized.

#### Event data

- **sender** - `Telerik.Web.UI.RadOTPInput` - The **OTPInput** instance that triggered the event.

Example

```JavaScript
function onLoad(sender, args) {
    let otpInput = sender; // Telerik.Web.UI.RadOTPInput
    let kendoOTPInput = otpInput.get_kendoWidget(); // kendo.ui.OTPInput
}
```

#### Attaching the event

##### In the Markup

````ASP.NET
<telerik:RadOTPInput ID="RadOTPInput1" runat="server" Separator="-">
    <ItemsCollection>
        <telerik:OTPInputItem GroupLength="3" />
        <telerik:OTPInputItem GroupLength="3" />
    </ItemsCollection>
    <ClientEvents OnLoad="onLoad" />
</telerik:RadOTPInput>
````

##### On Client-side

````JavaScript
function pageLoadHandler() {
    let otpInput = $find("<%=  RadOTPInput1.ClientID %>");

    otpInput.add_load(onLoad);
}

Sys.Application.add_load(pageLoadHandler);
````

##### On Server-side

````C#
protected void Page_PreInit(object sender, EventArgs e)
{
    RadOTPInput1.ClientEvents.OnLoad = "onLoad";
}
````
````VB
Protected Sub Page_PreInit(ByVal sender As Object, ByVal e As EventArgs) Handles Me.PreInit
    RadOTPInput1.ClientEvents.OnLoad = "onLoad"
End Sub
````

## Change

Triggered when the value of the control is changed by the user.

#### Event data

- **sender** - `Telerik.Web.UI.RadOTPInput` - The **OTPInput** instance that triggered the event.
- **args** - `Sys.UI.DomEvent` - Instance of a DomEvent Class that is part of ASP.NET AJAX, see [Sys.UI.DomEvent Class](<https://learn.microsoft.com/en-us/previous-versions/bb383775(v=vs.100)?redirectedfrom=MSDN>).

| Property    | Return Type | Description     |
| ----------- | ----------- | --------------- |
| `get_value()` | `string`    | The typed value |

#### Attaching the event

##### In the Markup

````ASP.NET
<telerik:RadOTPInput ID="RadOTPInput1" runat="server" Separator="-">
    <ItemsCollection>
        <telerik:OTPInputItem GroupLength="3" />
        <telerik:OTPInputItem GroupLength="3" />
    </ItemsCollection>
    <ClientEvents OnChange="onChange" />
</telerik:RadOTPInput>
````

##### On Server-Side

````C#
protected void Page_PreInit(object sender, EventArgs e)
{
    RadOTPInput1.ClientEvents.OnChange = "onChange";
}
````
````VB
Protected Sub Page_PreInit(ByVal sender As Object, ByVal e As EventArgs) Handles Me.PreInit
    RadOTPInput1.ClientEvents.OnChange = "onChange"
End Sub
````

##### Event Function

````JavaScript
function onChange(sender, args) {
    let value = args.get_value();
}
````
