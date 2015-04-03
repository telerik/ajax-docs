---
title: Loading Data
page_title: Loading Data | UI for ASP.NET AJAX Documentation
description: Loading Data
slug: tilelist/tiles/live-tile/loading-data
tags: loading,data
published: True
position: 1
---

# Loading Data



## Client Template

The template that will be populated when the RadLiveTile is databound, is defined in the inner property __ClientTemplate__. This property allows for runtime evaluation of the __data__ object associated with the populated data, which means that additional fields from the datasource can be displayed as the content.

The required template is - __#= data.<fieldName> #__. You can concatenate a few of them for separate evaluation to get the data from several fields, while custom content can be hardcoded between them. Also, you can reference a field directly by using the field name in the template - __#= <fieldName> #__.

If the returned data from the datasource is not an object with fields, but a string, number or boolean value, it can be accessed directly via the data object - __#= data #__.

The __ClientTemplate__ is utilizing the [Kendo UI Templates](http://docs.kendoui.com/getting-started/framework/templates/overview).

## Loading Data From Web Service

The RadLiveTile can be populated from a [Web Service](http://msdn.microsoft.com/en-us/library/t745kdsh%28v=vs.90%29.aspx) by setting the following properties of the inner property __WebServiceSettings__:

* __Path__ - the location of the web service.

* __Method__ - the method of the web service that returns the data to the LiveTile.

The following example shows how to setup the LiveTile in this scenario:

>tabbedCode

````ASPNET
	        <telerik:RadLiveTile ID="RadLiveTile1" runat="server">
	            <WebServiceSettings Path="SampleService.asmx" Method="GetEmployeesData"></WebServiceSettings>
	            <ClientTemplate>
	                        <strong>Loaded from web service: </strong><br />
							#= Name # </br> #= Description #
	            </ClientTemplate>
	        </telerik:RadLiveTile>
````



````C#
	
	    [WebMethod]
	    public CustomObject GetEmployeesData()
	    {
	        return CustomObject.GetDataItems().First();
	    }
````



````VB.NET
	
	    <WebMethod()> _
	    Public Function GetVehicalData() As CustomObject
	        Return CustomObject.GetDataItems().First()
	    End Function
	
	#End Region
	
	#Region tiles-livetile-loading-data-vb-2
	
	    <OperationContract> _
	    Public Function GetEmployeesData() As CustomObject
	        Dim item As CustomObject = CustomObject.GetDataItems().First()
	        Return item
	    End Function
	
	#End Region
	
	#Region tiles-livetile-loading-data-vb-4
	
	    <WebMethod> _
	    Public Shared Function GetEmployee() As CustomObject
	        Dim item As CustomObject = CustomObject.GetDataItems().First()
	        Return item
	    End Function
	
	#End Region
	
	End Class


>end

Below is the definition of the class __CustomObject__

>tabbedCode

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
	            itemsData.Add(new CustomObject("Margaret Peacock", "Sales Representative"));
	            itemsData.Add(new CustomObject("Steven Buchanan", "Sales Manager"));
	
	            return itemsData;
	        }
	    }
	
````



````VB.NET
	    <DataContract> _
	    Public Class CustomObject
	        <DataMember> _
	        Public Property Name() As String
	            Get
	                Return m_Name
	            End Get
	            Set(value As String)
	                m_Name = Value
	            End Set
	        End Property
	        Private m_Name As String
	        <DataMember> _
	        Public Property Description() As String
	            Get
	                Return m_Description
	            End Get
	            Set(value As String)
	                m_Description = Value
	            End Set
	        End Property
	        Private m_Description As String
	
	        Public Sub New(name__1 As String, description__2 As String)
	            Name = name__1
	            Description = description__2
	        End Sub
	
	        Public Shared Function GetDataItems() As List(Of CustomObject)
	            Dim itemsData As New List(Of CustomObject)()
	
	            itemsData.Add(New CustomObject("Janet Leverling", "Sales Representative"))
	            itemsData.Add(New CustomObject("Margaret Peacock", "Sales Representative"))
	            itemsData.Add(New CustomObject("Steven Buchanan", "Sales Manager"))
	
	            Return itemsData
	        End Function
	    End Class
	#End Region
	
	#Region tiles-livetile-loading-data-vb-1
	
	    <WebMethod()> _
	    Public Function GetVehicalData() As CustomObject
	        Return CustomObject.GetDataItems().First()
	    End Function
	
	#End Region
	
	#Region tiles-livetile-loading-data-vb-2
	
	    <OperationContract> _
	    Public Function GetEmployeesData() As CustomObject
	        Dim item As CustomObject = CustomObject.GetDataItems().First()
	        Return item
	    End Function
	
	#End Region
	
	#Region tiles-livetile-loading-data-vb-4
	
	    <WebMethod> _
	    Public Shared Function GetEmployee() As CustomObject
	        Dim item As CustomObject = CustomObject.GetDataItems().First()
	        Return item
	    End Function
	
	#End Region
	
	End Class


