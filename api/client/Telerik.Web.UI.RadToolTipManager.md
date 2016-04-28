---
title: Telerik.Web.UI.RadToolTipManager
page_title: Client-side API Reference
description: Telerik.Web.UI.RadToolTipManager
slug: Telerik.Web.UI.RadToolTipManager
---

# Telerik.Web.UI.RadToolTipManager : Telerik.Web.UI.RadWebControl

## Inheritance Hierarchy

* [Telerik.Web.UI.RadWebControl]({%slug Telerik.Web.UI.RadWebControl%})
* *[Telerik.Web.UI.RadToolTipManager]({%slug Telerik.Web.UI.RadToolTipManager%})*


## Methods

###  clearCloneCache

Clears cached proeprties of the manager. This property should be used when a setting of the manager is changed on the client and the change should be applied to new dynamically created tooltips.

#### Parameters

#### Returns

`None` 

### createToolTip

Creates a tooltip for a particular element

#### Parameters

##### targetElement `Object`

#### Returns

`None` 

### get_autoTooltipify

Gets a value whether the RadToolTipManager, when its TargetControls collection is empty will tooltipify automatically all elements on the page that have a "title" attribute

#### Parameters

#### Returns

`Boolean` 

### get_enableDataCaching

Gets a value which determines whether tooltip content should be cached after first load on demand request

#### Parameters

#### Returns

`Boolean` 

### get_toolTipZoneID

Gets the ID of the zone which should be automatically tooltipified

#### Parameters

#### Returns

`String` 

### getToolTipByElement

Gets the tooltip associated with a corresponding target element if such a tooltip exists

#### Parameters

##### element `Object`

#### Returns

`Telerik.Web.UI.RadToolTip` 

### set_autoTooltipify

Sets a value whether the RadToolTipManager, when its TargetControls collection is empty, will tooltipify automatically all elements on the page that have a "title" attribute

#### Parameters

##### value `Boolean`

#### Returns

`None` 

### set_enableDataCaching

Sets a value which determines whether tooltip content should be cached after first load on demand request

#### Parameters

##### value `Boolean`

#### Returns

`None` 

### set_toolTipZoneID

Sets the ID of the zone which should be automatically tooltipified

#### Parameters

##### value `String`

#### Returns

`None` 


## Events

### requestEnd

The requestEnd event is fired immediately after the response from a WebService or an AJAX request is received. This provides an opportunity to make changes just before the content of the tooltip is displayed. 

#### Event Data

##### sender `Telerik.Web.UI.RadToolTipManager`

The instance of the RadToolTipManager raised the event.

##### eventArgs `Sys.EventArgs`

Empty event argument.

### requestStart

The requestStart event is fired when the call to the WebService or the AJAX request starts. The event is cancellable. 

#### Event Data

##### sender `Telerik.Web.UI.RadToolTipManager`

The instance of the RadToolTipManager raised the event.

##### eventArgs `Sys.CancelEventArgs`

The event arguments.

### responseError

The responseError event is fired when a server error occurs during the request. It allows the developer to choose the behavior if this happens. 

#### Event Data

##### sender `Telerik.Web.UI.RadToolTipManager`

The instance of the RadToolTipManager raised the event.

##### eventArgs `Telerik.Web.UI.ToolTipManagerErrorEventArgs`

The event arguments.

