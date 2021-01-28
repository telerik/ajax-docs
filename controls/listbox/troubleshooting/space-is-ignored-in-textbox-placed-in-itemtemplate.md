---
title: Space Is Ignored in Textbox Placed in ItemTemplate
page_title: Space Is Ignored in Textbox Placed in ItemTemplate - RadListBox
description: Check our Web Forms article about Space Is Ignored in Textbox Placed in ItemTemplate.
slug: listbox/troubleshooting/space-is-ignored-in-textbox-placed-in-itemtemplate
tags: space,is,ignored,in,textbox,placed,in,itemtemplate
published: True
position: 1
---

# Space Is Ignored in Textbox Placed in ItemTemplate

## 

**PROBLEM**

When you add a textbox to the ItemTemplate of RadListBox and start typing in it - the spaces are ignored.

**SOLUTION**

Add the following javascript code right after the listbox declaration:

````JavaScript
var keyDown = Telerik.Web.UI.RadListBox.prototype._onKeyDown;
Telerik.Web.UI.RadListBox.prototype._onKeyDown = function (e) {
	if (e.keyCode == Sys.UI.Key.space) {
		return;
	}
	else {
		keyDown.apply(this, arguments);
	}
}	 
````




