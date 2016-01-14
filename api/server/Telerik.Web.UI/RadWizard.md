---
title: Telerik.Web.UI.RadWizard
page_title: Telerik.Web.UI.RadWizard
description: Telerik.Web.UI.RadWizard
---

# Telerik.Web.UI.RadWizard

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.RadWebControl : IControl, IControlResolver, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.RadWizard : IPostBackEventHandler

## Properties

###  ActiveStep `RadWizardStep`

Gets the active step.

###  ActiveStepIndex `RadWizardStep`

Gets or sets the index of the selected RadWizardStep.

###  ClickActiveStep `RadWizardStep`

Gets or sets the click active step.

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin 
            and will be modified in AddAttributesToRender()

###  Culture `CultureInfo`

Gets or sets the selected culture. Localization strings will be loaded based on this value.

###  DisplayCancelButton `Boolean`

Gets or sets the display cancel button.

###  DisplayNavigationBar `Boolean`

Gets or sets the display navigationBar.

###  DisplayNavigationButtons `Boolean`

Gets or sets the display navigation buttons.

###  DisplayProgressBar `Boolean`

Gets or sets the display progress bar.

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

###  ImagePosition `RadWizardImagePostion`

Gets or sets a value indicating the position of the image within the step.

###  IsSkinSet `String`

For internal use.

###  Localization `WizardButtons`

Gets the localization.

###  LocalizationPath `WizardButtons`

Gets or sets a value indicating where RadWizard will look for its .resx localization files.

###  NavigationBarPosition `RadWizardNavigationBarPosition`

Gets or sets the position of the NavigationBar.

###  NavigationButtonsPosition `RadWizardNavigationButtonsPosition`

Gets or sets the position of the navigation buttons.

###  OnClientButtonClicked `String`

The client-side event that is fired when some button is clicked.

###  OnClientButtonClicking `String`

The client-side cancelable event that is fired when some button is clicked.

###  OnClientLoad `String`

Gets or sets a value indicating the client-side event handler that is called
            after the RadWizard client-side object is initialized.

#### Remarks
If specified, the OnClienLoad client-side event handler is
                called after the wizard is fully initialized on the client.A single parameter - the wizard client object - is passed to the
                handler.This event cannot be cancelled.

###  ProgressBarPosition `RadWizardProgressBarPosition`

Gets or sets the position of the ProgressBar.

###  ProgressPercent `Int32`

Gets or sets the position of the ProgressPercent.

###  RegisterWithScriptManager `Boolean`

Gets or sets the value, indicating whether to register with the ScriptManager control on the page.

#### Remarks
If RegisterWithScriptManager is set to false the control can be rendered on the page using Web Services or normal callback requests/page methods.

###  RenderedSteps `RadWizardRenderedSteps`

Gets or sets a value indicating whether tabs should postback when clicked.

#### Remarks
RadWizard will postback provided one of the following conditions is met:
            	
            			The RenderedSteps property is set to true.

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

###  Skin `String`

Gets or sets the skin name for the control user interface.

#### Remarks
If this property is not set, the control will render using the skin named "Default".
            If EnableEmbeddedSkins is set to false, the control will not render skin.

###  WizardSteps `RadWizardStepCollection`

Gets the wizard steps.

## Methods

###  AddParsedSubObject

#### Returns

`System.Void` 

###  ApplyConditionalRendering

Use this from RenderContents of the inheritor

#### Returns

`System.Void` 

###  ControlPreRender

Code moved into this method from OnPreRender to make sure it executed when the framework skips OnPreRender() for some reason

#### Returns

`System.Void` 

###  GetEmbeddedSkinNames

Returns the names of all embedded skins. Used by Telerik.Web.Examples.

#### Returns

`System.Collections.Generic.List`1` 

###  GetHistory

Gets a list with the active steps that in the order they have been activated.

#### Returns

`System.Collections.ICollection` 

###  GetPreviousStepIndex

Gets the index of the previous step.

#### Returns

`System.Int32` 

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

###  OnActiveStepChanged

Raises the  event.

#### Returns

`System.Void` 

###  OnCancelButtonClick

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.WizardEventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  OnFinishButtonClick

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.WizardEventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  OnNavigationBarButtonClick

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.WizardEventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  OnNextButtonClick

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.WizardEventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  OnPreviousButtonClick

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.WizardEventArgs`

The  instance containing the event data.

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

###  RenderBeginTag

Renders the HTML opening tag of the control to the specified writer.
            This method is used primarily by control developers.

#### Parameters

#### writer `System.Web.UI.HtmlTextWriter`

A  that represents
            the output stream to render HTML content on the client.

#### Returns

`System.Void` 

###  SaveClientState

Saves the client state data

#### Returns

`System.String` 

