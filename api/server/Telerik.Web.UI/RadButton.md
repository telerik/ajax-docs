---
title: Telerik.Web.UI.RadButton
page_title: Telerik.Web.UI.RadButton
description: Telerik.Web.UI.RadButton
---

# Telerik.Web.UI.RadButton

RadButton control provides the features, that ASP.NET: Button, ImageButton, LinkButton, RadioButton and CheckBox controls have.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.RadWebControl : IControl, IControlResolver, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.RadButton : IButtonControl, ICheckBoxControl, INamingContainer, IPostBackEventHandler

## Properties

###  OnClientLoad `String`

Gets or sets the name of the JavaScript function that will be called when the RadButton is loaded on the page.

###  OnClientClicking `String`

Gets or sets the name of the JavaScript function that will be called when the RadButton is clicked. The event is cancelable.

###  OnClientClicked `String`

Gets or sets the name of the JavaScript function that will be called when the RadButton is clicked, after the OnClientClicking event.

###  OnClientMouseOver `String`

Gets or sets the name of the JavaScript function that will be called when the mouse pointer hovers over the RadButton.

###  OnClientMouseOut `String`

Gets or sets the name of the JavaScript function that will be called when the mouse pointer leaves the RadButton.

###  OnClientCheckedChanging `String`

Gets or sets the name of the JavaScript function that will be called when the Checked property of the RadButton control is about to be changed.

###  OnClientCheckedChanged `String`

Gets or sets the name of the JavaScript function that will be called after the Checked property of the RadButton control is changed.

###  OnClientToggleStateChanging `String`

Gets or sets the name of the JavaScript function that will be called when the SelectedToggleStateIndex property of the RadButton control is about to be changed.

###  OnClientToggleStateChanged `String`

Gets or sets the name of the JavaScript function that will be called after the SelectedToggleStateIndex property of the RadButton control is changed.

###  CausesValidation `Boolean`

Gets or sets a value indicating whether validation is performed when the RadButton control is clicked.

###  CommandArgument `String`

Gets or sets an optional parameter passed to the Command event along with the associated CommandName.

###  CommandName `String`

Gets or sets the command name associated with the RadButton control that is passed to the Command event.

###  PostBackUrl `String`

Gets or sets the URL of the page to post to from the current page when the RadButton control is clicked.

###  ValidationGroup `String`

Gets or sets the group of controls for which the RadButton control causes validation when it posts back to the server.

###  Icon `RadButtonIcon`

Gets the object that controls the Primary and Secondary Icon related properties.

###  Image `RadButtonImage`

Gets the object that control the Image properties. A RadButton control can be rendered as an ImageButton, or it can have a BackgroundImage.

###  ToggleStates `RadButtonToggleStateCollection`

Gets a collection of RadButtonToggleState objects that belong to the RadButton control.

###  ContentTemplate `ITemplate`

Gets or sets the template for the RadButton control.

###  AutoPostBack `Boolean`

Gets or sets a bool value indicating whether the RadButton control automatically posts back to the server when clicked.

###  Text `String`

Gets or sets the text displayed in the RadButton control.

###  Value `String`

Gets or sets an optional Value of the RadButton control.

###  ReadOnly `Boolean`

Gets or sets a bool value indicating whether the RadButton control is in a read-only mode.

###  UseSubmitBehavior `Boolean`

Gets or sets a value indicating whether the RadButton control uses the client browser's submit mechanism or the ASP.NET postback mechanism.

###  EnableBrowserButtonStyle `Boolean`

Gets or sets a bool value indicating whether the client browser's default styling will be applied to the RadButton control.
            When this property is set to true, the control will look like standard HTML input of type="button" or type="submit",
            with the default styles applied by the client browser.
            
            Use this property when ButtonType="StandardButton".

###  Target `String`

Gets or sets the target window or frame in which to display the Web page content linked to when the RadButton control is clicked.

###  NavigateUrl `String`

Gets or sets the URL to link to when the RadButton control is clicked.

###  HoveredCssClass `String`

Gets or sets the CSS class applied to the RadButton control when the mouse pointer is over the control.

###  PressedCssClass `String`

Gets or sets the CSS class applied to the RadButton control when the control is pressed.

###  ReadOnlyCssClass `Boolean`

Gets or sets the CSS class applied to the RadButton control when it is in ReadOnly mode. The  property is set to true.

###  ToolTip `String`

Gets or sets the text that will be displayed in the tooltip of the RadButton control when it is hovered.

###  CssClass `String`

Gets or sets the CSS class rendered by the RadButton control on the client.

###  DisabledButtonCssClass `String`

Gets or sets the CSS class applied to the RadButton control when it is in a disabled state.

###  Height `Unit`

Gets or sets the height of the RadButton control.

###  Width `Unit`

Gets or sets the width of the RadButton control.

###  AccessKey `String`

Gets or sets the accessKey of the RadButton control.

###  EnableSplitButton `Boolean`

Gets or sets a bool value indicating whether an additional button (besides the primary button) will be rendered in the RadButton control.

###  SplitButtonPosition `ButtonPosition`

