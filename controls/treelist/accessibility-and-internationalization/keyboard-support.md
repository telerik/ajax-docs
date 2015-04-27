---
title: Keyboard Support
page_title: Keyboard Support | RadTreeList for ASP.NET AJAX Documentation
description: Keyboard Support
slug: treelist/accessibility-and-internationalization/keyboard-support
tags: keyboard,support
published: True
position: 3
---

# Keyboard Support



You can enable keyboard navigation in the RadTreeList control by setting the **ClientSettings.AllowKeyboardNavigation** property to **True** (its default value is False).

## Keyboard Navigation Properties

* **FocusKey**: A focus key is a key combination (e.g. Ctrl+Y) that focuses tthe RadTreeList control on the page. The control can also be focused on mouse click (when keyboard navigation is enabled). No active row is selected by default.

* **InitInsertKey**: Specifies a key for opening the Insert forms of the RadTreeList. Default is Ctrl + I

* **AllowActiveRowCycle**: This property enables the row cycle feature for the active row(reaching the last row will go back to the first if this property is true)

* **Arrowkey Navigation**: Moves the active row index to the next/previous row using the up and down arrow keys. If there is no active row focuses the first one (or the selected one if present). If AllowRowCycle is true and the first/last row is active moves to the last/first row. Only the data items can be set as active rows.

* **CollapseChildItemsKey**: Collapses the current active row **only** if it is expandedotherwise no postback happens

* **ExpandChildItemsKey**: Tries to expand the current active row. Postback happens for each collapsed row (even if it does not have children) because we do not have this information on the client.

* **Selection**: Users can select rows by pressing the [SPACE] key which toggles selection(selects or deselects) for the current active row only if we have AllowToggleSelection=”true”. Otherwise deselection with space should notbe possible. Any previously selected rows (on the current page) are cleared.

* **Multi rows selection**: When RadTreeList AllowMultiRowSelection property is set to true, users can use the [CTRL] and [SHIFT] keys to simulate Windows Explorer-like selection.

* **Editing**: When editing is enabled, users can edit rows hitting the [ENTER] key.Then to update/insert rows they can use the [ENTER] key again. And to exit edit/insert mode without saving any changes, they can hit the [ESC] key.
