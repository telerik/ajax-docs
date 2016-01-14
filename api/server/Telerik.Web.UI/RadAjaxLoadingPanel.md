---
title: Telerik.Web.UI.RadAjaxLoadingPanel
page_title: Telerik.Web.UI.RadAjaxLoadingPanel
description: Telerik.Web.UI.RadAjaxLoadingPanel
---

# Telerik.Web.UI.RadAjaxLoadingPanel

Telerik.Web.UI.RadAjaxPanel is one of the two major controls of the Telerik RadAjax suite. 
            The other one is Telerik.Web.UI.RadAjaxManager . The Telerik.Web.UI.RadAjaxPanel control provides the easiest
            way to AJAX-enable ASP.NET web control(s). To do this you simply need to place
            the controls that you want ajaxified into Telerik.Web.UI.RadAjaxPanel and Telerik RadAjax takes
            care of the rest. Best of all this happens transparently to the framework and the
            controls that are being ajaxified.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* System.Web.UI.WebControls.Panel
* Telerik.Web.UI.RadAjaxLoadingPanel : IControl, IControlResolver, IScriptControl, ISkinnableControl

## Properties

###  AnimationDuration `Int32`

Gets or sets animation duration in milliseconds. Default value is 0, i.e. no animation.

###  BackgroundPosition `AjaxLoadingPanelBackgroundPosition`

Gets or sets the position of the skin background image. Default value is center.

###  BackgroundTransparency `Int32`

Gets or sets transparency of the loading panel without affecting the icon. Default value is 0 percents.

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

###  EnableSkinTransparency `Int32`

Defines whether the transparency set in the skin will be applied.
            Default value is True.

###  InitialDelayTime `Int32`

Gets or sets a value specifying the delay in milliseconds, after which the
            RadAjaxLoadingPanel will be shown. If the request returns before this time,
            the RadAjaxLoadingPanel will not be shown.

###  IsSkinSet `String`

For internal use.

###  IsSticky `Boolean`

The IsSticky property of the Loading Panel controls where
                the panel will appear during the AJAX request. If this property is set to
                true, the panel will appear where you have placed it on your
                webform. If this property is set to false, the Loading panel will
                appear on the place of the updated control(s).By default this property is set to false.

###  MinDisplayTime `Int32`

Gets or sets a value that specifies the minimum time in milliseconds that the
            RadAjaxLoadingPanel will last. The control will not be updated before this
            period has passed even if the request returns. This will ensure more smoother interface
            for your page.

###  Modal `Boolean`

Gets or sets the value, indicating whether the loading panel will be displayed over the entire visible area of the page.

###  OnClientHiding `String`

###  OnClientShowing `String`

###  Overlay `Boolean`

Gets or sets a value indicating whether the loading panel will create an overlay element to ensure popups are over a flash element or Java applet.

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
            an empty string, otherwise returns Skin.

###  Skin `String`

Gets or sets the skin name for the control user interface.

#### Remarks
If this property is not set, the control will not use any skin (backwards compatibility)
            If EnableEmbeddedSkins is set to false, the control will not register a skin CSS file automatically.

###  Transparency `Int32`

Gets or sets transparency in percentage. Default value is 0 percents.

###  ZIndex `Int32`

Gets or sets the z-index of the loading panel. Default value is 90,000.

## Methods

###  GetEmbeddedSkinNames

Returns the names of all embedded skins. Used by Telerik.Web.Examples.

#### Returns

`System.Collections.Generic.List`1` 

###  PreferredRenderMode

For internal use only

#### Parameters

#### browser `Telerik.Web.UI.RenderModeBrowserAdaptor`

RenderModeBrowserAdaptor instance

#### Returns

`Telerik.Web.UI.RenderMode` Returns the preferred RenderMode

###  RegisterCssReferences

Registers the CSS references

#### Returns

`System.Void` 

