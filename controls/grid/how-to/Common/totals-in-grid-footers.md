---
title: Totals in Grid Footers
page_title: Totals in Grid Footers | RadGrid for ASP.NET AJAX Documentation
description: Totals in Grid Footers
slug: grid/how-to/totals-in-grid-footers
tags: totals,in,grid,footers
published: True
position: 0
---

# Totals in Grid Footers



There are various cases in which you may want to display results from aggregate functions performed over the columns in the grid in their footer.

**Declarative solution**

RadGrid provides an intuitive method to define aggregates on a per column basis from design time and render the results inside the respective column's footer. Aggregate calculations are supported for GridBoundColumns and GridCalculatedColumns.

In order to specify how the group aggregates will be evaluated, specify in every GridBoundColumn/GridCalculatedColumn the **Aggregate** property which accepts values from the **GridAggregateFunction** enumeration. The options available for the GridAggregateFunction enumeration are listed below:

**GridAggregateFunction enumeration members**


>caption  

|  **Member**  |  **Description**  |
| ------ | ------ |
| **Sum** |Returns the sum of all column values in the source.|
| **Min** |Returns the min value from the source column.|
| **Max** |Returns the max value from the source column.|
| **Last** |Returns the last value from the source column.|
| **First** |Returns the first value from the source column.|
| **Count** |Returns the count of source column values, including null values.|
| **Avg** |Returns the average value from the source column values.|
| **Custom** |Raises OnCustomAggregate event where the custom result can be set using the e.Result argument.|
| **None** |Default value, no aggregate function applied.|



>note RadGrid will calculate aggregates over the entire data source and will respect the filter expression applied (if present)
>


