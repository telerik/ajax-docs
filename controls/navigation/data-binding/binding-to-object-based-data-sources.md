---
title: Binding to Object-Based Data Sources
page_title: Binding to Object-Based Data Sources | RadNavigation for ASP.NET AJAX Documentation
description: Binding to Object-Based Data Sources
slug: navigation/data-binding/binding-to-object-based-data-sources
tags: binding,to,object-based,data,sources
published: True
position: 2
---

# Binding to Object-Based Data Sources

You can bind **RadNavigation** to an object-based data source such as **ObjectDataSource**, **LinqDataSource** or any class that implements the **IEnumerable** interface.

## Binding to ObjectDataSource

>tip To see this type of data binding in action, please visit the [Declarative Data Sources](http://demos.telerik.com/aspnet-ajax/navigation/data-binding/server-side-binding/declarative-data-sources/defaultcs.aspx?product=navigation) live demo.
>


When using **ObjectDataSource**, you can bind **RadNavigation** declaratively at design time. The **SelectMethod** of the **ObjectDataSource** should return an object that supports the **IEnumerable** or **ICollection** interface.Such collections include **Array**, **ArrayList**, and **List<type>**.

If the collection contains objects (as opposed to string values), you can use the **DataTextField**, and the **DataNavigateUrlField** properties to map a property from the object directly to the **Text** and **NavigateUrl** properties of **NavigationNode**. If the **DataFieldID** and **DataFieldParentID** properties are set, RadNavigation will create a hierarchy of Nodes, determining the Root ones using the following algorithm:

>tip - their **DataFieldParentID** property must be **null** if it is of nullable (e.g. **int?** ) or reference (e.g. **string** ) type.
> -example:- 
> **ID**  **ParentID** 
>1 (null)
>2 1
>- their **DataFieldParentID** property must return the **default value** if it is value type (e.g. **0** for **int** , **Guid.Empty** for **Guid** ).
> -example:- 
> **ID**  **ParentID** 
>1 0
>2 1
>


To map additional properties from the object to other properties of the respective navigation node, use an **[NodeDataBound event handler]({%slug navigation/server-side-programming/events/nodedatabound%})**. The event arguments passed to the event, **e.Node** and **e.Node.DataItem**, hold the instance of the navigation node being boundand the **DataItem** associated with the navigation node. You can map a property from the **DataItem** to the property of the **NavigationNode** class (make sure to cast the **DataItem** object to your respective data type first).

````ASPNET
<telerik:RadNavigation runat="server" ID="RadNavigation1" DataSourceID="ObjectDataSource1" DataFieldParentID="ParentID"
	DataFieldID="ID" DataKeyNames="ID" DataTextField="Text" DataNavigateUrlField="Url" />

<asp:ObjectDataSource ID="ObjectDataSource1" runat="server" SelectMethod="GetSiteData" TypeName="SiteDataItem"></asp:ObjectDataSource>
````

The **ObjectDataSource** component is configured to use the SiteDataItem business object. The **SiteDataItem** class is defined below:

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

>tip To see this type of data binding in action, please visit the [Hierarchical Data Binding](http://demos.telerik.com/aspnet-ajax/Menu/Examples/Programming/HierarchicalBinding/DefaultCS.aspx)live demo.
>


Instead of going through an **ObjectDataSource**, you can bind **RadNavigation** directly to any collection that implements the **ICollection** or **IEnumerable** interface.Mapping properties of the objects in the collection to properties of the navigation nodes works exactly the same way as when using **ObjectDataSource**.

To bind directly to a collection, you must bind the menu at runtime, using the following steps:

1. Create the collection.

1. Add items to the collection. Depending on the type of the collection, these can be strings, or more complex objects with properties that provide data for the various properties of **NavigationNode** and/or for the **ID** -> **ParentID** relationship.

1. Set the **DataSource** property of **RadNavigation** to the instance of the collection.

1. Call the **DataBind** method.

The following example shows a menu bound to an **ArrayList**. The list contains **SiteDataItem** objects with the same definition as in the **ObjectDataSource** example, only that their **ParentID** property is of nullable type - **int?**:

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
