---
title: Binding to ASP.NET DataSource Components
page_title: Binding to ASP.NET DataSource Components | UI for ASP.NET AJAX Documentation
description: Binding to ASP.NET DataSource Components
slug: treeview/data-binding/binding-to-asp.net-datasource-components
tags: binding,to,asp.net,datasource,components
published: True
position: 3
---

# Binding to ASP.NET DataSource Components



__RadTreeView__ supports binding to all ASP.NET 2.0 DataSource components, including

* AccessDataSource

* SqlDataSource

* XmlDataSource

* ObjectDataSource

* SiteMapDataSource

* LinqDataSource

To bind to an ASP.NET DataSource component, set the __DataSourceID__ property of the __RadTreeView__ to the __ID__ of the DataSource component. You should also set the __DataTextField__ and __DataValueField__ properties of the __RadTreeView__ to map the __Text__ and __Value__ properties of the Nodes to the respective columns/fields from the Data Source. Additionally, you can set the __DataFieldID__ and __DateFieldParentID__ properties to create a hierarchical RadTreeView for all types of data sources except XmlDataSource and SiteMapDataSource (which are inherently hierarchical). If you need to map additional columns use the [NodeDataBound event]({%slug treeview/data-binding/using-additional-columns%}).

## AccessDataSource

AccessDataSource allows you to bind to MS Access data files.The AccessDataSource component requires a DataFile path and a SelectCommand.

