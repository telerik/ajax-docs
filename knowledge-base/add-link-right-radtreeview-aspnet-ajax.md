---
title: Adding Link to the Right of RadTreeNode in RadTreeView
description: Learn how to add a text link to the right of specific RadTreeNode elements in a RadTreeView when loading data from an XML file.
type: how-to
page_title: How to Add Link to the Right of RadTreeNode in RadTreeView
meta_title: How to Add Link to the Right of RadTreeNode in RadTreeView
slug: add-link-right-radtreeview-aspnet-ajax
tags: treeview, hyperlink, ui for asp.net ajax, nodedatabound, xml, node
res_type: kb
ticketid: 1695329
---

## Environment

<table>
<tbody>
<tr>
<td> Product </td>
<td> 
TreeView for UI for ASP.NET AJAX 
</td>
</tr>
<tr>
<td> Version </td>
<td> All</td>
</tr>
</tbody>
</table>

## Description

I want to add a text link to the right of specific RadTreeNode elements in my [RadTreeView](https://docs.telerik.com/devtools/aspnet-ajax/controls/treeview/overview) while loading data from an XML file. I need a solution that allows me to include the link URL and text as part of the XML structure and manipulate the nodes to display the links dynamically.

This knowledge base article also answers the following questions:
- How to add a hyperlink next to RadTreeNode elements in RadTreeView?
- How to customize RadTreeNode with a link using XML data?
- How to use NodeDataBound for adding links dynamically?

## Solution

To achieve this, extend the XML structure to include the link properties (e.g., URL) using the `NavigateUrlField` property. Use a `NodeTemplate` to render the link alongside the RadTreeNode text.

### XML Structure Example

Update your XML file to include the URL for each node where you want the link to appear:

````XML
<Tree>
	<Node Text="Desktop" Expanded="True" ToolTip="Desktop" Url="Default2.aspx">
		<Node Text="Administrator" Url="Default3.aspx" Expanded="True">
			<Node Text="AppData" Url="Default4.aspx">
				<Node Text="Microsoft"  Url="Default5.aspx"/>
			</Node>
			<Node Text="Contacts" />
			<Node Text="Downloads"  Url="Default6.aspx"/>
		</Node>
	</Node>
</Tree>
````

Use the following configuration for your RadTreeView control:

````ASP.NET
<telerik:RadTreeView ID="RadTreeView2" runat="server" DataSourceID="XmlDataSource1" OnNodeDataBound="RadTreeView1_NodeDataBound">
    <NodeTemplate>
        <%# DataBinder.Eval(Container, "Text") %>
        <asp:HyperLink ID="SectionLink" runat="server" Visible="false"></asp:HyperLink>
    </NodeTemplate>
    <DataBindings>
        <telerik:RadTreeNodeBinding DataMember="Node" TextField="Text" NavigateUrlField="Url" ExpandedField="Expanded"></telerik:RadTreeNodeBinding>
    </DataBindings>
</telerik:RadTreeView>

<asp:XmlDataSource runat="server" ID="XmlDataSource1" DataFile="TreeView.xml" XPath="/Tree/Node"></asp:XmlDataSource>
````

Use the `NodeDataBound` event to dynamically set the properties of the link:

````C#
protected void RadTreeView1_NodeDataBound(object sender, RadTreeNodeEventArgs e)
{
    string url = e.Node.NavigateUrl;

    if (!string.IsNullOrEmpty(url))
    {
        HyperLink link = (HyperLink)e.Node.FindControl("SectionLink");

        if (link != null)
        {
            link.Text = url;
            link.NavigateUrl = url;
            link.Visible = true;
            link.Style.Add("margin-left", "10px");
        }
    }
}
````

This approach allows you to control which nodes display a link dynamically based on the XML data while keeping the structure data-driven.

## See Also

- [NodeDataBound Event](https://docs.telerik.com/devtools/aspnet-ajax/controls/treeview/server-side-programming/events/nodedatabound#nodedatabound)
