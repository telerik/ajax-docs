---
title: Telerik.Web.UI.RadSlider
page_title: Telerik.Web.UI.RadSlider
description: Telerik.Web.UI.RadSlider
---

# Telerik.Web.UI.RadSlider

Telerik RadSlider is a flexible UI component that allows users to select a value from a defined range using a smooth or step-based slider.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* System.Web.UI.WebControls.BaseDataBoundControl
* System.Web.UI.WebControls.DataBoundControl
* Telerik.Web.UI.RadDataBoundControl : IControl, IControlResolver, IFeatureGroup, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.ControlItemContainer : IControlItemContainer, INamingContainer, IXmlSerializable
* Telerik.Web.UI.RadSlider : IPostBackEventHandler

## Properties

###  AnimationDuration `Int32`

Get/Set the length of the animation

###  AppendDataBoundItems `Boolean`

Gets/Sets a value indicating whether the DataBound items should be appended to the Slider Items collection, or the collection
            should be cleared before creating the DataBound items.

###  AutoPostBack `Boolean`

True to cause a postback on value change.

###  CausesValidation `Boolean`

Gets or sets a value indicating whether validation is performed when an item within
            the control is selected.

#### Remarks
By default, page validation is performed when an item is selected. Page
                validation determines whether the input controls associated with a validation
                control on the page all pass the validation rules specified by the validation
                control. You can specify or determine whether validation is performed on both the
                client and the server when an item is clicked by using the CausesValidation
                property. To prevent validation from being performed, set the
                CausesValidation property to false.

###  ClientDataSourceID `String`

Gets or sets ID of ClientDataSource control that is used for client side binding

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin 
            and will be modified in AddAttributesToRender()

###  DbValue `Decimal`

Gets or sets the value of RadSlider in a database-friendly way.

#### Remarks
This property behaves exactly as the Value property.
            The only difference is that it will not throw an exception if the new value is null or
            DBNull. Setting a null value will revert the selected value to 0m.

###  DecreaseText `String`

Gets or sets the text for the decrease handle

###  DragText `String`

Gets or sets the text for the increase handle

###  EnableAjaxSkinRendering `String`

Gets or sets the value, indicating whether to render the skin CSS files during Ajax requests

#### Remarks
If EnableAjaxSkinRendering is set to false you will have to register the needed control base CSS file by hand when adding/showing the control with Ajax.

###  EnableDragRange `Boolean`

Get/Set the EnableDragRange of the slider

###  EnableEmbeddedBaseStylesheet `Boolean`

Gets or sets the value, indicating whether to render the link to the embedded base stylesheet of the control or not.

#### Remarks
If EnableEmbeddedBaseStylesheet is set to false you will have to register the needed control base CSS file by hand.

###  EnableEmbeddedScripts `Boolean`

Gets or sets the value, indicating whether to render script references to the embedded scripts or not.

#### Remarks
If EnableEmbeddedScripts is set to false you will have to register the needed Scripts files by hand.

###  EnableEmbeddedSkins `String`

Gets or sets the value, indicating whether to render links to the embedded skins or not.

#### Remarks
If EnableEmbeddedSkins is set to false you will have to register the needed CSS files by hand.

###  EnableServerSideRendering `Boolean`

Gets or sets a value, indicating whether the HTML of the control will be output from the server or created with client-side code.

###  Height `Unit`

Get/Set the Height of the slider including the decrease and increase handles.

###  IncreaseText `String`

Gets or sets the text for the increase handle

###  IsDirectionReversed `Boolean`

Get/Set the IsDirectionReversed of the slider

###  IsSelectionRangeEnabled `Boolean`

Get/Set the IsSelectionRangeEnabled of the slider

###  IsSkinSet `String`

For internal use.

###  ItemBinding `SliderItemBinding`

Gets the object through which the user should provide the binding information about the slider items.

###  Items `RadSliderItemCollection`

Gets a RadSliderItemCollection object that contains the items of the current RadSlider control.

#### Remarks
Use the Items property to access the child items of RadSlider
            You can add, remove or modify items from the Items collection.

###  ItemType `SliderItemType`

Get/Set the ItemType of the slider items

###  LargeChange `Decimal`

Get/Set the delta with which the value will change 
            when user click on the track

###  Length `Int32`

Get/Set the length of the slider including the decrease and increase handles.

#### Remarks
If the slider is horizontal the width will be set, otherwise the height will be set.

###  LiveDrag `Boolean`

Get/Set the LiveDrag of the slider

