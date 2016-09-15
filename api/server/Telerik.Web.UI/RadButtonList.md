---
title: Telerik.Web.UI.RadButtonList
page_title: Telerik.Web.UI.RadButtonList
description: Telerik.Web.UI.RadButtonList
---

# Telerik.Web.UI.RadButtonList

RadButtonList class

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* System.Web.UI.WebControls.BaseDataBoundControl
* System.Web.UI.WebControls.DataBoundControl
* Telerik.Web.UI.RadDataBoundControl : IControl, IControlResolver, IFeatureGroup, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.RadButtonList : INamingContainer

## Properties

###  AppendDataBoundItems `Boolean`

Gets or sets a value that indicates whether list items are cleared before data binding.

###  AriaSettings `WaiAriaSettings`

Gets the object that controls the Wai-Aria settings applied on the control's element.

###  AutoPostBack `Boolean`

Specifies if change of the selected item should postback.

###  CausesValidation `Boolean`

Gets or sets a value indicating whether validation is performed when the selected item is changed.

###  ClientDataSourceID `String`

Gets or sets ID of ClientDataSource control that is used for client side binding

###  ClientEvents `ButtonListClientEvents`

Defines the client events handlers.

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  Columns `Int32`

Gets or sets the number of columns to display in the control when the layout is Flow.

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin 
            and will be modified in AddAttributesToRender()

###  DataBindings `ButtonListDataBinding`

Defines the data binding configuration of the control

###  Direction `ButtonListDirection`

Gets or sets the direction in which the items within the group are displayed.

###  EnableAjaxSkinRendering `String`

Gets or sets the value, indicating whether to render the skin CSS files during Ajax requests

#### Remarks
If EnableAjaxSkinRendering is set to false you will have to register the needed control base CSS file by hand when adding/showing the control with Ajax.

###  EnableAriaSupport `Boolean`

Gets or sets a value indicating whether support for WAI-ARIA is enabled.

###  EnableEmbeddedBaseStylesheet `Boolean`

Gets or sets the value, indicating whether to render the link to the embedded base stylesheet of the control or not.
            This control features no skins, so this property must be set to false.

###  EnableEmbeddedBaseStylesheet `Boolean`

Gets or sets the value, indicating whether to render the link to the embedded base stylesheet of the control or not.

#### Remarks
If EnableEmbeddedBaseStylesheet is set to false you will have to register the needed control base CSS file by hand.

###  EnableEmbeddedScripts `Boolean`

Gets or sets the value, indicating whether to render script references to the embedded scripts or not.

#### Remarks
If EnableEmbeddedScripts is set to false you will have to register the needed Scripts files by hand.

###  EnableEmbeddedSkins `Boolean`

Gets or sets the value, indicating whether to render links to the embedded skins or not. 
            This control features no skins, so this property must be set to false.

###  EnableEmbeddedSkins `String`

Gets or sets the value, indicating whether to render links to the embedded skins or not.

#### Remarks
If EnableEmbeddedSkins is set to false you will have to register the needed CSS files by hand.

###  EnableRippleEffect `Boolean`

Returns true if ripple effect should be added

###  Height `Unit`

Gets or sets the height of the control.

###  IsSkinSet `String`

For internal use.

###  ItemCount `Int32`

Gets the number of list items in the control.

###  Items `ButtonListItemCollection`

Gets the collection of items in the list control. An item has Text, Value, Selected and Enabled properties.

###  KeyboardNavigationSettings `KeyboardNavigationSettings`

Used to define keyboard shortcut to focus the first list item.

###  Layout `ButtonListLayout`

Gets or sets the layout in which the items are rendered. Possible values are Flow, OrderedList, UnorderedList. OrderedList and UnorderedList do not support Horizontal Direction and Columns.

###  ODataDataSourceID `String`

Gets or sets the ODataDataSource used for data binding.

###  RegisterWithScriptManager `Boolean`

Gets or sets the value, indicating whether to register with the ScriptManager control on the page.

#### Remarks
If RegisterWithScriptManager is set to false the control can be rendered on the page using Web Services or normal callback requests/page methods.

###  RenderMode `RenderMode`

Specifies the rendering mode of the control. Setting the mode to Lightweight will yield
            HTML 5/CSS 3 html and css. If the set value is Auto use ResolvedRenderMode to receive the actual RenderMode
            with respect to the user angent of the current request.

#### Remarks
Lightweight rendering mode might change the outlook of the component in some older browsers
            that don't support CSS3/HTML5.

###  ResolvedRenderMode `RenderMode`

Returns resolved RenderMode should the original value was Auto

###  RuntimeSkin `String`

Gets the real skin name for the control user interface. If Skin is not set, returns
            "Default", otherwise returns Skin.

###  SelectedIndex `Int32`

Gets or sets the lowest ordinal index of the selected items in the control.

###  SelectedItem `ButtonListItem`

Gets the selected item with the lowest index in the list control.

###  SelectedValue `String`

Gets the value of the selected item in the list control, or selects the item in the list control that contains the specified value.

###  Skin `String`

Gets or sets the skin name for the control user interface.

#### Remarks
If this property is not set, the control will render using the skin named "Default".
            If EnableEmbeddedSkins is set to false, the control will not render skin.

###  ValidationGroup `String`

Gets or sets the group of controls for which an item from the list causes validation when it posts back to the server.

###  Width `Unit`

Gets or sets the width of the control.

## Methods

###  ApplyConditionalRendering

Use this from RenderContents of the inheritor

#### Returns

`System.Void` 

###  ControlPreRender

Code moved into this method from OnPreRender to make sure it executed when the framework skips OnPreRender() for some reason

#### Returns

`System.Void` 

###  DescribeRenderingMode

Should be  used by inheritors

#### Returns

`System.Void` 

###  GetEmbeddedSkinNames

Returns the names of all embedded skins. Used by Telerik.Web.Examples.

#### Returns

`System.Collections.Generic.List`1` 

###  LoadClientState

Loads the client state data

#### Parameters

#### clientState `System.Collections.Generic.Dictionary{System.String,System.Object}`

#### Returns

`System.Void` 

###  LoadPostData

Executed when post data is loaded from the request

#### Parameters

#### postDataKey `System.String`

#### postCollection `System.Collections.Specialized.NameValueCollection`

#### Returns

`System.Boolean` 

###  OnItemCreated

Raises the ItemCreated event of the control.

#### Parameters

#### e `Telerik.Web.UI.ButtonListEventArgs`

An EventArgs that contains the event data.

#### Returns

`System.Void` 

###  OnItemDataBound

Raises the ItemDataBound event of the control.

#### Parameters

#### e `Telerik.Web.UI.ButtonListEventArgs`

An EventArgs that contains the event data.

#### Returns

`System.Void` 

###  OnSelectedIndexChanged

Raises the SelectedIndexChanged event of the control.

#### Parameters

#### e `System.EventArgs`

An EventArgs that contains the event data.

#### Returns

`System.Void` 

###  RaisePostDataChangedEvent

Invokes the OnSelectedIndexChanged method,
            when the SelectedIndex property of the control has changed.

#### Returns

`System.Void` 

###  RaisePostDataChangedEvent

Executed when post data changes should invoke a changed event

#### Returns

`System.Void` 

###  RegisterCssReferences

Registers the CSS references

#### Returns

`System.Void` 

###  RegisterScriptControl

Registers the control with the ScriptManager

#### Returns

`System.Void` 

###  SaveClientState

Saves the client state data

#### Returns

`System.String` 

