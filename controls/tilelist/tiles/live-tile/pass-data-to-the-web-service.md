---
title: Pass Data to the Web Service
page_title: Pass Data to the Web Service - RadTile
description: Check our Web Forms article about Pass Data to the Web Service.
slug: tilelist/tiles/live-tile/pass-data-to-the-web-service
tags: pass,data,to,the,web,service
published: True
position: 2
---

# Pass Data to the Web Service



This article explains how to pass information to the web service the **LiveTile** uses to get its contents. This data	is a string that can be used to identify the request and prepare the response accordingly.

The parameter that is passed to the web service is the **Value** property of the **LiveTile**. The sections	below explain how to access it in the [different types of services that are supported]({%slug tilelist/tiles/live-tile/loading-data%}).	At the end of the article you can also see how you can change the value dynamically just before the request is performed.

## Passing Data to a Web Service

The **Value** property of the **LiveTile** is passed to the web service method (**Example 1**) and it can be obtained by casting theobject received as an argument, to a Dictionary with a string key called *Value*.

**Example 1: How to access the arguments a web service receives.**



````C#
[WebMethod]
public string GetServerData(object context)
{
	string value = "defaultValue";
	if (context != null)
	{
		IDictionary<string, object> contextDictionary = (IDictionary<string, object>)context;
		value = ((string)contextDictionary["Value"]);
	}
	//use the information here to return concrete information
	return value;
}
````
````VB
<WebMethod> _
Public Function GetServerData(context As Object) As String
	Dim value As String = "defaultValue"
	If context IsNot Nothing Then
		Dim contextDictionary As IDictionary(Of String, Object) = DirectCast(context, IDictionary(Of String, Object))
		value = DirectCast(contextDictionary("Value"), String)
	End If
	'use the information here to return concrete information
	Return value
End Function
````




This example returns the value that the **LiveTile** passes, or uses some default setting. By using such logic, you can have several **LiveTiles** that request similar data use one service and distinguish them by their values. **Example 2** shows two simple **LiveTiles** that use the same method and will get different data. They use the simplest template possible. You can find more information on using complex objects in the [Loading Data help article]({%slug tilelist/tiles/live-tile/loading-data%}).

**Example 2: Two simple LiveTiles that request data from the same web service with different arguments.**

````ASP.NET
<telerik:RadLiveTile runat="server" ID="RadLiveTile1" Value="first">
	<ClientTemplate>
		Data returned from the server: <br />
		#=data#
	</ClientTemplate>
	<WebServiceSettings Method="GetServerData" Path="TileWebService.asmx" />
</telerik:RadLiveTile>
<telerik:RadLiveTile runat="server" ID="RadLiveTile2" Value="second">
	<ClientTemplate>
		Data returned from the server: <br />
		#=data#
	</ClientTemplate>
	<WebServiceSettings Method="GetServerData" Path="TileWebService.asmx" />
</telerik:RadLiveTile>
````



## Passing Data to a WCF Service

The **Value** property of the **LiveTile** is passed to a WCF service wrapped in an object and to access it, you need a strongly-typed object as the argument of the method. **Examples 3-6** demonstrate a simple **LiveTile** that requests data:

**Example 3: A sample WCF class and method that will return information.**



