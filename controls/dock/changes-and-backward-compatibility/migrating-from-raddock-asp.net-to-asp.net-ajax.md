---
title: Migrating From RadDock ASP.NET To ASP.NET AJAX
page_title: Migrating From RadDock ASP.NET To ASP.NET AJAX | RadDock for ASP.NET AJAX Documentation
description: Migrating From RadDock ASP.NET To ASP.NET AJAX
slug: dock/changes-and-backward-compatibility/migrating-from-raddock-asp.net-to-asp.net-ajax
tags: migrating,from,raddock,asp.net,to,asp.net,ajax
published: True
position: 1
---

# Migrating From RadDock ASP.NET To ASP.NET AJAX



To add RadDock for ASP.NET AJAX to an existing ASP.NET web application you need to follow these steps:

1. Make sure you have installed ASP.NET AJAX. Info can be found at [http://ajax.asp.net/docs/InstallingASPNETAJAX.aspx](http://ajax.asp.net/docs/InstallingASPNETAJAX.aspx)

1. If your web application is not using ASP.NET AJAX you need to configure it to do so. Detailed instructions can be found at [http://ajax.asp.net/docs/ConfiguringASPNETAJAX.aspx](http://ajax.asp.net/docs/ConfiguringASPNETAJAX.aspx) (Look for the topic called "Adding ASP.NET AJAX Configuration Elements to an Existing Web Site".)

1. Add a ScriptManager control to the page (or user control) in which you want to add any Telerik® UI for ASP.NET Ajax.<asp:ScriptManager ID="ScriptManager1" runat="server" />If your page is a content page you can add the ScriptManager control in your master page. For further details about the ScriptManager control, see [http://ajax.asp.net/docs/overview/ScriptManagerOverview.aspx](http://ajax.asp.net/docs/overview/ScriptManagerOverview.aspx).

1. Drag and drop a control from the Telerik® UI for ASP.NET Ajax package or manually copy the Telerik.Web.UI.dll in the Bin folder.

1. Replace the classic RadDock directive<%@ Register Assembly="RadDock.Net2" Namespace="Telerik.WebControls" TagPrefix="radd" %>with the new one of RadDock for ASP.NET AJAX:<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

## Differences between RadDock "classic" and RadDock for ASP.NET AJAX

RadDock for ASP.NET AJAX has a new architecture exposing many new properties and methods. In addition, some of the properties and methods that existed in **RadDock** classic have been removed. The changes to **RadDock** are listed below:

## Classes

The names of the classes have changed as follows:




| RadDock Classic | RadDock for ASP.NET AJAX |
| ------ | ------ |
|RadDockingManager|RadDockLayout|
|RadDockingZone|RadDockZone|
|RadDockableObject|RadDock|

## Server-side API changes

## RadDockingManager -> RadDockLayout Class

The following **RadDockingManager** properties and methods from RadDock "Classic" have been removed or changed in the RadDock for ASP.NET AJAX **RadDockLayout** class:




| RadDockingManager | RadDockLayout |
| ------ | ------ |
| **Properties** ||
|DockableObjects|Replaced by the **RegisteredDocks** property|
|DockingZones|Replaced by the **RegisteredZones** property|
|DockEnabled|Removed|
|EffectsEnabled|Removed|
|EffectsDuration|Removed|
|EffectsUpdateRate|Removed|
|ShowContentWhileDragging|Removed|
|ShowToolTipWhileDragging|Removed|
| **Methods** ||
|LoadState()|Removed: use the **LoadDockLayout** event instead|
|SaveState()|Removed: use the **GetRegisteredDocksState** property and **SaveDockLayout** event instead.|

The following property is new to the **RadDockLayout** component. It has no equivalent in the classic versions:




| New Property | Description |
| ------ | ------ |
|StoreLayoutInViewState|By default **RadDockLayout** stores the positions of its inner docks in the ViewState. If you want to store the positions in other storage medium such as a database or the Session, set this property to **false** . Setting **StoreLayoutInViewState** to **false** minimizes the ViewState usage.|

## RadDockingZone -> RadDockZone Class

The following **RadDockingZone** properties from RadDock "Classic" have been removed or changed in the RadDock for ASP.NET AJAX **RadDockZone** class:

  

| RadDockingZone | RadDockZone |
| ------ | ------ |
|DockableObjects|Replaced by the **Docks** property|
|DockEnabled|Removed|
|FixedByWidth|FitDocks|
|HighlightedStyle|Use the **HighlightedCssClass** property instead.|
|IsHorizontal|Use the **Orientation** property instead.|
|IsVertical|Use the **Orientation** property instead.|
|MinimumHeight|Renamed to **MinHeight** |
|MinimumWidth|Renamed to **MinWidth** |
|Type|Replaced in part by the **Orientation** property.|

The following property is new to the **RadDockZone** control. It has no equivalent in the classic versions:




| New Property | Description |
| ------ | ------ |
|EnableEmbeddedSkins|Specifies whether to render links to the embedded skins.|

## RadDockableObject -> RadDock Class

The following **RadDockableObject** properties from RadDock "Classic" have been removed or changed in the RadDock for ASP.NET AJAX **RadDock** class:


  

| RadDockableObject | RadDock |
| ------ | ------ |
|AllowedDockingZones|Removed, use the **ForbiddenZones** property instead. **ForbiddenZones** lists the **UniqueName** properties of any **RadDockZone** controls where the **RadDock** control is not allowed to dock.|
|AllowedDockingZoneTypes|Removed, use the **ForbiddenZones** property instead.|
|Behavior|Removed, use the **DefaultCommands** and **Commands** properties instead.|
|CanDockTo|Removed.|
|Container|Removed, use the **ContentContainer** property instead.|
|DockingMode|Replaced by the **DockMode** property.|
|Expanded|Removed, use the **Collapsed** property instead.|
|IsDocked|Removed. Use **DockZoneID != String.Empty** .|
|IsFloating|Removed. Use **DockZoneID == String.Empty** .|
|ParentDockingZone|Removed. Use the **DockZoneID** property instead.|
|Text|Changed. **Text** now specifies a string that appears in the content area of the control. **Title** specifies a string that appears in the title bar.|
|FloatingObjectEnabledGrips|Removed, use the **DockHandle** property instead.|
|DockedObjectEnabledGrips|Removed, use the **DockHandle** property instead.|
|ShowTitlebarWhenDisabled|Removed, use the **DockHandle** property instead.|
|TitleBarStyle|Removed. You can customize the appearance of the title bar using the **TitlebarTemplate** property.|
|VerticalGripStyle|Removed|
|HorizontalGripStyle|Removed|
|OnClientDock|Removed, use **OnClientDockPositionChanged** instead.|
|OnClientUnDock|Removed, use **OnClientDockPositionChanging** instead.|
|OnClientDockStateChanged|Removed, use **OnClientDockPositionChanged** instead.|
|OnClientDrop|Removed, use **OnClientDockPositionChanged** or **OnClientDragEnd** instead.|

The following properties and methods are new to the **RadDock** control. They have no equivalent in the classic versions:



| Property or Method | Description |
| ------ | ------ |
| **Properties** ||
|AutoPostBack|When **true** , the **RadDock** control performs a postback every time the its **DockZoneID** or **Index** property changes. When **false** , the **DockPositionChanged** event does not occur until another control on the page causes a postback.|
|CloseText|Specifies the text of the tooltip for the Close command icon.|
|CollapseText|Specifies the text of the tooltip for the Collapse command icon.|
|ExpandText|Specifies the text of the tooltip for the Expand command icon.|
|Index|Indicates the position of the **RadDock** control in its parent **DockZone** , where 0 represents the first position. If the **RadDock** control is not docked, **Index** is -1.|
|Left|Specifies the X-position of the **RadDock** control when it is not docked.|
|OnClientCommand|Specifies the name of a client-side function that is called when the user clicks a command icon in the title bar.|
|OnClientInitialize|Specifies the name of a client-side function that is called when the **RadDock** control is loaded. This can be used to initialize the control.|
|PinText|Specifies the text of the tooltip for the Pin command icon.|
|Tag|Specifies a string that is saved in the **DockState** . This allows you to add your own custom data to the **RadDock** control.|
|Text|Specifies a string that appears in the content area of the **RadDock** control.|
|Title|Specifies the string that appears in the title bar of the **RadDock** control.|
|TitlebarContainer|Returns the parent control in which the title bar template is instantiated.|
|TitlebarTemplate|Specifies the class of a template to use for the title bar area.|
|Top|Specifies the Y-position of the RadDock control when it is not docked.|
|UniqueName|Specifies a unique identifier for the **RadDock** control that the **RadDockLayout** component uses to manage its position. If **UniqueName** is not set, the control's ID is used instead.|
|UnpinText|Specifies the text of the tooltip for the Unpin command icon.|
| **Methods** ||
|ApplyState|Restores the **RadDock** control to the state specified by a **DockState** object.|
|Dock|Docks the **RadDock** control in a specified **RadDockZone** .|
|GetState|Gets a **DockState** object that represents the current state of the **RadDock** control.|
|Undock|Removes the **RadDock** control from its parent **RadDockZone** .|

## Client-side API changes

The client-side API of RadDock for ASP.NET AJAX has been completely revised to accommodate new features.

## RadDockLayout object

The **RadDockLayout** component is not rendered on the page. Therefore, it does not have any client-side properties or methods to replace the client-side properties of the **RadDockingManager** client-side object.

## RadDockZone object

All of the RadDock "Classic" client-side properties for **RadDockingZone** have been removed, as have the **RadDockingZoneTypeFlags**. The **RadDockZone** client-side object supports two new methods:




| Method | Description |
| ------ | ------ |
|dock(RadDock object [, index])|Docks a specified **RadDock** object into the **RadDockZone** . An optional index parameter specifies the (0-offset) position where **RadDock** object should be placed among the children of the **RadDockZone** .|
|get_docks()|Returns an array containing references to all docked **RadDock** controls.|

## RadDock object

The following table lists the properties and methods of the **RadDockableObject** client-side object that have been removed or changed in the new **RadDock** object:




| RadDockableObject | RadDock |
| ------ | ------ |
| **Properties** ||
|TopGrip, BottomGrip, LeftGrip, RightGrip|Removed|
|IsDockableObject|Removed|
|ParentDockingZone|Use **get_parent()** instead|
|TitleBar|Removed|
| **Methods** ||
|Expand(expanded)|Use **set_collapsed(false)** instead|
|Collapse()|Use **set_collapsed(true)** instead|
|Pin()|Use **set_pinned(true)** instead|
|Unpin()|Use **set_pinned(false)** instead|
|IsGripVisible(oGrip)|Removed|
|SetGripVisible(oGrip, bVisible)|Removed|
|MoveTo(x, y, useEffects)|Removed.|
|SetSize(width, height)|Removed.|
|IsVisible(), Show(), Hide()|Removed. Use **get_closed()** and **set_closed()** instead.|
|DockTo(zone)|Removed. Use **RadDockZone.dock(RadDock object, [, index])** .|
|GetCommandByName(sCommandName)|Renamed to **getCommand(sCommandName)** |
|IsDocked()|Removed.|
|AddEventHandler(sEventName, funcEventHandler)|Removed. Use **add_<EventName>(funcEventHandler)** instead. (eg add_dockPositionChanged(myHandler); )|
|RemoveEventHandler(sEventName, funcEventHandler)|Removed. Use **remove_<EventName>(funcEventHandler)** instead.|
| **Events** ||
|OnClientDockStateChange, OnClientDock, OnClientUnDock|Removed. Use **dockPositionChanged** or **dockPositionChanging** instead.|
|OnClientDrop|Removed.|

The following properties, methods, and events are new to the **RadDock** client-side object. They have no equivalent in the classic versions:

 

| Property or Method | Description |
| ------ | ------ |
| **Properties** ||
|get_forbiddenZones, set_forbiddenZones|Gets or sets the forbidden zones where the **RadDock** object is not allowed to dock.|
|set_handle|Sets the dock handle of the **RadDock** object. This is the element within the **RadDock** object that the user can drag to move the **RadDock** object.|
|get_enableDrag, set_enableDrag|Gets or sets a boolean controlling whether the **RadDock** object can be dragged.|
| **Methods** ||
|conditionalPostback|Calls **this.doPostBack** if **AutoPostBack** is **true** .|
|doPostBack|Causes a server-side **DockPositionChanged** event if the current position of the control differs from the position it had the last time the page was loaded.|
|getCommand|Returns the DOM anchor element (`<a>`) associated with a specified command name.|

# See Also

 * [RadDock Object]({%slug dock/client-side-programming/raddock-object%})

 * [RadDockZone Object]({%slug dock/client-side-programming/raddockzone-object%})

 * [Overview]({%slug dock/client-side-programming/events/overview%})
