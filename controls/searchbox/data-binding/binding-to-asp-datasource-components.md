---
title: Binding to ASP DataSource Components
page_title: Binding to ASP DataSource Components | RadSearchBox for ASP.NET AJAX Documentation
description: Binding to ASP DataSource Components
slug: searchbox/data-binding/binding-to-asp-datasource-components
tags: binding,to,asp,datasource,components
published: True
position: 3
---

# Binding to ASP DataSource Components



**RadSearchBox** supports binding to all ASP.NET DataSource components, including:

* SqlDataSource

* XmlDataSource

* ObjectDataSource

* EntityDateSource

* LinqDataSource

To bind RadSearchBox to a DataSource component, you need to set its **DataSourceID** property to the ID of the DataSource component. You should also set its **DataTextField** and **DataValueField** properties to map the **Text** and **Value** properties of the items to the respective columns or fields from the data source.

You can also set the **DataKeyNames** property to add additional fields from the data source that you will need in the DataItem object for your scenario.

## SqlDataSource

Here is a sample that shows how to achieve binding with SqlDataSource.

````ASPNET
<telerik:RadSearchBox RenderMode="Lightweight" runat="server" ID="RadSearchBox1" 
	DataSourceID="SqlDataSource1"
	DataValueField="ProductId"
	DataTextField="ProductName">
	<DropDownSettings Height="400" Width="300" />
</telerik:RadSearchBox>

<asp:SqlDataSource ID="SqlDataSource2" runat="server" 
	ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
	SelectCommand="SELECT * FROM [Products]">
</asp:SqlDataSource>
````



## LinqDataSource

Here is a sample that shows how to achieve binding with LinqDataSource.

````ASPNET
<asp:LinqDataSource runat="server" ID="LinqDataSource1" ContextTypeName="LinqToSqlReadOnly.NorthwindReadOnlyDataContext"
	OrderBy="ContactName" Select="new (ContactName, City, ContactTitle)" TableName="Customers">
</asp:LinqDataSource>

 <telerik:RadSearchBox RenderMode="Lightweight" runat="server" ID="RadSearchBox2"  EmptyMessage="Linq"
	DataSourceID="LinqDataSource1" DataValueField="ContactName"
	DataTextField="City">
	<DropDownSettings Height="400" Width="300" />
</telerik:RadSearchBox>
	       
````



## EntityDateSource

Here is a sample how to doe how to achieve it with EntityDateSource.

````ASPNET
<asp:EntityDataSource ID="EntityDataSource1" runat="server" ConnectionString="name=NorthwindEntities35"
	DefaultContainerName="NorthwindEntities35" EntitySetName="Customers" Select="it.[ContactName], it.[City], it.[ContactTitle]"
	AutoPage="true" OrderBy="it.[ContactName]">
</asp:EntityDataSource>
<telerik:RadSearchBox RenderMode="Lightweight" runat="server" ID="RadSearchBox3"  EmptyMessage="Entity"
	DataSourceID="EntityDataSource1" DataValueField="ContactName"
	DataTextField="City">
	<DropDownSettings Height="400" Width="300" />
</telerik:RadSearchBox>
````



## ObjectDateSource

Here is a sample that shows how to achieve binding with ObjectDateSource.

````ASPNET
<telerik:RadSearchBox RenderMode="Lightweight" runat="server" ID="RadSearchBox4"  EmptyMessage="Object"
	DataSourceID="ObjectDataSource1" DataValueField="ID"
	DataTextField="Text">
	<DropDownSettings Height="400" Width="300" />
</telerik:RadSearchBox>
<asp:ObjectDataSource ID="ObjectDataSource1" TypeName="SearchBoxDataObject" SelectMethod="GetItems"
	runat="server"></asp:ObjectDataSource>
	
````





````C#
	
public class SearchBoxDataObject
{
	public SearchBoxDataObject() { }
	public static List<SearchBoxDataItem> GetItems()
	{
		List<SearchBoxDataItem> itemsList = new List<SearchBoxDataItem>();
		itemsList.Add(new SearchBoxDataItem(1, "item 1"));
		itemsList.Add(new SearchBoxDataItem(2, "item 2"));
		itemsList.Add(new SearchBoxDataItem(3, "item 3"));
		return itemsList;
	}
	public class SearchBoxDataItem
	{
		private string _text;
		private int _id;
		public string Text
		{
			get
			{
				return _text;
			}
			set
			{
				_text = value;
			}
		}
		public int ID
		{
			get
			{
				return _id;
			}
			set
			{
				_id = value;
			}
		}
		public SearchBoxDataItem(int id, string text)
		{
			_id = id;
			_text = text;
		}
	}
}
	
````
````VB.NET
	
Public Class SearchBoxDataObject
	Public Sub New()
	End Sub
	Public Shared Function GetItems() As List(Of SearchBoxDataItem)
		Dim itemsList As New List(Of SearchBoxDataItem)()
		itemsList.Add(New SearchBoxDataItem(1, "item 1"))
		itemsList.Add(New SearchBoxDataItem(2, "item 2"))
		itemsList.Add(New SearchBoxDataItem(3, "item 3"))
		Return itemsList
	End Function
	Public Class SearchBoxDataItem
		Private _text As String
		Private _id As Integer
		Public Property Text() As String
			Get
				Return _text
			End Get
			Set(value As String)
				_text = value
			End Set
		End Property
		Public Property ID() As Integer
			Get
				Return _id
			End Get
			Set(value As Integer)
				_id = value
			End Set
		End Property
		Public Sub New(id As Integer, text As String)
			_id = id
			_text = text
		End Sub
	End Class
End Class
	
	
````


## XMLDataSource

Here is a sample that shows how to achieve binding with XMLDataSource.

````ASPNET
<telerik:RadSearchBox RenderMode="Lightweight" runat="server" ID="RadSearchBox5"  EmptyMessage="XML"
	DataSourceID="XmlDataSource1" DataValueField="Value"
	DataTextField="Text">
	<DropDownSettings Height="400" Width="300" />
</telerik:RadSearchBox>
<asp:XmlDataSource ID="XmlDataSource1" runat="server" DataFile="~/ContentFile.xml"></asp:XmlDataSource>
````



````ASPNET
<items>
 <Item Text="New York" Value="1" />
 <Item Text="Paris" Value="2" />
 <Item Text="London" Value="3" />
</items>
````


