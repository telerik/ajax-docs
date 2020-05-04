---
title: Binding to EntityDataSource
page_title: Binding to EntityDataSource | RadTimeline for ASP.NET AJAX Documentation
description: Binding to EntityDataSource
slug: timeline/data-binding/server-side/binding-to-entitydatasource
tags: binding,to,EntityDataSource
published: True
position: 4
---

# Binding to EntityDataSource

## 

**RadTimeline** supports binding to **EntityDataSource**. To bind to a DataSource component, all you need to do is set the **DataSourceID** property of RadTimeline to the ID of the DataSource component. You should also set the **DataTextField** and **DataValueField** properties of RadTimeline to map the **Date**, **Title**, **Subtitle**, **Description**, **Actions** and **Images** values of the items to the respective columns / fields from the data source.

You will also need to setup the build-in `RadClientDataSource` instance of the TimeLine, configuring a `Schema` matching the passed data structure.

````ASP.NET
        <telerik:RadTimeline runat="server" ID="TimelineOrders"
            DataSourceID="EntityDataSource1"
            DataTitleField="FullName"
            DataSubtitleField="Title"
            Orientation="Vertical"
            DataKeyNames="TitleOfCourtesy,City,Country,Region"
            DataDateField="HireDate">
            <EventTemplate>
                 <div class="k-card-header">
                      <h5 class="k-card-title">#=data.TitleOfCourtesy# #=data.FullName#</h5>
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
            <WebServiceClientDataSource>
                <SortExpressions>
                    <telerik:ClientDataSourceSortExpression FieldName="HireDate" SortOrder="Desc" />
                </SortExpressions>
                <Schema>
                    <Model>
                        <telerik:ClientDataSourceModelField DataType="Date" FieldName="HireDate" />
                    </Model>
                </Schema>
            </WebServiceClientDataSource>
        </telerik:RadTimeline>

        <asp:EntityDataSource ID="EntityDataSource1" runat="server" ConnectionString="name=NorthwindEntities"
            DefaultContainerName="NorthwindEntities" CommandText="select e.EmployeeID, e.FirstName +' '+ e.LastName as FullName, e.HireDate, e.LastName, e.FirstName, e.Title, e.TitleOfCourtesy, e.BirthDate, e.HireDate, e.Address, e.City, e.Region, e.PostalCode, e.Country, e.HomePhone, e.Extension, e.Photo, e.Notes, e.ReportsTo, e.PhotoPath from NorthwindEntities.Employees as e">
        </asp:EntityDataSource>
````




