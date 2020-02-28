---
title: Changes And Backward Compatibility
page_title: Changes And Backward Compatibility | RadSplitter for ASP.NET AJAX Documentation
description: Changes And Backward Compatibility
slug: splitter/changes-and-backward-compatibility
tags: changes,and,backward,compatibility
published: True
position: 1
---

# Changes And Backward Compatibility

## Telerik RadSplitter for ASP.NET AJAX

A complete list of all changes can be found on Release History page:

[https://www.telerik.com/products/aspnet-ajax/whats-new/release-history.aspx ](https://www.telerik.com/products/aspnet-ajax/whats-new/release-history.aspx)

## Telerik RadSplitter for ASP.NET AJAX Q3 2009

The new release brings the following changes:

## RadSplitter:

## Client event names

| Old name | New name |
| ------ | ------ |
|loaded|load|
|beforeResize|resizing|

## Server-side properties

| Old name | New name |
| ------ | ------ |
|OnClientLoaded|OnClientLoad|
|OnClientBeforeResize|OnClientResizing|

## Client-side API

| Old name | New name |
| ------ | ------ |
|add_loaded|add_load|
|remove_loaded|remove_load|
|add_beforeResize|add_resizing|
|remove_beforeResize|remove_resizing|
|Telerik.Web.UI.SplitterBeforeResizeEventArgs|Telerik.Web.UI.SplitterResizingEventArgs|

## RadPane (RadSlidingPane):

>caption Client event names

| Old name | New name |
| ------ | ------ |
|beforeCollapse|collapsing|
|beforeExpand|expanding|
|beforeResize|resizing|

>caption Server-side properties

| Old name | New name |
| ------ | ------ |
|OnClientBeforeCollapse|OnClientCollapsing|
|OnClientBeforeExpand|OnClientExpanding|
|OnClientBeforeResize|OnClientResizing|

>caption Client-side API

| Old name | New name |
| ------ | ------ |
|add_beforeCollapse|add_collapsing|
|remove_beforeCollapse|remove_collapsing|
|add_beforeExpand|add_expanding|
|remove_beforeExpand|remove_expanding|
|add_beforeResize|add_resizing|
|remove_beforeResize|remove_resizing|
|Telerik.Web.UI.PaneBeforeResizeEventArgs|Telerik.Web.UI.PaneResizingEventArgs|

Removed from the client-side API:

* Telerik.Web.UI.PaneBeforeCollapseEventArgs

* Telerik.Web.UI.PaneCollapsedEventArgs

* Telerik.Web.UI.PaneBeforeExpandEventArgs

* Telerik.Web.UI.PaneExpandedEventArgs

## RadSlidingPane specific:

>caption Name changes: 

| Old name | New name |
| ------ | ------ |
|beforeDock|docking|
|beforeUndock|undocking|

>caption  Server-side properties

| Old name | New name |
| ------ | ------ |
|OnClientBeforeDock|OnClientDocking|
|OnClientBeforeUndock|OnClientUndocking|

>caption Client-side API

| Old name | New name |
| ------ | ------ |
|add_beforeDock|add_docking|
|remove_beforeDock|remove_docking|
|add_beforeUndock|add_undocking|
|remove_beforeUndock|remove_undocking|

Removed from the Client-side API:

* Telerik.Web.UI.PaneBeforeDockEventArgs

* Telerik.Web.UI.PaneDockedEventArgs

* Telerik.Web.UI.PaneBeforeUndockEventArgs

* Telerik.Web.UI.PaneUndockedEventArgs

RadSlidingZone:

>caption Client-side events  

| Old name | New name |
| ------ | ------ |
|loaded|load|

>caption Server-side properties 

| Old name | New name |
| ------ | ------ |
|OnClientLoaded|OnClientLoad|

>caption Client-side API

| Old name | New name |
| ------ | ------ |
|add_loaded|add_load|
|remove_loaded|remove_load|

## Telerik RadSplitter for ASP.NET AJAX Q1 2009

* The **FullScreenMode** property is now obsolete.

* Total redesign of the skins, which aims for a uniformity of the appearance of all controls in the suite in the cases they are used to build RIAs

* Refactoring of the CSS code to achieve better understanding, easier maintenance and handle problems with global styles

* Changes to the CSS classes, so now all controls for ASP.NET AJAX comply with a common naming convention For example was: **RadSplitter_Default** now: **RadSplitter RadSplitter_Default**

## Telerik RadSplitter for ASP.NET AJAX Q3 2008

RadSplitter for ASP.NET AJAX which is part of the Q3 2008 release is fully backwards compatible with its previous version (Q2 2008).

## Telerik RadSplitter for ASP.NET AJAX Q2 2008

RadSplitter for ASP.NET AJAX which is part of the Q2 2008 release is fully backwards compatible with its previous version (Q2 2008).

## Differences between RadSplitter "classic" and RadSplitter for ASP.NET AJAX

The **RadSplitter's** API has changed slightly from the classic product:

## Server-side API changes

In the **RadSplitter** server-side API, a few properties have been removed or renamed, the names of the client-side events have changed, and a few type names have changed:

## RadSplitter

The following table lists the changes to the **RadSplitter** object:


|  **RadSplitter Classic**  |  **RadSplitter for ASP.NET AJAX**  |
| ------ | ------ |
| **Properties** ||
|UseEmbeddedScripts|(removed)|
|SkinsPath|(removed)|
|TelerikControlsDir|(removed)|

## RadPane

The following table lists the changes to the **RadPane** object:
  

|  **RadSplitter Classic**  |  **RadSplitter for ASP.NET AJAX**  |
| ------ | ------ |
| **Properties** ||
|UseEmbeddedScripts|(removed)|
|TelerikControlsDir|(removed)|
|InitiallyCollapsed|Collapsed|
|OnClientBeforePaneCollapse|OnClientBeforeCollapse|
|OnClientBeforePaneExpand|OnClientBeforeExpand|
|OnClientBeforePaneResize|OnClientBeforeResize|
|OnClientPaneCollapsed|OnClientCollapsed|
|OnClientPaneExpanded|OnClientExpanded|
|OnClientPaneResized|OnClientResized|

## RadSplitBar

The following table lists the changes to the **RadSplitBar** object:


|  **RadSplitter Classic**  |  **RadSplitter for ASP.NET AJAX**  |
| ------ | ------ |
| **Properties** ||
|UseEmbeddedScripts|(removed)|
|TelerikControlsDir|(removed)|

## RadSlidingZone

The following table lists the changes to the **RadSlidingZone** object:

|  **RadSplitter Classic**  |  **RadSplitter for ASP.NET AJAX**  |
| ------ | ------ |
| **Properties** ||
|UseEmbeddedScripts|(removed)|
|SkinsPath|(removed)|
|TelerikControlsDir|(removed)|
|InitiallyDockedPaneId|DockedPaneId|
|InitiallyExpandedPaneId|ExpandedPaneId|

## RadSlidingPane

The following table lists the changes to the **RadSlidingPane** object:
 

|  **RadSplitter Classic**  |  **RadSplitter for ASP.NET AJAX**  |
| ------ | ------ |
| **Properties** ||
|UseEmbeddedScripts|(removed)|
|TelerikControlsDir|(removed)|
|OnClientBeforePaneCollapse|OnClientBeforeCollapse|
|OnClientBeforePaneDock|OnClientBeforeDock|
|OnClientBeforePaneExpand|OnClientBeforeExpand|
|OnClientBeforePaneResize|OnClientBeforeResize|
|OnClientBeforePaneUnDock|OnClientBeforeUnDock|
|OnClientPaneCollapsed|OnClientCollapsed|
|OnClientPaneDocked|OnClientDocked|
|OnClientPaneExpanded|OnClientExpanded|
|OnClientPaneResized|OnClientResized|
|OnClientPaneUnDocked|OnClientUnDocked|

## Type names

The following table lists the type name changes:

|  **RadSplitter Classic**  |  **RadSplitter for ASP.NET AJAX**  |
| ------ | ------ |
|Telerik.WebControls.RadSplitterOrientation|Telerik.Web.UI.Orientation|
|Telerik.WebControls.RadSplitterItemsCollection|Telerik.Web.UI.SplitterItemsCollection|
|Telerik.WebControls.RadSplitterResizeMode|Telerik.Web.UI.SplitterResizeMode|
|Telerik.WebControls.RadSplitBarCollapseMode|Telerik.Web.UI.SplitBarCollapseMode|
|Telerik.WebControls.RadSplitterSlideDirection|Telerik.Web.UI.SplitterSlideDirection|
|Telerik.WebControls.RadSplitterSlidePaneTabView|Telerik.Web.UI.SplitterSlidePaneTabView|
|Telerik.WebControls.RadSplitterPaneScrolling|Telerik.Web.UI.SplitterPaneScrolling|

## Client-side API changes

Due to the migration of the **RadSplitter** control to the ASP.NET Ajax framework and to the Telerik.Web.UI suite, the client-side API is completely changed to match the naming convention of the new framework.

## Event handlers

The signature for client-side events has been unified, so that all event handlers have at most two arguments:

1. The first argument (sender) points to the client instance of the object firing the event.
1. The second argument (eventArgs) is a holder for the old arguments passed in the respective handler.

To cancel an event (which can be cancelled) you now call "set_cancel(true)" on the eventArgs argument instead of returning **false** from the event handler:

````JavaScript	
function BeforeCollapse(sender, eventArgs)
{
	eventArgs.set_cancel(true);
}	
````

## RadSplitter object

The following table lists the changes to the methods of the **RadSplitter** client object:

|  **RadSplitter Classic**  |  **RadSplitter for ASP.NET AJAX**  |
| ------ | ------ |
| **Methods** ||
|GetMinWidth()|getMinWidth()|
|GetMaxWidth()|getMaxWidth()|
|GetMinHeight()|getMinHeight()|
|GetMaxHeight()|getMaxHeight()|
|IsNested()|isNested()|
|GetInnerWidth()|getInnerWidth()|
|GetInnerHeight()|getInnerHeight()|
|Resize()|resize()|
|IsVertical()|isVertical()|
|GetPanes()|getPanes()|
|GetEndPane()|getEndPane()|
|GetStartPane()|getStartPane()|
|GetPaneByIndex()|getPaneByIndex()|
|GetPaneById()|getPaneById()|
|GetSplitBars()|getSplitBars()|
|GetSplitBarByIndex()|getSplitBarByIndex()|
|GetSplitBarById()|getSplitBarById()|
|GetContainerElement()|getContainerElement()|

## RadPane object

The following table lists the changes to the methods of the **RadPane** client object:

|  **RadSplitter Classic**  |  **RadSplitter for ASP.NET AJAX**  |
| ------ | ------ |
| **Methods** ||
|GetScrollPos()|getScrollPos()|
|SetScrollPos()|setScrollPos()|
|Resize()|resize()|
|Print()|print()|
|Collapse()|collapse()|
|Expand()|expand()|
|IsExternalContent()|isExternalContent()|
|GetInnerWidth()|getInnerWidth()|
|GetInnerHeight()|getInnerHeight()|
|IsSplitterContainer()|isSplitterContainer()|
|GetContentContainerElement()|getContentElement()|
|GetExtContentElement()|getExtContentElement()|
|IsLocked()|isLocked()|
|Lock()|lock()|
|UnLock()|unlock()|

## RadSplitBar object

The following table lists the changes to the methods of the **RadSplitBar** client object:

|  **RadSplitter Classic**  |  **RadSplitter for ASP.NET AJAX**  |
| ------ | ------ |
| **Methods** ||
|IsCollapseDirectionEnabled()|isCollapseDirectionEnabled()|
|GetCollapseBarElement()|getCollapseBarElement()|
|IsCollapsed()|isCollapsed()|
|GetWidth()|getWidth()|
|GetHeight()|getHeight()|
|GetSplitterBarElement()|get_element()|

## RadSlidingZone object

The following table lists the changes to the methods of the **RadSlidingZone** client object:

|  **RadSplitter Classic**  |  **RadSplitter for ASP.NET AJAX**  |
| ------ | ------ |
| **Methods** ||
|GetPaneById()|getPaneById()|
|GetTabsContainer()|getTabsContainer()|
|DockPane()|dockPane()|
|UndockPane()|undockPane()|
|GetPanes()|getPanes()|
|ExpandPane()|expandPane()|
|CollapsePane()|collapsePane()|
|IsLeftDirection()|isLeftDirection()|
|IsRightDirection()|isRightDirection()|
|IsTopDirection()|isTopDirection()|
|IsBottomDirection()|isBottomDirection()|

## RadSlidingPane object

The following table lists the changes to the methods of the **RadSlidingPane** client object:

|  **RadSplitter Classic**  |  **RadSplitter for ASP.NET AJAX**  |
| ------ | ------ |
| **Methods** ||
|GetContentContainer()|getContentContainer()|
|GetContent()|getContent()|
|SetContent()|setContent()|
|GetDockIconElement()|getDockIconElement()|
|GetUndockIconElement()|getUndockIconElement()|
|GetCollapseIconElement()|getCollapseIconElement()|
|GetSlidingContainerTitle()|getSlidingContainerTitle()|
|GetSlidingPaneResizeContainer()|getSlidingPaneResizeContainer()|
|GetTabContainer()|getTabContainer()|
|HideTab()|hideTab()|
|ShowTab|showTab|
|IsTabDisplayed|isTabDisplayed|
