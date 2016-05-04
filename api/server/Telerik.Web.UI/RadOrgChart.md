---
title: Telerik.Web.UI.RadOrgChart
page_title: Telerik.Web.UI.RadOrgChart
description: Telerik.Web.UI.RadOrgChart
---

# Telerik.Web.UI.RadOrgChart

RadOrgChart is a flexible tool for visualization of organizational structures and hierarchies.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* System.Web.UI.WebControls.BaseDataBoundControl
* System.Web.UI.WebControls.DataBoundControl
* Telerik.Web.UI.RadDataBoundControl : IControl, IControlResolver, IFeatureGroup, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.RadOrgChart : ICallbackEventHandler, IOrgChartNodeContainer, IPostBackEventHandler, IXmlSerializable

## Properties

###  AllowGroupItemDragging `Boolean`

Allows dragging of GroupItems (except in Simple Binding)

###  ClientDataSourceID `String`

Gets or sets ID of ClientDataSource control that is used for client side binding

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin 
            and will be modified in AddAttributesToRender()

###  DataCollapsedField `String`

Gets or sets the data field holding the Collapsed property for the currently bound Node.

###  DataFieldID `String`

Gets or sets the data field holding the unique identifier for a Node.

###  DataFieldParentID `String`

Gets or sets the data field holding the ID of the parent Node.

###  DataImageAltTextField `String`

Gets or sets the data field holding the ImageAltText property for the currently bound GroupItem.

###  DataImageUrlField `String`

Gets or sets the data field holding an image URL for the currently bound GroupItem.

###  DataTextField `String`

Gets or sets the data field holding the Text of the currently bound GroupItem.

###  DefaultImageUrl `String`

Gets or sets default image URL for every GroupItem image.

#### Remarks
When GroupItem's image URL is not set a default image is rendered for every GroupItem.

###  DisableDefaultImage `Boolean`

Gets or sets whether to render a default image for every GroupItem.

###  EnableAjaxSkinRendering `String`

Gets or sets the value, indicating whether to render the skin CSS files during Ajax requests

#### Remarks
If EnableAjaxSkinRendering is set to false you will have to register the needed control base CSS file by hand when adding/showing the control with Ajax.

###  EnableCollapsing `Boolean`

Gets or sets whether to enable collapsing and expanding of the Nodes

###  EnableDragAndDrop `Boolean`

Gets or sets whether to enable drag and drop

###  EnableDrillDown `Boolean`

Gets or sets whether to enable drill down functionality of the RadOrgChart.

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

###  EnableGroupCollapsing `Boolean`

Gets or sets whether to enable collapsing and expanding the GroupItems of a Node.

#### Remarks
The property takes effect if there is more than one item in a Node. In SimpleBinding is ignored.

###  EnableRippleEffect `Boolean`

Returns true if ripple effect should be added

###  GroupColumnCount `Int32`

Gets or sets the number of columns in all Node's visualization, except these that have their ColumnCount property set locally.

#### Remarks
Simply breaks the single-line presentation of the Node (group) in RadOrgChart on multiple lines.

###  GroupEnabledBinding `OrgChartGroupEnabledBinding`

Gets or sets GroupEnabledBinding settings for RadOrgChart.

###  IsSkinSet `String`

For internal use.

###  ItemTemplate `ITemplate`

Gets or sets template for all items that doesn't have template nor does their node.

###  LoadOnDemand `OrgChartLoadOnDemand`

Gets or Sets LoadOnDemand state

###  MaxDataBindDepth `Int32`

Gets or sets the maximum depth of the RadOrgChart hierarchy which will be binded.

###  Nodes `OrgChartNodeCollection`

Gets OrgChart's child nodes.

###  ODataDataSourceID `String`

Gets or sets the ODataDataSource used for data binding.

###  OnClientGroupPopulated `String`

Gets or sets a value indicating the client-side event handler that is called when
            the OrgChartGroupItemCollection is populated (for example by callback).

###  OnClientGroupPopulating `String`

Gets or sets a value indicating the client-side event handler that is called when
            the OrgChartGroupItemCollection is about to be populated (for example by callback).

###  OnClientGroupPopulationFailed `String`

Gets or sets a value indicating the client-side event handler that is called when
            the OrgChartGroupItemCollection populating failed (for example by callback).

###  OnClientNodePopulated `String`

Gets or sets a value indicating the client-side event handler that is called when
            the OrgChartNodeCollection is populated (for example by callback).

###  OnClientNodePopulating `String`

Gets or sets a value indicating the client-side event handler that is called when
            the OrgChartNodeCollection is about to be populated (for example by callback).

