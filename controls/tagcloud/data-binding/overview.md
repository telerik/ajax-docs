---
title: Overview
page_title: Data Binding Overview - RadTagCloud
description: Check our Web Forms article about Overview.
slug: tagcloud/data-binding/overview
tags: overview
published: True
position: 0
---

# Data Binding Overview



## 

**RadTagCloud** supports binding to all ASP.NET 2.0/3.5 DataSource components, including:

* AccessDataSource

* SqlDataSource

* XmlDataSource

* ObjectDataSource

* SiteMapDataSource

* LinqDataSource

* EntityDataSource



To bind to a DataSource component, you need to set the following properties:

* **DataSourceID** property of the tagCloud to the ID of the DataSource component

* **DataTextField** property to the field of the DataSource component that provides the text content.

* **DataNavigteUrlField** property to the field of the DataSource component that provides the URL (NavigateUrl) content.

* **DataWeightField** property to the field of the DataSource component that provides the weight content.



Here is an example that shows how to bind the tagCloud to an ObjectDataSource. In asimilar way the control can be bound to any of the above mentioned DataSource components.

````ASP.NET
<div>
	<telerik:RadTagCloud RenderMode="Lightweight" ID="RadTagCloud2" runat="server" Width="400px" MaxFontSize="50px"
		Sorting="AlphabeticAsc" DataSourceID="ObjectDataSource1" DataTextField="Text"
		DataWeightField="Weight" DataNavigateUrlField="NavigateUrl">
	</telerik:RadTagCloud>
	<asp:ObjectDataSource ID="ObjectDataSource1" runat="server" SelectMethod="GetSiteData"
		TypeName="TagCloudDataItem"></asp:ObjectDataSource>
</div>
````

````C#
/// <summary>
/// This class is only for demonstration purposes. The class used in this example resides in the App_Code folder
/// </summary>
public class TagCloudDataItem
{
	private string _text;
	private string _navigateUrl;
	private double _weight;
	public string Text
	{
		get { return _text; }
		set { _text = value; }
	}

	public string NavigateUrl
	{
		get { return _navigateUrl; }
		set { _navigateUrl = value; }
	}
	public double Weight
	{
		get { return _weight; }
		set { _weight = value; }
	}
	public TagCloudDataItem(string text, string navigateUrl, double weight)
	{
		_text = text;
		_navigateUrl = navigateUrl;
		_weight = weight;
	}
	public static List<TagCloudDataItem> GetSiteData()
	{
		List<TagCloudDataItem> siteData = new List<TagCloudDataItem>();
		siteData.Add(new TagCloudDataItem("Russia", "https://en.wikipedia.org/wiki/Russia", 141.9));
		siteData.Add(new TagCloudDataItem("Nigeria", "https://en.wikipedia.org/wiki/Nigeria", 154.7));
		siteData.Add(new TagCloudDataItem("Saudi Arabia", "https://en.wikipedia.org/wiki/Saudi_Arabia", 28.6));
		siteData.Add(new TagCloudDataItem("Canada", "https://en.wikipedia.org/wiki/Canada", 34.1));
		siteData.Add(new TagCloudDataItem("USA", "https://en.wikipedia.org/wiki/USA", 309.4));
		siteData.Add(new TagCloudDataItem("Sweden", "https://en.wikipedia.org/wiki/Sweden", 9.3));
		siteData.Add(new TagCloudDataItem("Germany", "https://en.wikipedia.org/wiki/Germany", 81.7));
		siteData.Add(new TagCloudDataItem("Turkey", "https://en.wikipedia.org/wiki/Turkey", 72.5));
		siteData.Add(new TagCloudDataItem("Japan", "https://en.wikipedia.org/wiki/Japan", 127.3));
		siteData.Add(new TagCloudDataItem("France", "https://en.wikipedia.org/wiki/France", 65.4));
		return siteData;
	}
}
````
````VB
''' <summary>
''' This class is only for demonstration purposes. The class used in this example resides in the App_Code folder
''' </summary>
Public Class TagCloudDataItem
	Private _text As String
	Private _navigateUrl As String
	Private _weight As Double
	Public Property Text() As String
		Get
			Return _text
		End Get
		Set(ByVal value As String)
			_text = value
		End Set
	End Property

	Public Property NavigateUrl() As String
		Get
			Return _navigateUrl
		End Get
		Set(ByVal value As String)
			_navigateUrl = value
		End Set
	End Property
	Public Property Weight() As Double
		Get
			Return _weight
		End Get
		Set(ByVal value As Double)
			_weight = value
		End Set
	End Property
	Public Sub New(ByVal text As String, ByVal navigateUrl As String, ByVal weight As Double)
		_text = text
		_navigateUrl = navigateUrl
		_weight = weight
	End Sub
	Public Shared Function GetSiteData() As List(Of TagCloudDataItem)
		Dim siteData As New List(Of TagCloudDataItem)()
		siteData.Add(New TagCloudDataItem("Russia", "https://en.wikipedia.org/wiki/Russia", 141.9))
		siteData.Add(New TagCloudDataItem("Nigeria", "https://en.wikipedia.org/wiki/Nigeria", 154.7))
		siteData.Add(New TagCloudDataItem("Saudi Arabia", "https://en.wikipedia.org/wiki/Saudi_Arabia", 28.6))
		siteData.Add(New TagCloudDataItem("Canada", "https://en.wikipedia.org/wiki/Canada", 34.1))
		siteData.Add(New TagCloudDataItem("USA", "https://en.wikipedia.org/wiki/USA", 309.4))
		siteData.Add(New TagCloudDataItem("Sweden", "https://en.wikipedia.org/wiki/Sweden", 9.3))
		siteData.Add(New TagCloudDataItem("Germany", "https://en.wikipedia.org/wiki/Germany", 81.7))
		siteData.Add(New TagCloudDataItem("Turkey", "https://en.wikipedia.org/wiki/Turkey", 72.5))
		siteData.Add(New TagCloudDataItem("Japan", "https://en.wikipedia.org/wiki/Japan", 127.3))
		siteData.Add(New TagCloudDataItem("France", "https://en.wikipedia.org/wiki/France", 65.4))
		Return siteData
	End Function
End Class
````

