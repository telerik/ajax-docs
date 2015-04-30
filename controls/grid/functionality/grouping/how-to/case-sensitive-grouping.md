---
title: Case Sensitive Grouping
page_title: Case Sensitive Grouping | RadGrid for ASP.NET AJAX Documentation
description: Case Sensitive Grouping
slug: grid/functionality/grouping/how-to/case-sensitive-grouping
tags: case,sensitive,grouping
published: True
position: 6
---

# Case Sensitive Grouping



## 

RadGrid supports grouping of items based on the value of a particular column. To group these items in a case sensitive order you can set **GroupingSettings.CaseSensitive** property to **true**. Using this property you will make the grid grouping and filtering case sensitive.

````ASPNET
<telerik:RadGrid ID="RadGrid1" runat="server" OnNeedDataSource="RadGrid1_NeedDataSource" ShowGroupPanel="true">
    <GroupingSettings CaseSensitive="true" />
    <ClientSettings AllowDragToGroup="True" />
</telerik:RadGrid>
````



>note If you use case sensitive grouping and the grid is populated through **NeedDataSource** event or with **SqlDataSource** you should make the data table **CaseSensitive** .
>


When you are populating the grid through **NeedDataSource** and at the same time you need case sensitive grouping you can use the code snippet below:



````C#
protected void RadGrid1_NeedDataSource(object sender, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
{
    DataTable table = new DataTable();
    table.Columns.Add("ID");
    table.Columns.Add("Item");
    table.Columns.Add("Date", typeof(DateTime));
    for (int i = 1; i < 8; i++)
    {
        table.Rows.Add(i, "Item", DateTime.Now.AddDays(i));
    }
    for (int i = 1; i < 8; i++)
    {
        table.Rows.Add(i, "item", DateTime.Now.AddDays(i));
    }
    table.CaseSensitive = true;
    RadGrid1.DataSource = table;
}

````
````VB.NET
Protected Sub RadGrid1_NeedDataSource(sender As Object, e As Telerik.Web.UI.GridNeedDataSourceEventArgs)
    Dim table As New DataTable()
    table.Columns.Add("ID")
    table.Columns.Add("Item")
    table.Columns.Add("Date", GetType(DateTime))
    For i As Integer = 1 To 7
        table.Rows.Add(i, "Item", DateTime.Now.AddDays(i))
    Next
    For i As Integer = 1 To 7
        table.Rows.Add(i, "item", DateTime.Now.AddDays(i))
    Next
    table.CaseSensitive = True
    RadGrid1.DataSource = table
End Sub
````


If you are using **SqlDataSource** you can make the grid grouping case sensitive with the following code:



````C#
protected void RadGrid1_NeedDataSource(object sender, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
{
    DataView dv = (DataView)sqlDS1.Select(DataSourceSelectArguments.Empty);
    DataTable dt = new DataTable();
    dt = dv.ToTable();
    dt.CaseSensitive = true;
    RadGrid1.DataSource = table;
}
````
````VB.NET
Protected Sub RadGrid1_NeedDataSource(sender As Object, e As Telerik.Web.UI.GridNeedDataSourceEventArgs)
    Dim dv As DataView = DirectCast(sqlDS1.[Select](DataSourceSelectArguments.Empty), DataView)
    Dim dt As New DataTable()
    dt = dv.ToTable()
    dt.CaseSensitive = True
    RadGrid1.DataSource = Table
End Sub
````

