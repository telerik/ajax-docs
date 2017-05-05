---
title: RadTreeNode
page_title: RadTreeNode | RadTreeView for ASP.NET AJAX Documentation
description: RadTreeNode
slug: treeview/client-side-programming/objects/radtreenode
tags: radtreenode
published: True
position: 1
---

# RadTreeNode



## 

The table below lists the most important function of the **RadTreeNode** object.

>caution When setting a property to a node via the methods below, first make sure that the node is **already added** to the **TreeView** to prevent **JavaScript** errors on the page.
>



>caption  
| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **findControl** |String|Object|Returns the client-side object of the Control with the specified ID nested in the Node's Template. The ID passed as an argument to the function MUST be the ID attribute of the nested Control.|
| **toJsonString** |none|string|Returns the JSON representation of the node (serialize the node as a string in JSON format).|
| **get_previousNode** |none|RadTreeNode|Gets an instance of the previous sibling of a Node. (see **Example 1**)|
| **get_nextNode**  | none | RadTreeNode | Gets an instance of the next sibling of a Node. (see **Example 2**)|
| **expand & collapse**  | none | none | expand() opens a Node to display child Nodes. collapse() closes a Node to hide child Nodes. (see **Example 3**)|
| **set_expanded**  | bool | none | Expands or collapses a Node. (see **Example 4**)|
| **toggle**  | none | none | Collapses an expanded Node or expands a collapsed Node. (see **Example 5**)|
| **highlight & unhighlight**  | none | none | Highlights or un-highlights a Node. Highlighted Nodes are visually emphasized. The specific display is dictated by the [Skin]({%slug ribbonbar/appearance-and-styling/skins%}). (see **Example 6**)|
| **select & unselect**  | none | none | Select or unselect a Node. Selecting a Node typically emphasizes the Node. The specific display is dictated by the [Skin]({%slug ribbonbar/appearance-and-styling/skins%}). Highlighting and selecting have similar but not identical displays.If selecting a Node with a mouse does postback, calling the **select()** function will select the Node and do postback. (see **Example 7**)|
| **set_selected**  | bool | none | Selects or unselects a Node based on the boolean parameter.If selecting a Node with a mouse does postback, calling the **set_selected(true)** function will select the Node but will NOT do postback. (see **Example 8**)|
| **enable & disable**  | none | none | disable() makes a Node inactive and unclickable. Typically the Node is displayed in a lighter color dictated by the style setting of the [Skin]({%slug ribbonbar/appearance-and-styling/skins%}). enable() returns the Node to a usable, clickable state. disable is a functionally equivalent to set_enabled(false) and enable() is equivalent to set_enabled(true). (see **Example 9**)|
| **set_enabled**  | bool | none | Enables or disables a Node based on the boolean parameter passed in. set_enabled(false) is a functionally equivalent to disable() and set_enabled(true) is equivalent to enable(). (see **Example 10**)|
|  **check & uncheck**  | none | none | Marks or unmarks the checkbox for a Node. check() is a functionally equivalent to set_checked(true) and uncheck() is equivalent to set_checked(false); (see **Example 11**)|
| **set_checked**  | bool | none | Marks or unmarks the checkbox for a Node. check() is a functionally equivalent to set_checked(true) and uncheck() is equivalent to set_checked(false); (see **Example 12**)|
| **get_checkState**  | none | Telerik.Web.UI.TreeNodeCheckState | Returns the current check state of a node. It can be one of the following:Telerik.Web.UI.TreeNodeCheckState.Unchecked, Telerik.Web.UI.TreeNodeCheckState.Checked or Telerik.Web.UI.TreeNodeCheckState.Indeterminate |
| **startEdit** |none|none|Allows the Node to be edited. This is equivalent to the user[clicking the Node twice or pressing F2]({%slug treeview/accessibility-and-internationalization/keyboard-support%}). (see **Example 13**)|
| **endEdit**  | none | none | Takes the Node out of editing mode. (see **Example 14**)|
| **get_checkBoxElement**  | none | DOM Element | Gets the DOM Element of the checkbox. (see **Example 15**)|
| **scrollIntoView**  | none | none | Causes the Node to scroll into view, aligning the Node to the bottom of the TreeView area. This function repositions the *TreeView's* scrollbars, not the scrollbars for the page itself. (see **Example 16**)|
| **get_imageElement**  | none | DOM Element | Gets the DOM Element of the image set to the node. **Note:** Images are set using the RadTreeView **ImageUrl** property. (see **Example 17**)|
| **get_textElement**  | none | DOM Element | Gets the DOM Element of the text set to the Node. **Note** : Changes to the text element are not persisted across postbacks. (see **Example 18**)|
| **get_text**  | none | string | Retrieves the text for a Node. (see **Example 19**)|
| **set_text**  | string | none | Sets the text of the Node. |
| **get_value** |none|string|Gets the value of the Node.|
| **set_value** |string|none|Sets the value of the Node. (see **Example 20**)|
| **get_category**  | none | string | Gets the category of the Node. |
| **set_category** |string|none|Sets the category of the Node. (see **Example 21**)|
| **get_isEnabled**  | none | bool | Returns true if both the Node and the tree are enabled. If one of them is disabled, the get_isEnabled returns false. |
| **get_enabled** |none|bool|Gets the enabled state of the Node. The Node is enabled if get_enabled() returns true. (see **Example 22**)|
| **get_expanded**  | none | bool | Gets the expanded/collapsed state of a Node. The Node is expanded if get_expanded() returns true. (see **Example 23**)|
| **get_checked**  | none | bool | Gets the checked state of a Node. The Node is checked if get_checked() returns true. (see **Example 24**)|
| **get_selected**  | none | bool | Gets the selected state of a Node. Returns true if the Node is selected. (see **Example 25**)|
| **get_nodes**  | none | Telerik.Web.UI.RadTreeNodeCollection | Returns the RadTreeNodeCollection of a Node. (see **Example 26**)|
| **get_allNodes**  | none | array of RadTreeNode objects | Returns all child nodes of a Node. (see **Example 27**)|
| **get_parent**  | none | RadTreeNode/RadTreeView | Gets an instance of the parent-Node or the RadTreeView object if the Node is a root Node. (see **Example 28**)|
| **get_treeView**  | none | RadTreeView | Gets an instance to the parent RadTreeView. The example below retrieves the TreeView and calls various methods from the TreeView. (see **Example 29**)|
| **get_element**  | none | DOM Element | Returns the DOM element for a Node. (see **Example 30**)|
| **get_contextMenu**  | none | RadMenu | Returns the context menu object (if any). (see **Example 31**)|
| **get_navigateUrl**  | none | String | Returns the URL of the Node(the href attribute of the link). Null if the NavigateUrl server property is not set. |
| **set_navigateUrl** |String|none|Sets the URL of the Node. Works only if the NavigateUrl property has been set at the server-side beforehand or if the Node is not added at the client-side. (see **Example 32**)|
| **get_attributes**  | none | Collection | Returns a Collection of all custom attributes set to the Node. (see **Example 33**)|
| **set_target**  | String | none | Sets the target of the Node. |
| **get_target** |none|String|Gets the target of the Node. If a target is not set, returns **null** .|
| **set_toolTip** |String|none|Sets the ToolTip of the Node.|
| **get_toolTip** |none|String|Gets the ToolTip of the Node. If a ToolTip is not set, returns **null** .|
| **get_level** |none|Integer|Gets the Level of the Node in the TreeView structure. Root Nodes are at level 0, their children Nodes - at 1 and so on.|
| **set_checkable** |Boolean|none|Enables/Disables the checkability of the Node.|
| **get_imageUrl** |none|String|Returns the path to the image displayed next to the Node.|
| **set_imageUrl** |String|none|Sets the path to the image displayed next to the Node.|
| **get_disabledImageUrl** |none|String|Returns the path to the image displayed next to the Node when disabled.|
| **set_disabledImageUrl** |String|none|Sets the path to the image displayed next to the Node when disabled.|
| **get_expandedImageUrl** |none|String|Returns the path to the image displayed next to the Node when expanded.|
| **set_expandedImageUrl** |String|none|Sets the path to the image displayed next to the Node when expanded.|
| **get_selectedImageUrl** |none|String|Returns the path to the image displayed next to the Node when selected.|
| **set_selectedImageUrl** |String|none|Sets the path to the image displayed next to the Node when selected.|
| **get_hoveredImageUrl** |none|String|Returns the path to the image displayed next to the Node when hovered.|
| **set_hoveredImageUrl** |String|none|Sets the path to the image displayed next to the Node when hovered.|
| **get_cssClass** |none|String|Returns the name of the CSS class applied to the Node.|
| **set_cssClass** |String|none|Sets the name of the CSS class to be applied to the Node.|
| **get_disabledCssClass** |none|String|Returns the name of the CSS class applied to the Node when disabled.|
| **set_disabledCssClass** |String|none|Sets the name of the CSS class to be applied to the Node when disabled.|
| **get_hoveredCssClass** |none|String|Returns the name of the CSS class applied to the Node when hovered.|
| **set_hoveredCssClass** |String|none|Sets the name of the CSS class to be applied to the Node when hovered.|
| **get_childListElement** |none|HTML Element|Returns the UL HTML element which contains the HTML elements of the child Nodes. Null if there are no child Nodes.|
| **get_contextMenuID** |none|String|Returns the ID of the Context Menu assigned to the Node.|
| **set_contextMenuID** |String|none|Sets the ID of the Context menu to be assigned to the Node.|
| **get_toggleElement** |none|HTML Element|Returns the HTML element representing the toggle image. Null, if the Node has no child Nodes.|
| **get_enableContextMenu** |none|Boolean|True if the Context Menus are enabled, False otherwise.|
| **showLoadingStatus** |statusText, position|none|Shows the loading message at the specified position. The available positions are: Telerik.Web.UI.TreeViewLoadingStatusPosition.BelowNodeText Telerik.Web.UI.TreeViewLoadingStatusPosition.AfterNodeText Telerik.Web.UI.TreeViewLoadingStatusPosition.BeforeNodeText (see **Example 34**)|
| **hideLoadingStatus** | none | none | Hides the loading message. |
| **get_postBack** |none|Boolean|True if postback is enabled, false otherwise.|
| **set_postBack** |Boolean|none|Determines if the Node should postback.|
| **get_expandMode** |none|Int|Returns the ExpandMode of the Node.ExpandMode can be:0 - ExpandMode.ClientSide;1 - ExpandMode.ServerSide;2 - ExpandMode.ServerSideCallBack;3 - ExpandMode.WebService;|
| **set_expandMode** |ExpandMode|none|Sets the ExpandMode of the Node.ExpandMode can be:Telerik.Web.UI.TreeNodeExpandMode.ClientSide;Telerik.Web.UI.TreeNodeExpandMode.ServerSide; Telerik.Web.UI.TreeNodeExpandMode.ServerSideCallBack;Telerik.Web.UI.TreeNodeExpandMode.WebService;|
| **get_visible** |none|Boolean|True if the item is visible.|
| **set_visible** |Boolean|none|Sets the visibility of the item. (see **Example 35**)|
| **get_allowEdit** | none | Boolean | True, if Node edit is allowed, false, otherwise. |
| **set_allowEdit** |Boolean|none|Allows/Disallows Node editing.|
| **get_allowDrag** |none|Boolean|True, if dragging is allowed, false otherwise.|
| **set_allowDrag** |Boolean|none|Enables/Disables dragging.|
| **get_allowDrop** |none|Boolean|True, if dropping is allowed, false otherwise.|
| **set_allowDrop** |Boolean|none|Enables/Disables dragging.|
| **get_index** |none|int|Returns the index of the node in the nodes collection of its parent.|


