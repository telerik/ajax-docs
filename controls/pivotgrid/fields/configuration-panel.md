---
title: Configuration Panel
page_title: Configuration Panel | UI for ASP.NET AJAX Documentation
description: Configuration Panel
slug: pivotgrid/fields/configuration-panel
tags: configuration,panel
published: True
position: 3
---

# Configuration Panel



The idea behind the __RadPivotGrid ConfigurationPanel__ is taken from the __Excel PivotTable Field List__ which enables fields sorting, reordering and hiding operations performed outside of the table which represents the data.Enabling such functionality gives the user ability to separate the logic for manipulating fields and displaying data.

>note Note that setting __ShowDataHeaderZone="false"__ , __ShowColumnHeaderZone="false"__ , __ShowRowHeaderZone="false"__ , __ShowFilterHeaderZone="false"__ will hide the fields positioned in the RadPivotGrid data table and leave only the fields in the configuration panel.
>


## RadPivotGrid ConfigurationPanelSettings

The __RadPivotGrid ConfigurationPanelSettings__ property represents options for configuring the panel. The behavior of each property and its corresponding values are described below:

1. __Position__ - which determines the panel position relative to the RadPivotGrid control.

* __FieldsWindow(default)__–places the panel in the RadPivotGrid FieldsWindow RadWindow control which could be shown by setting the EnableZoneContextMenu to true and clicking “Show Fields Window”.

* __Up, Right, Down, Left__`` -values correspondingly place the panel up, right, down, left relative to the pivot table.

1. __LayoutType__ - the panel layout could be altered on the client and its default type could be altered by setting one of the four available values.

* __Stacked, SideBySide__ - includes all five available sections. The two types position the five sections differently as shown below.


| ![pivotgrid-Configuration Panel-Side-Layout](images/pivotgrid-ConfigurationPanel-Side-Layout.png) | ![pivotgrid-configuration Panel-Sideby Side-layout](images/pivotgrid-configurationPanel-SidebySide-layout.png) |
| ------ | ------ |

* __TwoByTwo, OneByFour__ – includes four sections excluding the “Hidden fields” container. The two types position the four sections differently as shown below.


| ![pivotgrid-configuration Panel-Twoby Two-layout](images/pivotgrid-configurationPanel-TwobyTwo-layout.png) | ![pivotgrid-configuration Panel-Fourby Four-layout](images/pivotgrid-configurationPanel-FourbyFour-layout.png) |
| ------ | ------ |

1. __EnableDragDrop__ - a Boolean property determining if fields could be dragged or not.

1. __EnableFieldsContextMenu__ - a Boolean property determining if the context menu of the field will be enabled.

1. __DefaultDeferedLayoutUpdate__ - determines if the Defer Layout Update will be enabled which will enable the __RadPivotGrid__ to make rearrangements and sorting operations without a need for a postback. Updating all the pivot data is one click away.

1. __OlapUncategorizedFolderName__ - determines the name of category folder under which all uncategorized fields are placed.

1. __FlattenOlapUncategoriezedFields__ - gets/sets a value indicating if all uncategorized fields coming from OLAP cube will be placed under category folder or rendered directly as children.
