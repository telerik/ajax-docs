---
title: Events
page_title: ChipList Client-side Events
description: "Client-side Events of the Telerik WebForms ChipList component."
slug: chiplist/client-side-programming/events
tags: chiplist,javascript,enums
published: True
position: 4
---


# Events

Client-side Events of the Telerik WebForms ChipList component.

- [Load](#load)
- [Click](#click)
- [Select](#select)
- [Remove](#remove)

## Load

Fires when the ChipList component and its kendo widget is fully initialized.

#### Event data
- **sender** `Telerik.Web.UI.RadChipList` - The **ChipList** instance that triggered the event.

Example

````JavaScript
function ClientLoad(sender) {
    var chiplist = sender; // Telerik Web.UI.RadChipList
    var kendoChipList = chiplist.get_kendoWidget(); // kendo.ui.ChipList
}
```` 

#### Attaching the event

##### In the Markup

````ASP.NET
<telerik:RadChipList runat="server" ID="RadChipList1" Label="ChipList">
    <ClientEvents OnLoad="ClientLoad" />
</telerik:RadChipList>
```` 

##### On Server-side

````C#
protected void Page_PreInit(object sender, EventArgs e)
{
    RadChipList1.ClientEvents.OnLoad = "ClientLoad";
}
````
````VB
Protected Sub Page_PreInit(ByVal sender As Object, ByVal e As EventArgs) Handles Me.PreInit
    RadChipList1.ClientEvents.OnLoad = "ClientLoad"
End Sub
````

##### On Client-Side

````JavaScript
function pageLoadHandler() {
    var chiplist = $find("<%=  RadChipList1.ClientID %>");

    chiplist.add_load(ClientLoad);
}
Sys.Application.add_load(pageLoadHandler);
```` 

## Click

Fires when the user clicks the content of the ChipList or activates it with the Enter or Space keys.

#### Event data
- **sender** `Telerik.Web.UI.RadChipList` - The **ChipList** instance that triggered the event.
- **args.get_domEvent()** `Sys.UI.DomEvent` - Instance of a DomEvent Class that is part of ASP.NET AJAX, see [Sys.UI.DomEvent Class](https://learn.microsoft.com/en-us/previous-versions/bb383775(v=vs.100)?redirectedfrom=MSDN).

Example

````JavaScript
function ClientClick(sender) {
    var chiplist = sender; // Telerik Web.UI.RadChipList
    var kendoChipList = chiplist.get_kendoWidget(); // kendo.ui.ChipList
    var domeEvent = args.get_domEvent(); // Sys.UI.DomEvent
}
```` 

#### Attaching the event

##### In the Markup

````ASP.NET
<telerik:RadChipList runat="server" ID="RadChipList1" Label="ChipList">
    <ClientEvents OnClick="ClientClick" />
</telerik:RadChipList>
```` 

##### On Server-side

````C#
protected void Page_PreInit(object sender, EventArgs e)
{
    RadChipList1.ClientEvents.OnClick = "ClientClick";
}
````
````VB
Protected Sub Page_PreInit(ByVal sender As Object, ByVal e As EventArgs) Handles Me.PreInit
    RadChipList1.ClientEvents.OnClick = "ClientClick"
End Sub
````

##### On Client-Side

````JavaScript
function pageLoadHandler() {
    var chiplist = $find("<%=  RadChipList1.ClientID %>");

    chiplist.add_click(ClientClick);
}
Sys.Application.add_load(pageLoadHandler);
````

## Select

Fires when the selection of a selectable (`Selectable="true"`) ChipList toggles.

#### Event data
- **sender** `Telerik.Web.UI.RadChipList` - The **ChipList** instance that triggered the event.
- **args.get_domEvent()** `Sys.UI.DomEvent` - Instance of a DomEvent Class that is part of ASP.NET AJAX, see [Sys.UI.DomEvent Class](https://learn.microsoft.com/en-us/previous-versions/bb383775(v=vs.100)?redirectedfrom=MSDN).
- **args.set_cancel()** - Get whether the event is canceled. Use this to understand whether the selecting event is prevented.
- **args.set_cancel()** - Set whether to cancel the event. Use this to prevent selecting the ChipList.

Example

````JavaScript
function ClientSelect(sender, args) {
    var chiplist = sender; // Telerik Web.UI.RadChipList
    var kendoChipList = chiplist.get_kendoWidget(); // kendo.ui.ChipList
    var domeEvent = args.get_domEvent(); // Sys.UI.DomEvent
    var isSelectionCanceled = args.get_cancel();

    // prevent the selection by canceling the event
    args.set_cancel(true);
}
```` 

#### Attaching the event

##### In the Markup

````ASP.NET
<telerik:RadChipList runat="server" ID="RadChipList1" Label="ChipList">
    <ClientEvents OnSelect="ClientSelect" />
</telerik:RadChipList>
```` 

##### On Server-side

````C#
protected void Page_PreInit(object sender, EventArgs e)
{
    RadChipList1.ClientEvents.OnSelect = "ClientSelect";
}
````
````VB
Protected Sub Page_PreInit(ByVal sender As Object, ByVal e As EventArgs) Handles Me.PreInit
    RadChipList1.ClientEvents.OnSelect = "ClientSelect"
End Sub
````

##### On Client-Side

````JavaScript
function pageLoadHandler() {
    var chiplist = $find("<%=  RadChipList1.ClientID %>");

    chiplist.add_select(ClientSelect);
}
Sys.Application.add_load(pageLoadHandler);
````

## Remove

Fires when the user clicks the remove icon of a removable (`Removable="true"`) ChipList. After this event, the ChipList will not remove itself.

#### Event data
- **sender** `Telerik.Web.UI.RadChipList` - The **ChipList** instance that triggered the event.
- **args.get_domEvent()** `Sys.UI.DomEvent` - Instance of a DomEvent Class that is part of ASP.NET AJAX, see [Sys.UI.DomEvent Class](https://learn.microsoft.com/en-us/previous-versions/bb383775(v=vs.100)?redirectedfrom=MSDN).

Example

````JavaScript
function ClientRemove(sender, args) {
    var chiplist = sender; // Telerik Web.UI.RadChipList
    var kendoChipList = chiplist.get_kendoWidget(); // kendo.ui.ChipList
    var domeEvent = args.get_domEvent(); // Sys.UI.DomEvent
}
```` 

#### Attaching the event

##### In the Markup

````ASP.NET
<telerik:RadChipList runat="server" ID="RadChipList1" Label="ChipList">
    <ClientEvents OnRemove="ClientRemove" />
</telerik:RadChipList>
```` 

##### On Server-side

````C#
protected void Page_PreInit(object sender, EventArgs e)
{
    RadChipList1.ClientEvents.OnRemove = "ClientRemove";
}
````
````VB
Protected Sub Page_PreInit(ByVal sender As Object, ByVal e As EventArgs) Handles Me.PreInit
    RadChipList1.ClientEvents.OnRemove = "ClientRemove"
End Sub
````

##### On Client-Side

````JavaScript
function pageLoadHandler() {
    var chiplist = $find("<%=  RadChipList1.ClientID %>");

    chiplist.add_remove(ClientRemove);
}
Sys.Application.add_load(pageLoadHandler);
````

## Next Steps

- [Enums]({%slug chiplist/client-side-programming/enums%})

## See Also

- [Overview]({%slug chiplist/client-side-programming/overview%})
- [Properties]({%slug chiplist/client-side-programming/properties%})
- [Methods]({%slug chiplist/client-side-programming/methods%})
- [Enums]({%slug chiplist/client-side-programming/enums%})

 