---
title: Using DataBindings
page_title: Using DataBindings - RadPanelBar
description: Check our Web Forms article about Using DataBindings.
slug: panelbar/data-binding/using-databindings
tags: using,databindings
published: True
position: 5
---

# Using DataBindings



## 

The **DataTextField**, **DataValueField**, and **DataNavigateUrlField** properties let you map the fields of data items to the **Text**, **Value**, and **NavigateUrl** properties of the panel items, to which they are bound. By default, any other panel item properties must be mapped using an **[ItemDataBound event handler]({%slug panelbar/server-side-programming/itemdatabound%})**. However, as an alternate approach, you can use the **DataBindings** collection to declaratively supply the mapping for any or all of the following **RadPanelItem** properties:

* Text

* Value

* NavigateUrl

* Target

* ToolTip

* Enabled

* ImageUrl

* HoveredImageUrl

In addition, the **DataBindings** collection lets you provide different sets of databindings to the items on different levels of the panel bar.

To add a set of declarative databindings to a panel bar, use the [NavigationItemBinding Collection Editor]({%slug panelbar/design-time/navigationitembinding-collection-editor%}).

The databindings in the collection are represented by a collection of **RadPanelItemBinding** objects. Each item in the collection represents a set of databindings between the data source and the items in the panel bar for a given level of the panel bar (root items, items at the first child level, and so on). You can also create an item that gives the default mapping to cover any levels not specificly mapped by another item.

The properties of each item in the collection specify how the **RadPanelItem** properties should be assigned:

* For each mapped **RadPanelItem** property, there are two properties for the data binding: one, with the same name as the corresponding **RadPanelItem** property, is a hard-coded value that is assigned to all panel items to which the data binding applies; the other, with the name of the property followed by the suffix "Field", is the name of a field from the data source where the item gets its property value. Thus, for example, if your database contains a column named **Text** and you set **TextField**="Text", the **Text** property of all panel items takes its value from the Text column in the database. Alternatively, if you set **Text**="Text", all your panel items will take the static string "Text" as the value of their **Text** property.

* The **Depth** property indicates the level of panel items to which the data binding applies. If **Depth** is not set, the data binding applies to all panel items not mapped by another binding. The collection should contain only one item with no value assigned to the **Depth** property.

* The **FormatString** property specifies how to format the text supplied by the **TextField** of the data source.

* The **DataMember** property specifies the table from which to map items. This property lets you use different tables from the same **DataSet** to supply values at different levels of the panel bar.

````ASPNET
<telerik:radpanelbar runat="server" id="RadPanelBar1" datasourceid="SqlDataSource1"
    datafieldid="id" datafieldparentid="parentID"> 
    <DataBindings>    
        <telerik:RadPanelItemBinding TextField="Category" />    
        <telerik:RadPanelItemBinding FormatString="Made of {0}" TextField="Material" Depth="1" /> 
    </DataBindings>
</telerik:radpanelbar>
````


