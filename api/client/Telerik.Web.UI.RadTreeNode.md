---
title: Telerik.Web.UI.RadTreeNode
page_title: Client-side API Reference
description: Client-side API Reference
slug: Telerik.Web.UI.RadTreeNode
---

# Telerik.Web.UI.RadTreeNode : Telerik.Web.UI.ControlItem 

## Inheritance Hierarchy

* [Telerik.Web.UI.ControlItem]({%slug Telerik.Web.UI.ControlItem%})
* *[Telerik.Web.UI.RadTreeNode]({%slug Telerik.Web.UI.RadTreeNode%})*

## Methods

### set_expandMode

Sets the ExpandMode of the Node. ExpandMode can be: Telerik.Web.UI.TreeNodeExpandMode.ClientSide; Telerik.Web.UI.TreeNodeExpandMode.ServerSide; Telerik.Web.UI.TreeNodeExpandMode.ServerSideCallBack; Telerik.Web.UI.TreeNodeExpandMode.WebService;

#### Parameters

##### value `Telerik.Web.UI.TreeNodeExpandMode`

value

#### Returns

`None` 

### get_checkable

Returns the checkability of the Node

#### Parameters

##### value `Boolean`

value

#### Returns

`None` 

### get_allowEdit

True, if Node edit is allowed, false, otherwise.

#### Parameters

#### Returns

`Boolean` 

### unselect

Unselects a Node

#### Parameters

#### Returns

`None` 

### set_contentCssClass

Sets the value of ContentCssClass property of the Node

#### Parameters

##### value `String`

value

#### Returns

`None` 

### startEdit

Allows the Node to be edited. This is equivalent to the user clicking the Node twice or pressing F2.

#### Parameters

#### Returns

`None` 

### get_textElement

Gets the DOM Element of the text set to the Node. Note: Changes to the text element are not persisted across postbacks.;

#### Parameters

#### Returns

`Element` DOM Element for the text of the Node.

### get_visible

True if the item is visible.

#### Parameters

#### Returns

`Boolean` 

### set_element

#### Parameters

##### value `Element`

Sets the DOM element of the node

#### Returns

`None` 

### get_element

Returns the DOM element for a Node.

#### Parameters

#### Returns

`Element` 

### endEdit

Takes the Node out of editing mode.

#### Parameters

#### Returns

`None` 

### get_lastVisibleChild

#### Parameters

#### Returns

`None` 

### get_hoveredImageUrl

Returns the path to the image displayed next to the Node when hovered.

#### Parameters

#### Returns

`String` 

### set_enabled

Enables or disables a Node based on the boolean parameter passed in.

#### Parameters

##### value `Boolean`

value

#### Returns

`None` 

### get_allowDrop

True, if dropping is allowed, false otherwise.

#### Parameters

#### Returns

`Boolean` 

### get_checkState

Returns the current check state of a node. It can be one of the following:Telerik.Web.UI.TreeNodeCheckState.Unchecked, Telerik.Web.UI.TreeNodeCheckState.Checked or Telerik.Web.UI.TreeNodeCheckState.Indeterminate

#### Parameters

#### Returns

`Telerik.Web.UI.TreeNodeCheckState` 

### get_cssClass

Returns the name of the CSS class applied to the Node.

#### Parameters

#### Returns

`String` 

### enable

Enables a Node

#### Parameters

#### Returns

`None` 

### get_contentCssClass

Returns the value of ContentCssClass property of the Node

#### Parameters

#### Returns

`String` 

### set_expandedImageUrl

Sets the path to the image displayed next to the Node when expanded.

#### Parameters

##### value `String`

value

#### Returns

`None` 

### get_navigateUrl

Returns the URL of the Node(the href attribute of the link). Null if the NavigateUrl server property is not set.

#### Parameters

#### Returns

`String` String

### showLoadingStatus

Shows the loading message at the specified position. The available positions are: Telerik.Web.UI.TreeViewLoadingStatusPosition.BelowNodeTextTelerik.Web.UI.TreeViewLoadingStatusPosition.AfterNodeText Telerik.Web.UI.TreeViewLoadingStatusPosition.BeforeNodeText

#### Parameters

##### text `String`

text

##### position `Telerik.Web.UI.TreeViewLoadingStatusPosition`

position

#### Returns

`None` 

### get_target

Gets the target of the Node. If a target is not set, returns null.

#### Parameters

#### Returns

`String` 

### get_postBack

True if postback is enabled, false otherwise.

#### Parameters

#### Returns

`Boolean` 

### set_hoveredImageUrl

Sets the path to the image displayed next to the Node when hovered.

#### Parameters

##### value `String`

value

#### Returns

`None` 

### hideLoadingStatus

Hides the loading message.

#### Parameters

#### Returns

`None` 

### get_imageUrl

Returns the path to the image displayed next to the Node.

#### Parameters

#### Returns

`String` 

### get_toggleElement

Returns the DOM element representing the toggle image. Null, if the Node has no child Nodes.

#### Parameters

#### Returns

`Element` DOM Element for the toggle image.

### highlight

Highlights a Node. Highlighted Nodes are visually emphasized.

