---
title: Telerik.Web.UI.RadBreadcrumb
page_title: Telerik.Web.UI.RadBreadcrumb
description: Telerik.Web.UI.RadBreadcrumb
---

# Telerik.Web.UI.RadBreadcrumb

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.RadWebControl : IControl, IControlResolver, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.RadBreadcrumb

## Properties

###  BindToLocation `Boolean`

Indicates whether the Breadcrumb will enable/disable the binding to the location object of the browser on initialization.

###  ClientEvents `BreadcrumbClientEvents`

Defines the client events handlers.

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  ClientItemTemplate `String`

The template used to render the items in the breadcrumb.

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin 
            and will be modified in AddAttributesToRender()

###  DelimiterIcon `String`

Defines a name of an existing icon in the Kendo UI Web Font Icons. The icon will be applied as separator between the segments of the Breadcrumb path.

###  Editable `Boolean`

Indicates whether the editing functionality of the Breadcrumb will be enabled/disabled.If the option is enabled the path will be editable. Clicking in an empty area of the component will trigger editing mode. Editing mode shows an input showing the value of the component enabling the end user to type a new path.

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

###  Gap `Double`

Defines the space in pixels after the last item to stay empty.The gap value is taken into account when items overflow and continues to remain empty.

###  IsSkinSet `String`

For internal use.

###  Items `BreadcrumbItemsCollection`

Array of items to be rendered in Breadcrumb.

###  MessagesSettings `Messages`

Defines the text of the root icon title that is displayed within the Breadcrumb.

###  Navigational `Boolean`

Indicates whether the navigation functionality of the Breadcrumb will be enabled/disabled.When navigational is set to false, automatic navigation (changing url location) is disabled by default. In this state, the click event will be prevented and navigation will occur only if programmatic navigation is implemented.When navigational is set to true, the url (path) will be automatically added to the href attribute of the rendered links. In this state, the click event will trigger navigation.

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

###  RootIcon `String`

Defines a name of an existing icon in the Kendo UI Web Font Icons. The icon will be applied as the first item(root) of Breadcrumb path.The root icon is clickable and resets the value of the component.

###  RuntimeSkin `String`

Gets the real skin name for the control user interface. If Skin is not set, returns
            "Default", otherwise returns Skin.

###  Skin `String`

Gets or sets the skin name for the control user interface.

#### Remarks
If this property is not set, the control will render using the skin named "Default".
            If EnableEmbeddedSkins is set to false, the control will not render skin.

###  Value `String`

Defines the value/path of the component. Each segments is separated by a slash.

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

