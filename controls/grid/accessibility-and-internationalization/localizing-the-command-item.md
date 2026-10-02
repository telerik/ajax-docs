---
title: Localizing the Command Item
page_title: Localizing the Command Item - RadGrid
description: Learn how to localize RadGrid command item text, images, and button IDs through the GridTableView.CommandItemSettings object.
slug: grid/accessibility-and-internationalization/localizing-the-command-item
components: ["grid"]
tags: localizing,the,command,item
published: True
position: 3
---

# Localizing the Command Item



## Localizing command item text and images

The default messages, button text and images in the **CommandItem** can be localized using the following properties in **GridTableView.CommandItemSettings** object:


### Localizing command item text

| **Property** | **Description** |
| ------ | ------ |
| **AddNewRecordText** |The text for the **Add new record** button.|
| **RefreshText** |The text for the **Refresh** button.|
| **ExportToExcelText** |The text for the **Export to Excel** button.|
| **ExportToPdfText** |The text for the **Export to PDF** button.|
| **ExportToCsvText** |The text for the **Export to CSV** button.|
| **ExportToWordText** |The text for the **Export to Word** button.|


### Localizing command item images

| **Property** | **Description** |
| ------ | ------ |
| **AddNewRecordImageUrl** |The URL for the **Add new record** button image.|
| **RefreshImageUrl** |The URL for the **Refresh** button image.|
| **ExportToExcelImageUrl** |The URL for the **Export to Excel** button image.|
| **ExportToPdfImageUrl** |The URL for the **Export to PDF** button image.|
| **ExportToCsvImageUrl** |The URL for the **Export to CSV** button image.|
| **ExportToWordImageUrl** |The URL for the **Export to Word** button image.|




### Identifying command item buttons

| **Button** | **ID** |
| ------ | ------ |
| **AddNewRecord** | `InitInsertButton` |
| **Refresh** | `RebindGridButton` |
| **Export to Excel** | `ExportToExcelButton` |
| **Export to PDF** | `ExportToPdfButton` |
| **Export to CSV** | `ExportToCsvButton` |
| **Export to Word** | `ExportToWordButton` |

## See Also

- [Localizing the Grid Messages]({%slug grid/accessibility-and-internationalization/localizing-the-grid-messages%})
- [Localizing Edit Command Column]({%slug grid/accessibility-and-internationalization/localizing-edit-command-column%})
