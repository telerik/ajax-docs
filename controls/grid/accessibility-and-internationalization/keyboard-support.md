---
title: Keyboard support
page_title: Keyboard support | UI for ASP.NET AJAX Documentation
description: Keyboard support
slug: grid/accessibility-and-internationalization/keyboard-support
tags: keyboard,support
published: True
position: 7
---

# Keyboard support



## 

You can enable keyboard navigation in the __RadGrid__ control by setting the __ClientSettings.AllowKeyboardNavigation__ property to __True__ (its default value is __False__). Currently the following features are supported:

* __Access Keys__: An access key is a key combination (e.g. Alt+F) that lets the user move focus to the grid and subsequently use the Up and Down arrow keys for navigation. The access key is defined using the __AccessKey__ property. For example, setting the __AccessKey__ property to "F" enables users to move focus to the grid by typing Alt+F.

* __FocusKey:__To specify the key combination that focuses the grid you need to set the __FocusKey__ in the __KeyBoardNavigationSettings__ tag property __-__the first key is preset to [CTRL] by design.

* __InitInsertKey__: Setting this property provides a shortcut for opening RadGrid insert form. The first key is preset to [CTRL] by design.

* __RebindKey__: Allows the users to rebind RadGrid. The first key is preset to [CTRL] by design.

* __AllowActiveRowCycle:__To allow the active row to cycle to the beginning upon having reached the end of the grid table, you have to set __ClientSettings -> KeyboardNavigationSettings -> AllowActiveRowCycle__property to __true__.

* __Arrowkey Navigation__: When arrow key navigation is enabled, users can navigate the rows of the grid using the up and down arrow keys.

* __Selection__: Users can select rows by pressing the [SPACE] key.

* __Multi rows selection__: When RadGrid __AllowMultiRowSelection__ property is set to __true__, users can use the [CTRL] and [SHIFT] keys to simulate Windows Explorer-like selection.

* __Editing__: When editing is enabled, users can edit rows hitting the [ENTER] key. Then to update/insert rows they can use the [ENTER] key again. And to exit edit/insert mode without saving any changes, they can hit the [ESC] key.
>caption 

![Arrowkey Navigation ](images/grd_KeyboardNavigation1.png)

# See Also

 * [Cancel Enter and Arrow Key Press ]({%slug grid/accessibility-and-internationalization/how-to/cancel-enter-and-arrow-key-press-%})
