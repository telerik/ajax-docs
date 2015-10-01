---
title: Telerik.Web.UI.RadTicker
page_title: Telerik.Web.UI.RadTicker
description: Telerik.Web.UI.RadTicker
---

# Telerik.Web.UI.RadTicker

RadTicker control

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* System.Web.UI.WebControls.BaseDataBoundControl
* System.Web.UI.WebControls.DataBoundControl
* Telerik.Web.UI.RadDataBoundControl
* Telerik.Web.UI.RadTicker

## Properties

###  Items `RadTickerItemCollection`

The collection that holds all RadTickerItem objects.

###  AutoStart `Boolean`

Specifies whether the ticker begins ticking automatically.

#### Remarks
You should leave this set to false if you are using the ticker within a RadTicker
            If you use the ticker independently and leave this setting to false you should use the
            client API call ticker_id.startTicker() to start it.

###  AutoAdvance `Boolean`

Specifies whether  will begin ticking the next tickerline 
            (if any) after it has finished ticking the current one.

#### Remarks
If you set the AutoAdvance property to false, then you will have to use 
            a client API Call ticker_id.tickNextLine()

###  Loop `Boolean`

Specifies whether  will repeat the first tickerline after displaying the last one.

#### Remarks
If you set this property to true RadTicker will never finish ticking.
            This may have possible implications when having more than one  instance in
            a . This way  works is that when the first ticker
            on a frame has finished ticking it will start ticking the next ticker on the frame. If a 
            instance is ticking (has Loop=true) it will never finish and the next ticker on the frame will not get started.

###  TickSpeed `Int32`

Specifies the duration in milliseconds between ticking each character of a tickerline.
            The lower the value the faster a line will finish ticking.

###  LineDuration `Int32`

Specifies in milliseconds the pause  makes before starting to tick
            the next line (if AutoAdvance=True).

###  AutoPostBack `Boolean`

Gets or sets a value indicating whether a postback to the server automatically occurs when the user interacts with the control.

#### Remarks
Setting this property to true will make Telerik RadTicker postback to the server on item click.

###  DataTextField `String`

Gets or sets the field of the data source that provides the value of the ticker lines.

#### Remarks
Use the DataTextField property to specify the field of the data source (in most cases the name of the database column) 
            	which provides the values for the Text property of databound ticker items. The DataTextField property is 
            	taken into account only during data binding. If the DataTextField property is not set and your datasource is not a list of strings,
            	the RadTicker control will throw an exception.

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

###  BindToEnumerableData

Binds the ticker to a IEnumerable data source

#### Parameters

#### dataSource `System.Collections.IEnumerable`

IEnumerable data source

#### Returns

`System.Void` 

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

###  GetViewStateValue

#### Returns

`Telerik.Web.UI.T` 