>caption Example 1: Demonstrates the usage of the get_previousNode method
````JavaScript
function PreviousNode()
{
   var tree = $find("<%= RadTreeView1.ClientID %>");
   var node = tree.findNodeByText("Child RadTreeNode 2");
   if(node)
   {
       var prevNode = node.get_previousNode();
       prevNode.get_parent().expand();
       prevNode.select();
   }
}
````

>caption Example 2: Demonstrates the usage of the get_nextNode method
````JavaScript
function GetNextNode()
{
   var tree = $find("<%= RadTreeView1.ClientID %>");
   var node = tree.findNodeByText("Child RadTreeNode 1");
   if(node)
   {
       var prevNode = node.get_nextNode();
       prevNode.get_parent().expand();
       prevNode.select();
   }
}		
````

>caption Example 3: Demonstrates the usage of the expand/collapse methods
````JavaScript
function ExpandNode()
{
   var tree = $find("<%= RadTreeView1.ClientID %>");
   var node = tree.findNodeByText("Root Node 1");
   if(node)
   {
       node.expand();
       //node.collapse();
   }
}     
````

>caption Example 4: Demonstrates the usage of the set_expanded method
````JavaScript
function SetExpanded()
{
   var tree = $find("<%= RadTreeView1.ClientID %>");
   var node = tree.findNodeByText("Root Node 1");
   if(node)
   {
       if(node.get_expanded())    
       {       
           node.set_expanded(false);    
       }    
       else    
       {       
           node.set_expanded(true);     
       }          
   }
}		
````

