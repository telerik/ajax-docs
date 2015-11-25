---
title: Telerik.Web.UI.PivotGridExportSettings
page_title: Telerik.Web.UI.PivotGridExportSettings
description: Telerik.Web.UI.PivotGridExportSettings
---

# Telerik.Web.UI.PivotGridExportSettings

Class holding settings associated with the Telerik.Web.UI.RadPivotGrid export settings.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.PivotGridExportSettings

## Properties

###  Excel `PivotGridExcelExportSettings`

RadPivotGrid Excel export settings

###  FileName `String`

A string specifying the name (without the extension) of the file that will be
            created. The file extension is automatically added based on the method that is
            used.

###  IgnorePaging `Boolean`

Specifies whether all records will be exported or merely those on the current
            page.

###  UseItemStyles `Boolean`

Determines whether the RadPivotGrid styles will be applied to the exported files

###  OpenInNewWindow `Boolean`

Opens the exported grid in a new instead of the same page.

## Methods

###  TrackViewState

#### Returns

`System.Void` 

###  LoadViewState

#### Returns

`System.Void` 

###  SaveViewState

#### Returns

`System.Object` 

