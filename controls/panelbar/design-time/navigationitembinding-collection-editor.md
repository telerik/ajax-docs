---
title: NavigationItemBinding Collection Editor
page_title: NavigationItemBinding Collection Editor | RadPanelBar for ASP.NET AJAX Documentation
description: NavigationItemBinding Collection Editor
slug: panelbar/design-time/navigationitembinding-collection-editor
tags: navigationitembinding,collection,editor
published: True
position: 3
---

# NavigationItemBinding Collection Editor



## 

The **NavigationItemBinding Collection Builder** lets specify how to map the fields from a declarative data source to the properties of the items in your panel bar. To use the **NavigationItemBinding Collection Builder**, you must first set the **DataSourceID** property. Once the panel bar is bound to a data source, There are three ways to display the NavigationItemBinding Collection Builder:

* Right-click on the **RadPanelBar** control and choose **Edit RadPanelBar Databindings** from the context menu.

* From the **RadPanelBar**[Smart Tag]({%slug panelbar/design-time/smart-tag%}), choose **Edit RadPanelBar Databindings...**

* From the **RadPanelBar** properties pane, click the ellipsis button next to the **DataBindings** property.

![Navigation Item Binding Collection Editor](images/panelbar_navigationitembindingcollectioneditor.png)

Each item in the collection represents a set of data bindings between the data source and the items at a given level of the panel bar (root items, items at the first child level, and so on). You can also create an item that gives the default mapping to cover any levels not specificly mapped by another item.

To add items to the collection, click the **Add** button, and set the item properties in the right hand pane of the dialog.

To delete items from the collection, select the item and click the **Remove** button.

The properties of each item in the collection specify how the **RadPanelBarItem** properties should be assigned:

* Typically, for each **RadPanelBarItem** property, there are two properties for the data binding: one is a hard-coded property value that is assigned to all panel items to which the data binding applies, the other is the name of a field from the data source from which the property value can be taken. Thus, for example, the **Text** property and the **TextField** property both set the **Text** of a panel item, but the **Text** property sets the **RadPanelItem** text to a hard-coded string, while the **TextField** property maps it to a field from the data source.

* The **Depth** property indicates the level of panel items to which the data binding applies. If **Depth** is not set, the data binding applies to all panel items not mapped by another binding. The collection should contain only one item with no value assigned to the **Depth** property.

* The **FormatString** property specifies how to format the text supplied by the **TextField** of the data source.

* The **DataMember** property specifies the table from which to map items. This property lets you use different tables from the same **DataSet** to supply values at different levels of the panel bar.

# See Also

 * [Using DataBindings]({%slug panelbar/data-binding/using-databindings%})
