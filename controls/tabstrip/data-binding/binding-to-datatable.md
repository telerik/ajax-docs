---
title: Binding to DataTable
page_title: Binding to DataTable | RadTabStrip for ASP.NET AJAX Documentation
description: Binding to DataTable
slug: tabstrip/data-binding/binding-to-datatable
tags: binding,to,datatable
published: True
position: 2
---

# Binding to DataTable



**RadTabStrip** can be bound to **DataSet**, **DataTable**, and **DataView**. The tab strip hierarchy can be established with an*ID->ParentID* relation.

## Creating the data table in code

The following example illustrates how to bind to a **DataTable** that is created in code. The same type of logic can easily be applied to a **DataView** instead:

1. Create a function that dynamically creates the data source (in this case, a **DataTable**):



````C#	
Typrivate DataTable CreateTestTable()
{
	DataTable table = new DataTable();
	table.Columns.Add( "ID");
	table.Columns.Add( "ParentID");
	table.Columns.Add( "Text");
	table.Columns.Add( "URL");
	table.Columns.Add( "Tooltip");
	table.Rows.Add(new string[] { "1", null, "root 1", "root1.aspx", "root 1 tooltip" });
	table.Rows.Add(new string[] { "2", null, "root 2", "root2.aspx", "root 1 tooltip" });
	table.Rows.Add(new string[] { "3", "1", "child 1.1", "child11.aspx" , "child 1.1 tooltip" });
	table.Rows.Add(new string[] { "4", "1", "child 1.2", "child12.aspx" , "child 1.2 tooltip" });
	table.Rows.Add(new string[] { "5", "1", "child 1.3", "child13.aspx" , "child 1.3 tooltip" });
	table.Rows.Add(new string[] { "6", "5", "child 1.3.1", "child131.aspx" , "child 1.3.1 tooltip" });
	table.Rows.Add(new string[] { "7", "5", "child 1.3.2", "child132.aspx" , "child 1.3.2 tooltip" });
	table.Rows.Add(new string[] { "8", "5", "child 1.3.3", "child133.aspx" , "child 1.3.3 tooltip" });
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


1. Set the **DataSource** property of the tab strip to the DataTable. At the same time, use the **RadTabStrip** properties to specify the fields to use for the **Text**, **Value**, and **NavigateUrl** properties of tabs. Indicate how to establish the item hierarchy by giving values to the **DataFieldID** and **DataFieldParentID** properties. Finally, call the **DataBind** method to bind the tab strip:


````C#	
protected void Page_Load( object sender, EventArgs e)
 {
  if (!IsPostBack) {
    RadTabStrip1.DataSource = CreateTestTable();
    //Establish hierarchy:
    RadTabStrip1.DataFieldID = "ID";
    RadTabStrip1.DataFieldParentID = "ParentID";
    //Set Text, Value, and NavigateUrl:
    RadTabStrip1.DataTextField = "Text";
    RadTabStrip1.DataValueField = "ID";
    RadTabStrip1.DataNavigateUrlField = "URL";
    RadTabStrip1.DataBind();
  }
}			
````
````VB.NET	
Protected Sub Page_Load(sender As Object, e As EventArgs) _
  Handles Me.Load
  If Not IsPostBack Then
    RadTabStrip1.DataSource = CreateTestTable()
    'Establish hierarchy:
    RadTabStrip1.DataFieldID = "ID"
    RadTabStrip1.DataFieldParentID = "ParentID"
    'Set Text, Value, and NavigateUrl:
    RadTabStrip1.DataTextField = "Text"
    RadTabStrip1.DataValueField = "ID"
    RadTabStrip1.DataNavigateUrlField = "URL"
    RadTabStrip1.DataBind()
  End If
End Sub 	
````

1. Create an [TabDataBound event handler]({%slug tabstrip/server-side-programming/tabdatabound%}) to set additional properties on the tabs:


````C#	
void RadTabStrip1_TabDataBound( object sender, RadTabStripEventArgs e)
{
	e.Tab.ToolTip = "Read more about" + (string)DataBinder.Eval(e.Tab.DataItem, "Text");	 
} 				
````
````VB.NET	
Private Sub RadTabStrip1_TabDataBound(ByVal sender As Object, ByVal e As RadTabStripEventArgs) Handles RadTabStrip1.TabDataBound
	e.Tab.ToolTip = "Read more about" + DirectCast(DataBinder.Eval(e.Tab.DataItem, "Text"), String)
End Sub 	
````

## Fetching the data from a separate database

You can use a **DataSet** when the data comes from a separate database. Just use a data adapter component to assign the data from the database to a **DataSet**:

>note When binding to a **DataSet** component, you can set the **DataMember** property to identify the **DataTable** within the **DataSet** to which the tab strip should be bound.
>


````C#	
protected void Page_Load(object sender, EventArgs e)
{
  if (!Page.IsPostBack)
  {
    OleDbDataAdapter adapter = new OleDbDataAdapter("SELECT * FROM Table1",
                          "Provider=Microsoft.Jet.OLEDB.4.0;Data Source="
                          + Server.MapPath("~/App_Data/db1.mdb" ));
    DataSet links = new DataSet();
    adapter.Fill(links);
    RadTabStrip1.DataSource = links;
    RadTabStrip1.DataFieldID = "ID";
    RadTabStrip1.DataFieldParentID = "ParentID";
    RadTabStrip1.DataTextField = "Text";
    RadTabStrip1.DataNavigateUrlField = "URL";
    RadTabStrip1.DataBind();
  }
} 				
````
````VB.NET	
Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
  If Not Page.IsPostBack Then
    Dim adapter As New OleDbDataAdapter("SELECT * FROM Table1", _
                 "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=" _
                + Server.MapPath("~/App_Data/db1.mdb"))
    Dim links As New DataSet()
    adapter.Fill(links)
    RadTabStrip1.DataSource = links
    RadTabStrip1.DataFieldID = "ID"
    RadTabStrip1.DataFieldParentID = "ParentID"
    RadTabStrip1.DataTextField = "Text"
    RadTabStrip1.DataNavigateUrlField = "URL"
    RadTabStrip1.DataBind()
  End If
End Sub 	
````

>caution The **ParentID** of the root tabs must be **null** ( **nothing** ). If for some reason the data source comes without null values for the ParentID column, you must either fix the data by writing code to modify ParentID values in the **DataTable** , or use a query that returns the expected value (null). For example:
>SELECT ID, Text, IF(ParentID = 0, NULL, ParentID) FROM tblData
>


# See Also

 * [Overview]({%slug tabstrip/data-binding/overview%})

 * [Using DataBindings]({%slug tabstrip/data-binding/using-databindings%})

 * [Binding to Table-Based DataSource Components]({%slug tabstrip/data-binding/binding-to-table-based-datasource-components%})

 * [Binding to Hierarchical DataSource Components]({%slug tabstrip/data-binding/binding-to-hierarchical-datasource-components%})

 * [Binding to Object-Based Data Sources]({%slug tabstrip/data-binding/binding-to-object-based-data-sources%})
