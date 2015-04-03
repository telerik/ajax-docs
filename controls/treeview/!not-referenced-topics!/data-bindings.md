---
title: Data Bindings
page_title: Data Bindings | UI for ASP.NET AJAX Documentation
description: Data Bindings
slug: treeview/!not-referenced-topics!/data-bindings
tags: data,bindings
published: True
position: 1
---

# Data Bindings



## 

The __DataTextField__, __DataValueField__, and __DataNavigateUrlField__ properties let you map the fields of data items to the __Text__, __Value__, and __NavigateUrl__ properties of the TreeView Nodes to which they are bound. By default, any other TreeView Node properties must be mapped using an __[NodeDataBound]({%slug treeview/data-binding/using-additional-columns%})______event handler. However, as an alternate approach, you can use the __DataBindings__ collection to declaratively supply the mapping for any or all ofthe following __RadTreeNode__properties:

* Text

* Value

* NavigateUrl

* Target

* ToolTip

* Enabled

* ImageUrl

* HoveredImageUrl

* ContexttreeviewID

In addition, the __DataBindings__

* To add a set of declarative Data Bindings to a TreeView, use the [NavigationItemBinding Collection Editor]({%slug treeview/!not-referenced-topics!/navigationitembinding-collection-editor%}).The Data Bindings are represented by a collection of __RadTreeNodeBinding__ objects. Each item in the collection represents a set of Data Bindings between the Data Source and the Nodes in the TreeView for a given level of the TreeView (root Nodes, Nodes at the first child level, and so on). You can also create an item that gives the default mapping to cover any levels not specificly mapped by another item.The properties of each item in the collection specify how the __RadTreeNode__ properties should be assigned:

* For each mapped __RadTreeNode__ property, there are two properties for the Data Binding: one, with the same name as the corresponding __RadTreeNode__ property, is a hard-coded value that is assigned to all TreeView Nodes to which the Data Binding applies; the other, with the name of the property followed by the suffix "Field", is the name of a field from the Data Source where the Node gets its property value. Thus, for example, if your database contains a column named Text and you set __TextField__="Text", the __Text__ property of all TreeView Nodes takes its value from the Text column in the database. Alternatively, if you set __Text__="Text", all your TreeView Nodes will take the static string "Text" as the value of their __Text__ property.

* The __Depth__ property indicates the level of TreeView Nodes to which the Data Binding applies. If __Depth__ is not set, the Data Binding applies to all TreeView Nodes not mapped by another binding. The __DataBindings__collection should contain only one item with no value assigned to the __Depth__ property.

* The __FormatString__ property specifies how to format the text supplied by the __TextField__ of the Data Source.

* The __DataMember__ property specifies the table from which to map Nodes. This property lets you use different tables from the same __DataSet__ to supply values at different levels of the TreeView.

>note If multiple __RadTreeNodeBinding__ objects are defined that conflict with each other, RadTreeView applies the Tree Node Bindings in the following order of precedence:
>
1.The RadTreeNodeBinding object that defines both a depth and a data member.
1.The RadTreeNodeBinding object that defines only the depth.
1.The RadTreeNodeBinding object that defines only the data member.
1.The RadTreeNodeBinding object that defines neither the depth nor the data member.>
__ASPX TreeView DataBindings Structure__In the ASPX page, the __DataBindings__ collection resides within the __<RadTreeView>__ tag. For example:

````ASPNET
	    <telerik:RadTreeView ID="RadTreeView1" runat="server" DataSourceID="SqlDataSource1">
	        <DataBindings>
	            <telerik:RadTreeNodeBinding TextField="CategoryName" ToolTipField="Description" ValueField="CategoryID" />
	        </DataBindings>
	    </telerik:RadTreeView>
	    <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	        SelectCommand="SELECT [CategoryID], [CategoryName], [Description] FROM [Categories]">
	    </asp:SqlDataSource>
````

__How to Enable DataBindings__

1. Set the RadTreeView __DataSourceID__ property to an instance of a Data Source.

1. From the Telerik RadTreeView Smart Tag, select __Edit RadTreeView DataBindings__. The __NavigationItemBinding Collection Editor__ dialog appears. 
>caption 

![RadTreeView DataBinding](images/treeview_binding02.png)

1. 

1. Under __Members__, click __Add__ to add one or more members. Two or more members are required if you want to bind different properties at different depth levels. (See __Depth__ above.)

1. Set the properties for each member. Click __OK__to accept your changes and close the __NavigationItemBinding Collection Editor__.For a live example see [DataBindings demo](http://demos.telerik.com/aspnet-ajax/TreeView/Examples/Programming/DataBindings/DefaultCS.aspx).

# See Also

 * [NavigationItemBinding Collection Editor]({%slug treeview/!not-referenced-topics!/navigationitembinding-collection-editor%})
