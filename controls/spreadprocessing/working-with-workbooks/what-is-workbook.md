---
title: What is a Workbook
page_title: What is a Workbook | UI for ASP.NET AJAX Documentation
description: What is a Workbook
slug: spreadprocessing/working-with-workbooks/what-is-workbook
tags: workbook
published: True
position: 0
---

# What is a Workbook

This article will help you get familiar with the concept of a workbook and its features.

## What is a Workbook?

The workbook lays in the core of the **RadSpreadProcessing** and **RadSpreadsheet** document model. It is the primary document that you use to retrieve, manipulate and store data. The workbook can also be viewed as a collection of worksheets, where a worksheet is in turn defined as a collection of cells organized in rows and columns. Each workbook contains at least one worksheet and often holds several sheets with related information.

The workbook is designed to hold together multiple worksheets in order to allow efficient organization and consolidation of data. Typically, a workbook has a single theme and contains worksheets with related data. For example, an annual budget workbook may comprise four worksheets that break down the budget in quarters.

You can create a workbook from scratch or import an existing document. To save a document you can export its contents into a csv, txt or xlsx file.

## What is in it?

The workbook has several important characteristics:

* **Collection of Worksheets**: Each workbook maintains a collection of worksheets that allows you to add and delete worksheets. It also allows you to move worksheets within the workbook or simply iterate through them.

* **Active Worksheet**: The workbook exposes a property that indicates the active worksheet. Note that there is a single active worksheet in a workbook at a time.

* **History**: Each workbook maintains a history stack that records all changes introduced to its content. That said, you can perform undo and redo operations effortlessly, replying on the built-in recorder. Although the tracking of changes is done automatically, it also allows manual control over the recorded items. The history of the workbook also lets you to group several actions into a one undo step. This feature is very handy, for example, when you replace the contents of multiple cells in a single action.

* **Names (Named Ranges)**: the Workbook class exposes a Names property that of type NameCollection that allows you to create, update and manage names.

* **Collection of Cell Styles**: Each workbook contains a collection of cell styles. A cell style is a predefined set of formatting options, such as borders, fonts, fills and number formats, that you can apply to a cell. The concept of cell styles facilitates the process of formatting cells since it allows you to set multiple properties in one step and also serves as means for achieving consistent look. The collection of cell styles allows you to add, retrieve and delete styles. 

* **Theme**: The workbook has a theme that allows you specify colors, fonts and a variety of graphic effect for the whole document. 

* **Find and Replace**: The Workbook class offers friendly API that allows you to find and replace text and numbers in all worksheets it contains.

* **Protection**: The feature lets you prevent users from modifying the structure of the workbook: adding, removing, renaming or reordering sheets.

![Workbook](images/RadSpreadProcessing_Working_With_Workbooks_What_Is_Workbook_01.png)
