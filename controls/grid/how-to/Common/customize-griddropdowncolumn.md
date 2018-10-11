---
title: Customize GridDropDownColumn
page_title: Customize GridDropDownColumn | RadGrid for ASP.NET AJAX Documentation
description: Customize GridDropDownColumn
slug: grid/how-to/common/customize-griddropdowncolumn
previous_url: grid/how-to/customize-griddropdowncolumn
tags: customize,griddropdowncolumn
published: True
position: 2
---

# Customize GridDropDownColumn



**Configuring GridDropDownColumn**

Here is some insight about the mechanism which Telerik RadGrid uses to present values for **GridDropDownColumn:**

````ASP.NET
//sample inline GridDropDownColumn definition
<telerik:GridDropDownColumn UniqueName="AccessLevelID" ListDataMember="AccessLevel"
  SortExpression="AccessLevelID" ListTextField="Description" ListValueField="DDL_AccessLevelID"
  HeaderText="AccessLevelID" DataField="GRID_AccessLevelID" />
````



* The **DataField** property points to the column in the grid data-source containing values which will be compared at a later stage with the values available in the column, referenced by the **ListValueField** property.

* The **ListValueField** points to the column in the AccessLevel table which will be used as a pointer to retrieve the items for the dropdown in the **GridDropDownColumn**.

* The **ListTextField** points to the column in the AccessLevel table from which the grid will extract the values for the dropdown.

* The **ListDataMember** property points to the AccessLevel table (part of the dataset used for grid data-source) which is the source for the GridDropDownColumn generation (can be replaced by **DataSourceID** - see the highlighted section above).



````C#
//sample select command for grid data-source generation
DBadapter.SelectCommand = New OleDbCommand("SELECT DDL_AccessLevelID, Description FROM AccessLevel", conn)
DBadapter.Fill(MyUsersData, "AccessLevel")        
````
````VB
'sample select command for GridDropDownColumn data-source generation
DBadapter.SelectCommand = New OleDbCommand("SELECT DDL_AccessLevelID, Description FROM AccessLevel", conn)
DBadapter.Fill(MyUsersData, "AccessLevel")
````


>caution Ensure that the fields specified through the **DataField/ListValueField** properties are of the same -data type- and the entries have a precise match, otherwise you will get merely the first item from the list displayed in non-editable mode. This can also happen if you have not configured properly the GridDropDownColumn, e.g. the relations between the fields specified through the **DataField/ListValueField** properties.
>


As you can see, a requirement for the proper functioning of GridDropDownColumn is that **all column values** referenced by the **DataField** attribute match the column values referenced by the **ListValueField** attribute. If there are values in the **GRID_AccessLevelID** column of the WebUsers table which do not have corresponding equal values in the **DLL_AccessLevelID** column of the **AccessLevel** table, then the grid will display the *default first value* from the *Description* column as it will not "know" what is the correct field.

