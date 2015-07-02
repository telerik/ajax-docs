---
title: Telerik.Web.UI.RadRating
page_title: Telerik.Web.UI.RadRating
description: Telerik.Web.UI.RadRating
---

# Telerik.Web.UI.RadRating

RadRating class

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* System.Web.UI.WebControls.BaseDataBoundControl
* System.Web.UI.WebControls.DataBoundControl
* Telerik.Web.UI.RadDataBoundControl
* Telerik.Web.UI.RadRating

## Properties

###  SupportsRenderingMode `Boolean`

###  ItemCount `Int32`

Get/Set the number of items in the RadRating control - e.g. the number of stars that the control will have.

###  ItemWidth `Unit`

Get/Set the width of each item in the RadRating control.

###  ItemHeight `Unit`

Get/Set the height of each item in the RadRating control.

###  Value `Decimal`

Get/Set the current rating for the RadRating control.

###  DbValue `Decimal`

Gets or sets the value of RadRating in a database-friendly way.

#### Remarks
This property behaves exactly as the Value property.
            The only difference is that it will not throw an exception if the new value is null or
            DBNull. Setting a null value will revert the selected value to 0m.

###  SelectionMode `RatingSelectionMode`

Get/Set the selection mode for the RadRating control - when the user rates, either mark a single item (star) as selected
            or all items(stars) from the first to the selected one.

###  Precision `RatingPrecision`

Get/Set the rating precision for the RadRating control - the precision with which the user can rate.

###  Orientation `Orientation`

Get/Set the orientation of the RadRating control.

###  IsDirectionReversed `Boolean`

Get/Set the direction of the RadRating control, that is, the position of the item (star) with value 1.

###  EnableToolTips `Boolean`

Get/Set a value indicating whether the RadRating control will display a browser toolip for its values.

###  AutoPostBack `Boolean`

Get/Set a value indicating whether the RadRating control will initiate a postback after its value changes.

###  ReadOnly `Boolean`

Get/Set a value indicating whether the RadRating control is in read-only mode.

###  AppendDataBoundItems `Boolean`

Gets/Sets a value indicating whether the DataBound items should be appended to the Rating Items collection, or the collection
            should be cleared before creating the DataBound items.

###  ItemBinding `RatingItemBinding`

Gets the object through which the user should provide the binding information about the rating items.

###  OnClientLoad `String`

Gets or sets a value indicating the client-side event handler that is called when
            the RadRating control is initialized.

#### Remarks
Two parameters are passed to the handler:sender, the RadRating object that raised the event.args.This event cannot be cancelled.

###  OnClientRating `String`

Gets or sets a value indicating the client-side event handler that is called when the user clicks an
            item (star) of the RadRating control, but before the new value is set.

#### Remarks
Two parameters are passed to the handler:sender, the RadRating object that raised the event.args.This event can be cancelled.

###  OnClientRated `String`

Gets or sets a value indicating the client-side event handler that is called when the user clicks an
            item (star) of the RadRating control.

#### Remarks
Two parameters are passed to the handler:sender, the RadRating object that raised the event.args.This event cannot be cancelled.

###  Items `RadRatingItemCollection`

Gets a RadRatingItemCollection object that contains the items of the current RadRating control.

#### Remarks
Use the Items property to access the child items of RadRating. You can add, remove or modify items from the Items collection.

###  SelectedItem `RadRatingItem`

Gets a RadRatingItem object that represents the selected item in the RadRating control
            in case Items collection of the control is not empty.

###  SelectedItems `RadRatingItemCollection`

Gets a RadRatingItemCollection object that contains the selected items in the RadRating control.
            The collection is empty in case there are no items in the Items collection of the control.

###  RegisterWithScriptManager `Boolean`

Gets or sets the value, indicating whether to register with the ScriptManager control on the page.

#### Remarks
If RegisterWithScriptManager is set to false the control can be rendered on the page using Web Services or normal callback requests/page methods.

###  Skin `String`

Gets or sets the skin name for the control user interface.

#### Remarks
If this property is not set, the control will render using the skin named "Default".
            If EnableEmbeddedSkins is set to false, the control will not render skin.

###  IsSkinSet `String`

For internal use.

###  EnableEmbeddedScripts `Boolean`

Gets or sets the value, indicating whether to render script references to the embedded scripts or not.

#### Remarks
If EnableEmbeddedScripts is set to false you will have to register the needed Scripts files by hand.

###  EnableEmbeddedSkins `String`

Gets or sets the value, indicating whether to render links to the embedded skins or not.

#### Remarks
If EnableEmbeddedSkins is set to false you will have to register the needed CSS files by hand.

###  EnableEmbeddedBaseStylesheet `Boolean`

Gets or sets the value, indicating whether to render the link to the embedded base stylesheet of the control or not.

#### Remarks
If EnableEmbeddedBaseStylesheet is set to false you will have to register the needed control base CSS file by hand.

###  ODataDataSourceID `String`

