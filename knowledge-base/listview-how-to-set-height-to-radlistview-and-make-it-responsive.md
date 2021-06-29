---
title: How to set height to RadListView and make it responsive
description: How to set height to RadListView and make it responsive. Check it now!
type: how-to
page_title: How to set height to RadListView and make it responsive
slug: listview-how-to-set-height-to-radlistview
res_type: kb
---


### HOW TO

In this KB article you will learn how to set the RadListView `Height`. This would allow you to define a responsive layout or to let it fill its container height to 100%.

### Solution

1. **Define a container for the items with the desired settings inside the LayoutTemplate**, because RadListView does not render a wrapping element for its items:

```ASP.NET
<div class="contentContainer">
    <telerik:RadListView ItemPlaceholderID="Placeholder1" ID="RadListView" RenderMode="Lightweight" runat="server" OnNeedDataSource="RadListView1_NeedDataSource">
        <LayoutTemplate>
            <div style="height: 100%; background: yellow; overflow: auto;" id="listViewLayout">
                <asp:PlaceHolder runat="server" ID="Placeholder1" />
            </div>
        </LayoutTemplate>
        <ItemTemplate>
            <div style="margin: 5px 0px 8px 0px; border: 1px solid black;">
                <%# Eval("ID") %>
            </div>
        </ItemTemplate>
    </telerik:RadListView>
</div>
```

1. Add some styling to match your needs. This will make the ListView be 50% of the page:

```CSS
<style>
    html, body, form {
        margin: 0;
        padding: 0;
        height: 100%;
        overflow: hidden;
    }
 
    .contentContainer {
        width: 50%;
        height: 50%;
    }
</style>
```



1. Add some dummy data in the control:

```C#
protected void RadListView1_NeedDataSource(object sender, RadListViewNeedDataSourceEventArgs e)
{
    (sender as RadListView).DataSource = GetGridSource();
}
private DataTable GetGridSource()
{
    DataTable dataTable = new DataTable();
 
    DataColumn column = new DataColumn();
    column.DataType = Type.GetType("System.Int32");
    column.ColumnName = "ID";
    dataTable.Columns.Add(column);
 
    for (int i = 0; i <= 100; i++)
    {
        DataRow row = dataTable.NewRow();
        row["ID"] = i + 1;
 
        dataTable.Rows.Add(row);
    }
 
    return dataTable;
}
```
```VB
Protected Sub RadListView1_NeedDataSource(ByVal sender As Object, ByVal e As RadListViewNeedDataSourceEventArgs)
    (TryCast(sender, RadListView)).DataSource = GetGridSource()
End Sub

Private Function GetGridSource() As DataTable
    Dim dataTable As DataTable = New DataTable()
    Dim column As DataColumn = New DataColumn()
    column.DataType = Type.[GetType]("System.Int32")
    column.ColumnName = "ID"
    dataTable.Columns.Add(column)

    For i As Integer = 0 To 100
        Dim row As DataRow = dataTable.NewRow()
        row("ID") = i + 1
        dataTable.Rows.Add(row)
    Next

    Return dataTable
End Function
```




