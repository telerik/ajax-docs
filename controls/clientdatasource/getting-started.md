---
title: Getting Started
page_title: Getting Started | RadClientDataSource for ASP.NET AJAX Documentation
description: Getting Started
slug: clientdatasource/getting-started
tags: getting,started
published: True
position: 1
---

# Getting Started



The **RadClientDataSource** control is a server-side **ASP.NET AJAX wrapper** of the **Kendo.UI DataSource** component, which could be used for performing various data source operations on the client. It fully supports binding to different kinds of web services and also provides both local and server-side support for **sorting**, **paging**, **filtering**, **grouping**, and **aggregates**.

With the steps below, we will show how to entirely bind a **RadGrid** control to a **RadClientDataSource** declaratively by involving the **Design Time** of the control.



1. From the **Toolbox** in **Visual Studio**, drag a **RadClientDataSource** and a **RadGrid** instances to the design surface of your page.

1. Set a **WebService** using the **Url** property. In this example we are using "**http://demos.telerik.com/kendo-ui/service/Northwind.svc/Products**"

    **ASP.NET**

        <telerik:RadClientDataSource ID="RadClientDataSource1" runat="server">
            <DataSource>
                <WebServiceDataSourceSettings ServiceType="OData">
                    <Select Url="http://demos.telerik.com/kendo-ui/service/Northwind.svc/Products" DataType="JSONP" />
                </WebServiceDataSourceSettings>
            </DataSource>
        </telerik:RadClientDataSource>


1. Configure the **Model Schema** and set the **Fileds** for the data source control

    **ASP.NET**

        <telerik:RadClientDataSource ID="RadClientDataSource1" runat="server">
            <DataSource>
                <WebServiceDataSourceSettings ServiceType="OData">
                    <Select Url="http://demos.telerik.com/kendo-ui/service/Northwind.svc/Products" DataType="JSONP" />
                </WebServiceDataSourceSettings>
            </DataSource>
            <Schema>
                <Model>
                    <telerik:ClientDataSourceModelField FieldName="ProductName" DataType="String" />
                    <telerik:ClientDataSourceModelField FieldName="QuantityPerUnit" DataType="String" />
                    <telerik:ClientDataSourceModelField FieldName="UnitPrice" DataType="Number" />
                    <telerik:ClientDataSourceModelField FieldName="UnitsInStock" DataType="Number" />
                    <telerik:ClientDataSourceModelField FieldName="Discontinued" DataType="Boolean" />
                </Model>
            </Schema>
        </telerik:RadClientDataSource>


1. Click on the smart tag of **RadGrid** controland specify the **ClientdataSourceID**

    ![client-data-source-id](images/client-data-source-id.png)

1. Specify the RadGrid columns, their **DataFields** and the other required settings like **paging**, **filtering** ect.

    **ASP.NET**

        <telerik:RadClientDataSource ID="RadClientDataSource1" runat="server">
            <DataSource>
                <WebServiceDataSourceSettings ServiceType="OData">
                    <Select Url="http://demos.telerik.com/kendo-ui/service/Northwind.svc/Products" DataType="JSONP" />
                </WebServiceDataSourceSettings>
            </DataSource>
            <Schema>
                <Model>
                    <telerik:ClientDataSourceModelField FieldName="ProductName" DataType="String" />
                    <telerik:ClientDataSourceModelField FieldName="QuantityPerUnit" DataType="String" />
                    <telerik:ClientDataSourceModelField FieldName="UnitPrice" DataType="Number" />
                    <telerik:ClientDataSourceModelField FieldName="UnitsInStock" DataType="Number" />
                    <telerik:ClientDataSourceModelField FieldName="Discontinued" DataType="Boolean" />
                </Model>
            </Schema>
        </telerik:RadClientDataSource>
        <telerik:RadGrid runat="server" ID="RadGrid1" ClientDataSourceID="RadClientDataSource1"
            RenderMode="Lightweight" Width="306px" Skin="Metro">
            <MasterTableView DataKeyNames="ProductName">
                <Columns>
                    <telerik:GridBoundColumn DataField="ProductName" HeaderText="ProductName" UniqueName="column">
                    </telerik:GridBoundColumn>
                    <telerik:GridBoundColumn DataField="UnitPrice" HeaderText="UnitPrice" UniqueName="column1">
                    </telerik:GridBoundColumn>
                    <telerik:GridBoundColumn DataField="UnitsInStock" HeaderText="UnitsInStock" UniqueName="column2">
                    </telerik:GridBoundColumn>
                    <telerik:GridBoundColumn DataField="Discontinued" HeaderText="Discontinued" UniqueName="column3">
                    </telerik:GridBoundColumn>
                </Columns>
            </MasterTableView>
        </telerik:RadGrid>

    >tip Note that **autogenerated** columns and **Hierarchical structures** of **RadGrid** control are not supported with **RadClientDataSource** Control binding .

1. We are ready to view the page in the browser

    ![client-data-source-grid](images/client-data-source-grid.png)


