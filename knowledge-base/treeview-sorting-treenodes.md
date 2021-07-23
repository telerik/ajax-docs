---
title: Sorting TreeNodes in RadTreeView
description: Sorting TreeNodes in RadTreeView. Check it now!
type: how-to
page_title: Sorting TreeNodes in RadTreeView
slug: treeview-sorting-treenodes
res_type: kb
---

## Solution
 
RadTreeView's Nodes can easily be sorted by Text/Value using simple server-side code:

````C#
protected void Page_Load(object sender, EventArgs e)
{
    if (!Page.IsPostBack)
    {
        SortNodes(RadTreeView1.Nodes);
    }
}

//SortNodes is a recursive method enumerating and sorting all node levels 
private void SortNodes(RadTreeNodeCollection collection)
{
    Sort(collection);
    foreach (RadTreeNode node in collection)
    {
        if (node.Nodes.Count > 0)
        {
            SortNodes(node.Nodes);
        }
    }
}

//The Sort method is called for each node level sorting the child nodes 
public void Sort(RadTreeNodeCollection collection)
{
    RadTreeNode[] nodes = new RadTreeNode[collection.Count];
    collection.CopyTo(nodes, 0);
    Array.Sort<RadTreeNode>(nodes, 0, nodes.Length, new TreeNodeComparer());
    collection.Clear();
    collection.AddRange(nodes);
}

//The TreeNodeComparer class defines the sorting criteria 
class TreeNodeComparer : IComparer<RadTreeNode>
{
    #region IComparer Members 

    public int Compare(RadTreeNode x, RadTreeNode y)
    {
        RadTreeNode firstNode = (RadTreeNode)x;
        RadTreeNode secondNode = (RadTreeNode)y;

        return firstNode.Text.CompareTo(secondNode.Text);
    }

    #endregion
}
````

Sample declaration: 

````ASPX
<telerik:RadTreeView runat="server" RenderMode="Lightweight" ID="RadTreeView1">
    <Nodes>
        <telerik:RadTreeNode Text="Root 1" Expanded="true">
            <Nodes>
                <telerik:RadTreeNode Text="Child 1.1"></telerik:RadTreeNode>
                <telerik:RadTreeNode Text="Child 1.4"></telerik:RadTreeNode>
                <telerik:RadTreeNode Text="Child 1.2"></telerik:RadTreeNode>
                <telerik:RadTreeNode Text="Child 1.3"></telerik:RadTreeNode>
            </Nodes>
        </telerik:RadTreeNode>
        <telerik:RadTreeNode Text="Root 3" Expanded="true">
            <Nodes>
                <telerik:RadTreeNode Text="Child 3.3"></telerik:RadTreeNode>
                <telerik:RadTreeNode Text="Child 3.1"></telerik:RadTreeNode>
                <telerik:RadTreeNode Text="Child 3.2"></telerik:RadTreeNode>
                <telerik:RadTreeNode Text="Child 3.4"></telerik:RadTreeNode>
            </Nodes>
        </telerik:RadTreeNode>
        <telerik:RadTreeNode Text="Root 2" Expanded="true">
            <Nodes>
                <telerik:RadTreeNode Text="Child 2.1"></telerik:RadTreeNode>
                <telerik:RadTreeNode Text="Child 2.3"></telerik:RadTreeNode>
                <telerik:RadTreeNode Text="Child 2.4"></telerik:RadTreeNode>
                <telerik:RadTreeNode Text="Child 2.2"></telerik:RadTreeNode>
            </Nodes>
        </telerik:RadTreeNode>
    </Nodes>
</telerik:RadTreeView>
````

 