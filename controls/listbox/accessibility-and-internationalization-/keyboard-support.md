---
title: Keyboard Support
page_title: Keyboard Support | UI for ASP.NET AJAX Documentation
description: Keyboard Support
slug: listbox/accessibility-and-internationalization-/keyboard-support
tags: keyboard,support
published: True
position: 1
---

# Keyboard Support



## 

__RadListBox__ fully supports keyboard navigation - selecting items, checking items and deleting items. Make sure the __TabIndex__ property is set beforehand.

````ASPNET
	    <telerik:radlistbox runat="server" id="RadListBox1" selectionmode="Multiple" tabindex="1"
	        accesskey="y" height="200px" allowdelete="true">
	                <ButtonSettings ShowDelete="false" />
	                <Items>
	                    <telerik:RadListBoxItem Text="Amsterdam" />
	                    <telerik:RadListBoxItem Text="Barcelona" />
	                    <telerik:RadListBoxItem Text="Bonn" />
	                    <telerik:RadListBoxItem Text="Boston" />
	                    <telerik:RadListBoxItem Text="Brussels" />
	                    <telerik:RadListBoxItem Text="Dallas" />
	                    <telerik:RadListBoxItem Text="Denver" />
	                    <telerik:RadListBoxItem Text="Dublin" />
	                    <telerik:RadListBoxItem Text="Liverpool" />
	                    <telerik:RadListBoxItem Text="London" />
	                </Items>
	     </telerik:radlistbox>
````





* __Tab__ to activate RadListBox

* Use __SHIFT__ and the arrow keys to select multiple items

* Use __CTRL__ and the arrow keys to move the active item

* Press __SPACE__ to select only the active item.

* Hold __CTRL__ and press __SPACE__ to add the active item to the selection.

* Press __DEL__ to delete the selected items (if __AllowDelete__ is set to __true__).



# See Also

 * [Keyboard Support Demo](http://demos.telerik.com/aspnet-ajax/listbox/examples/functionality/keyboardsupport/defaultcs.aspx)
