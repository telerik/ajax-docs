---
title: Telerik.Web.UI.RadTreeNode
page_title: Telerik.Web.UI.RadTreeNode
description: Telerik.Web.UI.RadTreeNode
---

# Telerik.Web.UI.RadTreeNode

This Class defiens the RadTreeNode object.

#### Remarks
The Telerik.Web.UI.RadTreeView RadTreeViewcontrol is made up of nodes. Nodes which are immediate children
            		of the treeview are root nodes. Nodes which are children of root nodes are child nodes.
            	A node usually stores data in two properties, the P:Telerik.Web.UI.RadTreeNode.Text Textproperty and 
            		the P:Telerik.Web.UI.RadTreeNode.Value Valueproperty. The value of the P:Telerik.Web.UI.RadTreeNode.Text Textproperty is displayed 
            		in the RadTreeViewcontrol, and the P:Telerik.Web.UI.RadTreeNode.Value Valueproperty is used to store additional data.
            	To create tree nodes, use one of the following methods:bullet Use declarative syntax to define nodes inline in your page or user control.
            		Use one of the constructors to dynamically create new instances of the
            			Telerik.Web.UI.RadTreeNode RadTreeNodeclass. These nodes can then be added to the
            			Nodescollection of another node or treeview.
            		Data bind the RadTreeViewcontrol to a data source.
            		When the user clicks a tree node, the RadTreeViewcontrol can navigate
                    to a linked Web page, post back to the server or select that node. If the
                    P:Telerik.Web.UI.RadTreeNode.NavigateUrl NavigateUrlproperty of a node is set, the
                    RadTreeViewcontrol navigates to the linked page. By default, a linked page
                    is displayed in the same window or frame. To display the linked content in a different 
            		window or frame, use the P:Telerik.Web.UI.RadTreeNode.Target Targetproperty.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.ControlItem : IMarkableStateManager, INamingContainer, IStateManager, IXmlSerializable
* Telerik.Web.UI.NavigationItem : IControlItemContainer
* Telerik.Web.UI.RadTreeNode : ICloneable, IRadTreeNodeContainer, ITreeNodeBase

## Properties

###  Owner `IRadTreeNodeContainer`

Gets the parent IRadTreeNodeContainer.

###  CssClass `String`

Gets or sets the Cascading Style Sheet (CSS) class applied by default to the node.

#### Remarks
By default the visual appearance of hovered nodes is defined in the skin CSS
            file. You can use the CssClass property to specify unique
            appearance for the node.

###  ToolTip `String`

Gets or sets the tooltip shown for the node when the user hovers it with the mouse

#### Remarks
The ToolTip property is also used as the alt attribute of the node image (in case  is set)

###  Enabled `Boolean`

Gets or sets a value indicating whether the node is enabled.

#### Remarks
Disabled nodes cannot be clicked, or expanded.

###  Nodes `RadTreeNodeCollection`

Gets a  object that contains the child nodes of the current RadTreeNode.

#### Remarks
Use the Nodes property to access the child nodes of the RadTreeNode. You can also use the Nodes property to
            	manage the child nodes - you can add, remove or modify nodes.

###  DataItem `Object`

Gets the data item that is bound to the node

#### Remarks
This property is applicable only during data binding. Use it along with the
                NodeDataBound event to perform additional
                mapping of fields from the data item to RadTreeNode properties.

###  Text `String`

Gets or sets the text displayed for the current node.

#### Remarks
Use the Text property to specify or determine the text that is displayed for the node
            	in the RadTreeView control.

###  Value `String`

Gets or sets custom (user-defined) data associated with the current node.

#### Remarks
Use the Value property to associate custom data with a RadTreeNode object.

###  NavigateUrl `String`

Gets or sets the URL to navigate to when the current node is clicked.

#### Remarks
Setting the NavigateUrl property will disable node selection and as a result the 
            		NodeClick event won't be raised for the current node.

###  Target `String`

Gets or sets the target window or frame in which to display the Web page content associated with the current node.

