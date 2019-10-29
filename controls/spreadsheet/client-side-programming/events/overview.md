---
title: Events Overview
page_title: RadSpreadsheet Client-side Events Overview | UI for ASP.NET AJAX Documentation
description: RadSpreadsheet Client-side Events Overview
slug: spreadsheet/client-side-programming/events/overview
tags: spreadsheetevents,overview,client,spreadsheet,events
published: True
position: 0
---

# Events Overview

This article lists the clients-side events of the **RadSpreadsheet** and how to use them. Apart from the OnClientChange event, all other events are available as of R3 2019.

All events follow the MS AJAX client events convention and receive two arguments:

1. `sender` - the [RadSpreadsheet]({%slug spreadsheet/client-side-programming/objects/radspreadsheet%}) instance that raised the event
1. `event arguments` - event-specific data provided to the developer

**RadSpreadsheet** is a wrapper over the Kendo UI Spreadsheet widget and so it exposes the [client events](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet#events) and data it does. You can find a list below.

* [OnClientInsertSheet](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/events/insertsheet) — Triggered when a sheet is inserted. Cancellable.
* [OnClientRemoveSheet](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/events/removeSheet) — Triggered when a sheet will be removed. Cancellable.
* [OnClientRenameSheet](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/events/renameSheet) — Triggered when a sheet will be renamed. Cancellable.
* [OnClientSelectSheet](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/events/selectsheet) — Triggered when a sheet will be activated. Cancellable.
* [OnClientHideColumn](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/events/hidecolumn) — Triggered when a column will be hidden. Cancellable.
* [OnClientHideRow](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/events/hiderow) — Triggered when a row will be hidden. Cancellable.
* [OnClientUnhideColumn](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/events/unhidecolumn) — Triggered when a column will be shown. Cancellable.
* [OnClientUnhideRow](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/events/unhiderow) — Triggered when a row will be shown. Cancellable.
* [OnClientInsertColumn](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/events/insertcolumn) — Triggered when a column will be inserted. Cancellable.
* [OnClientInsertRow](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/events/insertrow) — Triggered when a row will be inserted. Cancellable.
* [OnClientDeleteColumn](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/events/deletecolumn) — Triggered when a column will be deleted. Cancellable.
* [OnClientDeleteRow](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/events/deleterow) — Triggered when a row will be deleted. Cancellable.
* [OnClientSelect](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/events/select) — Triggered when the Spreadsheet selection is changed. Non-cancellable.
* [OnClientChanging](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/events/changing) — Triggered when a value or validation in the Spreadsheet is about to be changed upon user interaction. Cancellable.
* [OnClientChange](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/events/change) — Triggered when a value in the Spreadsheet has been changed. Non-cancellable.
* [OnClientChangeFormat](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/events/changeformat) — Triggered when the range format is changed from the UI. Non-cancellable.
* [OnClientRender](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/events/render) — Triggered after the widget has completed rendering. Non-cancellable.
* [OnClientExcelExport](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/events/excelexport) — Fires when the user clicks the Export to Excel toolbar button. Cancellable.
* [OnClientExcelImport](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/events/excelimport) — Fired when the user clicks the Open toolbar button. Cancellable.
* [OnClientPdfExport](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/events/pdfexport) — Fired when the user initiates the export to PDF. Cancellable.
* [OnClientCopy](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/events/copy) — Fired when a range of a sheet is about to be copied. Cancellable.
* [OnClientCut](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/events/cut) — Fired when a range of a sheet is about to be cut. Cancellable.
* [OnClientPaste](https://docs.telerik.com/kendo-ui/api/javascript/ui/spreadsheet/events/paste) — Fired when a data is about to be pasted in a sheet. Cancellable.

To get some intellisense inside the event handlers and check what methods are available in the arguments and values they contain, the browser's developer tools can be used. Here is a blog post article that shows one way to do it: Improve Your Debugging Skills with Chrome DevTools, section [Get IntelliSense for the Client-Side Object](https://www.telerik.com/blogs/improve-your-debugging-skills-with-chrome-devtools#get-intellisense-for-the-client-side-object).

