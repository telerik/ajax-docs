---
title: Declarative Definition
page_title: Declarative Definition | UI for ASP.NET AJAX Documentation
description: Declarative Definition
slug: grid/functionality/grouping/group-by-expressions/declarative-definition
tags: declarative,definition
published: True
position: 0
---

# Declarative Definition



Each __GridTableView__ object has a __GroupByExpressions__ property. __GroupByExpressions__ is a collection of group expressions (__GridGroupByExpression__ objects).

Adding a __GridGroupByExpression__ object to this collection makes the current tableview display the items divided into groups and sorted. At the top of each group of items is a __GridGroupHeaderItem__, which can display information about the common properties of the group items or aggregate values that summarize the items in the group.

## GridGroupByExpression object

Each __GridGroupByExpression__ object contains two collections in turn:

* The __SelectFields__ collection determines the information that is displayed in the group header.

* The __GroupByFields__ collection determines the field values that are used to group the data.

Both the __SelectFields__ and the __GroupByFields__ collections are collections of __GridGroupByField__ objects. Each __GridGroupByField__ object has the following properties:

* __FieldName__ specifies the name of a field in the data source. If the __GridGroupByField__ is in the __SelectFields__ collection, this is the field whose value (or aggregated value) is shown in the group header. If the __GridGroupByField__ is in the __GroupByFields__ collection, this is the field that is used to group values. Meaningful for items from the __SelectFields/GroupByFields__ collections.

* __FieldAlias__ specifies an alias for representing the field's name. This appears as the name of the group in the group header and in the group panel, unless the __HeaderText__ property is set. The __FieldAlias__ value cannot contain blanks or reserved characters such as ",", "." and so on. Meaningful for items from the __SelectFields__collection only.

* __Aggregate__ specifies a __GridAggregateFunction__ value. These include "Sum", "Min", "Max", "Last", "First", "Count", and "None". __Aggregate__ is used for fields in the __SelectFields__ collection to specify the way to aggregate values on the field for display in the group header. Meaningful for items from the __SelectFields__collection only.If you want to display aggregated values in the group footer rather than the header, you can use [column aggregates]({%slug grid/columns/aggregates%}).

* __HeaderText__ specifies the name to use for the field when it appears in the group header and in the group panel. This property lets you specify a field name that includes blanks or reserved characters. This property is only used for fields in the __SelectFields__ collection. Meaningful for items from the __SelectFields__collection only.

* __HeaderValueSeparator__ specifies a string that appears in the group header between the header text and the value (or aggregated value). This property is only used for fields in the __SelectFields__ collection. Meaningful for items from the __SelectFields__collection only.

* __FormatString__ specifies a format string for formatting field values when they appear in the group header. This property is only used for fields in the __SelectFields__ collection. Meaningful for items from the __SelectFields__collection only.

* __SortOrder__ specifies howgroup values are sorted. Its value can be "Ascending" or "Descending". This property is only used for fields in the __GroupByFields__ collection. Meaningful for items from the __GroupByFields__collection only.

>caution The default value of the __SortOrder__ property is "Ascending". Setting it to "None" will not affect the order in which the group items are displayed.
>


## Setting GroupByExpressions declaratively

You can set the value of a table view's __GroupByExpressions__ property declaratively to provide the grid with an initial grouping state. This property is independent of whether users can drag column headers to the group panel to change the grouping, or even whether the group panel appears in the grid.

>note In a hierarchical grid, you can set the __GroupByExpressions__ property for each table in the hierarchy.
>


The following example shows the declaration of a grid with the __GroupByExpressions__ property set to provide grouping in the __MasterTableView__. In this example, the ShowGroupPanel property is not set to __True__, so users cannot change the specified grouping.

````ASPNET
	  <telerik:RadGrid ID="RadGrid1" runat="server" DataSourceID="SqlDataSource1" GridLines="None"
	    AllowPaging="True" PageSize="5" Skin="Outlook">
	    <MasterTableView DataSourceID="gridSource">
	      <GroupByExpressions>
	        <telerik:GridGroupByExpression>
	          <SelectFields>
	            <telerik:GridGroupByField FieldName="UnitPrice" HeaderText="Price" />
	            <telerik:GridGroupByField FieldName="UnitsInStock" HeaderText="Units at this price"
	              Aggregate="Sum" />
	          </SelectFields>
	          <GroupByFields>
	            <telerik:GridGroupByField FieldName="UnitPrice" SortOrder="Descending" />
	          </GroupByFields>
	        </telerik:GridGroupByExpression>
	      </GroupByExpressions>
	    </MasterTableView>
	  </telerik:RadGrid>
	  <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	            SelectCommand="SELECT [ProductName], [QuantityPerUnit], [UnitPrice], [UnitsInStock] FROM [Products]">
	  </asp:SqlDataSource>
