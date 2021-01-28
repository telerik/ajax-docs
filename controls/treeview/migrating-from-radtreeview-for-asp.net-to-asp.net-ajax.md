---
title: Migrating from RadTreeView for ASP.NET to ASP.NET AJAX
page_title: Migrating from RadTreeView for ASP.NET to ASP.NET AJAX - RadTreeView
description: Check our Web Forms article about Migrating from RadTreeView for ASP.NET to ASP.NET AJAX.
slug: treeview/migrating-from-radtreeview-for-asp.net-to-asp.net-ajax
tags: migrating,from,radtreeview,for,asp.net,to,asp.net,ajax
published: True
position: 4
---

# Migrating from RadTreeView for ASP.NET to ASP.NET AJAX



**RadTreeView for ASP.NET AJAX** contains a number of changes from moving to the ASP.NET Ajax framework and to the Telerik.Web.UI suite.These changes are listed below:

## Client-Side Changes



### RadTreeView




| RadTreeView Client-Side Object - "Classic" | RadTreeView Client-Side Object for ASP.NET AJAX |
| ------ | ------ |
|||
| **Methods** ||
|FindNodeByText|findNodeByText()|
|FindNodeByValue|findNodeByValue()|
|FindNodeByAttribute|findNodeByAttribute()|
|GetSelectedNodes|get_selectedNodes()|
|UnSelectAllNodes|unselectAllNodes()|
|UpdateState|N/A (no longer required)|
|HideContextMenu|N/A (other API will be provided for Context Menu handling)|
|||
| **Properties** ||
|Nodes|get_nodes()The return value is no longer an Array. The return value is now a Telerik.Web.UI.RadTreeNodeCollection object.Enumerating Nodes:<script type=”text/javascript”>for (var i=0; i<tree.get_nodes().get_count();i++){var node = tree.get_nodes().getNode(i);alert(node.get_text());}</script>|
|AllNodes|get_allNodes()The return value is Array.|
|ID|get_id()|
|SelectedNode|get_selectedNode()|



### RadTreeNode




| RadTreeNode Client-Side Object - "Classic" | RadTreeNode Client-Side Object for ASP.NET AJAX |
| ------ | ------ |
|||
| **Methods** ||
|Prev|get_previousNode()|
|Next|get_nextNode()|
|Expand|set_expanded(true) or expand()|
|Collapse|set_expanded(false) or collapse()|
|Toggle|toggle()|
|Highlight|highlight()|
|Select|set_selected(true) or select()|
|UnSelect|set_selected(false) or unselect()|
|Enable|set_enabled(true) or enable()|
|Disable|set_enabled(false) or disable()|
|Check|set_checked(true) or check()|
|UnCheck|set_checked(false) or uncheck()|
|StartEdit|startEdit()|
|EndEdit|endEdit()|
|CheckElement|get_checkBoxElement()|
|ScrollIntoView|scrollIntoView()|
|ImageElement|get_imageElement()|
|TextElement|get_textElement()|
||get_contentElement()Returns an HTML DOM element (a <LI> tag) that represents a Tree Node.|
| **Properties** ||
|Text|get_text()|
|Value|get_value()|
|Category|get_category()|
|Enabled|get_enabled()|
|Expanded|get_expanded()|
|Checked|get_checked()|
|Selected|get_selected()|
|Nodes|get_nodes()|
|Parent|get_parent()This method will return the RadTreeView if the Node is root Node.|
|TreeView|get_treeView()|
|Attributes|get_attributes(), getAttribute() and setAttribute()|



### RadTreeNodeCollection New Methods

See [RadTreeNodeCollection Object]({%slug treeview/client-side-programming/objects/radtreenodecollection%}) for more details.




| RadTreeNodeCollection Client-Side Object for ASP.NET AJAX |
| ------ |
||
|add|
|insert|
|remove|
|removeAt|
|get_count|
|getNode|
|indexOf|



## Server-Side Changes



### RadTreeView Changes




