---
title: Binding To DataReader
page_title: Binding To DataReader | RadGrid for ASP.NET AJAX Documentation
description: Binding To DataReader
slug: grid/data-binding/understanding-data-binding/server-side-binding/various-data-sources/binding-to-datareader
tags: binding,to,datareader
published: True
position: 1
---

# Binding To DataReader



## 

You can extract values from your data source using a **DataReader** instance (calling the **ExecuteReader**() method for your **OleDbCommand/SqlCommand** command). That **DataReader** can be used as a **RadGrid** data source.

The following example shows how to use a **DataReader** using the grid's **NeedDataSource** event. It uses an Access data source and **SqlDataReader**:

RadGrid's declaration:



````C#
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server" AllowPaging="True" CellSpacing="0"
    GridLines="None" OnNeedDataSource="RadGrid1_NeedDataSource1" PageSize="10">
    <MasterTableView AutoGenerateColumns="true" DataKeyNames="CustomerID">
    </MasterTableView>
</telerik:RadGrid>
````
````VB
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server" AllowPaging="True" CellSpacing="0"
    GridLines="None" PageSize="10">
    <MasterTableView AutoGenerateColumns="true" DataKeyNames="CustomerID">
    </MasterTableView>
</telerik:RadGrid>
````


Code-behind:



````C#
SqlDataReader reader;
SqlConnection conn;

protected void RadGrid1_NeedDataSource1(object sender, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
{
    RadGrid1.DataSource = ReadRecords("SELECT CustomerID, CompanyName, ContactName FROM Customers");
}

private SqlDataReader ReadRecords(string query)
{
    String ConnString = ConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString;
    conn = new SqlConnection(ConnString);
    conn.Open();

    SqlCommand cmd = new SqlCommand(query, conn);
    reader = cmd.ExecuteReader();

    return reader;
}

protected void RadGrid1_DataBound(object sender, System.EventArgs e)
{
    reader.Close();
    conn.Close();
}
````
````VB
Dim conn As SqlConnection
Dim reader As SqlDataReader
Private Sub RadGrid1_NeedDataSource(ByVal [source] As Object, ByVal e As GridNeedDataSourceEventArgs) Handles RadGrid1.NeedDataSource
    RadGrid1.DataSource = ReadRecords("SELECT CustomerID, CompanyName, ContactName FROM Customers")
End Sub


Private Function ReadRecords(ByVal query As String) As SqlDataReader
    Dim ConnString As String = ConfigurationManager.ConnectionStrings("NorthwindConnectionString").ConnectionString
    conn = New SqlConnection(ConnString)
    conn.Open()

    Dim cmd As New SqlCommand(query, conn)
    reader = cmd.ExecuteReader()

    Return reader
End Function


Private Sub RadGrid1_DataBound(ByVal sender As Object, ByVal e As System.EventArgs)
    reader.Close()
    conn.Close()
End Sub
````


>note The most appropriate place to close the DataReader and the connection is in the **DataBound** event handler of the grid, as shown above.
>

