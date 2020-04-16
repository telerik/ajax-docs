---
title: Strip HTML tags exported to CSV
description: Strip HTML tags exported to CSV
type: how-to
page_title: Strip HTML tags exported to CSV - RadGrid | Telerik UI for ASP.NET AJAX
slug: strip-html-from-exported-csv
ticketid: 1461923
res_type: kb
---


## Description

Exporting the Grid to CSV also includes the HTML tags. How to export only the text without the HTML tags?

## Solution

Since RadGrid does not provide an embedded mechanism, an additional implementation will be required to strip the HTML tags.

There are many examples/resources about this topic on the internet, however, here is one that this article uses: [How do I remove all HTML tags from a string without knowing which tags are in it? [duplicate]](https://stackoverflow.com/questions/18153998/how-do-i-remove-all-html-tags-from-a-string-without-knowing-which-tags-are-in-it/18154046#18154046)

To implement this, the **e.ExportOutput** event can be used. In the event arguments gives access to the HTML structure that will be exported. This is a moment when the stripping of HTML tags can be implemented.

Here is a complete example

````ASPX.NET
<telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" Width="800px" OnNeedDataSource="RadGrid1_NeedDataSource" OnGridExporting="RadGrid1_GridExporting">
    <ExportSettings ExportOnlyData="true" IgnorePaging="true">
    </ExportSettings>
    <MasterTableView AutoGenerateColumns="False" DataKeyNames="OrderID" CommandItemDisplay="Top">
        <CommandItemSettings ShowExportToCsvButton="true" />
        <Columns>
            <telerik:GridBoundColumn DataField="OrderID" DataType="System.Int32"
                FilterControlAltText="Filter OrderID column" HeaderText="OrderID"
                ReadOnly="True" SortExpression="OrderID" UniqueName="OrderID">
            </telerik:GridBoundColumn>
            <telerik:GridDateTimeColumn DataField="OrderDate" DataType="System.DateTime"
                FilterControlAltText="Filter OrderDate column" HeaderText="OrderDate"
                SortExpression="OrderDate" UniqueName="OrderDate">
            </telerik:GridDateTimeColumn>
            <telerik:GridNumericColumn DataField="Freight" DataType="System.Decimal"
                FilterControlAltText="Filter Freight column" HeaderText="Freight"
                SortExpression="Freight" UniqueName="Freight">
            </telerik:GridNumericColumn>
            <telerik:GridBoundColumn DataField="ShipName"
                FilterControlAltText="Filter ShipName column" HeaderText="ShipName"
                SortExpression="ShipName" UniqueName="ShipName">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="ShipCountry"
                FilterControlAltText="Filter ShipCountry column" HeaderText="ShipCountry"
                SortExpression="ShipCountry" UniqueName="ShipCountry">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="HTML"
                FilterControlAltText="Filter HTML column" HeaderText="HTML"
                SortExpression="HTML" UniqueName="HTML">
            </telerik:GridBoundColumn>
        </Columns>
    </MasterTableView>
</telerik:RadGrid>
````

Code behind logic

````C#
protected void RadGrid1_NeedDataSource(object sender, GridNeedDataSourceEventArgs e)
{
    RadGrid1.DataSource = OrdersTable();
}

private DataTable OrdersTable()
{
    DataTable dt = new DataTable();

    dt.Columns.Add(new DataColumn("OrderID", typeof(int)));
    dt.Columns.Add(new DataColumn("OrderDate", typeof(DateTime)));
    dt.Columns.Add(new DataColumn("Freight", typeof(decimal)));
    dt.Columns.Add(new DataColumn("ShipName", typeof(string)));
    dt.Columns.Add(new DataColumn("ShipCountry", typeof(string)));
    dt.Columns.Add(new DataColumn("HTML", typeof(string)));

    dt.PrimaryKey = new DataColumn[] { dt.Columns["OrderID"] };

    for (int i = 0; i < 70; i++)
    {
        int index = i + 1;

        DataRow row = dt.NewRow();

        row["OrderID"] = index;
        row["OrderDate"] = new DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, 0, 0, 0).AddHours(index);
        row["Freight"] = index * 0.1 + index * 0.01;
        row["ShipName"] = "Name " + index;
        row["ShipCountry"] = "Country " + index;
        row["HTML"] = "<b>some text<b/>";

        dt.Rows.Add(row);
    }

    return dt;
}

protected void RadGrid1_GridExporting(object sender, GridExportingArgs e)
{
    e.ExportOutput = StripHTML(e.ExportOutput);
}

public static string StripHTML(string input)
{
    return Regex.Replace(input, "<.*?>", String.Empty);
}
````
````VB
Protected Sub RadGrid1_NeedDataSource(sender As Object, e As GridNeedDataSourceEventArgs)
    RadGrid1.DataSource = OrdersTable()
End Sub

Private Function OrdersTable() As DataTable
    Dim dt As New DataTable()

    dt.Columns.Add(New DataColumn("OrderID", Type.GetType("System.Int32")))
    dt.Columns.Add(New DataColumn("OrderDate", Type.GetType("System.DateTime")))
    dt.Columns.Add(New DataColumn("Freight", Type.GetType("System.Decimal")))
    dt.Columns.Add(New DataColumn("ShipName", Type.GetType("System.String")))
    dt.Columns.Add(New DataColumn("ShipCountry", Type.GetType("System.String")))
    dt.Columns.Add(New DataColumn("HTML", Type.GetType("System.String")))

    Dim PrimaryKeyColumns As DataColumn() = New DataColumn(0) {}
    PrimaryKeyColumns(0) = dt.Columns("OrderID")
    dt.PrimaryKey = PrimaryKeyColumns

    For i As Integer = 0 To 70 - 1
        Dim index As Integer = i + 1
        Dim row As DataRow = dt.NewRow()

        row("OrderID") = index
        row("OrderDate") = New DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, 0, 0, 0).AddHours(index)
        row("Freight") = index * 0.1 + index * 0.01
        row("ShipName") = "Name " & index
        row("ShipCountry") = "Country " & index
        row("HTML") = "<b>some text<b/>"

        dt.Rows.Add(row)
    Next

    Return dt
End Function

Protected Sub RadGrid1_GridExporting(ByVal sender As Object, ByVal e As GridExportingArgs)
    e.ExportOutput = StripHTML(e.ExportOutput)
End Sub

Public Shared Function StripHTML(ByVal input As String) As String
    Return Regex.Replace(input, "<.*?>", String.Empty)
End Function
    
````

*StripHTML* is an example method to demonstrate the idea. It was not tested against every scenario and may require further review.

