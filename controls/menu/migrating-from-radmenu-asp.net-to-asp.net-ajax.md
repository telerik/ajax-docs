---
title: Migrating From RadMenu ASP.NET to ASP.NET AJAX
page_title: Migrating From RadMenu ASP.NET to ASP.NET AJAX - RadMenu
description: Check our Web Forms article about Migrating From RadMenu ASP.NET to ASP.NET AJAX.
slug: menu/migrating-from-radmenu-asp.net-to-asp.net-ajax
tags: migrating,from,radmenu,asp.net,to,asp.net,ajax
published: True
position: 4
---

# Migrating From RadMenu ASP.NET to ASP.NET AJAX



**RadMenu for ASP.NET AJAX** contains a number of changes because of moving from the ASP.NET to the Ajax framework of the Telerik.Web.UI suite.These changes are listed below:

## Context menu

The context menu functionality has been separated as a new control – [RadContextMenu]({%slug menu/context-menus/radcontextmenu-object%}).

## Server-side API changes

The changes to the server-side API are minimal:

* **GetAllItems** now returns **IList<RadMenuItem>**, instead of an ArrayList.

* **ImageOverUrl** has been renamed to **HoveredImageUrl**.

## Client-side API changes

The [client-side API]({%slug menu/client-side-programming/overview%}) of RadMenu for ASP.NET AJAX has been heavily revised to accommodate new features. In addition, all for ASP.NET AJAX controls follow the MS AJAX naming convention. In order to migrate from RadMenu "Classic", the method calls and property accessors should use the new convention. A reference table is included below.

## RadMenu class




>caption  

| RadMenu "Classic" | RadMenu for ASP.NET AJAX |
| ------ | ------ |
| **Methods** ||
|Close|close|
|Disable|disable|
|DisableEvents|disableEvents|
|Enable|enable|
|EnableEvents|enableEvents|
|FindItemById|-|
|FindItemByText|findItemByText|
|FindItemByUrl|findItemByUrl|
|FindItemByValue|findItemByValue|
|-|findItemByAttribute|
|Focus|focus|
|GetAttribute|getAttributes().getAttribute|
|Hide|->RadContextMenu.hide|
|MouseEventX|-|
|MouseEventY|-|
|SetAttribute|getAttributes().setAttribute|
|SetContextElementID|use RadContextMenu.set_targets|
|Show|->RadContextMenu.show|
|ShowAt|->RadContextMenu.showAt|
|AttachEvent|add_<EventName>|
|DetachEvent|remove_<EventName>|
|TrackClientChanges|trackChanges|
|CommitClientChanges|commitChanges|
| **Properties** ||
|AllItems|get_allItems|
|Enabled|get_enabled, set_enabled|
|FocusedItem|get_focusedItem|
|ID|get_id|
|Items|get_item|
|OpenedItem|get_openedItem|
|ClickToOpen|get_clickToOpen, set_clickToOpen|
|ExpandDelay|get_expandDelay, set_expandDelay|
|CollapseDelay|get_collapseDelay, set_collapseDelay|
|Templated|get_templated|
|CssClass|get_cssClass, set_cssClass|
|DomElement|get_element|
| **Events** ||
|ItemBlur|itemBlur|
|ItemFocus|itemFocus|
|ItemClicked|itemClicked|
|ItemClicking|itemClicking|
|ItemClose|itemClosing, itemClosed|
|MouseOver|mouseOver|
|MouseOut|mouseOut|
|ItemOpen|itemOpening, itemOpened|
|ContextShowing|RadContextMenu.showing|
|ContextShown|RadContextMenu.shown|
|ContextHidden|RadContextMenu.hidden|

## RadMenuItem class


>caption  

| RadMenu "Classic" | RadMenu for ASP.NET AJAX |
| ------ | ------ |
| **Methods** ||
|Blur|blur|
|Close|close|
|Disable|disable|
|Enable|enable|
|Focus|focus|
|FocusFirstChild|focusFirstChild|
|FocusLastChild|focusLastChild|
|FocusNextItem|focusNextItem|
|FocusPreviousItem|focusPreviousItem|
|GetAttribute|get_attributes().getAttribute|
|GetNextItem|get_nextItem|
|GetPreviousItem|get_previousItem|
|Hide|hide|
|IsVisible|get_visible|
|Open|open|
|SetAttribute|get_attributes().setAttribute|
|SetImageOverUrl|get_imageOverUrl, set_imageOverUrl|
|SetImageUrl|get_imageUrl, set_imageUrl|
|SetText|get_text, set_text|
|SetValue|get_value, set_value|
|Show|show|
| **Properties** ||
|DomElement|get_element|
|Enabled|get_enabled, set_enabled|
|Focused|get_focused, set_focused|
|FocusedItem|get_focusedItem|
|GlobalIndex|-|
|ID|-|
|ImageElement|get_imageElement|
|Index|get_index|
|IsSeparator|get_isSeparator|
|Items|get_item|
|Level|get_level|
|LinkElement|get_linkElement|
|Menu|get_menu|
|OpenedItem|get_openedItem|
|Parent|get_parent|
|Text|get_textset_text|
|TextElement|get_textElement|
|Value|get_valueset_value|

## RadMenuItemCollection class

The items property of RadMenu returns a fully-featured collection object. Here is a brief reference:


>caption  

| Member | Notes |
| ------ | ------ |
| **Methods** ||
|add(item)|Adds an item to the end of the collection.|
|insert(index, item)|Inserts an item at the specified index.|
|remove(item)|Removes an item from the collection.|
|clear()|Clears the collection.|
|getItem(index)|Gets a specific item by index.|
|indexOf(item)|Finds the index of a specified item in the collection.|
|removeAt(index)|Removes an item at the specified index.|
| **Properties** ||
|get_count()|Returns the number of items in the collection.|

## CSS class names

The CSS class names have been prefixed with "rm" in order to avoid overlapping with other controls.


>caption  

| RadMenu "Classic" | RadMenu for ASP.NET AJAX |
| ------ | ------ |
|bottomArrow|rmBottomArrow|
|clicked|rmClicked|
|disabled|rmDisabled|
|expandBottom|rmExpandBottom|
|expanded|rmExpanded|
|expandLeft|rmExpandLeft|
|expandRight|rmExpandRight|
|expandTop|rmExpandTop|
|first|rmFirst|
|focused|rmFocused|
|group|rmGroup|
|horizontal|rmHorizontal|
|item|rmItem|
|last|rmLast|
|leftArrow|rmLeftArrow|
|leftImage|rmLeftImage|
|level|rmLevel|
|link|rmLink|
|rightArrow|rmRightArrow|
|rootGroup|rmRootGroup|
|scrollWrap|rmScrollWrap|
|separator|rmSeparator|
|slide|rmSlide|
|template|rmTemplate|
|text|rmText|
|topArrow|rmTopArrow|
|vertical|rmVertical|

# See Also

 * [RadMenu and RadContextMenu Objects]({%slug menu/client-side-programming/objects/radmenu-and-radcontextmenu-objects%})

 * [RadMenuItemCollection Object]({%slug menu/client-side-programming/objects/radmenuitemcollection-object%})

 * [RadMenuItem Object]({%slug menu/client-side-programming/objects/radmenuitem-object%})

 * [CSS Skin File Selectors]({%slug menu/appearance-and-styling/css-skin-file-selectors%})
