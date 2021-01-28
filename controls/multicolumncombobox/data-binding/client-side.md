---
title: Client-Side
page_title: Client-Side Data Binding - RadMultiColumnComboBox
description: Check our Web Forms article about Client data binding overview of RadMultiColumnComboBox.
slug: multicolumncombobox/data-binding/client-side
tags: data,binding,overview,client,side,web,service
published: True
position: 1
---

# Client-Side Data Binding

**RadMultiColumnComboBox** can be bound to a **web service** through its inner `WebServiceSettings` tag or through a [RadClientDataSource]({%slug clientdatasource/overview%}). Since the control is a wrapper over the Kendo UI for jQuery widget, it always operates on the client and binds to data with JavaScript.

There are three ways to bind to data on the client:

- [Client-Side Data Binding](#client-side-data-binding)
	- [WebServiceSettings](#webservicesettings)
	- [RadClientDataSource](#radclientdatasource)
	- [JavaScript Object at Runtime](#javascript-object-at-runtime)
	- [See Also](#see-also)

## WebServiceSettings

Under the covers, a [Kendo UI DataSource](https://docs.telerik.com/kendo-ui/framework/datasource/overview) will be instantiated and it will perform requests to the denoted service with the settings defined in the `WebServiceSettings` tag.

The widget only shows data and so only the **Select** settings and `ServiceType` are used. The rest of the settings (for Insert, Update, Delete) will not be used and are inherited from a base class.

>caption Example 1: Setting WebServiceSettings to bind to a web service

````ASP.NET
<telerik:RadMultiColumnComboBox runat="server" ID="RadMultiColumnComboBox1" Skin="Default"
    DataTextField="CategoryName" DataValueField="CategoryID"
    DropDownWidth="300px" Height="400px" Width="300px"
    MinLength="3" Filter="Contains" Placeholder="Select Category">
	<WebServiceSettings ServiceType="OData" Select-ContentType="JSON"
		Select-Url="https://demos.telerik.com/kendo-ui/service/Northwind.svc/Categories"></WebServiceSettings>
    <ColumnsCollection>
        <telerik:MultiColumnComboBoxColumn Field="CategoryName" Title="Name" />
        <telerik:MultiColumnComboBoxColumn Field="CategoryID" Title="ID" />
    </ColumnsCollection>
</telerik:RadMultiColumnComboBox>
````

As of R2 2019, the Schema can also be configured via the <Schema> tag. That would allow easy parsing of the response from various web services, such as .asmx web service.

````ASP.NET
<telerik:RadMultiColumnComboBox runat="server" ID="RadMultiColumnComboBox1"
    DropDownWidth="600px" Width="350px" Height="200" DataTextField="Title"
    EnforceMinLength="false">
    <ColumnsCollection>
        <telerik:MultiColumnComboBoxColumn Field="Title" Title="ID" />
        <telerik:MultiColumnComboBoxColumn Field="Author" Title="Name" />
    </ColumnsCollection>
    <WebServiceSettings>
        <Select Url="BooksService.asmx/GetBooks" RequestType="Post" DataType="JSON" ContentType="application/json; charset=utf-8" />
    </WebServiceSettings>
    <Schema DataName="d">
    </Schema>
</telerik:RadMultiColumnComboBox>
````

````C#
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
[System.Web.Script.Services.ScriptService]
public class BooksService : System.Web.Services.WebService
{
    [WebMethod]
    [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
    public List<Book> GetBooks()
    {
        var books = new List<Book>();
        books.Add(new Book
        {
            Title = "Professional ASP.NET 4.5 in C# and VB",
            Author = "Jason N. Gaylord",
            Cover = "http://ecx.images-amazon.com/images/I/51MQP2rwsZL.jpg",
            Url = "http://www.amazon.com/Professional-ASP-NET-4-5-C-VB/dp/1118311825"
        });
        books.Add(new Book
        {
            Title = "Pro ASP.NET 4.5 in C#",
            Author = "Adam Freeman",
            Cover = "http://ecx.images-amazon.com/images/I/51h6duC3kmL.jpg",
            Url = "http://www.amazon.com/Pro-ASP-NET-4-5-Adam-Freeman/dp/143024254X"
        });
        books.Add(new Book
        {
            Title = "Beginning ASP.NET 4.5 in C#",
            Author = "Matthew MacDonald",
            Cover = "http://ecx.images-amazon.com/images/I/51xvkzeTRbL.jpg",
            Url = "http://www.amazon.com/Beginning-ASP-NET-4-5-1-Wrox-Programmer/dp/111884677X"
        });
        books.Add(new Book
        {
            Title = "Beginning ASP.NET 4.5.1: in C# and VB ",
            Author = "Imar Spaanjaars",
            Cover = "http://ecx.images-amazon.com/images/I/51xvkzeTRbL.jpg",
            Url = "http://www.amazon.com/Beginning-ASP-NET-4-5-1-Wrox-Programmer/dp/111884677X"
        });
        books.Add(new Book
        {
            Title = "Pro C# 5.0 and the .NET 4.5 Framework",
            Author = "Andrew Troelsen",
            Cover = "http://ecx.images-amazon.com/images/I/7165No4MIpL._SL1500_.jpg",
            Url = "http://www.amazon.com/Beginning-ASP-NET-Databases-Sandeep-Chanda/dp/1430243805"
        });
        books.Add(new Book
        {
            Title = "Ultra-Fast ASP.NET 4.5",
            Author = "Rick Kiessig",
            Cover = "http://ecx.images-amazon.com/images/I/51Pu1Z8pgsL.jpg",
            Url = "http://www.amazon.com/Ultra-Fast-ASP-NET-Experts-Voice-ASP-Net/dp/1430243384"
        });
        books.Add(new Book
        {
            Title = "ASP.NET 4.5 Unleashed",
            Author = "Stephen Walther",
            Cover = "http://ecx.images-amazon.com/images/I/41V4tb3L%2BFL.jpg",
            Url = "http://www.amazon.com/ASP-NET-4-5-Unleashed-Stephen-Walther/dp/067233688X"
        });
        books.Add(new Book
        {
            Title = "Pro ASP.NET MVC 4",
            Author = "Adam Freeman",
            Cover = "http://ecx.images-amazon.com/images/I/51mKVgdmZpL.jpg",
            Url = "http://www.amazon.com/Pro-ASP-NET-MVC-Adam-Freeman/dp/1430242361"
        });
        books.Add(new Book
        {
            Title = "Professional C# 5.0 and .NET 4.5.1",
            Author = "Christian Nagel",
            Cover = "http://ecx.images-amazon.com/images/I/516-BPVWURL.jpg",
            Url = "http://www.amazon.com/Professional-C-5-0-NET-4-5-1/dp/1118833031"
        });

        return books;
    }
}

public class Book
{
    public string Title { get; set; }
    public string Author { get; set; }
    public string Cover { get; set; }
    public string Url { get; set; }
}
````

## RadClientDataSource

To bind to a RadClientDataSource instance, set the `ClientDataSourceID` property to the ID of the client data source control.

RadClientDataSource is a wrapper over the Kendo UI DataSource as well. It is a separate control tag that provides some more features pertainig to CRUD operations that are not relevant to the multi-column combo box.

>caption Example 2: Binding to a RadClientDataSource

````ASP.NET
<telerik:RadMultiColumnComboBox runat="server" ID="RadMultiColumnComboBox1" Filter="Contains" Skin="Default"
    ClientDataSourceID="RadClientDataSource1"
    Height="400" Width="300px" Placeholder="select from the dropdown or type"
    DataTextField="ShipName" DataValueField="OrderID">
    <ColumnsCollection>
        <telerik:MultiColumnComboBoxColumn Field="OrderID" Title="Order" Width="100" />
        <telerik:MultiColumnComboBoxColumn Field="ShipName" Title="Ship" Width="300" />
        <telerik:MultiColumnComboBoxColumn Field="ShipCountry" Title="Country " Width="200" />
    </ColumnsCollection>
</telerik:RadMultiColumnComboBox>
<telerik:RadClientDataSource ID="RadClientDataSource1" runat="server">
    <DataSource>
        <WebServiceDataSourceSettings ServiceType="OData" Select-DataType="JSON">
            <Select Url="https://demos.telerik.com/kendo-ui/service/Northwind.svc/Orders" />
        </WebServiceDataSourceSettings>
    </DataSource>
</telerik:RadClientDataSource>
````

## JavaScript Object at Runtime

You can use the `set_dataSource()` [client-side method]({%slug multicolumncombobox/client-side-programming/overview%}) of the RadMultiColumnComboBox object to provide it with a new client-side data source. You do not have to provide a server data source or a web service for this to work, you only need to define the proper configuration (columns and fields) to match the data you will pass to the widget.

>caption Example 3: Binding to a JavaScript array

````ASP.NET
<script>
	var data = [
		{ id: 1, name: "one", color: "red" },
		{ id: 2, name: "two", color: "green" },
		{ id: 3, name: "three", color: "blue" }
	];
	
	function OnLoad(sender, args) {
		sender.set_dataSource(data);
	}
	
	function bindToNewData() {
	    var mccb = $find("<%=RadMultiColumnComboBox1.ClientID%>");
		data.push(
			{ id: 4, name: "four", color: "pink" }
		);
	    mccb.set_dataSource(data);
	}
</script>

<telerik:RadMultiColumnComboBox ID="RadMultiColumnComboBox1" runat="server" Skin="Default"
	DataTextField="name" DataValueField="id"
	Filter="Contains" FilterFields="name, color"
	DropDownWidth="400" Height="400" Width="300px">
	<ColumnsCollection>
		<telerik:MultiColumnComboBoxColumn Field="id" Title="ID" Width="40px" />
		<telerik:MultiColumnComboBoxColumn Field="name" Title="Name" />
		<telerik:MultiColumnComboBoxColumn Field="color" Title="color" Width="100px">
			<Template><span style="color: #=data.color#">#:data.color#</span></Template>
		</telerik:MultiColumnComboBoxColumn>
	</ColumnsCollection>
	<ClientEvents OnLoad="OnLoad" />
</telerik:RadMultiColumnComboBox>

<button onclick="bindToNewData();" type="button">bind to new data</button>
````

You can also create a new Kendo Data Source object with the desired settings and pass it to the RadMultiColumnComboBox. Just make sure that it matches the fields and settings you have defined.

>caption Example 4: Binding to a new Kendo DataSource instance

````ASP.NET
<script>
	function bindToNewData() {
		var mccb = $find("<%=RadMultiColumnComboBox2.ClientID%>");

		//create a Kendo Data Source and set its settings
		//this example calls a service, but you can also use static data
		var ds = new kendo.data.DataSource({
			 type: "odata",
            transport: {
                read: "https://demos.telerik.com/kendo-ui/service/Northwind.svc/Customers"
            }
		});

		mccb.set_dataSource(ds);
	}
</script>

<button onclick="bindToNewData();" type="button">bind to new data</button>

<telerik:RadMultiColumnComboBox ID="RadMultiColumnComboBox2" runat="server" Skin="Default"
	DataTextField="ContactName" DataValueField="CustomerID"
	Filter="Contains" FilterFields="ContactName"
	DropDownWidth="400" Height="400" Width="300px">
	<ColumnsCollection>
		<telerik:MultiColumnComboBoxColumn Field="ContactTitle" Title="Contact Title" Width="200px" />
		<telerik:MultiColumnComboBoxColumn Field="ContactName" Title="Contact Name" Width="200px"/>
	</ColumnsCollection>
</telerik:RadMultiColumnComboBox>
````

## See Also

* [Kendo UI Data Source](https://docs.telerik.com/kendo-ui/framework/datasource/overview)

* [Kendo UI Data Source API](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource)

* [Kendo UI Data Source Demos](https://demos.telerik.com/kendo-ui/datasource/index)

* [RadMultiColumnComboBox Client-side API]({%slug multicolumncombobox/client-side-programming/overview%})

