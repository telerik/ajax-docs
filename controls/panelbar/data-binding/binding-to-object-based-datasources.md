---
title: Binding to Object-Based DataSources
page_title: Binding to Object-Based DataSources | UI for ASP.NET AJAX Documentation
description: Binding to Object-Based DataSources
slug: panelbar/data-binding/binding-to-object-based-datasources
tags: binding,to,object-based,datasources
published: True
position: 1
---

# Binding to Object-Based DataSources



You can bind __RadPanelBar__ to an object-based data source such as __ObjectDataSource__,__LinqDataSource__ or any class that implements the __IEnumerable__ interface.



## Binding to ObjectDataSource

>note To see this type of data binding in action, please visit the[Declarative Data Sources](http://demos.telerik.com/aspnet-ajax/Panelbar/Examples/PopulatingWithData/DeclarativeDataSources/DefaultCS.aspx)live demo.
>


When using __ObjectDataSource__, you can bind __RadPanelBar__ declaratively at design time. The __SelectMethod__ of the __ObjectDataSource__ should return an object that supports the __IEnumerable__ or __ICollection__ interface. Such collections include __Array__, __ArrayList__, and __List<type>__.

If the __SelectMethod__ returns a collection of strings, those strings are automatically mapped to the __Text__ property of the respective panel items. If the collection contains objects (as opposed to string values), you can use the __DataTextField__, __DataNavigateUrlField__, and the __DataValueField__ properties to map a property from the object directly to the __Text__, __NavigateUrl__ and __Value__ properties of __RadPanelBarItem__. If the __DataFieldID__ and __DataFieldParentID__ properties are set, RadPanelBar will create a hierarchy of Items, determining the Root ones using the following algorithm:

>tip - their __DataFieldParentID__ property must be __null__ if it is of nullable (e.g. __int?__ ) or reference (e.g. __string__ ) type.
> -example:- 
> __ID__  __ParentID__ 
>1 (null)
>2 1
>- their __DataFieldParentID__ property must return the __default value__ if it is value type (e.g. __0__ for __int__ , __Guid.Empty__ for __Guid__ ).
> -example:- 
> __ID__  __ParentID__ 
>1 0
>2 1
>


To map additional properties from the object to other properties of the respective panel item, use an __[ItemDataBound event handler]({%slug panelbar/server-side-programming/itemdatabound%})__. The event arguments passed to the event, __e.Item__ and __e.Item.DataItem__, hold the instance of the panel item being bound and the __DataItem__ associated with the panel item. You can map a property from the __DataItem__ to the property of the __RadPanelBarItem__ class (make sure to cast the __DataItem__ object to your respective data type first).

The following example shows a __RadPanelBar__ bound declaratively to an __ObjectDataSource__:

````ASPNET
	    <telerik:radpanelbar id="RadPanelBar1" runat="server" datasourceid="ObjectDataSource1"></telerik:radpanelbar>
	    <asp:ObjectDataSource ID="ObjectDataSource1" runat="server" SelectMethod="GetSiteData"
	        TypeName="SiteDataItem"></asp:ObjectDataSource>
````



The __ObjectDataSource__ component is configured to use the __SiteDataItem__ business object. The __SiteDataItem__ class is defined below:



````C#
	     
	
	using System.Collections.Generic;
	public class SiteDataItem
	{
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
	
	
	Imports System.Collections.Generic
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


## Binding to an object that supports IEnumerable

>tip To see this type of data binding in action, please visit the[Hierarchical Data Binding](http://demos.telerik.com/aspnet-ajax/Panelbar/Examples/PopulatingWithData/HierarchicalBinding/DefaultCS.aspx)live demo.
>


Instead of going through an __ObjectDataSource__, you can bind __RadPanelBar__ directly to any collection that implements the __ICollection__ or __IEnumerable__ interface. Mapping properties of the objects in the collection to properties of the panel items works exactly the same way as when using __ObjectDataSource__.

To bind directly to a collection, you must bind the panel at runtime, using the following steps:

1. Create the collection.

1. Add items to the collection. Depending on the type of the collection, these can be strings, or more complex objects with properties that provide data for the various properties of __RadPanelBarItem__ and/or for the __ID__ -> __ParentID__ relationship.

1. Set the __DataSource__ property of __RadPanelBar__ to the instance of the collection.

1. Call the __DataBind__ method.

The following example shows a panel bound to an __ArrayList__. The list contains __SiteDataItem__ objects with the same definition as in the __ObjectDataSource__ example, only that their __ParentID__ property is of nullable type - __int?__:



````C#
	     
	
	private ArrayList GenerateSiteData()
	{
	 ArrayList siteData = new ArrayList();
	 siteData.Add(new SiteDataItem(1, null, "All Sites", ""));
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
	protected void Page_Load(object sender, EventArgs e)
	{
	 if (!IsPostBack)
	 {
	   RadPanelBar1.DataTextField = "Text";
	   RadPanelBar1.DataNavigateUrlField = "Url";
	   RadPanelBar1.DataFieldID = "ID";
	   RadPanelBar1.DataFieldParentID = "ParentID";
	   RadPanelBar1.DataSource = GenerateSiteData();
	   RadPanelBar1.DataBind();
	 }
	} 
````
````VB.NET
	
	
	    Private Function GenerateSiteData() As ArrayList
	        Dim siteData As New ArrayList()
	        siteData.Add(New SiteDataItem(1, Nothing, "All Sites", ""))
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
	    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
	        If Not IsPostBack Then
	            RadPanelBar1.DataTextField = "Text"
	            RadPanelBar1.DataNavigateUrlField = "Url"
	            RadPanelBar1.DataFieldID = "ID"
	            RadPanelBar1.DataFieldParentID = "ParentID"
	            RadPanelBar1.DataSource = GenerateSiteData()
	            RadPanelBar1.DataBind()
	        End If
	    End Sub
	
````


# See Also

 * [Overview]({%slug panelbar/data-binding/overview%})

 * [Using DataBindings]({%slug panelbar/data-binding/using-databindings%})

 * [Binding to DataTable]({%slug panelbar/data-binding/binding-to-datatable%})

 * [Binding to Table-Based DataSource]({%slug panelbar/data-binding/binding-to-table-based-datasource%})

 * [Binding to Hierarchical DataSource]({%slug panelbar/data-binding/binding-to-hierarchical-datasource%})