>caption Example 5: Demonstrates the usage of the toggle method
````JavaScript
function ToggleNode()
{
   var tree = $find("<%= RadTreeView1.ClientID %>");
   var node = tree.findNodeByText("Root Node 1");
   if(node)
   {
       node.toggle();
   }
}		
````

>caption Example 6: Demonstrates the usage of the highlight/unhighlight methods
````JavaScript
function HighlightNode()
{
   var tree = $find("<%= RadTreeView1.ClientID %>");
   var node = tree.findNodeByText("Root Node 1");
   if(node)
   {
       node.highlight();
       //node.unhighlight();
   }
}		
````

>caption Example 7: Demonstrates the usage of the select/unselect method
````JavaScript
function SelectNode()
{
   var tree= $find("<%= RadTreeView1.ClientID %>");
   var node = tree.findNodeByText("Root Node 1");
   if (node)
   {
       if (node.get_selected())
       {
           node.unselect();
       }
       else
       {
           node.select();
       }
   }  
}		
````

>caption Example 8: Demonstrates the usage of the set_selected method
````JavaScript
function SetSelected()
{
   var tree = $find("<%= RadTreeView1.ClientID %>");
   var node = tree.findNodeByText("Root Node 1");
   if(node)
   {
       if(node.get_selected())    
       {       
           node.set_selected(false);    
       }    
       else    
       {       
           node.set_selected(true);     
       }          
   }
}
````