#### Parameters

#### Returns

`None` 

### get_attributes

Returns a Collection of all custom attributes set to the Node.

#### Parameters

#### Returns

`Object` 

### bindTemplate

Evaluates the template against the Node's data item and applies it.

#### Parameters

#### Returns

`None` 

### get_enabled

Gets the enabled state of the Node. The Node is enabled if get_enabled() returns true.

#### Parameters

#### Returns

`Object` 

### get_contextMenu

Returns the context menu object (if any).

#### Parameters

#### Returns

`Telerik.Web.UI.RadMenu` 

### set_cssClass

Sets the name of the CSS class to be applied to the Node.

#### Parameters

##### value `String`

value

#### Returns

`None` 

### get_expandedImageUrl

Returns the path to the image displayed next to the Node when expanded.

#### Parameters

#### Returns

`String` 

### get_value

Gets the value of the Node.

#### Parameters

#### Returns

`Object` 

### get_allNodes

Returns an array of all the child Nodes of this node.

#### Parameters

#### Returns

`Telerik.Web.UI.RadTreeNode[]` Returns an array of all the child Nodes of this node.

### get_expandMode

Returns the ExpandMode of the Node. ExpandMode can be: 0 - ExpandMode.ClientSide; 1 - ExpandMode.ServerSide; 2 - ExpandMode.ServerSideCallBack; 3 - ExpandMode.WebService;

#### Parameters

#### Returns

`Number` Int

### collapse

Collapses a Node

#### Parameters

#### Returns

`None` 

### set_expanded

Expands or collapses a Node.

#### Parameters

##### value `Boolean`

value

#### Returns

`None` 

### get_resolvedContextMenuID

#### Parameters

#### Returns

`None` 

### get_nextVisibleNode

#### Parameters

#### Returns

`None` 

### set_visible

Set the visibility of a Node.

#### Parameters

##### value `Boolean`

value

#### Returns

`None` 

### get_hoveredCssClass

Returns the name of the CSS class applied to the Node when hovered.

#### Parameters

#### Returns

`String` 

### expand

Expands a Node

#### Parameters

#### Returns

`None` 

### get_clientTemplate

Returns the value of the Node's ClientTemplate property.

#### Parameters

#### Returns

`None` 

### get_linkElement

Gets the DOM element for the link of the Node when NavigateUrl is set

#### Parameters

#### Returns

`Element` DOM element

### get_index

Returns the index of the node in the nodes collection of its parent.

#### Parameters

#### Returns

`Object` 

### set_contextMenuID

Sets the ID of the Context menu to be assigned to the Node.

#### Parameters

##### contextMenuID `String`

contextMenuID

#### Returns

`None` 

### set_disabledImageUrl

Sets the path to the image displayed next to the Node when disabled.

#### Parameters

##### value `String`

value

#### Returns

`None` 

### get_disabledImageUrl

Returns the path to the image displayed next to the Node when disabled.

#### Parameters

#### Returns

`String` 

### get_nextNode

Gets an instance of the next sibling of a Node.

#### Parameters

#### Returns

`Telerik.Web.UI.RadTreeNode` 

### clone

Clones the node with or without the child-nodes (with respect to the boolean parameter cloneChildren).

#### Parameters

##### cloneChildren `Boolean`

Determines whether the child nodes should be cloned.

#### Returns

`Telerik.Web.UI.RadTreeNode` The cloned node.

### get_imageElement

Gets the DOM Element of the image set to the node. Note: Images are set using the RadTreeView ImageUrl property.

#### Parameters

#### Returns

`Element` DOM Element for the image.

### get_lastChild

#### Parameters

#### Returns

`None` 

### get_nodes

Returns the RadTreeNodeCollection of a Node.

#### Parameters

#### Returns

`Telerik.Web.UI.RadTreeNodeCollection` 

### set_allowDrag

Enables/Disables dragging.

#### Parameters

##### value `Boolean`

value

#### Returns

`None` 

### get_category

Gets the category of the Node.

#### Parameters

#### Returns

`String` 

### set_navigateUrl

Sets the URL of the Node. Works only if the NavigateUrl property has been set at the server-side beforehand or if the Node is not added at the client-side.

#### Parameters

##### value `String`

value

#### Returns

`None` 

### set_selectedImageUrl

Sets the path to the image displayed next to the Node when selected.

#### Parameters

##### value `String`

value

#### Returns

`None` 

### get_selected

Gets the selected state of a Node. Returns true if the Node is selected.

#### Parameters

#### Returns

`Boolean` 

### set_allowEdit

Allows/Disallows Node editing.

#### Parameters

##### value `Boolean`

value

#### Returns

`None` 

### uncheck

Unmarks the checkbox for a Node

#### Parameters

#### Returns

`None` 

### toggle

Collapses an expanded Node or expands a collapsed Node.

#### Parameters

#### Returns

`None` 

### get_previousNode

Gets an instance of the previous sibling of a Node.

#### Parameters

#### Returns

`Telerik.Web.UI.RadTreeNode` RadTreeNode

### get_contextMenuID

Returns the ID of the Context Menu assigned to the Node.

