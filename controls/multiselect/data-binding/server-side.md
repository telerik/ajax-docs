---
title: Server-Side
page_title: Server-Side Data Binding | RadMultiSelect for ASP.NET AJAX Documentation
description: Server data binding overview of RadMultiSelect
slug: multiselect/data-binding/server-side
tags: data,binding,overview,server,side,list,object,data,table,sqldatasource,declarative
published: True
position: 0
---

# Server-Side Data Binding

**RadMultiSelect** can be bound to standard server data sources like `List<T>`, `SqlDataSource` or a `DataTable`. The data from the server data source creates MultiSelect items which are serialized and sent to the client-side as a JSON object. It is parsed on the client-side and passed to the underlying Kendo UI MultiSelect which is an entirely client-side widget. 

The additional fields you would like to access on the client-side should be passed to the `DataKeyNames` property, as a comma-separated string. Also, you can add custom data to the items via the `Attributes` collection which will be serialized and available on the client-side.

>note The `DataTextField` and `DataValueField` are available by default on the client-side and there is no need to add them explicitly to the `DataKeyNames` collection.
>

>caption Example 1: Declare items in the Markup

````ASP.NET
<telerik:RadMultiSelect ID="RadMultiSelect1" runat="server" DataTextField="text" DataValueField="value" Filter="Contains" Width="400px"
    Placeholder="Select attendees...">
    <Items>
        <telerik:MultiSelectItem Text="Steven White" Value="1"></telerik:MultiSelectItem>
        <telerik:MultiSelectItem Text="Nancy King" Value="2"></telerik:MultiSelectItem>
        <telerik:MultiSelectItem Text="Nancy Davolio" Value="3"></telerik:MultiSelectItem>
        <telerik:MultiSelectItem Text="Robert Davolio" Value="4"></telerik:MultiSelectItem>
        <telerik:MultiSelectItem Text="Michael Leverling" Value="5"></telerik:MultiSelectItem>
    </Items>
</telerik:RadMultiSelect>
````

>caption Example 2: Add items programmatically

````ASP.NET
<telerik:RadMultiSelect ID="RadMultiSelect1" runat="server" DataTextField="text" DataValueField="value" Filter="Contains" Width="400px"
    Placeholder="Select attendees...">
</telerik:RadMultiSelect>
````

````C#
protected void Page_Load(object sender, EventArgs e)
{
    for (int i = 0; i < 5; i++)
    {
        MultiSelectItem newItem = new MultiSelectItem() { Text = "Item " + i, Value = i.ToString() });
        RadMultiSelect1.Items.Add(newItem);
    }
}
````
````VB
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
    For i As Integer = 0 To 5 - 1
        Dim newItem As MultiSelectItem = New MultiSelectItem() With {
            .Text = "Item " & i,
            .Value = i.ToString()
        }
        RadMultiSelect1.Items.Add(newItem)
    Next
End Sub
````


>caption Example 3: Bind to a `SqlDataSource`

````ASP.NET
<telerik:RadMultiSelect ID="RadMultiSelect1" runat="server"
    DataSourceID="SqlDataSource1" DataTextField="ProductName" DataValueField="ProductID" />

<asp:SqlDataSource runat="server" ID="SqlDataSource1" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
    ProviderName="System.Data.SqlClient" SelectCommand="SELECT [ProductID], [ProductName] FROM [Products] ORDER By ProductName" />
````

>caption Example 4: Bind to a List of anonymous objects

````ASP.NET
<telerik:RadMultiSelect ID="RadMultiSelect1" runat="server" DataTextField="TheText" DataValueField="ID" />
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

		RadMultiSelect1.DataSource = data;
		RadMultiSelect1.DataBind();

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

		RadMultiSelect1.DataSource = data
		RadMultiSelect1.DataBind()
	End If
End Sub
````

>caption Example 5: Bind to a List of named objects

````ASP.NET
<telerik:RadMultiSelect ID="RadMultiSelect2" runat="server" DataTextField="Name" DataValueField="Id" />
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
    
        RadMultiSelect2.DataSource = items;
        RadMultiSelect2.DataBind();
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
        RadMultiSelect2.DataSource = items
        RadMultiSelect2.DataBind()
    End If
End Sub
````

>caption Example 6: Bind to a DataTable

````ASP.NET
<telerik:RadMultiSelect ID="RadMultiSelect3" runat="server" DataTextField="ShipName" DataValueField="OrderID" />
````

````C#
protected void Page_Load(object sender, EventArgs e)
{
    if (!Page.IsPostBack)
    {
        RadMultiSelect3.DataSource = GetData();
        RadMultiSelect3.DataBind();
    }
}

private DataTable GetData()
{
    DataTable dataTable = new DataTable();
    dataTable.Columns.Add(new DataColumn("OrderID", typeof(int)));
    dataTable.Columns.Add(new DataColumn("ShipName", typeof(String)));

    for (int i = 0; i < 70; i++)
    {
        dataTable.Rows.Add(i + 1, "Name " + (i + 1));
    }

    return dataTable;
}
````
````VB
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
    If Not Page.IsPostBack Then
        RadMultiSelect3.DataSource = GetData()
        RadMultiSelect3.DataBind()
    End If
End Sub

Private Function GetData() As DataTable
    Dim dataTable As DataTable = New DataTable()
    dataTable.Columns.Add(New DataColumn("OrderID", GetType(Integer)))
    dataTable.Columns.Add(New DataColumn("ShipName", GetType(String)))

    For i As Integer = 0 To 70 - 1
        dataTable.Rows.Add(i + 1, "Name " & (i + 1))
    Next

    Return dataTable
End Function
````

## See Also

* [Get Server Text and Value]({%slug multiselect/server-side-programming/overview%}#get-selected-text-and-value)

