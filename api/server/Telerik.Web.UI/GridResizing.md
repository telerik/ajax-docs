---
title: Telerik.Web.UI.GridResizing
page_title: Telerik.Web.UI.GridResizing
description: Telerik.Web.UI.GridResizing
---

# Telerik.Web.UI.GridResizing

Class containing settings associated with the resizing in Telerik.Web.UI.RadGrid .

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.ObjectWithState
* Telerik.Web.UI.GridResizing

## Properties

###  AllowColumnResize `Boolean`

Gets or sets a value determining whether the column resize will be enabled.

###  AllowRowResize `Boolean`

Gets or sets a value determining whether the row resize will be enabled.

###  ShowRowIndicatorColumn `Boolean`

Gets or sets a value determining if a indicator column will be created.
            The column leaves extra space so it is easier to resize columns.

###  ResizeGridOnColumnResize `Boolean`

Gets or sets a value determining whether the  html element
            will be resized during column resizing.

###  ClipCellContentOnResize `Boolean`

Gets or sets a value determining if the clip cell content functionlity is enabled.
            The feature when enabled allows the column to be resized so the content of the cells
            is no longer visible. If set to false the resizing will force the cell content to be
            always visible.

###  EnableRealTimeResize `Boolean`

Gets or sets a value determining if the column are resized in real time
            and the result is visible during resizing or if the value is false
            the visual result is seen after the user have ended the resize operation.

###  AllowResizeToFit `Boolean`

Gets or sets a value indicating if the resize to fit functionality have been enabled.
            The feature allows when double clicking on the 'Drag to resize' handle the column to be resized
            to exactly fit the content of the biggest cell in the column.

###  EnableNextColumnResize `Boolean`

Gets or sets a value indicating if the next column resize feature is enabled. The feature allows resizing one column to only change the width of the next column.

## Methods

###  GetViewStateValue

#### Returns

`Telerik.Web.UI.T` 