#### Parameters

#### Returns

`String` 

### check

Marks the checkbox for a Node

#### Parameters

#### Returns

`None` 

### set_enableContextMenu

Determines if the Context Menu should be enabled.

#### Parameters

##### value `Boolean`

value

#### Returns

`None` 

### get_treeView

Gets an instance to the parent RadTreeView.

#### Parameters

#### Returns

`Telerik.Web.UI.RadTreeView` 

### set_checkable

Enables/Disables the checkability of the Node.

#### Parameters

##### value `Boolean`

value

#### Returns

`None` 

### set_value

Sets the value of the Node.

#### Parameters

##### string `Object`

#### Returns

`Object` 

### set_disabledCssClass

Sets the name of the CSS class to be applied to the Node when disabled.

#### Parameters

##### value `String`

value

#### Returns

`None` 

### get_childListElement

Returns the DOM element for the list of the child Nodes. Null if there are no child Nodes.

#### Parameters

#### Returns

`Element` DOM element for the child nodes list

### set_postBack

Determines if the Node should postback.

#### Parameters

##### value `Boolean`

value

#### Returns

`None` 

### set_imageUrl

Sets the path to the image displayed next to the Node.

#### Parameters

##### value `String`

value

#### Returns

`None` 

### get_contentElement

#### Parameters

#### Returns

`None` 

### set_allowDrop

Enables/Disables dragging.

#### Parameters

##### value `Boolean`

value

#### Returns

`None` 

### set_hoveredCssClass

Sets the name of the CSS class to be applied to the Node when hovered.

#### Parameters

##### value `String`

value

#### Returns

`None` 

### set_category

Sets the category of the Node.

#### Parameters

##### value `String`

value

#### Returns

`None` 

### get_selectedCssClass

Returns the name of the CSS class applied to the Node when selected.

#### Parameters

#### Returns

`String` 

### get_text

Retrieves the text for a Node.

#### Parameters

#### Returns

`String` 

### get_loadingStatusElement

Returns the DOM element representing loading status of the Node.

#### Parameters

#### Returns

`Element` DOM Element

### set_target

Sets the target of the Node.

#### Parameters

##### value `String`

value

#### Returns

`None` 

### scrollIntoView

Causes the Node to scroll into view, aligning the Node to the bottom of the TreeView area.

#### Parameters

#### Returns

`None` 

### select

Selects a Node

#### Parameters

#### Returns

`None` 

### get_prevVisibleNode

#### Parameters

#### Returns

`None` 

### get_inputElement

Returns the DOM element for the input when the Node is in Edit Mode

#### Parameters

#### Returns

`Element` DOM Element

### set_text

Sets the text of the Node.

#### Parameters

##### text `String`

text

#### Returns

`None` 

### set_checked

Marks or unmarks the checkbox for a Node.

#### Parameters

##### value `Boolean`

Boolean

#### Returns

`None` 

### get_expanded

Gets the expanded/collapsed state of a Node. The Node is expanded if get_expanded() returns true.

#### Parameters

#### Returns

`Boolean` 

### get_enableContextMenu

True if the Context Menus are enabled,False otherwise.

#### Parameters

#### Returns

`Boolean` 

### disable

Disables a Node

#### Parameters

#### Returns

`None` 

### get_checked

Gets the checked state of a Node. The Node is checked if get_checked() returns true.

#### Parameters

#### Returns

`Boolean` 

### get_checkBoxElement

Gets the DOM Element of the checkbox.

#### Parameters

#### Returns

`Element` DOM Element for the checkbox.

### get_disabledCssClass

Returns the name of the CSS class applied to the Node when disabled.

#### Parameters

#### Returns

`String` 

### set_toolTip

Sets the ToolTip of the Node.

#### Parameters

##### value `String`

value

#### Returns

`None` 

### unhighlight

Un-highlights a Node

#### Parameters

#### Returns

`None` 

### get_toolTip

Gets the ToolTip of the Node. If a ToolTip is not set, returns null.

#### Parameters

#### Returns

`String` 

### set_clientTemplate

Sets the value of the Node's ClientTemplate property.

#### Parameters

##### value `String`

value

#### Returns

`None` 

### get_allowDrag

True, if dragging is allowed, false otherwise.

#### Parameters

#### Returns

`Boolean` 

### get_isEnabled

Returns true if both the Node and the tree are enabled. If one of them is disabled, the get_isEnabled returns false.

#### Parameters

#### Returns

`Object` 

### get_nodeData

#### Parameters

#### Returns

`None` 

### set_selectedCssClass

Sets the name of the CSS class to be applied to the Node when selected.

#### Parameters

##### value `String`

value

#### Returns

`None` 

### get_level

Gets the Level of the Node in the TreeView structure. Root Nodes are at level 0, their children Nodes - at 1 and so on.

#### Parameters

#### Returns

`Number` 

### set_selected

Selects or unselects a Node based on the boolean parameter.

#### Parameters

##### value `Boolean`

value

#### Returns

`None` 

### get_selectedImageUrl

Returns the path to the image displayed next to the Node when selected.

#### Parameters

#### Returns

`String` 

