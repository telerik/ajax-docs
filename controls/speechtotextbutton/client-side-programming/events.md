---
title: Events
page_title: SpeechToTextButton Client-side Events
description: "Client-side Events of the Telerik WebForms SpeechToTextButton component."
slug: speechtotextbutton/client-side-programming/events
tags: speechtotextbutton,javascript
published: True
position: 2
---

# Events

Client-side Events of the Telerik WebForms SpeechToTextButton component.

- [Load](#load)
- [Start](#start)
- [End](#end)
- [Result](#result)
- [Error](#error)

## Load

Fires when the SpeechToTextButton component and its Kendo widget is fully initialized.

#### Event data

- **sender** - `Telerik.Web.UI.RadSpeechToTextButton` - The **SpeechToTextButton** instance that triggered the event.

Example

```JavaScript
function onLoad(sender, args) {
    let speechToTextButton = sender; // Telerik.Web.UI.RadSpeechToTextButton
    let kendoSpeechToTextButton = speechToTextButton.get_kendoWidget(); // kendo.ui.SpeechToTextButton
}
```

#### Attaching the event

##### In the Markup

````ASP.NET
<telerik:RadSpeechToTextButton runat="server" ID="RadSpeechToTextButton1">
    <ClientEvents OnLoad="onLoad" />
</telerik:RadSpeechToTextButton>
````

##### On Client-side

````JavaScript
function pageLoadHandler() {
    let speechToTextButton = $find("<%=  RadSpeechToTextButton1.ClientID %>");

    speechToTextButton.add_load(onLoad);
}

Sys.Application.add_load(pageLoadHandler);
````

##### On Server-side

````C#
protected void Page_PreInit(object sender, EventArgs e)
{
    RadSpeechToTextButton1.ClientEvents.OnLoad = "onLoad";
}
````
````VB
Protected Sub Page_PreInit(ByVal sender As Object, ByVal e As EventArgs) Handles Me.PreInit
    RadSpeechToTextButton1.ClientEvents.OnLoad = "onLoad"
End Sub
````

## Start

Fires when the speech recognition service has begun listening to incoming audio.

#### Event data

- **sender** - `Telerik.Web.UI.RadSpeechToTextButton` - Th **SpeechToTextButton** instance that triggered the event.
- **args** - `Sys.EventArgs` -  Instance of a DomEvent Class that is part of ASP.NET AJAX, see [Sys.UI.DomEvent Class](https://learn.microsoft.com/en-us/previous-versions/bb383775(v=vs.100)?redirectedfrom=MSDN).

| Property            | Return Type | Description                  |
| ------------------- | ----------- | ---------------------------- |
| `get_kendoWidget()` | `Object`    | The underlying Kendo widget. |

#### Attaching the event

##### In the Markup

````ASP.NET
<telerik:RadSpeechToTextButton runat="server" ID="RadSpeechToTextButton1">
    <ClientEvents OnStart="onStart" />
</telerik:RadSpeechToTextButton>
````

##### On Server-side

````C#
protected void Page_PreInit(object sender, EventArgs e)
{
    RadSpeechToTextButton1.ClientEvents.OnStart = "onStart";
}
````
````VB
Protected Sub Page_PreInit(ByVal sender As Object, ByVal e As EventArgs) Handles Me.PreInit
    RadSpeechToTextButton1.ClientEvents.OnStart = "onStart"
End Sub
````

##### Event Function

````JavaScript
function onStart(sender, args) {
    // Recognition started
}
````

## End

Fires when the speech recognition service has disconnected.

#### Event data

- **sender** - `Telerik.Web.UI.RadSpeechToTextButton` - The **SpeechToTextButton** instance that triggered the event.
- **args** - `Sys.EventArgs` - Instance of a DomEvent Class that is part of ASP.NET AJAX, see [Sys.UI.DomEvent Class](https://learn.microsoft.com/en-us/previous-versions/bb383775(v=vs.100)?redirectedfrom=MSDN).

| Property            | Return Type | Description                  |
| ------------------- | ----------- | ---------------------------- |
| `get_kendoWidget()` | `Object`    | The underlying Kendo widget. |

#### Attaching the event

##### In the Markup

````ASP.NET
<telerik:RadSpeechToTextButton runat="server" ID="RadSpeechToTextButton1">
    <ClientEvents OnEnd="onEnd" />
</telerik:RadSpeechToTextButton>
````

##### On Server-side

````C#
protected void Page_PreInit(object sender, EventArgs e)
{
    RadSpeechToTextButton1.ClientEvents.OnEnd = "onEnd";
}
````
````VB
Protected Sub Page_PreInit(ByVal sender As Object, ByVal e As EventArgs) Handles Me.PreInit
    RadSpeechToTextButton1.ClientEvents.OnEnd = "onEnd"
End Sub
````

##### Event Function

````JavaScript
function onEnd(sender, args) {
    // Recognition ended
}
````

## Result

Fires when the speech recognition service returns a result - a word or phrase has been positively recognized.

#### Event data

- **sender** - `Telerik.Web.UI.RadSpeechToTextButton` - The **SpeechToTextButton** instance that triggered the event.
- **args** - Provides accessors to result info.

| Property             | Return Type | Description                                           |
| -------------------- | ----------- | ----------------------------------------------------- |
| `get_isFinal()`      | `bool`      | Indicates if the current result is final.             |
| `get_alternatives()` | `Object[]`  | Alternative transcripts with transcript & confidence. |

Example.

````JavaScript
function onResult(sender, args) {
    let isFinal = args.get_isFinal();

    if (isFinal) {
        let alternatives = args.get_alternatives();
        let transcript = alternatives[0].transcript;
        let confidence = alternatives[0].confidence;
    }
}
````

## Error

Fires when a speech recognition error occurs.

#### Event data

- **sender** - `Telerik.Web.UI.RadSpeechToTextButton` - The **SpeechToTextButton** instance that triggered the event.
- **args** - Error info.

| Property      | Return Type       | Description                           |
| ------------- | ----------------- | ------------------------------------- |
| `get_error()` | `string` / Object | The error message or object returned. |

Event handler example

````JavaScript
function onError(sender, args) {
    console.error("Speech error:", args.get_error());
}
````

## Next Steps

- [Enums]({%slug otpinput/client-side-programming/enums%})
