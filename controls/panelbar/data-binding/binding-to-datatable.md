---
title: Binding to DataTable
page_title: Binding to DataTable | RadPanelBar for ASP.NET AJAX Documentation
description: Binding to DataTable
slug: panelbar/data-binding/binding-to-datatable
tags: binding,to,datatable
published: True
position: 2
---

# Binding to DataTable



**RadPanelBar** can be bound to **DataSet**, **DataTable**, and **DataView**. The panel hierarchy can be established with an *ID->ParentID* relation.

## Creating the data table in code

The following example illustrates how to bind to a **DataTable** that is created in code. The same type of logic can easily be applied to a **DataView** instead:

* Create a function that dynamically creates the data source (in this case, a **DataTable**): 



````C#
	     
private DataTable CreateTestTable()
{ 
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


* Set the **DataSource** property of the panel to the DataTable. At the same time, use the **RadPanelBar** properties to specify the fields to use for the **Text**, **Value**, and **NavigateUrl** properties of panel items. Indicate how to establish the item hierarchy by giving values to the **DataFieldID** and **DataFieldParentID** properties. Finally, call the **DataBind** method to bind the panel: 



````C#
	     
protected void Page_Load( object sender, EventArgs e)
{ 
    if (!IsPostBack) 
    {   
        RadPanelBar1.DataSource = CreateTestTable();   
        //Establish hierarchy:   
        RadPanelBar1.DataFieldID = "ID";   
        RadPanelBar1.DataFieldParentID = "ParentID";   
        //Set Text, Value, and NavigateUrl:   
        RadPanelBar1.DataTextField = "Text";   
        RadPanelBar1.DataValueField = "ID";   
        RadPanelBar1.DataNavigateUrlField = "URL";   
        RadPanelBar1.DataBind(); 
    }
}
				
````
````VB.NET
	
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load

    If Not IsPostBack Then
        RadPanelBar1.DataSource = CreateTestTable()
        'Establish hierarchy:    
        RadPanelBar1.DataFieldID = "ID"
        RadPanelBar1.DataFieldParentID = "ParentID"
        'Set Text, Value, and NavigateUrl:   
        RadPanelBar1.DataTextField = "Text"
        RadPanelBar1.DataValueField = "ID"
        RadPanelBar1.DataNavigateUrlField = "URL"
        RadPanelBar1.DataBind()
    End If
End Sub
	
````


* Create an **[ItemDataBound event handler]({%slug panelbar/server-side-programming/itemdatabound%})** to set additional properties on the panel items: 



````C#
	     
protected void RadPanelBar1_ItemDataBound( object sender, Telerik.Web.UI.RadPanelBarEventArgs e)
{ 
    //Set additional properties. ToolTip for example: 
    DataRowView row = (DataRowView)e.Item.DataItem; 
    e.Item.ToolTip = row["Tooltip" ].ToString();
}
				
````
````VB.NET
	
Protected Sub RadPanelBar1_ItemDataBound(ByVal sender As Object, ByVal e As Telerik.Web.UI.RadPanelBarEventArgs) Handles RadPanelBar1.ItemDataBound

    'Set additional properties. ToolTip for example:  
    Dim row As DataRowView = CType(e.Item.DataItem, DataRowView)
    e.Item.ToolTip = row("Tooltip").ToString()

End Sub 'RadPanelBar1_ItemDataBound
	
````


## Fetching the data from a separate database

You can use a **DataSet** when the data comes from a separate database. Just use a data adapter component to assign the data from the database to a **DataSet**:

>tip When binding to a **DataSet** component, you can set the **DataMember** property to identify the **DataTable** within the **DataSet** to which the panel bar should be bound.
>




````C#
	     
protected void Page_Load(object sender, EventArgs e)
{ 
    if (!Page.IsPostBack) 
    {   
        OleDbDataAdapter adapter = new OleDbDataAdapter("SELECT * FROM Table1", "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + Server.MapPath("~/App_Data/db1.mdb" ));   
        DataSet links = new DataSet();   
        adapter.Fill(links);   
        RadPanelBar1.DataSource = links;   
        RadPanelBar1.DataFieldID = "ID";  
        RadPanelBar1.DataFieldParentID = "ParentID";  
        RadPanelBar1.DataTextField = "Text";   
        RadPanelBar1.DataNavigateUrlField = "URL";  
        RadPanelBar1.DataBind(); 
    }
}
				
````
````VB.NET
		
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load

    If Not Page.IsPostBack Then
        Dim adapter As New OleDbDataAdapter("SELECT * FROM Table1", "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" + Server.MapPath("~/App_Data/db1.mdb"))
        Dim links As New DataSet()
        adapter.Fill(links)
        RadPanelBar1.DataSource = links
        RadPanelBar1.DataFieldID = "ID"
        RadPanelBar1.DataFieldParentID = "ParentID"
        RadPanelBar1.DataTextField = "Text"
        RadPanelBar1.DataNavigateUrlField = "URL"
        RadPanelBar1.DataBind()
    End If
End Sub 'Page_Load
	
````


>tip The **ParentID** of the root items must be **null** (**nothing**). If for some reason the data source comes without null values for the ParentID column, you must either fix the data by writing code to modify ParentID values in the DataTable, or use a query that returns the expected value (null). For example:
>SELECT ID, Text, IF(ParentID = 0, NULL, ParentID) FROM tblData
>


# See Also

 * [Data Binding Overview]({%slug panelbar/data-binding/overview%})

 * [Using DataBindings]({%slug panelbar/data-binding/using-databindings%})

 * [Binding to Table-Based DataSource]({%slug panelbar/data-binding/binding-to-table-based-datasource%})

 * [Binding to Hierarchical DataSource]({%slug panelbar/data-binding/binding-to-hierarchical-datasource%})

 * [Binding to Object-Based DataSources]({%slug panelbar/data-binding/binding-to-object-based-datasources%})
