---
title: Migrating From RadDock ASP.NET To ASP.NET AJAX
page_title: Migrating From RadDock ASP.NET To ASP.NET AJAX | UI for ASP.NET AJAX Documentation
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

1. Add a ScriptManager control to the page (or user control) in which you want to add any Telerik UI for ASP.NET AJAX.<asp:ScriptManager ID="ScriptManager1" runat="server" />If your page is a content page you can add the ScriptManager control in your master page. For further details about the ScriptManager control, see [http://ajax.asp.net/docs/overview/ScriptManagerOverview.aspx](http://ajax.asp.net/docs/overview/ScriptManagerOverview.aspx).

1. Drag and drop a control from the Telerik UI for ASP.NET AJAX package or manually copy the Telerik.Web.UI.dll in the Bin folder.

1. Replace the classic RadDock directive<%@ Register Assembly="RadDock.Net2" Namespace="Telerik.WebControls" TagPrefix="radd" %>with the new one of RadDock for ASP.NET AJAX:<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

## Differences between RadDock "classic" and RadDock for ASP.NET AJAX

RadDock for ASP.NET AJAX has a new architecture exposing many new properties and methods. In addition, some of the properties and methods that existed in __RadDock__ classic have been removed. The changes to __RadDock__ are listed below:

## Classes

The names of the classes have changed as follows:


>caption  

| RadDock Classic | RadDock for ASP.NET AJAX |
| ------ | ------ |
|RadDockingManager|RadDockLayout|
|RadDockingZone|RadDockZone|
|RadDockableObject|RadDock|

## Server-side API changes

## RadDockingManager -> RadDockLayout Class

The following __RadDockingManager__ properties and methods from RadDock "Classic" have been removed or changed in the RadDock for ASP.NET AJAX __RadDockLayout__ class:


>caption  

| RadDockingManager | RadDockLayout |
| ------ | ------ |
| __Properties__ ||
|DockableObjects|Replaced by the __RegisteredDocks__ property|
|DockingZones|Replaced by the __RegisteredZones__ property|
|DockEnabled|Removed|
|EffectsEnabled|Removed|
|EffectsDuration|Removed|
|EffectsUpdateRate|Removed|
|ShowContentWhileDragging|Removed|
|ShowToolTipWhileDragging|Removed|
| __Methods__ ||
|LoadState()|Removed: use the __LoadDockLayout__ event instead|
|SaveState()|Removed: use the __GetRegisteredDocksState__ property and __SaveDockLayout__ event instead.|

The following property is new to the __RadDockLayout__ component. It has no equivalent in the classic versions:


>caption  

| New Property | Description |
| ------ | ------ |
|StoreLayoutInViewState|By default __RadDockLayout__ stores the positions of its inner docks in the ViewState. If you want to store the positions in other storage medium such as a database or the Session, set this property to __false__ . Setting __StoreLayoutInViewState__ to __false__ minimizes the ViewState usage.|

## RadDockingZone -> RadDockZone Class

The following __RadDockingZone__ properties from RadDock "Classic" have been removed or changed in the RadDock for ASP.NET AJAX __RadDockZone__ class:


>caption  

| RadDockingZone | RadDockZone |
| ------ | ------ |
|DockableObjects|Replaced by the __Docks__ property|
|DockEnabled|Removed|
|FixedByWidth|FitDocks|
|HighlightedStyle|Use the __HighlightedCssClass__ property instead.|
|IsHorizontal|Use the __Orientation__ property instead.|
|IsVertical|Use the __Orientation__ property instead.|
|MinimumHeight|Renamed to __MinHeight__ |
|MinimumWidth|Renamed to __MinWidth__ |
|Type|Replaced in part by the __Orientation__ property.|

The following property is new to the __RadDockZone__ control. It has no equivalent in the classic versions:


>caption  

| New Property | Description |
| ------ | ------ |
|EnableEmbeddedSkins|Specifies whether to render links to the embedded skins.|

## RadDockableObject -> RadDock Class

The following __RadDockableObject__ properties from RadDock "Classic" have been removed or changed in the RadDock for ASP.NET AJAX __RadDock__ class:


>caption  

| RadDockableObject | RadDock |
| ------ | ------ |
|AllowedDockingZones|Removed, use the __ForbiddenZones__ property instead. __ForbiddenZones__ lists the __UniqueName__ properties of any __RadDockZone__ controls where the __RadDock__ control is not allowed to dock.|
|AllowedDockingZoneTypes|Removed, use the __ForbiddenZones__ property instead.|
|Behavior|Removed, use the __DefaultCommands__ and __Commands__ properties instead.|
|CanDockTo|Removed.|
|Container|Removed, use the __ContentContainer__ property instead.|
|DockingMode|Replaced by the __DockMode__ property.|
|Expanded|Removed, use the __Collapsed__ property instead.|
|IsDocked|Removed. Use __DockZoneID != String.Empty__ .|
|IsFloating|Removed. Use __DockZoneID == String.Empty__ .|
|ParentDockingZone|Removed. Use the __DockZoneID__ property instead.|
|Text|Changed. __Text__ now specifies a string that appears in the content area of the control. __Title__ specifies a string that appears in the title bar.|
|FloatingObjectEnabledGrips|Removed, use the __DockHandle__ property instead.|
|DockedObjectEnabledGrips|Removed, use the __DockHandle__ property instead.|
|ShowTitlebarWhenDisabled|Removed, use the __DockHandle__ property instead.|
|TitleBarStyle|Removed. You can customize the appearance of the title bar using the __TitlebarTemplate__ property.|
|VerticalGripStyle|Removed|
|HorizontalGripStyle|Removed|
|OnClientDock|Removed, use __OnClientDockPositionChanged__ instead.|
|OnClientUnDock|Removed, use __OnClientDockPositionChanging__ instead.|
|OnClientDockStateChanged|Removed, use __OnClientDockPositionChanged__ instead.|
|OnClientDrop|Removed, use __OnClientDockPositionChanged__ or __OnClientDragEnd__ instead.|

The following properties and methods are new to the __RadDock__ control. They have no equivalent in the classic versions:


>caption  

| Property or Method | Description |
| ------ | ------ |
| __Properties__ ||
|AutoPostBack|When __true__ , the __RadDock__ control performs a postback every time the its __DockZoneID__ or __Index__ property changes. When __false__ , the __DockPositionChanged__ event does not occur until another control on the page causes a postback.|
|CloseText|Specifies the text of the tooltip for the Close command icon.|
|CollapseText|Specifies the text of the tooltip for the Collapse command icon.|
|ExpandText|Specifies the text of the tooltip for the Expand command icon.|
|Index|Indicates the position of the __RadDock__ control in its parent __DockZone__ , where 0 represents the first position. If the __RadDock__ control is not docked, __Index__ is -1.|
|Left|Specifies the X-position of the __RadDock__ control when it is not docked.|
|OnClientCommand|Specifies the name of a client-side function that is called when the user clicks a command icon in the title bar.|
|OnClientInitialize|Specifies the name of a client-side function that is called when the __RadDock__ control is loaded. This can be used to initialize the control.|
|PinText|Specifies the text of the tooltip for the Pin command icon.|
|Tag|Specifies a string that is saved in the __DockState__ . This allows you to add your own custom data to the __RadDock__ control.|
|Text|Specifies a string that appears in the content area of the __RadDock__ control.|
|Title|Specifies the string that appears in the title bar of the __RadDock__ control.|
|TitlebarContainer|Returns the parent control in which the title bar template is instantiated.|
|TitlebarTemplate|Specifies the class of a template to use for the title bar area.|
|Top|Specifies the Y-position of the RadDock control when it is not docked.|
|UniqueName|Specifies a unique identifier for the __RadDock__ control that the __RadDockLayout__ component uses to manage its position. If __UniqueName__ is not set, the control's ID is used instead.|
|UnpinText|Specifies the text of the tooltip for the Unpin command icon.|
| __Methods__ ||
|ApplyState|Restores the __RadDock__ control to the state specified by a __DockState__ object.|
|Dock|Docks the __RadDock__ control in a specified __RadDockZone__ .|
|GetState|Gets a __DockState__ object that represents the current state of the __RadDock__ control.|
|Undock|Removes the __RadDock__ control from its parent __RadDockZone__ .|

## Client-side API changes

The client-side API of RadDock for ASP.NET AJAX has been completely revised to accommodate new features.

## RadDockLayout object

The __RadDockLayout__ component is not rendered on the page. Therefore, it does not have any client-side properties or methods to replace the client-side properties of the __RadDockingManager__ client-side object.

## RadDockZone object

All of the RadDock "Classic" client-side properties for __RadDockingZone__ have been removed, as have the __RadDockingZoneTypeFlags__. The __RadDockZone__ client-side object supports two new methods:


>caption  

| Method | Description |
| ------ | ------ |
|dock(RadDock object [, index])|Docks a specified __RadDock__ object into the __RadDockZone__ . An optional index parameter specifies the (0-offset) position where __RadDock__ object should be placed among the children of the __RadDockZone__ .|
|get_docks()|Returns an array containing references to all docked __RadDock__ controls.|

## RadDock object

The following table lists the properties and methods of the __RadDockableObject__ client-side object that have been removed or changed in the new __RadDock__ object:


>caption  

| RadDockableObject | RadDock |
| ------ | ------ |
| __Properties__ ||
|TopGrip, BottomGrip, LeftGrip, RightGrip|Removed|
|IsDockableObject|Removed|
|ParentDockingZone|Use __get_parent()__ instead|
|TitleBar|Removed|
| __Methods__ ||
|Expand(expanded)|Use __set_collapsed(false)__ instead|
|Collapse()|Use __set_collapsed(true)__ instead|
|Pin()|Use __set_pinned(true)__ instead|
|Unpin()|Use __set_pinned(false)__ instead|
|IsGripVisible(oGrip)|Removed|
|SetGripVisible(oGrip, bVisible)|Removed|
|MoveTo(x, y, useEffects)|Removed.|
|SetSize(width, height)|Removed.|
|IsVisible(), Show(), Hide()|Removed. Use __get_closed()__ and __set_closed()__ instead.|
|DockTo(zone)|Removed. Use __RadDockZone.dock(RadDock object, [, index])__ .|
|GetCommandByName(sCommandName)|Renamed to __getCommand(sCommandName)__ |
|IsDocked()|Removed.|
|AddEventHandler(sEventName, funcEventHandler)|Removed. Use __add_<EventName>(funcEventHandler)__ instead. (eg add_dockPositionChanged(myHandler); )|
|RemoveEventHandler(sEventName, funcEventHandler)|Removed. Use __remove_<EventName>(funcEventHandler)__ instead.|
| __Events__ ||
|OnClientDockStateChange, OnClientDock, OnClientUnDock|Removed. Use __dockPositionChanged__ or __dockPositionChanging__ instead.|
|OnClientDrop|Removed.|

The following properties, methods, and events are new to the __RadDock__ client-side object. They have no equivalent in the classic versions:


>caption  

| Property or Method | Description |
| ------ | ------ |
| __Properties__ ||
|get_forbiddenZones, set_forbiddenZones|Gets or sets the forbidden zones where the __RadDock__ object is not allowed to dock.|
|set_handle|Sets the dock handle of the __RadDock__ object. This is the element within the __RadDock__ object that the user can drag to move the __RadDock__ object.|
|get_enableDrag, set_enableDrag|Gets or sets a boolean controlling whether the __RadDock__ object can be dragged.|
| __Methods__ ||
|conditionalPostback|Calls __this.doPostBack__ if __AutoPostBack__ is __true__ .|
|doPostBack|Causes a server-side __DockPositionChanged__ event if the current position of the control differs from the position it had the last time the page was loaded.|
|getCommand|Returns the DOM anchor element (<a>) associated with a specified command name.|

# See Also

 * [RadDock Object]({%slug dock/client-side-programming/raddock-object%})

 * [RadDockZone Object]({%slug dock/client-side-programming/raddockzone-object%})

 * [Overview]({%slug dock/client-side-programming/events/overview%})