Gets or sets the position (relative to the RadButton's text) of the split button.

###  SplitButtonCssClass `String`

Gets or sets the CSS class applied to the SplitButton of the RadButton control.

###  ButtonType `RadButtonType`

Gets or sets the type of the button. RadButtonType:StandardButton(default), LinkButton and ToggleButton.

###  ToggleType `ButtonToggleType`

Gets or sets the toggle type of the RadButton control when used as a toggle button.
            The Default is ButtonToggleType='None'.

###  Checked `Boolean`

Gets or sets a bool value indicating whether the RadButton control is checked.

###  GroupName `String`

Gets or sets the name of the group the RadButton control, configured as a radio button (ToggleType='Radio'), belongs to.

###  UniqueGroupName `String`

###  SelectedToggleState `RadButtonToggleState`

Gets the currently selected ToggleState of the RadButton control when used as a custom toggle button.

###  SelectedToggleStateIndex `RadButtonToggleState`

Gets or sets the index of the currently selected ToggleState of the RadButton control, when used as a custom toggle button.

###  SingleClick `Boolean`

Gets or sets a bool value indicating whether the RadButton control will be immediately disabled after the user has clicks it. (i.e. enables/disables "Single Click" functionality)

###  SingleClickText `String`

Gets or sets the text displayed in the RadButton control after the button is being clicked and disabled. (i.e. the text used for the 'Single Click' functionality)

###  SupportsRenderingMode `Boolean`

###  TagKey `HtmlTextWriterTag`

###  CssClassFormatString `String`

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
            HTML 5/CSS 3 html and css.

#### Remarks
Lightweight rendering mode might change the outlook of the component in some older browsers
            that don't support CSS3/HTML5.

###  ResolvedRenderMode `RenderMode`

Returns resolved RenderMode should the original value was Auto

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin 
            and will be modified in AddAttributesToRender()

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  ScriptManager `ScriptManager`

###  RadScriptManager `ScriptManager`

## Methods

###  DescribeComponent

#### Returns

`System.Void` 

###  LoadClientState

#### Returns

`System.Void` 

###  ControlPreRender

#### Returns

`System.Void` 

###  CreateControlRenderer

#### Returns

`Telerik.Web.UI.IRenderer` 

###  AddAttributesToRender

Adds the attributes of the RadButton control to the output stream for rendering on the client.

#### Parameters

#### writer `System.Web.UI.HtmlTextWriter`

An HtmlTextWriter that contains the output stream to render on the client.

#### Returns

`System.Void` 

###  RenderContents

#### Returns

`System.Void` 

###  GetPostbackEventReference

Creates a PostBackOptions object that represents the RadButton control's postback behavior, and returns the client script 
            generated as a result of the PostBackOptions.

#### Returns

`System.String` The client script that represents the RadButton control's PostBackOptions.

###  GetPostBackOptions

Creates a PostBackOptions object that represents the RadButton control's postback behavior.

#### Returns

`System.Web.UI.PostBackOptions` A PostBackOptions that represents the RadButton control's postback behavior.

###  OnClick

Raises the Click event of the RadButton control.

#### Parameters

#### e `Telerik.Web.UI.ButtonClickEventArgs`

A ButtonClickEventArgs that contains the event data.

#### Returns

`System.Void` 

###  OnCommand

Raises the Command event of the RadButton control.

#### Parameters

#### e `Telerik.Web.UI.ButtonCommandEventArgs`

A ButtonCommandEventArgs that contains the event data.

#### Returns

`System.Void` 

###  OnCheckedChanged

Raises the CheckedChanged event of the RadButton control.

#### Parameters

#### e `System.EventArgs`

#### Returns

`System.Void` 

###  OnToggleStateChanged

Raises the ToggleStateChaned event of the RadButton control.

#### Parameters

#### e `Telerik.Web.UI.ButtonToggleStateChangedEventArgs`

#### Returns

`System.Void` 

###  RaisePostBackEvent

Raises events for the RadButton control when it posts back to the server.

#### Parameters

#### eventArgument `System.String`

The argument for the event.

#### Returns

`System.Void` 

###  LoadPostData

#### Returns

`System.Boolean` 

###  RaisePostDataChangedEvent

Invokes the OnCheckedChanged and OnToggleStateChanged methods,
            when the Checked and SelectedToggleStateIndex properties of the RadButton control have changed.

#### Returns

`System.Void` 

###  LoadViewState

#### Returns

`System.Void` 

###  SaveViewState

#### Returns

`System.Object` 

###  TrackViewState

#### Returns

`System.Void` 

###  ClearSelection

Clears out the list selection and sets the Selected property of all ToggleState objects to false.

#### Returns

`System.Void` 

###  SetSelectedToggleStateByValue

Sets the selected state by provided value.If multiple ToggleStates have equal value the first one will be selected.If ToggleState with the provided value is not registered the current ToggleState will not be changed.

#### Parameters

#### value `System.String`

Value of the ToggleState to be selected

#### Returns

`System.Void` 

###  SetSelectedToggleStateByText

Sets the selected state by provided value.If multiple ToggleStates have equal value the first one will be selected.If ToggleState with the provided value is not registered the current ToggleState will not be changed.

#### Parameters

#### text `System.String`

Text of the ToggleState to be selected

#### Returns

`System.Void` 

###  FindToggleStateByValue

Find a RadButton's ToggleState by the value of its Value property

#### Parameters

#### value `System.String`

Value of the ToggleState

#### Returns

`Telerik.Web.UI.RadButtonToggleState` 

###  FindToggleStateByText

Find a RadButton's ToggleState by the value of its Text property

#### Parameters

#### text `System.String`

Text of the ToggleState

#### Returns

`Telerik.Web.UI.RadButtonToggleState` 

###  DescribeClientProperties

#### Returns

`System.Void` 

###  DescribeClientEvents

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

###  DescribeProperty

#### Returns

`System.Void` 

###  DescribeIDReferenceProperty

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

