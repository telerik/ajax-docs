---
title: Telerik.Web.UI.GridKeyboardNavigationSettings
page_title: Telerik.Web.UI.GridKeyboardNavigationSettings
description: Telerik.Web.UI.GridKeyboardNavigationSettings
---

# Telerik.Web.UI.GridKeyboardNavigationSettings

Class holding settings associated with the Telerik.Web.UI.RadGrid keyboard 
            navigation functionality.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.ObjectWithState
* Telerik.Web.UI.GridKeyboardNavigationSettings

## Properties

###  AllowActiveRowCycle `Boolean`

This property set whether active row should be set to first/last item when current item is last/first 
            and down/up key is pressed (default is false)

###  AllowSubmitOnEnter `Boolean`

This property set whether the edit form will be submited when the ENTER key is pressed 
            (default is false)

###  CancelChangesKey `GridFocusKeys`

Gets or sets the key which cancel all changes when a GridTableView.EditMode is set to Batch.

###  CollapseDetailTableKey `GridFocusKeys`

This property set the key that is used for collapsing the active row's detail table
            (default key is Left arrow)

###  DeleteActiveRow `Int32`

Gets the key which deletes the current active row.

###  EnableKeyboardShortcuts `Boolean`

Gets or sets a value which if set to false, prevents the keyboard short-cuts such as update/insert on ENTER,
            exit edit/insert mode on ESC, etc. from being active.

###  ExitEditInsertModeKey `Int32`

Gets the key used when exiting edit or insert mode.

###  ExpandDetailTableKey `GridFocusKeys`

This property set the key that is used for expanding the active row's detail table
            (default key is Right arrow)

###  FocusKey `GridFocusKeys`

This property sets the key that is used to focus RadGrid. It is always used with CTRL key combination.

###  InitInsertKey `GridFocusKeys`

This property sets the key that is used to open insert edit form of RadGrid. It is always used with CTRL key combination.

###  RebindKey `GridFocusKeys`

This property sets the key that is used to rebind RadGrid. It is always used with CTRL key combination.

###  SaveChangesKey `GridFocusKeys`

Gets or sets the key which update all records when a GridTableView.EditMode is set to Batch.

###  UpdateInsertItemKey `Int32`

Gets the key used when updating or inserting an item.

###  ValidationGroup `String`

This property set the validation group of all controls placed into the Edit/Insert form of the RadGrid