````C#
[ServiceContract(Namespace = "")]
[AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Allowed)]
public class TileService
{
	[OperationContract]
	[WebInvoke(Method = "POST", RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
	public CustomObject GetServerData(RadLiveTileContext context)
	{
		string value = "Janet";//a default value
		if (context != null)
		{
			value = context.Value;
		}
		//use the information here to return concrete information
		CustomObject item = CustomObject.GetDataItems().Where(p => p.Name.Contains(value)).First();
		return item;
	}
}
````
````VB
<ServiceContract([Namespace]:="")> _
<AspNetCompatibilityRequirements(RequirementsMode:=AspNetCompatibilityRequirementsMode.Allowed)> _
Public Class TileService
	<OperationContract()> _
	<WebInvoke(Method:="POST", RequestFormat:=WebMessageFormat.Json, ResponseFormat:=WebMessageFormat.Json)> _
	Public Function GetServerData(context As RadLiveTileContext) As CustomObject
		Dim value As String = "Janet" 'a default value
		If context IsNot Nothing Then
			value = context.Value
		End If
		'use the information here to return concrete information
		Dim item As CustomObject = CustomObject.GetDataItems().Where(Function(p) p.Name.Contains(value)).First()
		Return item
	End Function
End Class
````




**Example 4: The class that is needed to access the value from the LiveTile in a WCF service.**



````C#
[Serializable]
public class RadLiveTileContext : Dictionary<string, object>
{
	public string Value
	{
		get { return (string)this["Value"]; }
		set { this["Value"] = value; }
	}
}
````
````VB
<Serializable()> _
Public Class RadLiveTileContext
	Inherits Dictionary(Of String, Object)
	Public Property Value() As String
		Get
			Return DirectCast(Me("Value"), String)
		End Get
		Set(value As String)
			Me("Value") = value
		End Set
	End Property
End Class
````



**Example 5: A sample class that will provide data to the service.**



````C#
[DataContract]
public class CustomObject
{
	[DataMember]
	public string Name { get; set; }
	[DataMember]
	public string Description { get; set; }

	public CustomObject(string name, string description)
	{
		Name = name;
		Description = description;
	}

	public static List<CustomObject> GetDataItems()
	{
		List<CustomObject> itemsData = new List<CustomObject>();

		itemsData.Add(new CustomObject("Janet Leverling", "Sales Representative"));
		itemsData.Add(new CustomObject("Margaret Peacock", "Sales Associate"));
		itemsData.Add(new CustomObject("Steven Buchanan", "Sales Manager"));

		return itemsData;
	}
}	
````
````VB
<DataContract()> _
Public Class CustomObject
	<DataMember()> _
	Public Property Name() As String
		Get
			Return m_Name
		End Get
		Set(value As String)
			m_Name = Value
		End Set
	End Property
	Private m_Name As String
	<DataMember()> _
	Public Property Description() As String
		Get
			Return m_Description
		End Get
		Set(value As String)
			m_Description = Value
		End Set
	End Property
	Private m_Description As String

	Public Sub New(name**1 As String, description**2 As String)
		Name = name**1
		Description = description**2
	End Sub

	Public Shared Function GetDataItems() As List(Of CustomObject)
		Dim itemsData As New List(Of CustomObject)()

		itemsData.Add(New CustomObject("Janet Leverling", "Sales Representative"))
		itemsData.Add(New CustomObject("Margaret Peacock", "Sales Associate"))
		itemsData.Add(New CustomObject("Steven Buchanan", "Sales Manager"))

		Return itemsData
	End Function
End Class
````



**Example 6: Two simple LiveTiles that request information for different people from the class in Example 5.**

````ASP.NET
<telerik:RadLiveTile runat="server" ID="RadLiveTile1" Value="Margaret">
	<ClientTemplate>
		Data returned from the server: <br />
		#=Name# is a #=Description#
	</ClientTemplate>
	<WebServiceSettings Method="GetServerData" Path="TileService.svc" />
</telerik:RadLiveTile>
<telerik:RadLiveTile runat="server" ID="RadLiveTile2" Value="Steven">
	<ClientTemplate>
		Data returned from the server: <br />
		#=Name# is a #=Description#
	</ClientTemplate>
	<WebServiceSettings Method="GetServerData" Path="TileService.svc" />
</telerik:RadLiveTile>
````



## Passing Data to Page Methods

Data is not passed to page methods and the **LiveTile** cannot be identified uniquely. Thus, if different data is needed, different methods will need to be defined and configured in the tiles.

## Passing Data to an ODataDataSource Control

While a **LiveTile** can use an **ODataDataSource** control as its data source, in this case, the data that is returned is controlled by the data source controland it should be configured to return the expected information.

You can see an example in the [Loading Data help article]({%slug tilelist/tiles/live-tile/loading-data%}), in the *Loading Data From ODataDataSource* section. It shows how the data source itself can be filtered in its own event (**Example 7**).

**Example 7: Filtering an ODataDataSource control.**

````ASP.NET
<telerik:RadLiveTile ID="RadLiveTile3" runat="server" 
    ODataDataSourceID="RadODataDataSource1" DataModelID="Employee">
    <ClientTemplate>
                <strong>Loaded from ODataDataSource: </strong><br />
				#= FirstName # #= LastName # <br /> #= Title #
    </ClientTemplate>
</telerik:RadLiveTile>

<telerik:RadODataDataSource runat="server" ID="RadODataDataSource1">
    <Transport>
        <Read Url="http://demos.kendoui.com/service/Northwind.svc/" />
    </Transport>
    <Schema>
        <telerik:DataModel ModelID="Employee" Set="Employees">
            <telerik:DataModelField FieldName="LastName" />
            <telerik:DataModelField FieldName="FirstName" />
            <telerik:DataModelField FieldName="Title" />
        </telerik:DataModel>
    </Schema>
    <ClientEvents Requesting="Requesting" />
</telerik:RadODataDataSource>

<script type="text/javascript">
    function Requesting(sender, args) {
        args.set_filterExpressions({
            field: "Title",
            operator: "eq",
            value: "Sales Manager"
        });
    }
</script>
````



Another option is to change the filter in the [OnClientDataLoading event]({%slug tilelist/tiles/client-side-programming/events/livetile-specific/onclientdataloading%}), because the event arguments expose the data source arguments. Essentially, the logic is the same, but you can apply filters per **LiveTile** (e.g., by using different **OnClientDataLoading** event handlers, see **Example 8**) and use the same **ODataDataSource** control.

**Example 8: Filtering the data source in the OnClientDataLoading event.**

````JavaScript
<script type="text/javascript">
	function OnClientDataLoading(sender, args)
	{
		args.get_value().filter.filters.push({
			field: "CategoryID",
			operator: "eq",
			value: Math.floor(Math.random() * 9)
		});
	}
</script>
````



## Change the Value for the Given Request

Just before the request is initiated, the [OnClientDataLoading event]({%slug tilelist/tiles/client-side-programming/events/livetile-specific/onclientdataloading%}) is fired.You can use it to change the value that will be passed in the request. In **Example 7** you saw how it can be used to filter an **ODataDataSource** control. **Example 9** demonstrates how you can change the value passed to web services and WCF services. You need to emulate the JSON object that is sentvia the `set_value()` method the event arguments object exposes.

**Example 9: Changing the value passed to a WCF/Web service.**

````JavaScript
<script type="text/javascript">
	function OnClientDataLoading(sender, args)
	{
		//Change the value of the "Value" key
		//in this example, the new string that is set is "myNewValue"
		args.set_value({
			"Key": "Value",
			"Value": "myNewValue"
		});
	}
</script>
````



# See Also

 * [Loading Data]({%slug tilelist/tiles/live-tile/loading-data%})

 * [OnClientDataLoading Event]({%slug tilelist/tiles/client-side-programming/events/livetile-specific/onclientdataloading%})