###  MaximumValue `Decimal`

Get/Set the max value of the slider

###  MinimumValue `Decimal`

Get/Set the min value of the slider

###  ODataDataSourceID `String`

Gets or sets the ODataDataSource used for data binding.

###  OnClientDataBound `String`

Gets or sets a value indicating the client-side event handler that is called after
            the Slider is databound.

#### Remarks
If specified, the OnClientDataBoundclient-side event handler is called after
            the Slider is databound. Two parameters are passed to the handler:sender, the RadSlider object.args.This event cannot be cancelled.

###  OnClientItemDataBinding `String`

Gets or sets a value indicating the client-side event handler that is called before
            a Slider item is databound.

#### Remarks
If specified, the OnClientItemDataBindingclient-side event handler is called before
            a Slider item is databound. Two parameters are passed to the handler:sender, the RadSlider object.args.This event can be cancelled.

###  OnClientItemDataBound `String`

Gets or sets a value indicating the client-side event handler that is called after
            a Slider item is databound.

#### Remarks
If specified, the OnClientItemDataBoundclient-side event handler is called after
            a Slider item is databound. Two parameters are passed to the handler:sender, the RadSlider object.args.This event cannot be cancelled.

###  OnClientItemsCreated `String`

Gets or sets a value indicating the client-side event handler that is called when
            the items of the RadSlider control are created.

#### Remarks
Two parameters are passed to the handler:sender, the RadSlider object.args.This event cannot be cancelled.

###  OnClientLoad `String`

Gets or sets a value indicating the client-side event handler that is called when
            the RadSlider control is initialized.

#### Remarks
Two parameters are passed to the handler:sender, the RadSlider object.args.This event cannot be cancelled.

###  OnClientSlide `String`

Gets or sets a value indicating the client-side event handler that is called 
            while the handle is being slided.

#### Remarks
If specified, the OnClientSlideclient-side event handler that is called 
            while the handle is being slided. Two parameters are passed to the handler:sender, the RadSlider object.args.This event cannot be cancelled.

###  OnClientSlideEnd `String`

Gets or sets a value indicating the client-side event handler that is called 
            when slide has ended.

#### Remarks
If specified, the OnClientSlideEndclient-side event handler that is called 
            when slide has ended. Two parameters are passed to the handler:sender, the RadSlider object.args.This event cannot be cancelled.

###  OnClientSlideRange `String`

Gets or sets a value indicating the client-side event handler that is called 
            while the user is sliding the selected region, thus changing the both SelectionStart and SelectionEnd values.

#### Remarks
If specified, the OnClientSlideRangeclient-side event handler that is called 
            while the selected region is being slided. Two parameters are passed to the handler:sender, the RadSlider object.args.This event cannot be cancelled.

###  OnClientSlideRangeEnd `String`

Gets or sets a value indicating the client-side event handler that is called when the
            user releases the selected region of RadSlider, after dragging it, thus changing both SelectionStart and SelectionEnd values.

#### Remarks
If specified, the OnClientSlideRangeEndclient-side event handler that is called 
            when slide has ended. Two parameters are passed to the handler:sender, the RadSlider object.args.This event cannot be cancelled.

###  OnClientSlideRangeStart `String`

Gets or sets a value indicating the client-side event handler that is called just before the
            user starts sliding the selected region of RadSlider, thus changing both SelectionStart and SelectionEnd values.

#### Remarks
If specified, the OnClientSlideRangeStartclient-side event handler is called before the
            user starts sliding the selected region. Two parameters are passed to the handler:sender, the RadSlider object.args.This event cannot be cancelled.

###  OnClientSlideStart `String`

Gets or sets a value indicating the client-side event handler that is called before
            the sliding is started.

#### Remarks
If specified, the OnClientSlideStartclient-side event handler is called before
            the sliding is started. Two parameters are passed to the handler:sender, the RadSlider object.args.This event cannot be cancelled.

###  OnClientValueChanged `Decimal`

Gets or sets a value indicating the client-side event handler that is called 
            when the value of the slider has been changed.

#### Remarks
Two parameters are passed to the handler:sender, the RadSlider object.args.This event cannot be cancelled.

###  OnClientValueChanging `Decimal`

Gets or sets a value indicating the client-side event handler that is called 
            just before the value of the slider changes.

#### Remarks
Two parameters are passed to the handler:sender, the RadSlider object.args.This event can be cancelled.

###  Orientation `Orientation`

Get/Set orientation of the slider

