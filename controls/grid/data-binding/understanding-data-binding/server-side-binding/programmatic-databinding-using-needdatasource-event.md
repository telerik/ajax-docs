---
title: Programmatic Data Binding Using the NeedDataSource Event
page_title: Programmatic Data-binding Using the NeedDataSource Event | RadGrid for ASP.NET AJAX Documentation
description: When programmatically binding a RadGrid use the NeedDataSource Event
slug: grid/data-binding/understanding-data-binding/server-side-binding/programmatic-databinding-using-needdatasource-event
tags: programmatic,data-binding,needdatasource,events
published: True
position: 1
previous_url: controls/grid/data-binding/understanding-data-binding/server-side-binding/advanced-data-binding-\(using-needdatasource-event\)
---

# Programmatic Data Binding Using the NeedDataSource Event



##

The key to handling programmatic data binding of a RadGrid control is handling the **NeedDataSource** event. **RadGrid** fires the **NeedDataSource** event each time it needs to be bound to a data source.

The advantage of using the **NeedDataSource** event is the flexibility of generating the data source in the code-behind. The **NeedDataSource** event handles the logic of when and how data binding should take place out-of-the-box.

>note It is important to properly construct a data source object and assign it to the **RadGrid DataSource** property.
>

>note **RadGrid** does not fire the **NeedDataSource** event unless **RadGrid** is visible (**Visible**=**True**).
>

### The NeedDataSource event fires in the following cases:

>note The event arguments for the **NeedDataSource** event include the **RebindReason** property, which indicates the reason the event is occurring.
>

>caution **Important:** If at the time of the event, the **DataSource** property is not set to a valid data source, the grid will behave  unexpectedly.
>

* Immediately after **On_Load** if the grid has not yet been data-bound and there is no **ViewState** data. This means that if the **MasterTableView** **EnableViewState** property has been set to **False**, the grid will bind each time the page loads, not only the first time.

* When a paging operation occurs.

* When a sorting operation occurs.

* When an edit command is fired.

* Immediately after any **Update**, **Delete**, or **Insert** command event handlers finish execution. You can cancel these operations by handling the **ItemCommand** event and assigning **True** to the **e** event argument's **Canceled** property.

* When grouping or ungrouping, immediately after the **GroupsChanging** event occurs.

* When filtering (choosing an option from a column filter menu).

* When re-sorting a group.

* When a call to the grid's **Rebind** method takes place.

* Prior to binding any detail table.

* Custom cases, for example when using the **RebindReason** property as noted above.

In some scenarios it may be necessary to refresh the grid explicitly upon some external action. In such cases just use the **Rebind** () method, which will refresh the grid content.

>caution  **Important:** You should never call the **Rebind** () method in a **NeedDataSource** event handler.You should never call **DataBind** () as well when using programmatic data binding through **NeedDataSource**.
>

# Examples

## Using a SQL Connection

