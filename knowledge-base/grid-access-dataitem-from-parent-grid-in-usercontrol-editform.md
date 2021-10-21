---
title: Access DataItem from the topmost Grid from UserControl EditForm
description: Access DataItem from the topmost Grid from UserControl EditForm
type: how-to
page_title: Access DataItem from the topmost Grid from UserControl EditForm - RadGrid
slug: grid-access-dataitem-from-parent-grid-in-usercontrol-editform
res_type: kb
---

## DESCRIPTION

How to access the DataItem of the parent RadGrid from a WebUserControl EditForm. How to do this in a nested scenario where one edit form can contain another grid and the third-level grid needs data from the top-level grid.

## SOLUTION

The grid populates the data item object when the edit/insert command is invoked (see the [Edit Form Types demo](http://demos.telerik.com/aspnet-ajax/grid/examples/data-editing/edit-form-types/defaultcs.aspx)). Subsequent postbacks may not populate it.

You can store the data in the ViewState of the user control when it loads initially, or the Session

Alternatively, you can traverse the control hierarchy of the grids and user controls and use the [GetDataKeyValue() method](http://docs.telerik.com/devtools/aspnet-ajax/controls/grid/how-to/Selecting/retrieving-primary-key-field-values-for-selected-items) the grid items expose to fetch data. You can find a small example of this attached below. Make sure to add the necessary fields in the DataKeyNames collection of the MasterTableView.

**DOWNLOAD** the sample: [grid-nested-ucs.zip](files/grid-nested-ucs.zip)
 
