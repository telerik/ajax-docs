---
title: Add a Node in edit mode by Default
page_title: Add a Node in edit mode by Default - RadTreeView
description: Check our Web Forms article about Add a Node in edit mode by Default.
slug: treeview/application-scenarios/general/add-a-node-in-edit-mode-by-default
tags: add,a,node,in,edit,mode,by,default
published: True
position: 2
---

# Add a Node in edit mode by Default



## 

The example given below uses the **OnContextMenuItemClick** and **NodeEdit** events in conjunction with **client-side script** to enable the requested functionality.

The result is:

After clicking the context menu item with text **Create** of a random **TreeView** Node, a Node with text **default** will be added as last root Node in the **TreeView** structure and will be in edit mode. The changes in the text made by the user are reflected in the **NodeEdit** event handler. Review the code snippet below for further details:

````JavaScript
function HighlightNode(value) {
    var tree = $find("<%= RadTreeView1.ClientID %>");
    var node = tree.findNodeByValue(value);
    if (node != null) {
        node.startEdit();
    }
}
````
````C#
private void AddNode(RadTreeViewContextMenuEventArgs e)
{
    RadTreeNode newNode = new RadTreeNode();
    newNode.Value = System.Guid.NewGuid().ToString();
    newNode.Text = "default";
    newNode.AllowEdit = true;
    RadTreeView1.Nodes.Add(newNode);
    string strScript = "Sys.Application.add_load(function(){ HighlightNode(\"" + newNode.Value + "\")})";
    ScriptManager.RegisterStartupScript(typeof(string), "ScriptKey", strScript, true);
    //if you are using RadAjaxManager, the above two lines should be replaced with:
    //string script = "HighlightNode(\"" + newNode.Value+ "\")";
    //this.RadAjaxManager.ResponseScripts.Add(script);
}
protected void RadTreeView1_ContextMenuItemClick(object sender, RadTreeViewContextMenuEventArgs e)
{
    if (e.MenuItem.Text == "Create")
    {
        AddNode(e);
    }
}
protected void RadTreeView1_NodeEdit(object sender, RadTreeNodeEditEventArgs e)
{
    RadTreeNode edited = e.Node;
    edited.Text = e.Text.ToString();
} 	
````
````VB.NET
Private Sub AddNode(ByVal e As RadTreeViewContextMenuEventArgs)
    Dim newNode As New RadTreeNode()
    newNode.Value = System.Guid.NewGuid().ToString()
    newNode.Text = "default"
    newNode.AllowEdit = True
    RadTreeView1.Nodes.Add(newNode)
    Dim strScript As String = "Sys.Application.add_load(function(){ HighlightNode(""" + newNode.Value + """)})"
    ScriptManager.RegisterStartupScript(GetType(String), "ScriptKey", strScript, True)
    'if you are using RadAjaxManager, the above two lines should be replaced with:
    'string script = "HighlightNode(\"" + newNode.Value+ "\")";
    'this.RadAjaxManager.ResponseScripts.Add(script);
End Sub
Protected Sub RadTreeView1_ContextMenuItemClick(ByVal sender As Object, ByVal e As RadTreeViewContextMenuEventArgs)
    If e.MenuItem.Text = "Create" Then
        AddNode(e)
    End If
End Sub
Protected Sub RadTreeView1_NodeEdit(ByVal sender As Object, ByVal e As RadTreeNodeEditEventArgs)
    Dim edited As RadTreeNode = e.Node
    edited.Text = e.Text.ToString()
End Sub
````
````ASPNET
<telerik:RadTreeView RenderMode="Lightweight" ID="RadTreeView1" OnNodeEdit="RadTreeView1_NodeEdit" OnContextMenuItemClick="RadTreeView1_ContextMenuItemClick"
    runat="Server">
    <ContextMenus>
        <telerik:RadTreeViewContextMenu runat="server" ID="RadTreeViewContextMenu">
            <Items>
                <telerik:RadMenuItem Text="Select" PostBack="True" />
                <telerik:RadMenuItem Text="Edit" PostBack="True" />
                <telerik:RadMenuItem Text="Create" PostBack="True" />
            </Items>
        </telerik:RadTreeViewContextMenu>
    </ContextMenus>
</telerik:RadTreeView>
````





# See Also

 * [RadTreeNode]({%slug treeview/client-side-programming/objects/radtreenode%})

 * [Overview]({%slug treeview/server-side-programming/events/overview%})

 * [Overview]({%slug treeview/context-menus/overview%})
