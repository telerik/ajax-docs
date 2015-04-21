---
title: Binding to Object-Based Data Sources
page_title: Binding to Object-Based Data Sources | UI for ASP.NET AJAX Documentation
description: Binding to Object-Based Data Sources
slug: navigation/data-binding/binding-to-object-based-data-sources
tags: binding,to,object-based,data,sources
published: True
position: 2
---

# Binding to Object-Based Data Sources

You can bind __RadNavigation__ to an object-based data source such as __ObjectDataSource__, __LinqDataSource__ or any class that implements the __IEnumerable__ interface.

## Binding to ObjectDataSource

>note To see this type of data binding in action, please visit the [Declarative Data Sources](http://demos.telerik.com/aspnet-ajax/navigation/data-binding/server-side-binding/declarative-data-sources/defaultcs.aspx?product=navigation) live demo.
>


When using __ObjectDataSource__, you can bind __RadNavigation__ declaratively at design time. The __SelectMethod__ of the __ObjectDataSource__ should return an object that supports the __IEnumerable__ or __ICollection__ interface.Such collections include __Array__, __ArrayList__, and __List<type>__.

If the collection contains objects (as opposed to string values), you can use the __DataTextField__, and the __DataNavigateUrlField__ properties to map a property from the object directly to the __Text__ and __NavigateUrl__ properties of __NavigationNode__. If the __DataFieldID__ and __DataFieldParentID__ properties are set, RadNavigation will create a hierarchy of Nodes, determining the Root ones using the following algorithm:

>note - their __DataFieldParentID__ property must be __null__ if it is of nullable (e.g. __int?__ ) or reference (e.g. __string__ ) type.
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


To map additional properties from the object to other properties of the respective navigation node, use an __[NodeDataBound event handler]({%slug navigation/server-side-programming/events/nodedatabound%})__. The event arguments passed to the event, __e.Node__ and __e.Node.DataItem__, hold the instance of the navigation node being boundand the __DataItem__ associated with the navigation node. You can map a property from the __DataItem__ to the property of the __NavigationNode__ class (make sure to cast the __DataItem__ object to your respective data type first).

````ASPNET
<telerik:RadNavigation runat="server" ID="RadNavigation1" DataSourceID="ObjectDataSource1" DataFieldParentID="ParentID"
	DataFieldID="ID" DataKeyNames="ID" DataTextField="Text" DataNavigateUrlField="Url" />

<asp:ObjectDataSource ID="ObjectDataSource1" runat="server" SelectMethod="GetSiteData" TypeName="SiteDataItem"></asp:ObjectDataSource>
````

The __ObjectDataSource__ component is configured to use the SiteDataItem business object. The __SiteDataItem__ class is defined below:

````C#
using System.Collections.Generic;

public class SiteDataItem
{
	private string _text;
	private string _url;
	private int _id;
	private int? _parentId;

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

	public string Url
	{
		get
		{
			return _url;
		}
		set
		{
			_url = value;
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
	public int? ParentID
	{
		get
		{
			return _parentId;
		}
		set
		{
			_parentId = value;
		}
	}
	public SiteDataItem(int id, int? parentId, string text, string url)
	{
		_id = id;
		_parentId = parentId;
		_text = text;
		_url = url;
	}

	public static List<SiteDataItem> GetSiteData()
	{
		List<SiteDataItem> siteData = new List<SiteDataItem>();
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
}
````
````VB.NET
Imports System.Collections.Generic

Public Class SiteDataItem
	Private _text As String
	Private _url As String
	Private _id As Integer
	Private _parentId As System.Nullable(Of Integer)

	Public Property Text() As String
		Get
			Return _text
		End Get
		Set(value As String)
			_text = value
		End Set
	End Property

	Public Property Url() As String
		Get
			Return _url
		End Get
		Set(value As String)
			_url = value
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
	Public Property ParentID() As System.Nullable(Of Integer)
		Get
			Return _parentId
		End Get
		Set(value As System.Nullable(Of Integer))
			_parentId = value
		End Set
	End Property
	Public Sub New(id As Integer, parentId As System.Nullable(Of Integer), text As String, url As String)
		_id = id
		_parentId = parentId
		_text = text
		_url = url
	End Sub

	Public Shared Function GetSiteData() As List(Of SiteDataItem)
		Dim siteData As New List(Of SiteDataItem)()
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
End Class
````


## Binding to an object that implements IEnumerable

>note To see this type of data binding in action, please visit the [Hierarchical Data Binding](http://demos.telerik.com/aspnet-ajax/Menu/Examples/Programming/HierarchicalBinding/DefaultCS.aspx)live demo.
>


Instead of going through an __ObjectDataSource__, you can bind __RadNavigation__ directly to any collection that implements the __ICollection__ or __IEnumerable__ interface.Mapping properties of the objects in the collection to properties of the navigation nodes works exactly the same way as when using __ObjectDataSource__.

To bind directly to a collection, you must bind the menu at runtime, using the following steps:

1. Create the collection.

1. Add items to the collection. Depending on the type of the collection, these can be strings, or more complex objects with properties that provide data for the various properties of __NavigationNode__ and/or for the __ID__ -> __ParentID__ relationship.

1. Set the __DataSource__ property of __RadNavigation__ to the instance of the collection.

1. Call the __DataBind__ method.

The following example shows a menu bound to an __ArrayList__. The list contains __SiteDataItem__ objects with the same definition as in the __ObjectDataSource__ example, only that their __ParentID__ property is of nullable type - __int?__:

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
		RadNavigation1.DataTextField = "Text";
		RadNavigation1.DataNavigateUrlField = "Url";
		RadNavigation1.DataFieldID = "ID";
		RadNavigation1.DataFieldParentID = "ParentID";
		RadNavigation1.DataSource = GenerateSiteData();
		RadNavigation1.DataBind();
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
		RadNavigation1.DataTextField = "Text"
		RadNavigation1.DataNavigateUrlField = "Url"
		RadNavigation1.DataFieldID = "ID"
		RadNavigation1.DataFieldParentID = "ParentID"
		RadNavigation1.DataSource = GenerateSiteData()
		RadNavigation1.DataBind()
	End If
End Sub
````

# See Also

 * [Server-side]({%slug navigation/data-binding/server-side%})
