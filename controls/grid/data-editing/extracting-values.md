---
title: Extracting values
page_title: Extracting values | UI for ASP.NET AJAX Documentation
description: Extracting values
slug: grid/data-editing/extracting-values
tags: extracting,values
published: True
position: 2
---

# Extracting values



## 

Telerik RadGrid has the following column types capable of editing data that will be persisted automatically:

* __GridBoundColumn__

* __GridCheckboxColumn__

* __GridDropDownColumn__

* __GridDateTimeColumn__

* __GridNumericColumn__

* __GridMaskedColumn__

* __GridHTMLEditorColumn__

* __GridTemplateColumn__

* __GridRatingColumn__

By default Telerik RadGrid will extract the values from the corresponding editors of the currently edited __GridDataItem__ (when updating or inserting a new record for all columns unless they are set as read-only).When deleting an item, Telerik RadGrid can extract the values from the cells of the __GridDataItem__which will be deleted when in "Browse" mode. The extraction of all values might be necessary when you need to know all the values of the item that should be deleted to perform this operation consistently in the database.

Extracting values through the __ExtractValuesFromItem/ExtractValues__ methods is supported when the grid edit mode is auto-generated (__InPlace/EditForms__). When you define user control edit form for your grid instance, you have to use different means to retrieve the values from the edit form (individual data extraction from the controls inside the user control or some other alternative). Telerik RadGrid can extract values even from columns that are set as read-only, if the column's property __ForceExtractValue__ is set to:

* "InBrowseMode" - when deleting records

* "InEditMode" - when inserting/updating records

* "Always" - for all modes

The default value for this property is __"None"__, i.e. the data extraction will not be performed for read-only columns.
