---
title: Binding to RadClientDataSource
page_title: Binding to RadClientDataSource | UI for ASP.NET AJAX Documentation
description: Binding to RadClientDataSource
slug: combobox/data-binding/binding-to-radclientdatasource
tags: binding,to,radclientdatasource
published: True
position: 5
---

# Binding to RadClientDataSource



This article demonstrates how to bind __RadComboBox__ to __RadClientDataSource__.

## 

Since __Q2 2014__ RadComboBox can be bound to a __RadClientDataSource__ control. An important aspect of binding to the RadClientDataSource is that the RadComboBox __DataText__ and __DataValue__ fields should be associated with the custom object properties. Thus you can choose which property value to be shown as RadComboBox item text and value. For reference at the bottom of the web service implementation below you will find the custom class and its properties declaration.

The RadComboBox properties __ShowMoreResultBox__, __ItemsPerRequest__ and __VirtualScrolling__ work in exactly the same manner as with any other data source control. Some specifics about the load on demand scenarios are listed and explained in the next sections.

## When the EnableLoadOnDemand is enabled

The following application scenario shows an example of __RadComboBox__ bound to __RadClientDataSource__ with load on demand.

>note When the filtering functionality is enabled the default value is "StartsWith". Setting Filter="Contains" will change this behavior.
>


````ASPNET
	        <telerik:radclientdatasource runat="server" id="ClientDataSource3">
	                <DataSource >
	                    <WebServiceDataSourceSettings BaseUrl="http://url/Service.svc/">
	                        <Select Url="LoadCustomDataWCF"  DataType="JSON" RequestType="Post" ContentType="application/json; charset=utf-8" />
	                    </WebServiceDataSourceSettings>
	                </DataSource>
	                <Schema DataName="d">
	                </Schema>
	            </telerik:radclientdatasource>
	
	        <telerik:radcombobox runat="server" id="Combo1" enableloadondemand="true" enablevirtualscrolling="true" itemsperrequest="10" height="80px" showmoreresultsbox="true"  datatextfield="Name" datavaluefield="Value"
	            clientdatasourceid="ClientDataSource3">
	            </telerik:radcombobox>
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

## When the EnableLoadOnDemand is disabled

The code snippet below show an sample configuration of __RadComboBox__ bound to __RadClientDataSource__ with virtual scrolling.

>note In this case it is necessary initially to request the items using the RadComboBox client-side API method __requestItems("")__ and passing empty string as parameter. For reference please take a look at the code snippets below:
>


````ASPNET
	        <telerik:radclientdatasource runat="server" id="ClientDataSource5">
	                 <DataSource >
	                    <WebServiceDataSourceSettings BaseUrl="http://url/Service.svc/">
	                        <Select Url="LoadCustomDataWCF"  DataType="JSON" RequestType="Post" ContentType="application/json; charset=utf-8" />
	                    </WebServiceDataSourceSettings>
	                </DataSource>
	                <Schema DataName="d">
	                </Schema>
	            </telerik:radclientdatasource>
	        <telerik:radcombobox runat="server" id="Combo2" enablevirtualscrolling="true" itemsperrequest="10" height="80px" showmoreresultsbox="true" datatextfield="Name" datavaluefield="Value" onclientdropdownopening="onClientDropDownOpening"
	            clientdatasourceid="ClientDataSource5">
	            </telerik:radcombobox>
````



````JavaScript
	        <script type="text/javascript">
	            var $ = $telerik.$,
	                isLoaded = false;
	
	            function onClientDropDownOpening(sender, args) {
	                if (!isLoaded) {
	                    sender.requestItems("");
	
	                    isLoaded = true;
	                }
	            }
	
	            </script>
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
