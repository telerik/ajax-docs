---
title: Binding to Web Service or Wcf Service
page_title: Binding to Web Service or Wcf Service | RadTagCloud for ASP.NET AJAX Documentation
description: Binding to Web Service or Wcf Service
slug: tagcloud/data-binding/binding-to-web-service-or-wcf-service
tags: binding,to,web,service,or,wcf,service
published: True
position: 3
---

# Binding to Web Service or Wcf Service

## Overview

You can load child items in a tag cloud dynamically through a Web service. The following steps describe how to configure **RadTagCloud** so that it can use a Web service to supply child items. Since Q2 2012 a WCF Web Service can be used as well.

>note Both types of Web Services must return an array of type TagCloudDataItem which has the following signature:
>

````C#
/// <summary>
/// This class is only for demonstration purposes.
/// The class used in this example resides in the App_Code/TagCloud folder
/// </summary>
public class TagCloudDataItem
{
	private string _text;
	private double _weight;
	private string _navigateUrl;
	private string _accessKey;
	private short _tabIndex;
	private string _toolTip;
	private string _value;
	
	public string Text
	{
		get { return _text; }
		set { _text = value; }
	}
	public double Weight
	{
		get { return _weight; }
		set { _weight = value; }
	}
	public string NavigateUrl
	{
		get { return _navigateUrl; }
		set { _navigateUrl = value; }
	}
	public string AccessKey
	{
		get { return _accessKey; }
		set { _accessKey = value; }
	}
	public short TabIndex
	{
		get { return _tabIndex; }
		set { _tabIndex = value; }
	}
	public string ToolTip
	{
		get { return _toolTip; }
		set { _toolTip = value; }
	}
	public string Value
	{
		get { return _value;}
		set { _value = value; }
	}
	public TagCloudDataItem()
	{
	}
	public TagCloudDataItem(string text, double weight)
	{
		_text = text;
		_weight = weight;
	}
	public TagCloudDataItem(string text, string navigateUrl, double weight)
	{
		_text = text;
		_navigateUrl = navigateUrl;
		_weight = weight;
	}
}
````
````VB
''' <summary>
''' This class is only for demonstration purposes.
''' The class used in this example resides in the App_Code/TagCloud folder
''' </summary>
Public Class TagCloudDataItem
	Private _text As String
	Private _weight As Double
	Private _navigateUrl As String
	Private _accessKey As String
	Private _tabIndex As Short
	Private _toolTip As String
	Private _value As String

	Public Property Text() As String
		Get
			Return _text
		End Get
		Set(ByVal value As String)
			_text = value
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
	Public Property NavigateUrl() As String
		Get
			Return _navigateUrl
		End Get
		Set(ByVal value As String)
			_navigateUrl = value
		End Set
	End Property
	Public Property AccessKey() As String
		Get
			Return _accessKey
		End Get
		Set(ByVal value As String)
			_accessKey = value
		End Set
	End Property
	Public Property TabIndex() As Short
		Get
			Return _tabIndex
		End Get
		Set(ByVal value As Short)
			_tabIndex = value
		End Set
	End Property
	Public Property ToolTip() As String
		Get
			Return _toolTip
		End Get
		Set(ByVal value As String)
			_toolTip = value
		End Set
	End Property
	Public Property Value() As String
		Get
			Return _value
		End Get
		Set(ByVal value As String)
			_value = value
		End Set
	End Property
	Public Sub New()
	End Sub
	Public Sub New(ByVal text As String, ByVal weight As Double)
		_text = text
		_weight = weight
	End Sub
	Public Sub New(ByVal text As String, ByVal navigateUrl As String, ByVal weight As Double)
		_text = text
		_navigateUrl = navigateUrl
		_weight = weight
	End Sub
End Class
````

## Using a WebService

