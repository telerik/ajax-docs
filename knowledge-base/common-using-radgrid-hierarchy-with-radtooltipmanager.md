---
title: Using RadGrid Hierarchy with RadToolTipManager that is bound to records in another grid
description: Using RadGrid Hierarchy with RadToolTipManager that is bound to records in another grid. Check it now!
type: how-to
page_title: Using RadGrid Hierarchy with RadToolTipManager that is bound to records in another grid
slug: common-using-radgrid-hierarchy-with-radtooltipmanager
res_type: kb
---
   
 ## HOW TO
 Use a hierarchical RadGrid in the user control loaded on demand by the RadToolTipManager where the manager is bound to each row in another grid, so that details about the given row are loaded accordingly and the hierarchical grid functions properly.  
   
 ## DESCRIPTION
 RadToolTipManager reloads the user control inside each time the page is posted back to allow the developer to persist the controls across postbacks, even ones that originate from the user controls themselves. This happens between the Page Init and Page Load events of the main page. The ViewState of the loaded control can also be persisted which can lead to unexpected behavior - the first data that is loaded in the user control will be shown for all subsequent rows in the parent grid because RadGrid stores this data in the ViewState. Disabling the ViewState, however, will limit the hierarchy, exactly because a lot of data is stored there. If you want to override old values in the ViewState of the user control you need to use its PreRender event, but it is too late in the page lifecycle to give a datasource to a programmatically bound grid.  
   
## SOLUTION 
 There are two ways to get the hierarchy to work as expected:  

### Option 1
Use a **declarative relation** and set the **datasource** parameter on each `PreRender` event of the **user control**. This will allow the user control to load the proper data according to the parameter coming from the RadToolTipManager while RadGrid itself will handle the data and expanding/collapsing of the detail tables:  

````C#
protected override void OnPreRender(EventArgs e)
{
    base.OnPreRender(e);
    //this causes the RadGrid to get a new datasourec automatically
    this.SqlDataSource1.SelectParameters["CustomerID"].DefaultValue = this.CustomerID;
}
````
````VB
Protected Overrides Sub OnPreRender(e As System.EventArgs)
    MyBase.OnPreRender(e)
    'this causes the RadGrid to get a new datasourec automatically
    Me.SqlDataSource1.SelectParameters("CustomerID").DefaultValue = Me.CustomerID
End Sub
````

### Option 2

Use a **programmatic relation** to have more freedom in defining the data, but **clear** the old **datasource** each time the **user control** is loaded by the RadToolTipManager to prevent old data from showing up.

````C#
protected void OnAjaxUpdate(object sender, ToolTipUpdateEventArgs args)
{
    //loads the user control
    Control ctrl = Page.LoadControl("DetailsCS.ascx");
    DetailsCS details = (DetailsCS)ctrl;
    details.CustomerID = args.Value;
    //resets the hierarchical grid datasource
    RadGrid grid = ctrl.FindControl("RadGrid1") as RadGrid;
    grid.DataSource = null;
    grid.Rebind();
    //adds the user control
    args.UpdatePanel.ContentTemplateContainer.Controls.Add(ctrl);
}
````
````VB
Protected Sub OnAjaxUpdate(sender As Object, args As ToolTipUpdateEventArgs) Handles RadToolTipManager1.AjaxUpdate
    'loads the user control
    Dim ctrl As Control = Page.LoadControl("DetailsVB.ascx")
    Dim details As DetailsVB = DirectCast(ctrl, DetailsVB)
    details.CustomerID = args.Value
    'resets the hierarchical grid datasource
    Dim grid As RadGrid = details.FindControl("RadGrid1")
    grid.DataSource = Nothing
    grid.Rebind()
    'adds the user control
    args.UpdatePanel.ContentTemplateContainer.Controls.Add(ctrl)
End Sub
````

 There are two examples attached - one for a declarative databinding and one for programmatic databinding. They use the following demos as base, and thus the Northwind database is needed:  
 * [Grid / Declarative Relations](https://demos.telerik.com/aspnet-ajax/grid/examples/hierarchy/declarative-relations/defaultcs.aspx)  
 * [Grid / Programmatic Binding](https://demos.telerik.com/aspnet-ajax/grid/examples/data-binding/programmatic-hierarchy/defaultcs.aspx)  
 * [ToolTip / Update TargetControls with AJAX](http://demos.telerik.com/aspnet-ajax/tooltip/examples/targetcontrolsandajax/defaultcs.aspx?product=tooltip)  
   
 Further information about handling the ViewState of the RadGrid is available in the following help articles:  
 * [Optimizing ViewState usage]({%slug grid/performance/optimizing-viewstate-usage %})
 * [Event sequence]({%slug grid/control-lifecycle/event-sequence %})