Online demo which demonstrates the behavior of GridDropDownColumn is available [ here ](http://demos.telerik.com/aspnet-ajax/Grid/Examples/GeneralFeatures/ColumnTypes/DefaultVB.aspx).

>tip The built-in GridDropDownColumn is designed to be used mainly with DataTables in order to easily map and generate their dropdown items values in conjunction with the DataField/ListValueField/DataSourceID/ListDataMember values of the column. For custom objects collections consider replacing the GridDropDownColumn with template column holding MS DropDownList in its edit template (generating/binding the items for the MS DropDownList inside the ItemDataBound handler of RadGrid).
>


**Adding GridDropDownColumn option on insert/edit**

If you would like to display the additional item in your dropdown list editor both on editing and insertion, you can perform this operation on **ItemDataBound.** You have to check whether the currently bound item is **GridEditableItem** and that it is in edit mode. If this condition is met, you can obtain reference to the **DropDownList** control through the **GridDropDownListEditor** for the respective column and inject new item in its **Items** collection.

The code below will place new item with text **Select Contact Title** (colored in red) on first position in the dropdown list editor of **GridDropDownColumn.** Note that this drop down column has UniqueName **DropDownColumn.**



````C#
protected void RadGrid1_ItemDataBound(object sender, Telerik.Web.UI.GridItemEventArgs e)
{
    if (e.Item is GridEditableItem && e.Item.IsInEditMode)
    {
        GridEditableItem editedItem = e.Item as GridEditableItem;
        GridEditManager editMan = editedItem.EditManager;
        GridDropDownListColumnEditor editor = (GridDropDownListColumnEditor)(editMan.GetColumnEditor("<MyDropDownColumnUniqueName>"));
        //in case you have RadComboBox editor for the GridDropDownColumn (this is the default editor),  
        //you will need to use ComboBoxControl below instead of DropDownListControl   
        //and add RadComboBoxItems instead of ListItems to the Items collection of the editor
        DropDownList ddList = editor.DropDownListControl;
        ddList.Items.Insert(0, new ListItem("Select Contact Title", "NotSetItem"));
        ddList.Items[0].Attributes["style"] = "color: red";
    }
}
````
````VB
Protected Sub RadGrid1_ItemDataBound(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridItemEventArgs) Handles RadGrid1.ItemDataBound
    If (TypeOf e.Item Is GridEditableItem AndAlso CType(e.Item, GridEditableItem).IsInEditMode) Then
        Dim editedItem As GridEditableItem = CType(e.Item, GridEditableItem)
        Dim editMan As GridEditManager = editedItem.EditManager
        Dim editor As GridDropDownListColumnEditor = CType(editMan.GetColumnEditor("<MyDropDownColumnUniqueName>"), GridDropDownListColumnEditor)
        'in case you have RadComboBox editor for the GridDropDownColumn (this is the default editor),              
        'you will need to use ComboBoxControl below instead of DropDownListControl              
        'and add RadComboBoxItems instead of ListItems to the Items collection of the editor             
        Dim ddList As DropDownList = editor.DropDownListControl
        ddList.Items.Insert(0, New ListItem("Select Contact Title", "NotSetItem"))
        ddList.Items(0).Attributes("style") = "color: red"
    End If
End Sub
````

>tip This option will not be persisted/available after the update command. Inserting such item is suitable only for user-friendly message/presentation.
>


Moreover, you may want to display an empty item/default item which differs from the first in the list (inside the dropdown editor) as selected on initial insertion. This can be accomplished in a codeless manner setting the **EnableEmptyListItem** property of the **GridDropDownColumn** to **true** (its default value is **false**) and choosing **EmptyListItemText/EmptyListItemValue**. Below is an example for that:

````ASP.NET
<telerik:GridDropDownColumn UniqueName="ContactName" DataSourceID="ddListColumnDataSource"
  SortExpression="ContactName" ListTextField="ContactName" EnableEmptyListItem="true"
  EmptyListItemText="--Choose an option--" EmptyListItemValue="" ListValueField="CustomerID"
  HeaderText="Contact name" DataField="CustomerID" />
````



**Customizing the options for GridDropDownColumn on editing**

The proper event you need to hook in order to attain this effect is **ItemDataBound**. You should check if the currently bound item (**e.Item**) is in edit mode (**e.Item.IsInEditMode = true**). Then you can find the cell with the dropdown that is currently editable and change the options in the dropdown as per your needs. Here is an example code:



````C#
private void RadGrid1_ItemDataBound(object sender, Telerik.Web.UI.GridItemEventArgs e)
{
    if (e.Item is GridEditableItem && (e.Item as GridEditableItem).IsInEditMode)
    {
        GridEditableItem editedItem = e.Item as GridEditableItem;
        GridEditManager editMan = editedItem.EditManager;

        GridDropDownListColumnEditor editor = editMan.GetColumnEditor("DropDownColumnUniqueName") as GridDropDownListColumnEditor;
        //in case you have RadComboBox editor for the GridDropDownColumn (this is the default editor),   
        //you will need to use ComboBoxControl below instead of DropDownListControl
        //Then you can modify the list control as per your custom conventions
        editor.DataSource = new object[] { 1, 2, 3 };
        editor.DataBind();

        editor.DropDownListControl.SelectedValue = "2";
        //And so on
    }
}
````
````VB
Private Sub RadGrid1_ItemDataBound(ByVal sender As Object, ByVal e As Telerik.Web.UI.GridItemEventArgs) Handles RadGrid1.ItemDataBound
If (TypeOf e.Item is GridEditableItem AndAlso (e.Item,GridEditableItem).IsInEditMode)) Then
        Dim editedItem As GridEditableItem = CType(e.Item, GridEditableItem)
        Dim editMan As GridEditManager = editedItem.EditManager

        Dim editor As GridDropDownListColumnEditor = CType(editMan.GetColumnEditor("DropDownColumnUniqueName"), GridDropDownListColumnEditor)
        'in case you have RadComboBox editor for the GridDropDownColumn (this is the default editor),            
        'you will need to use ComboBoxControl below instead of DropDownListControl
        'Then you can modify the list control as per your custom conventions
        editor.DataSource = New Object() {1, 2, 3}
        editor.DataBind()

        editor.DropDownListControl.SelectedValue = "2"
        'And so on
    End If