Gets or sets the ODataDataSource used for data binding.

###  ClientDataSourceID `String`

Gets or sets ID of ClientDataSource control that is used for client side binding

###  RuntimeSkin `String`

Gets the real skin name for the control user interface. If Skin is not set, returns
            "Default", otherwise returns Skin.

###  EnableAjaxSkinRendering `String`

Gets or sets the value, indicating whether to render the skin CSS files during Ajax requests

#### Remarks
If EnableAjaxSkinRendering is set to false you will have to register the needed control base CSS file by hand when adding/showing the control with Ajax.

###  ClientStateFieldID `String`

###  RenderMode `RenderMode`

Specifies the rendering mode of the control. Setting the mode to Lightweight will yield
            HTML 5/CSS 3 html and css. If the set value is Auto use ResolvedRenderMode to receive the actual RenderMode
            with respect to the user angent of the current request.

#### Remarks
Lightweight rendering mode might change the outlook of the component in some older browsers
            that don't support CSS3/HTML5.

###  ResolvedRenderMode `RenderMode`

Returns resolved RenderMode should the original value was Auto

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin 
            and will be modified in AddAttributesToRender()

###  DefaultCssClass `String`

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  ScriptManager `ScriptManager`

###  RadScriptManager `ScriptManager`

## Methods

###  OnRate

Gets or sets a value indicating the server-side event handler that is called 
            when the current rating of the RadRating control changes.

#### Remarks
Two parameters are passed to the handler:sender, the RadRating object that raised the event.args.

#### Returns

`System.Void` 

###  OnItemDataBound

Executed right after the item is data-bound to the data source.

#### Returns

`System.Void` 

###  OnItemCreated

Executed right after the item is created and inserted in the Rating Items collection.

#### Returns

`System.Void` 

###  BindToEnumerableData

Binds the Rating control to a IEnumerable data source

#### Parameters

#### dataSource `System.Collections.IEnumerable`

IEnumerable data source

#### Returns

`System.Void` 

###  BindItem

Creates a Rating item based on the data item object.

#### Returns

`Telerik.Web.UI.RadRatingItem` 

###  AddAttributesToRender

Adds HTML attributes and styles that need to be rendered to the specified . This method is used primarily by control developers.

#### Parameters

#### writer `System.Web.UI.HtmlTextWriter`

A  that represents the output stream to render HTML content on the client.

#### Returns

`System.Void` 

###  TryParseDecimalFromString

Converts a string to decimal.

#### Parameters

#### sValue `System.String`

The string value to parse.

#### ratingValue `System.Decimal@`

The resulting decimal value.

#### Returns

`System.Boolean` Is parsing successful.

###  TryParseDecimalFromNumber

Converts a number or bool value to decimal.

#### Parameters

#### value `System.Object`

The value to parse.

#### parsedValue `System.Decimal@`

The resulting value.

#### Returns

`System.Boolean` Is parsing successful.

###  AddAttributesToRender

#### Returns

`System.Void` 

###  OnPreRender

#### Returns

`System.Void` 

###  ControlPreRender

Code moved into this method from OnPreRender to make sure it executed when the framework skips OnPreRender() for some reason

#### Returns

`System.Void` 

###  RegisterScriptControl

Registers the control with the ScriptManager

#### Returns

`System.Void` 

###  RegisterCssReferences

Registers the CSS references

#### Returns

`System.Void` 

###  LoadClientState

Loads the client state data

#### Parameters

#### clientState `System.Collections.Generic.Dictionary{System.String,System.Object}`

#### Returns

`System.Void` 

###  SaveClientState

Saves the client state data

#### Returns

`System.String` 

###  RenderClientStateField

#### Returns

`System.Void` 

###  RenderBeginTag

#### Returns

`System.Void` 

###  RenderEndTag

#### Returns

`System.Void` 

###  Render

#### Returns

`System.Void` 

###  RenderScriptsNoScriptManager

#### Returns

`System.Void` 

###  RenderDescriptorsNoScriptManager

#### Returns

`System.Void` 

###  RenderContents

#### Returns

`System.Void` 

###  ApplyConditionalRendering

Use this from RenderContents of the inheritor

#### Returns

`System.Void` 

###  DescribeComponent

#### Returns

`System.Void` 

###  DescribeRenderingMode

Should be  used by inheritors

#### Returns

`System.Void` 

###  DescribeProperty

#### Returns

`System.Void` 

###  DescribeEvent

#### Returns

`System.Void` 

###  GetEmbeddedSkinNames

Returns the names of all embedded skins. Used by Telerik.Web.Examples.

#### Returns

`System.Collections.Generic.List`1` 

###  LoadPostData

Executed when post data is loaded from the request

#### Parameters

#### postDataKey `System.String`

#### postCollection `System.Collections.Specialized.NameValueCollection`

#### Returns

`System.Boolean` 

###  RaisePostDataChangedEvent

Executed when post data changes should invoke a changed event

#### Returns

`System.Void` 

