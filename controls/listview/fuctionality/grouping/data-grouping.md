---
title: Data Grouping
page_title: Data Grouping | UI for ASP.NET AJAX Documentation
description: Data Grouping
slug: listview/fuctionality/grouping/data-grouping
tags: data,grouping
published: True
position: 1
---

# Data Grouping



As of Q3 2013 Beta release of the UI controls, you could test the advantage of the new __DataGrouping__ feature for the __RadListView__ control.Using the __DataGrouping__ with the __RadListView__, you could group the data source of the control according to one or more specified data fields.In order to define the layout for each group in the control you should set separate __data group templates__ in the __“DataGroupTemplate” tag__ under each __“ListViewDataGroup.”__ Option to access the __calculated aggregates__ according to a predefined function is also available. The __RadListView DataGrouping__ functionality provides not only a way to arrange the items in a grouped way (as the basic grouping available) but render grouped items form the __DataSource__ or in another words native __DataSource__ grouping as the other data-bound controls like RadGrid provides.

## Features

You could take advantage of the following features of the DataGrouping functionality listed below:

* Collection of data groups in the markup

* Data field to group by for each data group

* Optional aggregates by field and aggregate function

* Template for each data group

* Nesting and hierarchical structures of the data groups and data items of the RadListView

* Group the data source using optimized LINQ queries when possible

* Server-side event for the purpose of custom calculation of the aggregates

Using the code below you will enable the RadListView DataGrouping feature following the listed fucntionalities.

````ASPNET
	        <telerik:RadListView ID="RadListView1" runat="server" ItemPlaceholderID="DataGroupPlaceHolder3"
	            InsertItemPosition="AfterDataGroups" DataSourceID="SqlDataSource1" AllowMultiFieldSorting="True"
	            AllowPaging="True" GroupAggregatesScope="AllItems" DataKeyNames="Classification">
	            <ItemTemplate>
	                <br />
	                <div class="rlvI">
	                    <div class="category model">
	                        Model:
	                        <%#Eval("Model")%>
	                    </div>
	                    <div class="category">
	                        Classification:
	                        <%#Eval("Classification")%>
	                    </div>
	                    <div class="category">
	                        Year:<%#Eval("Year")%></div>
	                    <div class="category">
	                        Fuel Type:
	                        <%#Eval("Fuel")%>
	                    </div>
	                    <div class="category">
	                        Booking Price:
	                        <%#Eval("Price")%>
	                    </div>
	                    <div style="clear: both">
	                    </div>
	                </div>
	            </ItemTemplate>
	            <%--Setting the DataGroups in the DataGroups tag--%>
	            <DataGroups>
	            <%--In each ListViewDataGroup GroupdFiled should be set.--%>
	                <telerik:ListViewDataGroup GroupField="BrandName" DataGroupPlaceholderID="DataGroupPlaceHolder1"
	                    SortOrder="Ascending">
	                    <DataGroupTemplate>
	                        <asp:Panel runat="server" ID="Panel3" GroupingText='<%# (Container as RadListViewDataGroupItem).DataGroupKey %>'>
	                            <asp:PlaceHolder runat="server" ID="DataGroupPlaceHolder2"></asp:PlaceHolder>
	                            <asp:Label runat="server" ID="Label39" Text='<%# "Lower booking price: " + (Container as RadListViewDataGroupItem).AggregatesValues["Price"].ToString() %>'>
	                            </asp:Label>
	                        </asp:Panel>
	                    </DataGroupTemplate>
	                   <%-- Set the aggregate by specific DataField in the GroupAggregate tags--%>
	                    <GroupAggregates>
	                        <telerik:ListViewDataGroupAggregate Aggregate="Min" DataField="Price" />
	                    </GroupAggregates>
	                </telerik:ListViewDataGroup>
	                     <telerik:ListViewDataGroup GroupField="Classification" DataGroupPlaceholderID="DataGroupPlaceHolder2">
	                    <DataGroupTemplate>
	                        <asp:Panel runat="server" ID="Panel2" GroupingText='<%# (Container as RadListViewDataGroupItem).DataGroupKey %>'>
	                            <asp:Panel runat="server" ID="DataGroupPlaceHolder3">
	                            </asp:Panel>
	                        </asp:Panel>
	                    </DataGroupTemplate>
	                </telerik:ListViewDataGroup>
	            </DataGroups>
	        </telerik:RadListView>
	
	    <asp:SqlDataSource ID="SqlDataSource2" runat="server" ConnectionString="<%$ ConnectionStrings:TelerikConnectionString %>"
	        SelectCommand="SELECT [BrandName], [Model], [Classification], [Year], [Fuel], [Price] FROM [Cars]"/>
	