>end

## Loading Data From WCF Service

The RadLiveTile can be populated from a [WCF Service](http://msdn.microsoft.com/en-us/library/bb412167.aspx) by setting the following properties of the inner property __WebServiceSettings__:

* __Path__ - the location of the WCF service.

* __Method__ - the method of the WCF service that returns the data to the LiveTile.

The configuration of the LiveTile will be as follows:

>tabbedCode

````ASPNET
	        <telerik:RadLiveTile ID="RadLiveTile2" runat="server">
	            <WebServiceSettings Path="SampleService.svc" Method="GetEmployeesData"></WebServiceSettings>
	            <ClientTemplate>  
	                        <strong>Loaded from WCF service: </strong><br />
							#= Name # </br> #= Description #
	            </ClientTemplate>
	        </telerik:RadLiveTile>
````



````C#
	
	    [OperationContract]
	    public CustomObject GetEmployeesData()
	    {
	        CustomObject item = CustomObject.GetDataItems().First();
	        return item;
	    }
	
````



````VB.NET
	
	    <OperationContract> _
	    Public Function GetEmployeesData() As CustomObject
	        Dim item As CustomObject = CustomObject.GetDataItems().First()
	        Return item
	    End Function
	
	#End Region
	
	#Region tiles-livetile-loading-data-vb-4
	
	    <WebMethod> _
	    Public Shared Function GetEmployee() As CustomObject
	        Dim item As CustomObject = CustomObject.GetDataItems().First()
	        Return item
	    End Function
	
	#End Region
	
	End Class


>end

Below is the definition of the class __CustomObject__

>tabbedCode

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
	            itemsData.Add(new CustomObject("Margaret Peacock", "Sales Representative"));
	            itemsData.Add(new CustomObject("Steven Buchanan", "Sales Manager"));
	
	            return itemsData;
	        }
	    }
	
````



````VB.NET
	    <DataContract> _
	    Public Class CustomObject
	        <DataMember> _
	        Public Property Name() As String
	            Get
	                Return m_Name
	            End Get
	            Set(value As String)
	                m_Name = Value
	            End Set
	        End Property
	        Private m_Name As String
	        <DataMember> _
	        Public Property Description() As String
	            Get
	                Return m_Description
	            End Get
	            Set(value As String)
	                m_Description = Value
	            End Set
	        End Property
	        Private m_Description As String
	
	        Public Sub New(name__1 As String, description__2 As String)
	            Name = name__1
	            Description = description__2
	        End Sub
	
	        Public Shared Function GetDataItems() As List(Of CustomObject)
	            Dim itemsData As New List(Of CustomObject)()
	
	            itemsData.Add(New CustomObject("Janet Leverling", "Sales Representative"))
	            itemsData.Add(New CustomObject("Margaret Peacock", "Sales Representative"))
	            itemsData.Add(New CustomObject("Steven Buchanan", "Sales Manager"))
	
	            Return itemsData
	        End Function
	    End Class
	#End Region
	
	#Region tiles-livetile-loading-data-vb-1
	
	    <WebMethod()> _
	    Public Function GetVehicalData() As CustomObject
	        Return CustomObject.GetDataItems().First()
	    End Function
	
	#End Region
	
	#Region tiles-livetile-loading-data-vb-2
	
	    <OperationContract> _
	    Public Function GetEmployeesData() As CustomObject
	        Dim item As CustomObject = CustomObject.GetDataItems().First()
	        Return item
	    End Function
	
	#End Region
	
	#Region tiles-livetile-loading-data-vb-4
	
	    <WebMethod> _
	    Public Shared Function GetEmployee() As CustomObject
	        Dim item As CustomObject = CustomObject.GetDataItems().First()
	        Return item
	    End Function
	
	#End Region
	
	End Class


