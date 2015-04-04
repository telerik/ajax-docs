---
title: Binding to ASP.NET Datasource Components
page_title: Binding to ASP.NET Datasource Components | UI for ASP.NET AJAX Documentation
description: Binding to ASP.NET Datasource Components
slug: listbox/data-binding/binding-to-asp.net-datasource-components
tags: binding,to,asp.net,datasource,components
published: True
position: 3
---

# Binding to ASP.NET Datasource Components



__RadListBox__ supports binding to all ASP.NET 2.0/3.5 DataSource components, including

* AccessDataSource

* SqlDataSource

* XmlDataSource

* ObjectDataSource

* LinqDataSource

* EntityDataSource

* OpenAccessDataSource

To bind to a DataSource component, all you need to do is set the __DataSourceID__ property of the ListBox to the ID of the DataSource component. You should also set the __DataTextField__ and __DataValueField__ properties of the ListBox to map the __Text__ and __Value__ properties of the items to the respective columns/fields from the data source.

If you need to map additional columns from the data source to properties of the ListBox items, you can use the __ItemDataBound__ event. The event arguments passed to the event, __e.Item__ and __e.Item.DataItem__, hold the instance of the ListBox item being bound and the __DataItem__ to which it is bound. You can map a property from the __DataItem__ to the corresponding property of the ListBox item. Be sure to cast the __DataItem__ object to the proper data type first.



````C#
	    protected void RadListBox1_ItemDataBound(object sender, RadListBoxItemEventArgs e)
	    {
	        DataRowView dataSourceRow = (DataRowView)e.Item.DataItem;
	        //setting different properties for the items
	        e.Item.Enabled = (bool)dataSourceRow["Enabled"];
	        e.Item.ToolTip = dataSourceRow["ProductName"].ToString();
	        e.Item.Attributes["City"] = dataSourceRow["CityColumn"].ToString();
	    } 
````
````VB.NET
	     
	    Protected Sub RadListBox1_ItemDataBound(ByVal sender As Object, ByVal e As RadListBoxItemEventArgs)
	        Dim dataSourceRow As DataRowView = DirectCast(e.Item.DataItem, DataRowView)
	        'setting different properties for the items
	        e.Item.Enabled = DirectCast(dataSourceRow("Enabled"), Boolean)
	        e.Item.ToolTip = dataSourceRow("ProductName").ToString()
	        e.Item.Attributes("City") = dataSourceRow("CityColumn").ToString()
	    End Sub
````


## AccessDataSource

````ASPNET
	    <telerik:RadListBox ID="RadListBox1"
	           runat="server"
	           DataTextField="Name"
	           DataValueField="ID"
	           DataSourceID="AccessDataSource1">    
	    </telerik:RadListBox>
	    <asp:AccessDataSource ID="AccessDataSource1" runat="server"
	       DataFile="~/App_Data/Countries.mdb"
	       SelectCommand="SELECT [ID], [Name] FROM [Countries]">
	    </asp:AccessDataSource> 
````



## SqlDataSource

````ASPNET
	    <telerik:RadListBox ID="RadListBox1"
	       runat="server"
	       DataTextField="ProductName"
	       DataValueField="ProductID"
	       DataSourceID="SqlDataSource1">    
	    </telerik:RadListBox>
	    <asp:SqlDataSource ID="SqlDataSource1" runat="server"
	       ConnectionString="<$ ConnectionStrings>"
	       SelectCommand="SELECT [ProductID], [ProductName] FROM [Products]">
	    </asp:SqlDataSource> 
````



## XmlDataSource

````ASPNET
	    <telerik:RadListBox ID="RadListBox1"
	           runat="server"
	           DataTextField="Text"
	           DataValueField="Value"
	           DataSourceID="XmlDataSource1">        
	    </telerik:RadListBox>
	    <asp:XmlDataSource ID="XmlDataSource1"
	           runat="server"
	           DataFile="~/ListBox.xml">
	    </asp:XmlDataSource> 
````



When using an __XmlDataSource__, the XML file should have the format shown below:

````XML
	   <Items>
	         <Item Text="New York" Value="1" />
	         <Item Text="Paris" Value="2" />
	         <Item Text="London" Value="3" />
	    </Items> 
````





## ObjectDataSource

