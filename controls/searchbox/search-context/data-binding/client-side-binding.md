---
title: Client-side Binding
page_title: Client-side Binding | RadSearchBox for ASP.NET AJAX Documentation
description: Client-side Binding
slug: searchbox/search-context/data-binding/client-side-binding
tags: client-side,binding
published: True
position: 1
---

# Client-side Binding



## Web Service binding

The items in the SearchContext drop-down can be also loaded from Web Service by setting the WebServiceSettings for SearchContext and the appropriate path and name. In this case one can assign the ImageUrl of an item directly in the service method as below:

````ASPNET
		 <telerik:RadSearchBox runat="server" ID="RadSearchBox4"  DataSourceID="SqlDataSource3" Label="Three"
	                 DataTextField="LastName" DataValueField="FirstName" DataContextKeyField="EmployeeID" >
	        <DropDownSettings Height="400" Width="300" />
	        <Localization LoadingItemsMessage="Loading Items" />
	        <SearchContext  >
	            <WebServiceSettings Path="ContextService.svc" Method="GetContextResults"/>
	        </SearchContext>
	    </telerik:RadSearchBox>
````





````C#
	
	    [OperationContract]
	    public SearchContextItemData[] GetContextResults(object context)
	    {
	        List<SearchContextItemData> result = new List<SearchContextItemData>();
	
	        for (int i = 0; i < 10; i++)
	        {
	            SearchContextItemData itemData = new SearchContextItemData();
	            itemData.Text = "Item" + i.ToString();
	            itemData.Key = i.ToString();
	            itemData.ImageUrl = "small.png";
	            result.Add(itemData);
	        }
	
	        return result.ToArray();
	    }
	
````
````VB.NET
	
	  <OperationContract> _
	    Public Function GetContextResults(context As Object) As SearchContextItemData()
	        Dim result As New List(Of SearchContextItemData)()
	
	        For i As Integer = 0 To 9
	            Dim itemData As New SearchContextItemData()
	            itemData.Text = "Item" + i.ToString()
	            itemData.Key = i.ToString()
	            itemData.ImageUrl = "small.png"
	            result.Add(itemData)
	        Next
	
	        Return result.ToArray()
	    End Function
	
````


## OData binding

When SearchContext is bound to **RadODataDataSource** control, its **DataModelID** property should be set to a Model ID from the data source. In such scenario in a similar manner as when the control is bound programatically, the **DataContextKeyField** field set to the SearchBox will be used as a context field. In order to set ImageUrl for the context items the **OnClientItemDataBound** event of the Search Context could be used as shown below:

````ASPNET
		<telerik:RadODataDataSource runat="server" ID="DataSource1">
	        <Transport>
	            <Read Url="http://demos.kendoui.com/service/Northwind.svc/"></Read>
	        </Transport>
	        <Schema>
	            <telerik:DataModel ModelID="Product" Set="Products">
	                <telerik:DataModelField FieldName="ProductID" />
	                <telerik:DataModelField FieldName="ProductName" />
	            </telerik:DataModel>
	                <telerik:DataModel ModelID="Supplier" Set="Suppliers">
	                <telerik:DataModelField FieldName="SupplierID" />
	                <telerik:DataModelField FieldName="ContactName" />
	            </telerik:DataModel>
	        </Schema>
	    </telerik:RadODataDataSource>
	        <telerik:RadSearchBox runat="server" ID="RadSearchBox1"
	            ODataDataSourceID="DataSource1"
	            DataModelID="Product"
	            DataKeyNames="ProductID, ProductName"
	            DataValueField="ProductID"
	            DataTextField="ProductName"
	            DataContextKeyField="SupplierID" >
	            <DropDownSettings Height="400" Width="300" />
	            <SearchContext DataModelID="Supplier" DataKeyField="SupplierID" 
	                DataTextField="ContactName"  OnClientItemDataBound="OnClientItemDataBound">
	            </SearchContext>
	        </telerik:RadSearchBox>
	        <script type="text/javascript">
	            function OnClientItemDataBound(sender, args) {
	                var contactName = args.get_dataItem().ContactName;
	                args.get_item().set_imageUrl(contactName + "_small.png");
	            }
	        </script>
````