###  PostBackUrl `String`

Gets or sets the URL of the page to post to from the current page when a tab
                from the tabstrip is clicked.

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

Gets the Value of the selected item in case 
            ItemType of the RadSlider control equals SliderItemType.Item.

###  SelectedItem `RadSliderItem`

Gets a RadSliderItem object that represents the selected item in the RadSlider control in case 
            ItemType of the control equals SliderItemType.Item.

###  SelectedItems `RadSliderItemCollection`

Gets a collection of RadSliderItem objects that represent the items in the RadSlider control that are currently selected
            in case ItemType of the control equals SliderItemType.Item.

###  SelectedRegionStartValue `Decimal`

Get/Set the position value of the slider, from where the selection region will begin

###  SelectedValue `Decimal`

Gets the Value of the selected item in case 
            ItemType of the RadSlider control equals SliderItemType.Item.

###  SelectionEnd `Decimal`

Get/Set the SelectionEnd of the slider

###  SelectionStart `Decimal`

Get/Set the SelectionStart of the slider

###  ShowDecreaseHandle `Boolean`

Show/Hide the decrease handle

###  ShowDragHandle `Boolean`

Show/Hide the drag handle

###  ShowIncreaseHandle `Boolean`

Show/Hide the increase handle

###  Skin `String`

Gets or sets the skin name for the control user interface.

#### Remarks
If this property is not set, the control will render using the skin named "Default".
            If EnableEmbeddedSkins is set to false, the control will not render skin.

###  SmallChange `Decimal`

Get/Set the step with which the slider value will change

###  ThumbsInteractionMode `SliderThumbsInteractionMode`

Get/Set the InteractionMode of the slider thumbs

###  TrackMouseWheel `Boolean`

Enable/Disable whether the mouse wheel should be handled

###  TrackPosition `SliderTrackPosition`

Get/Set the TrackPosition of the slider track

###  ValidationGroup `String`

Gets or sets the name of the validation group to which this validation
                control belongs.

#### Remarks
This property works only when CausesValidation
                is set to true.

###  Value `Decimal`

Get/Set the value of the slider

###  Width `Unit`

Get/Set the Width of the slider including the decrease and increase handles.

## Methods

###  AddAttributesToRender

Adds HTML attributes and styles that need to be rendered to the specified . This method is used primarily by control developers.

#### Parameters

#### writer `System.Web.UI.HtmlTextWriter`

A  that represents the output stream to render HTML content on the client.

#### Returns

`System.Void` 

###  AddProperty

Adds the property to the IScriptDescriptor, if it's value is different from the given default.

#### Parameters

#### descriptor `Telerik.Web.UI.IScriptDescriptor`

The descriptor to add the property to.

#### name `System.String`

The property name.

#### value `System.Object`

The current value of the property.

#### defaultValue `System.Object`

The default value.

#### Returns

`System.Void` 

###  ApplyConditionalRendering

Use this from RenderContents of the inheritor

#### Returns

`System.Void` 

###  BindItem

Creates a Slider item based on the data item object.

#### Returns

`Telerik.Web.UI.RadSliderItem` 

###  BindToEnumerableData

Binds the Slider control to a IEnumerable data source

#### Parameters

#### dataSource `System.Collections.IEnumerable`

IEnumerable data source

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

###  GetXml

Gets an XML string representing the state of the control. All child items and their properties are serialized in this
            	string.

#### Remarks
Use the GetXml method to get the XML state of the control. You can cache it and then restore it using
            	the LoadXml method.

#### Returns

`System.String` A String representing the state of the control - child items, properties etc.

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

###  LoadXml

Loads the control from an XML string.

#### Remarks
Use the LoadXml method to populate the control from an XML string. You can use it along the GetXml
            	method to implement caching.

#### Parameters

#### xml `System.String`

The string representing the XML from which the control will be populated.

#### Returns

`System.Void` 

###  OnItemDataBound

Raises the ItemDataBound event. This event is raised per item for a Data-Bound RadSlider.

#### Parameters

#### e `Telerik.Web.UI.RadSliderItemEventArgs`

Event arguments instance containing a reference to the currently bound item

#### Returns

`System.Void` 

###  OnValueChanged

Gets or sets a value indicating the server-side event handler that is called 
            when the value of the slider has been changed.

#### Remarks
If specified, the OnValueChangedevent handler that is called 
            when the value of the slider has been changed. Two parameters are passed to the handler:sender, the RadSlider object.args.This event cannot be cancelled.

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