````ASPNET
	    <telerik:RadListBox ID="RadListBox1"
	           runat="server"
	           DataTextField="Text"
	           DataValueField="ID"
	           DataSourceID="ObjectDataSource1">        
	    </telerik:RadListBox>
	    <asp:ObjectDataSource ID="ObjectDataSource1"
	          TypeName="ListObjectData"
	          SelectMethod="GetItems"
	          runat="server">
	    </asp:ObjectDataSource> 
````





````C#
	
	    public class ListObjectData
	    {
	        public ListObjectData()
	        {
	        }
	        public static List<ListDataItem> GetItems()
	        {
	            List<ListDataItem> itemsList = new List<ListDataItem>();
	            itemsList.Add(new ListDataItem(1, "item 1"));
	            itemsList.Add(new ListDataItem(2, "item 2"));
	            itemsList.Add(new ListDataItem(3, "item 3"));
	            return itemsList;
	        }
	        public class ListDataItem
	        {
	            private string _text;
	            private int _id;
	            public string Text
	            {
	                get { return _text; }
	                set { _text = value; }
	            }
	            public int ID
	            {
	                get { return _id; }
	                set { _id = value; }
	            }
	            public ListDataItem(int id, string text)
	            {
	                _id = id;
	                _text = text;
	            }
	        }
	    } 
````
````VB.NET
	
	    Public Class ListObjectData
	        Public Sub New()
	        End Sub
	        Public Shared Function GetItems() As List(Of ListDataItem)
	            Dim itemsList As New List(Of ListDataItem)()
	            itemsList.Add(New ListDataItem(1, "item 1"))
	            itemsList.Add(New ListDataItem(2, "item 2"))
	            itemsList.Add(New ListDataItem(3, "item 3"))
	            Return itemsList
	        End Function
	        Public Class ListDataItem
	            Private _text As String
	            Private _id As Integer
	            Public Property Text() As String
	                Get
	                    Return _text
	                End Get
	                Set(ByVal value As String)
	                    _text = value
	                End Set
	            End Property
	            Public Property ID() As Integer
	                Get
	                    Return _id
	                End Get
	                Set(ByVal value As Integer)
	                    _id = value
	                End Set
	            End Property
	            Public Sub New(ByVal id As Integer, ByVal text As String)
	                _id = id
	                _text = text
	            End Sub
	        End Class
	    End Class
	
````


## LinqDataSource

````ASPNET
	    <telerik:RadListBox ID="RadListBox1"
	       runat="server"
	       DataTextField="ProductName"
	       DataValueField="ProductID"
	       DataSourceID="LinqDataSource1">
	    </telerik:RadListBox>
	    <asp:LinqDataSource ID="LinqDataSource1" runat="server"
	           ContextTypeName="NorthwindDataContext"
	           Select="new (ProductID, ProductName)"
	           TableName="Products">
	    </asp:LinqDataSource> 
````



## EntityDataSource

````ASPNET
	    <telerik:RadListBox runat="server" ID="RadListBox1" Height="200px" Width="200px"
	        DataSourceID="EntityDataSource1" DataTextField="ContactName">
	    </telerik:RadListBox>
	    <asp:EntityDataSource ID="EntityDataSource1" runat="server"
	        ConnectionString="name=NorthwindEntities"
	        DefaultContainerName="NorthwindEntities"
	        EntitySetName="Customers"
	        Select="it.[ContactName], it.[City], it.[ContactTitle]"
	        AutoPage="true" OrderBy="it.[ContactName]">
	    </asp:EntityDataSource> 
````



# See Also

 * [Overview]({%slug listbox/data-binding/overview%})

 * [Binding to DataTable, DataSet or DataView]({%slug listbox/data-binding/binding-to-datatable,-dataset-or-dataview%})

 * [Binding to Array or ArrayList]({%slug listbox/data-binding/binding-to-array-or-arraylist%})

 * [Declarative DataSources Demo](http://demos.telerik.com/aspnet-ajax/listbox/examples/populatingwithdata/declarativedatasources/defaultcs.aspx)

 * [EntityDataSource Demo](http://demos.telerik.com/aspnet-ajax/listbox/examples/populatingwithdata/entitydatasource/defaultcs.aspx)

 * [LinqDataSource Demo](http://demos.telerik.com/aspnet-ajax/listbox/examples/populatingwithdata/linqdatasource/defaultcs.aspx)
