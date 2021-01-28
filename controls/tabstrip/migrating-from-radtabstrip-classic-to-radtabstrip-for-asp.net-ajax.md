---
title: Migrating From RadTabStrip Classic to RadTabStrip for ASP.NET Ajax
page_title: Migrating From RadTabStrip Classic to RadTabStrip for ASP.NET Ajax - RadTabStrip
description: Check our Web Forms article about Migrating From RadTabStrip Classic to RadTabStrip for ASP.NET Ajax.
slug: tabstrip/migrating-from-radtabstrip-classic-to-radtabstrip-for-asp.net-ajax
tags: migrating,from,radtabstrip,classic,to,radtabstrip,for,asp.net,ajax
published: True
position: 6
---

# Migrating From RadTabStrip Classic to RadTabStrip for ASP.NET Ajax


To migrate a Web application from **RadTabStrip** "Classic" to **RadTabStrip** "for ASP.NET Ajax" you need to follow these steps:

1. Make sure you have installed ASP.NET AJAX. Info can be found at [http://ajax.asp.net/docs/InstallingASPNETAJAX.aspx](http://ajax.asp.net/docs/InstallingASPNETAJAX.aspx)

1. If your web application is not using ASP.NET AJAX you need to configure it to do so. Detailed instructions can be found at [http://ajax.asp.net/docs/ConfiguringASPNETAJAX.aspx](http://ajax.asp.net/docs/ConfiguringASPNETAJAX.aspx) (Look for the topic called "Adding ASP.NET AJAX Configuration Elements to an Existing Web Site".)

1. Add a ScriptManager control to the page (or user control) in which you want to add any RadControls "for ASP.NET Ajax". <asp:ScriptManager ID="ScriptManager1" runat="server" />If your page is a content page you can add the ScriptManager control in your master page. For further details about the ScriptManager control, see [http://ajax.asp.net/docs/overview/ScriptManagerOverview.aspx](http://ajax.asp.net/docs/overview/ScriptManagerOverview.aspx).

1. Drag and drop a control from the RadControls "for ASP.NET Ajax" package or manually copy the Telerik.Web.UI.dll in the Bin folder.

1. Replace the classic **RadTabStrip** directive<%@ Register TagPrefix="rad" Namespace="Telerik.WebControls" Assembly="RadTabStrip.NET2" %>with the new one of **RadTabStrip** for ASP.NET Ajax:<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

## Differences between RadTabStrip "classic" and RadTabStrip for ASP.NET Ajax

**RadTabStrip** for ASP.NET Ajax has changed: All of the client-side properties and methods' names have changed along with several server API changes. Some properties and methods have been completely removed, while new ones have been added. The control's client-side API is not backward-compatible with **RadTabStrip Classic** edition. All the changes included in the control are listed below:

## Server-side API changes

In the **RadTabStrip** server-side API, a few properties have been removed or renamed and a few type names have changed:

## Type names

A number of type names have changed in order to comply with the naming convention of the other navigation controls. The following table lists the type name changes:


>caption  

| RadTabStrip Classic | RadTabStrip for ASP.NET Ajax |
| ------ | ------ |
|Tab|RadTab|
|PageView|RadPageView|
|TabCollection|RadTabCollection|
|RadTabStripOrientation|TabStripOrientationHorizontalTopToBottom renamed to HorizontalTopHorizontalBottomToTop renamed to HorozintalBottomVerticalLeftToRight renamed to VerticalLeftVerticalRightToLeft renamed to VerticalRight|
|ScrollButtonsPosition|TabStripScrollButtonsPosition|
|TabStripEventArgs|RadTabStripEventArgs|
|TabStripEventHandler|RadTabStripEventHandler|
|PageViewItemCreatedDelegate|RadMultiPageEventHandlerIts arguments are also different: public delegate void RadTabStripEventHandler(object sender, RadTabStripEventArgs e)|

## RadTabStrip

The following table lists the changes to the **RadTabStrip** object:


>caption  

| RadTabStrip Classic | RadTabStrip for ASP.NET Ajax |
| ------ | ------ |
| **Properties** ||
|EnableImmediateNavigation|Removed|
|InnerMostSelectedTab|Renamed to **InnermostSelectedTab** |
|ReorderTabRows|Renamed to **ReorderTabsOnSelect** |
|OnClientTabEnabled|Removed|
|OnClientTabDisabled|Removed|
| **Methods** ||
|GetAllTabs|Return type changed to **IList<RadTab>** |

## RadTab Class

The following table lists the changes to the **RadTab** (formerly **Tab**) object:


>caption  

| RadTabStrip Classic | RadTabStrip for ASP.NET Ajax |
| ------ | ------ |
| **Properties** ||
|ImageOverUrl|Renamed to **HoveredImageUrl** |
|ID|Reserved for internal use only. Cannot be user-defined.|

## RadMultiPage Class

The following table lists the changes to the **RadMultiPage** object:


>caption  

| RadTabStrip Classic | RadTabStrip for ASP.NET Ajax |
| ------ | ------ |
| **Properties** ||
|AutoScrollBars|ScrollBars (of type PageViewScrollBars)|
| **Events** ||
|PageViewItemCreated|PageViewCreated|

## Client-side API changes

Due to the migration of the **RadTabStrip** control to the ASP.NET Ajax framework and to the Telerik.Web.UI suite, the client-side API is completely changed to match the naming convention of the new framework.

## RadTabStrip Class

The following table lists the changes to the **RadTabStrip** client-side object:


>caption  

| RadTabStrip Classic | RadTabStrip for ASP.NET Ajax |
| ------ | ------ |
| **Methods** ||
|Disable()|disable() or set_enabled(false)|
|Enable()|enable() or set_enabled(true)|
|GetAllTabs()|get_allTabs()|
|FindTabByUrl()|findTabByUrl()|
|FindTabByText()|findTabByText()|
|FindTabById()|removed: tab ID is not rendered to preserve output.|
|FindTabByValue()|findTabByValue()|
|AttachEvent()| **get_events().addHandler** can be used instead|
|DetachEvent()| **get_events().removeHandler** can be used instead|
| **Properties** ||
|ID|get_id()|
|DomElement|get_element()|
|Tabs|get_tabs()The returned value is no longer Array. It is **Telerik.Web.UI.RadTabCollection** |

````JavaScript
for (var i=0; i<tabstrip.get_tabs().get_count();i++)
{
  var tab = tabstrip.get_tabs().getTab(i);
  alert(tab.get_text());
}	
````


>caption  

| AllTabs | get_allTabs() |
| ------ | ------ |
|SelectedTab|get_selectedTab()|
|SelectedIndex|get_selectedIndex()|
|Enabled|get_enabled()|

## RadTab Class

The following table lists the changes to the **RadTab** client-side object:


>caption  

| RadTabStrip Classic | RadTabStrip for ASP.NET Ajax |
| ------ | ------ |
| **Methods** ||
|Disable()|disable() or set_enabled(false)|
|Enable()|enable() or set_enabled(true)|
|Select()|select() or set_selected(true)|
|UnSelect()|unselect() or set_selected(false)|
|SelectParents()|selectParents()|
|Click()|click()|
|SetCssClass()|set_cssClass()|
|SetDisabledCssClass()|set_disabledCssClass()|
|SetSelectedCssClass()|set_selectedCssClass()|
|SetText()|set_text()|
| **Properties** ||
|DomElement|get_element()|
|ImageDomElement|get_imageElement()|
|ChildStripDomElement|get_childListElement()|
|Tabs|get_tabs()The returned value is no longer Array. It is **Telerik.Web.UI.RadTabCollection** |
|SelectedTab|get_selectedTab()|
|SelectedIndex|get_selectedIndex()|
|Parent|get_parent()|
|TabStrip|get_tabStrip()|
|Selected|get_selected()|
|Enabled|get_enabled()|
|Index|get_index()|
|GlobalIndex|removed|
|Text|get_text()|
|Value|get_value()|
|DepthLevel|get_level()|
||get_attributes() – returns **Telerik.Web.UI.AttributeCollection** of custom attributes associated with the tab|

## RadTabCollection class (new)

The following table lists the methods of the new **RadTabCollection** client-side object:


>caption  

| Method | Description |
| ------ | ------ |
| **Methods** ||
|add()|Adds a tab|
|insert()|Inserts a tab|
|remove()|Removes a tab|
|clear()|Clears the tabs|
|getTab()|Gets a tab from the Tabs collection|
|indexOf()|Returns the index of a tab|
|removeAt()|Removes a tab at a specified index|
|get_count()|Returns the count of the tabs|
|trackChanges()|Indicates the beginning of client-side changes that are meant to be persisted at the server.|
|commitChanges()|Indicates the end of client-side changes that are meant to be persisted at the server.|
