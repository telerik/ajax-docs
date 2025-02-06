---
title: Events
page_title: AIPrompt Client-side Events
description: "Client-side Events of the Telerik WebForms AIPrompt component."
slug: aiprompt/client-side-programming/events
tags: aiprompt,javascript
published: True
position: 2
---

# Events

Client-side Events of the Telerik WebForms Chip component.

- [Load](#load)
- [PromptRequest](#prompt-request)
- [CommandExecute](#command-execute)
- [OutputCopy](#output-copy)
- [OutputRatingChange](#output-rating-change)

## Load

Fires when the AIPrompt component and its kendo widget is fully initialized.

#### Event data

- **sender** - `Telerik.Web.UI.AIPrompt` - The **AIPrompt** instance that triggered the event.

Example

````JavaScript
function onLoad(sender) {
    let aiPrompt = sender; // Telerik.Web.UI.RadAIPrompt
    let kendoAIPrompt = aiPrompt.get_kendoWidget(); // kendo.ui.AIPrompt
}
```` 

#### Attaching the event

##### In the Markup

````ASP.NET
<telerik:RadAIPrompt runat="server" ID="RadAIPrompt1">
    <ClientEvents OnLoad="onLoad" />
</telerik:RadAIPrompt>
```` 

##### On Client-side

````JavaScript
function pageLoadHandler() {
    let aiPrompt = $find("<%=  RadAIPrompt1.ClientID %>");

    aiPrompt.add_load(onLoad);
}

Sys.Application.add_load(pageLoadHandler);
````

##### On Server-side

````C#
protected void Page_PreInit(object sender, EventArgs e)
{
    RadAIPrompt1.ClientEvents.OnLoad = "onLoad";
}
````
````VB
Protected Sub Page_PreInit(ByVal sender As Object, ByVal e As EventArgs) Handles Me.PreInit
    RadAIPrompt1.ClientEvents.OnLoad = "onLoad"
End Sub
````

## Prompt Request

Triggered when the prompt view Generate output button is clicked.

#### Event data

- **sender** - `Telerik.Web.UI.RadAIPrompt` - The **AIPrompt** instance that triggered the event.
- **args** - `Sys.UI.DomEvent` - Instance of a DomEvent Class that is part of ASP.NET AJAX, see [Sys.UI.DomEvent Class](https://learn.microsoft.com/en-us/previous-versions/bb383775(v=vs.100)?redirectedfrom=MSDN).

| Property         | Return Type         | Description                     |
|---               |---                  |---                              |
| `get_prompt()`   | `string`            | Get the Prompt text.            |
| `get_isRetry()`  | `bool`              | See if the request is a Retrty. |

#### Attaching the event

##### In the Markup

````ASP.NET
<telerik:RadAIPrompt runat="server" ID="RadAIPrompt1">
    <ClientEvents OnPromptRequest="onPromptRequest" />
</telerik:RadAIPrompt>
````

##### On Server-Side

````C#
protected void Page_PreInit(object sender, EventArgs e)
{
    RadAIPrompt1.ClientEvents.OnPromptRequest = "onPromptRequest";
}
````
````VB
Protected Sub Page_PreInit(ByVal sender As Object, ByVal e As EventArgs) Handles Me.PreInit
    RadAIPrompt1.ClientEvents.OnPromptRequest = "onPromptRequest"
End Sub
````

##### Event Function 

````JavaScript
function onPromptRequest(sender, args) {
    var prompt = args.get_prompt();
    var isRetry = args.get_isRetry();
}
````

## Command Execute

Triggered when a command item from the Commands view is clicked. The panel bar dataItem of the selected item is available through the event argument.

#### Event data

- **sender** - `Telerik.Web.UI.RadAIPrompt` - The **AIPrompt** instance that triggered the event.
- **args** - `Sys.UI.DomEvent` - Instance of a DomEvent Class that is part of ASP.NET AJAX, see [Sys.UI.DomEvent Class](https://learn.microsoft.com/en-us/previous-versions/bb383775(v=vs.100)?redirectedfrom=MSDN).

| Property                 | Return Type              | Description                                               |
|---                       |---                       |---                                                        |
| `get_item()`             | `Object`                 | The clicked PanelBar item.                                |

#### Attaching the event

##### In the Markup

````ASP.NET
<telerik:RadAIPrompt runat="server" ID="RadAIPrompt1">
    <PromptCommands>
        <telerik:ViewPromptCommand ID="CommandSimplify" Text="Simplify" Icon="min-width" />
        <telerik:ViewPromptCommand ID="CommandExtend" Text="Extend" Icon="arrows-left-right" />
    </PromptCommands>
    <ClientEvents OnCommandExecute="onCommandExecute" />
</telerik:RadAIPrompt>
````

##### On Server-Side

````C#
protected void Page_PreInit(object sender, EventArgs e)
{
    RadAIPrompt1.ClientEvents.OnCommandExecute = "onCommandExecute";
}
````
````VB
Protected Sub Page_PreInit(ByVal sender As Object, ByVal e As EventArgs) Handles Me.PreInit
    RadAIPrompt1.ClientEvents.OnCommandExecute = "onCommandExecute"
End Sub
````

##### Event Function 

````JavaScript
function onCommandExecute(sender, args) {
    var item = args.get_item();
}
````

## Output Copy

Triggered when the copy output button of an output is clicked

#### Event data

- **sender** - `Telerik.Web.UI.RadAIPrompt` - The **AIPrompt** instance that triggered the event.
- **args** - `Sys.UI.DomEvent` - Instance of a DomEvent Class that is part of ASP.NET AJAX, see [Sys.UI.DomEvent Class](https://learn.microsoft.com/en-us/previous-versions/bb383775(v=vs.100)?redirectedfrom=MSDN).

| Property                 | Return Type              | Description         |
|---                       |---                       |---                  |
| `get_output()`           | `Object`                 | The copied Output.  |

#### Attaching the event

##### In the Markup

````ASP.NET
<telerik:RadAIPrompt runat="server" ID="RadAIPrompt1">
    <ClientEvents OnOutputCopy="onOutputCopy" />
</telerik:RadAIPrompt>
````

##### On Server-Side

````C#
protected void Page_PreInit(object sender, EventArgs e)
{
    RadAIPrompt1.ClientEvents.OnOutputCopy = "onOutputCopy";
}
````
````VB
Protected Sub Page_PreInit(ByVal sender As Object, ByVal e As EventArgs) Handles Me.PreInit
    RadAIPrompt1.ClientEvents.OnOutputCopy = "onOutputCopy"
End Sub
````

##### Event Function 

````JavaScript
function onOutputCopy(sender, args) {
    var output = args.get_output();
}
````

## Output Rating Change

Triggered when the rating of an output is changed through the rate buttons of an output.

#### Event data

- **sender** - `Telerik.Web.UI.RadAIPrompt` - The **AIPrompt** instance that triggered the event.
- **args** - `Sys.UI.DomEvent` - Instance of a DomEvent Class that is part of ASP.NET AJAX, see [Sys.UI.DomEvent Class](https://learn.microsoft.com/en-us/previous-versions/bb383775(v=vs.100)?redirectedfrom=MSDN).

| Property                 | Return Type              | Description                   |
|---                       |---                       |---                            |
| `get_output()`           | `Object`                 | The copied Output.            |
| `get_rateType()`         | `string`                 | The rate type of the Output.  |

#### Attaching the event

##### In the Markup

````ASP.NET
<telerik:RadAIPrompt runat="server" ID="RadAIPrompt1">
    <ClientEvents OnOutputRatingChange="onOutputRatingChange" />
</telerik:RadAIPrompt>
````

##### On Server-Side

````C#
protected void Page_PreInit(object sender, EventArgs e)
{
    RadAIPrompt1.ClientEvents.OnOutputRatingChange = "onOutputRatingChange";
}
````
````VB
Protected Sub Page_PreInit(ByVal sender As Object, ByVal e As EventArgs) Handles Me.PreInit
    RadAIPrompt1.ClientEvents.OnOutputRatingChange = "onOutputRatingChange"
End Sub
````

##### Event Function 

````JavaScript
function onOutputRatingChange(sender, args) {
    var output = args.get_output();
    var rateType = args.get_rateType();
}
````
