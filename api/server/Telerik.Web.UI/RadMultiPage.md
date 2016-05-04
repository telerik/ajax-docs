---
title: Telerik.Web.UI.RadMultiPage
page_title: Telerik.Web.UI.RadMultiPage
description: Telerik.Web.UI.RadMultiPage
---

# Telerik.Web.UI.RadMultiPage

A control which contains Telerik.Web.UI.RadPageView controls. Only one page view can be visible at a time.

#### Remarks
RadMultiPage is usually used with RadTabStrip to create paged data entry forms. Use the P:Telerik.Web.UI.RadTabStrip.MultiPageID property to associate a RadMultiPage control with RadTabStrip.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.RadWebControl : IControl, IControlResolver, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.RadMultiPage

## Properties

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin 
            and will be modified in AddAttributesToRender()

###  EnableAjaxSkinRendering `String`

Gets or sets the value, indicating whether to render the skin CSS files during Ajax requests

#### Remarks
If EnableAjaxSkinRendering is set to false you will have to register the needed control base CSS file by hand when adding/showing the control with Ajax.

###  EnableAriaSupport `Boolean`

When set to true enables support for WAI-ARIA

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

###  PageViews `RadPageViewCollection`

Gets a RadPageViewCollection that represents the RadMultiPage
            	controls int the current RadMultiPage instance.

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

###  RenderSelectedPageOnly `Boolean`

Gets or sets a value indicating whether to render only the currently selected RadMultiPage.

#### Remarks
Use the RenderSelectedPageOnly to make the RadMultiPage control render only the selected RadMultiPage.
            	This can save output size because by default all pageviews are rendered. If RenderSelectedPageOnly is set to true 
            	RadMultiPage will make a request to the server in order to change the selected pageview.

###  ResolvedRenderMode `RenderMode`

Returns resolved RenderMode should the original value was Auto

###  RuntimeSkin `String`

Gets the real skin name for the control user interface. If Skin is not set, returns
            "Default", otherwise returns Skin.

###  ScrollBars `MultiPageScrollBars`

Gets or sets the visibility and position of scroll bars in the RadMultiPage control.

#### Remarks
Use this property to customize the visibility and position of scroll bars. By default any overflowing content is visible.

###  SelectedIndex `Int32`

Gets or sets the index of the selected RadMultiPage.

###  SelectedPageView `RadPageView`

Gets the selected pageview.

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

###  FindPageViewByID

Finds a RadPageView with the specified ID.

#### Parameters

#### id `System.String`

The ID of the RadPageView

#### Returns

`Telerik.Web.UI.RadPageView` A RadPageView with the specified ID. Null (Nothing) is returned if there is no
            	RadPageView with the specified ID.

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

