---
title: Binding to DataTable or DataSet
page_title: Binding to DataTable or DataSet - RadGrid
description: Check our Web Forms article about Binding to DataTable or DataSet.
slug: grid/data-binding/server-side-binding/various-data-sources/binding-to-datatable-or-dataset
previous_url: controls/grid/data-binding/understanding-data-binding/server-side-binding/various-data-sources/binding-to-datatable-or-dataset
tags: binding,to,datatable,or,dataset
published: True
position: 0
---

# Binding to DataTable or DataSet


When not using [declarative data sources]({%slug grid/data-binding/server-side-binding/declarative-datasource%}), the most common means of providing a data source for a **RadGrid** control is probably using a **DataTable** or **DataSet** control. You can populate **DataTable** instance (part of **DataSet** object or not) with data from a source of your choice (database, custom object collection, xml file, etc.) and then pass it to the **DataSource** property of the control. Here is a sample that uses the **NeedDataSource** event, extracting the data from an SQL database:



````ASPX
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server" CellSpacing="0"
    GridLines="None" OnNeedDataSource="RadGrid1_NeedDataSource1" AllowPaging="true"
    PageSize="10">
    <MasterTableView AutoGenerateColumns="true" DataKeyNames="CustomerID">
    </MasterTableView>
</telerik:RadGrid>
````


And in the code-behind:



````C#	
protected void RadGrid1_NeedDataSource1(object sender, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
{
    RadGrid1.DataSource = GetDataTable("SELECT CustomerID, CompanyName, ContactName FROM Customers");
}

public DataTable GetDataTable(string query)
{
    String ConnString = ConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString;
    SqlDataAdapter adapter = new SqlDataAdapter();
    DataTable myDataTable = new DataTable();
    using (SqlConnection conn = new SqlConnection(ConnString))
    {
        adapter.SelectCommand = new SqlCommand(query, conn);
        adapter.Fill(myDataTable);
    }
    return myDataTable;
}

````
````VB
Protected Sub RadGrid1_NeedDataSource(ByVal source As Object, ByVal e As Telerik.Web.UI.GridNeedDataSourceEventArgs) Handles RadGrid1.NeedDataSource
    RadGrid1.DataSource = GetDataTable("SELECT CustomerID, CompanyName, ContactName FROM Customers")
End Sub

Public Function GetDataTable(ByVal query As String) As DataTable
    Dim ConnString As [String] = ConfigurationManager.ConnectionStrings("NorthwindConnectionString").ConnectionString
    Dim adapter As New SqlDataAdapter()
    Dim myDataTable As New DataTable()
    Using conn As New SqlConnection(ConnString)
        adapter.SelectCommand = New SqlCommand(query, conn)
        adapter.Fill(myDataTable)
    End Using
    Return myDataTable
End Function
````