For further details please refer to [this online demo](https://demos.telerik.com/aspnet-ajax//Grid/Examples/GeneralFeatures/Aggregates/DefaultCS.aspx) of the product. Find a code extraction below:

````ASP.NET
<asp:ScriptManager ID="ScriptManager1" runat="server" />
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
  <AjaxSettings>
    <telerik:AjaxSetting AjaxControlID="RadGrid1">
      <UpdatedControls>
        <telerik:AjaxUpdatedControl ControlID="RadGrid1" />
      </UpdatedControls>
    </telerik:AjaxSetting>
  </AjaxSettings>
</telerik:RadAjaxManager>
<telerik:RadGrid RenderMode="Lightweight" ShowGroupPanel="true" AutoGenerateColumns="false" ID="RadGrid1"
  DataSourceID="SqlDataSource1" Skin="Vista" AllowFilteringByColumn="True" AllowSorting="True"
  ShowFooter="True" runat="server" GridLines="None" OnCustomAggregate="RadGrid1_CustomAggregate">
  <PagerStyle Mode="NextPrevAndNumeric" />
  <HeaderStyle Width="150px" />
  <MasterTableView TableLayout="Fixed">
    <Columns>
      <telerik:GridNumericColumn Aggregate="Avg" DataField="OrderID" HeaderText="OrderID"
        SortExpression="OrderID" UniqueName="OrderID">
      </telerik:GridNumericColumn>
      <telerik:GridBoundColumn Aggregate="Count" DataField="ShipName" HeaderText="ShipName"
        SortExpression="ShipName" UniqueName="ShipName">
      </telerik:GridBoundColumn>
      <telerik:GridDateTimeColumn Aggregate="Last" DataField="OrderDate" HeaderText="OrderDate"
        SortExpression="OrderDate" UniqueName="OrderDate" PickerType="None" DataFormatString="{0:d}">
      </telerik:GridDateTimeColumn>
      <telerik:GridDateTimeColumn Aggregate="First" DataField="ShippedDate" HeaderText="ShippedDate"
        SortExpression="ShippedDate" UniqueName="ShippedDate" PickerType="DatePicker" DataFormatString="{0:D}">
      </telerik:GridDateTimeColumn>
      <telerik:GridBoundColumn Aggregate="Min" DataField="ShipCountry" HeaderText="ShipCountry"
        SortExpression="ShipCountry" UniqueName="ShipCountry">
      </telerik:GridBoundColumn>
      <telerik:GridMaskedColumn Aggregate="Max" DataField="ShipPostalCode" HeaderText="ShipPostalCode"
        SortExpression="ShipPostalCode" UniqueName="ShipPostalCode" Mask="#####">
      </telerik:GridMaskedColumn>
      <telerik:GridNumericColumn Aggregate="Sum" DataField="Freight" DataType="System.Decimal"
        HeaderText="Freight" SortExpression="Freight" UniqueName="Freight">
      </telerik:GridNumericColumn>
      <telerik:GridBoundColumn Aggregate="Custom" DataField="CustomerID" DataType="System.String"
        HeaderText="CustomerID" SortExpression="CustomerID" UniqueName="CustomerID">
      </telerik:GridBoundColumn>
    </Columns>
  </MasterTableView>
  <ClientSettings AllowDragToGroup="true" Scrolling-AllowScroll="true" Scrolling-UseStaticHeaders="true" />
</telerik:RadGrid>
<asp:Button ID="Button1" Text="PostBack!" CssClass="button" Style="margin: 10px 22px 10px 0px"
  runat="server"></asp:Button>
Click PostBack to see the state of the grid is preserved.
<br />
<asp:SqlDataSource ID="SqlDataSource1" SelectCommand="SELECT TOP 50 * FROM Orders"
  ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" ProviderName="System.Data.SqlClient"
  runat="server"></asp:SqlDataSource>
````



**Programmatic solution**

Here are the steps you need to undertake to display totals in the grid columns footer:

1. Subscribe to the **ItemDataBound** event of Telerik RadGrid

1. Calculate the sum of the values in all cells of a specified column

1. Insert the result in the footer of the corresponding column

Do not forget to set **ShowFooter = true** for the MasterTableView to visualize content in the grid footer.

See the forthcoming implementation for further info (**Quantity** is integer field in the grid database):



````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server">
  <MasterTableView AutoGenerateColumns="False" ShowFooter="True">
    <HeaderStyle BackColor="#33ffff"></HeaderStyle>
    <FooterStyle BackColor="#cc6633"></FooterStyle>
    <Columns>
      <telerik:GridBoundColumn HeaderText="Quantity" DataField="Quantity" UniqueName="Quantity" />
    </Columns>
  </MasterTableView>
</telerik:RadGrid>
````
````C#
int total;
private void RadGrid1_ItemDataBound(object sender, Telerik.Web.UI.GridItemEventArgs e)
{
    if (e.Item is GridDataItem)
    {
        GridDataItem dataItem = e.Item as GridDataItem;
        int fieldValue = int.Parse(dataItem["Quantity"].Text);
        total += fieldValue;
    }
    if (e.Item is GridFooterItem)
    {
        GridFooterItem footerItem = e.Item as GridFooterItem;
        footerItem["Quantity"].Text = "total: " + total.ToString();
    }
}
````
````VB
Dim total As Integer
Private Sub RadGrid1_ItemDataBound(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridItemEventArgs)
    If (TypeOf e.Item Is GridDataItem) Then
        Dim dataItem As GridDataItem = CType(e.Item, GridDataItem)
        Dim fieldValue As Integer = Integer.Parse(dataItem("Quantity").Text)
        total = (total + fieldValue)
    End If
    If (TypeOf e.Item Is GridFooterItem) Then
        Dim footerItem As GridFooterItem = CType(e.Item, GridFooterItem)
        footerItem("Quantity").Text = "total: " + total.ToString()
    End If
End Sub
````


## Displaying totals for all grid pages

If you prefer to show grand total in a column footer which calculates the sum for the data in the column cells in all available pages, you need to:

1. Subscribe to the *DataBound* event of RadGrid

1. Iterate through the rows in the underlying grid source

1. Sum up the total and insert it in the respective column footer

Below are the code snippets of a sample approach (note that with other type of data sources you may need to traverse and extract the data in a different manner):



````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server" Width="500px" Skin="Grey">
  <MasterTableView AutoGenerateColumns="False" ShowFooter="True" AllowPaging="true">
    <FooterStyle BackColor="#cc6633"></FooterStyle>
    <Columns>
      <telerik:GridBoundColumn HeaderText="Quantity" DataField="Quantity" UniqueName="Quantity" />
    </Columns>
  </MasterTableView>
  <PagerStyle Mode="NextPrevAndNumeric" />
</telerik:RadGrid>
````
````C#
int total;
int grandTotal;

private void RadGrid1_ItemDataBound(object sender, Telerik.Web.UI.GridItemEventArgs e)
{
    if (e.Item is GridDataItem)
    {
        GridDataItem dataItem = (GridDataItem)e.Item;
        int fieldValue = int.Parse(dataItem["Quantity"].Text);
        total = total + fieldValue;
    }
    if (e.Item is GridFooterItem)
    {
        GridFooterItem footerItem = (GridFooterItem)e.Item;
        footerItem["Quantity"].Text = "Total: " + total.ToString();
    }
}

protected void RadGrid1_DataBound(object sender, System.EventArgs e)
{
    DataTable gridTable = GetDataTable("SELECT * FROM [Order Details]");

    foreach (DataRow row in gridTable.Rows)
    {
        grandTotal = grandTotal + int.Parse(row["Quantity"]);
    }
    GridFooterItem footerItem = RadGrid1.MasterTableView.GetItems(GridItemType.Footer)[0];
    footerItem["Quantity"].Text = footerItem["Quantity"].Text + "<br> Total for all pages: " + grandTotal.ToString();
}

protected void RadGrid1_NeedDataSource(object source, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
{
    RadGrid1.DataSource = GetDataTable("SELECT * FROM [Order Details]");
}
public DataTable GetDataTable(string query)
{
    OleDbConnection connection1 = new OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0; Data Source=" + System.Web.HttpContext.Current.Server.MapPath("~/Grid/Data/Access/NWind.mdb"));
    OleDbDataAdapter adapter1 = new OleDbDataAdapter();
    adapter1.SelectCommand = new OleDbCommand(query, connection1);
    DataTable table1 = new DataTable();
    connection1.Open();
    try
    {
        adapter1.Fill(table1);
    }
    finally
    {
        connection1.Close();
    }
    return table1;
}
````
````VB
Dim total As Integer
Dim grandTotal As Integer

Private Sub RadGrid1_ItemDataBound(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridItemEventArgs) Handles RadGrid1.ItemDataBound
    If (TypeOf e.Item Is GridDataItem) Then
        Dim dataItem As GridDataItem = CType(e.Item, GridDataItem)
        Dim fieldValue As Integer = Integer.Parse(dataItem("Quantity").Text)
        total = (total + fieldValue)
    End If
    If (TypeOf e.Item Is GridFooterItem) Then
        Dim footerItem As GridFooterItem = CType(e.Item, GridFooterItem)
        footerItem("Quantity").Text = "Total: " + total.ToString()
    End If
End Sub

Protected Sub RadGrid1_DataBound(ByVal sender As Object, ByVal e As System.EventArgs) Handles RadGrid1.DataBound
    Dim gridTable As DataTable = GetDataTable("SELECT * FROM [Order Details]")

    For Each row As DataRow In gridTable.Rows
        grandTotal = grandTotal + Integer.Parse(row("Quantity"))
    Next
    Dim footerItem As GridFooterItem = RadGrid1.MasterTableView.GetItems(GridItemType.Footer)(0)
    footerItem("Quantity").Text = footerItem("Quantity").Text + "<br> Total for all pages: " + grandTotal.ToString()
End Sub

Protected Sub RadGrid1_NeedDataSource(ByVal source As Object, ByVal e As Telerik.Web.UI.GridNeedDataSourceEventArgs) Handles RadGrid1.NeedDataSource
    RadGrid1.DataSource = GetDataTable("SELECT * FROM [Order Details]")
End Sub
Public Function GetDataTable(ByVal query As String) As DataTable
    Dim connection1 As New OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0; Data Source=" & System.Web.HttpContext.Current.Server.MapPath("~/Grid/Data/Access/NWind.mdb"))
    Dim adapter1 As New OleDbDataAdapter
    adapter1.SelectCommand = New OleDbCommand(query, connection1)
    Dim table1 As New DataTable
    connection1.Open()
    Try
        adapter1.Fill(table1)
    Finally
        connection1.Close()
    End Try
    Return table1
End Function

````


## Multi-line footer totals

When you want to "enhance" your footer and display the items in it in multiline mode, you can wire the

**ItemDataBound** event of the grid and add the values which you want to be shown at the bottom of the respective columns footer cells.

The forthcoming code snippets will render two rows in the table footer which will show the total price/units in stock along with the highest price/units quantity for the records displayed. Note that the data will be refreshed accordingly when you sort/page/filter records in the grid:



````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" DataSourceID="SqlDataSource2" AllowSorting="True"
  Skin="Office2007" runat="server" GridLines="None" Width="600px" AllowPaging="true"
  AllowFilteringByColumn="true" OnItemDataBound="RadGrid1_ItemDataBound" OnColumnCreated="RadGrid1_ColumnCreated">
  <MasterTableView Width="100%" AllowMultiColumnSorting="true" DataKeyNames="UnitPrice, UnitsInStock"
    ShowFooter="true" />
  <PagerStyle Mode="NextPrevAndNumeric" />
</telerik:RadGrid>
<br />
<asp:SqlDataSource ID="SqlDataSource2" SelectCommand="SELECT TOP 50 * FROM Products"
  ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" ProviderName="System.Data.SqlClient"
  runat="server">
</asp:SqlDataSource>
````
````C#
double totalPrice = 0;
double totalUnits = 0;

double highestPrice = 0;
double highestUnitQuantity = 0;

protected void RadGrid1_ItemDataBound(object sender, GridItemEventArgs e)
{
    if (e.Item is GridFooterItem)
    {
        GridFooterItem footerItem = e.Item as GridFooterItem;

        footerItem["ProductName"].Controls.Add(new LiteralControl("Total: <br/>"));
        footerItem["ProductName"].Controls.Add(new LiteralControl("Highest price/units quantity: "));

        footerItem["UnitPrice"].Controls.Add(new LiteralControl("$" + totalPrice.ToString() + "<br/>"));
        footerItem["UnitPrice"].Controls.Add(new LiteralControl("$" + highestPrice.ToString()));

        footerItem["UnitsInStock"].Controls.Add(new LiteralControl(totalUnits.ToString() + "<br/>"));
        footerItem["UnitsInS tock"].Controls.Add(new LiteralControl(highestUnitQuantity.ToString()));
    }
    else if (e.Item is GridDataItem)
    {
        GridDataItem dataItem = e.Item as GridDataItem;

        string formatPrice = dataItem.OwnerTableView.DataKeyValues[dataItem.ItemIndex]["UnitPrice"].ToString();
        double fieldValue = Double.Parse(formatPrice);
        totalPrice += fieldValue;

        if (highestPrice == 0 || highestPrice < fieldValue)
        {
            highestPrice = fieldValue;
        }

        fieldValue = Double.Parse(dataItem.OwnerTableView.DataKeyValues[dataItem.ItemIndex]["UnitsInStock"].ToString());
        totalUnits += fieldValue;

        if (highestUnitQuantity == 0 || highestUnitQuantity < fieldValue)
        {
            highestUnitQuantity = fieldValue;
        }
    }
}
protected void RadGrid1_ColumnCreated(object sender, GridColumnCreatedEventArgs e)
{
    if (e.Column.UniqueName == "UnitPrice")
    {
        (e.Column as GridBoundColumn).DataFormatString = "{0:$###,###.##}";
    }
}
````
````VB
Private totalPrice As Double = 0
Private totalUnits As Double = 0

Private highestPrice As Double = 0
Private highestUnitQuantity As Double = 0

Protected Sub RadGrid1_ItemDataBound(ByVal sender As Object, ByVal e As GridItemEventArgs) Handles RadGrid1.ItemDataBound
    If TypeOf e.Item Is GridFooterItem Then

        Dim footerItem As GridFooterItem = CType(e.Item, GridFooterItem)

        footerItem("ProductName").Controls.Add(New LiteralControl("Total: <br/>"))
        footerItem("ProductName").Controls.Add(New LiteralControl("Highest price/units quantity: "))

        footerItem("UnitPrice").Controls.Add(New LiteralControl("$" & totalPrice.ToString & "<br/>"))
        footerItem("UnitPrice").Controls.Add(New LiteralControl("$" & highestPrice.ToString))

        footerItem("UnitsInStock").Controls.Add(New LiteralControl(totalUnits.ToString & "<br/>"))
        footerItem("UnitsInStock").Controls.Add(New LiteralControl(highestUnitQuantity.ToString))
    Else
        If TypeOf e.Item Is GridDataItem Then

            Dim dataItem As GridDataItem = CType(e.Item, GridDataItem)

            Dim formatPrice As String = dataItem.OwnerTableView.DataKeyValues(dataItem.ItemIndex)("UnitPrice").ToString()
            Dim fieldValue As Double = Double.Parse(formatPrice)
            totalPrice += fieldValue

            If highestPrice = 0 OrElse highestPrice < fieldValue Then
                highestPrice = fieldValue
            End If

            fieldValue = Double.Parse(dataItem.OwnerTableView.DataKeyValues(dataItem.ItemIndex)("UnitsInStock").ToString())
            totalUnits += fieldValue

            If highestUnitQuantity = 0 OrElse highestUnitQuantity < fieldValue Then
                highestUnitQuantity = fieldValue
            End If
        End If
    End If
End Sub

Protected Sub RadGrid1_ColumnCreated(ByVal sender As Object, ByVal e As GridColumnCreatedEventArgs) Handles RadGrid1.ColumnCreated
    If e.Column.UniqueName = "UnitPrice" Then
(CType(e.Column, GridBoundColumn)).DataFormatString = "{0:$###,###.##}"
    End If
End Sub

````


## Client-side calculation of totals for a template column

Sometimes, it may be necessary to calculate the sum for a particular column once, when the page loads, and then allow the user to alter the values for a specific row, and have these values update not only in the textbox, where the value has been entered, but also in the footer textbox. This is achievable through custom code, as shown in the sample project listed below.

Below is the declaration of the grid, which contains a template column, with textboxes for the normal items, and the footer template:

````ASP.NET
<form id="form1" runat="server">
<telerik:RadGrid RenderMode="Lightweight" ShowFooter="true" ID="RadGrid1" runat="server" DataSourceID="SqlDataSource1"
  GridLines="None" OnPreRender="RadGrid1_PreRender" OnItemDataBound="RadGrid1_ItemDataBound">
  <MasterTableView AutoGenerateColumns="False" DataKeyNames="OrderID" DataSourceID="SqlDataSource1">
    <Columns>
      <telerik:GridBoundColumn DataField="OrderID" DataType="System.Int32" HeaderText="OrderID"
        ReadOnly="True" SortExpression="OrderID" UniqueName="OrderID">
      </telerik:GridBoundColumn>
      <telerik:GridTemplateColumn UniqueName="Template1">
        <ItemTemplate>
          <asp:TextBox runat="server" ID="TextBox1" Text='<% #Eval("Freight") %>'></asp:TextBox>
        </ItemTemplate>
        <FooterTemplate>
          <asp:TextBox runat="Server" ID="TextBox2">
          </asp:TextBox>
        </FooterTemplate>
      </telerik:GridTemplateColumn>
    </Columns>
  </MasterTableView>
</telerik:RadGrid>
<asp:SqlDataSource ID="SqlDataSource1" SelectCommand="SELECT TOP 50 * FROM Orders"
  ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" ProviderName="System.Data.SqlClient"
  runat="server">
</asp:SqlDataSource>
</form>
````

This particular implementation calculates the values for the footer textbox once for each time the control (re)binds to data. This will ensure that the textbox value is properly calculated initially, to avoid having to write additional JavaScript. Another important piece of the logic is the assignment of “onblur” and “onfocus” client side events. The client-side functions are passed the clientId’s for the footer textbox, as well as the textbox on which the user focuses, and on which the user will later lose focus. As soon as the user navigates to another textbox, the footer textbox will be updated with the new values:

````C#
public partial class _Default : System.Web.UI.Page
{
    double sum = 0;
    string clientID;

    protected void RadGrid1_ItemDataBound(object sender, GridItemEventArgs e)
    {
        if (e.Item is GridDataItem)
        {
            GridDataItem dataItem = (GridDataItem)e.Item;
            sum += double.Parse((dataItem["Template1"].FindControl("TextBox1") as TextBox).Text);
        }
        else if (e.Item is GridFooterItem)
        {
            GridFooterItem footer = (GridFooterItem)e.Item;
            (footer["Template1"].FindControl("TextBox2") as TextBox).Text = sum.ToString();
            clientID = (footer["Template1"].FindControl("TextBox2") as TextBox).ClientID;
        }
    }

    protected void RadGrid1_PreRender(object sender, EventArgs e)
    {
        foreach (GridDataItem dataItem in RadGrid1.MasterTableView.Items)
        {
            (dataItem["Template1"].FindControl("TextBox1") as TextBox).Attributes.Add("onblur", "update('" + clientID + "'" + "," + "'" + (dataItem["Template1"].FindControl("TextBox1") as TextBox).ClientID + "')");
            (dataItem["Template1"].FindControl("TextBox1") as TextBox).Attributes.Add("onfocus", "getInitialValue('" + (dataItem["Template1"].FindControl("TextBox1") as TextBox).ClientID + "')");
        }
    }
}
````
````VB	
 Public Class _Default
     Inherits System.Web.UI.Page
     Private sum As Double = 0
     Private clientID As String

     Protected Sub RadGrid1_ItemDataBound(ByVal sender As Object, ByVal e As GridItemEventArgs) Handles RadGrid1.ItemDataBound
         If TypeOf e.Item Is GridDataItem Then
             Dim dataItem As GridDataItem = DirectCast((e.Item), GridDataItem)
             sum = (sum + Double.Parse((DirectCast((dataItem("Template1").FindControl("TextBox1")), TextBox)).Text))
         ElseIf TypeOf e.Item Is GridFooterItem Then
             Dim footer As GridFooterItem = DirectCast((e.Item), GridFooterItem)
(DirectCast((footer("Template1").FindControl("TextBox2")), TextBox)).Text = sum.ToString
             clientID = (DirectCast((footer("Template1").FindControl("TextBox2")), TextBox)).ClientID
         End If
     End Sub
     Protected Sub RadGrid1_PreRender(ByVal sender As Object, ByVal e As EventArgs) Handles RadGrid1.PreRender
         For Each dataItem As GridDataItem In RadGrid1.MasterTableView.Items
(DirectCast((dataItem("Template1").FindControl("TextBox1")), TextBox)).Attributes.Add("onblur", ("update('" + (clientID + ("'" + ("," + ("'" + ((DirectCast((dataItem("Template1").FindControl("TextBox1")), TextBox)).ClientID + "')")))))))
(DirectCast((dataItem("Template1").FindControl("TextBox1")), TextBox)).Attributes.Add("onfocus", ("getInitialValue('" + ((DirectCast((dataItem("Template1").FindControl("TextBox1")), TextBox)).ClientID + "')")))
         Next
     End Sub
 End Class

````


The final part of the logic is the client-side script, which handles the updates of the footer textbox. Once the user focuses on a textbox, the script will preserve its initial value. The user is then free to enter a new value. Once the user loses focus on the textbox, the value in the footer textbox will be recalculated. For simplicity, the parsing of the user input is omitted.

````JavaScript	
<script type="text/javascript">
  var initialValue = 0.0;
  function update(footerBox, changedBox)
  {
  var footerBoxControl = $get(footerBox);
  var changedBoxControl = $get(changedBox);
  var tempValue = footerBoxControl.value - initialValue;
  footerBoxControl.value = parseFloat(tempValue) + parseFloat(changedBoxControl.value);
  }
  function getInitialValue(changedBox)
  {
  var changedBoxControl= document.getElementById(changedBox);
  initialValue = parseFloat(changedBoxControl.value);
  }
</script>
````


