---
title: Changes And Backward Compatibility
page_title: Changes And Backward Compatibility | UI for ASP.NET AJAX Documentation
description: Changes And Backward Compatibility
slug: slider/changes-and-backward-compatibility
tags: changes,and,backward,compatibility
published: True
position: 1
---

# Changes And Backward Compatibility



## What is new in Telerik RadSlider for ASP.NET AJAX

A complete list of all changes can be found on Release History page:

[http://www.telerik.com/products/aspnet-ajax/whats-new/release-history.aspx](http://www.telerik.com/products/aspnet-ajax/whats-new/release-history.aspx)



## Telerik RadSlider for ASP.NET AJAX Q2 2010 BETA

Changed the type of the following properties from __Int__ to __Decimal__ - __Value__, __SelectionStart__, __SelectionEnd__, __MaximumValue__, __MinimumValue__, __SmallChange__, __LargeChange__.

## Telerik RadSlider for ASP.NET AJAX Q1 2010

In the new version we have improved the skins of the slider control

## Telerik RadSlider for ASP.NET AJAX Q1 2010

In the new version we have improved the skins of the slider control:

1. We have added side borders for the track element of the RadSlider control for most skins - the exceptions are the Simple and Sitefinity skins.

1. All slider arrows now have a background and look like buttons.

1. We have changed the drag handle orientation for some skins.

More information on the subject is available in the following blog post: [Improvements in RadSlider's visual appearance](http://blogs.telerik.com/stoyanstratev/posts/10-02-26/improvements_in_radslider_s_visual_appearance.aspx).



## Telerik RadSlider for ASP.NET AJAX Q3 2009

The new release brings the following changes:

## Client event names changes




>caption  

| loaded | load |
| ------ | ------ |
|valueChange|valueChanged|
|beforeValueChange|valueChanging|

## Server-side properties




>caption  

| OnClientLoaded | OnClientLoad |
| ------ | ------ |
|OnClientValueChange|OnClientValueChanged|
|OnClientBeforeValueChange|OnClientValueChanging|

## Client-side API changes


>caption  

| add_loaded | add_load |
| ------ | ------ |
|remove_loaded|remove_load|
|add_valueChange|add_valueChanged|
|remove_valueChange|remove_valueChanged|
|add_beforeValueChange|add_valueChanging|
|remove_beforeValueChange|remove_valueChanging|
|Telerik.Web.UI.SliderValueChangeEventArgs|Telerik.Web.UI.SliderValueChangedEventArgs|
|Telerik.Web.UI.SliderBeforeValueChangeEventArgs|Telerik.Web.UI.SliderValueChangingEventArgs|

## Telerik RadSlider for ASP.NET AJAX Q2 2009 SP1

* OnClientLoaded property is marked as obsolete. Please use the __OnClientLoad__ property instead.

## Telerik RadSlider for ASP.NET AJAX Q1 2009

* Total redesign of the skins, which aims for a uniformity of the appearance of all controls in the suite in the cases they are used to build RIAs

* Refactoring of the CSS code to achieve better understanding, easier maintenance and handle problems with global styles

* Changes to the CSS classes, so now all controls for ASP.NET AJAX comply with a common naming conventionFor example:was:__radslider RadSlider_Default__now:__RadSlider RadSlider_Default__



## Telerik RadSlider for ASP.NET AJAX Q3 2008 and before

Some of the RadSlider's properties are obsolete and new ones which offer the same functionality should be used. You can find them along with the new ones below:


>caption  

|  __Obsolete property__  |  __Actual property__  |
| ------ | ------ |
|ClickOffset|LargeChange|
|SlideStep|SmallChange|
|Length|Width/Height (depending on Orientation)|

Some new properties were introduced - the table below contains them along with a short explanation.


>caption  

|  __Property Name__  |  __Description__  |
| ------ | ------ |
|ItemType|Sets the type of the items, can be set to __Item__ and __Tick__ . When set to __Tick__ , the slider can be additionally configured by setting its __LargeChange__ and __SmallChange__ properties.|
|TrackPosition|This property is used to set the position of the track. It can be set to __TopLeft__ , __BottomRight__ and __Center__ |
|IsSelectionRangeEnabled|When set to true, configures the slider to display two drag-handles|
|SelectionStart|Sets the first value of the slider when __IsSelectionRangeEnabled__ = true|
|SelectionEnd|Sets the second value of the slider when __IsSelectionRangeEnabled__ = true|
|LiveDrag|Controls when the value of the slider changes - when set to true the value changes while the handle drag is changing its position whereas when false the value changes only after the user has moved and already released the drag handle|
|IsDirectionReversed|Controls whether the minimum and the maximum values are reversed or not|
|OnClientBeforeVaueChange|event, which before the value changes. You can use the set_cancel method of the args to cancel the value change operation|