>end

## Loading Data From ODataDataSource

The RadLiveTile can be populated from a [ODataDataSource](9a9b4db2-aeb8-44c2-b1d2-781280d18fdc) control by setting the following properties of the control:

* __ODataDataSourceID__ - the __ID__ of the ODataDataSource control that will provide the data.

* __DataModelID__ - the __ModelID__ of the __DataModel__ that will define the data object model of the LiveTile.

In this case the setup will be similar to the following example:

````ASPNET
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



Note the filter that is applied to the RadODataDataSource, so that a specific record from the data is populated in the RadLiveTile.

## Loading Data From Page Method

The RadLiveTile can be populated from a [page method](http://www.asp.net/ajaxlibrary/jquery_webforms_retrieve_data_from_pagemethod.ashx) by setting the following properties of the inner property __WebServiceSettings__:

* __Path__ - the current ASPX page.

* __Method__ - the name of the page method.

The example below shows this setup:

>tabbedCode

````ASPNET
	        <telerik:RadLiveTile ID="RadLiveTile4" runat="server">
	            <WebServiceSettings Path="Default.aspx" Method="GetEmployee"></WebServiceSettings>
	            <ClientTemplate>
	                        <strong>Loaded from page method: </strong><br />
							#= Name # </br> #= Description #
	            </ClientTemplate>
	        </telerik:RadLiveTile>
````



````C#
	
	    [WebMethod]
	    public static CustomObject GetEmployee()
	    {
	        CustomObject item = CustomObject.GetDataItems().First();
	        return item;
	    }
	
````



````VB.NET
	
	    <WebMethod> _
	    Public Shared Function GetEmployee() As CustomObject
	        Dim item As CustomObject = CustomObject.GetDataItems().First()
	        Return item
	    End Function
	
	#End Region
	
	End Class


>end

Below is the definition of the class __CustomObject__

>tabbedCode

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
	            itemsData.Add(new CustomObject("Margaret Peacock", "Sales Representative"));
	            itemsData.Add(new CustomObject("Steven Buchanan", "Sales Manager"));
	
	            return itemsData;
	        }
	    }
	
````



````VB.NET
	    <DataContract> _
	    Public Class CustomObject
	        <DataMember> _
	        Public Property Name() As String
	            Get
	                Return m_Name
	            End Get
	            Set(value As String)
	                m_Name = Value
	            End Set
	        End Property
	        Private m_Name As String
	        <DataMember> _
	        Public Property Description() As String
	            Get
	                Return m_Description
	            End Get
	            Set(value As String)
	                m_Description = Value
	            End Set
	        End Property
	        Private m_Description As String
	
	        Public Sub New(name__1 As String, description__2 As String)
	            Name = name__1
	            Description = description__2
	        End Sub
	
	        Public Shared Function GetDataItems() As List(Of CustomObject)
	            Dim itemsData As New List(Of CustomObject)()
	
	            itemsData.Add(New CustomObject("Janet Leverling", "Sales Representative"))
	            itemsData.Add(New CustomObject("Margaret Peacock", "Sales Representative"))
	            itemsData.Add(New CustomObject("Steven Buchanan", "Sales Manager"))
	
	            Return itemsData
	        End Function
	    End Class
	#End Region
	
	#Region tiles-livetile-loading-data-vb-1
	
	    <WebMethod()> _
	    Public Function GetVehicalData() As CustomObject
	        Return CustomObject.GetDataItems().First()
	    End Function
	
	#End Region
	
	#Region tiles-livetile-loading-data-vb-2
	
	    <OperationContract> _
	    Public Function GetEmployeesData() As CustomObject
	        Dim item As CustomObject = CustomObject.GetDataItems().First()
	        Return item
	    End Function
	
	#End Region
	
	#Region tiles-livetile-loading-data-vb-4
	
	    <WebMethod> _
	    Public Shared Function GetEmployee() As CustomObject
	        Dim item As CustomObject = CustomObject.GetDataItems().First()
	        Return item
	    End Function
	
	#End Region
	
	End Class


>end
