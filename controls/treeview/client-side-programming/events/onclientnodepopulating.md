---
title: OnClientNodePopulating
page_title: OnClientNodePopulating | RadTreeView for ASP.NET AJAX Documentation
description: OnClientNodePopulating
slug: treeview/client-side-programming/events/onclientnodepopulating
tags: onclientnodepopulating
published: True
position: 4
---

# OnClientNodePopulating



## 

The **OnClientNodePopulating** client-side event occurs just before child nodes are loaded on-demand. The **ExpandMode** property of the parent node should be **ServerSideCallback** or **WebService** for this event to fire. The event can be canceled.

The event handler receives parameters:

1. The **TreeView** instance that fired the event.

1. Event arguments with functions:

* **get_node()** retrieves a reference to the clicked on node.

* **get_context()** retrieves an object that is automatically passed to a load-on-demand web service.

* **set_cancel()** - call this function to specify whether the event should be canceled (true) or not (false).

* **get_domEvent()** retrieves a DOM event object of the node population.

The example below shows how to prevent populating a "Network Locations" node. Note that the **OnClientNodePopulated** event does not fire when set_cancel() is called. See the [Webservice Load-On-Demand]({%slug treeview/load-on-demand/web-service-binding%}) topic for another example.

````ASPNET
<telerik:RadTreeView RenderMode="Lightweight" ID="RadTreeView1" runat="server" OnClientNodePopulated="ClientNodePopulated"
    OnClientNodePopulating="ClientNodePopulating" OnNodeExpand="RadTreeView1_NodeExpand">
    <Nodes>
        <telerik:RadTreeNode runat="server" ExpandMode="ClientSide" Text="Search" ImageUrl="~/images/search.ico"
            Expanded="True" Value="1">
            <Nodes>
                <telerik:RadTreeNode runat="server" ExpandMode="ServerSideCallBack" Text="Recent Searches">
                </telerik:RadTreeNode>
                <telerik:RadTreeNode runat="server" ExpandMode="ServerSideCallBack" Text="Network Locations">
                </telerik:RadTreeNode>
            </Nodes>
        </telerik:RadTreeNode>
    </Nodes>
</telerik:RadTreeView>
````
````JavaScript
function ClientNodePopulated(sender, eventArgs) {

	var node = eventArgs.get_node();
	alert("Node " + node.get_text() +
		" is populated with " +
		node.get_nodes().get_count() +
		" child nodes.");
}

function ClientNodePopulating(sender, eventArgs) {

	var node = eventArgs.get_node();
	if (node.get_text() == "Network Locations") {
		alert("You are not connected to the network");
		eventArgs.set_cancel(true);
	}
}
````


The server **NodeExpand** event handler for the **RadTreeView** defined above:



````C#
protected void RadTreeView1_NodeExpand(object sender, Telerik.Web.UI.RadTreeNodeEventArgs e)
{
    if (e.Node.Text == "Recent Searches")
    {
        for (int i = 1; i <= 10; i++)
        {
            e.Node.Nodes.Add(new Telerik.Web.UI.RadTreeNode("Search " + i.ToString()));
        }
        e.Node.ExpandMode = Telerik.Web.UI.TreeNodeExpandMode.ClientSide;
    }
    if (e.Node.Text == "Network Locations")
    {
        for (int i = 1; i <= 10; i++)
        {
            e.Node.Nodes.Add(new Telerik.Web.UI.RadTreeNode("Location " + i.ToString()));
        }
        e.Node.ExpandMode = Telerik.Web.UI.TreeNodeExpandMode.ClientSide;
    }
}
````
````VB.NET
Protected Sub RadTreeView1_NodeExpand(ByVal sender As Object, ByVal e As Telerik.Web.UI.RadTreeNodeEventArgs)
    If e.Node.Text = "Recent Searches" Then
        Dim i As Integer = 1
        While i <= 10
            e.Node.Nodes.Add(New Telerik.Web.UI.RadTreeNode("Search " + i.ToString()))
            System.Math.Max(System.Threading.Interlocked.Increment(i), i - 1)
        End While
        e.Node.ExpandMode = Telerik.Web.UI.TreeNodeExpandMode.ClientSide
    End If
    If e.Node.Text = "Network Locations" Then
        Dim i As Integer = 1
        While i <= 10
            e.Node.Nodes.Add(New Telerik.Web.UI.RadTreeNode("Location " + i.ToString()))
            System.Math.Max(System.Threading.Interlocked.Increment(i), i - 1)
        End While
        e.Node.ExpandMode = Telerik.Web.UI.TreeNodeExpandMode.ClientSide
    End If
End Sub
````



# See Also

 * [OnClientNodePopulated]({%slug treeview/client-side-programming/events/onclientnodepopulated%})

 * [RadTreeNode]({%slug treeview/client-side-programming/objects/radtreenode%})

 * [OnClientNodePopulationFailed]({%slug treeview/client-side-programming/events/onclientnodepopulationfailed%})