#### Remarks
Use the Target property to target window or frame in which to display the 
            		Web page content associated with the current node. The Web page is specified by
                    the NavigateUrl property.
                
            		If this property is not set, the Web page specified by the
            		NavigateUrl property is loaded in the current window.
            	
            		The Target property is taken into consideration only when the NavigateUrl 
            		property is set.

###  ImageUrl `String`

Gets or sets the URL to an image which is displayed next to the text of a node.

#### Remarks
Use the ImageUrl property to specify a custom image that will be
            	displayed before the text of the current node.

###  Category `String`

Gets or sets the category of the node.

#### Remarks
The Category property is similar to the Value property. You
            can use it to associate custom data with the node.

###  HoveredCssClass `String`

Gets or sets the Cascading Style Sheet (CSS) class applied to the node when the mouse hovers it.

#### Remarks
By default the visual appearance of hovered nodes is defined in the skin CSS
            file. You can use the HoveredCssClass property to specify unique
            appearance for a node when it is hoevered.

###  DisabledCssClass `String`

Gets or sets the Cascading Style Sheet (CSS) class applied to the node when it is disabled.

#### Remarks
By default the visual appearance of disabled nodes is defined in the skin CSS
            file. You can use the DisabledCssClass property to specify unique
            appearance for a node when it is disabled.

###  ContentCssClass `String`

Gets or sets the Cascading Style Sheet (CSS) class applied to the content
            wrapper of the node.

#### Remarks
You can use the ContentCssClass property to specify unique
            appearance for a node content area and its children. Useful when using 
            CSS sprites.

###  SelectedCssClass `String`

Gets or sets the Cascading Style Sheet (CSS) class applied when node is
            selected.

#### Remarks
By default the visual appearance of selected nodes is defined in the skin CSS
            file. You can use the SelectedCssClass property to specify unique
            appearance for a node when it is selected.

###  ExpandedImageUrl `String`

Gets or sets a value specifying the URL of the image rendered when the node is expanded.

#### Remarks
If the ExpandedImageUrl property is not set the ImageUrl property will be 
            used when the node is expanded.

###  SelectedImageUrl `String`

Gets or sets a value specifying the URL of the image rendered when the node is selected.

#### Remarks
If the SelectedImageUrl property is not set the ImageUrl property will be 
            used when the node is selected.

###  HoveredImageUrl `String`

Gets or sets a value specifying the URL of the image rendered when the node is hovered with the mouse.

#### Remarks
If the HoveredImageUrl property is not set the ImageUrl property will be 
            used when the node is hovered.

###  DisabledImageUrl `String`

Gets or sets a value specifying the URL of the image rendered when the node is disabled.

#### Remarks
If the DisabledImageUrl property is not set the ImageUrl property will be 
            used when the node is disabled.

###  Level `Int32`

Gets the level of the node.

###  TreeView `RadTreeView`

Gets the RadTreeView which the node is part of.

###  PostBack `Boolean`

Gets or sets a value indicating whether clicking on the node will
            postback.

#### Remarks
If you subscribe to the NodeClick all nodes
                will postback. To turn off that behavior you can set the
                PostBack property to false.

###  Expanded `Boolean`

Gets or sets a value indicating whether the node is expanded.

###  Checked `Boolean`

Gets or sets a value indicating whether the node is checked or not.

###  CheckState `TreeNodeCheckState`

Gets the checked state of the tree node

###  Checkable `Boolean`

Gets or sets a value indicating whether the node is checkable. A checkbox control is rendered
            for checkable nodes.

#### Remarks
If the CheckBoxes property set to true, RadTreeView automatically displays a checkbox next to each node. 
            You can set the Checkable property to false for nodes that do not need to display a checkbox.

###  Selected `Boolean`

Gets or sets a value indicating whether the node is selected.

#### Remarks
By default, only one node can be selected. You can enable multiple node selection by setting the
            MultipleSelect property of the 
            parent RadTreeView to true

###  AllowDrag `Boolean`

Gets or sets a value indicating whether the node can be dragged and dropped.

###  AllowDrop `Boolean`

Gets or sets a value indicating whether the use can drag and drop nodes over this
            node.

###  AllowEdit `Boolean`

Gets or sets a value indicating whether the use can edit the text of the node.

###  ExpandMode `TreeNodeExpandMode`

