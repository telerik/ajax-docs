---
title: Telerik.Web.UI.RadColorPicker
page_title: Telerik.Web.UI.RadColorPicker
description: Telerik.Web.UI.RadColorPicker
---

# Telerik.Web.UI.RadColorPicker

RadColorPicker class

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.RadWebControl
* Telerik.Web.UI.RadColorPicker

## Properties

###  Items `ColorPickerItemCollection`

Collection of the color picker items.

###  Preset `ColorPreset`

Get/Set the preset colors of the color picker.

###  SelectedColor `Color`

Get/Set the selected color of the ColorPicker.

###  Columns `Int32`

Get/Set the number of the columns in the palette.

###  AutoPostBack `Boolean`

Determines whether the control causes a postback on value change.

###  ShowEmptyColor `Boolean`

Determines whether to show the None color selection.

###  ShowIcon `Boolean`

Determines whether to show the color picker as an icon, which when clicked opens the palette.

###  PreviewColor `Boolean`

Determines whether to preview the color which has been selected.

###  Localization `RadColorPickerLocalization`

Gets or sets the localization strings for the RadColorPicker.

###  PickColorText `String`

Gets or sets the tooltip of the icon.

###  CurrentColorText `String`

Gets or sets the text in the icon.

###  NoColorText `String`

Gets or sets the text for the no color box.

###  PaletteModes `PaletteModes`

Gets or sets a value indicating the visible modes of the RadColorPicker's palette.

###  Overlay `Boolean`

Gets or sets a value indicating whether the RadColorPicker will create an overlay element.

###  KeepInScreenBounds `Boolean`

Gets or sets a value indicating whether the RadColorPicker popup will stay in the visible viewport of the browser window.

###  ShowRecentColors `Boolean`

Gets or sets a value indicating whether the RadColorPicker will display an array of recently used colors.

###  EnableCustomColor `Boolean`

Gets or sets a value indicating whether the RadColorPicker will display a button for choosing a custom color in the WebPalette tab.

###  OnClientLoad `String`

Gets or sets a value indicating the client-side event handler that is called when
            the RadColorPicker control is initialized.

#### Remarks
Two parameters are passed to the handler:sender, the RadColorPicker object.args.This event cannot be cancelled.

###  OnClientColorPreview `String`

Gets or sets a value indicating the client-side event handler that is called when a user previews a color.

#### Remarks
Two parameters are passed to the handler:sender, the RadColorPicker that fired the event.args.This event cannot be cancelled.

###  OnClientColorChanging `String`

Gets or sets a value indicating the client-side event handler that is called 
            just before the value of the color picker is changed.

#### Remarks
If specified, the OnClientColorChangingclient-side event handler that is called 
            just before the value of the color picker is changed. Two parameters are passed to the handler:sender, the RadColorPicker object.args.This event can be cancelled.

###  OnClientColorChange `String`

Gets or sets a value indicating the client-side event handler that is called 
            while the value of the color picker has been changed.

#### Remarks
If specified, the OnClientColorChangeclient-side event handler that is called 
            when the value of the color picker has been changed. Two parameters are passed to the handler:sender, the RadColorPicker object.args.This event cannot be cancelled.

###  OnClientPopUpShow `String`

Gets or sets a value indicating the client-side event handler that is called 
            when the popup element of the RadColorPicker (in case ShowIcon=true) shows.

#### Remarks
If specified, the OnClientPopUpShowclient-side event handler is called when the value of the color picker has been changed.
                    Two parameters are passed to the handler:sender, the RadColorPicker object.args.This event cannot be cancelled.

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

###  OnColorChanged

Gets or sets a value indicating the server-side event handler that is called 
            when the value of the ColorPicker has been changed.

#### Remarks
If specified, the OnColorChangedevent handler that is called 
            when the value of the ColorPicker has been changed. Two parameters are passed to the handler:sender, the RadColorPicker object.args.This event cannot be cancelled.

#### Returns

`System.Void` 

###  GetDefaultColors

Retrieves all the colors from the Default preset.

#### Returns

`Telerik.Web.UI.ColorPickerItemCollection` A ColorPickerItemCollection collection with the colors from the Default preset.

###  GetStandardColors

Retrieves all the colors from the Standard preset.

#### Returns

`Telerik.Web.UI.ColorPickerItemCollection` A ColorPickerItemCollection collection with the colors from the Standard preset.

###  GetOfficeColors

Retrieves all the colors from the Office preset.

#### Returns

`Telerik.Web.UI.ColorPickerItemCollection` A ColorPickerItemCollection collection with the colors from the Office preset.

###  GetApexColors

Retrieves all the colors from the Apex preset.

#### Returns

`Telerik.Web.UI.ColorPickerItemCollection` A ColorPickerItemCollection collection with the colors from the Apex preset.

###  GetAspectColors

Retrieves all the colors from the Aspect preset.

#### Returns

`Telerik.Web.UI.ColorPickerItemCollection` A ColorPickerItemCollection collection with the colors from the Aspect preset.

###  GetCivicColors

Retrieves all the colors from the Civic preset.

#### Returns

`Telerik.Web.UI.ColorPickerItemCollection` A ColorPickerItemCollection collection with the colors from the Civic preset.

###  GetConcourseColors

Retrieves all the colors from the Concourse preset.

#### Returns

`Telerik.Web.UI.ColorPickerItemCollection` A ColorPickerItemCollection collection with the colors from the Concourse preset.

###  GetEquityColors

Retrieves all the colors from the Equity preset.

#### Returns

