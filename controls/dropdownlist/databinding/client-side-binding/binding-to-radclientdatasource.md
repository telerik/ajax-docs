---
title: Binding to RadClientDataSource
page_title: Binding to RadClientDataSource | UI for ASP.NET AJAX Documentation
description: Binding to RadClientDataSource
slug: dropdownlist/databinding/client-side-binding/binding-to-radclientdatasource
tags: binding,to,radclientdatasource
published: True
position: 2
---

# Binding to RadClientDataSource



This article demonstrates how to bind __RadDropDownList__ to __RadClientDataSource__.

## 

Since __Q2 2014__ RadDropDownList can be bound to a __RadClientDataSource__ control. An important aspect of binding to the RadClientDataSource is that the RadDropDownList __DataText__ and __DataValue__ fields should be associated with the custom object properties. Thus you can choose which property value to be shown as RadDropDownList item text and value. For reference at the bottom of the web service implementation below you will find the custom class and its properties declaration.

The RadDropDownList property __VirtualScrolling__ works in exactly the same manner as with any other data source control. Some specifics about the load on demand scenarios are listed and explained in the next sections.

## 

The following application scenario shows a sample configuration of RadDropDownList bound to RadClientDataSource.

>note When the virtual scrolling functionality is enabled RadDropDownList requests the items from the RadClientDataSource on portions.In case that this functionality is disabled the items are requested at once.
>


````ASPNET
	        <telerik:RadClientDataSource runat="server" ID="CD1">
	            <ClientEvents />
	            <DataSource>
	                <WebServiceDataSourceSettings BaseUrl="http://url/Service.svc/">
	                    <Select Url="LoadCustomDataWCF" DataType="JSON" RequestType="Post" ContentType="application/json; charset=utf-8" />
	                </WebServiceDataSourceSettings>
	            </DataSource>
	            <Schema DataName="d">
	            </Schema>
	            <ClientEvents />
	        </telerik:RadClientDataSource>
	
	        <telerik:RadDropDownList DropDownHeight="100px" runat="server" ID="List1" ClientDataSourceID="CD1"
	            DataTextField="Name" DataValueField="Value" EnableVirtualScrolling="true">
	        </telerik:RadDropDownList>
````



>tabbedCode

````C#
	    [OperationContract]
	    public CustomData[] LoadCustomDataWCF()
	    {
	        NorthwindReadOnlyDataContext northwind = new NorthwindReadOnlyDataContext();
	
	        //Get all items from the Customers table. This query will not be executed untill the ToArray method is called.
	        var allCustomers = (from customer in northwind.Customers
	                            orderby customer.ContactName
	                            select new CustomData
	                            {
	                                Name = customer.ContactName,
	                                Value = customer.CustomerID
	                            }).Take<CustomData>(46);
	
	        var result = allCustomers.ToArray();
	
	        return result;
	    }
	
	    public class CustomData
	    {
	        public string Name { get; set; }
	        public string Value { get; set; }
	
	    }
````



````VB.NET
	    Inherits System.Web.UI.Page
	    <OperationContract> _
	    Public Function LoadCustomDataWCF() As CustomData()
	        Dim northwind As New NorthwindReadOnlyDataContext()
	
	        'Get all items from the Customers table. This query will not be executed untill the ToArray method is called.
		Dim allCustomers = (From customer In northwind.CustomersOrder By customer.ContactNameNew CustomData() With { _
			Key .Name = customer.ContactName, _
			Key .Value = customer.CustomerID _
		}).Take(Of CustomData)(46)
	
	        Dim result = allCustomers.ToArray()
	
	        Return result
	    End Function
	
	    Public Class CustomData
	        Public Property Name() As String
	            Get
	                Return m_Name
	            End Get
	            Set(value As String)
	                m_Name = Value
	            End Set
	        End Property
	        Private m_Name As String
	        Public Property Value() As String
	            Get
	                Return m_Value
	            End Get
	            Set(value As String)
	                m_Value = Value
	            End Set
	        End Property
	        Private m_Value As String
	
	    End Class
	#End Region
	
	End Class


>end
