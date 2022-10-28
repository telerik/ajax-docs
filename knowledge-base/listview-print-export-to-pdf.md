---
title: How to export RadListView to PDF
description: See how to print RadListView data to Landscape in a pdf or png file with the help of RadClientExportManager.
type: how-to
page_title: How to export RadListView to PDF file
slug: listview-print-export-to-pdf
position: 
tags: export, pdf, print
ticketid: 1584782
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadListView for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
You can find below how to export the RadListView data to a pdf file with the help of RadClientExportManager.

## Solution
Here is an example:

````ASPX
           <telerik:RadScriptManager ID="QsfScriptManager" runat="server" />
            <telerik:RadClientExportManager ID="RadClientExportManager1" runat="server">
                <PdfSettings FileName="ListViewExport.pdf" />
            </telerik:RadClientExportManager>
            <telerik:RadButton runat="server" ID="RadButton1" Text="Export ListView to PDF" AutoPostBack="false" OnClientClicked="OnClientClicked" />
            <script>
                function OnClientClicked(sender, args) {
                    var listview = $find("<%= RadListView1.ClientID %>");
                    var clientExportManager = $find("<%= RadClientExportManager1.ClientID %>");
                    clientExportManager.exportPDF($telerik.$(listview.get_element())); //clientExportManager.exportToPng($telerik.$(listview.get_element())) will export the content to a png image
                }
            </script>
            <telerik:RadListView ID="RadListView1" Width="97%" AllowPaging="True" runat="server"
                AllowSorting="true" OnNeedDataSource="RadListView1_NeedDataSource" ItemPlaceholderID="ProductsHolder"
                DataKeyNames="OrderID">
                <LayoutTemplate>
                    <fieldset style="width: 700px;" id="RadListView1">
                        <legend>Products</legend>
                        <asp:Panel ID="ProductsHolder" runat="server" />
                    </fieldset>
                </LayoutTemplate>
                <ItemTemplate>
                    <div style="float: left;">
                        <table cellpadding="0" cellspacing="0" style="width: 230px;">
                            <tr>
                                <td style="width: 20%;">Name:
                                </td>
                                <td style="width: 80%; padding-left: 5px;">
                                    <%# Eval("ShipName") %>
                                </td>
                            </tr>

                        </table>
                    </div>
                </ItemTemplate>
            </telerik:RadListView>
````
````C#
   private DataTable OrdersTable()
    {
        DataTable dt = new DataTable();

        dt.Columns.Add(new DataColumn("OrderID", typeof(int)));
        dt.Columns.Add(new DataColumn("OrderDate", typeof(DateTime)));
        dt.Columns.Add(new DataColumn("Freight", typeof(decimal)));
        dt.Columns.Add(new DataColumn("ShipName", typeof(string)));
        dt.Columns.Add(new DataColumn("ShipCountry", typeof(string)));

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

            dt.Rows.Add(row);
        }

        return dt;
    }


    protected void RadListView1_NeedDataSource(object sender, RadListViewNeedDataSourceEventArgs e)
    {
        (sender as RadListView).DataSource = OrdersTable();
    }
````
````VB
    Private Function OrdersTable() As DataTable
        Dim dt As DataTable = New DataTable()
        dt.Columns.Add(New DataColumn("OrderID", GetType(Integer)))
        dt.Columns.Add(New DataColumn("OrderDate", GetType(DateTime)))
        dt.Columns.Add(New DataColumn("Freight", GetType(Decimal)))
        dt.Columns.Add(New DataColumn("ShipName", GetType(String)))
        dt.Columns.Add(New DataColumn("ShipCountry", GetType(String)))
        dt.PrimaryKey = New DataColumn() {dt.Columns("OrderID")}

        For i As Integer = 0 To 70 - 1
            Dim index As Integer = i + 1
            Dim row As DataRow = dt.NewRow()
            row("OrderID") = index
            row("OrderDate") = New DateTime(DateTime.Now.Year, DateTime.Now.Month, DateTime.Now.Day, 0, 0, 0).AddHours(index)
            row("Freight") = index * 0.1 + index * 0.01
            row("ShipName") = "Name " & index
            row("ShipCountry") = "Country " & index
            dt.Rows.Add(row)
        Next

        Return dt
    End Function

    Protected Sub RadListView1_NeedDataSource(ByVal sender As Object, ByVal e As RadListViewNeedDataSourceEventArgs)
        (TryCast(sender, RadListView)).DataSource = OrdersTable()
    End Sub
    ````
  

## See Also
* [RadClientExportManager demo](https://demos.telerik.com/aspnet-ajax/client-export-manager/overview/defaultcs.aspx)

 