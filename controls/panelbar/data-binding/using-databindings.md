---
title: Using DataBindings
page_title: Using DataBindings | UI for ASP.NET AJAX Documentation
description: Using DataBindings
slug: panelbar/data-binding/using-databindings
tags: using,databindings
published: True
position: 5
---

# Using DataBindings



## 

The __DataTextField__, __DataValueField__, and __DataNavigateUrlField__ properties let you map the fields of data items to the __Text__, __Value__, and __NavigateUrl__ properties of the panel items, to which they are bound. By default, any other panel item properties must be mapped using an __[ItemDataBound event handler]({%slug panelbar/server-side-programming/itemdatabound%})__. However, as an alternate approach, you can use the __DataBindings__ collection to declaratively supply the mapping for any or all of the following __RadPanelItem__ properties:

* Text

* Value

* NavigateUrl

* Target

* ToolTip

* Enabled

* ImageUrl

* HoveredImageUrl

In addition, the __DataBindings__ collection lets you provide different sets of databindings to the items on different levels of the panel bar.

To add a set of declarative databindings to a panel bar, use the [NavigationItemBinding Collection Editor]({%slug panelbar/design-time/navigationitembinding-collection-editor%}).

The databindings in the collection are represented by a collection of __RadPanelItemBinding__ objects. Each item in the collection represents a set of databindings between the data source and the items in the panel bar for a given level of the panel bar (root items, items at the first child level, and so on). You can also create an item that gives the default mapping to cover any levels not specificly mapped by another item.

The properties of each item in the collection specify how the __RadPanelItem__ properties should be assigned:

* For each mapped __RadPanelItem__ property, there are two properties for the data binding: one, with the same name as the corresponding __RadPanelItem__ property, is a hard-coded value that is assigned to all panel items to which the data binding applies; the other, with the name of the property followed by the suffix "Field", is the name of a field from the data source where the item gets its property value. Thus, for example, if your database contains a column named __Text__ and you set __TextField__="Text", the __Text__ property of all panel items takes its value from the Text column in the database. Alternatively, if you set __Text__="Text", all your panel items will take the static string "Text" as the value of their __Text__ property.

* The __Depth__ property indicates the level of panel items to which the data binding applies. If __Depth__ is not set, the data binding applies to all panel items not mapped by another binding. The collection should contain only one item with no value assigned to the __Depth__ property.

* The __FormatString__ property specifies how to format the text supplied by the __TextField__ of the data source.

* The __DataMember__ property specifies the table from which to map items. This property lets you use different tables from the same __DataSet__ to supply values at different levels of the panel bar.

````ASPNET
	    <telerik:radpanelbar runat="server" id="RadPanelBar1" datasourceid="SqlDataSource1"
	        datafieldid="id" datafieldparentid="parentID"> 
	        <DataBindings>    
	            <telerik:RadPanelItemBinding TextField="Category" />    
	            <telerik:RadPanelItemBinding FormatString="Made of {0}" TextField="Material" Depth="1" /> 
	        </DataBindings>
	        </telerik:radpanelbar>
````


