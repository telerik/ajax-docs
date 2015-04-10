---
title: Databinding with Custom Attributes
page_title: Databinding with Custom Attributes | UI for ASP.NET AJAX Documentation
description: Databinding with Custom Attributes
slug: menu/how-to/databinding-with-custom-attributes
tags: databinding,with,custom,attributes
published: True
position: 1
---

# Databinding with Custom Attributes





## 

When binding the Telerik RadMenu to data, custom attributes can be set in the [ItemDataBound]({%slug menu/server-side-programming/itemdatabound%}) event.

Here is an example:

````ASPNET
	    <telerik:RadMenu ID="RadMenu1" runat="server" OnItemDataBound="RadMenu1_ItemDataBound">
	    </telerik:RadMenu>
````







````C#
	protected void Page_Load(object sender, EventArgs e){    
	    //dynamically crate a table to populate the menu    
	    DataTable table1 = new DataTable();
	
	    table1.Columns.Add("ID");    
	    table1.Columns.Add("ParentID");    
	    table1.Columns.Add("Roles"); 
	    // the column for the custom attributes    
	    table1.Columns.Add("Text");
	    table1.Rows.Add(new string[] { "1", null, "1", "Politics" });    
	    table1.Rows.Add(new string[] { "2", null, "1", "Sports" });    
	    table1.Rows.Add(new string[] { "3", null, "3", "Events" });    
	    table1.Rows.Add(new string[] { "4", "1", "4", "CNN" });    
	    table1.Rows.Add(new string[] { "5", "1", "5", "NBC" });    
	    table1.Rows.Add(new string[] { "6", "1", "6", "ABC" });    
	    table1.Rows.Add(new string[] { "7", "2", "7", "US Sports" });    
	    table1.Rows.Add(new string[] { "8", "2", "2", "European Sports" });    
	    table1.Rows.Add(new string[] { "9", "7", "4", "Baseball" });    
	    table1.Rows.Add(new string[] { "10", "7", "3", "Football" });    
	    table1.Rows.Add(new string[] { "11", "7", "2", "Basketball" });    
	    table1.Rows.Add(new string[] { "12", "8", "4", "Soccer" });    
	    table1.Rows.Add(new string[] { "14", "3", "5", "Oscar Awards" });    
	    table1.Rows.Add(new string[] { "15", "3", "2", "MTV Movie Awards" });
	    RadMenu1.DataSource = table1;   
	    RadMenu1.DataFieldID = "ID";    
	    RadMenu1.DataFieldParentID = "ParentID";    
	    RadMenu1.DataTextField = "Text";   
	    RadMenu1.DataBind();
	}
	protected void RadMenu1_ItemDataBound(object sender, Telerik.Web.UI.RadMenuEventArgs e)
	{    
	    DataRowView dataRow = (DataRowView)e.Item.DataItem;    
	    e.Item.Attributes["Roles"] = dataRow["Roles"].ToString();
	    e.Item.ToolTip = e.Item.Attributes["Roles"];    
	    //we set the Tooltip just for testing purposes
	}	
````
````VB.NET
	    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
	        Dim table1 As New DataTable()
	
	        table1.Columns.Add("ID")
	        table1.Columns.Add("ParentID")
	        table1.Columns.Add("Roles")
	        ' the column for the custom attributes        
	        table1.Columns.Add("Text")
	        table1.Rows.Add(New String() {"1", Nothing, "1", "Politics"})
	        table1.Rows.Add(New String() {"2", Nothing, "1", "Sports"})
	        table1.Rows.Add(New String() {"3", Nothing, "3", "Events"})
	        table1.Rows.Add(New String() {"4", "1", "4", "CNN"})
	        table1.Rows.Add(New String() {"5", "1", "5", "NBC"})
	        table1.Rows.Add(New String() {"6", "1", "6", "ABC"})
	        table1.Rows.Add(New String() {"7", "2", "7", "US Sports"})
	        table1.Rows.Add(New String() {"8", "2", "2", "European Sports"})
	        table1.Rows.Add(New String() {"9", "7", "4", "Baseball"})
	        table1.Rows.Add(New String() {"10", "7", "3", "Football"})
	        table1.Rows.Add(New String() {"11", "7", "2", "Basketball"})
	        table1.Rows.Add(New String() {"12", "8", "4", "Soccer"})
	        table1.Rows.Add(New String() {"14", "3", "5", "Oscar Awards"})
	        table1.Rows.Add(New String() {"15", "3", "2", "MTV Movie Awards"})
	        RadMenu1.DataSource = table1
	        RadMenu1.DataFieldID = "ID"
	        RadMenu1.DataFieldParentID = "ParentID"
	        RadMenu1.DataTextField = "Text"
	        RadMenu1.DataBind()
	    End Sub
	
	    Protected Sub RadMenu1_ItemDataBound(ByVal sender As Object, ByVal e As Telerik.WebControls.RadMenuEventArgs) Handles RadMenu1.ItemDataBound
	        Dim dataRow As DataRowView = CType(e.Item.DataItem, DataRowView)
	        e.Item.Attributes("Roles") = dataRow("Roles").ToString()
	        e.Item.ToolTip = e.Item.Attributes("Roles")
	        'we set the Tooltip just for testing purposes    
	    End Sub
	
````


# See Also

 * [Custom Attributes]({%slug menu/radmenu-items/custom-attributes%})

 * [Overview]({%slug menu/data-binding/overview%})
