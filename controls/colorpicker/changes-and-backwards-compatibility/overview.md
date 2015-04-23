---
title: Changes and Backwards Compatibility Overview
page_title: Overview | RadColorPicker for ASP.NET AJAX Documentation
description: Overview
slug: colorpicker/changes-and-backwards-compatibility/overview
tags: overview
published: True
position: 0
---

# Changes and Backwards Compatibility Overview



## What is new in RadColorPicker for ASP.NET AJAX

A complete list of all changes can be found on Release History page:[http://www.telerik.com/products/aspnet-ajax/whats-new/release-history.aspx](http://www.telerik.com/products/aspnet-ajax/whats-new/release-history.aspx)

## What is new in RadColorPicker for ASP.NET AJAX Q1 2010

* Added: Localized the rest UI strings (sliders)



## What is new in RadColorPicker for ASP.NET AJAX Q3 2009 SP1

* Localization for the slider mode UI strings.

* CDN support --Starting with the Q3 Service Pack 1 release you will be able to load the control scripts and skins from the Telerik CDN.

* New Windows7 skin



## What is new in RadColorPicker for ASP.NET AJAX Q3 2009

* New property called *Localization* which provides the ability to localize the strings in the user interface. The Localization property exposes the following properties:

* *PickColorText*

* *CurrentColorText*

* *NoColorText*

* *WebPaletteTabText*

* *RGBSlidersTabText*

* *HSBTabText*

* *ApplyButtonText*

* New server-side property:

* *OnClientPopUpShow* – gets/sets a value indicating the client-side event handler that is called when the pop-up palette of the **RadColorPicker** (in case *ShowIcon=true*) shows.

* New in client-side API:

* *add_popUpShow*

* *remove_popUpShow*

* The default value of the *Preset* property is set to *Default*

* Added a new property *OnClientColorPreview* to replace *OnClientColorSelecting* (which is now obsolete)

## What is new in RadColorPicker for ASP.NET AJAX Q2 2009 SP1

* New property - **KeepInScreenBounds**. When set to “false”, the **RadColorPicker** will not reposition its palette (**ShowIcon=true**) so that it opens in the visible viewport when necessary. Its default value is “true”.

## What is new in RadColorPicker for ASP.NET AJAX Q2 2009

* 2 new modes for the PaletteModes property - HSB and HSV

## What is new in RadColorPicker for ASP.NET AJAX Q1 2009

* Added one new property to the **RadColorPicker** - **PaletteModes**.

* Changed the HTML of the **RadColorPicker**: create a TabStrip when **PaletteModes=All**; changed the position and look of the Preview element; changed the position and look of the NoColor button

* Total redesign of the skins, which aims for a uniformity of the appearance of all controls in the suite in the cases they are used to build RIAs

* Refactoring of the CSS code to achieve better understanding, easier maintenance and handle problems with global styles

* Changes to the css classes, so now all controls for ASP.NET AJAX comply with a common naming convention
