---
title: Binding to RadClientDataSource
page_title: Binding to RadClientDataSource | RadSearchBox for ASP.NET AJAX Documentation
description: Binding to RadClientDataSource
slug: searchbox/data-binding/binding-to-radclientdatasource
tags: binding,to,radclientdatasource
published: True
position: 7
---

# Binding to RadClientDataSource



This article demonstrates how to bind **RadSearchBox** to **RadClientDataSource**.

## 

Since **Q2 2014** RadSearchBox can be bound to a **RadClientDataSource** control. An important aspect of binding to the RadClientDataSource is that the RadSearchBox **DataText** and **DataValue** fields should be associated with the custom object properties. Thus you can choose which property value to be shown as RadSearchBox item text and value. For reference at the bottom of the web service implementation below you will find the custom class and its properties declaration.

The RadSearchBox property **MaxResultCount** works in exactly the same manner as with any other data source control.

## 

The following application scenario shows an example of RadSearchBox bound to RadClientDataSource.

````ASPNET
<telerik:RadClientDataSource runat="server" ID="CD1">
	<ClientEvents />
	<DataSource>
		<WebServiceDataSourceSettings BaseUrl="http://localhost:58888/CDIntegration/Service.svc/">
			<Select Url="LoadCustomDataWCF" DataType="JSON" RequestType="Post" ContentType="application/json; charset=utf-8" />
		</WebServiceDataSourceSettings>
	</DataSource>

	<Schema DataName="d">
	</Schema>
	<ClientEvents />
</telerik:RadClientDataSource>

<telerik:RadSearchBox RenderMode="Lightweight" ID="RadSearchBox2" MaxResultCount="2" Filter="StartsWith" runat="server"
	DataTextField="Name"
	DataValueField="Value"
	ClientDataSourceID="CD1">
	<DropDownSettings Height="150" Width="250" />
</telerik:RadSearchBox>
````





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
````


