---
title: RadComboBox ItemTemplate and Checkbox on different lines
description: RadComboBox ItemTemplate and Checkbox on different lines. Check it now!
type: how-to
page_title: RadComboBox ItemTemplate and Checkbox on different lines
slug: combobox-itemtemplate-and-checkbox-on-different-lines
res_type: kb
---


## Problem

When using a RadComboBox with an `ItemTemplate`, and `CheckBoxes="true"` property, the item and checkbox are on different lines.

## Description
 The built-in items in the RadComboBox are rendered inside a `<label>` that used the style Display:Block. The block styling results in the items being on different lines.

## Solution

Override the default CSS by applying the style below to render both the built-in items and template items on the same line.

````CSS
.RadComboBoxDropDown .rcbList .rcbTemplate>label
{
    display:inline;
}
````

  


