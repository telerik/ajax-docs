---
title: Telerik.Web.UI.TreeListKeyboardNavigationSettings
page_title: Telerik.Web.UI.TreeListKeyboardNavigationSettings
description: Telerik.Web.UI.TreeListKeyboardNavigationSettings
---

# Telerik.Web.UI.TreeListKeyboardNavigationSettings

Represents the settings used when keyboard navigation is enabled in Telerik.Web.UI.RadTreeList .

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.TreeListKeyboardNavigationSettings

## Properties

###  AllowActiveRowCycle `Boolean`

This property set whether active row should be set to first/last item when current item is last/first 
            and down/up key is pressed (default is false)

###  AllowSubmitOnEnter `Boolean`

This property set whether the edit form will be submited when the ENTER key is pressed 
            (default is false)

###  FocusKey `TreeListFocusKeys`

This property sets the key that is used to focus RadTreeList. It is always used with CTRL key combination.

###  InitInsertKey `TreeListFocusKeys`

This property sets the key that is used to open insert edit form of RadTreeList. It is always used with CTRL key combination.

###  ExpandChildItemsKey `TreeListFocusKeys`

This property set the key that is used for expanding the active row's child items
            (default key is Right arrow)

###  CollapseChildItemsKey `TreeListFocusKeys`

This property set the key that is used for collapsing the active row's child item
            (default key is Left arrow)

###  ExitEditInsertModeKey `Int32`

Gets an integer value indicating the code of the key used to exit insert and edit mode.

###  UpdateInsertItemKey `Int32`

Gets an integer value indicating the code of the key used to perform insert or update.

###  DeleteActiveRowKey `Int32`

Gets an integer value indicating the code of the key used to delete the currently active row.

