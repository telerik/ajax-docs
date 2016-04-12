---
title: OnCustomParameter
page_title: OnCustomParameter | RadClientDataSource for ASP.NET AJAX Documentation
description: OnCustomParameter
slug: clientdatasource/client-side-programming/events/oncustomparameter
tags: events
published: True
position: 2
---

# OnCustomParameter Event

**CustomParameter** event allows you to convert the request parameters to a format suitable for the remote service. By default the data source sends the parameters using jQuery's [conventions](http://api.jquery.com/jQuery.param/). The event is commonly used to pass additional parameters to the server. It is important to note that the names of the custom parameters should match the method's arguments names. 

The event is fired after the request started but before the data is requested. This way you can set custom parameters that will be sent to the server. The following table lists all the public methods of the event.


| Method | Description |
| ------ | ------ |
| **get_data** |The model which will be sent to the remote service. The value specified in the data field of the transport settings (create, read, update or destroy) is included as well.|
| **get_type** |The type of the request which the data source makes. The supported values are "create", "read", "update" and "destroy".|
| **get_parameterFormat** |Get the custom parameters that will be sent to the server.|
| **set_parameterFormat** |Set the custom parameters that will be sent to the server.|

The following example demonstrates how to use **CustomParameter** client event and pass parameter to a **WebMethod**.

````APS.NET
<form id="form1" runat="server">
    <telerik:RadScriptManager ID="RadScriptManager1" runat="server">
        <Scripts>
            <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.Core.js" />
            <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQuery.js" />
            <asp:ScriptReference Assembly="Telerik.Web.UI" Name="Telerik.Web.UI.Common.jQueryInclude.js" />
        </Scripts>
    </telerik:RadScriptManager>
    <script type="text/javascript">
        function ParameterMap(sender, args) {
            args.set_parameterFormat("{ 'productName': 'Filo Mix' }");
        }

    </script>
    <telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
    </telerik:RadAjaxManager>
    <telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server" ClientDataSourceID="RadClientDataSource1" AutoGenerateColumns="false" PageSize="4">
        <MasterTableView CommandItemDisplay="Top">
            <Columns>
                <telerik:GridBoundColumn DataField="ProductName" HeaderText="Product Name"></telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="UnitPrice" HeaderText="Unit Price"></telerik:GridBoundColumn>
                <telerik:GridBoundColumn DataField="UnitsInStock" HeaderText="Units In Stock"></telerik:GridBoundColumn>
            </Columns>
        </MasterTableView>
    </telerik:RadGrid>

    <telerik:RadClientDataSource ID="RadClientDataSource1" runat="server">
        <ClientEvents OnCustomParameter="ParameterMap" />
        <DataSource>
            <WebServiceDataSourceSettings BaseUrl="WebPageTest.aspx/">
                <Select Url="GetData" RequestType="Post" DataType="JSON" ContentType="application/json; charset=utf-8" />
            </WebServiceDataSourceSettings>
        </DataSource>
        <Schema>
            <Model ID="ProductID">
                <telerik:ClientDataSourceModelField FieldName="ProductID" DataType="Number" />
                <telerik:ClientDataSourceModelField FieldName="ProductName" DataType="String" />
                <telerik:ClientDataSourceModelField FieldName="UnitPrice" DataType="Number" />
                <telerik:ClientDataSourceModelField FieldName="UnitsInStock" DataType="Number" />
            </Model>
        </Schema>
    </telerik:RadClientDataSource>
</form>
 ````
 ````C#
[WebMethod]
public static IQueryable<Model.ReadWrite.Product> GetData(string productName)
{
    NorthwindReadWriteEntities dbContext = new NorthwindReadWriteEntities();

    var result = from products in dbContext.Products
                    where products.ProductName == productName
                    select products;
    return result;
}
````

# See Also

 * [Client-side Events]({%slug clientdatasource/client-side-programming/events/overview%})
 * [Binding to Telerik ClientDataSource](http://demos.telerik.com/aspnet-ajax/grid/examples/data-binding/client-side/client-data-source-binding/defaultcs.aspx)