###  OnClientNodePopulationFailed `String`

Gets or sets a value indicating the client-side event handler that is called when
            the OrgChartNodeCollection populating failed (for example by callback).

###  PersistExpandCollapseState `Boolean`

Gets or sets whether to persist expand/collapse state after a postback.

###  RegisterWithScriptManager `Boolean`

Gets or sets the value, indicating whether to register with the ScriptManager control on the page.

#### Remarks
If RegisterWithScriptManager is set to false the control can be rendered on the page using Web Services or normal callback requests/page methods.

###  RenderedFields `OrgChartRenderedFieldsSettings`

Gets RenderedFields settings.

###  RenderMode `RenderMode`

Specifies the rendering mode of the control. Setting the mode to Lightweight will yield
            HTML 5/CSS 3 html and css. If the set value is Auto use ResolvedRenderMode to receive the actual RenderMode
            with respect to the user angent of the current request.

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

## Methods

###  ApplyConditionalRendering

Use this from RenderContents of the inheritor

#### Returns

`System.Void` 

###  CollapseAllGroups

Collapse all Groups in the RadOrgChart

#### Returns

`System.Void` 

###  CollapseAllNodes

Collapse all Nodes in the RadOrgChart

#### Returns

`System.Void` 

###  CollapseGroups

Collapse Groups by criteria (lambda)

#### Returns

`System.Void` 

###  CollapseNodes

Collapse Nodes by criteria (lambda)

#### Returns

`System.Void` 

###  ControlPreRender

Code moved into this method from OnPreRender to make sure it executed when the framework skips OnPreRender() for some reason

#### Returns

`System.Void` 

###  DescribeRenderingMode

Should be  used by inheritors

#### Returns

`System.Void` 

###  ExpandAllGroups

Expand all Groups in the RadOrgChart

#### Returns

`System.Void` 

###  ExpandAllNodes

Expand all Nodes in the RadOrgChart

#### Returns

`System.Void` 

###  ExpandGroups

Expand Groups by criteria (lambda)

#### Returns

`System.Void` 

###  ExpandNodes

Expand Nodes by criteria (lambda)

#### Returns

`System.Void` 

###  GetAllGroupItems

Returns all GroupItems in the RadOrgChart.

#### Returns

`System.Collections.Generic.IEnumerable`1` Collection of OrgChartGroupItem

###  GetAllGroupItems

Returns items by some criteria (lambda).

#### Parameters

#### criteria `Telerik.Web.UI.RadOrgChart.OrgChartGroupItemCriteria`

Lambda expression

#### Returns

`System.Collections.Generic.IEnumerable`1` Collection of OrgChartGroupItem

###  GetAllNodes

Returns all Nodes in the RadOrgChart.

#### Returns

`System.Collections.Generic.IEnumerable`1` 

###  GetEmbeddedSkinNames

Returns the names of all embedded skins. Used by Telerik.Web.Examples.

#### Returns

`System.Collections.Generic.List`1` 

###  GetGroupItems

Returns items by some criteria (lambda).

#### Parameters

#### criteria `Telerik.Web.UI.RadOrgChart.OrgChartGroupItemCriteria`

Lambda expression

#### Returns

`System.Collections.Generic.IEnumerable`1` Collection of OrgChartGroupItem

###  GetNodeByHierarchicalIndex

Gets a node by hierarchical index

#### Remarks
If the node does not exist the returned value is null.

#### Returns

`Telerik.Web.UI.OrgChartNode` 

###  GetNodes

Returns nodes by some criteria (lambda).

#### Returns

`System.Collections.Generic.IEnumerable`1` 

###  GetXml

Gets OrgChart serialized as XML.

#### Returns

`System.String` string (XML).

###  LoadClientState

Loads the client state data

#### Parameters

#### clientState `System.Collections.Generic.Dictionary{System.String,System.Object}`

#### Returns

`System.Void` 

###  LoadContentFile

Deserializes OrgChart from XML file.

#### Parameters

#### xmlFileName `System.String`

Relative or virtual path of the loaded Xml file.

#### Returns

`System.Void` 

###  LoadPostData

Executed when post data is loaded from the request

#### Parameters

#### postDataKey `System.String`

#### postCollection `System.Collections.Specialized.NameValueCollection`

#### Returns

`System.Boolean` 

###  LoadXml

Deserializes OrgChart from XML string.

#### Parameters

#### xml `System.String`

string (XML)

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

###  SaveClientState

Saves the client state data

#### Returns

`System.String` 

###  SaveClientState

Saves the client state data

#### Returns

`System.String` 

