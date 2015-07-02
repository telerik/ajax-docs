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
* Telerik.Web.UI.RadAjaxLoadingPanel

## Properties

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

###  EnableEmbeddedScripts `Boolean`

Gets or sets the value, indicating whether to render script references to the embedded scripts or not.

#### Remarks
If EnableEmbeddedScripts is set to false you will have to register the needed Scripts files by hand.

###  ScriptManager `ScriptManager`

###  Transparency `Int32`

Gets or sets transparency in percentage. Default value is 0 percents.

###  BackgroundTransparency `Int32`

Gets or sets transparency of the loading panel without affecting the icon. Default value is 0 percents.

###  EnableSkinTransparency `Int32`

Defines whether the transparency set in the skin will be applied.
            Default value is True.

###  ZIndex `Int32`

Gets or sets the z-index of the loading panel. Default value is 90,000.

###  BackgroundPosition `AjaxLoadingPanelBackgroundPosition`

Gets or sets the position of the skin background image. Default value is center.

###  IsSticky `Boolean`

The IsSticky property of the Loading Panel controls where
                the panel will appear during the AJAX request. If this property is set to
                true, the panel will appear where you have placed it on your
                webform. If this property is set to false, the Loading panel will
                appear on the place of the updated control(s).By default this property is set to false.

###  InitialDelayTime `Int32`

Gets or sets a value specifying the delay in milliseconds, after which the
            RadAjaxLoadingPanel will be shown. If the request returns before this time,
            the RadAjaxLoadingPanel will not be shown.

###  MinDisplayTime `Int32`

Gets or sets a value that specifies the minimum time in milliseconds that the
            RadAjaxLoadingPanel will last. The control will not be updated before this
            period has passed even if the request returns. This will ensure more smoother interface
            for your page.

###  AnimationDuration `Int32`

Gets or sets animation duration in milliseconds. Default value is 0, i.e. no animation.

###  Overlay `Boolean`

Gets or sets a value indicating whether the loading panel will create an overlay element to ensure popups are over a flash element or Java applet.

###  OnClientShowing `String`

###  OnClientHiding `String`

###  EnableAriaSupport `Boolean`

When set to true enables support for WAI-ARIA

###  Skin `String`

Gets or sets the skin name for the control user interface.

#### Remarks
If this property is not set, the control will not use any skin (backwards compatibility)
            If EnableEmbeddedSkins is set to false, the control will not register a skin CSS file automatically.

###  IsSkinSet `String`

For internal use.

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
            an empty string, otherwise returns Skin.

###  EnableAjaxSkinRendering `String`

Gets or sets the value, indicating whether to render the skin CSS files during Ajax requests

#### Remarks
If EnableAjaxSkinRendering is set to false you will have to register the needed control base CSS file by hand when adding/showing the control with Ajax.

## Methods

###  RegisterCssReferences

Registers the CSS references

#### Returns

`System.Void` 

###  RenderScriptsNoScriptManager

#### Returns

`System.Void` 

###  RenderDescriptorsNoScriptManager

#### Returns

`System.Void` 

###  GetScriptDescriptors

#### Returns

`System.Collections.Generic.IEnumerable`1` 

###  GetScriptReferences

#### Returns

`System.Collections.Generic.IEnumerable`1` 

###  GetWebResourceUrl

#### Returns

`System.String` 

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

###  DescribeComponent

#### Returns

`System.Void` 