`Telerik.Web.UI.ColorPickerItemCollection` A ColorPickerItemCollection collection with the colors from the Equity preset.

###  GetFlowColors

Retrieves all the colors from the Flow preset.

#### Returns

`Telerik.Web.UI.ColorPickerItemCollection` A ColorPickerItemCollection collection with the colors from the Flow preset.

###  GetFoundryColors

Retrieves all the colors from the Foundry preset.

#### Returns

`Telerik.Web.UI.ColorPickerItemCollection` A ColorPickerItemCollection collection with the colors from the Foundry preset.

###  GetMedianColors

Retrieves all the colors from the Median preset.

#### Returns

`Telerik.Web.UI.ColorPickerItemCollection` A ColorPickerItemCollection collection with the colors from the Median preset.

###  GetMetroColors

Retrieves all the colors from the Metro preset.

#### Returns

`Telerik.Web.UI.ColorPickerItemCollection` A ColorPickerItemCollection collection with the colors from the Metro preset.

###  GetModuleColors

Retrieves all the colors from the Module preset.

#### Returns

`Telerik.Web.UI.ColorPickerItemCollection` A ColorPickerItemCollection collection with the colors from the Module preset.

###  GetOpulentColors

Retrieves all the colors from the Opulent preset.

#### Returns

`Telerik.Web.UI.ColorPickerItemCollection` A ColorPickerItemCollection collection with the colors from the Opulent preset.

###  GetOrielColors

Retrieves all the colors from the Oriel preset.

#### Returns

`Telerik.Web.UI.ColorPickerItemCollection` A ColorPickerItemCollection collection with the colors from the Oriel preset.

###  GetOriginColors

Retrieves all the colors from the Origin preset.

#### Returns

`Telerik.Web.UI.ColorPickerItemCollection` A ColorPickerItemCollection collection with the colors from the Origin preset.

###  GetPaperColors

Retrieves all the colors from the Paper preset.

#### Returns

`Telerik.Web.UI.ColorPickerItemCollection` A ColorPickerItemCollection collection with the colors from the Paper preset.

###  GetSolsticeColors

Retrieves all the colors from the Solstice preset.

#### Returns

`Telerik.Web.UI.ColorPickerItemCollection` A ColorPickerItemCollection collection with the colors from the Solstice preset.

###  GetTechnicColors

Retrieves all the colors from the Technic preset.

#### Returns

`Telerik.Web.UI.ColorPickerItemCollection` A ColorPickerItemCollection collection with the colors from the Technic preset.

###  GetTrekColors

Retrieves all the colors from the Trek preset.

#### Returns

`Telerik.Web.UI.ColorPickerItemCollection` A ColorPickerItemCollection collection with the colors from the Trek preset.

###  GetUrbanColors

Retrieves all the colors from the Urban preset.

#### Returns

`Telerik.Web.UI.ColorPickerItemCollection` A ColorPickerItemCollection collection with the colors from the Urban preset.

###  GetVerveColors

Retrieves all the colors from the Verve preset.

#### Returns

`Telerik.Web.UI.ColorPickerItemCollection` A ColorPickerItemCollection collection with the colors from the Verve preset.

###  GetGrayscaleColors

Retrieves all the colors from the Grayscale preset.

#### Returns

`Telerik.Web.UI.ColorPickerItemCollection` A ColorPickerItemCollection collection with the colors from the Grayscale preset.

###  GetGrayscaleColorsDefaultPresetOrder

Retrieves all the colors from the Grayscale preset.

#### Returns

`Telerik.Web.UI.ColorPickerItemCollection` A ColorPickerItemCollection collection with the colors from the Grayscale preset.

###  GetReallyWebSafeColors

Retrieves all the colors from the ReallyWebSafe preset.

#### Returns

`Telerik.Web.UI.ColorPickerItemCollection` A ColorPickerItemCollection collection with the colors from the ReallyWebSafe preset.

###  GetWeb216Colors

Retrieves all the colors from the Web216 preset.

#### Returns

`Telerik.Web.UI.ColorPickerItemCollection` A ColorPickerItemCollection collection with the colors from the Web216 preset.

###  GetWeb216ColorsDefaultPresetOrder

Retrieves all the colors from the Web216 preset, used in the Default preset.

#### Returns

`Telerik.Web.UI.ColorPickerItemCollection` A ColorPickerItemCollection collection with the colors from the Web216 preset, used in the Default preset.

###  AddAttributesToRender

#### Returns

`System.Void` 

###  ControlPreRender

#### Returns

`System.Void` 

###  CreateChildControls

#### Returns

`System.Void` 

###  RenderContents

#### Returns

`System.Void` 

###  IsTouchSkin

#### Returns

`System.Boolean` 

###  IsSkin

#### Returns

`System.Boolean` 

###  LoadClientState

#### Returns

`System.Void` 

###  LoadViewState

Restores view-state information from a previous request that was saved with the System.Web.UI.WebControls.WebControl.SaveViewState() method.

#### Parameters

#### state `System.Object`

An object that represents the control state to restore.

#### Returns

`System.Void` 

###  SaveViewState

Saves any state that was modified after the System.Web.UI.WebControls.Style.TrackViewState() method was invoked.

#### Returns

`System.Object` An object that contains the current view state of the control; otherwise, if there is no view state associated with the control, null.

###  TrackViewState

Causes the control to track changes to its view state so they can be stored in the object's System.Web.UI.Control.ViewState property.

#### Returns

`System.Void` 

###  DescribeComponent

#### Returns

`System.Void` 

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

