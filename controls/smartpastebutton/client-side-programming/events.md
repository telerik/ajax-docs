---
title: Events
page_title: SmartPasteButton Client-side Events
description: "Client-side Events of the Telerik WebForms SmartPasteButton component."
slug: smartpastebutton/client-side-programming/events
tags: smartpastebutton,javascript
published: True
position: 2
---

# Events

Client-side Events of the Telerik WebForms SmartPasteButton component.

- [Load](#load)
- [RequestStart](#requeststart)
- [RequestEnd](#requestend)
- [Error](#error)

## Load

Fires when the SmartPasteButton component and its Kendo widget is fully initialized.

#### Event data

- **sender** - `Telerik.Web.UI.RadSmartPasteButton` - The **SmartPasteButton** instance that triggered the event.

Example

```JavaScript
function onLoad(sender, args) {
    let smartPasteButton = sender; // Telerik.Web.UI.RadSmartPasteButton
    let kendoSmartPasteButton = smartPasteButton.get_kendoWidget(); // kendo.ui.SmartPasteButton
}
```

#### Attaching the event

##### In the Markup

````ASP.NET
<telerik:RadSmartPasteButton runat="server" ID="SmartPasteButton1" ServiceUrl="https://demos.telerik.com/service/v2/ai/smartpaste/smartpaste">
    <ClientEvents OnLoad="onLoad" />
</telerik:RadSmartPasteButton>
````

##### On Client-side

````JavaScript
function pageLoadHandler() {
    let smartPasteButton = $find("<%=  SmartPasteButton1.ClientID %>");

    smartPasteButton.add_load(onLoad);
}

Sys.Application.add_load(pageLoadHandler);
````

##### On Server-side

````C#
protected void Page_PreInit(object sender, EventArgs e)
{
    SmartPasteButton1.ClientEvents.OnLoad = "onLoad";
}
````
````VB
Protected Sub Page_PreInit(ByVal sender As Object, ByVal e As EventArgs) Handles Me.PreInit
    SmartPasteButton1.ClientEvents.OnLoad = "onLoad"
End Sub
````

## RequestStart

Fires when the SmartPasteButton is about to send a request to the LLM service. This event is cancellable.

#### Event data

- **sender** - `Telerik.Web.UI.RadSmartPasteButton` - The **SmartPasteButton** instance that triggered the event.
- **args** - Provides accessors to request info.

| Property            | Return Type | Description                                            |
| ------------------- | ----------- | ------------------------------------------------------ |
| `get_content()`     | `string`    | Gets the clipboard content being sent to the service.  |
| `get_formFields()`  | `Object`    | Gets the form fields configuration.                    |
| `set_cancel(value)` | `bool`      | Set to `true` to cancel the request.                   |

Example

````JavaScript
function onRequestStart(sender, args) {
    let content = args.get_content();
    let formFields = args.get_formFields();

    if (!content) {
        args.set_cancel(true); // Cancel the request if no content
    }
}
````

#### Attaching the event

##### In the Markup

````ASP.NET
<telerik:RadSmartPasteButton runat="server" ID="SmartPasteButton1" ServiceUrl="https://demos.telerik.com/service/v2/ai/smartpaste/smartpaste">
    <ClientEvents OnRequestStart="onRequestStart" />
</telerik:RadSmartPasteButton>
````

##### On Server-side

````C#
protected void Page_PreInit(object sender, EventArgs e)
{
    SmartPasteButton1.ClientEvents.OnRequestStart = "onRequestStart";
}
````
````VB
Protected Sub Page_PreInit(ByVal sender As Object, ByVal e As EventArgs) Handles Me.PreInit
    SmartPasteButton1.ClientEvents.OnRequestStart = "onRequestStart"
End Sub
````

## RequestEnd

Fires when the SmartPasteButton receives a successful response from the LLM service.

#### Event data

- **sender** - `Telerik.Web.UI.RadSmartPasteButton` - The **SmartPasteButton** instance that triggered the event.
- **args** - Provides accessors to response info.

| Property             | Return Type | Description                                                 |
| -------------------- | ----------- | ----------------------------------------------------------- |
| `get_fieldValues()`  | `Object`    | Gets the field values returned from the LLM service.        |

Example

````JavaScript
function onRequestEnd(sender, args) {
    let fieldValues = args.get_fieldValues();
    
    console.log("Smart paste completed:", fieldValues);
}
````

#### Attaching the event

##### In the Markup

````ASP.NET
<telerik:RadSmartPasteButton runat="server" ID="SmartPasteButton1" ServiceUrl="https://demos.telerik.com/service/v2/ai/smartpaste/smartpaste">
    <ClientEvents OnRequestEnd="onRequestEnd" />
</telerik:RadSmartPasteButton>
````

##### On Server-side

````C#
protected void Page_PreInit(object sender, EventArgs e)
{
    SmartPasteButton1.ClientEvents.OnRequestEnd = "onRequestEnd";
}
````
````VB
Protected Sub Page_PreInit(ByVal sender As Object, ByVal e As EventArgs) Handles Me.PreInit
    SmartPasteButton1.ClientEvents.OnRequestEnd = "onRequestEnd"
End Sub
````

## Error

Fires when an error occurs during the smart paste operation.

#### Event data

- **sender** - `Telerik.Web.UI.RadSmartPasteButton` - The **SmartPasteButton** instance that triggered the event.
- **args** - Error info.

| Property      | Return Type       | Description                           |
| ------------- | ----------------- | ------------------------------------- |
| `get_error()` | `string` / Object | The error message or object returned. |

Event handler example

````JavaScript
function onError(sender, args) {
    console.error("Smart paste error:", args.get_error());
}
````

#### Attaching the event

##### In the Markup

````ASP.NET
<telerik:RadSmartPasteButton runat="server" ID="SmartPasteButton1" ServiceUrl="https://demos.telerik.com/service/v2/ai/smartpaste/smartpaste">
    <ClientEvents OnError="onError" />
</telerik:RadSmartPasteButton>
````

##### On Server-side

````C#
protected void Page_PreInit(object sender, EventArgs e)
{
    SmartPasteButton1.ClientEvents.OnError = "onError";
}
````
````VB
Protected Sub Page_PreInit(ByVal sender As Object, ByVal e As EventArgs) Handles Me.PreInit
    SmartPasteButton1.ClientEvents.OnError = "onError"
End Sub
````

## Next Steps

- [Enums]({%slug smartpastebutton/client-side-programming/enums%})
