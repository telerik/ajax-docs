---
title: Controlling Appearance
page_title: Controlling Appearance | UI for ASP.NET AJAX Documentation
description: Controlling Appearance
slug: combobox/appearance-and-styling/controlling-appearance
tags: controlling,appearance
published: True
position: 1
---

# Controlling Appearance



There are a number of ways you can customize the look & feel of your __RadComboBox__ control:

## Dimensions

To change the basic dimensions of RadComboBox:

* Use the __Height__ property to control the height of the drop-down list. If you do not set __Height__, the drop-down list sizes itself automatically based on the number of items in the list. If the value of __Height__ is too small to display all of the items in the list, a vertical scroll bar appears on the drop-down list.

* Use the __MaxHeight__ property to allow the height of drop-down list to vary depending on the number of items. If the number of items is large - the height will not exceed the MaxHeight value.

* To change the height of the input area of the control, edit the CSS style that is applied to the input area. The CSS style for the input area is called __.rcbInputCell__. Thus, for example, to set the height on the *Black* skin, use the CSS style __.RadComboBox_Black .rcbInputCell__:

````ASPNET
	    .RadComboBox_Black .rcbInputCell
	    { 
	        ... 
	        height:46px;
	    }
````



* Set the __Width__ property to specify the width of the input area of the control.

* Set __DropDownWidth__ to specify the width of the drop-down list. If __DropDownWidth__ is not set, the drop-down list gets the same width as the input area of the control. The oposite, however, is not true: setting __DropDownWidth__ but not __Width__ does not resize the input area to the same size as the drop-down list. If __DropDownWidth__ is too narrow for the items in the list, a horizontal scroll bar appears in the drop-down list.

## Look and Feel

* To change the overall look and feel of RadComboBox, set the [Skin]({%slug combobox/appearance-and-styling/skins%}) property.

* To change the way the drop-down list appears or disappears, use [Animations]({%slug combobox/appearance-and-styling/animation%}).

* To change the look of an individual item in RadComboBox, use its __CssClass__ property and set up the CSS styles as needed.

* *CssClass* property defines style for the input of RadComboBox.

* *DropDownCssClass* property defines style for the drop-down list of RadComboBox.

* To provide a [right-to-left look and feel]({%slug combobox/appearance-and-styling/rtl-support%}), use the __dir="rtl"__ attribute. If you do not want the complete RTL support, but want to move the drop-down toggle to the left of the input area, simply set the __RadComboBoxImagePosition__ property to "Left".

* To associate a label to RadComboBox set its __Label__ property to the text that you want to appear next to RadComboBox (added in Q1 2010 release).

* To remove the drop-down arrow set __ShowToggleImage__ property to __false__.

## Drop-down placement

To cause the drop-down list to expand on the page somewhere other than the default (immediately below the input area), set the __OffsetX__ and __OffsetY__ properties. __OffsetX__ and __OffsetY__ indicate the horizontal and vertical offset of the drop-down list, in pixels, relative to the input area.

>note The drop-down list automatically expands to the opposite direction when the screen boundaries would otherwise be crossed.
>


# See Also

 * [Tutorial: Change the Appearance of the Input Element]({%slug combobox/appearance-and-styling/tutorial:-change-the-appearance-of-the-input-element%})
