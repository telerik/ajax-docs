---
title: Breaking Changes
page_title: Breaking Changes | RadColorPicker for ASP.NET AJAX Documentation
description: Breaking Changes
slug: colorpicker/changes-and-backwards-compatibility/breaking-changes
tags: breaking,changes
published: True
position: 2
---

# Breaking Changes



## RadColorPicker for ASP.NET AJAX

A complete list of all changes can be found on Release History page:[http://www.telerik.com/support/whats-new/aspnet-ajax/release-history](http://www.telerik.com/support/whats-new/aspnet-ajax/release-history)



## Telerik RadColorPicker for ASP.NET AJAX Q3 2009

The new release brings the following changes in the naming convention:

## Client event names






| Old name | New name |
| ------ | ------ |
|loaded|load|
|colorSelecting|colorPreview|



## Server-side properties






| Old name | New name |
| ------ | ------ |
|OnClientLoaded|OnClientLoad|
|OnClientColorSelecting|OnClientColorPreview|





## Client-side API:


 

| Old name | New name |
| ------ | ------ |
|add_loaded|add_load|
|remove_loaded|remove_load|
|add_colorSelecting|add_colorPreview|
|remove_colorSelecting|remove_colorPreview|
|Telerik.Web.UI.ColorPickerColorSelectingEventArgs|Telerik.Web.UI.ColorPickerColorPreviewEventArgs|





## Telerik RadColorPicker for ASP.NET AJAX Q2 2009 SP1

* No breaking changes. A list of fixes is available in the [Version Notes.](http://www.telerik.com/versionnotes.aspx?id=2082)

## Telerik RadColorPicker for ASP.NET AJAX Q1 2009

* Total redesign of the skins, which aims for a uniformity of the appearance of all controls in the suite in the cases they are used to build RIAs

* Refactoring of the CSS code to achieve better understanding, easier maintenance and handle problems with global styles

* Changes to the CSS classes, so now all controls for ASP.NET AJAX comply with a common naming convention. For example was:**radcolorpicker RadColorPicker_Default** now:**RadColorPicker RadColorPicker_Default**

## Telerik RadColorPicker for ASP.NET AJAX Q2 2008 and Q3 2008

RadColorPicker for ASP.NET AJAX which is part of the Q2 2008 release is fully backwards compatible with its previous version (Q1 2008).





## Differences between ASP.NET and ASP.NET AJAX versions:

The RadColorPicker control is new for the Telerik UI for ASP.NET AJAX suite and it does not exist in Telerik UI for ASP.NET AJAX.
