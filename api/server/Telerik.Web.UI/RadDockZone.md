---
title: Telerik.Web.UI.RadDockZone
page_title: Telerik.Web.UI.RadDockZone
description: Telerik.Web.UI.RadDockZone
---

# Telerik.Web.UI.RadDockZone

RadDockZone is a control which represents a virtual placeholder, where
            RadDock controls could be docked.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.RadWebControl : IControl, IControlResolver, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.RadDockZone

## Properties

###  AllowedDocks `DockCollection`

Specifies the UniqueNames of the RadDock controls, that will be allowed to dock in the zone.

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin
            and will be modified in AddAttributesToRender()

###  Docks `DockCollection`

Gets a collection of the RadDock objects inside the RadDockZone.
            It will return an empty collection if there are no RadDocks in the zone.

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

###  FitDocks `DockCollection`

Gets or sets a value, indicating whether the RadDockZone will set the size
            of the docked RadDock controls to 100% depending on its Orientation.

#### Remarks
When Orientation is Horizontal, the Height of the docked RadDock controls
            will become 100%, otherwise the Width will become 100%.

###  HighlightedCssClass `String`

Gets or sets a CSS class name, which will be applied when the RadDockZone is highlighted.
            If this property is not set, the control will not have a highlighted style.

###  IsSkinSet `String`

For internal use.

###  MinHeight `Unit`

Gets or sets the minimum height of the RadDockZone control. The default value is "10px".

###  MinWidth `Unit`

Gets or sets the minimum width of the RadDockZone control. The default value is "10px".

###  Orientation `Orientation`

Gets or sets a value that specifies the dimension in which docked RadDock controls are arranged.
            If this property is not set the orientation will be vertical.

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

###  Skin `String`

Gets or sets the skin name for the control user interface.

#### Remarks
If this property is not set, the control will render using the skin named "Default".
            If EnableEmbeddedSkins is set to false, the control will not render skin.

###  UniqueName `String`

Gets or sets the unique name of the control. If this property is not set, the control ID will be
            used instead. RadDockLayout will throw an exception if it finds two RadDockZone controls with
            the same UniqueName.

## Methods

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

###  GetUniqueName

Returns the unique name for the dock, based on the UniqueName and
            the ID properties.

#### Returns

`System.String` A string, containing the UniqueName property of the dock, or its
            ID, if the UniqueName property is not set.

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

