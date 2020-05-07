---
title: Client-Side
page_title: Client-Side Data Binding | RadTimeline for ASP.NET AJAX Documentation
description: Client data binding overview of RadTimeline
slug: timeline/data-binding/client-side
tags: data,binding,overview,client,side,web,service
published: True
position: 1
---

# Client-Side Data Binding

**RadTimeline** can be bound to a **web service** through its inner `WebServiceSettings` tag or through a [RadClientDataSource]({%slug clientdatasource/overview%}). Since the control is a wrapper over the Kendo UI for jQuery widget, it always operates on the client and binds to data with JavaScript.

There are two ways to bind to data on the client:
 * [WebServiceSettings](#webservicesettings)
 * [RadClientDataSource](#radclientdatasource)
	
>note The event items bound to **RadTimeline** via client datasource are shown in descending order by default. If you need to change the order of the bound event items (sorting the dates chonologically), you can call the `ClientDataSource` / `WebServiceClientDataSource` sort() method.

## WebServiceSettings

Under the covers, a [Kendo UI DataSource](https://docs.telerik.com/kendo-ui/framework/datasource/overview) will be instantiated and it will perform requests to the denoted service with the settings defined in the `WebServiceSettings` nested in `WebServiceClientDataSource`. 

>caption Example 1: Setting WebServiceSettings to bind to a SVC web service

````ASP.NET
        <telerik:RadButton runat="server" ID="RadButton1" Text="Reverse Timeline events order" AutoPostBack="false" OnClientClicked="OnClientClicked" />
        <script>
            function OnClientClicked(sender, args) {
                var toggleSort = { "asc": "desc", "desc": "asc" };
                var kendoDS = $find("<%=  RadTimeline1.WebServiceClientDataSource.ClientID %>").get_kendoWidget();
                var sort = kendoDS.sort();
                sort[0].dir = toggleSort[sort[0].dir];
                kendoDS.sort(sort);
            }
        </script>
        <telerik:RadTimeline runat="server" ID="RadTimeline1" DataTitleField="FullName"
            DataSubtitleField="Title"
            Orientation="Vertical"
            DataDateField="HireDate">
            <EventTemplate>
                <div class="k-card-header">
                    <h5 class="k-card-title">#=data.TitleOfCourtesy# #=data.FirstName# #=data.LastName#</h5>
                    <h6 class="k-card-subtitle">#=data.Title#</h6>
                </div>
                <div class="k-card-body">
                    <div class="k-card-description">
                    <p>
                        #=data.City#, #=data.Country#
                        #if(data.Region){ #
                        , #=data.Region#
                        #}#
                    </p>
                    # var images = data.images; 
                    if(images && images.length > 0) { #
                    <img src="#=images[0].src#" class="k-card-image">
                    # } #
                    </div>
                </div>
            </EventTemplate>
            <WebServiceClientDataSource>
                <WebServiceSettings ServiceType="OData">
                    <Select Url="https://demos.telerik.com/kendo-ui/service/Northwind.svc/Employees" />
                </WebServiceSettings>
                <SortExpressions>
                    <telerik:ClientDataSourceSortExpression FieldName="HireDate" SortOrder="Desc" />
                </SortExpressions>
                <Schema>
                    <Model>
                        <telerik:ClientDataSourceModelField DataType="Date" FieldName="HireDate" />
                    </Model>
                </Schema>
            </WebServiceClientDataSource>
        </telerik:RadTimeline>
````

The Schema can also be configured via the `<Schema>` tag. That would allow easy parsing of the response from various web services, such as .asmx web service.

>caption Example 2: Setting WebServiceSettings to bind to a ASMX web service
````ASP.NET
<telerik:RadTimeline runat="server" ID="RadTimeline1"
    DataDateField="ReleaseDate">
    <EventTemplate>
        <div class="k-card-header">
            <h5 class="k-card-title">#= data.Title #</h5><h6 class="k-card-subtitle">by <strong>#= data.Author #</strong></h6>
            <h6 class="k-card-subtitle">Released on <strong>#= kendo.toString(data.ReleaseDate, "MMM d, yyyy")#</strong></h6>
        </div>
        <div class="k-card-body">
            <div class="k-card-description">
                       
                <div class="imageContainer">
                           
                    <img src="#= data.Cover #" class="k-card-image">
                </div>
            </div>
        </div>
        <div class="k-card-actions">
                <a class="k-button k-flat k-primary" href="#= data.Url #" target="_blank">Buy on Amazon</a>
        </div>
    </EventTemplate>
    <WebServiceClientDataSource runat="server">
        <WebServiceSettings>
            <Select Url="BooksService.asmx/GetBooks" RequestType="Post" DataType="JSON" ContentType="application/json; charset=utf-8" />
        </WebServiceSettings>
        <Schema DataName="d">
            <Model>
                <telerik:ClientDataSourceModelField DataType="Date" FieldName="ReleaseDate" />
            </Model>
        </Schema>
    </WebServiceClientDataSource>
</telerik:RadTimeline>
````

>caption Example 3: Setting WebServiceSettings to bind via Page methods
````ASP.NET
<telerik:RadTimeline runat="server" ID="RadTimeline1"
    DataDateField="ReleaseDate">
    <EventTemplate>
        <div class="k-card-header">
            <h5 class="k-card-title">#= data.Title #</h5><h6 class="k-card-subtitle">by <strong>#= data.Author #</strong></h6>
            <h6 class="k-card-subtitle">Released on <strong>#= kendo.toString(data.ReleaseDate, "MMM d, yyyy")#</strong></h6>
        </div>
        <div class="k-card-body">
            <div class="k-card-description">
                <div class="imageContainer">
                    <img src="#= data.Cover #" class="k-card-image">
                </div>
            </div>
        </div>
        <div class="k-card-actions">
                <a class="k-button k-flat k-primary" href="#= data.Url #" target="_blank">Buy on Amazon</a>
        </div>
    </EventTemplate>
    <WebServiceClientDataSource runat="server">
        <WebServiceSettings>
            <Select Url="/WebServicePageMethodsBinding.aspx/GetBooks" RequestType="Post" DataType="JSON" ContentType="application/json; charset=utf-8" />
        </WebServiceSettings>
        <Schema DataName="d">
            <Model>
                <telerik:ClientDataSourceModelField DataType="Date" FieldName="ReleaseDate" />
            </Model>
        </Schema>
    </WebServiceClientDataSource>
</telerik:RadTimeline>
````

````C#
    [WebMethod]
    public static List<Book> GetBooks()
    {
        var books = new List<Book>();
        books.Add(new Book
        {
            ReleaseDate = new DateTime(2013, 5, 1),
            Title = "Professional ASP.NET 4.5 in C# and VB",
            Author = "Jason N. Gaylord",
            Cover = "http://ecx.images-amazon.com/images/I/51MQP2rwsZL.jpg",
            Url = "http://www.amazon.com/Professional-ASP-NET-4-5-C-VB/dp/1118311825"
        });
        books.Add(new Book
        {
            ReleaseDate = new DateTime(2013, 7, 15),
            Title = "Pro ASP.NET 4.5 in C#",
            Author = "Adam Freeman",
            Cover = "http://ecx.images-amazon.com/images/I/51h6duC3kmL.jpg",
            Url = "http://www.amazon.com/Pro-ASP-NET-4-5-Adam-Freeman/dp/143024254X"
        });
        books.Add(new Book
        {
            ReleaseDate = new DateTime(2014, 3, 24),
            Title = "Beginning ASP.NET 4.5 in C#",
            Author = "Matthew MacDonald",
            Cover = "http://ecx.images-amazon.com/images/I/51xvkzeTRbL.jpg",
            Url = "http://www.amazon.com/Beginning-ASP-NET-4-5-1-Wrox-Programmer/dp/111884677X"
        });
        books.Add(new Book
        {
            ReleaseDate = new DateTime(2014, 3, 24),
            Title = "Beginning ASP.NET 4.5.1: in C# and VB ",
            Author = "Imar Spaanjaars",
            Cover = "http://ecx.images-amazon.com/images/I/51xvkzeTRbL.jpg",
            Url = "http://www.amazon.com/Beginning-ASP-NET-4-5-1-Wrox-Programmer/dp/111884677X"
        });
        books.Add(new Book
        {
            ReleaseDate = new DateTime(2013, 3, 20),
            Title = "Pro C# 5.0 and the .NET 4.5 Framework",
            Author = "Andrew Troelsen",
            Cover = "http://ecx.images-amazon.com/images/I/7165No4MIpL._SL1500_.jpg",
            Url = "http://www.amazon.com/Beginning-ASP-NET-Databases-Sandeep-Chanda/dp/1430243805"
        });
        books.Add(new Book
        {
            ReleaseDate = new DateTime(2012, 7, 24),
            Title = "Ultra-Fast ASP.NET 4.5",
            Author = "Rick Kiessig",
            Cover = "http://ecx.images-amazon.com/images/I/51Pu1Z8pgsL.jpg",
            Url = "http://www.amazon.com/Ultra-Fast-ASP-NET-Experts-Voice-ASP-Net/dp/1430243384"
        });
        books.Add(new Book
        {
            ReleaseDate = new DateTime(2016, 1, 28),
            Title = "ASP.NET 4.5 Unleashed",
            Author = "Stephen Walther",
            Cover = "http://ecx.images-amazon.com/images/I/41V4tb3L%2BFL.jpg",
            Url = "http://www.amazon.com/ASP-NET-4-5-Unleashed-Stephen-Walther/dp/067233688X"
        });
        books.Add(new Book
        {
            ReleaseDate = new DateTime(2012, 12, 21),
            Title = "Pro ASP.NET MVC 4",
            Author = "Adam Freeman",
            Cover = "http://ecx.images-amazon.com/images/I/51mKVgdmZpL.jpg",
            Url = "http://www.amazon.com/Pro-ASP-NET-MVC-Adam-Freeman/dp/1430242361"
        });
        books.Add(new Book
        {
            ReleaseDate = new DateTime(2014, 2, 24),
            Title = "Professional C# 5.0 and .NET 4.5.1",
            Author = "Christian Nagel",
            Cover = "http://ecx.images-amazon.com/images/I/516-BPVWURL.jpg",
            Url = "http://www.amazon.com/Professional-C-5-0-NET-4-5-1/dp/1118833031"
        });

        return books;
    }
    public class Book
    {
        public string Title { get; set; }
        public string Author { get; set; }
        public string Cover { get; set; }
        public string Url { get; set; }
        public DateTime ReleaseDate { get; set; }
    }
````
````VB
<WebMethod>
Public Shared Function GetBooks() As List(Of Book)
    Dim books = New List(Of Book)()
    books.Add(New Book With {
        .ReleaseDate = New DateTime(2013, 5, 1),
        .Title = "Professional ASP.NET 4.5 in C# and VB",
        .Author = "Jason N. Gaylord",
        .Cover = "http://ecx.images-amazon.com/images/I/51MQP2rwsZL.jpg",
        .Url = "http://www.amazon.com/Professional-ASP-NET-4-5-C-VB/dp/1118311825"
    })
    books.Add(New Book With {
        .ReleaseDate = New DateTime(2013, 7, 15),
        .Title = "Pro ASP.NET 4.5 in C#",
        .Author = "Adam Freeman",
        .Cover = "http://ecx.images-amazon.com/images/I/51h6duC3kmL.jpg",
        .Url = "http://www.amazon.com/Pro-ASP-NET-4-5-Adam-Freeman/dp/143024254X"
    })
    books.Add(New Book With {
        .ReleaseDate = New DateTime(2014, 3, 24),
        .Title = "Beginning ASP.NET 4.5 in C#",
        .Author = "Matthew MacDonald",
        .Cover = "http://ecx.images-amazon.com/images/I/51xvkzeTRbL.jpg",
        .Url = "http://www.amazon.com/Beginning-ASP-NET-4-5-1-Wrox-Programmer/dp/111884677X"
    })
    books.Add(New Book With {
        .ReleaseDate = New DateTime(2014, 3, 24),
        .Title = "Beginning ASP.NET 4.5.1: in C# and VB ",
        .Author = "Imar Spaanjaars",
        .Cover = "http://ecx.images-amazon.com/images/I/51xvkzeTRbL.jpg",
        .Url = "http://www.amazon.com/Beginning-ASP-NET-4-5-1-Wrox-Programmer/dp/111884677X"
    })
    books.Add(New Book With {
        .ReleaseDate = New DateTime(2013, 3, 20),
        .Title = "Pro C# 5.0 and the .NET 4.5 Framework",
        .Author = "Andrew Troelsen",
        .Cover = "http://ecx.images-amazon.com/images/I/7165No4MIpL._SL1500_.jpg",
        .Url = "http://www.amazon.com/Beginning-ASP-NET-Databases-Sandeep-Chanda/dp/1430243805"
    })
    books.Add(New Book With {
        .ReleaseDate = New DateTime(2012, 7, 24),
        .Title = "Ultra-Fast ASP.NET 4.5",
        .Author = "Rick Kiessig",
        .Cover = "http://ecx.images-amazon.com/images/I/51Pu1Z8pgsL.jpg",
        .Url = "http://www.amazon.com/Ultra-Fast-ASP-NET-Experts-Voice-ASP-Net/dp/1430243384"
    })
    books.Add(New Book With {
        .ReleaseDate = New DateTime(2016, 1, 28),
        .Title = "ASP.NET 4.5 Unleashed",
        .Author = "Stephen Walther",
        .Cover = "http://ecx.images-amazon.com/images/I/41V4tb3L%2BFL.jpg",
        .Url = "http://www.amazon.com/ASP-NET-4-5-Unleashed-Stephen-Walther/dp/067233688X"
    })
    books.Add(New Book With {
        .ReleaseDate = New DateTime(2012, 12, 21),
        .Title = "Pro ASP.NET MVC 4",
        .Author = "Adam Freeman",
        .Cover = "http://ecx.images-amazon.com/images/I/51mKVgdmZpL.jpg",
        .Url = "http://www.amazon.com/Pro-ASP-NET-MVC-Adam-Freeman/dp/1430242361"
    })
    books.Add(New Book With {
        .ReleaseDate = New DateTime(2014, 2, 24),
        .Title = "Professional C# 5.0 and .NET 4.5.1",
        .Author = "Christian Nagel",
        .Cover = "http://ecx.images-amazon.com/images/I/516-BPVWURL.jpg",
        .Url = "http://www.amazon.com/Professional-C-5-0-NET-4-5-1/dp/1118833031"
    })
    Return books
End Function

Public Class Book
    Public Property Title As String
    Public Property Author As String
    Public Property Cover As String
    Public Property Url As String
    Public Property ReleaseDate As DateTime
End Class
````

## RadClientDataSource

The **RadClientDataSource** control allows you to connect to a web service and fetch data that you can bind to **RadTimeline**. After configuring the client data source, you will need to set the corresponding data fields ( DataTitleField, DataSubtitleField, DataDateField, etc.) and the **ClientDataSourceID** property of the Timeline. All fields of the bound data can be also used in the `EventTemplate` of the control.


>caption Example 2: Binding to a RadClientDataSource

````ASP.NET
<telerik:RadTimeline runat="server" ID="RadTimeline1" DataTitleField="FullName"
    DataSubtitleField="Title"
    Orientation="Vertical"
    ClientDataSourceID="RadClientDataSource1"
    DataDateField="HireDate">
    <EventTemplate>
        <div class="k-card-header">
            <h5 class="k-card-title">#=data.TitleOfCourtesy# #=data.FirstName# #=data.LastName#</h5>
            <h6 class="k-card-subtitle">#=data.Title#</h6>
        </div>
        <div class="k-card-body">
            <div class="k-card-description">
            <p>
                #=data.City#, #=data.Country#
                #if(data.Region){ #
                , #=data.Region#
                #}#
            </p>
            # var images = data.images; 
            if(images && images.length > 0) { #
            <img src="#=images[0].src#" class="k-card-image">
            # } #
            </div>
        </div>
    </EventTemplate>
</telerik:RadTimeline>

<telerik:RadClientDataSource ID="RadClientDataSource1" runat="server">
    <DataSource>
        <WebServiceDataSourceSettings ServiceType="OData">
            <Select Url="https://demos.telerik.com/kendo-ui/service/Northwind.svc/Employees" />
        </WebServiceDataSourceSettings>
    </DataSource>
    <SortExpressions>
        <telerik:ClientDataSourceSortExpression FieldName="HireDate" SortOrder="Desc" />
    </SortExpressions>
    <Schema>
        <Model>
            <telerik:ClientDataSourceModelField DataType="Date" FieldName="HireDate" />
        </Model>
    </Schema>
</telerik:RadClientDataSource>
````

If you need to change the order of the bound event items, you can utilize the RadClientDataSource sorting functionality like follows:

````JavaScript
<telerik:RadButton runat="server" ID="RadButton1" Text="Reverse Timeline events order" AutoPostBack="false" OnClientClicked="OnClientClicked" />
<script>
    function OnClientClicked(sender, args) {
        var toggleSort = { "asc": "desc", "desc": "asc" };
        var kendoDS = $find("<%= RadClientDataSource1.ClientID %>").get_kendoWidget();
        var sort = kendoDS.sort();
        sort[0].dir = toggleSort[sort[0].dir];
        kendoDS.sort(sort);
    }
</script>
````




## See Also

* [Kendo UI Data Source](https://docs.telerik.com/kendo-ui/framework/datasource/overview)

* [Kendo UI Data Source API](https://docs.telerik.com/kendo-ui/api/javascript/data/datasource)

* [Kendo UI Data Source Demos](https://demos.telerik.com/kendo-ui/datasource/index)

* [RadTimeline Client-side API]({%slug timeline/client-side-programming/overview%})

* [Live Demo - WebService Binding](https://demos.telerik.com/aspnet-ajax/timeline/webservicebinding/defaultcs.aspx)




