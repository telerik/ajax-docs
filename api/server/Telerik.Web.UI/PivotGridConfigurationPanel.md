---
title: Telerik.Web.UI.PivotGridConfigurationPanel
page_title: Telerik.Web.UI.PivotGridConfigurationPanel
description: Telerik.Web.UI.PivotGridConfigurationPanel
---

# Telerik.Web.UI.PivotGridConfigurationPanel

The idea behind the ConfigurationPanel is taken from the Excel 
            PivotTable Field List which enables Fields manipulations like 
            sorting, reordering, hiding outside of the table which represents 
            the data. Enabling such functionality gives the user ability to 
            separate the logic for manipulating fields and displaying data.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* System.Web.UI.WebControls.CompositeControl
* Telerik.Web.UI.PivotGridConfigurationPanel

## Properties

###  OwnerPivotGrid `RadPivotGrid`

Gets the owner pivot grid.

###  Position `PivotGridConfigurationPanelPosition`

Gets the position where the 
            will be placed.

###  LayoutType `PivotGridConfigurationPanelLayoutType`

Gets the panel layout which could be altered on the client and its 
            default type could be changed by setting on of the four available values.

###  DeferLayoutUpdateCheckBox `CheckBox`

Gets the  control
            which determines if the updates will be made on every operation
            or only when clicking the Update button.

###  UpdateButton `Button`

Gets the  control which
            is enabled when DeferLayoutUpdateCheckBox is Checked and performs
            postback updating the .

###  Controls `ControlCollection`

Gets a  object that represents
            the child controls for a specified server control in the UI hierarchy.