````



Using the aggregate function on a specific aggregate field, you could set aggregates for specific groups. The aggregate value could be accessed using __AggregatesValues__ property.

````ASPNET
	             <telerik:ListViewDataGroup GroupField="BrandName" DataGroupPlaceholderID="DataGroupPlaceHolder1"
	                    SortOrder="Ascending">
	                    <DataGroupTemplate>
	                        <asp:Panel runat="server" ID="Panel1" GroupingText='<%# (Container as RadListViewDataGroupItem).DataGroupKey %>'>
	                            <asp:PlaceHolder runat="server" ID="PlaceHolder1"></asp:PlaceHolder>
	                            <asp:Label runat="server" ID="Label1" Text='<%# "Lower booking price: " + (Container as RadListViewDataGroupItem).AggregatesValues["Price"].ToString() %>'>
	                            </asp:Label>
	                        </asp:Panel>
	                    </DataGroupTemplate>
	                   <%-- Set the aggregate by specific DataField in the GroupAggregate tags--%>
	                    <GroupAggregates>
	                        <telerik:ListViewDataGroupAggregate Aggregate="Min" DataField="Price" />
	                    </GroupAggregates>
	                </telerik:ListViewDataGroup>         
````



## Nested groups

You could achive grouping in sevrela levels by nesting the __ListViewDataGroups__.

Note that the __DataGroupPlaceHolderID__ of each nested group should be set to be the PlaceHolder of its direct parrent group. Finelly the __ItemPlaceholderID__ of the RadListView control should be set to the container's ID od the most inner group.

The example bellow presents two levels of grouping

````ASPNET
	                          <telerik:RadListView ID="RadListView1" runat="server" ItemPlaceholderID="DataGroupPlaceHolder3"
	            InsertItemPosition="AfterDataGroups" DataSourceID="SqlDataSource1" AllowMultiFieldSorting="True"
	            AllowPaging="True" GroupAggregatesScope="AllItems" DataKeyNames="Classification">
	              <DataGroups>
	      
	                <telerik:ListViewDataGroup GroupField="BrandName" DataGroupPlaceholderID="DataGroupPlaceHolder1"
	                    SortOrder="Ascending">
	                    <DataGroupTemplate>
	                        <asp:Panel runat="server" ID="Panel4" GroupingText='<%# (Container as RadListViewDataGroupItem).DataGroupKey %>'>
	                            <asp:PlaceHolder runat="server"  ID="DataGroupPlaceHolder2"></asp:PlaceHolder>
	                        </asp:Panel>
	                    </DataGroupTemplate>
	                   <%-- Set the aggregate by specific DataField in the GroupAggregate tags--%>
	                </telerik:ListViewDataGroup>
	                     <telerik:ListViewDataGroup GroupField="Classification" DataGroupPlaceholderID="DataGroupPlaceHolder2">
	                    <DataGroupTemplate>
	                        <asp:Panel runat="server" ID="Panel5" GroupingText='<%# (Container as RadListViewDataGroupItem).DataGroupKey %>'>
	                            <asp:Panel runat="server" ID="DataGroupPlaceHolder3">
	                            </asp:Panel>
	                           
	                        </asp:Panel>
	                    </DataGroupTemplate>
	                </telerik:ListViewDataGroup>
	            </DataGroups> 
	            </telerik:RadListView>
````



## Server-Side API

Several new properties have been exposed for the DataGrouping functionality:


|  __ *Property* __  |  __ *Description* __  |
| ------ | ------ |
| __GroupAggregatesScope__ |Sets the way the aggregates for specific group is calculated–for the specific page or for all items. The default value is "AllItems"|
| __InsertItemPostion__ (extended enumeration)|Sets the position of the insert item. The new enumeration includes __"BeforeDataGroups"__ and __"AfterDataGroups"__ |
| __DataGroupKey__ |Holds the data key name of the current data group|

__Events:__


|  __Events ** __  |  __Description ** __  |
| ------ | ------ |
| __OnCustomAggregate__ |Fired when the __aggregate type__ is __“Custom.”__ User can specify custom calculated value because of the aggregate.|

## Limitations

* __Unsupported data sources/bindings__

* XMLDataSource

* SQLDataReader

* Simple databinding

* Client-side binding

* __Unsupported features__

* Custom paging/sorting/filtering

* Simple (old) grouping-results in the "ItemPlaceHolder not specified" error
