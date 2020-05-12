---
title: Telerik.Web.UI.RadTimeline
page_title: Telerik.Web.UI.RadTimeline
description: Telerik.Web.UI.RadTimeline
---

# Telerik.Web.UI.RadTimeline

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* System.Web.UI.WebControls.BaseDataBoundControl
* System.Web.UI.WebControls.DataBoundControl
* Telerik.Web.UI.RadDataBoundControl : IControl, IControlResolver, IFeatureGroup, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.RadTimeline : INamingContainer

## Properties

###  AlternatingMode `Boolean`

Indicates whether events should be positioned on both sides of the timeline axis. By default all events are displayed on the right side of the timeline axis.

###  ClientDataSourceID `String`

Gets or sets ID of ClientDataSource control that is used for client side binding

###  ClientEvents `TimelineClientEvents`

Defines the client events handlers.

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  CollapsibleEvents `Boolean`

Enables the events in the Kendo UI Timeline to be expandable or collapsible. When enabled initially all events are collapsed.

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin 
            and will be modified in AddAttributesToRender()

###  DataActionsField `String`

Sets the field of the data item that provides the actions information for the event.

###  DataDateField `String`

Sets the field of the data item that provides information when the given event happened in time.

###  DataDescriptionField `String`

Sets the field of the data item that provides the description information for the event.

###  DataImagesField `String`

Sets the field of the data item that provides the images information for the event.

###  DataKeyNames `String[]`

Gets or sets an array of data-field names that will be used to populate the Timeline's DataItem property which is used to populated the control's template. The field declared in the Columns are added by default.

#### Remarks
Note: The dataItem's properties declared in the template should be with lower case.

###  DataSubtitleField `String`

Sets the field of the data item that provides the subtitle information for the event.

###  DataTitleField `String`

Sets the field of the data item that provides the title information for the event.

###  DateFormat `String`

Sets the date format used to display the date in the event's label

###  EnableAjaxSkinRendering `String`

Gets or sets the value, indicating whether to render the skin CSS files during Ajax requests

#### Remarks
If EnableAjaxSkinRendering is set to false you will have to register the needed control base CSS file by hand when adding/showing the control with Ajax.

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

###  EnableRippleEffect `Boolean`

Returns true if ripple effect should be added

###  EventHeight `Double`

Sets specific height for the event in horizontal mode.

###  EventTemplate `String`

Specifies the template used to render the event details.

###  EventWidth `Double`

Sets specific width for the event in vertical mode.

###  IsSkinSet `String`

For internal use.

###  ODataDataSourceID `String`

Gets or sets the ODataDataSource used for data binding.

###  Orientation `RadTimelineOrientation`

Sets the orienation of the timeline axis. The widget expects "horizontal" or "vertical"

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

###  ShowDateLabels `Boolean`

If set to false, the event's date label will be hidden.

###  Skin `String`

Gets or sets the skin name for the control user interface.

#### Remarks
If this property is not set, the control will render using the skin named "Default".
            If EnableEmbeddedSkins is set to false, the control will not render skin.

###  WebServiceClientDataSource `WebServiceClientDataSource`

Gets the RadClientDataSource instance of the Timeline control.

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

Loads the posted content of the list control, if it is different from the last posting.

#### Parameters

#### postDataKey `System.String`

The key identifier for the control, used to index the postCollection.

#### postCollection `System.Collections.Specialized.NameValueCollection`

A  that contains value information indexed by control identifiers.

#### Returns

`System.Boolean` true if the posted content is different from the last posting; otherwise, false.

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

