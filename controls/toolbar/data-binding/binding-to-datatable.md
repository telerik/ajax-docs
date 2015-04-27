---
title: Binding to DataTable
page_title: Binding to DataTable | RadToolBar for ASP.NET AJAX Documentation
description: Binding to DataTable
slug: toolbar/data-binding/binding-to-datatable
tags: binding,to,datatable
published: True
position: 2
---

# Binding to DataTable



**RadToolBar** can be bound to **DataSet**, **DataTable**, and **DataView**.

## Creating the data table in code

The following example illustrates how to bind to a **DataTable** that is created in code. The same type of logic can easily be applied to a **DataView** instead:

1. Create a function that dynamically creates the data source (in this case, a **DataTable**): 



````C#
	     
		private DataTable CreateTestTable()
	    { 
	        DataTable table = new DataTable(); 
	        table.Columns.Add( "Text" ); 
	        table.Columns.Add( "Value" ); 
	        table.Columns.Add( "Tooltip" );  
	        table.Rows.Add( new string[] { "button1", "1", "tooltip1" }); 
	        table.Rows.Add(new string[] { "button2", "2", "tooltip2" }); 
	        table.Rows.Add(new string[] { "button3", "3", "tooltip3" }); 
	        return table;
	    }
				
````
````VB.NET
	
	    Private Function CreateTestTable() As DataTable
	
	        Dim table As New DataTable()
	        table.Columns.Add("Text")
	        table.Columns.Add("Value")
	        table.Columns.Add("Tooltip")
	        table.Rows.Add(New String() {"button1", "1", "tooltip1"})
	        table.Rows.Add(New String() {"button2", "2", "tooltip2"})
	        table.Rows.Add(New String() {"button3", "3", "tooltip3"})
	
	        Return table
	
	    End Function
	
````


1. Set the **DataSource** property of the toolbar to the **DataTable**. At the same time, use the **RadToolBar** properties to specify the fields to use for the **Text** and **Value** properties of buttons. Finally, call the **DataBind** method to bind the toolbar: 



````C#
	     
		protected void Page_Load(object sender, EventArgs e)
	    { 
	        if (!IsPostBack) 
	        {   
	            RadToolBar1.DataSource = CreateTestTable();     
	            //Set Text and Value:   
	            RadToolBar1.DataTextField = "Text";   
	            RadToolBar1.DataValueField = "Value";   
	            RadToolBar1.DataBind(); 
	        }
	    }
				
````
````VB.NET
	
	
	    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
	
	        If Not IsPostBack Then
	
	            RadToolBar1.DataSource = CreateTestTable()
	            'Set Text and Value:   
	            RadToolBar1.DataTextField = "Text"
	            RadToolBar1.DataValueField = "Value"
	            RadToolBar1.DataBind()
	
	        End If
	    End Sub
	
````


1. Create a [ButtonDataBound event handler]({%slug toolbar/server-side-programming/buttondatabound%})to set additional properties on the buttons: 



````C#
	     
		protected void RadToolBar1_ButtonDataBound(object sender, RadToolBarButtonEventArgs e)
	    {    
	        DataRowView row = (DataRowView)e.Button.DataItem;    
	        e.Button.ToolTip = row["Tooltip"].ToString();    
	    }
				
````
````VB.NET
	    Protected Sub RadToolBar1_ItemDataBound(ByVal sender As Object, ByVal e As RadToolBarButtonEventArgs) Handles RadToolBar1.ItemDataBound
	
	        Dim row As DataRowView = CType(e.Button.DataItem, DataRowView)
	        e.Button.ToolTip = row("Tooltip").ToString()
	
	    End Sub
	
````


## Fetching the data from a separate database

You can use a **DataSet** when the data comes from a separate database. Just use a data adapter component to assign the data from the database to a **DataSet**:

>note When binding to a **DataSet** component, you can set the **DataMember** property to identify the **DataTable** within the **DataSet** to which the toolbar should be bound.
>




````C#
	     
		protected void Page_Load(object sender, EventArgs e)
	    { 
	        if (!Page.IsPostBack)
	        {   
	            OleDbDataAdapter adapter = new OleDbDataAdapter("SELECT * FROM Table1","Provider=Microsoft.Jet.OLEDB.4.0;Data Source="+ Server.MapPath("~/App_Data/db1.mdb" ));   
	            DataSet table = new DataSet();   
	            adapter.Fill(table);   
	            RadToolBar1.DataSource = table;   
	            RadToolBar1.DataTextField = "Text";  
	            RadToolBar1.DataNavigateUrlField = "Value";   
	            RadToolBar1.DataBind(); 
	        }
	    }
				
````
````VB.NET
	
	    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
	
	        If Not Page.IsPostBack Then
	            Dim adapter As New OleDbDataAdapter("SELECT * FROM Table1", "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + Server.MapPath("~/App_Data/db1.mdb"))
	            Dim table As New DataSet()
	            adapter.Fill(table)
	            RadToolBar1.DataSource = table
	            RadToolBar1.DataTextField = "Text"
	            RadToolBar1.DataNavigateUrlField = "Value"
	            RadToolBar1.DataBind()
	        End If
	
	    End Sub
	    'Page_Load
````


# See Also

 * [Overview]({%slug toolbar/data-binding/overview%})

 * [Binding to ASP DataSource Components]({%slug toolbar/data-binding/binding-to-asp-datasource-components%})

 * [Binding to Array or ArrayList ]({%slug toolbar/data-binding/binding-to-array-or-arraylist-%})
