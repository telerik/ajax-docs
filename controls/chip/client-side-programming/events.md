---
title: Events
page_title: Chip Client-side Events
description: "Client-side Events of the Telerik WebForms Chip component."
slug: chip/client-side-programming/events
tags: chip,javascript,enums
published: True
position: 2
---


# Events

Client-side Events of the Telerik WebForms Chip component.

- [Load](#load)
- [Click](#click)
- [Select](#select)
- [Remove](#remove)

## Load

Fires when the Chip component and its kendo widget is fully initialized.

#### Event data
- **sender** `Telerik.Web.UI.RadChip` - The **Chip** instance that triggered the event.

Example

````JavaScript
function ClientLoad(sender) {
    var chip = sender; // Telerik Web.UI.RadChip
    var kendoChip = chip.get_kendoWidget(); // kendo.ui.Chip
}
```` 

#### Attaching the event

##### In the Markup

````ASP.NET
<telerik:RadChip runat="server" ID="RadChip1" Label="Chip">
    <ClientEvents OnLoad="ClientLoad" />
</telerik:RadChip>
```` 

##### On Server-side

````C#
protected void Page_PreInit(object sender, EventArgs e)
{
    RadChip1.ClientEvents.OnLoad = "ClientLoad";
}
````
````VB
Protected Sub Page_PreInit(ByVal sender As Object, ByVal e As EventArgs) Handles Me.PreInit
    RadChip1.ClientEvents.OnLoad = "ClientLoad"
End Sub
````

##### On Client-Side

````JavaScript
function pageLoadHandler() {
    var chip = $find("<%=  RadChip1.ClientID %>");

    chip.add_load(ClientLoad);
}
Sys.Application.add_load(pageLoadHandler);
```` 

## Click

Fires when the user clicks the content of the Chip or activates it with the Enter or Space keys.

#### Event data
- **sender** `Telerik.Web.UI.RadChip` - The **Chip** instance that triggered the event.
- **args.get_domEvent()** `Sys.UI.DomEvent` - Instance of a DomEvent Class that is part of ASP.NET AJAX, see [Sys.UI.DomEvent Class](https://learn.microsoft.com/en-us/previous-versions/bb383775(v=vs.100)?redirectedfrom=MSDN).

Example

````JavaScript
function ClientClick(sender) {
    var chip = sender; // Telerik Web.UI.RadChip
    var kendoChip = chip.get_kendoWidget(); // kendo.ui.Chip
    var domeEvent = args.get_domEvent(); // Sys.UI.DomEvent
}
```` 

#### Attaching the event

##### In the Markup

````ASP.NET
<telerik:RadChip runat="server" ID="RadChip1" Label="Chip">
    <ClientEvents OnClick="ClientClick" />
</telerik:RadChip>
```` 

##### On Server-side

````C#
protected void Page_PreInit(object sender, EventArgs e)
{
    RadChip1.ClientEvents.OnClick = "ClientClick";
}
````
````VB
Protected Sub Page_PreInit(ByVal sender As Object, ByVal e As EventArgs) Handles Me.PreInit
    RadChip1.ClientEvents.OnClick = "ClientClick"
End Sub
````

##### On Client-Side

````JavaScript
function pageLoadHandler() {
    var chip = $find("<%=  RadChip1.ClientID %>");

    chip.add_click(ClientLoad);
}
Sys.Application.add_load(pageLoadHandler);
````

## Select

Fires when the selection of a selectable (`Selectable="true"`) Chip toggles.

#### Event data
- **sender** `Telerik.Web.UI.RadChip` - The **Chip** instance that triggered the event.
- **args.get_domEvent()** `Sys.UI.DomEvent` - Instance of a DomEvent Class that is part of ASP.NET AJAX, see [Sys.UI.DomEvent Class](https://learn.microsoft.com/en-us/previous-versions/bb383775(v=vs.100)?redirectedfrom=MSDN).
- **args.set_cancel()** - Gets whether the event is canceled. Use this to understand whether the selecting event is prevented.
- **args.set_cancel()** - Set whether to cancel the event. Use this to prevent selecting the Chip.

Example

````JavaScript
function ClientSelect(sender, args) {
    var chip = sender; // Telerik Web.UI.RadChip
    var kendoChip = chip.get_kendoWidget(); // kendo.ui.Chip
    var domeEvent = args.get_domEvent(); // Sys.UI.DomEvent
    var isSelectionCanceled = args.get_cancel();

    // prevent the selection by canceling the event
    args.set_cancel(true);
}
```` 

#### Attaching the event

##### In the Markup

````ASP.NET
<telerik:RadChip runat="server" ID="RadChip1" Label="Chip">
    <ClientEvents OnSelect="ClientSelect" />
</telerik:RadChip>
```` 

##### On Server-side

````C#
protected void Page_PreInit(object sender, EventArgs e)
{
    RadChip1.ClientEvents.OnSelect = "ClientSelect";
}
````
````VB
Protected Sub Page_PreInit(ByVal sender As Object, ByVal e As EventArgs) Handles Me.PreInit
    RadChip1.ClientEvents.OnSelect = "ClientSelect"
End Sub
````

##### On Client-Side

````JavaScript
function pageLoadHandler() {
    var chip = $find("<%=  RadChip1.ClientID %>");

    chip.add_select(ClientSelect);
}
Sys.Application.add_load(pageLoadHandler);
````

## Remove

Fires when the user clicks the remove icon of a removable (`Removable="true"`) Chip. After this event, the Chip will not remove itself.

#### Event data
- **sender** `Telerik.Web.UI.RadChip` - The **Chip** instance that triggered the event.
- **args.get_domEvent()** `Sys.UI.DomEvent` - Instance of a DomEvent Class that is part of ASP.NET AJAX, see [Sys.UI.DomEvent Class](https://learn.microsoft.com/en-us/previous-versions/bb383775(v=vs.100)?redirectedfrom=MSDN).

Example

````JavaScript
function ClientRemove(sender, args) {
    var chip = sender; // Telerik Web.UI.RadChip
    var kendoChip = chip.get_kendoWidget(); // kendo.ui.Chip
    var domeEvent = args.get_domEvent(); // Sys.UI.DomEvent
}
```` 

#### Attaching the event

##### In the Markup

````ASP.NET
<telerik:RadChip runat="server" ID="RadChip1" Label="Chip">
    <ClientEvents OnRemove="ClientRemove" />
</telerik:RadChip>
```` 

##### On Server-side

````C#
protected void Page_PreInit(object sender, EventArgs e)
{
    RadChip1.ClientEvents.OnRemove = "ClientRemove";
}
````
````VB
Protected Sub Page_PreInit(ByVal sender As Object, ByVal e As EventArgs) Handles Me.PreInit
    RadChip1.ClientEvents.OnRemove = "ClientRemove"
End Sub
````

##### On Client-Side

````JavaScript
function pageLoadHandler() {
    var chip = $find("<%=  RadChip1.ClientID %>");

    chip.add_remove(ClientRemove);
}
Sys.Application.add_load(pageLoadHandler);
````

## Next Steps

- [Server-side Programming]({%slug chip/server-side-programming/overview%})

## See Also

- [Client-side Programming Overview]({%slug chip/client-side-programming/overview%})
- [Properties]({%slug chip/client-side-programming/properties%})
- [Enums]({%slug chip/client-side-programming/enums%})
 
