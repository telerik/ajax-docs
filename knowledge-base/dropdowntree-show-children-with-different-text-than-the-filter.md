---
title: Show children with different text than the filter
description: Show children with different text than the filter. Check it now!
type: how-to
page_title: Show children with different text than the filter
slug: dropdowntree-show-children-with-different-text-than-the-filter
res_type: kb
---

## How to

Filter nodes so that a search by a custom text can return nodes whose text does not contain it.

By default, the [filtering of the RadDropDownTree]({%slug dropdowntree/functionality/filtering%}) works with the text of the node, so if the string the user entered is not present in the Text of the node, the node will not be returned.

## Solution

If you want the node to come up in searches for other strings, you need to
 - have that text rendered in the node template

 - set the FilterTemplate to ByContent


Note that this increases the footprint of the nodes on the page and with large content or number of nodes it may cause a performance hit.

Here is a basic example:

 ````ASPX
<telerik:RadDropDownTree runat="server" ID="RadDropDownTree1" EnableFiltering="true" OnNodeDataBound="RadDropDownTree1_NodeDataBound">
    <FilterSettings FilterTemplate="ByContent" Filter="Contains" />
    <DropDownNodeTemplate>
        <div class="nodeTemplate">
            <span>
                <%# DataBinder.Eval(Container, "Text") %>
            </span>
            <asp:Label Text="" ID="hiddenContent" CssClass="hiddenContent" runat="server" />
        </div>
    </DropDownNodeTemplate>
</telerik:RadDropDownTree>
<style>
    .hiddenContent {
        display: none;
    }
</style> 
 ````

and some sample server-side code to run this:

````C#
    protected void RadDropDownTree1_NodeDataBound(object sender, DropDownTreeNodeDataBoundEventArguments e)
    {
        if (e.DropDownTreeNode.Value == "Peacock") //simulate some logic for adding hidden search text
        {
            (e.DropDownTreeNode.FindControl("hiddenContent") as Label).Text = "custom string";
        }
    }

    //sample data binding follows
    protected void Page_Init(object sender, EventArgs e)
    {
        RadDropDownTree1.DataFieldID = "ID";
        RadDropDownTree1.DataFieldParentID = "ParentID";
        RadDropDownTree1.DataValueField = "Value";
        RadDropDownTree1.DataTextField = "Text";
        RadDropDownTree1.DataSource = GetDDTData();
        RadDropDownTree1.DataBind();
    }
    
    public DataTable GetDDTData()
    {
        DataTable table = new DataTable();
        table.Columns.Add("ID");
        table.Columns.Add("ParentID");
        table.Columns.Add("Value");
        table.Columns.Add("Text");
    
        table.Rows.Add(new String[] { "1", null, "Markering", "Marketing" });
        table.Rows.Add(new String[] { "2", null, "Sales", "Sales " });
    
        table.Rows.Add(new String[] { "3", "1", "Callahan", "Laura Callahan" });
        table.Rows.Add(new String[] { "4", "1", "Dodsworth", "Anne Dodsworth" });
        table.Rows.Add(new String[] { "5", "1", "King", "Robert King" });
        table.Rows.Add(new String[] { "6", "1", "Suyama", "Michael Suyama" });
        table.Rows.Add(new String[] { "7", "1", "Buchanan", "Steven Buchanan" });
        table.Rows.Add(new String[] { "8", "1", "Peacock", "Margaret Peacock" });
    
        table.Rows.Add(new String[] { "9", "2", "Leverling", "Janet Leverling" });
        table.Rows.Add(new String[] { "10", "2", "Davolio", "Nancy Davolio" });
        table.Rows.Add(new String[] { "11", "2", "Fuller", "Andrew Fuller" });
        table.Rows.Add(new String[] { "12", "2", "Johansson", "Mark Johansson" });
    
    
        return table;
    }
````

  