1. In the properties pane for the **RadTagCloud** component, set the **WebServiceSettings** property to identify the Web service and service method:
	* Set the Path sub-property to the URL for the Web service.
	* Set the Method sub-property to the name of the method of the Web service that supplies child items.
	* Set the UseHttpGet sub-property to True to change the default HTTP method (POST).
	
	**ASP.NET**
	
		<telerik:RadTagCloud RenderMode="Lightweight" ID="RadTagCloud1" runat="server" OnClientItemsRequesting="itemsRequesting" 
			OnClientItemsRequested="itemsRequested"	OnClientItemsRequestFailed="itemsRequestFailed">
			<WebServiceSettings Path="VehiclesWeightByRating.asmx" Method="GetRadTagCloudItems" />
		</telerik:RadTagCloud>

2. When the WebServiceSettings property is set, an empty context request will be initiated automatically. You can trigger request to the service by calling the *requestItems()* client-side method. This method has a single parameter, which is sent as an argument to the Web service method.
>important It is important to know that all current items will be removed, before the new ones are populated.
>

	**JavaScript**
	
		function clientFunction()
		{
			//...
			var context = "some value";
			tagCloud.requestItems(context);
			//...
		}	

3. Optionally, set the **OnClientItemsRequesting** property to a client-side event handler that passes context information to the Web service. The Web service can use this context information to determine what child items to return or what properties to set on those child items.

	**JavaScript**
	
		//Fired before the request is sent to the Web Service
		function itemsRequesting(sender, args)
		{
			//If you want to cancel the request use
			//args.set_cancel(true);

			//The args.get_context()/args.set_context(value) methods get/set the parameter which will be sent to the Web Service.
			var context = args.get_context();
		}

4. Optionally, set the **OnClientItemsRequested** and **OnClientItemsRequestFailed** properties to client-side event handlers that respond when the Web service has successfully loaded child items or when the Web service has generated an error while trying to service the item request, respectively.

	**JavaScript**
	
		//Fired when the items are successfully loaded.
		function itemsRequested(sender, args)
		{
			//...
		}

		//Fired when the request for the items fails.
		function itemsRequestFailed(sender, args)
		{
			// Disable the notifying error alert.
			args.set_cancelErrorAlert(true);
			//...
		}

5. To use the integrated WebService support of **RadTagCloud**, the WebService should have the following signature:


````C#
[ScriptService]
public class WebServiceName : WebService
{
	[WebMethod]
	public TagCloudDataItem[] GetRadTagCloudItems(Object context)
	{
		List<TagCloudDataItem> result = new List<TagCloudDataItem>();
		//.......
		TagCloudDataItem item = new TagCloudDataItem();
		item.Text = "Item";
		item.Weight = 6.6;
		item.NavigateUrl = "NavigateUrl";
		item.AccessKey = "AccessKey";
		item.TabIndex = 5;
		item.ToolTip = "ToolTip";
		item.Value = "ToolTip";

		result.Add(item);
		//.......
		return result.ToArray();
	}
}
````
````VB
<ScriptService()> _
Public Class WebServiceName
	Inherits WebService
	<WebMethod()> _
	Public Function GetRadTagCloudItems(ByVal context As [Object]) As TagCloudDataItem()
		Dim result As New List(Of TagCloudDataItem)()
		'.......
		Dim item As New TagCloudDataItem()
		item.Text = "Item"
		item.Weight = 6.6
		item.NavigateUrl = "NavigateUrl"
		item.AccessKey = "AccessKey"
		item.TabIndex = 5
		item.ToolTip = "ToolTip"
		item.Value = "ToolTip"

		result.Add(item)
		'.......
		Return result.ToArray()
	End Function
End Class
````

>note The class that identifies an item is the same for both types of web services and is shown in the beginning of the article.
>