>caption Example 9: Demonstrates the usage of the enable/disable method
````JavaScript
function SetEnabled()
{
   var tree = $find("<%= RadTreeView1.ClientID %>");
   var node = tree.findNodeByText("Root Node 1");
   if(node)
   {
       if(node.get_enabled())    
       {        
           node.disable();     
       }    
       else    
       {          
           node.enable();
       }          
   }
}	
````

>caption Example 10: Demonstrates the usage of the set_enabled method
````JavaScript
function SetEnabled()
{
   var tree = $find("<%= RadTreeView1.ClientID %>");
   var node = tree.findNodeByText("Root Node 1");
   if(node)
   {
       if(node.get_enabled())    
       {       
           node.set_enabled(false);
       }    
       else    
       {       
           node.set_enabled(true);     
       }          
   }
}		
````

>caption Example 11: Demonstrates the usage of the check/uncheck method
````JavaScript
function SetChecked()
{
   var tree = $find("<%= RadTreeView1.ClientID %>");
   var node = tree.findNodeByText("Root Node 1");
   if(node)
   {
       if(node.get_checked())    
       {       
           //node.set_checked(false);      
           node.uncheck();      
       }    
       else    
       {       
           //node.set_checked(true);
           node.check();
       }          
   }
}		
````

>caption Example 12: Demonstrates the usage of the set_checked method
````JavaScript
function SetChecked()
{
   var tree = $find("<%= RadTreeView1.ClientID %>");
   var node = tree.findNodeByText("Root Node 1");
   if(node)
   {
       if(node.get_checked())    
       {        
           node.set_checked(false);      
           //node.uncheck();      
       }    
       else    
       {       
           node.set_checked(true);
           //node.check();
       }          
   }
}		
````

