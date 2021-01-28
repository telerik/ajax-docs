---
title: Binding to Asp DataSource components
page_title: Binding to Asp DataSource components - RadDropDownList
description: Check our Web Forms article about Binding to Asp DataSource components.
slug: dropdownlist/databinding/server-side-binding-/binding-to-asp-datasource-components
tags: binding,to,asp,datasource,components
published: True
position: 1
---

# Binding to Asp DataSource components



**RadDropDownList** supports binding to all ASP.NET 2.0 DataSource components, including:

* SqlDataSource

* LinqDataSource

* EntityDataSource

* ObjectDataSource

* XmlDataSource

To bind to a DataSource component, all you need to do is set the **DataSourceID** property of RadDropDownList to the ID of the DataSource component. You should also set the **DataTextField** and **DataValueField** properties of RadDropDownList to map the **Text** and **Value** properties of the items to the respective columns / fields from the data source.

If you need to map additional columns from the data source to properties of RadDropDownList items, you can use the **ItemDataBound** event. The event arguments passed to the event, **e.Item** and **e.Item.DataItem**, hold the instance of RadDropDownList item being bound and the **DataItem** to which it is bound. You can map a property from the **DataItem** to the corresponding property of RadDropDownList item. Be sure to cast the **DataItem** object to the proper data type first.



````C#
	
protected void RadDropDownList1_ItemDataBound(object o, DropDownListItemEventArgs e)
{
	DataRowView dataSourceRow = (DataRowView)e.Item.DataItem;
	e.Item.Enabled = (bool)dataSourceRow["Enabled"];
	e.Item.Attributes["customAttribute"] = dataSourceRow["CustomAttribute"].ToString();
}
	
````
````VB.NET

Protected Sub RadDropDownList1_ItemDataBound(o As Object, e As DropDownListItemEventArgs)
	Dim dataSourceRow As DataRowView = DirectCast(e.Item.DataItem, DataRowView)
	e.Item.Enabled = CBool(dataSourceRow("Enabled"))
	e.Item.Attributes("customAttribute") = dataSourceRow("CustomAttribute").ToString()
End Sub
	
````


## SqlDataSource

````ASPNET
<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:ComboConnectionString %>"
	SelectCommand="SELECT * FROM [Links]"></asp:SqlDataSource>
<telerik:raddropdownlist
	id="RadDropDownList1"
	runat="server"
	datatextfield="Text"
	datavaluefield="Value"
	datasourceid="SqlDataSource1"
	onitemdatabound="RadDropDownList1_ItemDataBound">
</telerik:raddropdownlist>
````



## LinqDataSource

````ASPNET
<asp:LinqDataSource runat="server" ID="LinqDataSource1" ContextTypeName="LinqToSqlReadOnly.NorthwindReadOnlyDataContext"
	OrderBy="ContactName" Select="new (ContactName, City, ContactTitle)" TableName="Customers">
</asp:LinqDataSource>
<telerik:raddropdownlist
	id="RadDropDownList2"
	runat="server"
	runat="server"
	datasourceid="LinqDataSource1"
	datatextfield="ContactName">
</telerik:raddropdownlist>
````



## EntityDataSource

````ASPNET
<asp:EntityDataSource ID="EntityDataSource1" runat="server" ConnectionString="name=NorthwindEntities35"
	DefaultContainerName="NorthwindEntities35" EntitySetName="Customers" Select="it.[ContactName], it.[City], it.[ContactTitle]"
	AutoPage="true" OrderBy="it.[ContactName]">
</asp:EntityDataSource>
<telerik:raddropdownlist
	id="RadDropDownList3"
	runat="server"
	datasourceid="EntityDataSource1"
	datatextfield="ContactName">
</telerik:raddropdownlist>
````



## ObjectDataSource

````ASPNET
<telerik:raddropdownlist
	id="RadDropDownList4"
	runat="server"
	datavaluefield="ID"
	datatextfield="Text"
	datasourceid="ObjectDataSource1">    
</telerik:raddropdownlist>
<asp:ObjectDataSource ID="ObjectDataSource1" TypeName="DropDownListDataObject" SelectMethod="GetItems"
	runat="server"></asp:ObjectDataSource>
	
````





````C#
	
public class DropDownListDataObject
{
	public DropDownListDataObject() { }
	public static List<DropDownListDataItem> GetItems()
	{
		List<DropDownListDataItem> itemsList = new List<DropDownListDataItem>();
		itemsList.Add(new DropDownListDataItem(1, "item 1"));
		itemsList.Add(new DropDownListDataItem(2, "item 2"));
		itemsList.Add(new DropDownListDataItem(3, "item 3"));
		return itemsList;
	}
	public class DropDownListDataItem
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
		public DropDownListDataItem(int id, string text)
		{
			_id = id;
			_text = text;
		}
	}
}
````
````VB.NET
	
Public Class DropDownListDataObject
	Public Sub New()
	End Sub
	Public Shared Function GetItems() As List(Of DropDownListDataItem)
		Dim itemsList As New List(Of DropDownListDataItem)()
		itemsList.Add(New DropDownListDataItem(1, "item 1"))
		itemsList.Add(New DropDownListDataItem(2, "item 2"))
		itemsList.Add(New DropDownListDataItem(3, "item 3"))
		Return itemsList
	End Function
	Public Class DropDownListDataItem
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


## XmlDataSource

````ASPNET
<telerik:RadDropDownList
	id="RadDropDownList5"
	runat="server"
	datasourceid="XmlDataSource1"
	datatextfield="Text"
	datavaluefield="Value">
</telerik:RadDropDownList>
<asp:XmlDataSource ID="XmlDataSource1" runat="server" DataFile="~/ContentFile.xml"></asp:XmlDataSource>
````



When using an **XmlDataSource**, the XML file should have the format shown below:

````XML
<items>
 <Item Text="New York" Value="1" />
 <Item Text="Paris" Value="2" />
 <Item Text="London" Value="3" />
</items>
````



>note You can also [load the XML file directly]({%slug combobox/radcombobox-items/loading-items-from-xml%}), rather than using a DataSource component as an intermediary.
>