| RadTreeView - "Classic" | RadTreeView for ASP.NET AJAX |
| ------ | ------ |
|||
| **Properties** ||
|AfterClientFocus|OnClientFocused|
|BeforeClientContextMenu|OnClientContextMenuShowing|
|BeforeClientClick|OnClientNodeClicking|
|AfterClientClick|OnClientNodeClicked|
|AfterClientCallBackError|OnClientCallbackError|
|BeforeClientHighlight|OnClientMouseOver|
|AfterClientHighlight|OnClientMouseOver|
|BeforeClientDoubleClick|OnClientDoubleClicking|
|AfterClientMouseOut|OnClientMouseOut|
|AfterClientEdit|OnClientNode|
|BeforeClientDrop|OnClientNodeDropping|
|AfterClientDrop|OnClientNodeDropped|
|BeforeClientContextClick|OnClientContextClicking|
|BeforeClientCheck|OnClientNodeChecking|
|AfterClientCheck|OnClientNodeChecked|
|BeforeClientDrag|OnClientNodeDragStart|
|AfterClientMove|OnClientNodeDragging|
|AppendDataBoundNodes|AppendDataBoundItems|
|NodeBound|NodeDataBound|
|||
| **Types** ||
|LoadingMessagePosition|TreeViewLoadingStatusPosition|



### RadTreeView Deleted Methods and Properties




| Deleted Method or Property | Description |
| ------ | ------ |
|||
|ContentFile|Use the LoadContentFile method instead.|
|AjaxUrl||
|ContextMenuContentFile|Replaced by new[context menus]({%slug treeview/context-menus/overview%})|
|AutoPostBack|Postback appears as soon as you hook on any server event requiring postback|
|AutoPostBackOnCheck|Subscribing to the NodeCheck event will enable postback for checking operations|
|GetContextMenusXml|Replaced by new[context menus]({%slug treeview/context-menus/overview%})|
|LoadContextMenusXmlString|Replaced by new[context menus]({%slug treeview/context-menus/overview%})|
|OnClientNodeToggling / Toggled|Replaced by OnClientNodeExpanding, OnClientNodeExpanded, OnClientNodeCollapsing, OnClientNodeCollapsed events|
|SSL|Treeview output is SSL compliant by default|
|ImagesBaseDir|The user would specify the whole path|
|RetainScrollPosition|This feature is on by default|
|IsCallback|Use Page.IsCallBack instead|
|LoadingMessageCssClass|Now controlled by the skin css styles|
|AfterClientFocus|Use the 'onfocus' attribute for the same purpose.|

### RadTreeView Changed Return Types


>caption  

| Changed Return Type for Method | Description |
| ------ | ------ |
|||
|GetAllNodes|Returns IList<RadTreeNode> instead of ArrayList|
|CheckedNodes|Returns IList<RadTreeNode> instead of ArrayList|
|SelectedNodes|Returns IList<RadTreeNode> instead of ArrayList|



### RadTreeViewEventHandler



RadTreeViewEventHandler has been split into other delegates:

1. **RadTreeViewEventHandler** is used by the following events:
    * NodeClick
    * NodeDataBound
    * NodeCreated
    * NodeExpand
    * NodeCollapse
    * NodeCheck

1. **RadTreeViewDragDropEventHandler** is used only by the NodeDrop event

1. **RadTreeViewEditEventHandler** is used only by the NodeEdit event



### RadTreeNode Changes




>caption  

| RadTreeNode - "Classic" | RadTreeNode for ASP.NET AJAX |
| ------ | ------ |
|||
| **Properties** ||
|CssClassSelect|SelectedCssClass|
|ImageExpandedUrl|ExpandedImageUrl|
|Parent|ParentNode|
|EditEnabled|AllowEdit|
|DragEnabled|AllowDrag|
|DropEnabled|AllowDrop|



### RadTreeNodeEventArgs



That class has been split into other classes:

1. **RadTreeNodeEventArgs** contains only one property - Node. It is used by the following events:
    * NodeClick
    * NodeDataBound
    * NodeCreated
    * NodeExpand
    * NodeCollapse
    * NodeCheck

1. **RadTreeNodeDragDropEventArgs** is used solely by the NodeDrop event. It contains the following properties:
    * SourceDragNode
    * DestDragNode
    * DropPosition
    * HtmlElementID

1. **RadTreeNodeEditEventArgs** is used solely by the NodeEdit event. It contains the following properties
    * Node
    * Text


