---
title: Binding to DataTable
page_title: Binding to DataTable | UI for ASP.NET AJAX Documentation
description: Binding to DataTable
slug: menu/data-binding/binding-to-datatable
tags: binding,to,datatable
published: True
position: 2
---

# Binding to DataTable



__RadMenu__ can be bound to __DataSet__, __DataTable__, and __DataView__. The menu hierarchy can be established with an*ID->ParentID* relation.

## Creating the data table in code

The following example illustrates how to bind to a __DataTable__ that is created in code. The same type of logic can easily be applied to a __DataView__ instead:

1. Create a function that dynamically creates the data source (in this case, a __DataTable__):

>tabbedCode

````C#
		private DataTable CreateTestTable(){  
	        DataTable table = new DataTable();  
	        table.Columns.Add("ID");  
	        table.Columns.Add("ParentID");  
	        table.Columns.Add("Text");  
	        table.Columns.Add("URL");  
	        table.Columns.Add("Tooltip");  
	        table.Rows.Add(new string[] { "1", null, "root 1", "root1.aspx", "root 1 tooltip" });  
	        table.Rows.Add(new string[] { "2", null, "root 2", "root2.aspx", "root 1 tooltip" });  
	        table.Rows.Add(new string[] { "3", "1", "child 1.1", "child11.aspx", "child 1.1 tooltip" });  
	        table.Rows.Add(new string[] { "4", "1", "child 1.2", "child12.aspx", "child 1.2 tooltip" });  
	        table.Rows.Add(new string[] { "5", "1", "child 1.3", "child13.aspx", "child 1.3 tooltip" });  
	        table.Rows.Add(new string[] { "6", "5", "child 1.3.1", "child131.aspx", "child 1.3.1 tooltip" });  
	        table.Rows.Add(new string[] { "7", "5", "child 1.3.2", "child132.aspx", "child 1.3.2 tooltip" });  
	        table.Rows.Add(new string[] { "8", "5", "child 1.3.3", "child133.aspx", "child 1.3.3 tooltip" });  
	        return table;
	    }		
````



````VB.NET
	    Private Function CreateTestTable() As DataTable
	        Dim table As New DataTable()
	        table.Columns.Add("ID")
	        table.Columns.Add("ParentID")
	        table.Columns.Add("Text")
	        table.Columns.Add("URL")
	        table.Columns.Add("Tooltip")
	        table.Rows.Add(New String() {"1", Nothing, "root 1", "root1.aspx", "root 1 tooltip"})
	        table.Rows.Add(New String() {"2", Nothing, "root 2", "root2.aspx", "root 1 tooltip"})
	        table.Rows.Add(New String() {"3", "1", "child 1.1", "child11.aspx", "child 1.1 tooltip"})
	        table.Rows.Add(New String() {"4", "1", "child 1.2", "child12.aspx", "child 1.2 tooltip"})
	        table.Rows.Add(New String() {"5", "1", "child 1.3", "child13.aspx", "child 1.3 tooltip"})
	        table.Rows.Add(New String() {"6", "5", "child 1.3.1", "child131.aspx", "child 1.3.1 tooltip"})
	        table.Rows.Add(New String() {"7", "5", "child 1.3.2", "child132.aspx", "child 1.3.2 tooltip"})
	        table.Rows.Add(New String() {"8", "5", "child 1.3.3", "child133.aspx", "child 1.3.3 tooltip"})
	        Return table
	    End Function
````


>end

1. Set the __DataSource__ property of the menu to the DataTable. At the same time, use the __RadMenu__ properties to specify the fields to use for the __Text__, __Value__, and __NavigateUrl__ properties of menu items. Indicate how to establish the item hierarchy by giving values to the __DataFieldID__ and __DataFieldParentID__ properties. Finally, call the __DataBind__ method to bind the menu:

>tabbedCode

````C#
		protected void Page_Load(object sender, EventArgs e)
	    {  
	        if (!IsPostBack)  
	        {    
	            RadMenu1.DataSource = CreateTestTable();
	            //Establish hierarchy:    
	            RadMenu1.DataFieldID = "ID";    
	            RadMenu1.DataFieldParentID = "ParentID";    
	            //Set Text, Value, and NavigateUrl:    
	            RadMenu1.DataTextField = "Text";    
	            RadMenu1.DataValueField = "ID";    
	            RadMenu1.DataNavigateUrlField = "URL";
	            RadMenu1.DataBind();  
	        }
	    }			