Gets or sets the expand behavior of the tree node.
            
            When set to ExpandMode.ServerSide the RadTreeView will fire a server event (NodeExpand) so you can populate the node on demand.

###  LongDesc `String`

A Section 508 element

###  Prev `RadTreeNode`

Gets the previous sibling of the node.
            Gets the previous node sibling in the tree structure or returns null if this is the first node in the respective node group.

###  Next `RadTreeNode`

Gets the next sibling of the node.

###  NodeTemplate `ITemplate`

Gets or sets the template for displaying the node.

###  FullPath `String`

Gets the full path (location) of the node.

###  ParentNode `RadTreeNode`

Gets the parent node of the current node.

###  ContextMenuID `String`

Gets or sets a value indicating the ID of the  displayed for the current node.

#### Remarks
If the ContextMenuID property is not set the first context menu from the  collection
            	will be used.

###  EnableContextMenu `Boolean`

Gets or sets a value indicating whether a context menu should be displayed for the current node.

#### Remarks
Use the EnableContextMenu property to disable the context menu for particular nodes.

###  Enabled `Boolean`

###  Visible `Boolean`

###  ID `String`

The ID property is reserved for internal use. Please use the Value property or
            use the Attributes collection if you need to assign
            custom data to the item.

###  Index `Int32`

Gets the zero based index of the item.

###  AccessKey `String`

Gets or sets the access key that allows you to quickly navigate to the Web server control.

###  BackColor `Color`

###  ForeColor `Color`

###  BorderColor `Color`

## Methods

###  GetFullPath

Returns the full path (location) of the node delimited by the specified character.

#### Parameters

#### delimiter `System.String`

The character to use as a delimiter

#### Returns

`System.String` Returns the full path of the node delimited by the specified character.

###  CollapseChildNodes

Collapses recursively all child nodes of the node.

#### Returns

`System.Void` 

###  CollapseParentNodes

Expands all parent nodes of the node.

#### Returns

`System.Void` 

###  InsertBefore

Inserts a node before the current node.

#### Parameters

#### node `Telerik.Web.UI.RadTreeNode`

The node to be inserted.

#### Returns

`System.Void` 

###  InsertAfter

Inserts a node after the current node.

#### Parameters

#### node `Telerik.Web.UI.RadTreeNode`

The node to be inserted.

#### Returns

`System.Void` 

###  IsAncestorOf

Checks if the current node is ancestor of another node.

#### Parameters

#### node `Telerik.Web.UI.RadTreeNode`

The node to check for.

#### Returns

`System.Boolean` True if the current node is ancestor of the other node; otherwise false.

###  IsDescendantOf

Checks if the current node is descendant of another node node.

#### Parameters

#### node `Telerik.Web.UI.RadTreeNode`

The node to check for.

#### Returns

`System.Boolean` True if the current node is descendant of the other node; otherwise false.

###  Toggle

Toggles Expand/Collapse state of the node.

#### Returns

`System.Void` 

###  ExpandChildNodes

Expands  all child nodes of the node.

#### Returns

`System.Void` 

###  ExpandParentNodes

Expands  all parent nodes of the node.

#### Returns

`System.Void` 

###  Remove

Removes the node from the Nodes collection of its parent

#### Returns

`System.Void` 

###  Clone

Creates a copy of the current  object.

#### Remarks
Use the Clone method to create a copy of the current node. All
            	properties of the clone are set to the same values as the current ones. Child nodes are
            	copied as well.

#### Returns

`Telerik.Web.UI.RadTreeNode` A  which is a copy of the current one.

###  CheckChildNodes

Checks all child nodes of the current node.

#### Returns

`System.Void` 

###  UncheckChildNodes

Unchecks all child nodes of the current node.

#### Returns

`System.Void` 

###  GetAllNodes

Gets a linear list of all nodes in the RadTreeNode.

#### Returns

`System.Collections.Generic.IList`1` An IList<RadTreeNode> containing all nodes (from all hierarchy levels).

###  IsChildControl

Returns true if the control is rendered by the ControlItem itself;
            false if it was added by the user to the Controls collection.

#### Returns

`System.Boolean` 

