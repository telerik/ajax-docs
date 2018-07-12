---
title: Keyboard Support
page_title: Keyboard Support | RadListBox for ASP.NET AJAX Documentation
description: Keyboard Support
slug: listbox/accessibility-and-internationalization/keyboard-support
tags: keyboard,support
published: True
position: 1
---

# Keyboard Support

A critical requirement for software accessibility is keyboard support as a complete alternative to pointing devices (mouse, etc.). Keyboard support is comprised of command key, focus key, and keyboard navigation. **RadListBox** seamlessly switches between mouse and keyboard navigation, allowing items selection, deletion, moving and reordering.

Setting the control's **KeyboardNavigationSettings** (*introduced in R2 2016 - ver.2016.2.504*), allows you to associate an activation combination (**CommandKey** + **FocusKey**), which moves focus directly to the **RadListBox** and enables keyboard navigation. When there are multiple **RadListBox** controls on a given page, each of them may have a different activation combination.

## Keyboard Navigation Settings

The **KeyboardNavigationSettings** exposes two properties to configure the keyboard combination that sets focus to the control:

* **CommandKey**: [Ctrl] , [Alt] or [Shift].

* **FocusKey**: An upper-case letter or number.

Pressing **CommandKey** + **FocusKey** sets the focus on the **RadListBox** and enables keyboard navigation.

>note Certain keyboard combinations are reserved and used as shortcuts in the browsers.
>

**Example:** Setting the **KeyboardNavigationSettings** for **RadListBox**

````ASPNET
<telerik:RadListBox ID="RadListBox1" runat="server" >
	<KeyboardNavigationSettings CommandKey="Alt" FocusKey="M" />
	<Items>
		<telerik:RadListBoxItem Text="Amsterdam" >
		</telerik:RadListBoxItem>
		<telerik:RadListBoxItem Text="Barcelona" >
		</telerik:RadListBoxItem>
	</Items>
</telerik:RadListBox>
````


## Arrow Navigation / Selection

* **Down Arrow** / **Up Arrow** keys select next/previous item.

* **Shift** + **Arrow Keys** selects multiple items.

* **Ctrl** + **Space** adds or removes the currently active item to or from the selection.

* **Del** deletes the currently selected item (if **AllowDelete** is set to "true").

## Transfer

* **Ctrl** + **Right Arrow** transfers the selected item/s to the destination **RadListBox**.

* **Ctrl** + **Left Arrow** transfers the selected item/s to the source **RadListBox** when the selection is in the destination listbox.

## Reorder

* **Ctrl** + **Shift** + **Up Arrow** reorders upwards.

* **Ctrl** + **Shift** + **Down Arrow** reorders downwards.

## Mark Matches

**STARTS WITH**

* Start typing to highlight the matching items.

* **Esc** clears the mask.

* **Backspace** removes a single character.

**FIRST LETTER**

* Any key navigates to a matching item.

* Subsequent press on the same key iterates over the matches.

>note Marking matches works only for the built-in items, because it relies on their `Text` and structure. This means that using the `ItemTemplate` will disable the Mark Matches functionality.


# See Also

 * [Keyboard Support Demo](http://demos.telerik.com/aspnet-ajax/listbox/examples/functionality/keyboardsupport/defaultcs.aspx)
