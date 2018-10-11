---
title: Binding to Object-Based Data Sources
page_title: Binding to Object-Based Data Sources | RadTabStrip for ASP.NET AJAX Documentation
description: Binding to Object-Based Data Sources
slug: tabstrip/data-binding/binding-to-object-based-data-sources
tags: binding,to,object-based,data,sources
published: True
position: 1
---

# Binding to Object-Based Data Sources



You can bind **RadTabStrip** to an object-based data source such as **ObjectDataSource**, **LinqDataSource** or any class that implements the **IEnumerable** interface.

## Binding to ObjectDataSource

>tip To see this type of data binding in action, please visit the [Declarative Data Sources](http://demos.telerik.com/aspnet-ajax/TabStrip/Examples/PopulatingWithData/DeclarativeDataSources/DefaultCS.aspx) live demo.
>


When using **ObjectDataSource**, you can bind **RadTabStrip** declaratively at design time. The **SelectMethod** of the **ObjectDataSource** should return an object that supports the **IEnumerable** or **ICollection** interface. Such collections include **Array**, **ArrayList**, and **List<type>**.

If the **SelectMethod** returns a collection of strings, those strings are automatically mapped to the **Text** property of the respective tabs. If the collection contains objects (as opposed to string values), you can use the **DataTextField**, **DataNavigateUrlField**, and the **DataValueField** properties to map a property from the object directly to the **Text**, **NavigateUrl** and **Value** properties of **RadTab**. If the **DataFieldID** and **DataFieldParentID** properties are set, RadTabStrip will create a hierarchy of Tabs, determining the Root ones using the following algorithm:

>tip - their **DataFieldParentID** property must be **null** if it is of nullable (e.g. **int?** ) or reference (e.g. **string** ) type.
> <br> -example:- <br>
> **ID**  **ParentID** 
>1 (null)
>2 1
>their **DataFieldParentID** property must return the **default value** if it is value type (e.g. **0** for **int** , **Guid.Empty** for **Guid** ).
> <br> -example:- <br>
> **ID**  **ParentID** 
>1 0
>2 1
>


To map additional properties from the object to other properties of the respective tab, use an **[TabDataBound event handler]({%slug tabstrip/server-side-programming/tabdatabound%})**. The event arguments passed to the event, **e.Tab** and **e.Tab.DataItem**, hold the instance of the tab being bound and the **DataItem** associated with the tab. You can map a property from the **DataItem** to the property of the **RadTab** class (make sure to cast the **DataItem** object to your respective data type first).

The following example shows a **RadTabStrip** bound declaratively to an **ObjectDataSource**:

````ASPNET
<telerik:RadTabStrip
   ID="RadTabStrip1"
   runat="server"
   DataSourceID="ObjectDataSource1">
</telerik:RadTabStrip>
<asp:ObjectDataSource
   ID="ObjectDataSource1"
   runat="server"
   SelectMethod="GetSiteData"
   TypeName="SiteDataItem">
</asp:ObjectDataSource>   
````


The **ObjectDataSource** component is configured to use the **SiteDataItem** business object. The **SiteDataItem** class is defined below:



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
  Set
   _text = value
  End Set
 End Property
 Public Property Url() As String
  Get
   Return _url
  End Get
  Set
   _url = value
  End Set
 End Property
 Public Property ID() As Integer
  Get
   Return _id
  End Get
  Set
   _id = value
  End Set
 End Property
 Public Property ParentID() As Integer
  Get
   Return _parentId
  End Get
  Set
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

>tip To see this type of data binding in action, please visit the [Hierarchical Data Binding](http://demos.telerik.com/aspnet-ajax/TabStrip/Examples/PopulatingWithData/HierarchicalDataBinding/DefaultCS.aspx) live demo.
>


Instead of going through an **ObjectDataSource**, you can bind **RadTabStrip** directly to any collection that implements the **ICollection** or **IEnumerable** interface.Mapping properties of the objects in the collection to properties of the tabs works exactly the same way as when using **ObjectDataSource**.

To bind directly to a collection, you must bind the tabstrip at runtime, using the following steps:

1. Create the collection.

1. Add items to the collection. Depending on the type of the collection, these can be strings, or more complex objects with properties that provide data for the various properties of **RadTab** and/or for the **ID** -> **ParentID** relationship.

1. Set the **DataSource** property of **RadTabStrip** to the instance of the collection.

1. Call the **DataBind** method.

The following example shows a tabstrip bound to an **ArrayList**. The list contains **SiteDataItem** objects with the same definition as in the **ObjectDataSource** example, only that their **ParentID** property is of nullable type - **int?**:



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
	  RadTabStrip1.DataTextField = "Text";
	  RadTabStrip1.DataNavigateUrlField = "Url";
	  RadTabStrip1.DataFieldID = "ID";
	  RadTabStrip1.DataFieldParentID = "ParentID";
	  RadTabStrip1.DataSource = GenerateSiteData();
	  RadTabStrip1.DataBind();
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
  RadMenu1.DataTextField = "Text"
  RadMenu1.DataNavigateUrlField = "Url"
  RadMenu1.DataFieldID = "ID"
  RadMenu1.DataFieldParentID = "ParentID"
  RadMenu1.DataSource = GenerateSiteData()
  RadMenu1.DataBind()
 End If
End Sub 	          
````


# See Also

 * [Overview]({%slug tabstrip/data-binding/overview%})

 * [Using DataBindings]({%slug tabstrip/data-binding/using-databindings%})

 * [Binding to DataTable]({%slug tabstrip/data-binding/binding-to-datatable%})

 * [Binding to Table-Based DataSource Components]({%slug tabstrip/data-binding/binding-to-table-based-datasource-components%})

 * [Binding to Hierarchical DataSource Components]({%slug tabstrip/data-binding/binding-to-hierarchical-datasource-components%})