>caption Example 13: Demonstrates the usage of the startEdit method
````JavaScript
function Edit()
{
   var tree = $find("<%= RadTreeView1.ClientID %>");
   var node = tree.findNodeByText("Root Node 1");
   if(node)
   {
       node.set_text("Rename this node");
       node.startEdit();         
   }
}		
````

>caption Example 14: Demonstrates the usage of the endEdit method
````JavaScript
var text;
function Edit()
{
   var tree = $find("<%= RadTreeView1.ClientID %>");
   var node = tree.findNodeByText("Root Node 1");
   if(node)
   {
       text = node.get_text();
       node.startEdit();         
   }
}
function EndEdit()
{
   var tree = $find("<%= RadTreeView1.ClientID %>");
   var node = tree.findNodeByText("Root Node 1");
   if(node)
   {
       if (node.get_text() != text)
       {
           node.endEdit();        
       }
       else
       {
           alert("no changes were made");
       }
   }
}		
````

>caption Example 15: Demonstrates the usage of the get_checkBoxElement method
````JavaScript
function GetCheckBoxElement()
{
   var tree = $find("<%= RadTreeView1.ClientID %>");
   var node = tree.findNodeByText("Root Node 1");
   if(node)
   {
       alert(node.get_checkBoxElement().className);
   }
}		
````

>caption Example 16: Demonstrates the usage of the scrollIntoView method
````JavaScript
function ScrollNode()
{
   var tree = $find("<%= RadTreeView1.ClientID %>");
   var node = tree.findNodeByText("My Node");
   if(node)
   {
       node.scrollIntoView();
   }
}		
````

>caption Example 17: Demonstrates the usage of the get_imageElement method
````JavaScript
function GetImageElement()
{
   var tree = $find("<%= RadTreeView1.ClientID %>");       
   var node = tree.get_selectedNode();
   if(node)
   {
       alert(node.get_imageElement().src);
   }
}		
````


>caption Example 18: Demonstrates the usage of the get_textElement method
````JavaScript
function GetTextElement()
{
   var tree = $find("<%= RadTreeView1.ClientID %>");       
   var node = tree.get_selectedNode();
   if(node)
   {
       alert(node.get_textElement().innerHTML);
   }
}		
````


>caption Example 19: Demonstrates the usage of the get_text method
````JavaScript
function GetText()
{
   var tree = $find("<%= RadTreeView1.ClientID %>");       
   var node = tree.get_selectedNode();
   if(node)
   {
       alert(node.get_text());
   }
}		
````

>caption Example 20: Demonstrates the usage of the get_value method
````JavaScript
function GetValue()
{
   var tree = $find("<%= RadTreeView1.ClientID %>");       
   var node = tree.get_selectedNode();
   if(node)
   {
       alert(node.get_value());
   }
}		
````

>caption Example 21: Demonstrates the usage of the get_category method
````JavaScript
function GetCategory()
{
   var tree = $find("<%= RadTreeView1.ClientID %>");       
   var node = tree.get_selectedNode();
   if(node)
   {
       alert(node.get_category());
   }
}		
````

>caption Example 22: Demonstrates the usage of the get_enabled method
````JavaScript
function GetEnabled()
{
   var tree = $find("<%= RadTreeView1.ClientID %>");
   var node = tree.findNodeByText("Root Node 1");
   if(node)
   {
       if(node.get_enabled())    
       {       
           node.set_enabled(false);   
       }    
       else    
       {       
           node.set_enabled(true);      
       }          
   }
}		
````

>caption Example 23: Demonstrates the usage of the get_expanded method
````JavaScript
function GetExpanded()
{
   var tree = $find("<%= RadTreeView1.ClientID %>");
   var node = tree.findNodeByText("Root Node 1");
   if(node)
   {
       if(node.get_expanded())    
       {       
           node.set_expanded(false);    
       }    
       else    
       {       
           node.set_expanded(true);     
       }          
   }
}		
````

>caption Example 24: Demonstrates the usage of the get_checked method
````JavaScript
function GetChecked()
{
   var tree = $find("<%= RadTreeView1.ClientID %>");
   var node = tree.findNodeByText("Root Node 1");
   if(node)
   {
       if(node.get_checked())    
       {       
           node.set_checked(false);          
       }    
       else    
       {       
           node.set_checked(true);
       }          
   }
}		
````