End Sub
````


The code is generalized to work in both **InPlace** and **EditForms** editing mode and with any editor similar to **GridDropDownListColumnEditor** (the default). Note that in order for this to work you should have already set the **DropDownColumn** properties:

* **ListTextField**

* **ListValueField**

which correspond to the properties **DataTextField, DataValueField** of the dropdown control.

## Automatic Load-On-Demand support for GridDropDownColumn

As of version **2010.Q2** of Telerik controls, GridDropDownColumn supports automatic load-on-demand for the RadComboBox editor. The column provides a set of new properties that allow you to configure how load-on-demand works:

* **AllowAutomaticLoadOnDemand** - Gets or sets a value indicating whether automatic load-on-demand is enabled for the RadComboBox editor (by default false).

* **ShowMoreResultsBox** - Gets or sets a value indicating whether the RadComboBox editor displays a More Results box (by default false).

* **AllowVirtualScrolling** - Gets or sets a value indicating whether virtual scrolling is enabled for RadComboBox editor (by default false).

* **ItemsPerRequest** - Gets or sets the number of Items the RadComboBox editor will load per Item request (by default -1, meaning all items will be requested).

>tip Load-on-demand is supported by the[ RadComboBox ](http://demos.telerik.com/aspnet-ajax/combobox/examples/overview/defaultcs.aspx)editor only. This requires DropDownControlType="RadComboBox" (default value). Additionally,load-on-demand works only with declarative data source controls set through the DataSourceID property of the column. Using DataSets and binding the column through its DataMember property is not compatible with automatic load-on-demand.
>


With automatic load-on-demand, the GridDropDownColumn will not databind the combo editors when the edited items are initialized. Instead, items will be requested when the user opens the combo. Thus, data will be lazy-loaded on a user request. Additionally, when using ShowMoreResultsBox or AllowVirtualScrolling, RadComboBox will request only the number of items specified by ItemsPerRequest. Thus, with data source controls that support paging, we remove the overhead of requesting all data items and fetch data in manageable chunks.

It is important to note the differences in the column editor with and without load-on-demand enabled:


>caption  

|  | With load-on-demand | Without load-on-demand |
| ------ | ------ | ------ |
|SelectedText|Contains value of related field specified by ListTextField|Contains value of related field specified by ListTextField|
|SelectedValue|Contains value of related field specified by ListValueField/DataField|Contains value of related field specified by ListValueField/DataField|
|SelectedIndex|Always returns -1|Returns index of selected item from RadComboBox|
|ComboBoxControl.SelectedIndex|Always returns -1|Returns index of selected item from RadComboBox|
|ComboBoxControl.SelectedItem|Always returns null|Returns selected item from RadComboBox|

For a live demo of the GridDropDownColumn features, please visit the [RadGrid Column Types online QSF example](http://demos.telerik.com/aspnet-ajax/grid/examples/generalfeatures/columntypes/defaultcs.aspx). To learn more about RadComboBox and its load-on-demand support, please refer to the [Automatic Load-On-Demand for RadComboBox](http://www.telerik.com/help/aspnet-ajax/combobox-automatic-load-on-demand.html) help article.
