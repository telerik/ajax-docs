---
title: EditorButton Object
page_title: EditorButton Object | RadEditor for ASP.NET AJAX Documentation
description: EditorButton Object
slug: editor/client-side-programming/editorbutton-object
tags: editorbutton,object
published: True
position: 9
---

# EditorButton Object



The EditorButton object exposes the following public methods and properties to control its behavior:

## 

EditorButton Client-Side Methods


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|click||Boolean|Performs a click operation, but does not fire a command.|
|get_contentAreaMode||Telerik.Web.UI.EditorContentAreaMode|Returns the ContentAreaMode value.|
|get_enableAriaSupport||Boolean|Indicates whether the Aria support is enabled.|
|get_enabled||Boolean|Indicates whether the tool is enabled.|
|get_height||String|Returns the height of the tool in pixels.|
|get_text||String|Returns the Text value of the tool.|
|get_tooltipDecrease||String|Returns the tool-tip text of the decrease button.|
|get_tooltipIncrease||String|Returns the tool-tip text of the increase button.|
|get_width||String|Returns the width of the tool in pixels.|
|getAnchorElement||Element|Returns the anchor element of the tool.|
|getSpanElement||Element|Returns the span element of the tool.|
|isOn||Boolean|Returns a Boolean value upon the state of the tool.|
|isTarget|`Object`|Boolean|Determines whether the tool was clicked.The method takes the following arguments:

1. evtArgs - The event arguments.|
|set_contentAreaMode|`Telerik.Web.UI.EditorContentAreaMode`||Overrides the ConentAreaMode value.The method takes the following arguments:

1. value - The EditorContentAreaMode to be changed to.|
|set_enableAriaSupport|`Boolean`, `String`||Configures the state of the Aria support.The method takes the following arguments:

1. value - Specifies whether to enable or disable the Aria support.

1. role - The role value to be set.|
|set_enabled|`Boolean`||Sets the enable/disable state of the tool.The method takes the following arguments:

1. value - Defines whether the tool to be enabled or not.|
|set_height|`String`||Sets the height value of the tool.The method takes the following arguments:

1. value - The height value.|
|set_text|`String`||Overrides the Text value of the tool.The method takes the following arguments:

1. value - The new text value.|
|set_tooltipDecrease|`String`||Sets the tool-tip text of the decrease button.The method takes the following arguments:

1. value - The tooltip text.|
|set_tooltipIncrease|`String`||Sets the tool-tip text of the increase button.The method takes the following arguments:

1. value - The tooltip text.|
|set_width|`String`||Sets the width value of the tool.The method takes the following arguments:

1. value - The width value.|
|setFocus|||Sets the focus on the tool's element.|
|setOn|`Boolean`, `Object`||Enables the tool.The method takes the following arguments:

1. value - If set to false, the tool will remain disabled.

1. attribute - The state to be switched to.|
|setState|`Telerik.Web.UI.Editor.CommandStates`||Sets the state of the tool.The method takes the following arguments:

1. state - The state to be switched to.|

## 

EditorButton Client-Side Methods for attaching/detaching client-side event handlers


| Name | Arguments | Description |
| ------ | ------ | ------ |
|add_valueSelected|Function|Adds a handler for the valueSelected EditorButton client event.|
|remove_valueSelected|Function|Removes a handler for the valueSelected EditorButton client event.|
