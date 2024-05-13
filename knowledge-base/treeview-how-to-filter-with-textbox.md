---
title: How to filter with textbox
description: How to filter with textbox. Check it now!
type: how-to
page_title: How to filter with textbox. | RadTreeView
slug: treeview-how-to-filter-with-textbox
res_type: kb
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Telerik WebFroms TreeView for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## Description 

Sometimes, one might want to filter the TreeView. This article demonstrates how to filter the Treeview, so that only the nodes that contain the text entered through the TextBox remain visible.

## Solution   

Such functionality is not supported out of the box and will need some additional implementation.

````ASP.NET
<telerik:RadTextBox ID="RadTextBox1" runat="server">
    <ClientEvents OnLoad="clientLoad" />
</telerik:RadTextBox>

<telerik:RadTreeView ID="RadTreeView1" runat="server">
    <ExpandAnimation Type="None" />
    <CollapseAnimation Type="None" />
</telerik:RadTreeView>
````

`clientLoad(sender)`: This function is invoked when the RadTextBox is loaded on the client side. It binds a keydown event to the RadTextBox, triggering the `valueChanging` function.

`valueChanging(sender, args)`: This function is called when the text in the RadTextBox changes. It sets a timer to delay the filtering process, preventing filtering on every keystroke. After the delay, it retrieves the search string from the RadTextBox and iterates through all nodes in the RadTreeView.

`findNodes(node, searchString)`: This recursive function traverses the RadTreeView nodes to find and display nodes that match the search string. It sets nodes to be visible or invisible based on whether they match the search string.


````JavaScript
var timer = null;

function clientLoad(sender) {
    $telerik.$(".riTextBox", sender.get_element().parentNode).bind("keydown", valueChanging);
}

function valueChanging(sender, args) {
    if (timer) {
        clearTimeout(timer);
    }

    timer = setTimeout(function () {
        var tree = $find("<%= RadTreeView1.ClientID %>");
        var textbox = $find("<%= RadTextBox1.ClientID %>");
        var searchString = textbox.get_element().value;

        for (var i = 0; i < tree.get_nodes().get_count(); i++) {
            findNodes(tree.get_nodes().getNode(i), searchString);
        }
    }, 200);
}

function findNodes(node, searchString) {
    node.set_expanded(true);

    var hasFoundChildren = false;
    for (var i = 0; i < node.get_nodes().get_count(); i++) {
        hasFoundChildren = findNodes(node.get_nodes().getNode(i), searchString) || hasFoundChildren;
    }

    if (hasFoundChildren || node.get_text().toLowerCase().indexOf(searchString.toLowerCase()) != -1) {
        node.set_visible(true);
        return true;
    }
    else {
        node.set_visible(false);
        return false;
    }
}
````

````C#
protected void Page_Load(object sender, EventArgs e)
{
    if (!IsPostBack)
    {
        RadTreeView1.LoadContentFile("~/Xml/Tree.xml");
    }
}
````

The XML file contains the hierarchical data for the RadTreeView. Each **Node** element represents a node in the tree, with attributes like ***Text***, ***ToolTip***, and ***Expanded*** (whether the node is initially expanded).

````XML
<?xml version="1.0" encoding="utf-8" ?>
<Tree>
    <Node Text="Desktop" Expanded="True" ToolTip="Desktop">
        <Node Text="Administrator" Expanded="True">
            <Node Text="AppData" >
                <Node Text="Microsoft" />
            </Node>
            <Node Text="Contacts" />
            <Node Text="Downloads" />
            <Node Text="Documents" />
            <Node Text="Favorites" >
                <Node Text="Links" />
            </Node>
            <Node Text="Music" />
            <Node Text="Pictures" />
            <Node Text="Saved Games" />
            <Node Text="Searches" >
                <Node Text="History" />
            </Node>
            <Node Text="Videos" />
        </Node>
        <Node Text="Computer" ToolTip="My Computer" Expanded="True" >
            <Node Text="WebServer (\\10.0.0.80) (W:)" />
            <Node Text="Local Disk (C:)" Expanded="True" >
                <Node Text="inetpub" Expanded="True">
                    <Node Text="AdminScripts"></Node>
                </Node>
            </Node>
            <Node Text="Local Disk (D:)" Expanded="True" >
                <Node Text="Movies" />
                <Node Text="Music" />
                <Node Text="Games" />
            </Node>
        </Node>
    </Node>
</Tree>
````

 