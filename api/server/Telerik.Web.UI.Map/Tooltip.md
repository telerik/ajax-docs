---
title: Telerik.Web.UI.Map.Tooltip
page_title: Telerik.Web.UI.Map.Tooltip
description: Telerik.Web.UI.Map.Tooltip
---

# Telerik.Web.UI.Map.Tooltip

The default Kendo UI Tooltip options for all marker layers.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.Map.Tooltip : IDefaultCheck

## Properties

###  AnimationSettings `Animation`

A collection of {Animation} objects, used to change default animations. A value of false will disable all animations in the widget.

###  AutoHide `Boolean`

Specifies if the tooltip will be hidden when mouse leaves the target element. If set to false a close button will be shown within tooltip. If set to false, showAfter is specified and the showOn is set to "mouseenter" the Tooltip will be displayed after the given timeout even if the element is no longer hovered.

###  Callout `Boolean`

Specifies if the tooltip callout will be displayed.

###  Content `String`

The text or a function which result will be shown within the tooltip. By default the tooltip will display the target element title attribute content.

###  ContentSettings `String`

The text or a function which result will be shown within the tooltip. By default the tooltip will display the target element title attribute content.

###  Height `Double`

The height (in pixels) of the tooltip.

###  Iframe `Boolean`

Explicitly states whether content iframe should be created.

###  Position `TooltipPosition`

The position relative to the target element, at which tlhe tooltip will be shown. Predefined values are "bottom", "top", "left", "right", "center".

###  ShowAfter `Double`

Specify the delay in milliseconds before the tooltip is shown. This option is ignored if showOn is set to "click" or "focus".

###  ShowOn `String`

The event on which the tooltip will be shown. Predefined values are "mouseenter", "click" and "focus".

###  Template `String`

The template which renders the tooltip content.The fields which can be used in the template are:

###  Width `Double`

The width (in pixels) of the tooltip.