````



````VB.NET
	    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
	        If Not IsPostBack Then
	            RadMenu1.DataSource = CreateTestTable()
	            'Establish hierarchy:
	            RadMenu1.DataFieldID = "ID"
	            RadMenu1.DataFieldParentID = "ParentID"
	            'Set Text, Value, and NavigateUrl:
	            RadMenu1.DataTextField = "Text"
	            RadMenu1.DataValueField = "ID"
	            RadMenu1.DataNavigateUrlField = "URL"
	            RadMenu1.DataBind()
	        End If
	    End Sub
````


>end

1. Create an __[ItemDataBound event handler]({%slug menu/server-side-programming/itemdatabound%})__ to set additional properties on the menu items:

>tabbedCode

````C#
			    protected void RadMenu1_ItemDataBound(object sender, Telerik.Web.UI.RadMenuEventArgs e)
	            {  
	                //Set additional properties. ToolTip for example:  
	                DataRowView row = (DataRowView)e.Item.DataItem;  
	                e.Item.ToolTip = row["Tooltip"].ToString();
	            }		
````



````VB.NET
	    Protected Sub RadMenu1_ItemDataBound(ByVal sender As Object, ByVal e As Telerik.Web.UI.RadMenuEventArgs) Handles RadMenu1.ItemDataBound
	        'Set additional properties. ToolTip for example:  
	        Dim row As DataRowView = CType(e.Item.DataItem, DataRowView)
	        e.Item.ToolTip = row("Tooltip").ToString()
	    End Sub
````


>end

## Fetching the data from a separate database

You can use a __DataSet__ when the data comes from a separate database. Just use a data adapter component to assign the data from the database to a __DataSet__:

>note When binding to a __DataSet__ component, you can set the __DataMember__ property to identify the __DataTable__ within the __DataSet__ to which the menu should be bound.
>




>tabbedCode

````C#
				protected void Page_Load(object sender, EventArgs e)
	            {  
	                if (!Page.IsPostBack)  
	                {    
	                    OleDbDataAdapter adapter = new OleDbDataAdapter("SELECT * FROM Table1","Provider=Microsoft.Jet.OLEDB.4.0;Data Source="  + Server.MapPath("~/App_Data/db1.mdb"));    
	                    DataSet links = new DataSet();    
	                    adapter.Fill(links);    
	                    RadMenu1.DataSource = links;    
	                    RadMenu1.DataFieldID = "ID";    
	                    RadMenu1.DataFieldParentID = "ParentID";
	                    RadMenu1.DataTextField = "Text";
	                    RadMenu1.DataNavigateUrlField = "URL";
	                    RadMenu1.DataBind();
	                }
	            }		
````



````VB.NET
	    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
	        If Not Page.IsPostBack Then
	            Dim adapter As New OleDbDataAdapter("SELECT * FROM Table1", "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + Server.MapPath("~/App_Data/db1.mdb"))
	            Dim links As New DataSet()
	            adapter.Fill(links)
	            RadMenu1.DataSource = links
	            RadMenu1.DataFieldID = "ID"
	            RadMenu1.DataFieldParentID = "ParentID"
	            RadMenu1.DataTextField = "Text"
	            RadMenu1.DataNavigateUrlField = "URL"
	            RadMenu1.DataBind()
	        End If
	    End Sub
````


>end

>caution The __ParentID__ of the root items must be __null__ ( __nothing__ ). If for some reason the data source comes without null values for the ParentID column, you must either fix the data by writing code to modify ParentID values in the DataTable, or use a query that returns the expected value (null). For example:
>SELECT ID, Text, IF(ParentID = 0, NULL, ParentID) FROM tblData
>


# See Also

 * [Overview]({%slug menu/data-binding/overview%})

 * [Using DataBindings]({%slug menu/data-binding/using-databindings%})

 * [Binding to Table-Based DataSource]({%slug menu/data-binding/binding-to-table-based-datasource%})

 * [Binding to Hierarchical DataSource]({%slug menu/data-binding/binding-to-hierarchical-datasource%})

 * [Binding to Object-Based Data Sources]({%slug menu/data-binding/binding-to-object-based-data-sources%})
