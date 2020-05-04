---
title: Binding to ASP DataSource components
page_title: Binding to ASP DataSource components | RadTimeline for ASP.NET AJAX Documentation
description: Binding to ASP DataSource components
slug: timeline/data-binding/server-side/binding-to-asp-datasource-components
tags: binding,to,asp,datasource,components
published: True
position: 3
---

# Binding to ASP DataSource components

**RadTimeline** supports binding to all ASP.NET 2.0 DataSource components, including:

* AccessDataSource

* [SqlDataSource](#sqldatasource)

* [XmlDataSource](#xmldatasource)

* [ObjectDataSource](#objectdatasource)

* SiteMapDataSource

* [LinqDataSource](#linqdatasource)

To bind to a DataSource component, all you need to do is set the **DataSourceID** property of RadTimeline to the ID of the DataSource component. You should also set the **DataTextField** and **DataValueField** properties of RadTimeline to map the **Date**, **Title**, **Subtitle**, **Description**, **Actions** and **Images** values of the items to the respective columns / fields from the data source.

If you need to map additional columns from the data source to properties of RadTimeline items, you can use the **ItemDataBound** event. The event arguments passed to the event, **e.Item** and **e.Item.DataItem**, hold the instance of RadTimeline item being bound and the **DataItem** to which it is bound. You can map a property from the **DataItem** to the corresponding property of RadTimeline item. Be sure to cast the **DataItem** object to the proper data type first.


````C#
protected void RadTimeline1_ItemDataBound(object sender, RadTimelineItemEventArgs e)
{
    var dataItem = e.Item.DataItem as DataRowView;
    var orderID = dataItem["OrderID"].ToString();
    e.Item.Actions.Add(new TimelineItemAction()
    {
        Text = "Go to order",
        Url = "https://google.com/search?q=" + orderID
    });
        
    DataRow[] orderActions = OrderActionsTable().Select("OrderID = " + orderID);
    foreach (DataRow row in orderActions)
    {
        e.Item.Actions.Add(new TimelineItemAction()
        {
            Text = row["Text"].ToString(),
            Url = row["Url"].ToString()
        });
    }
}
````
````VB.NET
Protected Sub RadTimeline1_ItemDataBound(ByVal sender As Object, ByVal e As RadTimelineItemEventArgs)
    Dim dataItem = TryCast(e.Item.DataItem, DataRowView)
    Dim orderID = dataItem("OrderID").ToString()
    e.Item.Actions.Add(New TimelineItemAction() With {
        .Text = "Go to order",
        .Url = "https://google.com/search?q=" & orderID
    })
    Dim orderActions As DataRow() = OrderActionsTable().[Select]("OrderID = " & orderID)

    For Each row As DataRow In orderActions
        e.Item.Actions.Add(New TimelineItemAction() With {
            .Text = row("Text").ToString(),
            .Url = row("Url").ToString()
        })
    Next
End Sub
````

## SqlDataSource

````ASP.NET
<asp:SqlDataSource ID="SqlDataSourceEmployees" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
    ProviderName="System.Data.SqlClient" SelectCommand="Select [EmployeeID], [FirstName] + ' ' + [LastName] as [FullName],[LastName], [FirstName], [Title], [TitleOfCourtesy], [BirthDate], [HireDate], [Address], [City], [Region], [PostalCode], [Country], [HomePhone], [Extension], [Photo], [Notes], [ReportsTo], [PhotoPath] from Employees"
    runat="server"></asp:SqlDataSource>
<telerik:RadTimeline runat="server" ID="TimelineOrders"
    DataSourceID="SqlDataSourceEmployees"
    DataTitleField="FullName"
    DataSubtitleField="Title"
    Orientation="Vertical"
    DataKeyNames="TitleOfCourtesy,City,Country,Region"
    DataDateField="HireDate"
    OnItemDataBound="TimelineOrders_ItemDataBound">
    <EventTemplate>
        <div class="k-card-header">
            <h5 class="k-card-title">#=data.TitleOfCourtesy# #=data.FullName#</h5>
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

## XmlDataSource

````ASP.NET
<telerik:RadTimeline runat="server" ID="RadTimeline1" DataSourceID="XmlDataSource1"
    OnItemDataBound="RadTimeline1_ItemDataBound"
    DataMember="Appointment"
    DataDateField="FoundedDate"
    DataTitleField="CompanyName"
    DataSubtitleField="ContactName">
</telerik:RadTimeline>

<asp:XmlDataSource runat="server" ID="XmlDataSource1" 
    DataFile="~/App_Data/XmlDataSourceExampleTemp.xml"></asp:XmlDataSource>
	
````
The data fields of the used **XmlDataSource** should be `Attributes` instead of child node elements. The XML file should have the format shown below:

````XML
<Customers>
	<Customer CustomerID="0" FoundedDate="2010-05-01T08:00Z" CompanyName="Alfreds Futterkiste" ContactName="Maria Anders">
		<Actions>
		  <Action Url="https://google.com/search?q=Alfeds+Futterkiste" Text="Google it"></Action>
		</Actions>
	</Customer>
	<Customer CustomerID="1" FoundedDate="2010-05-02T08:00Z" CompanyName="Antonio Moreno Taqueria" ContactName="Ana Trujillo"></Customer>
	<!-- Wrong syntax: -->
	<!-- <Customer  FoundedDate="2010-05-02T08:00Z"> -->
		<!-- <FoundedDate>2010-05-02T08:00Z</FoundedDate> -->
	<!-- </Customer> -->
  </Customers>
	
````

## ObjectDataSource

````ASP.NET
<telerik:RadTimeline runat="server" ID="RadTimeline1"
    DataActionsField="Actions"
    DataImagesField="Images"
    DataTitleField="Title"
    DataSubtitleField="Subtitle"
    DataDateField="Date"
    DataDescriptionField="Description"
    DataSourceID="ObjectDataSource1">
</telerik:RadTimeline>

<asp:ObjectDataSource ID="ObjectDataSource1" runat="server" SelectMethod="AllTimelineEvents"
    TypeName="TimelineEventsObjectDataSource"></asp:ObjectDataSource>
````

````C#
public class MyTimelineItem
{
    public string Description { get; set; }
    public string Title { get; set; }
    public string Subtitle { get; set; }
    public DateTime Date { get; set; }

    public List<MyAction> Actions { get; set; }
    public List<MyImage> Images { get; set; }
}
public class MyAction
{
    public string Text { get; set; }
    public string Url { get; set; }
}
public class MyImage
{
    public string Src { get; set; }
}
````
````VB.NET
Public Class MyTimelineItem
    Public Property Description As String
    Public Property Title As String
    Public Property Subtitle As String
    Public Property Date As DateTime
    Public Property Actions As List(Of MyAction)
    Public Property Images As List(Of MyImage)
End Class

Public Class MyAction
    Public Property Text As String
    Public Property Url As String
End Class

Public Class MyImage
    Public Property Src As String
End Class
````

## LinqDataSource

You can also handle the **LinqDataSource** `OnSelecting` event in order to get your real data and set it as `e.Result` value.

````ASP.NET
<telerik:RadTimeline runat="server" ID="RadTimeline1" DataSourceID="LinqDataSource1"
    DataActionsField="Actions"
    DataImagesField="Images"
    DataTitleField="Title"
    DataSubtitleField="Subtitle"
    DataDateField="Date"
    DataDescriptionField="Description">
</telerik:RadTimeline>

<asp:LinqDataSource runat="server" ID="LinqDataSource1" OnSelecting="LinqDataSource1_Selecting"></asp:LinqDataSource>
````

````C#
protected void LinqDataSource1_Selecting(object sender, LinqDataSourceSelectEventArgs e)
{
    e.Result = GetTimelineEvents();
}

public IQueryable<MyTimelineItem> GetTimelineEvents()
{
    var ds = new List<MyTimelineItem>();
    for (int i = 1; i <=5 ; i++)
    {
        ds.Add(new MyTimelineItem()
        {
            Title = "My title "+i,
            Subtitle = "My subtitle "+i,
            Date = DateTime.Now.AddDays(i),
            Description = "My item description for item #"+i,
            Images = new List<MyImage>()
            {
                new MyImage(){ Src="https://via.placeholder.com/64" },
                new MyImage(){ Src="https://via.placeholder.com/32x64" },
            },
            Actions = new List<MyAction>()
            {
                new MyAction(){ Text = "Go here", Url="https://www.google.com/search?q=here+"+i},
                new MyAction(){ Text = "Go there", Url="https://www.google.com/search?q=there+"+i}
            }
        });
    }

    return ds.AsQueryable();
}
public class MyTimelineItem
{
    public string Description { get; set; }
    public string Title { get; set; }
    public string Subtitle { get; set; }
    public DateTime Date { get; set; }

    public List<MyAction> Actions { get; set; }
    public List<MyImage> Images { get; set; }
}
public class MyAction
{
    public string Text { get; set; }
    public string Url { get; set; }
}
public class MyImage
{
    public string Src { get; set; }
}
````
````VB.NET
Protected Sub LinqDataSource1_Selecting(ByVal sender As Object, ByVal e As LinqDataSourceSelectEventArgs)
    e.Result = GetTimelineEvents()
End Sub

Public Function GetTimelineEvents() As IQueryable(Of MyTimelineItem)
    Dim ds = New List(Of MyTimelineItem)()

    For i As Integer = 1 To 5
        ds.Add(New MyTimelineItem() With {
            .Title = "My title " & i,
            .Subtitle = "My subtitle " & i,
            .Date = DateTime.Now.AddDays(i),
            .Description = "My item description for item #" & i,
            .Images = New List(Of MyImage)() From {
                New MyImage() With {
                    .Src = "https://via.placeholder.com/64"
                },
                New MyImage() With {
                    .Src = "https://via.placeholder.com/32x64"
                }
            },
            .Actions = New List(Of MyAction)() From {
                New MyAction() With {
                    .Text = "Go here",
                    .Url = "https://www.google.com/search?q=here+" & i
                },
                New MyAction() With {
                    .Text = "Go there",
                    .Url = "https://www.google.com/search?q=there+" & i
                }
            }
        })
    Next

    Return ds.AsQueryable()
End Function

Public Class MyTimelineItem
    Public Property Description As String
    Public Property Title As String
    Public Property Subtitle As String
    Public Property Date As DateTime
    Public Property Actions As List(Of MyAction)
    Public Property Images As List(Of MyImage)
End Class

Public Class MyAction
    Public Property Text As String
    Public Property Url As String
End Class

Public Class MyImage
    Public Property Src As String
End Class
````


