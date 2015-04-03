---
title: Migrating From RadToolBar ASP.NET to ASP.NET AJAX
page_title: Migrating From RadToolBar ASP.NET to ASP.NET AJAX | UI for ASP.NET AJAX Documentation
description: Migrating From RadToolBar ASP.NET to ASP.NET AJAX
slug: toolbar/migrating-from-radtoolbar-asp.net-to-asp.net-ajax
tags: migrating,from,radtoolbar,asp.net,to,asp.net,ajax
published: True
position: 6
---

# Migrating From RadToolBar ASP.NET to ASP.NET AJAX



To migrate a Web application from __RadToolBar__ "Classic" to __RadToolBar__ for ASP.NET AJAX you need to follow these steps:

1. Make sure you have installed ASP.NET AJAX. Info can be found at[http://www.asp.net/ajax/documentation/live/InstallingASPNETAJAX.aspx](http://www.asp.net/ajax/documentation/live/InstallingASPNETAJAX.aspx)

1. If your web application is not using ASP.NET AJAX you need to configure it to do so. Detailed instructions can be found at [http://www.asp.net/ajax/documentation/live/ConfiguringASPNETAJAX.aspx](http://www.asp.net/ajax/documentation/live/ConfiguringASPNETAJAX.aspx) (Look for the topic called "Adding ASP.NET AJAX Configuration Elements to an Existing Web Site".)

1. Add a ScriptManager control to the page (or user control) in which you want to add any RadControls for ASP.NET AJAX.<asp:ScriptManager ID="ScriptManager1" runat="server" />If your page is a content page you can add the ScriptManager control in your master page. For further details about the ScriptManager control, see [http://www.asp.net/ajax/documentation/live/overview/ScriptManagerOverview.aspx](http://www.asp.net/ajax/documentation/live/overview/ScriptManagerOverview.aspx)

1. Drag and drop a control from the RadControls for ASP.NET AJAX package or manually copy the Telerik.Web.UI.dll in the Bin folder.

1. Replace the classic __RadToolBar__ directive<%@ Register TagPrefix="rad" Namespace="Telerik.WebControls" Assembly="RadToolbar.NET2" %>with the new one of __RadToolBar__ for ASP.NET AJAX:<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

## Differences between RadToolBar "classic" and RadToolBar for ASP.NET AJAX

__RadToolbar__ for ASP.NET AJAX contains a number of changes because of moving from the ASP.NET to the Ajax framework of the Telerik.Web.UI suite. These changes are listed below:

## New button types

The types of buttons you can add to the toolbar has been expanded. Instead of a single type of control that the toolbar can contain (__RadToolBarButton__), you can now choose from three button types:

* __RadToolBarButton__

* __RadToolBarDropDown__

* __RadToolBarSplitButton__

## Server-side API changes

In the server-side API, some properties have been removed and a few have changed their names. Some of the events have changed as well. These changes are described below:

## RadToolbar

The following table lists the changes to the __RadToolBar__ class:


>caption  

| RadToolBar "Classic" | RadToolBar for ASP.NET AJAX |
| ------ | ------ |
| __Properties__ ||
|ContentFile|use LoadContentFile () instead.|
|DisplayEnds|-|
|ImagesDir|use ImageUrl for each item|
|LoadXmlString|LoadXml|
|Orientation|Orientation|
|PostBackUrl|PostBackUrl and item.PostBackUrl|
|ShortCutKey|item.AccessKey|
|RadControlsDir|-|
|SkinsDir|-|
|SkinsPath|-|
|UseFadeEffect|-|
|AutoPostBack|obsolete|
|UseFadeEffect|-|
| __Events__ ||
|OnClick|ButtonClick|
|ItemAdded|ItemCreated and ItemDataBound|

## RadToolBarButton

The following table lists the changes to the __RadToolBarButton__ class:


>caption  

| RadToolBar "Classic" | RadToolBar for ASP.NET AJAX |
| ------ | ------ |
| __Properties__ ||
|BubbleCommandArgument|-|
|BubbleCommandName|-|
|ButtonImage|ImageUrl|
|ButtonText|Text|
|DisplayType|-|
|Hidden|-|
|ParentToolbar|ToolBar|

>note The RadToolbarButton class for ASP.NET now has the __PostBack__ property which can be set in code-behind to specify which buttons will postback and which will not.
>


## Client-side API changes

The [client-side API]({%slug toolbar/client-side-programming/overview%}) has been heavily revised to accommodate new features. In addition, all for ASP.NET AJAX controls follow the MS AJAX naming convention. In order to migrate from __RadToolbar__ "Classic", the method calls and property accessors should use the new convention. A reference table is included below.

## RadToolbar class

The following table lists the changes to the __RadToolBar__ client-side object:


>caption  

| RadToolBar "Classic" | RadToolBar for ASP.NET AJAX |
| ------ | ------ |
| __Methods__ ||
|MakeHorizontal()|set_orientation(Telerik.Web.UI.RadToolBarOrientation.Horizontal)|
|MakeVertical()|set_orientation(Telerik.Web.UI.RadToolBarOrientation.Vertical)|
|EnableButton()|item.set_enabled(true) or item.enable()|
|DisableButton()|button.set_enabled(false) orbutton.disable()|
|HideButton()|item.set_visible(false) oritem.hide()|
|ShowButton()|item.set_visible(true) oritem.show()|
|AttachEvent()|obsolete|
|ToggleONButton()|item.set_checked(true) oritem.toggle()|
|ToggleOFFButton()|item.set_checked(false) oritem.unCheck()|
| __Properties__ ||
|AutoPostBack|obsolete|
|Orientation|get_orientation()|
|UseFadeEffect|-|
| __Events__ ||
|OnClientMouseOver|OnClientMouseOver|
|OnClientMouseOut|OnClientMouseOut|
|OnClientClick|OnClientButtonClicking OnClientButtonClicked|
|OnClientMouseDown|OnClientMouseDown|
|OnClientButtonToggled|OnClientCheckedStateChanging OnClientCheckedStateChanged|
|OnClientOrientationChanged|-|

## RadToolBarButton class

The following table lists the changes to the RadToolBarButton client-side object:


>caption  

| RadToolbar "Classic" | RadToolBar for ASP.NET AJAX |
| ------ | ------ |
| __Properties__ ||
|CommandName|get_commandName()|
|Enabled|get_enabled()|
|Hidden|get_visible()|
|IsToggle|get_checked()|
|ToolbarInstance|get_toolBar()|

## 

The __RadToolbarToggleButton__ has been removed. Now you can achieve this functionality by setting the __CheckOnCLick__="true" for the toolbar button.

# See Also

 * [RadToolBarItemCollection Object]({%slug toolbar/client-side-programming/radtoolbaritemcollection-object%})

 * [Overview]({%slug toolbar/radtoolbar-items/overview%})
