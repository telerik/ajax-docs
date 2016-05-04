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
* Telerik.Web.UI.RadWebControl : IControl, IControlResolver, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.RadColorPicker : IPostBackEventHandler

## Properties

###  AutoPostBack `Boolean`

Determines whether the control causes a postback on value change.

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  Columns `Int32`

Get/Set the number of the columns in the palette.

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin 
            and will be modified in AddAttributesToRender()

###  CurrentColorText `String`

Gets or sets the text in the icon.

###  EnableAjaxSkinRendering `String`

Gets or sets the value, indicating whether to render the skin CSS files during Ajax requests

#### Remarks
If EnableAjaxSkinRendering is set to false you will have to register the needed control base CSS file by hand when adding/showing the control with Ajax.

###  EnableCustomColor `Boolean`

Gets or sets a value indicating whether the RadColorPicker will display a button for choosing a custom color in the WebPalette tab.

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

###  IsSkinSet `String`

For internal use.

###  Items `ColorPickerItemCollection`

Collection of the color picker items.

###  KeepInScreenBounds `Boolean`

Gets or sets a value indicating whether the RadColorPicker popup will stay in the visible viewport of the browser window.

###  Localization `RadColorPickerLocalization`

Gets or sets the localization strings for the RadColorPicker.

###  NoColorText `String`

Gets or sets the text for the no color box.

###  OnClientColorChange `String`

Gets or sets a value indicating the client-side event handler that is called 
            while the value of the color picker has been changed.

#### Remarks
If specified, the OnClientColorChangeclient-side event handler that is called 
            when the value of the color picker has been changed. Two parameters are passed to the handler:sender, the RadColorPicker object.args.This event cannot be cancelled.

###  OnClientColorChanging `String`

Gets or sets a value indicating the client-side event handler that is called 
            just before the value of the color picker is changed.

#### Remarks
If specified, the OnClientColorChangingclient-side event handler that is called 
            just before the value of the color picker is changed. Two parameters are passed to the handler:sender, the RadColorPicker object.args.This event can be cancelled.

###  OnClientColorPreview `String`

Gets or sets a value indicating the client-side event handler that is called when a user previews a color.

#### Remarks
Two parameters are passed to the handler:sender, the RadColorPicker that fired the event.args.This event cannot be cancelled.

###  OnClientLoad `String`

Gets or sets a value indicating the client-side event handler that is called when
            the RadColorPicker control is initialized.

#### Remarks
Two parameters are passed to the handler:sender, the RadColorPicker object.args.This event cannot be cancelled.

###  OnClientPopUpShow `String`

Gets or sets a value indicating the client-side event handler that is called 
            when the popup element of the RadColorPicker (in case ShowIcon=true) shows.

#### Remarks
If specified, the OnClientPopUpShowclient-side event handler is called when the value of the color picker has been changed.
                    Two parameters are passed to the handler:sender, the RadColorPicker object.args.This event cannot be cancelled.

###  Overlay `Boolean`

Gets or sets a value indicating whether the RadColorPicker will create an overlay element.

###  PaletteModes `PaletteModes`

Gets or sets a value indicating the visible modes of the RadColorPicker's palette.

###  PickColorText `String`

Gets or sets the tooltip of the icon.

###  Preset `ColorPreset`

Get/Set the preset colors of the color picker.

###  PreviewColor `Boolean`

Determines whether to preview the color which has been selected.

###  RegisterWithScriptManager `Boolean`

Gets or sets the value, indicating whether to register with the ScriptManager control on the page.

#### Remarks
If RegisterWithScriptManager is set to false the control can be rendered on the page using Web Services or normal callback requests/page methods.

###  RenderMode `RenderMode`

Specifies the rendering mode of the control. Setting the mode to Lightweight will yield
            HTML 5/CSS 3 html and css.

#### Remarks
Lightweight rendering mode might change the outlook of the component in some older browsers
            that don't support CSS3/HTML5.

###  ResolvedRenderMode `RenderMode`

Returns resolved RenderMode should the original value was Auto

###  RuntimeSkin `String`

Gets the real skin name for the control user interface. If Skin is not set, returns
            "Default", otherwise returns Skin.

###  SelectedColor `Color`

Get/Set the selected color of the ColorPicker.

###  ShowEmptyColor `Boolean`

Determines whether to show the None color selection.

###  ShowIcon `Boolean`

Determines whether to show the color picker as an icon, which when clicked opens the palette.

###  ShowRecentColors `Boolean`

Gets or sets a value indicating whether the RadColorPicker will display an array of recently used colors.

###  Skin `String`

Gets or sets the skin name for the control user interface.

#### Remarks
If this property is not set, the control will render using the skin named "Default".
            If EnableEmbeddedSkins is set to false, the control will not render skin.

## Methods

###  ApplyConditionalRendering

Use this from RenderContents of the inheritor

#### Returns

`System.Void` 

###  ControlPreRender

Code moved into this method from OnPreRender to make sure it executed when the framework skips OnPreRender() for some reason

#### Returns

`System.Void` 

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

###  GetDefaultColors

Retrieves all the colors from the Default preset.

#### Returns

`Telerik.Web.UI.ColorPickerItemCollection` A ColorPickerItemCollection collection with the colors from the Default preset.

###  GetEmbeddedSkinNames

Returns the names of all embedded skins. Used by Telerik.Web.Examples.

#### Returns

`System.Collections.Generic.List`1` 

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

###  GetGrayscaleColors

Retrieves all the colors from the Grayscale preset.

#### Returns

`Telerik.Web.UI.ColorPickerItemCollection` A ColorPickerItemCollection collection with the colors from the Grayscale preset.

###  GetGrayscaleColorsDefaultPresetOrder

Retrieves all the colors from the Grayscale preset.

#### Returns

`Telerik.Web.UI.ColorPickerItemCollection` A ColorPickerItemCollection collection with the colors from the Grayscale preset.

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

###  GetOfficeColors

Retrieves all the colors from the Office preset.

#### Returns

`Telerik.Web.UI.ColorPickerItemCollection` A ColorPickerItemCollection collection with the colors from the Office preset.

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

###  GetReallyWebSafeColors

Retrieves all the colors from the ReallyWebSafe preset.

#### Returns

`Telerik.Web.UI.ColorPickerItemCollection` A ColorPickerItemCollection collection with the colors from the ReallyWebSafe preset.

###  GetSolsticeColors

Retrieves all the colors from the Solstice preset.

#### Returns

`Telerik.Web.UI.ColorPickerItemCollection` A ColorPickerItemCollection collection with the colors from the Solstice preset.

###  GetStandardColors

Retrieves all the colors from the Standard preset.

#### Returns

`Telerik.Web.UI.ColorPickerItemCollection` A ColorPickerItemCollection collection with the colors from the Standard preset.

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

###  GetWeb216Colors

Retrieves all the colors from the Web216 preset.

#### Returns

`Telerik.Web.UI.ColorPickerItemCollection` A ColorPickerItemCollection collection with the colors from the Web216 preset.

###  GetWeb216ColorsDefaultPresetOrder

Retrieves all the colors from the Web216 preset, used in the Default preset.

#### Returns

`Telerik.Web.UI.ColorPickerItemCollection` A ColorPickerItemCollection collection with the colors from the Web216 preset, used in the Default preset.

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