````C#
protected void RadGrid1_NeedDataSource(object source, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
{
    String ConnString = ConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString;
    SqlConnection conn = new SqlConnection(ConnString);
    SqlDataAdapter adapter = new SqlDataAdapter();
    adapter.SelectCommand = new SqlCommand("SELECT CustomerID, CompanyName, ContactName, ContactTitle, Address FROM Customers", conn);

    DataTable myDataTable = new DataTable();

    conn.Open();
    try
    {
        adapter.Fill(myDataTable);
    }
    finally
    {
        conn.Close();
    }

    RadGrid1.DataSource = myDataTable;
}
````
````VB
Protected Sub RadGrid1_NeedDataSource(ByVal source As Object, ByVal e As Telerik.Web.UI.GridNeedDataSourceEventArgs) Handles RadGrid1.NeedDataSource
    Dim ConnString As String = ConfigurationManager.ConnectionStrings("NorthwindConnectionString").ConnectionString
    Dim conn As SqlConnection = New SqlConnection(ConnString)
    Dim adapter As SqlDataAdapter = New SqlDataAdapter
    adapter.SelectCommand = New SqlCommand("SELECT CustomerID, CompanyName, ContactName, ContactTitle, Address FROM Customers", conn)
    Dim myDataTable As New DataTable
    conn.Open()
    Try
        adapter.Fill(myDataTable)
    Finally
        conn.Close()
    End Try
    RadGrid1.DataSource = myDataTable
End Sub
````


## Using an IEnumerable and Object Class

````C#
public IEnumerable<Supplier> GenerateSupplierData()
{
    return Enumerable.Range(1, 5).Select(i => new Supplier
    {
        SupplierId = i,
        SupplierName = $"Supplier {i}"
    });
}    

public class Supplier
{
    public int SupplierId { get; set; }
    public string SupplierName { get; set; }
}

protected void RadGrid1_NeedDataSource(object source, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
{
    RadGrid1.DataSource = GenerateSupplierData();
}
````
````VB
Public Function GenerateSupplierData() As IEnumerable(Of Supplier)
    Return Enumerable.Range(1, 5).[Select](Function(i) New Supplier With {
        .SupplierId = i,
        .SupplierName = $"Supplier {i}"
    })
End Function

Public Class Supplier
    Public Property SupplierId As Integer
    Public Property SupplierName As String
End Class

Protected Sub RadGrid1_NeedDataSource(ByVal source As Object, ByVal e As Telerik.Web.UI.GridNeedDataSourceEventArgs)
    RadGrid1.DataSource = GenerateSupplierData()
End Sub
````

## Three level Hierarchy

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" Skin="Bootstrap" RenderMode="Lightweight"
    OnDetailTableDataBind="RadGrid1_DetailTableDataBind"
    OnNeedDataSource="RadGrid1_NeedDataSource">
    <MasterTableView Name="Customers" DataKeyNames="CustomerID" Caption="Customers Table">
        <DetailTables>
            <telerik:GridTableView Name="Orders" DataKeyNames="OrderID" Caption="Orders Table">
                <DetailTables>
                    <telerik:GridTableView Name="OrderDetails" DataKeyNames="ProductID" Caption="Order Details Table">
                    </telerik:GridTableView>
                </DetailTables>
            </telerik:GridTableView>
        </DetailTables>
    </MasterTableView>
</telerik:RadGrid>
````

````C#
protected void RadGrid1_DetailTableDataBind(object sender, Telerik.Web.UI.GridDetailTableDataBindEventArgs e)
{
    var nestedViewItem = e.DetailTableView.NamingContainer as GridNestedViewItem;
    var parentRow = nestedViewItem.ParentItem as GridDataItem;

    if (e.DetailTableView.Name == "Orders")
    {
        var CustomerID = (int)parentRow.GetDataKeyValue("CustomerID");

        e.DetailTableView.DataSource = OrdersTable().Where(x => x.CustomerID == CustomerID);
    }
    else if (e.DetailTableView.Name == "OrderDetails")
    {
        var OrderID = (int)parentRow.GetDataKeyValue("OrderID");

        e.DetailTableView.DataSource = OrderDetailsTable().Where(x => x.OrderID == OrderID);
    }
}

protected void RadGrid1_NeedDataSource(object sender, Telerik.Web.UI.GridNeedDataSourceEventArgs e)
{
    if (!e.IsFromDetailTable)
        (sender as RadGrid).DataSource = CustomersTable();
}

private IEnumerable<Customer> CustomersTable()
{
    return Enumerable.Range(1, 2).Select(x => new Customer()
    {
        CustomerID = x,
        ContactName = "Name " + x,
        ContactTitle = "Title " + x,
        Address = "Address " + x,
        Country = "Country " + x
    });
}

private List<Order> OrdersTable()
{
    var orders = new List<Order>();

    orders.Add(new Order() { OrderID = 1, CustomerID = 1, Freight = 1.2, OrderDate = DateTime.Now.Date, ShipCountry = "Country 1", ShipName = "Name 1" });
    orders.Add(new Order() { OrderID = 2, CustomerID = 1, Freight = 2.2, OrderDate = DateTime.Now.Date, ShipCountry = "Country 2", ShipName = "Name 2" });
    orders.Add(new Order() { OrderID = 3, CustomerID = 2, Freight = 3.2, OrderDate = DateTime.Now.Date, ShipCountry = "Country 3", ShipName = "Name 3" });
    orders.Add(new Order() { OrderID = 4, CustomerID = 2, Freight = 4.2, OrderDate = DateTime.Now.Date, ShipCountry = "Country 4", ShipName = "Name 4" });

    return orders;
}

private List<OrderDetail> OrderDetailsTable()
{
    var detail = new List<OrderDetail>();

    detail.Add(new OrderDetail() { ProductID = 1, OrderID = 1, UnitPrice = 1.1, Quantity = 1, Discount = 1 });
    detail.Add(new OrderDetail() { ProductID = 2, OrderID = 1, UnitPrice = 2.1, Quantity = 2, Discount = 2 });
    detail.Add(new OrderDetail() { ProductID = 3, OrderID = 2, UnitPrice = 3.1, Quantity = 3, Discount = 3 });
    detail.Add(new OrderDetail() { ProductID = 4, OrderID = 2, UnitPrice = 4.1, Quantity = 4, Discount = 4 });
    detail.Add(new OrderDetail() { ProductID = 5, OrderID = 3, UnitPrice = 5.1, Quantity = 1, Discount = 1 });
    detail.Add(new OrderDetail() { ProductID = 6, OrderID = 3, UnitPrice = 6.1, Quantity = 2, Discount = 2 });
    detail.Add(new OrderDetail() { ProductID = 7, OrderID = 4, UnitPrice = 7.1, Quantity = 3, Discount = 3 });
    detail.Add(new OrderDetail() { ProductID = 8, OrderID = 4, UnitPrice = 8.1, Quantity = 4, Discount = 4 });

    return detail;
}

public class Customer
{
    public int CustomerID { get; set; }
    public string ContactName { get; set; }
    public string ContactTitle { get; set; }
    public string Address { get; set; }
    public string Country { get; set; }
}
public class Order
{
    public int OrderID { get; set; }
    public int CustomerID { get; set; }
    public DateTime OrderDate { get; set; }
    public double Freight { get; set; }
    public string ShipName { get; set; }
    public string ShipCountry { get; set; }
}
public class OrderDetail
{
    public int OrderID { get; set; }
    public int ProductID { get; set; }
    public double UnitPrice { get; set; }
    public int Quantity { get; set; }
    public double Discount { get; set; }
}
````
````VB
Protected Sub RadGrid1_DetailTableDataBind(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridDetailTableDataBindEventArgs)
    Dim nestedViewItem = TryCast(e.DetailTableView.NamingContainer, GridNestedViewItem)
    Dim parentRow = TryCast(nestedViewItem.ParentItem, GridDataItem)

    If e.DetailTableView.Name = "Orders" Then
        Dim CustomerID = CInt(parentRow.GetDataKeyValue("CustomerID"))
        e.DetailTableView.DataSource = OrdersTable().Where(Function(x) x.CustomerID = CustomerID)
    ElseIf e.DetailTableView.Name = "OrderDetails" Then
        Dim OrderID = CInt(parentRow.GetDataKeyValue("OrderID"))
        e.DetailTableView.DataSource = OrderDetailsTable().Where(Function(x) x.OrderID = OrderID)
    End If
End Sub

Protected Sub RadGrid1_NeedDataSource(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridNeedDataSourceEventArgs)
    If Not e.IsFromDetailTable Then (TryCast(sender, RadGrid)).DataSource = CustomersTable()
End Sub

Private Function CustomersTable() As IEnumerable(Of Customer)
    Return Enumerable.Range(1, 2).[Select](Function(x) New Customer() With {
        Key .CustomerID = x,
            .ContactName = "Name " & x,
            .ContactTitle = "Title " & x,
            .Address = "Address " & x,
            .Country = "Country " & x
    })
End Function

Private Function OrdersTable() As List(Of Order)
    Dim orders = New List(Of Order)()
    orders.Add(New Order() With {
        Key .OrderID = 1,
            .CustomerID = 1,
            .Freight = 1.2,
            .OrderDate = DateTime.Now.Date,
            .ShipCountry = "Country 1",
            .ShipName = "Name 1"
    })
    orders.Add(New Order() With {
        Key .OrderID = 2,
            .CustomerID = 1,
            .Freight = 2.2,
            .OrderDate = DateTime.Now.Date,
            .ShipCountry = "Country 2",
            .ShipName = "Name 2"
    })
    orders.Add(New Order() With {
        Key .OrderID = 3,
            .CustomerID = 2,
            .Freight = 3.2,
            .OrderDate = DateTime.Now.Date,
            .ShipCountry = "Country 3",
            .ShipName = "Name 3"
    })
    orders.Add(New Order() With {
        Key .OrderID = 4,
            .CustomerID = 2,
            .Freight = 4.2,
            .OrderDate = DateTime.Now.Date,
            .ShipCountry = "Country 4",
            .ShipName = "Name 4"
    })
    Return orders
End Function

Private Function OrderDetailsTable() As List(Of OrderDetail)
    Dim detail = New List(Of OrderDetail)()
    detail.Add(New OrderDetail() With {
        Key .ProductID = 1,
            .OrderID = 1,
            .UnitPrice = 1.1,
            .Quantity = 1,
            .Discount = 1
    })
    detail.Add(New OrderDetail() With {
        Key .ProductID = 2,
            .OrderID = 1,
            .UnitPrice = 2.1,
            .Quantity = 2,
            .Discount = 2
    })
    detail.Add(New OrderDetail() With {
        Key .ProductID = 3,
            .OrderID = 2,
            .UnitPrice = 3.1,
            .Quantity = 3,
            .Discount = 3
    })
    detail.Add(New OrderDetail() With {
        Key .ProductID = 4,
            .OrderID = 2,
            .UnitPrice = 4.1,
            .Quantity = 4,
            .Discount = 4
    })
    detail.Add(New OrderDetail() With {
        Key .ProductID = 5,
            .OrderID = 3,
            .UnitPrice = 5.1,
            .Quantity = 1,
            .Discount = 1
    })
    detail.Add(New OrderDetail() With {
        Key .ProductID = 6,
            .OrderID = 3,
            .UnitPrice = 6.1,
            .Quantity = 2,
            .Discount = 2
    })
    detail.Add(New OrderDetail() With {
        Key .ProductID = 7,
            .OrderID = 4,
            .UnitPrice = 7.1,
            .Quantity = 3,
            .Discount = 3
    })
    detail.Add(New OrderDetail() With {
        Key .ProductID = 8,
            .OrderID = 4,
            .UnitPrice = 8.1,
            .Quantity = 4,
            .Discount = 4
    })
    Return detail
End Function

Public Class Customer
    Public Property CustomerID As Integer
    Public Property ContactName As String
    Public Property ContactTitle As String
    Public Property Address As String
    Public Property Country As String
End Class

Public Class Order
    Public Property OrderID As Integer
    Public Property CustomerID As Integer
    Public Property OrderDate As DateTime
    Public Property Freight As Double
    Public Property ShipName As String
    Public Property ShipCountry As String
End Class

Public Class OrderDetail
    Public Property OrderID As Integer
    Public Property ProductID As Integer
    Public Property UnitPrice As Double
    Public Property Quantity As Integer
    Public Property Discount As Double
End Class
````

## Using DataTable object

````ASP.NET
<telerik:RadGrid ID="RadGrid1" runat="server" AllowPaging="True" Width="800px" OnNeedDataSource="RadGrid1_NeedDataSource">
    <MasterTableView AutoGenerateColumns="False" DataKeyNames="OrderID">
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
        </Columns>
    </MasterTableView>
</telerik:RadGrid>
````

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

        dt.Rows.Add(row)
    Next

    Return dt
End Function
````

## See Also

 * [Bindable Property Types](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/data-binding/telerik-radgrid-data-binding-basics#bindable-property-types)
 * [Telerik RadGrid Data Binding Basics](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/data-binding/telerik-radgrid-data-binding-basics)
 * [Properly Bind a RadGrid on the Server-side](https://www.telerik.com/support/kb/aspnet-ajax/grid/details/how-to-bind-radgrid-properly-on-server-side)
