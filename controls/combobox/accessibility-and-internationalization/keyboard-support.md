---
title: Keyboard Support
page_title: Keyboard Support | RadComboBox for ASP.NET AJAX Documentation
description: Keyboard Support
slug: combobox/accessibility-and-internationalization/keyboard-support
tags: keyboard,support
published: True
position: 0
---

# Keyboard Support

A critical requirement for software accessibility is keyboard support as a complete alternative to pointing devices (mouse, etc.).

Keyboard support is comprised of command key, focus key, and keyboard navigation. RadComoboBox will seamlessly switch between mouse and keyboard navigation.

In order to configure keyboard support with RadComboBox its KeyboardNaviagationSettings should be set:

>note Certain keyboard combinations are reserved and used as shortcuts in the browsers. 
>

````ASPNET
<telerik:RadComboBox ID="RadComboBox1" runat="server" >
    <KeyboardNavigationSettings CommandKey="Alt" FocusKey="M" />
</telerik:RadComboBox>
````

## Keyboard Navigation

* Focus the **RadComboBox** by pressing **CommandKey** + **FocusKey**:

![Control Focus](images/combobox-focus.png)

* Press **Alt** + **Down Arrow** to expand the dropdown.

![Expand](images/combobox-expand-dropdown.png)

* Navigate the items using **Up** and **Down Arrow** keys:

![Item Navigation](images/combobox-navigation.png)
   
* Press **Alt** + **Up Arrow** or "Esc" to close the dropdown.

![Close](images/combobox-close-dropdown.png)   

* Press **Enter** to select an Item.

![Select](images/combobox-select.png)   

# See Also

 * [Keyboard Support Demo](http://demos.telerik.com/aspnet-ajax/combobox/examples/functionality/keyboardsupport/defaultcs.aspx)
