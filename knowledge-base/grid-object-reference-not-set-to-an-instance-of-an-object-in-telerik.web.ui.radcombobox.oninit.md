---
title: Object reference not set to an instance of an object in Telerik.Web.UI.RadComboBox.OnInit
description: Object reference not set to an instance of an object in Telerik.Web.UI.RadComboBox.OnInit
type: how-to
page_title: Object reference not set to an instance of an object in Telerik.Web.UI.RadComboBox.OnInit - RadGrid
slug: grid-object-reference-not-set-to-an-instance-of-an-object-in-telerik.web.ui.radcombobox.oninit
res_type: kb
---


## DESCRIPTION

Object reference not set to an instance of an object in Telerik.Web.UI.RadComboBox.OnInit(EventArgs e)

In some cases, after a few postbacks, you may get a similar error.

This error seems related to the pager of the grid, yet we have not received a sample that reproduces the error so that we can investigate.

```XML
Object reference not set to an instance of an object.    
at Telerik.Web.UI.RadComboBox.OnInit(EventArgs e)    
at System.Web.UI.Control.InitRecursive(Control namingContainer)    
at System.Web.UI.Control.AddedControl(Control control, Int32 index)    
at Telerik.Web.UI.GridPagerButtonBuilder.CreatePageSizeDropDown(Panel container)    
at Telerik.Web.UI.GridPagerItem.InitializePagerItem(GridColumn[] columns)    
at Telerik.Web.UI.GridPagerItem.SetupItem(Boolean dataBind, Object dataItem, GridColumn[] columns, ControlCollection rows)    
at Telerik.Web.UI.GridTableView.CreateTopPagerItem(Boolean useDataSource, GridColumn[] copiedColumnSet, Boolean isPagingEnabled, GridTHead thead)    
at Telerik.Web.UI.GridTableView.CreateControlHierarchy(Boolean useDataSource)    
at Telerik.Web.UI.GridTableView.CreateChildControls(IEnumerable dataSource, Boolean useDataSource)    
at System.Web.UI.WebControls.CompositeDataBoundControl.CreateChildControls()    
at System.Web.UI.Control.EnsureChildControls()    
at Telerik.Web.UI.GridTableViewBase.get_Controls()    
at Telerik.Web.UI.GridTableView.GetGridTable()    
at Telerik.Web.UI.RadGrid.PrepareRowsVisibility(GridTableView view)    
at Telerik.Web.UI.RadGrid.PrepareItems()    
at Telerik.Web.UI.RadGrid.ControlPreRender()    
at System.Web.UI.Control.PreRenderRecursiveInternal()    
at System.Web.UI.Control.PreRenderRecursiveInternal()    
at System.Web.UI.Control.PreRenderRecursiveInternal()    
at System.Web.UI.Control.PreRenderRecursiveInternal()    
at System.Web.UI.Control.PreRenderRecursiveInternal()    
at System.Web.UI.Control.PreRenderRecursiveInternal()    
at System.Web.UI.Control.PreRenderRecursiveInternal()    
at System.Web.UI.Control.PreRenderRecursiveInternal()    
at System.Web.UI.Control.PreRenderRecursiveInternal()    
at System.Web.UI.Page.ProcessRequestMain(Boolean includeStagesBeforeAsyncPoint, Boolean includeStagesAfterAsyncPoint)
```

## SOLUTION

The solutions below are suggestions that have been helpful in various cases, so you can try them:

- Make sure the grid is **not bound** to a **null**(**Nothing**) data source. If the there is no data to bind to the grid, **use an empty string instead**: `RadGrid1.DataSource = "";`
- Make sure that the g**rid data source is set only in the NeedDataSource handler**, and that there are **no calls to its .DataBind()** method (replace them with .Rebind()). You can read more on how to configure advanced data binding in the following article: [Programmatic Data Binding Using the NeedDataSource Event](http://docs.telerik.com/devtools/aspnet-ajax/controls/grid/data-binding/understanding-data-binding/server-side-binding/advanced-data-binding-%28using-needdatasource-event%29).
- If the data is a small amount,** disable paging** in the grid.
- Use a **RadDropDownList** instead of a ComboBox in the pager of the grid

````HTML
<MasterTableView>
    <PagerStyle PageSizeControlType="RadDropDownList" />
````

- Make the **pager always visible**

````HTML
<MasterTableView>
    <PagerStyle AlwaysVisible="true" />
````

- Try a **pager mode without a dropdown**, like NextPrev or Slider.

````HTML
<MasterTableView>
    <PagerStyle Mode="Advanced|NextPrev|NextPrevNumericAndAdvanced|NumericPages|Slider" />
````

- If you are **changing the structure of the grid** (list of columns, for example), do that in **Page_Init** as explained in the following articles: [Changing the Grid Structure Dynamically]({%slug grid/create-radgrid/changing-the-grid-structure-dynamically-on-postback%}) on Postback and [Creating a RadGrid Programmatically]({%slug grid/create-radgrid/creating-a-radgrid-programmatically%}). Do NOT do this in late events like **PreRender**.
- **Remove RadCompression** entries from your web.config. Having that can cause double compression of the ViewState and errors. IIS7 and later have their own dynamic content compression module which makes RadCompression redundant.
- If the grid is AJAX-enabled, **remove nested RadAjaxPanel instances** around it. In general, simplify the AJAX setup to avoid **nested update panels or RadAjaxManager settings** as well.
 
