---
title: Telerik.Web.UI.RadTreeView
page_title: Telerik.Web.UI.RadTreeView
description: Telerik.Web.UI.RadTreeView
---

# Telerik.Web.UI.RadTreeView

#### Remarks
The RadTreeViewcontrol is used to display a list of nodes in a Web Forms
                    page. The RadTreeViewcontrol supports the following features:
                bullet Danodeinding that allows the control to be populated from various
            			datasources.
            		Programmatic access to the RadTreeViewobject model
            			which allows dynamic creation of treeviews, populating with nodes and customizing the behavior 
            			by various properties.
            		Customizable appearance through built-in or user-defined skins.
            		nodesThe RadTreeViewcontrol is made up of tree of nodes represented
                    by Telerik.Web.UI.RadTreeNode objects. Nodes at the top level (level 0) are
                    called root nodes. An node that has a parent node is called a child node. All root
                    nodes are stored in the P:Telerik.Web.UI.RadTreeView.Nodes property of the RadTreeView control. Child nodes are
                    stored in the P:Telerik.Web.UI.RadTreeNode.Nodes property of their parent Telerik.Web.UI.RadTreeNode .
                Each node has a P:Telerik.Web.UI.RadTreeNode.Text and a P:Telerik.Web.UI.RadTreeNode.Value property. 
            		The value of the P:Telerik.Web.UI.RadTreeNode.Text property is displayed in the RadTreeViewcontrol, 
            		while the P:Telerik.Web.UI.RadTreeNode.Value property is used to store any additional data about the node, 
            		such as data passed to the postback event associated with the node. When clicked, a node can
                    navigate to another Web page indicated by the P:Telerik.Web.UI.RadTreeNode.NavigateUrl property.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* System.Web.UI.WebControls.BaseDataBoundControl
* System.Web.UI.WebControls.DataBoundControl
* Telerik.Web.UI.RadDataBoundControl : IControl, IControlResolver, IFeatureGroup, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.ControlItemContainer : IControlItemContainer, INamingContainer, IXmlSerializable
* Telerik.Web.UI.HierarchicalControlItemContainer
* Telerik.Web.UI.RadTreeView : ICallbackEventHandler, IPostBackEventHandler, IRadTreeNodeContainer

## Properties

###  AllowNodeEditing `Boolean`

Gets a value indicating whether the text of the tree nodes are edinodele in the
            browser.

#### Remarks
End-users can edit the text of tree-nodes by pressing F2 when the node is
                selected or by clicking on a node that is already selected (slow double
                click).
                    You can disable / enable node editing for specific tree nodes by setting the
                    AllowEdit property of the specific
                    RadTreeNode.
                
                    After node editing, RadTreeView fires the NodeEdit
                    event and you can change the text of the node - the RadTreeNode instance is
                    contained in the NodeEdited property of the event arguments and the new text is
                    in the NewText property of the event arguments.

###  CausesValidation `Boolean`

Gets or sets a value indicating whether validation is performed when an item within
            the control is selected.

#### Remarks
By default, page validation is performed when an item is selected. Page
                validation determines whether the input controls associated with a validation
                control on the page all pass the validation rules specified by the validation
                control. You can specify or determine whether validation is performed on both the
                client and the server when an item is clicked by using the CausesValidation
                property. To prevent validation from being performed, set the
                CausesValidation property to false.

###  CheckBoxes `Boolean`

When set to true displays a checkbox next to each treenode.

###  CheckChildNodes `RadTreeNodeCollection`

Gets or sets a value indicating whether checking (unchecking) a node will check (uncheck) its child nodes.

###  CheckedNodes `IList`1`

Gets a collection of RadTreeNode objects that represent the nodes in the control
            that display a selected check box.

#### Remarks
When check boxes are displayed in the RadTreeView control (by setting the
                    CheckBoxes property to true), use the CheckedNodes
                    property to determine which nodes display a selected check box. This collection
                    is commonly used to iterate through all the nodes that have a selected check
                    box in the tree.
                
                The CheckedNodes collection is populated using a depth-first traversal of the tree
                structure: each parent node is processed down to its child nodes before the next
                parent node is populated.

###  ClientChanges `IList`1`

