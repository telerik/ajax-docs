---
title: Telerik.Web.UI.RadTreeView
page_title: Client-side API Reference
description: Client-side API Reference
---

# Telerik.Web.UI.RadTreeView : Telerik.Web.UI.ControlItemContainer 

## Methods

### get_draggingClueElement

Returns the DOM element for the dragged node (during OnClientNodeDragging event handler)

#### Parameters

#### Returns

`Element` DOM element for the dragged node

### set_persistLoadOnDemandNodes

Enables/Disables PersistLoadOnDemandNodes property.

#### Parameters

##### value `Boolean`

value

#### Returns

`None` 

### get_checkedIndexes

#### Parameters

#### Returns

`None` 

### showNodeContextMenu

Displays the context menu for a Node which is equal to the first parameter using pair as a second parameter.

#### Parameters

##### node `Telerik.Web.UI.RadTreeNode`

node

##### domEvent `Sys.UI.DomEvent`

domEvent

#### Returns

`None` 

### set_singleExpandPath

Enables/Disables SingleExpandPath property.

#### Parameters

##### value `Boolean`

value

#### Returns

`None` 

### set_expandAnimation

#### Parameters

#### Returns

`None` 

### findNodeByText

Gets the first instance of a Node with the specified text.

#### Parameters

##### text `String`

Text of the Node

#### Returns

`Telerik.Web.UI.RadTreeNode` 

### uncheckNodes

Unchecks the passed nodes. The parameter is only one and can be Telerik.Web.UI.RadTreeNodeCollection or regular Array.

#### Parameters

##### nodes `Telerik.Web.UI.RadTreeNodeCollection`

The nodes to be unchecked

#### Returns

`None` 

### get_allowNodeEditing

True if the AllowNodeEditing property is enabled, false otherwise.

#### Parameters

#### Returns

`Boolean` Boolean

### selectAllNodes

Selects all Nodes at all levels of the tree

#### Parameters

#### Returns

`Object` 

### checkAllNodes

Checks all nodes of the TreeView.

#### Parameters

#### Returns

`None` 

### get_collapsedIndexes

#### Parameters

#### Returns

`None` 

### unselectAllNodes

Un-selects all Nodes at all levels of the tree.

#### Parameters

#### Returns

`None` 

### checkNodes

Checks the passed nodes. The parameter is only one and can be Telerik.Web.UI.RadTreeNodeCollection or regular Array.

#### Parameters

##### nodes `Telerik.Web.UI.RadTreeNodeCollection`

The nodes to be checked

#### Returns

`None` 

### get_enableDragAndDropBetweenNodes

True if the EnableDragAndDropBetweenNodes property is enabled, false otherwise.

#### Parameters

#### Returns

`Boolean` Boolean

### set_clientTemplate

Sets the value of the TreeView's ClientNodeTemplate property.

#### Parameters

##### value `String`

value

#### Returns

`None` 

### get_loadingMessage

Returns the value of the RadTreeView's LoadingMessage property. The default value is "Loading..."

#### Parameters

#### Returns

`String` String

### get_selectedNode

Gets the instance of the currently selected Node. Null if none.

#### Parameters

#### Returns

`Telerik.Web.UI.RadTreeNode` RadTreeNode

### get_webServiceSettings

#### Parameters

#### Returns

`None` 

### uncheckAllNodes

Unchecks all nodes of the TreeView.

#### Parameters

#### Returns

`None` 

### findNodeByValue

Gets the first instance of a Node with the specified value.

#### Parameters

##### value `String`

Value of the Node

#### Returns

`Telerik.Web.UI.RadTreeNode` 

### set_nodeData

#### Parameters

#### Returns

`None` 

### set_multipleSelect

Enables/Disables multiple selection.

#### Parameters

##### value `Boolean`

value

#### Returns

`None` 

### get_id

Gets the server ID of the control.

#### Parameters

#### Returns

`Object` 

### get_enableDragAndDrop

True if the EnableDragAndDrop property is enabled, false otherwise.

#### Parameters

#### Returns

`Boolean` Boolean

### set_webServiceSettings

#### Parameters

#### Returns

`None` 

### get_contextMenus

Returns an Array of the treeview context menus

#### Parameters

#### Returns

`Array` Array

### set_enableDragAndDrop

