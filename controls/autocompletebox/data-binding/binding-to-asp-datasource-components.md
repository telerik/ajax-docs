---
title: Binding to ASP DataSource components
page_title: Binding to ASP DataSource components | RadAutoCompleteBox for ASP.NET AJAX Documentation
description: Binding to ASP DataSource components
slug: autocompletebox/data-binding/binding-to-asp-datasource-components
tags: binding,to,asp,datasource,components
published: True
position: 3
---

# Binding to ASP DataSource components



**RadAutoCompleteBox** supports binding to all ASP.NET 2.0 DataSource components, including:

* AccessDataSource

* SqlDataSource

* XmlDataSource

* ObjectDataSource

* SiteMapDataSource

* LinqDataSource

To bind RadAutoCompleteBox to a DataSource component, you need to set its **DataSourceID** property to the ID of the DataSource component. You should also set its **DataTextField** and **DataValueField** properties to map the **Text** and **Value** properties of the items to the respective columns / fields from the data source.

## AccessDataSource

````ASPNET
<telerik:RadAutoCompleteBox RenderMode="Lightweight" ID="RadAutoCompleteBox1" runat="server" DataSourceID="AccessDataSource1"
		DataTextField="ProductName" DataValueField="ProductID">
</telerik:RadAutoCompleteBox>

<asp:AccessDataSource ID="AccessDataSource1" runat="server" DataFile="~/App_Data/Nwind.mdb"
		SelectCommand="SELECT [ProductID], [ProductName], [SupplierID], [CategoryID], [QuantityPerUnit], [UnitPrice], 
		[UnitsInStock], [UnitsOnOrder], [ReorderLevel], [Discontinued] FROM [Products]">
</asp:AccessDataSource>
````



## SqlDataSource

````ASPNET
<telerik:RadAutoCompleteBox RenderMode="Lightweight" ID="RadAutoCompleteBox1" runat="server" DataSourceID="SqlDataSource1"
		DataTextField="ProductName" DataValueField="ProductID">
</telerik:RadAutoCompleteBox>

<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
		ProviderName="<%$ ConnectionStrings:NorthwindConnectionString.ProviderName %>"
		SelectCommand="SELECT [ProductID], [ProductName], [SupplierID], [CategoryID], [QuantityPerUnit], [UnitPrice], 
		[UnitsInStock], [UnitsOnOrder], [ReorderLevel], [Discontinued] FROM [Products]">
</asp:SqlDataSource>	
````



## XmlDataSource

````ASPNET
<telerik:RadAutoCompleteBox RenderMode="Lightweight" ID="RadAutoCompleteBox1" runat="server" DataSourceID="Xmldatasource1"
	DataTextField="Text" DataValueField="Value">
</telerik:RadAutoCompleteBox>

<asp:XmlDataSource ID="Xmldatasource1" runat="server" DataFile="~/App_Data/RadAutoCompleteBox.xml" XPath="/Items/Item" />
````



When using an **XmlDataSource**, the XML file should have the format shown below:

````XML
<Items>
  <Item Text="Barcelona" Value="14" />
  <Item Text="Bonn" Value="18" />
  <Item Text="Boston" Value="9" />
  <Item Text="Brussels" Value="17" />
</Items>
````



## ObjectDataSource

````ASPNET
<telerik:RadAutoCompleteBox RenderMode="Lightweight" ID="RadAutoCompleteBox1" runat="server" DataSourceID="ObjectDataSource1"
	DataTextField="Text" DataValueField="ID">
</telerik:RadAutoCompleteBox>
		
<asp:ObjectDataSource ID="ObjectDataSource1" TypeName="RadAutoCompleteBoxObjectData" SelectMethod="GetItems"
runat="server"></asp:ObjectDataSource>
````





````C#
	
public class RadAutoCompleteBoxObjectData
{
	public RadAutoCompleteBoxObjectData()
	{
	}

	public static List<AutoCompleteBoxDataItem> GetItems()
	{
		List<AutoCompleteBoxDataItem> itemsList = new List<AutoCompleteBoxDataItem>(); 
		itemsList.Add(new AutoCompleteBoxDataItem(1, "New York")); 
		itemsList.Add(new AutoCompleteBoxDataItem(2, "Rome")); 
		itemsList.Add(new AutoCompleteBoxDataItem(3, "Paris"));
		return itemsList;
	}
	public class AutoCompleteBoxDataItem
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
		public AutoCompleteBoxDataItem(int id, string text) 
		{
			_id = id; 
			_text = text; 
		}
	}
}
	
````
````VB.NET
	
Public Class RadAutoCompleteBoxObjectData
	Public Sub New()
	End Sub

	Public Shared Function GetItems() As List(Of AutoCompleteBoxDataItem)
		Dim itemsList As New List(Of AutoCompleteBoxDataItem)()
		itemsList.Add(New AutoCompleteBoxDataItem(1, "New York"))
		itemsList.Add(New AutoCompleteBoxDataItem(2, "Rome"))
		itemsList.Add(New AutoCompleteBoxDataItem(3, "Paris"))
		Return itemsList
	End Function
	Public Class AutoCompleteBoxDataItem
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


# See Also

 * [Overview]({%slug autocompletebox/server-side-programming/overview%})