Gets a list of all client-side changes (adding a node, removing a node, changing a node's property) which have occurred.

#### Remarks
You can use the ClientChanges property to respond to client-side modifications such as
            		adding a new itemremoving existing itemclearing the children of an item or the control itselfchanging a property of the item
            		The ClientChanges property is available in the first postback (ajax) request after the client-side modifications
            		have taken place. After this moment the property will return empty list.

###  ClientDataSourceID `String`

Gets or sets ID of ClientDataSource control that is used for client side binding

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  ClientNodeTemplate `ITemplate`

Gets or sets the HTML template of a 
            when added on the client.

###  CollapseAnimation `AnimationSettings`

Gets the settings for the animation played when a node closes.

#### Remarks
Use the CollapseAnimation property to customize the expand
                    animation of RadTreeView. You can specify the
                    Type and
                    Duration.
            		
                    To disable expand animation effects you should set the
                    Type to
                    AnimationType.None. To customize the expand animation you can
                    use the ExpandAnimation property.

###  ContextMenus `RadTreeViewContextMenuCollection`

Gets a collection of RadTreeViewContextMenu objects
            	that represent the context menus of a RadTreeView control.

#### Remarks
By default, if the ContextMenus collection contains RadTreeViewContextMenus,
            	the first one is displayed on the right-click of each RadTreeNode. To disable a context menu for a
            	RadTreeNode, set its EnableContextMenu
            	property to false. To specify a different context menu for a RadTreeNode, use its
            	ContextMenuID property.

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin 
            and will be modified in AddAttributesToRender()

###  DataBindings `RadTreeNodeBindingCollection`

Gets a collection of  objects that define the relationship 
            	between a data item and the tree node it is binding to.

###  EnableAjaxSkinRendering `String`

Gets or sets the value, indicating whether to render the skin CSS files during Ajax requests

#### Remarks
If EnableAjaxSkinRendering is set to false you will have to register the needed control base CSS file by hand when adding/showing the control with Ajax.

###  EnableAriaSupport `Boolean`

When set to true enables support for WAI-ARIA

###  EnableDragAndDrop `Boolean`

When set to true enables drag-and-drop functionality

###  EnableDragAndDropBetweenNodes `RadTreeNodeCollection`

When set to true enables drag-and-drop visual clue (underline) between nodes while draggin

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

###  EnableNodeTextHtmlEncoding `Boolean`

Gets or sets a value indicating whether RadTreeView should HTML encode the text of the nodes.

###  EnableRippleEffect `Boolean`

Returns true if ripple effect should be added

###  ExpandAnimation `AnimationSettings`

Gets the settings for the animation played when a node opens.

#### Remarks
Use the ExpandAnimation property to customize the expand
                    animation of RadTreeView. You can specify the
                    Type and
                    Duration.
                    To disable expand animation effects you should set the
                    Type to
                    AnimationType.None.
                    To customize the collapse animation you can use the
                    CollapseAnimation property.

###  IsEmpty `Boolean`

Gets a value indicating whether the RadTreeView control has no nodes.

###  IsSkinSet `String`

For internal use.

###  KeyboardNavigationSettings `KeyboardNavigationSettings`

Used to customize the keyboard navigation functionality.

###  LoadingMessage `String`

Gets or sets the loading message that is displayed when child nodes are retrieved
            on AJAX calls.

#### Remarks
This property can be used for localization purposes (e.g. "Loading..." in
            different languages).

###  LoadingStatusPosition `TreeViewLoadingStatusPosition`

Gets or sets the position of the loading message when child nodes are retrieved
            on AJAX calls.

###  LoadingStatusTemplate `ITemplate`

Gets or sets the loading status template.

###  MaxDataBindDepth `Int32`

Gets or sets the maximum number of levels to bind to the RadTreeView control.

#### Remarks
When binding the RadTreeView control to a data source, use the MaxDanodeindDepth 
            	property to limit the number of levels to bind to the control. For example, setting this property to 2 binds only 
            	the root nodes and their immediate children. All remaining records in the data source are ignored.

###  MultipleSelect `Boolean`

When set to true the treeview allows multiple node selection (by holding down ctrl key while selecting nodes)

###  Nodes `RadTreeNodeCollection`

Gets a  object that contains the root nodes of the current RadTreeView control.

#### Remarks
Use the nodes property to access the root nodes of the RadTreeView control. You can also use the nodes property to
            	manage the root nodes - you can add, remove or modify nodes.

###  NodeTemplate `ITemplate`

Gets or sets the template for displaying all node in the current RadTreeView.

###  ODataDataSourceID `String`

Gets or sets the ODataDataSource used for data binding.

###  OnClientContextMenuItemClicked `String`

The name of the JavaScript function that will be called after the user clicks on a context menu item.

###  OnClientContextMenuItemClicking `String`

The name of the JavaScript function that will be called when the user clicks on a context menu item.

###  OnClientContextMenuShowing `String`

The name of the JavaScript function that will be called when a context menu is to be displayed.

###  OnClientContextMenuShown `String`

The name of the JavaScript function that will be called after context menu is displayed.

###  OnClientDoubleClick `String`

The name of the JavaScript function that will be called when the user double clicks on a node.

###  OnClientKeyPressing `String`

The name of the JavaScript function that will be called when a key is pressed.

###  OnClientLoad `String`

Gets or sets the name of the JavaScript function called when the control is fully
            initialized on the client side.

###  OnClientMouseOut `String`

The name of the JavaScript function that will be called when the mouse hovers away from the TreeView.

###  OnClientMouseOver `String`

The name of the JavaScript function that will be called when the user highlights a treenode.

###  OnClientNodeAnimationEnd `String`

Gets or sets the name of the JavaScript function called when a node's expand/collapse animation finishes

###  OnClientNodeChecked `String`

The name of the JavaScript function that will be called after the user checks (checkbox) a treenode.

###  OnClientNodeChecking `String`

The name of the JavaScript function that will be called when the user checks (checkbox) a treenode.

###  OnClientNodeClicked `String`

The name of the JavaScript function that will be called after click on a treenode. Used for AJAX/callback hooks.

###  OnClientNodeClicking `String`

The name of the JavaScript function that will be called upon click on a treenode. The function must accept a single parameter which is the instance of the node clicked.
            For example if you define OnClientClick="ProcessClientClick", you must define a javascript function defined in the following way (example):
            function ProcessClientClick(node)
            {
            	alert("You clicked on: " + node.Text);
            }

###  OnClientNodeCollapsed `String`

The name of the JavaScript function that will be called after a node is collapsed.

###  OnClientNodeCollapsing `String`

The name of the JavaScript function that will be called before a node is collapsed.

###  OnClientNodeDataBound `String`

Gets or sets the name of the JavaScript function called when a node is databound during load on demand

###  OnClientNodeDragging `String`

The name of the JavaScript function that will be called when the user moves the mouse while dragging a node.

###  OnClientNodeDragStart `String`

The name of the JavaScript function that will be called when the user starts dragging a node.

###  OnClientNodeDropped `String`

The name of the JavaScript function that will be called after the user drops a node onto another node.

###  OnClientNodeDropping `String`

The name of the JavaScript function that will be called when the user drops a node onto another node.

###  OnClientNodeEdited `String`

The name of the JavaScript function that will be called after the user edits a node

###  OnClientNodeEditing `String`

The name of the JavaScript function that will be called before the user edits a node

###  OnClientNodeEditStart `String`

Gets or sets the name of the JavaScript function called when a node starts being edited

###  OnClientNodeExpanded `String`

The name of the JavaScript function that will be called after a node is expanded.

###  OnClientNodeExpanding `String`

The name of the JavaScript function that will be called before a node is expanded.

###  OnClientNodePopulated `String`

Gets or sets a value indicating the client-side event handler that is called when
            the children of a tree node were just populated (for example from web service).

#### Remarks
If specified, the OnClientNodePopulated client-side event
                handler is called when the children of a tree node were just populated.
            	Two parameters are passed to the handler:sender, the menu client object;eventArgs with one property:
            			get_node(), the instance of the tree node.This event cannot be cancelled.

###  OnClientNodePopulating `String`

Gets or sets a value indicating the client-side event handler that is called when
            the children of a tree node are about to be populated (for example from web service).

#### Remarks
If specified, the OnClientNodePopulating client-side event
                handler is called when the children of a tree node are about to be populated.
            	Two parameters are passed to the handler:sender, the menu client object;eventArgs with three properties:
            			get_node(), the instance of the node.get_context(), an user object that will be passed to the web service.set_cancel(), used to cancel the event.This event can be cancelled.

###  OnClientNodePopulationFailed `String`

Gets or sets a value indicating the client-side event handler that is called when
            the operation for populating the children of a tree node has failed.

#### Remarks
If specified, the OnClientNodePopulationFailed client-side event
                handler is called when the operation to populate the children of a tree node has failed.
            	Two parameters are passed to the handler:sender, the menu client object;eventArgs with three properties:
            			get_node(), the instance of the tree node.set_cancel(), set to true to suppress the default action (alert message).This event cannot be cancelled.

###  OnClientTemplateDataBound `String`

Gets or sets the name of the JavaScript function called when the client template for a node is evaluated

###  OnClientTreePopulated `String`

Gets or sets the OnClientTreePopulated event value in the ViewState.

###  OnClientTreePopulating `String`

Gets or sets the OnClientTreePopulating event value in the ViewState.

###  PersistLoadOnDemandNodes `RadTreeNodeCollection`

When set to true, the nodes populated through Load On Demand are persisted on the server.

###  PostBackUrl `String`

Gets or sets the URL of the page to post to from the current page when a tree node is clicked.

###  PostBackUrl `String`

Gets or sets the URL of the page to post to from the current page when a tab
                from the tabstrip is clicked.

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

Returns resolved RenderMode should the original value was Auto

###  RuntimeSkin `String`

Gets the real skin name for the control user interface. If Skin is not set, returns
            "Default", otherwise returns Skin.

###  SelectedNode `RadTreeNode`

Gets a RadTreeNode object that represents the selected node in the RadTreeView
            control.

#### Remarks
When a node is in selection mode, the user can select a node by clicking on
                the text in the node. Use the SelectedNode property to determine which node is
                selected in the TreeView control.
                A node cannot be selected when the TreeView control displays hyperlinks. When
                hyperlinks are displayed, the SelectedNode property always returns a null reference
                (Nothing in Visual Basic).
                    When the user selects a different node in the RadTreeView control by clicking
                    the text in the new node, the NodeClick event is
                    raised, by default. If you set the
                    MultipleSelect property of the treeview to
                    true, end-users can select multiple nodes by holding the Ctrl / Shift keys
                    while selecting.

###  SelectedNodes `IList`1`

Gets a collection of RadTreeNode objects that represent the nodes in the control
            that are currently selected.

#### Remarks
This collection is commonly used to iterate through all the nodes that have
                been selected in the tree.The SelectedNodes collection is populated using a
                depth-first traversal of the tree structure: each parent node is processed down to
                its child nodes before the next parent node is populated.

###  SelectedValue `String`

Gets the Value of the selected node.

###  ShowLineImages `Boolean`

Gets a value indicating whether the dotted lines indenting the nodes should be
            displayed or not.

###  SingleExpandPath `Boolean`

Gets a value indicating whether only the current branch of the treeview is
            expanded.

#### Remarks
The property closes all nodes that are not parents of the last expanded node.
            This property is only effective on the client browser - in postback modes you need to
            handle the logic yourself.

###  Skin `String`

Gets or sets the skin name for the control user interface.

#### Remarks
If this property is not set, the control will render using the skin named "Default".
            If EnableEmbeddedSkins is set to false, the control will not render skin.

###  TriStateCheckBoxes `Boolean`

Gets or sets a value indicating whether RadTreeView should display tri-state checkboxes.

#### Remarks
Enabling three state checkbox support requires the  property to be set to true.

###  UniqueID `String`

Gets the unique, hierarchically qualified identifier for the server
            control.

###  ValidationGroup `String`

Gets or sets the name of the validation group to which this validation
                control belongs.

#### Remarks
This property works only when CausesValidation
                is set to true.

###  WebServiceSettings `NavigationControlWebServiceSettings`

Gets the settings for the web service used to populate nodes when
            	ExpandMode set to
            	TreeNodeExpandMode.WebService.

#### Remarks
Use the WebServiceSettings property to configure the web
            		service used to populate nodes on demand.
            		You must specify both
                    Path and
                    Method
            		to fully describe the service.
                
            		You can use the LoadingStatusTemplate
            		property to create a loading template.
            	
            		In order to use the integrated support, the web service should have the following signature:
            		
            		
            		[ScriptService]
            		public class WebServiceName : WebService
            		{
            			[WebMethod]
            			public RadTreeNodeData[] WebServiceMethodName(RadTreeNodeData item, object context)
            			{
            				// We cannot use a dictionary as a parameter, because it is only supported by script services.
            				// The context object should be cast to a dictionary at runtime.
            				IDictionary<string, object> contextDictionary = (IDictionary<string, object>) context;
            				
            				//...
            			}
            		}

## Methods

###  AddProperty

Adds the property to the IScriptDescriptor, if it's value is different from the given default.

#### Parameters

#### descriptor `Telerik.Web.UI.IScriptDescriptor`

The descriptor to add the property to.

#### name `System.String`

The property name.

#### value `System.Object`

The current value of the property.

#### defaultValue `System.Object`

The default value.

#### Returns

`System.Void` 

###  ApplyConditionalRendering

Use this from RenderContents of the inheritor

#### Returns

`System.Void` 

###  CheckAllNodes

Checks all nodes of the current RadTreeView object.

#### Returns

`System.Void` 

###  CollapseAllNodes

Collapses all nodes in the tree.

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

###  ExpandAllNodes

Expands all nodes in the tree.

#### Returns

`System.Void` 

###  FindNode

Returns  the first RadTreeNode 
            that matches the conditions defined by the specified predicate.
            The predicate should returns a boolean value.

#### Parameters

#### match `System.Predicate{Telerik.Web.UI.RadTreeNode}`

The Predicate <> that defines the conditions of the element to search for.

#### Returns

`Telerik.Web.UI.RadTreeNode` 

###  FindNodeByAttribute

Searches all nodes for a RadTreeNode which contains the specified attribute and attribute value.

#### Parameters

#### attributeName `System.String`

The name of the target attribute.

#### attributeValue `System.String`

The value of the target attribute

#### Returns

`Telerik.Web.UI.RadTreeNode` The RadTreeNode that matches the specified arguments. Null (Nothing) is returned if no node is found.

###  FindNodeByText

Searches all nodes for a RadTreeNode with a Text property
            equal to the specified text.

#### Parameters

#### text `System.String`

The text to search for

#### Returns

`Telerik.Web.UI.RadTreeNode` A RadTreeNode whose Text property equals to the specified argument. Null (Nothing) is returned when no matching node is found.

###  FindNodeByText

Searches all nodes for a RadTreeNode with a Text property
            equal to the specified text.

#### Parameters

#### text `System.String`

The text to search for

#### ignoreCase `System.Boolean`

A Boolean indicating a case-sensitive or insensitive comparison (true indicates a case-insensitive comparison).

#### Returns

`Telerik.Web.UI.RadTreeNode` A RadTreeNode whose Text property equals to the specified argument. Null (Nothing) is returned when no matching node is found.

###  FindNodeByUrl

Searches all nodes for a RadTreeNode with a NavigateUrl property
            equal to the specified URL.

#### Remarks
The ResolveUrl method is used to resolve NavigateUrl property before comparing it to the specified URL.

#### Parameters

#### url `System.String`

The URL to search for

#### Returns

`Telerik.Web.UI.RadTreeNode` A RadTreeNode whose NavigateUrl property equals to the specified argument. Null (Nothing) is returned when no matching node is found.

###  FindNodeByValue

Searches all nodes for a RadTreeNode with a Value property
            equal to the specified value.

#### Parameters

#### value `System.String`

The value to search for

#### Returns

`Telerik.Web.UI.RadTreeNode` A RadTreeNode whose Value property equals to the specified argument. Null (Nothing) is returned when no matching node is found.

###  FindNodeByValue

Searches all nodes for a RadTreeNode with a Value property
            equal to the specified value.

#### Parameters

#### value `System.String`

The value to search for

#### ignoreCase `System.Boolean`

A Boolean indicating a case-sensitive or insensitive comparison (true indicates a case-insensitive comparison).

#### Returns

`Telerik.Web.UI.RadTreeNode` A RadTreeNode whose Value property equals to the specified argument. Null (Nothing) is returned when no matching node is found.

###  GetAllNodes

Gets a linear list of all nodes in the RadTreeView control.

#### Returns

`System.Collections.Generic.IList`1` An IList<RadTreeNode> containing all nodes (from all hierarchy levels).

###  GetEmbeddedSkinNames

Returns the names of all embedded skins. Used by Telerik.Web.Examples.

#### Returns

`System.Collections.Generic.List`1` 

###  GetXml

Gets an XML string representing the state of the control. All child items and their properties are serialized in this
            	string.

#### Remarks
Use the GetXml method to get the XML state of the control. You can cache it and then restore it using
            	the LoadXml method.

#### Returns

`System.String` A String representing the state of the control - child items, properties etc.

###  LoadClientState

Loads the client state data

#### Parameters

#### clientState `System.Collections.Generic.Dictionary{System.String,System.Object}`

#### Returns

`System.Void` 

###  LoadContentFile

Populates the control from the specified XML file.

#### Parameters

#### fileName `System.String`

The name of the XML file.

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

Loads the control from an XML string.

#### Remarks
Use the LoadXml method to populate the control from an XML string. You can use it along the GetXml
            	method to implement caching.

#### Parameters

#### xml `System.String`

The string representing the XML from which the control will be populated.

#### Returns

`System.Void` 

###  LoadXmlString

Loads the control from an XML string. Identical to LoadXml.

#### Parameters

#### xml `System.String`

The XML string to populate from.

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

###  UncheckAllNodes

This method unchecks all nodes of the current RadTreeView instance. Useful when you need to uncheck all nodes after postback.

#### Returns

`System.Void` 

###  UnselectAllNodes

This method unselects all nodes of the current RadTreeView instance. Useful when you need to clear node selection after postback.

#### Returns

`System.Void` 

