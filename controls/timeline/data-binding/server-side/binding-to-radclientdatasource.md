---
title: Binding to RadClientDataSource
page_title: Binding to RadClientDataSource | RadTimeline for ASP.NET AJAX Documentation
description: Binding to RadClientDataSource
slug: timeline/data-binding/server-side/binding-to-radclientdatasource
tags: binding,to,radclientdatasource
published: True
position: 5
---

# Binding to RadClientDataSource

##

The **RadClientDataSource** control allows you to connect to a web service and fetch data that you can bind to **RadTimeLine**. After configuring the client data source, you will need to set the corresponding data fields ( DataTitleField, DataSubtitleField, DataDateField, etc.) and the **ClientDataSourceID** property of the Timeline. All fields of the bound data can be also used in the `EventTemplate` of the control.

````ASP.NET
<telerik:RadTimeline runat="server" ID="RadTimeline1" DataTitleField="FullName"
    DataSubtitleField="Title"
    Orientation="Vertical"
    ClientDataSourceID="RadClientDataSource1"
    DataDateField="HireDate">
    <EventTemplate>
        <div class="k-card-header">
            <h5 class="k-card-title">#=data.TitleOfCourtesy# #=data.FirstName# #=data.LastName#</h5>
            <h6 class="k-card-subtitle">#=data.Title#</h6>
        </div>
        <div class="k-card-body">
            <div class="k-card-description">
            <p>
                #=data.City#, #=data.Country#
                #if(data.Region){ #
                , #=data.Region#
                #}#
            </p>
            # var images = data.images; 
            if(images && images.length > 0) { #
            <img src="#=images[0].src#" class="k-card-image">
            # } #
            </div>
        </div>
    </EventTemplate>
</telerik:RadTimeline>

<telerik:RadClientDataSource ID="RadClientDataSource1" runat="server">
    <DataSource>
        <WebServiceDataSourceSettings ServiceType="OData">
            <Select Url="https://demos.telerik.com/kendo-ui/service/Northwind.svc/Employees" />
        </WebServiceDataSourceSettings>
    </DataSource>
    <SortExpressions>
        <telerik:ClientDataSourceSortExpression FieldName="HireDate" SortOrder="Desc" />
    </SortExpressions>
    <Schema>
        <Model>
            <telerik:ClientDataSourceModelField DataType="Date" FieldName="HireDate" />
        </Model>
    </Schema>
</telerik:RadClientDataSource>
````

If you need to change the order of the bound event items, you can utilize the RadClientDataSource sorting functionlaity like follows:

````JavaScript
<telerik:RadButton runat="server" ID="RadButton1" Text="Reverse Timeline events order" AutoPostBack="false" OnClientClicked="OnClientClicked" />
<script>
    function OnClientClicked(sender, args) {
        var toggleSort = { "asc": "desc", "desc": "asc" };
        var kendoDS = $find("<%= RadClientDataSource1.ClientID %>").get_kendoWidget();
        var sort = kendoDS.sort();
        sort[0].dir = toggleSort[sort[0].dir];
        kendoDS.sort(sort);
    }
</script>
````

