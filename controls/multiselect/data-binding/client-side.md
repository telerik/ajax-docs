---
title: Client-Side
page_title: Client-Side Data Binding | RadMultiSelect for ASP.NET AJAX Documentation
description: Client data binding overview of RadMultiSelect
slug: multiselect/data-binding/client-side
tags: data,binding,overview,client,side,web,service
published: True
position: 1
---


# Client-Side Data Binding

**RadMultiSelect** can be bound to a **web service** through its inner `WebServiceSettings` tag or through a [RadClientDataSource]({%slug clientdatasource/overview%}). Since the control is a wrapper over the Kendo UI for jQuery widget, it always operates on the client and binds to data with JavaScript.

There are two ways to bind to data on the client:

- [Client-Side Data Binding](#client-side-data-binding)
	- [WebServiceSettings](#webservicesettings)
	- [JavaScript Object at Runtime](#javascript-object-at-runtime)
	- [See Also](#see-also)

## WebServiceSettings

Under the covers, a [Kendo UI DataSource](https://docs.telerik.com/kendo-ui/framework/datasource/overview) will be instantiated and it will perform requests to the denoted service with the settings defined in the `WebServiceSettings` tag.
RadMultiSelect has an embeded RadClientDataSource control, which can be a configured through the `WebServiceClientDatasource` composite property. The widget only shows data and so only the **Select** settings and `ServiceType` are used. The rest of the settings (for Insert, Update, Delete) will not be used and are inherited from a base class.

>caption Example 1: Setting WebServiceClientDataSource and WebServiceSettings to bind to a web service

````ASP.NET
<telerik:RadMultiSelect ID="RadMultiSelect2" runat="server" Filter="Contains"
    DataTextField="ProductName" DataValueField="ProductID"
    MinLength="3" Placeholder="Select Category">
    <WebServiceClientDataSource runat="server" AutoSync="true">
        <WebServiceSettings ServiceType="OData" Select-ContentType="JSON"
            Select-Url="https://demos.telerik.com/kendo-ui/service/Northwind.svc/Products">
        </WebServiceSettings>
    </WebServiceClientDataSource>
</telerik:RadMultiSelect>
````

The Schema can also be configured via the `Schema` tag. That would allow easy parsing of the response from various web services, such as .asmx web service.

````ASP.NET
<telerik:RadMultiSelect ID="RadMultiSelect1" runat="server" Filter="Contains" EnforceMinLength="false" AutoClose="false" DataValueField="Title" DataTextField="Title" Width="400px" >
<WebServiceClientDataSource runat="server" AutoSync="true">
    <WebServiceSettings>
        <Select Url="BooksService.asmx/GetBooks" RequestType="Post" DataType="JSON" ContentType="application/json; charset=utf-8" />
    </WebServiceSettings>
    <Schema DataName="d">
    </Schema>
</WebServiceClientDataSource>          
</telerik:RadMultiSelect>
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

## JavaScript Object at Runtime

You can use the `set_dataSource()` [client-side method]({%slug multicolumncombobox/client-side-programming/overview%}) of the RadMultiSelect object to provide it with a new client-side data source. You do not have to provide a server data source or a web service for this to work, you only need to define the proper configuration (columns and fields) to match the data you will pass to the widget.

>caption Example 3: Binding to a JavaScript array

````ASP.NET
<script>
    var multiSelectWidget;
    var data = [
        { id: 1, name: "Apples"},
        { id: 2, name: "Oranges"},
    ];

    function OnLoad(sender, args) {
        multiSelectWidget = sender.get_kendoWidget();
        multiSelectWidget.setDataSource(data);
    }

    function bindToNewData() {
        data.push( [{ id: 1, name: "Bananas"}]);
        multiSelectWidget.setDataSource(data);
    }
</script>

<telerik:RadMultiSelect ID="RadMultiSelect1" runat="server" Filter="Contains" Width="400px" DataTextField="name" DataValueField="id"
    Placeholder="Select attendees...">
    <ClientEvents OnLoad="OnLoad" />
</telerik:RadMultiSelect>

<button onclick="bindToNewData();" type="button">bind to new data</button>
````

You can also create a new Kendo Data Source object with the desired settings and pass it to the RadMultiSelect. Just make sure that it matches the fields and settings you have defined.

>caption Example 4: Binding to a new Kendo DataSource instance

````ASP.NET

<script>
    function bindToNewData() {
        var multiSelectWidget = $find("<%=RadMultiSelect1.ClientID%>").get_kendoWidget();
        //create a Kendo Data Source and set its settings
        //this example calls a service, but you can also use static data
        var ds = new kendo.data.DataSource({
            type: "odata",
            transport: {
                read: "https://demos.telerik.com/kendo-ui/service/Northwind.svc/Customers"
            }
        });

        multiSelectWidget.setDataSource(ds);
    }
</script>

<telerik:RadMultiSelect ID="RadMultiSelect1" runat="server" Filter="Contains" Width="400px" DataTextField="ContactName" DataValueField="CustomerID"
    Placeholder="Select attendees...">
</telerik:RadMultiSelect>

<button onclick="bindToNewData();" type="button">bind to new data</button>
````

## See Also

* [Kendo UI Data Source](https://docs.telerik.com/kendo-ui/framework/datasource/overview)

* [Kendo UI Data Source API](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource)

* [Kendo UI Data Source Demos](https://demos.telerik.com/kendo-ui/datasource/index)

* [RadMultiSelect Client-side API]({%slug multiselect/client-side-programming/overview%})





