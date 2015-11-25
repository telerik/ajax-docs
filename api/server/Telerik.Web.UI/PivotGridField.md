---
title: Telerik.Web.UI.PivotGridField
page_title: Telerik.Web.UI.PivotGridField
description: Telerik.Web.UI.PivotGridField
---

# Telerik.Web.UI.PivotGridField

A PivotGridField is the main logic unit that relates the content of the pivot grid to
            fields in the DataSource.The PivotGridFielddefines the properties and methods that are common to all
            field types in RadPivotGrid.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.PivotGridField : IComparable, IDisposable, INamingContainer

## Properties

###  DataFormatString `String`

Gets or sets the string that specifies the display format for all cells which belongs to this field.

###  RenderingControl `PivotGridFieldRenderingControl`

Gets or sets a referance of the PivotGridFieldRenderingControl that allow you to control how the field is rendered.

###  ZoneType `PivotGridFieldZoneType`

Gets the zone type of the field which
            determines in which zone the field is positioned.

###  IsHidden `Boolean`

Gets or sets if the field will be hidden
            which exlude it from the pivot table calculations.

###  SortOrder `PivotGridSortOrder`

Gets or sets a referance instance of the PivotGridSortOrder enum.

###  ZoneIndex `Int32`

Gets or sets the order indexes for fields displayed within the same zone.

###  UniqueName `String`

Each column in Telerik RadPivotGrid has an UniqueName
            property (string). This property is assigned automatically by the designer (or the
            first time you want to access the columns if they are built dynamically).

###  DataField `String`

Gets or sets the field name from the specified data source to bind to the
            PivotGridField.

###  Caption `String`

Gets or sets the field's display caption.

###  TotalFormatString `String`

Gets or sets the string that specifies the display format for all total cells which belongs to this field.

###  CellStyle `Style`

Style of the cells in the the grid, corresponding to the field.

## Methods

###  Show

Sets the IsHidden property to false and sets the 
            ZoneIndex so the field will be placed as last in the zone

#### Returns

`System.Void` 

