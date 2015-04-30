---
title: Most Common Mistakes
page_title: Most Common Mistakes | RadGrid for ASP.NET AJAX Documentation
description: Most Common Mistakes
slug: grid/troubleshooting/most-common-mistakes
tags: most,common,mistakes
published: True
position: 0
---

# Most Common Mistakes



This help article describes seven common mistakes that customers make using RadGrid and offers solutions to the problems.

## 1. Incorrect Structure of Columns or DetailTables.

In order for **RadGrid** to work properly, it is very important to build the grid structure correctly. When you create thestructure using the designer (in Visual Studio) there is less of a chance that mistakes will be made. The more difficult and error-prone task iscreating the structure programmatically. Since **RadGrid** saves all of its structure properties(**DetailTables**, **Columns**, etc.) into the ViewState, building a **RadGrid**dynamically is a task very similar to creating and adding controls dynamically to a web page.

See [http://weblogs.asp.net/infinitiesloop/archive/2006/08/25/TRULY-Understanding-Dynamic-Controls-_2800_Part-1_2900_.aspx](http://weblogs.asp.net/infinitiesloop/archive/2006/08/25/TRULY-Understanding-Dynamic-Controls-_2800_Part-1_2900_.aspx)

The following two scenarios offer possible approaches to dynamically create a **RadGrid** that ensure that**RadGrid** will behave normally.

## 1st Scenario:

You can create the **RadGrid** instance and the grid structure in the **Page.Init** event handler.Then the instance of **RadGrid** is added to the controls collection of the Page. In this case, no **ViewState**is required for the grid structure to be persisted because it is recreated on each page initialization. There are no other special requirementsin this case.



````C#
	
	this.RadGrid1 = new RadGrid();
	
	this.RadGrid1.NeedDataSource += new GridNeedDataSourceEventHandler(this.RadGrid1_NeedDataSource);
	this.RadGrid1.DetailTableDataBind += new GridDetailTableDataBindEventHandler(this.RadGrid1_DetailTableDataBind);
	
	this.RadGrid1.CssClass = "RadGrid";
	
	this.RadGrid1.Width = Unit.Percentage(100);
	this.RadGrid1.PageSize = 5;
	this.RadGrid1.AllowPaging = true;
	this.RadGrid1.AutoGenerateColumns = false;
	this.RadGrid1.GroupingEnabled = true;
	this.RadGrid1.ShowGroupPanel = true;
	this.RadGrid1.ClientSettings.AllowDragToGroup = true;
	
	this.RadGrid1.MasterTableView.DataMember = "Customers";
	this.RadGrid1.MasterTableView.PageSize = 15;
	
	GridBoundColumn boundColumn;
	boundColumn = new GridBoundColumn();
	boundColumn.DataField = "CustomerID";
	boundColumn.HeaderText = "CustomerID";
	this.RadGrid1.MasterTableView.Columns.Add(boundColumn);
	....
	//Add to page controls collection
	this.PlaceHolder1.Controls.Add( RadGrid1 );          
````
````VB
	Me.RadGrid1 = new RadGrid();
	
	AddHandler Me.RadGrid1.NeedDataSource, New GridNeedDataSourceEventHandler(AddressOf Me.RadGrid1_NeedDataSource)
	AddHandler Me.RadGrid1.DetailTableDataBind, New GridDetailTableDataBindEventHandler(AddressOf Me.RadGrid1_DetailTableDataBind)
	
	Me.RadGrid1.CssClass = "RadGrid"
	
	Me.RadGrid1.Width = Unit.Percentage(100)
	Me.RadGrid1.PageSize = 5
	Me.RadGrid1.AllowPaging = true
	Me.RadGrid1.AutoGenerateColumns = false
	Me.RadGrid1.GroupingEnabled = true
	Me.RadGrid1.ShowGroupPanel = true
	Me.RadGrid1.ClientSettings.AllowDragToGroup = true
	
	Me.RadGrid1.MasterTableView.DataMember = "Customers"
	Me.RadGrid1.MasterTableView.PageSize = 15
	
	Dim column1 As New GridBoundColumn
	boundColumn.DataField = "CustomerID"
	boundColumn.HeaderText = "CustomerID"
	Me.RadGrid1.MasterTableView.Columns.Add(boundColumn)
	
	    '...
	‘Add to page controls collection
	Me.PlaceHolder1.Controls.Add( RadGrid1 )</pre>
	          
````


## 2nd Scenario

You can add **RadGrid** to the page using the designer, but create the structure programmatically in the**Page.Load** event handler. In this scenario, the structure should be built only where **Page.IsPostBack**is **false**. You should also add the instances of any created objects, such as columns and detail tables, to the**RadGrid** before any of those object’s properties have been set. This is important because no **ViewState**is managed for the object before it has been added to the corresponding collection.

Example:



````C#
	
	    private void Page_Load(object sender, System.EventArgs e)
	    {
	        if (!IsPostBack)
	        {
	            GridBoundColumn boundColumn;
	            //Important: first Add column to the collection
	            boundColumn = new GridBoundColumn();
	            this.RadGrid1.MasterTableView.Columns.Add(boundColumn);
	            //Then set properties
	            boundColumn.DataField = "CustomerID";
	            boundColumn.HeaderText = "CustomerID";
	        }
	    }
````
````VB
	    Private Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
	        If Not IsPostBack Then
	            Dim column1 As New GridBoundColumn
	            'Important: first Add column to the collection
	            Me.RadGrid1.MasterTableView.Columns.Add(column1)
	            'Then set properties
	            column1.DataField = "CustomerID"
	            column1.HeaderText = "CustomerID"
	        End If
	    End Sub
````


## 2. Misusing or Not Using NeedDataSource Event

The **NeedDataSource** event helps you easily control events like paging, sorting, and grouping, with**RadGrid**. Using these types of **PostBack** events, which **RadGrid** fires, canlead to a change in the **Items** collections of each **GridTableView** in a **RadGrid**.A structural change here means that items should be recreated. In order to achieve that, the **RadGrid** should have a**DataSource** assigned and the **DataBind()** method should be called. Then, instead of writing all the code to handle the appropriate scenario, you can just let RadGrid handle these changes internally and only handle **NeedDataSource**,which fires at the exact time the items should be recreated.

>important You should avoid using the **NeedDataSource** event handler to change the structure of an instance of **RadGrid** . If it is necessary to change the structure, you may need to use the event argument object to check the reasonthat **NeedDataSource** was being fired. Also, the developer should not call the **DataBind()** method inthe **NeedDataSource** event handler. It will be called internally when needed.
>


Often developers do not realize that **NeedDataSource** is called only when **RadGrid** "knows" aboutthe structural changes, such as when a sort or page command is executed. In all other cases, when you make changes to the structure of the gridthat require binding, you should call the **Rebind()** method. This method will first check if the**DataSource** has been assigned, then it will force the RadGrid instance to fire **NeedDataSource**and then **DataBind()**. You can find more information about using **NeedDataSource** and when thisevent fires in this [online demo](http://demos.telerik.com/aspnet-ajax/Grid/Examples/Programming/NeedDataSource/DefaultCS.aspx)

## 3. Using EnableViewState = false in Non-supported Scenarios

See [Switching off RadGrid's viewstate ]({%slug grid/performance/optimizing-viewstate-usage%}) topic for details aboutthe **EnableViewState**property.

## 4. Using Cell Numeric Index to Find a Cell in a GridItem Instead of Using Item's String Index by Column.UniqueName

One of the major differences between **RadGrid** and the standard .NET **DataGrid** control is thedynamic column structure of **RadGrid**. Unlike the **DataGrid**, **RadGrid** supportsoperations such as column reordering and grouping which alter the **Cells** collection of **GridItem**objects in a way that can’t be predicted by the page developer. For example, when using a **DataGrid**, many developers used tosearch a cell in an item using the following code:



````C#
	item.Cells[4]          
````
````VB
	item.Cells(4)
````


However, imagine that the user has changed the column order using a client-side drag-and-drop operation. Then the cell with index 4 will no longerrefer the same field value. That's why **RadGrid** provides the ability to access cells in items using the correspondingcolumn’s **UniqueName**. For example, if you have a column with the unique name "CustomerID" you can find the correspondingcell in a **GridItem** using:



````C#
	item.Cells["CustomerID"] 
	//for GridDataItem you can replace that with
	item["CustomerID"]          
````
````VB
	    item.Cells("CustomerID")
	    'for GridDataItem you can replace that with
	    item("CustomerID")
````


This will prevent you from accessing the wrong cell.

## 5. Finding Controls Inside RadGrid

You should note the following about searching for controls in an item that is in edit mode. Unlike the **DataGrid/GridView**control, **RadGrid** supports the **EditForms** feature that is set by default. It alters the "traditional"editing style by displaying an edit form item (row), below the item currently being edited, instead displaying the in-place editors. That is why,if you have template columns for example, and you have to search for a control that is in the edit template, you should search the**EditFormItem** instead of the edited item. This item is accessible using the**GridDataItem.EditFormItem** property.

Additional details can be found in these help resources:

[InPlace editing]({%slug grid/data-editing/edit-mode/in-place%})[EditForms editing]({%slug grid/data-editing/edit-mode/edit-forms%})[Custom edit forms]({%slug grid/data-editing/edit-mode/custom-edit-forms%})

## 6. Overusing Hierarchical Structure in TreeView Style Scenarios

To better understand how **RadGrid** deals with hierarchy, refer to the article: [Understanding hierarchical grid structure]({%slug grid/hierarchical-grid-types-and-load-modes/understanding-hierarchical-grid-structure%}).

**RadGrid**supports hierarchical database structure or building hierarchy through self-referencing source table (having ID->ParentID relations in the same DataTable). This means that with [standard hierarchy](http://demos.telerik.com/aspnet-ajax/grid/examples/hierarchy/declarativerelations/defaultvb.aspx), in each level of hierarchy, all items will have an equal number of details tables (one or[several in the same level]({%slug grid/hierarchical-grid-types-and-load-modes/several-tables-at-a-level%})).

This is unlike the **RadTreeView** control which supports different number of sub-items on each level - the equivalent in thiscase is **RadTreeList** control that allows you to have variable number of nested sub-tables in each level. Refer to[this online demo](http://demos.telerik.com/aspnet-ajax/treelist/examples/overview/defaultcs.aspx) for further reference.

>note Note that **RadGrid** will not behave correctly if you add detail tables programmatically in **DetailTableDataBind** event handler.
>


## 7. Comman Mistakes When Handling the ItemDataBound or ItemCreated Events.

**ItemDataBound** and **ItemCreated** event handler allows you to manipulate the controls and the	values of each cell in **RadGrid**. The differences between those two events is discussed thoroughlyin	[this topic]({%slug grid/control-lifecycle/differences-between-itemcreated-and-itemdatabound-%}). When handling **ItemCreated** and	**ItemDataBound** events, forgetting to check for the appropriate:

* **GridItemType** - At the following [article](http://www.telerik.com/help/aspnet-ajax/t_telerik_web_ui_griditemtype.html)you can find a list with all available item types.

* Detail table in the hierarchical structure - This check can be done using: **- e.Item.OwnerTableView.DataMember** property (.NET 2.x when not using data source controls)**- e.Item.OwnerTableView.DataSourceID**(.NET 2.x/3.x/4.x with data source controls) or**-e.Item.OwnerTableView.Name** (.NET 2.x/3.x/4.x)where **e** is the event parameter of the event handler method. This way you can avoid possible problems when performing customization of items specific to a certain level of the hierarchy.A code sample is available in [this section]({%slug grid/hierarchical-grid-types-and-load-modes/how-to/distinguish-grid-rows-in-hierarchy-on-itemcreated/itemdatabound%}) of the help as well.

## See Also

 * [Understanding Dynamic Controls](http://weblogs.asp.net/infinitiesloop/archive/2006/08/25/TRULY-Understanding-Dynamic-Controls-_2800_Part-1_2900_.aspx)

 * [Simple Vs Advanced Data Binding](http://demos.telerik.com/aspnet-ajax/Grid/Examples/Programming/NeedDataSource/DefaultCS.aspx)

 * [Standard Hierarchy](http://demos.telerik.com/aspnet-ajax/grid/examples/hierarchy/declarative-relations/defaultcs.aspx)

 * [RadTreeList](http://demos.telerik.com/aspnet-ajax/treelist/examples/overview/defaultcs.aspx)

 * [Optimizing ViewState usage]({%slug grid/performance/optimizing-viewstate-usage%})

 * [Understanding hierarchical grid structure]({%slug grid/hierarchical-grid-types-and-load-modes/understanding-hierarchical-grid-structure%})

 * [InPlace editing]({%slug grid/data-editing/edit-mode/in-place%})

 * [EditForms editing]({%slug grid/data-editing/edit-mode/edit-forms%})

 * [Custom edit forms]({%slug grid/data-editing/edit-mode/custom-edit-forms%})
