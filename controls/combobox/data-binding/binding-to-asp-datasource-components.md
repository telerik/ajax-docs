---
title: Binding to ASP DataSource components
page_title: Binding to ASP DataSource components | UI for ASP.NET AJAX Documentation
description: Binding to ASP DataSource components
slug: combobox/data-binding/binding-to-asp-datasource-components
tags: binding,to,asp,datasource,components
published: True
position: 3
---

# Binding to ASP DataSource components



__RadComboBox__ supports binding to all ASP.NET 2.0 DataSource components, including:

* AccessDataSource

* SqlDataSource

* XmlDataSource

* ObjectDataSource

* SiteMapDataSource

* LinqDataSource

To bind to a DataSource component, all you need to do is set the __DataSourceID__ property of RadComboBox to the ID of the DataSource component. You should also set the __DataTextField__ and __DataValueField__ properties of RadComboBox to map the __Text__ and __Value__ properties of the items to the respective columns / fields from the data source.

If you need to map additional columns from the data source to properties of RadComboBox items, you can use the __ItemDataBound__ event. The event arguments passed to the event, __e.Item__ and __e.Item.DataItem__, hold the instance of RadComboBox item being bound and the __DataItem__ to which it is bound. You can map a property from the __DataItem__ to the corresponding property of RadComboBox item. Be sure to cast the __DataItem__ object to the proper data type first.

>tabbedCode

````C#
	
	    protected void RadComboBox1_ItemDataBound(object o, RadComboBoxItemEventArgs e) 
	    { 
	        DataRowView dataSourceRow = (DataRowView)e.Item.DataItem; 
	        e.Item.Enabled = (bool)dataSourceRow["Enabled"]; 
	        e.Item.Attributes["customAttribute"] = dataSourceRow["CustomAttribute"].ToString(); 
	    }
	
````



````VB.NET
	
	
	Protected Sub RadComboBox1_ItemDataBound(ByVal o As Object, ByVal e As 
	RadComboBoxItemEventArgs) Handles RadComboBox1.ItemDataBound 
	
	        Dim dataSourceRow As DataRowView = DirectCast(e.Item.DataItem, DataRowView)
	        e.Item.Enabled = DirectCast(dataSourceRow("Enabled"), Boolean)
	        e.Item.Attributes("customAttribute") = dataSourceRow("CustomAttribute").ToString()
	    End Sub
	
````


>end

## AccessDataSource

````ASPNET
	    <asp:AccessDataSource ID="AccessDataSource1" runat="server" DataFile="~/Data/Combo.mdb"
	        SelectCommand="SELECT * FROM [Links]">
	    </asp:AccessDataSource>
	    <telerik:radcombobox 
	        id="RadComboBox2" 
	        runat="server" 
	        datatextfield="Text" 
	        datavaluefield="Value"
	        datasourceid="AccessDataSource1" 
	        onitemdatabound="RadComboBox2_ItemDataBound" />
````



## SqlDataSource

````ASPNET
	    <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:ComboConnectionString %>"
	        SelectCommand="SELECT * FROM [Links]"></asp:SqlDataSource>
	    <telerik:radcombobox 
	        id="RadComboBox1" 
	        runat="server" 
	        datatextfield="Text" 
	        datavaluefield="Value"
	        datasourceid="SqlDataSource1" 
	        onitemdatabound="RadComboBox1_ItemDataBound" />
````



## XmlDataSource

````ASPNET
	    
	<telerik:radcombobox 
	        id="RadComboBox1" 
	        runat="server" 
	        datasourceid="XmlDataSource1" 
	        datatextfield="Text"
	        datavaluefield="Value">
	</telerik:radcombobox>
	
	<asp:XmlDataSource ID="XmlDataSource1" runat="server" DataFile="~/ContentFile.xml"></asp:XmlDataSource>
	
````



When using an __XmlDataSource__, the XML file should have the format shown below:

````XML
	    
	<items>
	 <Item Text="New York" Value="1" />
	 <Item Text="Paris" Value="2" />
	 <Item Text="London" Value="3" />
	</items>
	
````



>note You can also[load the XML file directly]({%slug combobox/radcombobox-items/loading-items-from-xml%}), rather than using a DataSource component as an intermediary.
>


## ObjectDataSource

````ASPNET
	    <telerik:radcombobox 
	        id="RadComboBox1" 
	        runat="server"
	        datavaluefield="ID" 
	        datatextfield="Text"
	        datasourceid="ObjectDataSource1">    
	    </telerik:radcombobox>
	    <asp:ObjectDataSource ID="ObjectDataSource1" TypeName="ComboObjectData" SelectMethod="GetItems"
	        runat="server"></asp:ObjectDataSource>
````



>tabbedCode

````C#
	
	
	    public class ComboObjectData
	    {
	        public ComboObjectData() { }
	        public static List<ComboDataItem> GetItems()
	        {
	            List<ComboDataItem> itemsList = new List<ComboDataItem>(); 
	            itemsList.Add(new ComboDataItem(1, "item 1")); 
	            itemsList.Add(new ComboDataItem(2, "item 2")); 
	            itemsList.Add(new ComboDataItem(3, "item 3"));
	            return itemsList;
	        }
	        public class ComboDataItem
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
	            public ComboDataItem(int id, string text) 
	            {
	                _id = id; 
	                _text = text; 
	            }
	        }
	    }
	
````



````VB.NET
	
	
	    Public Class ComboObjectData
	        Public Sub New()
	        End Sub
	        Public Shared Function GetItems() As List(Of ComboDataItem)
	            Dim itemsList As New List(Of ComboDataItem)()
	            itemsList.Add(New ComboDataItem(1, "item 1"))
	            itemsList.Add(New ComboDataItem(2, "item 2"))
	            itemsList.Add(New ComboDataItem(3, "item 3"))
	            Return itemsList
	        End Function
	        Public Class ComboDataItem
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


>end