>tip You can use the[Configure DataSource](http://msdn2.microsoft.com/en-us/library/ms247292(VS.80).aspx)Smart Tag option to get help building the AccessDataSource properties in the designer.
>


````ASPNET
	    <telerik:RadTreeView 
	        ID="RadTreeView1" 
	        runat="server" 
	        Skin="WebBlue" 
	        DataFieldID="CategoryID"
	        DataTextField="CategoryName" 
	        DataValueField="Description" 
	        DataSourceID="AccessDataSource1">
	    </telerik:RadTreeView>
	    <asp:AccessDataSource 
	        ID="AccessDataSource1" 
	        runat="server" 
	        DataFile="~/App_Data/Nwind.mdb"
	        SelectCommand="SELECT [CategoryID], [CategoryName], [Description] FROM [Categories]">
	    </asp:AccessDataSource>
````



## SqlDataSource

__SqlDataSource__ allows you to bind to a MS SQL database table or view. You must supply the SqlDataSource with a valid connection string and a SelectCommand.

>tip You can use the[Configure DataSource](http://msdn2.microsoft.com/en-us/library/ms247297(VS.80).aspx)Smart Tag option to get help building the SqlDataSource properties in the designer.
>


````ASPNET
	    <telerik:RadTreeView 
	        ID="RadTreeView1" 
	        runat="server" 
	        Skin="WebBlue" 
	        DataFieldID="CategoryID"
	        DataTextField="CategoryName" 
	        DataValueField="Description" 
	        DataSourceID="SqlDataSource1">
	    </telerik:RadTreeView>
	    <asp:SqlDataSource 
	        ID="SqlDataSource1" 
	        runat="server" 
	        ConnectionString="<%$ ConnectionStrings:MyConnectionString %>"
	        SelectCommand="SELECT [CategoryID], [CategoryName], [Description] FROM [Categories]">
	    </asp:SqlDataSource>
````



## XmlDataSource

__XmlDataSource__ allows you to bind to an XML file or document. __XmlDataSource__ supports a __DataFile__ property for specifying the path to an XML data file to be used as input. You may also specify the __TransformFile__ property to apply an XSLT transformation to the data and the __XPath__ property to specify a subset of Nodes to expose from the Data Source. In the example below notice the XML file structure where the root level Node is "Customers" containing multiple "Customer" elements. Use the XPath expression "/Customers/Customer" to surface just those Nodes to __RadTreeView__.

>tip You can use the[Configure DataSource](http://msdn2.microsoft.com/en-us/library/ms247291(VS.80).aspx)Smart Tag option to get help building the XmlDataSource properties in the designer.
>


````XML
	    <?xml version="1.0" encoding="utf-8" ?>
	    <Customers>    
	        <Customer CustomerID="0" CompanyName="Alfreds Futterkiste" ContactName="Maria Anders">    
	        </Customer>    
	        <Customer CustomerID="1" CompanyName="Antonio Moreno Taquería" ContactName="Ana Trujillo">    
	        </Customer>    
	        <Customer CustomerID="2" CompanyName="Around the Horn" ContactName="Antonio Moreno">    
	        </Customer>    
	        <Customer CustomerID="3" CompanyName="Berglunds snabbköp" ContactName="Thomas Hardy">    
	        </Customer>    
	        <Customer CustomerID="4" CompanyName="Blauer See Delikatessen" ContactName="Christina Berglund">    
	        </Customer>
	    </Customers>
````



````ASPNET
	    <telerik:RadTreeView 
	        ID="RadTreeView1" 
	        runat="server" 
	        Skin="WebBlue" 
	        DataFieldID="CustomerID"
	        DataTextField="CompanyName" 
	        DataSourceID="XmlDataSource1">
	    </telerik:RadTreeView>
	    <asp:XmlDataSource 
	        ID="XmlDataSource1" 
	        runat="server" 
	        DataFile="~/App_Data/XmlDataSourceExample.xml"
	        XPath="/Customers/Customer">
	    </asp:XmlDataSource>
````



## ObjectDataSource

ObjectDataSource allows you to get data from a variety of underlying data stores. The ObjectDataSource requires the __TypeName__ of the object that will supply the data and a __SelectMethod__ that will return the data. In the example below __SiteDataItem__ is a simple class with Text, Url, ID and ParentID properties. In the __RadTreeView__, the __DataTextField__, __DataNavigateUrlField__, __DataFieldID__ and __DataFieldParentID__ properties are assigned to the corresponding properties of __SiteDataItem__.

>tip You can also use the[Configure DataSource](http://msdn2.microsoft.com/en-us/library/ms247284(VS.80).aspx)Smart Tag option to get help building the ObjectDataSource properties in the designer.
>


>tabbedCode

````C#
	     
	
	public class SiteDataItem{ 
	
	    private string _text; 
	    private string _url; 
	    private int _id; 
	    private int _parentId;  
	
	    public string Text  
	    {  
	        get { return _text; }  
	        set { _text = value; } 
	
	    }
	  
	    public string Url 
	    {  
	        get { return _url; }  
	        set { _url = value; } 
	
	    }  
	    
	    public int ID 
	    {  
	        get { return _id; }  
	        set { _id = value; } 
	
	    }  
	
	    public int ParentID 
	    {  
	        get { return _parentId; }  
	        set { _parentId = value; } 
	
	    } 
	 
	    public SiteDataItem(int id, int parentId, string text, string url) 
	    {  
	        _id = id;  
	        _parentId = parentId;  
	        _text = text;  
	        _url = url; 
	    }  
	    
	    public static List<SiteDataItem> GetSiteData() 
	    {  
	        List<SiteDataItem> siteData = new List<SiteDataItem>();    
	        siteData.Add(new SiteDataItem(1, 0, "All Sites", ""));  
	        siteData.Add(new SiteDataItem(2, 1, "Search Engines", ""));  
	        siteData.Add(new SiteDataItem(3, 1, "News Sites", ""));
	        siteData.Add(new SiteDataItem(4, 2, "Yahoo", "http://www.yahoo.com"));
	        siteData.Add(new SiteDataItem(5, 2, "MSN", "http://www.msn.com"));
	        siteData.Add(new SiteDataItem(6, 2, "Google", "http://www.google.com"));
	        siteData.Add(new SiteDataItem(7, 3, "CNN", "http://www.cnn.com"));
	        siteData.Add(new SiteDataItem(8, 3, "BBC", "http://www.bbc.co.uk"));
	        siteData.Add(new SiteDataItem(9, 3, "FOX", "http://www.foxnews.com"));
	
	        return siteData; 
	    }
	}
				
````
````VB.NET
	    Public Class SiteDataItem
	        Private _text As String
	        Private _url As String
	        Private _id As Integer
	        Private _parentId As Integer
	
	        Public Property Text() As String
	            Get
	                Return _text
	            End Get
	            Set(ByVal value As String)
	                _text = value
	            End Set
	        End Property
	
	        Public Property Url() As String
	            Get
	                Return _url
	            End Get
	            Set(ByVal value As String)
	                _url = value
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
	
	        Public Property ParentID() As Integer
	            Get
	                Return _parentId
	            End Get
	            Set(ByVal value As Integer)
	                _parentId = value
	            End Set
	        End Property
	
	        Public Sub New(ByVal id As Integer, ByVal parentId As Integer, ByVal text As String, ByVal url As String)
	            _id = id
	            _parentId = parentId
	            _text = text
	            _url = url
	        End Sub
	
	        Public Shared Function GetSiteData() As List(Of SiteDataItem)
	            Dim siteData As New List(Of SiteDataItem)()
	
	            siteData.Add(New SiteDataItem(1, 0, "All Sites", ""))
	            siteData.Add(New SiteDataItem(2, 1, "Search Engines", ""))
	            siteData.Add(New SiteDataItem(3, 1, "News Sites", ""))
	            siteData.Add(New SiteDataItem(4, 2, "Yahoo", "http://www.yahoo.com"))
	            siteData.Add(New SiteDataItem(5, 2, "MSN", "http://www.msn.com"))
	            siteData.Add(New SiteDataItem(6, 2, "Google", "http://www.google.com"))
	            siteData.Add(New SiteDataItem(7, 3, "CNN", "http://www.cnn.com"))
	            siteData.Add(New SiteDataItem(8, 3, "BBC", "http://www.bbc.co.uk"))
	            siteData.Add(New SiteDataItem(9, 3, "FOX", "http://www.foxnews.com"))
	
	            Return siteData
	        End Function
	    End Class
	
	
````
>end

````ASPNET
	    <telerik:RadTreeView 
	        ID="RadTreeView1" 
	        runat="server" 
	        Skin="WebBlue" 
	        DataSourceID="ObjectDataSource1"
	        DataTextField="Text" 
	        DataNavigateUrlField="Url" 
	        DataFieldID="ID" 
	        DataFieldParentID="ParentID">
	    </telerik:RadTreeView>
	    <asp:ObjectDataSource 
	        ID="ObjectDataSource1" 
	        runat="server" 
	        SelectMethod="GetSiteData"
	        TypeName="SiteDataItem">
	    </asp:ObjectDataSource>
````



For a live example of binding to DataSource components, see [Declarative DataSources](http://demos.telerik.com/aspnet-ajax/TreeView/Examples/Programming/DeclarativeDatasources/DefaultCS.aspx)
