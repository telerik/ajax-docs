---
title: Integration with DataSource Controls
page_title: Integration with DataSource Controls | RadFilter for ASP.NET AJAX Documentation
description: Integration with DataSource Controls
slug: filter/how-to/integration-with-datasource-controls
tags: integration,with,datasource,controls
published: True
position: 0
---

# Integration with DataSource Controls



## 

RadFilter can be used to build complex filtering criteria by means of intuitive visual UI and depending on the data type of the underlying source fields.Supported data source controls are such controls that support filtering, i.e *LinqDataSource/EntityDataSource/OpenAccessDataSource*. To filter .Net 3.5/4.0 DataSource controls with RadFilter, you need to specify the **DataSourceControlID** property of the filter control.

Here is a simple example which demonstrates how you can filter RadListBox bound to EntityDataSource using RadFilter:

````C#
<telerik:RadScriptManager ID="RadScriptManager1" runat="server">
</telerik:RadScriptManager>
<telerik:RadFilter RenderMode="Lightweight" runat="server" ID="RadFilter1" DataSourceControlID="EntityDataSourceCategories">
</telerik:RadFilter>
<asp:EntityDataSource ID="EntityDataSourceCategories" runat="server" ConnectionString="name=NorthwindEntities"
    DefaultContainerName="NorthwindEntities" EntitySetName="Categories" EntityTypeFilter="Categories">
</asp:EntityDataSource>
<telerik:RadListBox RenderMode="Lightweight" runat="server" ID="RadListBox1" DataSourceID="EntityDataSourceCategories"
    Height="200px" Width="250px">
    <EmptyMessageTemplate>
        No records to display.
    </EmptyMessageTemplate>
    <ItemTemplate>
        <em>Category name </em><span>
            <%# Eval("CategoryName") %></span><br />
        <em>Description </em><span>
            <%# Eval("Description")%></span><br />
        <telerik:RadBinaryImage ID="RadBinaryImage2" runat="server" AlternateText="Category Photo"
            Style="margin-left: 10px" ToolTip="Category Photo" Width="90px" Height="62px"
            BorderColor="White" BorderWidth="2px" ResizeMode="Fit" ImageUrl='<%# string.Format("IMG/{0}.jpg", Eval("CategoryID")) %>' />
    </ItemTemplate>
</telerik:RadListBox>
````



Find a live example illustrating the integration of RadFilter with DataSource controls [here](http://demos.telerik.com/aspnet-ajax/filter/examples/datasourceintegration/defaultcs.aspx).
