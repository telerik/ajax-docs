---
title: Server-Side
page_title: Server-Side Data Binding - RadMultiColumnComboBox
description: Check our Web Forms article about Server data binding overview of RadMultiColumnComboBox.
slug: multicolumncombobox/data-binding/server-side
tags: data,binding,overview,server,side,list,object,data,table,sqldatasource,declarative
published: True
position: 0
---

# Server-Side Data Binding

**RadMultiColumnComboBox** can be bound to standard server data sources like `List<T>`, `SqlDataSource` or a `DataTable`. The data from the server data source creates MultiColumnComboBox items which are serialized as a JSON literal to the client-side. It is parsed on the client-side as the RadMultiColumnComboBox is a wrapper over the Kendo UI for jQuery widget which are entirely client-side. 

As of R2 2019, the fields that you would like to have rendered and available on the client-side should be passed to the DataKeyNames property, comma-separated. Also, you can add additional data to the items via the Attributes collection which will be serialized and available on the client-side.

>note The DataTextField, DataValueField and the Fields declared in the MultiColumnComboBoxColumns are added by default to the DataKeyNames, so it is not necessary to add them explicitly.
>

>caption Example 1: Declare items in the Markup

````ASP.NET
<telerik:RadMultiColumnComboBox runat="server" ID="RadMultiColumnComboBox1"
    Width="220px" Height="400" 
    DataTextField="text" DataValueField="value">
    <ColumnsCollection>
        <telerik:MultiColumnComboBoxColumn Field="text" Title="Text">
        </telerik:MultiColumnComboBoxColumn>
        <telerik:MultiColumnComboBoxColumn Field="value" Title="Value">
        </telerik:MultiColumnComboBoxColumn>
    </ColumnsCollection>
    <Items>
        <telerik:MultiColumnComboBoxItem Text="Item 1" Value="1" />
        <telerik:MultiColumnComboBoxItem Text="Item 2" Value="2" />
        <telerik:MultiColumnComboBoxItem Text="Item 3" Value="3" />
        <telerik:MultiColumnComboBoxItem Text="Item 4" Value="4" />
    </Items>
</telerik:RadMultiColumnComboBox>
````

>caption Example 2: Add items programmatically

````ASP.NET
<telerik:RadMultiColumnComboBox runat="server" ID="RadMultiColumnComboBox1"
    Width="220px" Height="400" 
    DataTextField="text" DataValueField="value">
    <ColumnsCollection>
        <telerik:MultiColumnComboBoxColumn Field="text" Title="Text">
        </telerik:MultiColumnComboBoxColumn>
        <telerik:MultiColumnComboBoxColumn Field="value" Title="Value">
        </telerik:MultiColumnComboBoxColumn>
    </ColumnsCollection>
</telerik:RadMultiColumnComboBox>
````

````C#
protected void Page_Load(object sender, EventArgs e)
{
    for (int i = 0; i < 5; i++)
    {
        var newItem = new MultiColumnComboBoxItem();
        newItem.Text = "Item #" + i;
        newItem.Value = i.ToString();

        RadMultiColumnComboBox1.Items.Add(newItem);
    }
}
````


>caption Example 3: Bind to an SqlDataSource

````ASP.NET
<telerik:RadMultiColumnComboBox runat="server" ID="RadMultiColumnComboBox0" Skin="Default"

    DataSourceID="SqlDataSource1"

    Width="220px" Height="400" DropDownWidth="400"
    DataTextField="ContactName" DataValueField="CustomerID" 
    Filter="StartsWith" FilterFields="CustomerID, ContactName">
    <ColumnsCollection>
        <telerik:MultiColumnComboBoxColumn Field="ContactName" Title="ContactName">
        </telerik:MultiColumnComboBoxColumn>
        <telerik:MultiColumnComboBoxColumn Field="CustomerID" Title="CustomerID">
        </telerik:MultiColumnComboBoxColumn>
    </ColumnsCollection>
</telerik:RadMultiColumnComboBox>

<asp:SqlDataSource ID="SqlDataSource1" runat="server"
    ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
    SelectCommand="SELECT * FROM [Customers]"></asp:SqlDataSource>
````

>caption Example 4: Bind to a List of anonymous objects

````ASP.NET
<telerik:RadMultiColumnComboBox runat="server" ID="RadMultiColumnComboBox1" Skin="Default"
	DataTextField="TheText" DataValueField="ID"
	Width="300" DropDownWidth="300">
	<ColumnsCollection>
		<telerik:MultiColumnComboBoxColumn Field="ID" Title="ID" />
		<telerik:MultiColumnComboBoxColumn Field="TheText" Title="Name" />
		<telerik:MultiColumnComboBoxColumn Field="MoreData" Title="Extra Info" />
	</ColumnsCollection>
	<PopupSettings />
</telerik:RadMultiColumnComboBox>
````

````C#
protected void Page_Load(object sender, EventArgs e)
{
	if (!Page.IsPostBack)
	{
		var data = Enumerable.Range(0, 10).Select(x => new
		{
			ID = x,
			TheText = "Name " + x,
			MoreData = "Extra " + x
		});

		RadMultiColumnComboBox1.DataSource = data;
		RadMultiColumnComboBox1.DataBind();

	}
}
````
````VB
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
	If Not Page.IsPostBack Then
		Dim data = Enumerable.Range(0, 10).[Select](Function(x) New With {
														Key .ID = x,
														Key .TheText = "Name " & x,
														Key .MoreData = "Extra " & x
																		})

		RadMultiColumnComboBox1.DataSource = data
		RadMultiColumnComboBox1.DataBind()
	End If
