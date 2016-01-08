---
title: Connecting to Various DataSource controls
page_title: Connecting to Various DataSource controls | RadClientDataSource for ASP.NET AJAX Documentation
description: Connecting to Various DataSource controls
slug: clientdatasource/connecting-to-various-data-sources
tags: connecting,to,various,data,source,controls
published: True
position: 4
---

# Connecting to Various Data Sources


This feature was introduced in the **Q1 2016** version of the controls. It enables you to use a regular server-side DataSource control and retrieve the data from it via **RadClientDataSource**. This way you can have client-side binding without the need to implement and configure a WebService. You can use any declarative server-side control - SqlDataSource, EntityDataSource, ObjectDataSource, etc.

Let's consider the following scenario. You have a control (e.g. **RadGrid**) bound to an **EntityDataSource** control and you would like to keep using the server operations provided by the Entity. At the same time you would prefer to bind the grid on the client-side to have smoother performance. 

In this situation you can keep the **EntityDataSource** as is and add a **RadClientDataSource** control that is bound to it. Then, bind the **RadGrid** control to the **RadClientDataSource**. With this setup you will be able to keep using the server operations (e.g. Paging, Sorting) and have client-side binding at the same time without the need of custom code. Everithing can be configured in the markup. The final markup would look similar to the snippet below:


````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server" Skin="Silk"
    ClientDataSourceID="RadClientDataSource1" AllowPaging="true" AllowSorting="true">

    <MasterTableView ClientDataKeyNames="CustomerID">
        <Columns>
            <telerik:GridBoundColumn DataField="CustomerID" HeaderText="Customer ID" ReadOnly="true">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="CompanyName" HeaderText="Company Name" ColumnEditorID="GridTextBoxEditor">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="ContactName" HeaderText="Contact Name" ColumnEditorID="GridTextBoxEditor">
            </telerik:GridBoundColumn>
            <telerik:GridBoundColumn DataField="ContactTitle" HeaderText="Contact Title" ColumnEditorID="GridTextBoxEditor">
            </telerik:GridBoundColumn>
        </Columns>
    </MasterTableView>
</telerik:RadGrid>


<telerik:RadClientDataSource ID="RadClientDataSource1" runat="server" EnableServerPaging="true" EnableServerSorting="true" AllowPaging="true">
    <DataSource>
        <DataSourceControlSettings DataSourceID="EntityDataSourceCustomers"
            DataKeyNames="CustomerID" DataFields="CompanyName, ContactName, ContactTitle" />
    </DataSource>
</telerik:RadClientDataSource>

<asp:EntityDataSource ID="EntityDataSourceCustomers" runat="server" ConnectionString="name=NorthwindReadWriteEntities"
    DefaultContainerName="NorthwindReadWriteEntities" EntitySetName="Customers" OrderBy="it.[ContactName]"
    EntityTypeFilter="Customer" EnableDelete="True" EnableFlattening="False" EnableInsert="True" EnableUpdate="True">
</asp:EntityDataSource>
````

The **RadClientDataSource** provides the following properties for configuration. They are available in the **DataSource-DataSourceControlSettings** section.



| Property | Description |
|---|---|
| DataSourceID | ID of the DataSource control to be used for binding |
| DataKeyNames | Specifies the fields used for insert/update operations. Data for these fields will be read-only and will be included in the Where clause of the insert/update queries. |
| DataFields | Specifies the fields that will be bound from the DataSource, if leaved empty, all fields available in the DataSource should be serialized from server to client. |
| AllowAutomaticUpdates | Define if the control should perform automatic Update operations. The default value is **false**. |
| AllowAutomaticInserts | Define if the control should perform automatic Insert operations. The default value is **false**. |
| AllowAutomaticDeletes | Define if the control should perform automatic Delete operations. The default value is **false**. |
| DataMember | Set the name of the view (if many) of the **DataSource** that will be used when binding. |
| DataModelID | *Used with Model Binding.* Define the ID of the Model |
| SelectMethod | *Used with Model Binding.* Define the Select Method that will be used to retrieve the data. |
| DeleteMethod | *Used with Model Binding.* Define the Delete Method that will be used. |
| UpdateMethod | *Used with Model Binding.* Define the Update Method that will be used for updating records. |


For live illustration of the functionality check out the online demo [here](http://demos.telerik.com/aspnet-ajax/clientdatasource/functionality/binding-to-datasourcecontrols/defaultcs.aspx).


