---
title: Loading Items from WebService
page_title: Client-side Data Binding using ASP.NET Web Service - RadComboBox
description: Fetching server data using ASP.NET Web Services to ensure responsive, dynamic applications with minimal overhead, enhancing both performance and user experience.
slug: combobox/data-binding/client-side/loading-items-from-webservice
previous_url: controls/combobox/load-on-demand/loading-items-from-a-web-service, controls/combobox/load-on-demand/loading-items-from-wcf-service
tags: client-side, data binding, loading, items, aspnet, webservice
published: True
position: 2
---

# Loading items from WebService

Fetching server data using ASP.NET Web Services to ensure responsive, dynamic applications with minimal overhead, enhancing both performance and user experience.

Web services are components on a Web server that a client application can call by making HTTP requests across the Web.

>note If you need help setting up the WebService, you can check out the [Quick Walkthrough ASP.NET WebService]({%slug common-quick-walkthrough-asp-net-web-services%}) article. 

ComboBox settings for loading the items from Web Service:

- Set the `EnableLoadOnDemand` property to `true`.
- Provide the path to the Web Service and the name of the method for the `Path` and `Method` properties of the `WebServiceSettings` element.

Web Service specifics:

- Method return `Type` should be a collection of `RadComboBoxItemData` objects. To use custom objects, check out the [Custom ComboBox Item Data](#custom-combobox-item-data) section.

## XML Web Service (ASMX)

>caption ComboBox Markup

````ASP.NET
<telerik:RadComboBox ID="RadComboBox1" runat="server" RenderMode="Lightweight" EnableLoadOnDemand="true">
    <WebServiceSettings Path="WebService.asmx" Method="GetProducts"></WebServiceSettings>
</telerik:RadComboBox>
````

>caption Web Service method

````C#
[WebMethod]
public List<RadComboBoxItemData> GetProducts(RadComboBoxContext context)
{
    string userText = context.Text;

    List<RadComboBoxItemData> allItems = Enumerable.Range(0, 100).Select(x => new RadComboBoxItemData()
    {
        Text = "Product " + x,
        Value = x.ToString()
    }).ToList();

    List<RadComboBoxItemData> filteredItems = allItems.Where(item => item.Text.Contains(userText)).ToList();

    return filteredItems;
}
````
````VB
<WebMethod>
Public Function GetProducts(ByVal context As RadComboBoxContext) As List(Of RadComboBoxItemData)
    Dim userText As String = context.Text
    Dim allItems As List(Of RadComboBoxItemData) = Enumerable.Range(0, 100).Select(Function(x) New RadComboBoxItemData() With {
        .Text = "Product " & x,
        .Value = x.ToString()
    }).ToList()

    Dim filteredItems As List(Of RadComboBoxItemData) = allItems.Where(Function(item) item.Text.Contains(userText)).ToList()

    Return filteredItems
End Function
````

## WCF Service (SVC)

>caption ComboBox Markup

````ASP.NET
<telerik:RadComboBox ID="RadComboBox1" runat="server" RenderMode="Lightweight" EnableLoadOnDemand="true">
    <WebServiceSettings Path="Service.svc" Method="GetProducts"></WebServiceSettings>
</telerik:RadComboBox>
````

>caption Web Service method

````C#
[OperationContract]
public List<RadComboBoxItemData> GetProducts(RadComboBoxContext context)
{
    string userText = context.Text;

    List<RadComboBoxItemData> allItems = Enumerable.Range(0, 100).Select(x => new RadComboBoxItemData()
    {
        Text = "Product " + x,
        Value = x.ToString()
    }).ToList();

    List<RadComboBoxItemData> filteredItems = allItems.Where(item => item.Text.Contains(userText)).ToList();

    return filteredItems;
}
````
````VB
<OperationContract>
Public Function GetProducts(ByVal context As RadComboBoxContext) As List(Of RadComboBoxItemData)
    Dim userText As String = context.Text
    Dim allItems As List(Of RadComboBoxItemData) = Enumerable.Range(0, 100).Select(Function(x) New RadComboBoxItemData() With {
        .Text = "Product " & x,
        .Value = x.ToString()
    }).ToList()

    Dim filteredItems As List(Of RadComboBoxItemData) = allItems.Where(Function(item) item.Text.Contains(userText)).ToList()

    Return filteredItems
End Function
````


## PageMethod

>caption ComboBox Markup

````ASP.NET PageMethod
<telerik:RadComboBox ID="RadComboBox1" runat="server" RenderMode="Lightweight" EnableLoadOnDemand="true">
    <WebServiceSettings Path="Default.aspx" Method="GetProducts"></WebServiceSettings>
</telerik:RadComboBox>
````

>caption CodeBehind method

````C#
[WebMethod]
public static List<RadComboBoxItemData> GetProducts(RadComboBoxContext context)
{
    string userText = context.Text;

    List<RadComboBoxItemData> allItems = Enumerable.Range(0, 100).Select(x => new RadComboBoxItemData()
    {
        Text = "Product " + x,
        Value = x.ToString()
    }).ToList();

    List<RadComboBoxItemData> filteredItems = allItems.Where(item => item.Text.Contains(userText)).ToList();

    return filteredItems;
}
````
````VB
<WebMethod>
Public Shared Function GetProducts(ByVal context As RadComboBoxContext) As List(Of RadComboBoxItemData)
    Dim userText As String = context.Text
    
    Dim allItems As List(Of RadComboBoxItemData) = Enumerable.Range(0, 100).Select(Function(x) New RadComboBoxItemData() With {
        .Text = "Product " & x,
        .Value = x.ToString()
    }).ToList()

    Dim filteredItems As List(Of RadComboBoxItemData) = allItems.Where(Function(item) item.Text.Contains(userText)).ToList()
    
    Return filteredItems
End Function
````

>note Check out the Online Examples at [Load on Demand Modes](https://demos.telerik.com/aspnet-ajax/combobox/examples/populatingwithdata/autocompletesql/defaultcs.aspx).

## Custom ComboBox Item Data

In case of custom models inherit the `Telerik.Web.UI.ControlItemData` Class.


````C#
public class CustomComboItemData : ControlItemData
{
    // Inherited Members

    // Custom Members
    public string CustomField1 { get; set; }
    public string CustomField2 { get; set; }
}
````
````VB
Public Class CustomComboItemData
    Inherits ControlItemData

    Public Property CustomField1 As String
    Public Property CustomField2 As String
End Class
````

>caption Example Usage

````C#
public List<CustomComboItemData> GetProducts(RadComboBoxContext context)
{
    string userText = context.Text;

    List<CustomComboItemData> allItems = Enumerable.Range(0, 100).Select(x => new CustomComboItemData()
    {
        Text = "Product " + x,
        Value = x.ToString()
    }).ToList();

    List<CustomComboItemData> filteredItems = allItems.Where(item => item.Text.Contains(userText)).ToList();

    return filteredItems;
}
````
````VB
Public Function GetProducts(ByVal context As RadComboBoxContext) As List(Of CustomComboItemData)
    Dim userText As String = context.Text
    Dim allItems As List(Of CustomComboItemData) = Enumerable.Range(0, 100).Select(Function(x) New CustomComboItemData() With {
        .Text = "Product " & x,
        .Value = x.ToString()
    }).ToList()

    Dim filteredItems As List(Of CustomComboItemData) = allItems.Where(Function(item) item.Text.Contains(userText)).ToList()

    Return filteredItems
End Function
````
