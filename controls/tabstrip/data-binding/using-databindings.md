---
title: Using DataBindings
page_title: Using DataBindings - RadTabStrip
description: Check our Web Forms article about Using DataBindings.
slug: tabstrip/data-binding/using-databindings
tags: using,databindings
published: True
position: 6
---

# Using DataBindings

## 

The **DataTextField**, **DataValueField**, and **DataNavigateUrlField** properties let you map the fields of data items to the **Text**, **Value**, and **NavigateUrl** properties of the tabs to which they are bound. By default, any other tab properties must be mapped using an [TabDataBound event handler]({%slug tabstrip/server-side-programming/tabdatabound%}). However, as an alternate approach, you can use the **DataBindings** collection to declaratively supply the mapping for any or all of the following **RadTab** properties:

* Text

* Value

* NavigateUrl

* Target

* ToolTip

* Enabled

* ImageUrl

* HoveredImageUrl

In addition, the **DataBindings** collection lets you provide different sets of data bindings to the tabs on different levels of the tab strip. You can even bind the tabs on each level of the tab strip from different tables in a DataSet.

To add a set of declarative data bindings to a tab strip, use the [NavigationItemBinding Collection Editor]({%slug tabstrip/design-time/navigationtabbinding-collection-editor%}).

The data bindings in the collection are represented by a collection of **RadTabBinding** objects. Each tab in the collection represents a set of data bindings between the data source and the tabs in the tab strip for a given level of the tab strip (root tabs, tabs at the first child level, and so on). You can also create a tab that gives the default mapping to cover any levels not specificly mapped by another tab.

The properties of each item in the collection specify how the **RadTab** properties should be assigned:

* For each mapped **RadTab** property, there are two properties for the data binding: one, with the same name as the corresponding **RadTab** property, is a hard-coded value that is assigned to all tab strip tabs to which the data binding applies; the other, with the name of the property followed by the suffix "Field", is the name of a field from the data source where the tab gets its property value. Thus, for example, if your database contains a column named **Text** and you set **TextField**="Text", the **Text** property of all tabs takes its value from the Text column in the database. Alternatively, if you set **Text**="Text", all your tabs will take the static string "Text" as the value of their **Text** property.

* The **Depth** property indicates the level of tabs to which the data binding applies. If **Depth** is not set, the data binding applies to all tabs not mapped by another binding. The collection should contain only one item with no value assigned to the **Depth** property.

* The **FormatString** property specifies how to format the text supplied by the **TextField** of the data source.

* The **DataMember** property specifies the table from which to map tabs. This property lets you use different tables from the same **DataSet** to supply values at different levels of the tab strip.

````ASPNET	 
 <telerik:RadTabStrip
	runat="server"
	ID="RadTabStrip1"
	DataSourceID="SqlDataSource1"
	DataFieldID="id"
	DataFieldParentID="parentID">
	<DataBindings>
	   <telerik:RadTabBinding TextField="Category" />
	   <telerik:RadTabBinding FormatString="Made of {0}" TextField="Material" Depth="1" />
	</DataBindings>
</telerik:RadTabStrip> 	 
````


