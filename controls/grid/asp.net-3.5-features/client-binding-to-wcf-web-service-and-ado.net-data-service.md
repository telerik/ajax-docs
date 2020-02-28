---
title: Client Binding to WCF Web Service and ADO.NET Data Service
page_title: Client Binding to WCF Web Service and ADO.NET Data Service | RadGrid for ASP.NET AJAX Documentation
description: Client Binding to WCF Web Service and ADO.NET Data Service
slug: grid/asp.net-3.5-features/client-binding-to-wcf-web-service-and-ado.net-data-service
tags: client,binding,to,wcf,web,service,and,ado.net,data,service
published: True
position: 0
---

# Client Binding to WCF Web Service and ADO.NET Data Service



The ASP.NET 3.5 framework introduces two new ways to supply data to your ASP.NET server controls - binding to Windows Communication Foundation (WCF) Web Service and binding to ADO.NET Data Services. They allow the developer to use asynchronous calls using these types of services in order to retrieve data, return it back to the client and update the state of controls based on the result which is send back from the service. Below are a couple of tutorials which include step by step directions how to configure WCF service and ADO.NET Data Services with VS 2008:

[WCF services getting started tutorial](https://msdn.microsoft.com/en-us/library/ms734712.aspx)

[Using Microsoft ADO.NET Data Services](https://msdn.microsoft.com/en-us/library/cc907912.aspx)

RadGrid for ASP.NET AJAX exposes declarative way to binding itself to data returned from WCF web service or ADO.NET Data Service which is presented in the [following online demo](https://demos.telerik.com/aspnet-ajax/grid/examples/clientbinding/defaultcs.aspx) of the product. Additionally, both grids from the example support paging/sorting/filtering without any extra coding.

## Binding RadGrid for ASP.NET AJAX to WCF Web Service

For the first RadGrid, which is bound to WCF Web Service, you need to specify an existing web service and method with following signature:

````ASP.NET
<ClientSettings>
    <DataBinding SelectMethod="GetDataAndCount" Location="GridWcfService.svc"
        SortParameterType="Linq" FilterParameterType="Linq">
    </DataBinding>
</ClientSettings>
````
````C#

[OperationContract]
public ResultData GetDataAndCount(int startRowIndex, int maximumRows, string sortExpression, string filterExpression)
{
}
````
````VB
<OperationContract()> _
Public Function GetDataAndCount(ByVal startRowIndex As Integer, ByVal maximumRows As Integer, ByVal sortExpression As String, ByVal filterExpression As String) As ResultData
End Function
````

where *ResultData *is custom class that holds data returned from the service to client.The signature of this class and the *GridWcfService.svc* file (used in the demo) are shown below:

````ASP.NET
<%@  servicehost language="C#" debug="true" service="GridWcfService" codebehind="~/App_Code/GridWcfService.cs" %>
````
````C#
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
using System.ServiceModel.Activation;
using Telerik.Web.UI;

[DataContract]
public class Product
{
   [DataMember]
   public int ProductID { get; set; }
   [DataMember]
   public string ProductName { get; set; }
   [DataMember]
   public decimal? UnitPrice { get; set; }
   [DataMember]
   public short? ReorderLevel { get; set; }
   [DataMember]
   public bool Discontinued { get; set; }
}
public class ResultData
{
   public int Count { get; set; }
   public List<Product> Data { get; set; }
}
[ServiceKnownType(typeof(Product))]
[ServiceContract]
[AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Allowed)]
public class GridWcfService
{
   [OperationContract]
   public ResultData GetDataAndCount(int startRowIndex, int maximumRows, string sortExpression, string filterExpression)
   {
       GridBindingData data = RadGrid.GetBindingData("LinqToSql.NorthwindDataContext", "Products", startRowIndex, maximumRows, sortExpression, filterExpression);
       ResultData result = new ResultData();
       result.Data = data.Data.OfType<LinqToSql.Product>().Select(p => new Product()
           {ProductID = p.ProductID, ProductName = p.ProductName, UnitPrice = p.UnitPrice,
               ReorderLevel = p.ReorderLevel, Discontinued = p.Discontinued}).ToList();
       result.Count = data.Count;
       return result;
   }
}   
````
````VB
Imports System
Imports System.Collections.Generic
Imports System.Linq
Imports System.Runtime.Serialization
Imports System.ServiceModel
Imports System.Text
Imports System.ServiceModel.Activation
Imports Telerik.Web.UI

    <DataContract()> _
    Public Class Product
        <DataMember()> _
        Public Property ProductID() As Integer
            Get
            End Get
            Set(ByVal value As Integer)
            End Set
        End Property
        <DataMember()> _
        Public Property ProductName() As String
            Get
            End Get
            Set(ByVal value As String)
            End Set
        End Property
        <DataMember()> _
        Public Property UnitPrice() As System.Nullable(Of Decimal)
            Get
            End Get
            Set(ByVal value As System.Nullable(Of Decimal))
            End Set
        End Property
        <DataMember()> _
        Public Property ReorderLevel() As System.Nullable(Of Short)
            Get
            End Get
            Set(ByVal value As System.Nullable(Of Short))
            End Set
        End Property
        <DataMember()> _
        Public Property Discontinued() As Boolean
            Get
            End Get
            Set(ByVal value As Boolean)
            End Set
        End Property
    End Class
    Public Class ResultData
        Public Property Count() As Integer
            Get
            End Get
            Set(ByVal value As Integer)
            End Set
        End Property
        Public Property Data() As List(Of Product)
            Get
            End Get
            Set(ByVal value As List(Of Product))
            End Set
        End Property
    End Class
    <ServiceKnownType(GetType(Product))> _
    <ServiceContract()> _
    <AspNetCompatibilityRequirements(RequirementsMode:=AspNetCompatibilityRequirementsMode.Allowed)> _
    Public Class GridWcfService
        <OperationContract()> _
        Public Function GetDataAndCount(ByVal startRowIndex As Integer, ByVal maximumRows As Integer, ByVal sortExpression As String, ByVal filterExpression As String) As ResultData
            Dim data As GridBindingData = RadGrid.GetBindingData("LinqToSql.NorthwindDataContext", "Products", startRowIndex, maximumRows, sortExpression, filterExpression)
            Dim result As New ResultData()
  result.Data = data.Data.OfType(Of LinqToSql.Product)().[Select](Function(p As ) New Product()).ToList()
            result.Count = data.Count
            Return result
End Function
   End Class
````


## Binding RadGrid for ASP.NET AJAX to ADO.NET Data Service

The second RadGrid from the online example referenced above is bound to ADO.NET Data Service. You need to point an existing ADO.NET data service to generate the grid content and specify the following settings:

````ASP.NET
<ClientSettings>
    <DataBinding Location="GridAdoNetDataService.svc" SelectCountMethod="GetCount">
   	    <DataService TableName="Products" />
    </DataBinding>
</ClientSettings>
````

and GetCount method:


````C#
[WebGet]
public int GetCount(string where)
{
    return String.IsNullOrEmpty(where) ? CurrentDataSource.Products.Count() : CurrentDataSource.Products.Where(where).Count();
}
````
````VB
<WebGet()> _
Public Function GetCount(ByVal where As String) As Integer
    Return If([String].IsNullOrEmpty(where), CurrentDataSource.Products.Count(), CurrentDataSource.Products.Where(where).Count())
End Function
````

The syntax of the ADO.NET Data Service class and the *GridAdoNetDataService.svc* file from the sample is presented in the forthcoming section:

````ASP.NET

<%@ ServiceHost Language="C#" Factory="System.Data.Services.DataServiceHostFactory" Service="GridAdoNetDataService" %>
````



````ASP.NET
using System;
using System.Data.Services;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel.Web;
using EntityFramework;
public class GridAdoNetDataService : DataService<NorthwindEntities>
{    
   public static void InitializeService(IDataServiceConfiguration config)
   {        
        config.SetEntitySetAccessRule("*", EntitySetRights.AllRead);
        config.SetServiceOperationAccessRule("*", ServiceOperationRights.All);
   }
   [WebGet]
   public int GetCount(string where)
   {
       return String.IsNullOrEmpty(where) ? CurrentDataSource.Products.Count() :
           CurrentDataSource.Products.Where(where).Count();
   }
} 			
````
````VB
Imports System
Imports System.Data.Services
Imports System.Collections.Generic
Imports System.Linq
Imports System.ServiceModel.Web
Imports EntityFramework
    Public Class GridAdoNetDataService
        Inherits DataService(Of NorthwindEntities)
        Public Shared Sub InitializeService(ByVal config As IDataServiceConfiguration)
            config.SetEntitySetAccessRule("*", EntitySetRights.AllRead)
            config.SetServiceOperationAccessRule("*", ServiceOperationRights.All)
        End Sub
        <WebGet()> _
        Public Function GetCount(ByVal where As String) As Integer
            Return If([String].IsNullOrEmpty(where), CurrentDataSource.Products.Count(), CurrentDataSource.Products.Where(where).Count())
        End Function
    End Class
````



