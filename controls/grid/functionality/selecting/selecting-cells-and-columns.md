---
title: Selecting Cells and Columns
page_title: Selecting Cells and Columns | RadGrid for ASP.NET AJAX Documentation
description: Selecting Cells and Columns
slug: grid/functionality/selecting/selecting-cells-and-columns
tags: selecting,cells,and,columns
published: True
position: 1
---

# Selecting Cells and Columns



## 

Apart from row selection RadGrid supports the selection of individual cells and columns in the grid table. The cell selection functionality is controlled through the ClientSettings.Selecting.CellSelectionMode property:

* **SingleCell** switches on the single cell selection.

* **MultiCell** turns on multiple cell selection.

* **Column** gives you the opportunity to select all the cells withing a given column by clicking on its header or using the column selection API (server and client side).

* **MultiColumn** takes the column selection one step further and equips the grid with the ability to support multiple column selection.

N.B.: The selection state of RadGrid's cells is persisted on postback but not on rebinding of the grid.

# See Also

 * [For a live example that demonstrates RadGrid's cell selection, see RadGrid Cell Selection.](http://demos.telerik.com/aspnet-ajax/Grid/Examples/Client/CellSelection/DefaultCS.aspx)
