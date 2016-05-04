---
title: Telerik.Web.UI.RadNavigation
page_title: Telerik.Web.UI.RadNavigation
description: Telerik.Web.UI.RadNavigation
---

# Telerik.Web.UI.RadNavigation

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* System.Web.UI.WebControls.BaseDataBoundControl
* System.Web.UI.WebControls.DataBoundControl
* Telerik.Web.UI.RadDataBoundControl : IControl, IControlResolver, IFeatureGroup, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.RadNavigation : INavigationNodeContainer

## Properties

###  AriaSettings `NavigationWaiAriaSettings`

Gets the object that controls the Wai-Aria settings applied on the control's element.

###  ClientDataSourceID `String`

Gets or sets ID of ClientDataSource control that is used for client side binding

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  ClientNodeTemplate `String`

Gets or sets the template for displaying the nodes in
            RadNavigation.

###  CollapseAnimation `AnimationSettings`

Gets the settings for the animation played when the dropdown closes.

#### Remarks
Use the CollapseAnimation property to customize the expand
                    animation of RadNavigation. You can specify the
                    Type and
                    Duration.
                    To disable collapse animation effects you should set the
                    Type to
                    AnimationType.None.
                    To customize the expand animation you can use the
                    ExpandAnimation property.

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin 
            and will be modified in AddAttributesToRender()

###  DataFieldID `String`

Gets or sets the data field holding the unique identifier for a NavigationNode.

###  DataFieldParentID `String`

Gets or sets the data field holding the ID of the parent NavigationNode.

###  DataKeyNames `String[]`

Gets or sets an array of data-field names that will be used to populate the NavigationNode
                   's DataItem property which is used to populated the control's template.

#### Remarks
Note: The dataItem's properties declared in the template should be with lower case .

###  DataNavigateUrlField `String`

Gets or sets the data field holding the Navigation URL property for the currently bound NavigationNode.

###  DataTextField `String`

Gets or sets the data field holding the Text property for the currently bound NavigationNode.

###  DataTextFormatString `String`

Gets or sets a value indicating how the NavigationNode's text should be formatted.

###  EnableAjaxSkinRendering `String`

Gets or sets the value, indicating whether to render the skin CSS files during Ajax requests

#### Remarks
If EnableAjaxSkinRendering is set to false you will have to register the needed control base CSS file by hand when adding/showing the control with Ajax.

###  EnableAriaSupport `Boolean`

When set to true enables support for WAI-ARIA.

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

###  ExpandAnimation `AnimationSettings`

Gets the settings for the animation played when the dropdown opens.

#### Remarks
Use the ExpandAnimation property to customize the expand
                    animation of RadNavigation. You can specify the
                    Type and
                    Duration.
                    To disable expand animation effects you should set the
                    Type to
                    AnimationType.None.
                    To customize the collapse animation you can use the
                    CollapseAnimation property.

###  ImagePosition `RadNavigationImagePostion`

Gets or sets the image position.

###  IsSkinSet `String`

For internal use.

###  KeyboardNavigationSettings `KeyboardNavigationSettings`

Used to customize the Navigation keyboard navigation functionality.

###  MaxDataBindDepth `Int32`

Gets or sets the max data bind depth.

###  MenuButtonPosition `RadNavigationMenuButtonPostion`

Gets or sets the menuButton position.

###  Nodes `NavigationNodeCollection`

Gets the Nodes.

###  NodeTemplate `ITemplate`

Gets or sets template for all Nodes that doesn't have template nor does their Node.

###  ODataDataSourceID `String`

Gets or sets the ODataDataSource used for data binding.

###  OnClientLoad `String`

Gets or sets the on client load.

###  OnClientNodeClicked `String`

Gets or sets the on NavigationNode clicked.

###  OnClientNodeClicking `String`

Gets or sets the on NavigationNode clicking.

###  OnClientNodeCollapsed `String`

Gets or sets the on client Node collapsed.

###  OnClientNodeCollapsing `String`

Gets or sets the on client Node collapsing.

###  OnClientNodeExpanding `String`

Gets or sets the on client Node expanding.

###  OnClientNodeMouseEnter `String`

Gets or sets the name of the JavaScript function called when the mouse enters a node

###  OnClientNodeMouseLeave `String`

Gets or sets the name of the JavaScript function called when the mouse leaves a node

###  OnClientNodesPopulated `NavigationNodeCollection`

Gets or sets the on NavigationNodes populated.

###  OnClientNodesPopulating `NavigationNodeCollection`

Gets or sets the on NavigationNodes populating.

###  OnClientTemplateDataBound `String`

Gets or sets the name of the JavaScript function called when the client template for a node is evaluated

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

Gets the resolved render mode.

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

## Methods

###  ApplyConditionalRendering

Use this from RenderContents of the inheritor

#### Returns

`System.Void` 

###  ControlPreRender

Code moved into this method from OnPreRender to make sure it executed when the framework skips OnPreRender() for some reason

#### Returns

`System.Void` 

###  DataBind

Binds a data source to the invoked server control and all its child
            controls.

#### Returns

`System.Void` 

###  DescribeRenderingMode

Should be  used by inheritors

#### Returns

`System.Void` 

###  FindNodeByText

Finds the Node by text.

#### Parameters

#### text `System.String`

The text.

#### Returns

`Telerik.Web.UI.NavigationNode` 

###  FindNodeByUrl

Finds the Node by URL.

#### Parameters

#### url `System.String`

The URL.

#### Returns

`Telerik.Web.UI.NavigationNode` 

###  GetAllNodes

Gets a linear list of all Nodes in the NavigationNode.

#### Returns

`System.Collections.Generic.IList`1` An IList<NavigationNode> containing all Nodes (from all hierarchy levels).

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