Enables/Disables drag and drop.

#### Parameters

##### value `Boolean`

value

#### Returns

`None` 

### commitChanges

Writes the changes to the TreeView that were made since a previous call to trackChanges, so that they are preserved on the server as well.

#### Parameters

#### Returns

`None` 

### get_multipleSelect

True if MultipleSelect property is enabled, false otherwise.

#### Parameters

#### Returns

`Boolean` Boolean

### get_childListElement

Returns the DOM element for the root list of nodes in the treeview

#### Parameters

#### Returns

`Element` DOM element for the root nodes list

### set_contextMenuIDs

#### Parameters

#### Returns

`None` 

### get_selectedNodes

Gets an Array of all selected Nodes (useful when MultipleSelect property is trackChanges, so that they are preserved

#### Parameters

#### Returns

`Array` Array

### get_selectedIndexes

#### Parameters

#### Returns

`None` 

### set_loadingStatusPosition

Sets the value of LoadingStatusPosition property.

#### Parameters

##### value `Number`

value

#### Returns

`None` 

### findNodeByAbsoluteUrl

Returns the first RadTreeNode object whose NavigateUrl property is equal to the passed parameter. Note that the parameter should ends with "/" like: var item = sender.findNodeByAbsoluteUrl("http://www.test.com/");

#### Parameters

##### url `String`

NavigateUrl of the Node

#### Returns

`Telerik.Web.UI.RadTreeNode` 

### get_nodes

Returns the root level RadTreeNodeCollection.

#### Parameters

#### Returns

`Telerik.Web.UI.RadTreeNodeCollection`  Telerik.Web.UI.RadTreeNodeCollection

### set_expandedIndexes

#### Parameters

#### Returns

`None` 

### set_allowNodeEditing

Enables/Disables node editing.

#### Parameters

##### value `Boolean`

value

#### Returns

`None` 

### get_checkedNodes

Returns an array of the checked nodes when CheckBoxes="True".

#### Parameters

#### Returns

`Array` Array

### selectNodes

Selects the passed nodes (if MultipleSelection is enabled), or only the last from the passed nodes (if MultipleSelection is disabled). The parameter is only one and can be Telerik.Web.UI.RadTreeNodeCollection or regular Array.

#### Parameters

##### nodes `Telerik.Web.UI.RadTreeNodeCollection`

The nodes to be selected

#### Returns

`None` 

### get_loadingStatusPosition

Returns the value of the RadTreeView's LoadingStatusPosition property.

#### Parameters

#### Returns

`Number` Number

### get_allNodes

Returns an array of all the Nodes within the TreeView.

#### Parameters

#### Returns

`Telerik.Web.UI.RadTreeNode[]` Returns an array of all the Nodes within the TreeView.

### set_loadingMessage

Sets a loading message to the TreeView.

#### Parameters

##### value `String`

value

#### Returns

`None` 

### get_enabled

Gets the enabled state of the TreeView.

#### Parameters

#### Returns

`Boolean` 

### saveClientState

#### Parameters

#### Returns

`None` 

### set_checkedIndexes

#### Parameters

#### Returns

`None` 

### get_persistLoadOnDemandNodes

True if the PersistLoadOnDemandNodes property is enabled, false otherwise.

#### Parameters

#### Returns

`Boolean` Boolean

### findNodeByUrl

Returns the first RadTreeNode object whose NavigateUrl property is equal to the passed parameter.

#### Parameters

##### url `String`

NavigateUrl of the Node

#### Returns

`Telerik.Web.UI.RadTreeNode` 

### set_enabled

Enables/Disables the TreeView.

#### Parameters

##### value `Boolean`

value

#### Returns

`None` 

### findNodeByAttribute

Gets the first instance of a Node with the specified attribute, value pair.

#### Parameters

##### attributeName `String`

attributeName

##### attributeValue `String`

attributeValue

#### Returns

`Telerik.Web.UI.RadTreeNode` 

### get_collapseAnimation

#### Parameters

#### Returns

`None` 

### get_singleExpandPath

True if the SingleExpandPath property is enables, false otherwise.

#### Parameters

#### Returns

`Boolean` Boolean

### bulkUpdateWith

Bulks update operations over the current TreeView instance, executed in the passed function. The parameter is only one and it's a function.

#### Parameters

##### func `Function`

The function that should be executed

#### Returns

`None` 

### get_element

Gets a reference to the DIV element that wraps the TreeView.

#### Parameters

#### Returns

`Element` 

### get_clientTemplate

Returns the value of the TreeView's ClientNodeTemplate property.

#### Parameters

#### Returns

`None` 

### get_expandedIndexes

#### Parameters

#### Returns

`None` 

### set_collapsedIndexes

#### Parameters

#### Returns

`None` 

### addNodesTo

Adds the passed nodes to the passed target's node collection. The usage of this method is preferable when a big amount of child nodes is being added to a certain node's Collection, because it batches the updates to the DOM in a single operation and this is a major performance improvement.

#### Parameters

##### target `Telerik.Web.UI.RadTreeNode`

The target receiving the new nodes

##### nodes `Telerik.Web.UI.RadTreeNodeCollection`

The nodes to be added

#### Returns

`None` 

### get_expandAnimation

#### Parameters

#### Returns

`None` 

### get_nodeData

#### Parameters

#### Returns

`None` 

### get_contextMenuIDs

Returns an Array containing the IDs of the treeview context menus

#### Parameters

#### Returns

`Array` Array

### set_selectedIndexes

#### Parameters

#### Returns

`None` 

### unselectNodes

Unelects the passed nodes. The parameter is only one and can be Telerik.Web.UI.RadTreeNodeCollection or regular Array.

#### Parameters

##### nodes `Telerik.Web.UI.RadTreeNodeCollection`

The nodes to be unselected

#### Returns

`None` 

### set_collapseAnimation

#### Parameters

#### Returns

`None` 

### set_enableDragAndDropBetweenNodes

Enables/Disables drag and drop between nodes.

#### Parameters

##### value `Boolean`

value

#### Returns

`None` 

## Events

### contextMenuItemClicked

The contextMenuItemClicked client-side event occurs when the user clicks the context menu item for a node. 

#### Event Data

#####  sender `Telerik.Web.UI.RadTreeView`

The instance of the RadTreeView raised the event.

##### args `Telerik.Web.UI.RadTreeViewContextMenuItemEventArgs`

The event arguments.

### contextMenuItemClicking

The contextMenuItemClicking client-side event occurs when the user clicks a menu item, but before the OnClientContextMenuItemClicked event fires. The event is called just prior to postback or url redirection and can be canceled.

#### Event Data

#####  sender `Telerik.Web.UI.RadTreeView`

The instance of the RadTreeView raised the event.

##### args `Telerik.Web.UI.RadTreeViewContextMenuItemCancelEventArgs`

The event arguments.

### contextMenuShowing

The contextMenuShowing client-side event occurs just prior to opening a context menu. If the event is canceled, the OnClientContextMenuShown event does not fire.

#### Event Data

#####  sender `Telerik.Web.UI.RadTreeView`

The instance of the RadTreeView raised the event.

##### args `Telerik.Web.UI.RadTreeViewContextMenuCancelEventArgs`

The event arguments.

### contextMenuShown

The contextMenuShown client-side event occurs after opening a context menu. 

#### Event Data

##### sender `Telerik.Web.UI.RadTreeView`

The instance of the RadTreeView raised the event.

##### args `Telerik.Web.UI.RadTreeViewContextMenuEventArgs`

The event arguments.

### doubleClick

The doubleClick client-side event occurs when the end user double-clicks a node. 

#### Event Data

#####  sender `Telerik.Web.UI.RadTreeView`

The instance of the RadTreeView raised the event.

##### args `Telerik.Web.UI.RadTreeNodeEventArgs`

The event arguments.

### keyPressing

The keyPressing client-side event occurs when any key is clicked while the treeview is having the focus.

#### Event Data

##### sender `Telerik.Web.UI.RadTreeView`

The instance of the RadTreeView raised the event.

##### args `Telerik.Web.UI.RadTreeNodeCancelEventArgs`

The event arguments.

### load

The load event fires after the RadTreeView client-side object has been fully initialized.

#### Event Data

#####  sender `Telerik.Web.UI.RadTreeView`

The instance of the RadTreeView raised the event.

##### args `Sys.EventArgs`

The event does not have arguments.

### mouseOut

The mouseOut client-side event occurs just before the mouse passes out of a node.

#### Event Data

#####  sender `Telerik.Web.UI.RadTreeView`

The instance of the RadTreeView raised the event.

##### args `Telerik.Web.UI.RadTreeNodeEventArgs`

The event arguments.

### mouseOver

The mouseOver client-side event occurs when the mouse cursor passes over a node.

#### Event Data

#####  sender `Telerik.Web.UI.RadTreeView`

The instance of the RadTreeView raised the event.

##### args `Telerik.Web.UI.RadTreeNodeEventArgs`

The event arguments.

### nodeAnimationEnd

The nodeAnimationEnd event fires when the node is expanded / collapsed and after the animation has finished.

#### Event Data

#####  sender `Telerik.Web.UI.RadTreeView`

The instance of the RadTreeView raised the event.

##### args `Object`

The event arguments.

### nodeChecked

The nodeChecked client-side event occurs after the end user selects a checkbox using mouse or keyboard. The node checked status returned by the node get_checked() function has now changed to reflect the new value. The action can longer be canceled.

#### Event Data

##### sender `Telerik.Web.UI.RadTreeView`

The instance of the RadTreeView raised the event.

##### args `Telerik.Web.UI.RadTreeNodeEventArgs`

The event arguments.

### nodeChecking

The nodeChecking client-side event occurs when the user selects a checkbox using mouse or keyboard. The checked state returned by the node get_checked() function has not changed to reflect the new value. The event is called just prior to postback or url redirection and can be canceled. 

#### Event Data

##### sender `Telerik.Web.UI.RadTreeView`

The instance of the RadTreeView raised the event.

##### args `Telerik.Web.UI.RadTreeNodeCancelEventArgs`

The event arguments.

### nodeClicked

The nodeClicked client-side event occurs when the end user navigates to a node using mouse or keyboard. 

#### Event Data

##### sender `Telerik.Web.UI.RadTreeView`

The instance of the RadTreeView raised the event.

##### args `Telerik.Web.UI.RadTreeNodeEventArgs`

The event arguments.

### nodeClicking

The nodeClicking client-side event occurs just before the user navigates to a node using mouse or keyboard. The event is called just prior to postback or url redirection and can be canceled.

#### Event Data

#####  sender `Telerik.Web.UI.RadTreeView`

The instance of the RadTreeView raised the event.

##### args `Telerik.Web.UI.RadTreeNodeCancelEventArgs`

The event arguments.

### nodeCollapsed

The nodeCollapsed client-side event occurs after the user clicks the collapse (minus) button.

#### Event Data

#####  sender `Telerik.Web.UI.RadTreeView`

The instance of the RadTreeView raised the event.

##### args `Telerik.Web.UI.RadTreeNodeEventArgs`

The event arguments.

### nodeCollapsing

The nodeCollapsing client-side event occurs when the user clicks the collapse (minus) button. The event is called just prior to postback or url redirection and can be canceled.

#### Event Data

#####  sender `Telerik.Web.UI.RadTreeView`

The instance of the RadTreeView raised the event.

##### args `Telerik.Web.UI.RadTreeNodeCancelEventArgs`

The event arguments.

### nodeDataBound

The nodeDataBound event fires when a Node is being created during Web Service Load on Demand.

#### Event Data

#####  sender `Telerik.Web.UI.RadTreeView`

The instance of the RadTreeView raised the event.

##### args `Telerik.Web.UI.RadTreeNodeEventArgs`

The event arguments.

### nodeDragging

The nodeDragging client-side event is called each time the user moves the mouse while dragging a node. Note: You can use this event to change the mouse cursor so that user knows where they can drag a node, i.e. only over a grid, editor or another treeview, etc.

#### Event Data

##### sender `Telerik.Web.UI.RadTreeView`

The instance of the RadTreeView raised the event.

##### args `Telerik.Web.UI.RadTreeNodeDraggingEventArgs`

The event arguments.

### nodeDragStart

The nodeDragStart client-side event is called each time the user begins to drag a node. 

#### Event Data

##### sender `Telerik.Web.UI.RadTreeView`

The instance of the RadTreeView raised the event.

##### args `Telerik.Web.UI.RadTreeNodeDraggingEventArgs`

The event arguments.

### nodeDropped

The nodeDropped client-side event is called after node(s) are dropped.

#### Event Data

#####  sender `Telerik.Web.UI.RadTreeView`

The instance of the RadTreeView raised the event.

##### args `Telerik.Web.UI.RadTreeNodeDroppedEventArgs`

The event arguments.

### nodeDropping

The nodeDropping client-side event is called before nodes are dropped and can be canceled.

#### Event Data

#####  sender `Telerik.Web.UI.RadTreeView`

The instance of the RadTreeView raised the event.

##### args `Telerik.Web.UI.RadTreeNodeDroppingEventArgs`

The event arguments.

### nodeEdited

The nodeEdited client-side event is called after editing is completed.

#### Event Data

#####  sender `Telerik.Web.UI.RadTreeView`

The instance of the RadTreeView raised the event.

##### args `Telerik.Web.UI.RadTreeNodeEventArgs`

The event arguments.

### nodeEditing

The nodeEditing client-side event is called when editing is completed and before the OnClientNodeEdit event fires. This event can be canceled.

#### Event Data

#####  sender `Telerik.Web.UI.RadTreeView`

The instance of the RadTreeView raised the event.

##### args `Telerik.Web.UI.RadTreeNodeEditingEventArgs`

The event arguments.

### nodeEditStart

The nodeEditStart client-side event is called as the edit begins. This event can not be canceled.

#### Event Data

#####  sender `Telerik.Web.UI.RadTreeView`

The instance of the RadTreeView raised the event.

##### args `Telerik.Web.UI.RadTreeNodeEventArgs`

The event arguments.

### nodeExpanded

The nodeExpanded client-side event occurs after a parent node expands to display child nodes.

#### Event Data

#####  sender `Telerik.Web.UI.RadTreeView`

The instance of the RadTreeView raised the event.

##### args `Telerik.Web.UI.RadTreeNodeEventArgs`

The event arguments.

### nodeExpanding

The nodeExpanding client-side event occurs when the user clicks the expand (plus) button. The event is called just prior to postback or url redirection and can be canceled.

#### Event Data

#####  sender `Telerik.Web.UI.RadTreeView`

The instance of the RadTreeView raised the event.

##### args `Telerik.Web.UI.RadTreeNodeCancelEventArgs`

The event arguments.

### nodePopulated

The nodePopulated client-side event occurs when child nodes are loaded on-demand. The ExpandMode property of the parent node should be ServerSideCallback or WebService for this event to fire.

#### Event Data

#####  sender `Telerik.Web.UI.RadTreeView`

The instance of the RadTreeView raised the event.

##### args `Telerik.Web.UI.RadTreeNodePopulatedEventArgs`

The event arguments.

### nodePopulating

The nodePopulating client-side event occurs just before child nodes are loaded on-demand. The ExpandMode property of the parent node should be ServerSideCallback or WebService for this event to fire.

#### Event Data

#####  sender `Telerik.Web.UI.RadTreeView`

The instance of the RadTreeView raised the event.

##### args `Telerik.Web.UI.RadTreeNodePopulatingEventArgs`

The event arguments.

### nodePopulationFailed

The nodePopulationFailed client-side event occurs when:
- Child nodes are loaded on-demand.
- The parent node ExpandMode property is ServerSideCallback or WebService.
- An exception occurs while loading.

#### Event Data

#####  sender `Telerik.Web.UI.RadTreeView`

The instance of the RadTreeView raised the event.

##### args `Telerik.Web.UI.RadTreeNodePopulationFailedEventArgs`

The event arguments.

### templateDataBound

The templateDataBound client-side event of the RadTreeView is fired after the client template is bound and the binding expression are evaluated.

#### Event Data

#####  sender `Telerik.Web.UI.RadTreeView`

The instance of the RadTreeView raised the event.

##### args `Telerik.Web.UI.RadTemplateBoundEventArgs`

The event arguments.

### treePopulated

The treePopulated client-side event of the RadTreeView is fired after it is populated with data.

#### Event Data

#####  sender `Telerik.Web.UI.RadTreeView`

The instance of the RadTreeView raised the event.

##### args `Sys.EventArgs`

### treePopulating

The treePopulated client-side event of the RadTreeView is fired before it is populated with data.

#### Event Data

#####  sender `Telerik.Web.UI.RadTreeView`

The instance of the RadTreeView raised the event.

##### args `Sys.EventArgs`
