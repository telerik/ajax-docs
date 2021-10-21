---
title: Set Default Insert Value When Adding New Records in RadGrid
description: Set Default Insert Value When Adding New Records in RadGrid. Check it now!
type: how-to
page_title: Set Default Insert Value When Adding New Records in RadGrid
slug: grid-set-default-insert-value-when-adding-new-records-in-grid
res_type: kb
---

## Description

When the user creates new records in RadGrid, you may want to present them with pre-set default values to make it more convenient to fill up the form.

## Solution

For most of the data-type columns like GridBoundColumn, GridNumericColumn, etc., you can set the DefaultInsertValue property:  

````
<telerik:GridNumericColumn ... DefaultInsertValue="0">
```` 

The alternative approach is to access the generated edit controls and set their initial value manually:

[Accessing Controls in Edit/Insert Mode]({%slug grid/accessing-values-and-controls/server-side/accessing-controls%}#accessing-controls-in-editinsert-mode)
  
You can use the approach demonstrated here to determine whether the item is in edit or insert mode:  

[Distinguish Edit or Insert Mode]({%slug grid/data-editing/distinguish-edit-or-insert-mode%})  
  

The alternative approach for Batch editing is different since this mode is different than other server-side based modes:  

[Accessing Controls in Batch Edit Mode]({%slug grid/data-editing/distinguish-edit-or-insert-mode%}#accessing-controls-in-batch-edit-mode)  
  

Therefore, with Batch editing you can use the following event handler to achieve this requirement by accessing the generated controls on client-side using jQuery:

[OnBatchEditOpened]({%slug grid/client-side-programming/events/onbatcheditopened%}})  


