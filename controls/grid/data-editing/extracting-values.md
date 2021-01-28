---
title: Extracting values
page_title: Extracting values - RadGrid
description: Check our Web Forms article about Extracting values.
slug: grid/data-editing/extracting-values
tags: extracting,values
published: True
position: 2
---

# Extracting values

Telerik RadGrid has the following column types capable of editing data that will be persisted automatically:

* **GridBoundColumn**

* **GridCheckboxColumn**

* **GridDropDownColumn**

* **GridDateTimeColumn**

* **GridNumericColumn**

* **GridMaskedColumn**

* **GridHTMLEditorColumn**

* **GridTemplateColumn**

* **GridRatingColumn**

By default Telerik RadGrid will extract the values from the corresponding editors of the currently edited **GridDataItem** (when updating or inserting a new record for all columns unless they are set as read-only).When deleting an item, Telerik RadGrid can extract the values from the cells of the **GridDataItem**which will be deleted when in "Browse" mode. The extraction of all values might be necessary when you need to know all the values of the item that should be deleted to perform this operation consistently in the database.

Extracting values through the **ExtractValuesFromItem/ExtractValues** methods is supported when the grid edit mode is auto-generated (**InPlace/EditForms**). When you define user control edit form for your grid instance, you have to use different means to retrieve the values from the edit form (individual data extraction from the controls inside the user control or some other alternative). Telerik RadGrid can extract values even from columns that are set as read-only, if the column's property **ForceExtractValue** is set to:

* "InBrowseMode" - when deleting records

* "InEditMode" - when inserting/updating records

* "Always" - for all modes

The default value for this property is **"None"**, i.e. the data extraction will not be performed for read-only columns.

For GridTemplateColumn instances, the `ExtractValues()` method will provide data in case there is a `<%#Bind("someColumn") %>` expression in the `EditItemTemplate` or `InsertItemTemplate`. For more complex scenarios or when you cannot use binding expressions, you need to use `.FindControl()` to access the custom controls and extract data: [Accessing Controls in Template Column]({%slug grid/accessing-values-and-controls/overview%}#accessing-controls-in-template-column).
