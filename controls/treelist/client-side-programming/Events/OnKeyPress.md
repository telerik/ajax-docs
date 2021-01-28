---
title: OnKeyPress
page_title: OnKeyPress - RadTreeList
description: Check our Web Forms article about OnKeyPress Event.
slug: treelist/client-side-programming/Events/OnKeyPress
tags: events,OnKeyPress
published: True
position: 1
---

# OnKeyPress


This event is fired (only when Keyboard Navigation is enabled) when any key is pressed inside the RadTreeList and the treelist control is about to process this key (e.g. it is not canceled because of typing in an input element in EditForm).


| | |
| ------ | ------ |
| **Fired by** | RadTreeList |
| **Arguments** | get_keyCode() - gets the code of the pressed key. |
|| get_isShiftPressed() - returns whether the shift key has been pressed as part of the keyboard shortcut. |
|| get_isCtrlPressed() - returns whether the control key has been pressed as part of the keyboard shortcut. |
|| get_isAltPressed() - returns whether the alt key has been pressed as part of the keyboard shortcut.|
|| get_domEvent() - gets the internal DOM event object for the event. |
|| get_keyboardNavigationType() - gets the action that will be performed as a result of this shortcut (e.g. for Enter - Edit). |
|| set_keyboardNavigationType() - sets the action that will be performed as a result of this shortcut. Useful when user wants to perform a different action as a result of a shortcut.|
|| get_cancel() - gets a value indicating whether the event will be canceled or not. |
|| set_cancel(bool) - sets a value indicating whether the event will be canceled or not. |
| **Can be canceled** | Yes |

## TreeListKeyBoardNavigationType Enumeration

The **keyBoardNavigationType** property of the event arguments exposes an enumeration of type **Telerik.Web.UI.TreeListKeyBoardNavigationType**, having the following entries:


| Name | Value |
|---|---|
| 0  | None  |
| 1  | NavigateUp  |
| 2  | NavigateDown  |
| 3  | Expand |
| 4  | Collapse  |
| 5  | PageUp  |
| 6  | PageDown  |
| 7  | Select  |
| 8  | Edit  |
| 9  | Cancel  |
| 10  | InitInsert  |
| 11  | Delete  |
| 12  | Update  |
| 13  | Insert  |
| 14  | RootInsert  |


## See Also

 * [Overview]({%slug treelist/client-side-programming/Events/Overview%})
 
 
 
