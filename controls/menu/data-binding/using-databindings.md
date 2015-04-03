---
title: Using DataBindings
page_title: Using DataBindings | UI for ASP.NET AJAX Documentation
description: Using DataBindings
slug: menu/data-binding/using-databindings
tags: using,databindings
published: True
position: 5
---

# Using DataBindings



## 

The __DataTextField__, __DataValueField__, and __DataNavigateUrlField__ properties let you map the fields of data items to the __Text__, __Value__, and __NavigateUrl__ properties of the menu items to which they are bound. By default, any other menu item properties must be mapped using an __[ItemDataBound event handler]({%slug menu/server-side-programming/itemdatabound%})__. However, as an alternate approach, you can use the __DataBindings__ collection to declaratively supply the mapping for any or all of the following __RadMenuItem__ properties:

* Text

* Value

* NavigateUrl

* Target

* ToolTip

* Enabled

* ImageUrl

* HoveredImageUrl

In addition, the __DataBindings__ collection lets you provide different sets of data bindings to the items on different levels of the menu. You can even bind the menu items on each level of the menu from different tables in a DataSet.

To add a set of declarative data bindings to a menu, use the [NavigationItemBinding Collection Editor]({%slug menu/design-time/navigationitembinding-collection-editor%}).

The data bindings in the collection are represented by a collection of __RadMenuItemBinding__ objects. Each item in the collection represents a set of data bindings between the data source and the items in the menu for a given level of the menu (root items, items at the first child level, and so on). You can also create an item that gives the default mapping to cover any levels not specificly mapped by another item.

The properties of each item in the collection specify how the __RadMenuItem__ properties should be assigned:

* For each mapped __RadMenuItem__ property, there are two properties for the data binding: one, with the same name as the corresponding __RadMenuItem__ property, is a hard-coded value that is assigned to all menu items to which the data binding applies; the other, with the name of the property followed by the suffix "Field", is the name of a field from the data source where the item gets its property value. Thus, for example, if your database contains a column named __Text__ and you set __TextField__="Text", the __Text__ property of all menu items takes its value from the Text column in the database. Alternatively, if you set __Text__="Text", all your menu items will take the static string "Text" as the value of their __Text__ property.

* The __Depth__ property indicates the level of menu items to which the data binding applies. If __Depth__ is not set, the data binding applies to all menu items not mapped by another binding. The collection should contain only one item with no value assigned to the __Depth__ property.

* The __FormatString__ property specifies how to format the text supplied by the __TextField__ of the data source.

* The __DataMember__ property specifies the table from which to map items. This property lets you use different tables from the same __DataSet__ to supply values at different levels of the menu.

````ASPNET
	    <telerik:RadMenu runat="server" ID="RadMenu1" DataSourceID="SqlDataSource1" DataFieldID="id"
	        DataFieldParentID="parentID">
	        <DataBindings>
	            <telerik:RadMenuItemBinding TextField="Category" />
	            <telerik:RadMenuItemBinding FormatString="Made of {0}" TextField="Material" Depth="1" />
	        </DataBindings>
	    </telerik:RadMenu>
````



for a live example of using __DataBindings__ with __RadMenu__, see [Data Bindings](http://demos.telerik.com/aspnet-ajax/Menu/Examples/Programming/DataBindings/DefaultCS.aspx).