````

![](images/grd_GroupByExpressions.png)

For a live example that sets the __GroupByExpressions__ property (and uses additional __GridGroupByField__ properties), see [Outlook-style grouping](http://demos.telerik.com/aspnet-ajax/Grid/Examples/GroupBy/OutlookStyle/DefaultCS.aspx).

## Column group-by expressions

When the user drags a column header onto the group panel, the grid automatically adds a __GridGroupByExpression__ object to the __GroupByExpressions__ collection of the table view that contains the column. By default, the __GroupByExpression__ has a single __GridGroupByField__ in its __SelectFields__ and in its __GroupByFields__ collections. This __GridGroupByField__ sets only the __FieldName__ property (to the column's __DataField__ property).

You can change this default behavior, supplying values for the __GroupByExpression__ that is added when the user drags a column header to the group panel. To do this, set the __GroupByExpression__ property of the column.

The value of the __GroupByExpression__ property is a string that defines the grouping expression, using the following syntax:

*fieldname[ alias]/aggregate(fieldname)[ alias][, ...] Group By fieldname[ sort][, ...]*

These are the parts of the expression:

* __fieldname -__ The value of the __FieldName__ property of the __GridGroupByField__.

* __alias -__ The value of the __FieldAlias__ property of the __GridGroupByField__.

* __aggregate__ - The value of the __Aggregate__ property of the __GridGroupByField__.

* __sort__: "asc" to set __SortOrder__ to "Ascending", "desc" to set __SortOrder__ to "Descending".

The following example illustrates this syntax:

````C#
	  Country, City, count(ContactName) Items Group By Country, City desc
````



For this example, the resulting __GridGroupByExpression__ object would be as follows:

````ASPNET
	<telerik:GridGroupByExpression>
	   <SelectFields>
	     <telerik:GridGroupByField FieldName="Country" />
	     <telerik:GridGroupByField FieldName="City" />
	     <telerik:GridGroupByField
	       FieldName="ContactName"
	       FieldAlias="Items"
	       Aggregate="Count" />
	   </SelectFields>
	   <GroupByFields>
	      <telerik:GridGroupByField FieldName="Country" />
	     <telerik:GridGroupByField
	       FieldName="City"
	       SortOrder="Descending" />
	   </GroupByFields>
	</telerik:GridGroupByExpression>
````



>note You can only set the __GroupByExpression__ property of declaratively defined columns.
>


## Template columns

When you set the __GroupByExpression__ property for a __GridTemplateColumn__ instance, a common problem is that __RadGrid__ cannot get the value from the header text for that column and display it in the __GroupHeaderItem__. In such cases you need to use the __FieldAlias__ property.

The following example illustrates how this is done. It assigns an alias of "ID" in the __GroupByExpression__ property of the first template column, and an alias of "Name" in the __GroupByExpression__ property of the second template column.

````ASPNET
	  <telerik:RadGrid ID="RadGrid1" runat="server" DataSourceID="SqlDataSource1" AutoGenerateColumns="False"
	    AllowPaging="true" ShowGroupPanel="true">
	    <ClientSettings AllowDragToGroup="true" />
	    <MasterTableView>
	      <Columns>
	        <telerik:GridTemplateColumn HeaderText="ID" GroupByExpression="CustomerID ID Group By CustomerID">
	          <ItemTemplate>
	            <%# Eval("CustomerID") %>
	          </ItemTemplate>
	        </telerik:GridTemplateColumn>
	        <telerik:GridTemplateColumn HeaderText="Name" GroupByExpression="CompanyName Name Group By CompanyName">
	          <ItemTemplate>
	            <%# Eval("CompanyName") %>
	          </ItemTemplate>
	        </telerik:GridTemplateColumn>
	      </Columns>
	    </MasterTableView>
	  </telerik:RadGrid>
````


