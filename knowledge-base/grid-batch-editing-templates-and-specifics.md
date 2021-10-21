---
title: RadGrid Batch Editing Templates and Specifics
description: Batch Editing Specifics. Check when Batch editing is suitable to use!
type: troubleshooting
page_title: RadGrid Batch Editing Templates and Specifics
slug: grid-batch-editing-templates-and-specifics
position: 
tags: radgrid, batch
res_type: kb
---

## Description

RadGrid provides built-in Batch editing and it is one of the top and most popular editing modes:

 [Batch Editing Demo](https://demos.telerik.com/aspnet-ajax/grid/examples/data-editing/batch-editing/defaultcs.aspx)


Many customers are used to this functionality and like it. Batch editing is the newest editing mode historically in the AJAX RadGrid component and since its introduction, there were a wave of customers switching to it, while many more start their new projects directly with choosing this mode. For reference, Batch editing (or InCell editing) is the default edit mode of [client-side Kendo grid](https://demos.telerik.com/kendo-ui/grid/editing).

Batch editing provides the unique option to switch back and forth between View and Edit mode of the cell/row, then submit multiple changes via a single Save button. To be able to do that, its internal logic is implemented on client-side. This makes it different than the other server-side modes – EditForms, InPlace and PopUp. This is also mentioned and explained in this section:

 [Accessing Controls in Batch Edit Mode](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/accessing-values-and-controls/server-side/accessing-controls#accessing-controls-in-batch-edit-mode)

It is a rather custom-made editing mode where there is only a single server-side control for a column and this control is being used for multiple cells, which is rather unusual for WebForms technology. Leveraging masterful internal script logic, Batch editing is providing something which would be otherwise just “not supported”.

However (also somewhat expected), this advantageous client-side editing structure comes with its pitfalls. Although the majority of basic form elements (like input and select) are made to work automatically in Templates, Batch editing cannot recognize complex  templates with more advanced or specific controls. The customer should pass these values manually. This is also mentioned in the note at the end of this article:

 [Batch Editing Overview]({%slug grid/data-editing/edit-mode/batch-editing/overview%})


This situation causes some features which come naturally with the server-side modes to require custom implementation and script coding when using Batch editing. We prepared a list of the primary advantages of Batch editing, as well as, where it is more appropriate to use another editing mode.

## When is it suitable?

 - **Performance** - since there is only 1 control generated on the server for all of the records, Batch editing is very performance friendly. Also, switching between View and Edit modes happens instantly.

 - **Convenience** - some users may find it more convenient to edit multiple records and submit all of them simultaneously.

 - **Keyboard Navigation** - this is another strength of Batch editing. It provides Excel-like keyboard editing and navigation by default.

 - **Client-side Validation** - provided built-in

 - **Creating/Inserting Multiple Blank Records** - possible only with Batch mode

 - **Compliance with Hierarchy** - ability to update all levels with a single click

## When is it NOT suitable?

 - **PostBacks** - since values are parsed and kept on client-side, they can be lost while making PostBack actions

 - **Negative Value Formatting** - financial currency notation with parantheses

 - **Automatic Saving** - on every cell value change

 - **Server-side Validation**

 - **Related Field Editors** - like several cascading dropdownlists. It is supported to have logical relation like changing the value of one control affects another field/cell/control, but I am afraid it is not possible to have related binding between different controls.

 - **Templates** - this is rather true for more complex templates. Although the majority of basic form elements (like input and select) are made to work in templates, Batch editing cannot recognize complex templates with more advanced or specific controls. It is required to pass these values manually using the following 4 events provided by RadGrid and mentioned here: [Working with Templates]({%slug grid/data-editing/edit-mode/batch-editing/working-with-templates%})

 For instance, it is supported to have a RadDropDownList in the EditItemTemplate by default, but not RadComboBox with *EnableLoadOnDemand* or *AllowCustomText* properties enabled.

What we suggest **strongly** in this kind of scenarios is the **InPlace** editing mode. In combination with AJAX, it will have a similar functionality like Batch editing in Row mode:

 - [DropDownTree in Grid InPlace Editing Demo](https://demos.telerik.com/aspnet-ajax/dropdowntree/examples/applicationscenarios/dropdowntreeingrid/defaultcs.aspx)

 - [Grid InPlace Editing Mode]({%slug grid/data-editing/edit-mode/in-place%})

## See Also

- [Batch Editing Demo](https://demos.telerik.com/aspnet-ajax/grid/examples/data-editing/batch-editing/defaultcs.aspx)

- [Client-side Kendo grid](https://demos.telerik.com/kendo-ui/grid/editing)

- [Accessing Controls in Batch Edit Mode](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/accessing-values-and-controls/server-side/accessing-controls#accessing-controls-in-batch-edit-mode)

- [Batch Editing Overview]({%slug grid/data-editing/edit-mode/batch-editing/overview%})

- [DropDownTree in Grid InPlace Editing Demo](https://demos.telerik.com/aspnet-ajax/dropdowntree/examples/applicationscenarios/dropdowntreeingrid/defaultcs.aspx)

- [Grid InPlace Editing Mode]({%slug grid/data-editing/edit-mode/in-place%})

