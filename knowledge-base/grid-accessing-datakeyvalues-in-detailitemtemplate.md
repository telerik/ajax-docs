---
title: Accessing DataKeyValues in RadGrid DetailItemTemplate
description: Learn how to access MasterTableView DataKeyValues from a DetailItemTemplate in RadGrid for ASP.NET AJAX.
type: how-to
page_title: Accessing MasterTableView DataKeyValues from DetailItemTemplate in RadGrid
slug: grid-accessing-datakeyvalues-in-detailitemtemplate
tags: radgrid, asp.net ajax, datakeyvalues, detailitemtemplate, itemcommand
res_type: kb
ticketid: 1661874
---

## Environment

| Product | Version |
| --- | --- |
| RadGrid for ASP.NET AJAX | All |

## Description

In RadGrid for ASP.NET AJAX, I want to place a button within the `DetailItemTemplate` and handle its click event in the `ItemCommand` event. Specifically, I need to retrieve the `DataKeyValues` when this button is clicked. How can this be achieved?

This KB article also answers the following questions:
- How can I access DataKeyValues from a DetailItemTemplate in RadGrid?
- What is the method to retrieve MasterTableView information from a DetailItemTemplate button click?
- How to handle DetailItemTemplate button events and access parent DataKeyValues in RadGrid?

## Solution

To access `DataKeyValues` from a `DetailItemTemplate` in RadGrid, you cannot directly reference the parent `GridDataItem`, as the `DetailItemTemplate` does not inherently hold this information. However, you can achieve the desired functionality by passing the `DataKeyValues` as `CommandArguments` of the button within the `DetailItemTemplate`. Upon clicking the button, these values can be retrieved in the `ItemCommand` event handler on the server side.

1. Define the RadGrid with `DataKeyNames` specified in the `MasterTableView`. Include a button in the `DetailItemTemplate` with `CommandName` and `CommandArgument`, where `CommandArgument` is set to the desired DataKeyValues, concatenated as a string:

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" Width="800px" OnNeedDataSource="RadGrid1_NeedDataSource" OnItemCommand="RadGrid1_ItemCommand">
    <MasterTableView AutoGenerateColumns="False" DataKeyNames="DataKeyValue1, DataKeyValue2">
        <Columns>
            <telerik:GridBoundColumn DataField="DataKeyValue1" DataType="System.Int32" HeaderText="DataKeyValue1" SortExpression="DataKeyValue1" UniqueName="DataKeyValue1">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="DataKeyValue2" DataType="System.Int32" HeaderText="DataKeyValue2" SortExpression="DataKeyValue2" UniqueName="DataKeyValue2">
            </telerik:GridBoundColumn>
        </Columns>
        <DetailItemTemplate>
            <telerik:RadButton runat="server" ID="RadButton1" Text="Click me" AutoPostBack="true" 
                CommandName="CustomCommand" CommandArgument='<%# Eval("DataKeyValue1").ToString() + "," + Eval("DataKeyValue2").ToString() %>'  />
        </DetailItemTemplate>
    </MasterTableView>
</telerik:RadGrid>
````

2. In the `ItemCommand` event handler, split the `CommandArgument` string to retrieve individual DataKeyValues:

````C#
protected void RadGrid1_ItemCommand(object sender, GridCommandEventArgs e)
{
    if (e.CommandName == "CustomCommand")
    {
        string args = e.CommandArgument.ToString();
        string[] dataKeyValues = args.Split(',');

        int dataKeyValue1 = int.Parse(dataKeyValues[0]);
        int dataKeyValue2 = int.Parse(dataKeyValues[1]);
    }
}

protected void RadGrid1_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
{
    (sender as RadGrid).DataSource = OrdersTable(); 
}

private DataTable OrdersTable()
{
    DataTable dt = new DataTable();

    dt.Columns.Add(new DataColumn("DataKeyValue1", typeof(int)));
    dt.Columns.Add(new DataColumn("DataKeyValue2", typeof(int)));

    dt.PrimaryKey = new DataColumn[] { dt.Columns["DataKeyValue1"] };

    for (int i = 0; i < 10; i++)
    {
        int index = i + 1;

        DataRow row = dt.NewRow();

        row["DataKeyValue1"] = index;
        row["DataKeyValue2"] = index + 1;

        dt.Rows.Add(row);
    }

    return dt;
}
````

````VB
Protected Sub RadGrid1_ItemCommand(ByVal sender As Object, ByVal e As GridCommandEventArgs)
    If e.CommandName = "CustomCommand" Then
        Dim args As String = e.CommandArgument.ToString()
        Dim dataKeyValues As String() = args.Split(",")

        Dim dataKeyValue1 As Integer = Integer.Parse(dataKeyValues(0))
        Dim dataKeyValue2 As Integer = Integer.Parse(dataKeyValues(1))
        ' Use dataKeyValue1 and dataKeyValue2 as needed
    End If
End Sub

Protected Sub RadGrid1_NeedDataSource(ByVal sender As Object, ByVal e As GridNeedDataSourceEventArgs)
    CType(sender, RadGrid).DataSource = OrdersTable()
End Sub

Private Function OrdersTable() As DataTable
    Dim dt As DataTable = New DataTable()
    dt.Columns.Add(New DataColumn("DataKeyValue1", GetType(Integer)))
    dt.Columns.Add(New DataColumn("DataKeyValue2", GetType(Integer)))

    For i As Integer = 0 To 10 - 1
        Dim index As Integer = i + 1
        Dim row As DataRow = dt.NewRow()
        row("DataKeyValue1") = index
        row("DataKeyValue2") = index + 1

        dt.Rows.Add(row)
    Next

    Return dt
End Function
````

This approach allows you to access and utilize `DataKeyValues` in your server-side logic when a button within a `DetailItemTemplate` is clicked.

## See Also

- [RadGrid for ASP.NET AJAX Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/overview)
- [GridDataItem Server-Side API](https://docs.telerik.com/devtools/aspnet-ajax/api/server/telerik.web.ui/griddataitem#getdatakeyvalue)
- [How to Get DataKey Value](https://www.telerik.com/forums/how-can-i-get-datakey-value)