>caption Example 25: Demonstrates the usage of the get_selected method
````JavaScript
function GetSelected()
{
   var tree = $find("<%= RadTreeView1.ClientID %>");
   var node = tree.findNodeByText("Root Node 1");
   if(node)
   {
       if(node.get_selected())    
       {       
           node.set_selected(false);    
       }    
       else    
       {       
           node.set_selected(true);     
       }          
   }
}		
````

>caption Example 26: Demonstrates the usage of the get_nodes method
````JavaScript
function GetNodes()
{
   var tree = $find("<%= RadTreeView1.ClientID %>");
   var node0 = tree.get_nodes().getNode(0);
   for (var i=0; i < node0.get_nodes().get_count();i++)  
   {        
       var node = node0.get_nodes().getNode(i);        
       alert(node.get_text());  
   }
}		
````

>caption Example 27: Demonstrates the usage of the get_allNodes method
````JavaScript
function GetNodes()
{
   var tree = $find("<%= RadTreeView1.ClientID %>");
   var allNodes = tree.get_nodes().getNode(0).get_allNodes();
   for (var i=0; i < allNodes.length; i++)  
   {        
       var node = allNodes[i];        
       alert(node.get_text());  
   }
}		
````

>caption Example 28: Demonstrates the usage of the get_parent method
````JavaScript
function GetParent()
{
   var tree= $find("<%= RadTreeView1.ClientID %>");
   var node = tree.findNodeByAttribute("MyCustomAttribute", "Some Value");
   node.get_parent().expand();
   node.select();
}		
````

>caption Example 29: Demonstrates the usage of the get_treeView method
````JavaScript
function GetTreeView(node) {
    if (node) {
        var tree = node.get_treeView();
        var nodeText = node.get_text();

        tree.trackChanges();
        // remove duplicates of node
        var foundNode = tree.findNodeByText(nodeText);
        while (foundNode) {
            tree.get_nodes().remove(foundNode)
            foundNode = tree.findNodeByText(nodeText);
        }

        // add selected node back in
        tree.get_nodes().add(node);

        tree.commitChanges();
    }
}		
````

>caption Example 30: Demonstrates the usage of the get_element method
````JavaScript
function GetNodeElement() {
    var tree = $find("<%= RadTreeView1.ClientID %>");
    var node = tree.get_selectedNode();
    if (node) {
        alert(node.get_element().innerHTML);
    }
}
````

>caption Example 31: Demonstrates the usage of the get_contextMenu method
````JavaScript
function GetContextMenu() {
    var tree = $find("<%= RadTreeView1.ClientID %>");
    var node = tree.get_selectedNode();
    if (node) {
        var menu = node.get_contextMenu();
        if (menu)
            menu.hide();
    }
}			
````

>caption Example 32: Demonstrates the usage of the set_navigateUrl method
````JavaScript
function setNavigateUrlToTheSelectedNode() {
    var tree = $find("<%= RadTreeView1.ClientID %>");
    var node = tree.get_selectedNode();
    if (node) {
        node.set_navigateUrl("http://www.example.com");
    }
}			
````

>caption Example 33: Demonstrates the usage of the get_attributes method
````JavaScript
function getCustomAttributes() {
    var tree = $find("<%= RadTreeView1.ClientID %>");
    var node = tree.get_selectedNode();
    if (node) {
        var attributes = node.get_attributes();
        attributes.setAttribute("AttributeName", AttributeValue);
        var attribute1 = attributes.getAttribute("AttributeName");

    }
}		
````

>caption Example 34: Demonstrates the usage of the showLoadingStatus method
````JavaScript
node.showLoadingStatus("Loading…", Telerik.Web.UI.TreeViewLoadingStatusPosition.BelowNodeText);
````

>caption Example 35: Demonstrates the usage of the set_expandMode method
````JavaScript
node.set_expandMode(Telerik.Web.UI.TreeNodeExpandMode.WebService);
````


# See Also

 * [RadTreeView]({%slug treeview/client-side-programming/objects/radtreeview%})

 * [RadTreeNodeCollection]({%slug treeview/client-side-programming/objects/radtreenodecollection%})