For a live example of using a Web service to populate items, see the [Web Service demo](http://demos.telerik.com/aspnet-ajax/tagcloud/examples/webservice/defaultcs.aspx).

## Using a WCF Web Service

1. In the properties pane for the **RadTagCloud** component, set the **WebServiceSettings** property to identify the WCF Web service and service method:
	* Set the Path sub-property to the URL for the Web service.
	* Set the Method sub-property to the name of the method of the WCF Web service that supplies child items.

	**ASP.NET**
	
		<telerik:RadTagCloud RenderMode="Lightweight" ID="RadTagCloud1" runat="server"
			OnClientItemsRequesting="itemsRequesting"
			OnClientItemsRequested="itemsRequested"
			OnClientItemsRequestFailed="itemsRequestFailed">
			<WebServiceSettings Path="TagCloudWcfService.svc" Method="GetRadTagCloudItems" />
		</telerik:RadTagCloud>

	where the WCF WebService must be in the website, e.g.:

	**ASP.NET**
	
		<%@ ServiceHost Language="C#" Debug="true" Service="TagCloudWcfService" CodeBehind="~/App_Code/TagCloudWcfService.cs" %>


2. When the WebServiceSettings property is set, an empty context request will be initiated automatically. You can trigger request to the service by calling the *requestItems()* client-side method. This method has a single parameter, which is sent as an argument to the Web service method.
>important It is important to know that all current items will be removed, before the new ones are populated.

	>note Passing a value to a WCF service requires creating an object that will hold the data. This object will be serialized automatically. This object is received by the WCF WebService as a parameter of type IDictionary and you can access the value of the object you provided according to its name.

	**JavaScript**

		function clientFunction()
		{
			//...
			var context = { minUnitPrice: "500" };
			tagCloud.requestItems(context);
			//...
		}


3. Optionally, set the **OnClientItemsRequesting** property to a client-side event handler that passes context information to the Web service. The Web service can use this context information to determine what child items to return or what properties to set on those child items. Note that setting the context requires an object as shown above.

	**JavaScript**
	
		//Fired before the request is sent to the Web Service
		function itemsRequesting(sender, args)
		{
			//If you want to cancel the request use
			//args.set_cancel(true);

			//The args.get_context()/args.set_context(value) methods get/set the parameter which will be sent to the Web Service.
			var context = args.get_context();
		}

4. Optionally, set the **OnClientItemsRequested** and **OnClientItemsRequestFailed** properties to client-side event handlers that respond when the Web service has successfully loaded child items or when the Web service has generated an error while trying to service the item request, respectively.

	**JavaScript**
	
		//Fired when the items are successfully loaded.
		function itemsRequested(sender, args)
		{
			//...
		}

		//Fired when the request for the items fails.
		function itemsRequestFailed(sender, args)
		{
			// Disable the notifing error alert.
			args.set_cancelErrorAlert(true);
			//...
		}

5. To use the integrated WCF WebService support of **RadTagCloud**, the WCF WebService should have the following signature:

````C#
[ServiceContract(Namespace = "")]
[AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Allowed)]
public class TagCloudWcfService
{
	[OperationContract]
	public TagDataItem[] GetRadTagCloudItems(IDictionary context)
	{
		string argument = (string)context["minUnitPrice"];
		List<TagCloudDataItem> result = new List<TagCloudDataItem>();
		//.......
		TagCloudDataItem item = new TagCloudDataItem();
		item.Text = "Item";
		item.Weight = 6.6;
		item.NavigateUrl = "NavigateUrl";
		item.AccessKey = "AccessKey";
		item.TabIndex = 5;
		item.ToolTip = "ToolTip";
		item.Value = "ToolTip";

		result.Add(item);
		//.......
		return result.ToArray();
	}
}
````
````VB
<ServiceContract([Namespace] := "")> _
<AspNetCompatibilityRequirements(RequirementsMode:=AspNetCompatibilityRequirementsMode.Allowed)> _
Public Class TagCloudWcfService
	<OperationContract()> _
	Public Function GetRadTagCloudItems(context As IDictionary) As TagDataItem()
		Dim argument As String = DirectCast(context("minUnitPrice"), String)
		Dim result As New List(Of TagCloudDataItem)()
		'.......
		Dim item As New TagCloudDataItem()
		item.Text = "Item"
		item.Weight = 6.6
		item.NavigateUrl = "NavigateUrl"
		item.AccessKey = "AccessKey"
		item.TabIndex = 5
		item.ToolTip = "ToolTip"
		item.Value = "ToolTip"

		result.Add(item)
		'.......
		Return result.ToArray()
	End Function
End Class
````

>note The class that identifies an item is the same for both types of web services and is shown in the beginning of the article.

For a live example of using a WCF Web service to populate items, see the [WCF Web Service demo](http://demos.telerik.com/aspnet-ajax/tagcloud/examples/wcfservice/defaultcs.aspx).
