---
title: Display Edit and Delete buttons only on hover
page_title: Display Edit and Delete buttons only on hover - RadGrid
description: Check our Web Forms article about Display edit and delete buttons only on hover.
slug: grid/how-to/data-editing/display-edit-and-delete-buttons-only-on-hover
previous_url: controls/grid/data-editing/how-to/display-edit-and-delete-buttons-only-on-hover
tags: edit,delete,buttons
published: True
position: 26
---

# Display Edit and Delete buttons only on hover



##

The following example demonstrates how to display the "Edit" and "Delete" buttons only when user hovers over the rows.


### Implementation

For initially hiding the "Edit" and "Delete" buttons for a particular RadGrid we are setting the CssClass property of the **GridEditCommandButton** and **GridClientDeleteColumn** _(to "showOnHover" in the example below)_. Afterwords, using that CSS class as a selector we are handling the displaying on hover:


````ASP.NET
<style type="text/css">
    .showOnHover>*{
	    visibility: hidden;
    }

    .rgRow:hover .showOnHover>*,
    .rgAltRow:hover .showOnHover>*{
	    visibility: visible;
    }
</style>		

<telerik:RadGrid runat="server" ID="RadGrid1" OnNeedDataSource="RadGrid1_NeedDataSource" Width="600px" RenderMode="Lightweight">			
	<MasterTableView AutoGenerateColumns="false">                
		<Columns>
			<telerik:GridBoundColumn DataField="ID" HeaderText="ID" HeaderStyle-Width="80px"></telerik:GridBoundColumn>
			<telerik:GridBoundColumn DataField="FirstName" HeaderText="FirstName" HeaderStyle-Width="200px"></telerik:GridBoundColumn>
			<telerik:GridBoundColumn DataField="LastName" HeaderText="LastName" HeaderStyle-Width="200px"></telerik:GridBoundColumn>
			<telerik:GridBoundColumn DataField="Age" HeaderText="Age" HeaderStyle-Width="80px"></telerik:GridBoundColumn>
            <telerik:GridEditCommandColumn HeaderStyle-Width="40px" ButtonType="ImageButton" ItemStyle-CssClass="showOnHover"></telerik:GridEditCommandColumn>
			<telerik:GridClientDeleteColumn HeaderStyle-Width="40px" ItemStyle-CssClass="showOnHover"></telerik:GridClientDeleteColumn>
		</Columns>
	</MasterTableView>
</telerik:RadGrid>
````
````C#
protected void RadGrid1_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
{
	DataTable table = new DataTable();
	table.Columns.Add("ID", typeof(int));
	table.Columns.Add("FirstName", typeof(string));
	table.Columns.Add("LastName", typeof(string));
	table.Columns.Add("Age", typeof(int));
	for (int i = 0; i < 5; i++)
	{
		table.Rows.Add(i, "FirstName" + i, "LastName" + i, 20 + i);
	}

	(sender as RadGrid).DataSource = table;
}
````