End Sub
````

>caption Example 5: Bind to a List of named objects

````ASP.NET
<telerik:RadMultiColumnComboBox ID="RadMultiColumnComboBox2" Skin="Default" DropDownWidth="400" Width="220px" runat="server"
    DataTextField="Name" DataValueField="Id">
    <ColumnsCollection>
        <telerik:MultiColumnComboBoxColumn Field="Id" Title="Id" />
        <telerik:MultiColumnComboBoxColumn Field="Name" Title="Name" />
        <telerik:MultiColumnComboBoxColumn Field="Title" Title="Title" />
    </ColumnsCollection>
</telerik:RadMultiColumnComboBox>
````

````C#
public class MyClass
{
    public int Id { get; set; }
    public String Name { get; set; }
    public String Title { get; set; }
}

protected void Page_Load(object sender, EventArgs e)
{
    if (!Page.IsPostBack)
    {
        var items = Enumerable.Range(0, 10).Select(x => new MyClass()
        {
            Id = x,
            Name = "Name " + x,
            Title = "Title " + x
        });
    
        RadMultiColumnComboBox2.DataSource = items;
        RadMultiColumnComboBox2.DataBind();
    }
}
````
````VB
Public Class [MyClass]
    Public Property Id As Integer
    Public Property Name As String
    Public Property Title As String
End Class

Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
    If Not Page.IsPostBack Then
        Dim items = Enumerable.Range(0, 10).[Select](Function(x) New [MyClass]() With {
            .Id = x,
            .Name = "Name " & x,
            .Title = "Title " & x
        })
        RadMultiColumnComboBox2.DataSource = items
        RadMultiColumnComboBox2.DataBind()
    End If
End Sub
````

>caption Example 6: Bind to a DataTable

````ASP.NET
<telerik:RadMultiColumnComboBox runat="server" ID="RadMultiColumnComboBox3" Skin="Default" DropDownWidth="800" Width="220px"
    DataTextField="ShipName" DataValueField="OrderID">
    <ColumnsCollection>
        <telerik:MultiColumnComboBoxColumn Field="OrderID" Title="OrderID" />
        <telerik:MultiColumnComboBoxColumn Field="OrderDate" Title="OrderDate">
            <Template>
#= kendo.toString(data.OrderDate, "dd/MM/yyyy") #
            </Template>
        </telerik:MultiColumnComboBoxColumn>
        <telerik:MultiColumnComboBoxColumn Field="Freight" Title="Freight" />
        <telerik:MultiColumnComboBoxColumn Field="ShipName" Title="ShipName" />
    </ColumnsCollection>
</telerik:RadMultiColumnComboBox>
````

````C#
protected void Page_Load(object sender, EventArgs e)
{
    if (!Page.IsPostBack)
    {
        RadMultiColumnComboBox3.DataSource = GetGridSource();
        RadMultiColumnComboBox3.DataBind();
    }
}

private DataTable GetGridSource()
{
    DataTable dataTable = new DataTable();

    dataTable.Columns.Add(new DataColumn("OrderID", typeof(int)));
    dataTable.Columns.Add(new DataColumn("OrderDate", typeof(DateTime)));
    dataTable.Columns.Add(new DataColumn("Freight", typeof(decimal)));
    dataTable.Columns.Add(new DataColumn("ShipName", typeof(string)));
    dataTable.Columns.Add(new DataColumn("ShipCountry", typeof(string)));

    dataTable.PrimaryKey = new DataColumn[] { dataTable.Columns["OrderID"] };

    for (int i = 0; i < 70; i++)
    {
        DataRow row = dataTable.NewRow();
        row["OrderID"] = i + 1;
        row["OrderDate"] = DateTime.Now;
        row["Freight"] = (i + 1) + (i + 1) * 0.1 + (i + 1) * 0.01;
        row["ShipName"] = "Name " + (i + 1);
        row["ShipCountry"] = "Country " + (i + 1);

        dataTable.Rows.Add(row);
    }

    return dataTable;
}
````
````VB
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
    If Not Page.IsPostBack Then
        RadMultiColumnComboBox3.DataSource = GetGridSource()
        RadMultiColumnComboBox3.DataBind()
    End If
End Sub

Private Function GetGridSource() As DataTable
    Dim dataTable As DataTable = New DataTable()
    dataTable.Columns.Add(New DataColumn("OrderID", GetType(Integer)))
    dataTable.Columns.Add(New DataColumn("OrderDate", GetType(DateTime)))
    dataTable.Columns.Add(New DataColumn("Freight", GetType(Decimal)))
    dataTable.Columns.Add(New DataColumn("ShipName", GetType(String)))
    dataTable.Columns.Add(New DataColumn("ShipCountry", GetType(String)))
    dataTable.PrimaryKey = New DataColumn() {dataTable.Columns("OrderID")}

    For i As Integer = 0 To 70 - 1
        Dim row As DataRow = dataTable.NewRow()
        row("OrderID") = i + 1
        row("OrderDate") = DateTime.Now
        row("Freight") = (i + 1) + (i + 1) * 0.1 + (i + 1) * 0.01
        row("ShipName") = "Name " & (i + 1)
        row("ShipCountry") = "Country " & (i + 1)
        dataTable.Rows.Add(row)
    Next

    Return dataTable
End Function
````

## See Also

* [Get Server Text and Value]({%slug multicolumncombobox/server-side-programming/overview%}#get-selected-text-and-value)

