---
title: Filter ComboBox with CheckBox support enabled
page_title: Filter ComboBox with CheckBox support enabled | RadComboBox for ASP.NET AJAX Documentation
description: Filter ComboBox with CheckBox support enabled
slug: combobox/how-to/filter-combobox-with-checkbox-support-enabled
tags: filter,combobox,with,checkbox,support,enabled
published: True
position: 12
---

# Filter ComboBox with CheckBox support enabled



## 

The combo box provides a nice built-in support for **CheckBoxes** which can be used in many real-case scenarios leveraging multiple selection:

[ComboBox Demo - Selection with Checkboxes](https://demos.telerik.com/aspnet-ajax/combobox/examples/functionality/checkboxes/defaultcs.aspx)

The control also provides the **Filtering** capability which adds convenient behavior allowing users to find quickly what they are looking for:

[ComboBox Demo - Autocomplete and Filtering](https://demos.telerik.com/aspnet-ajax/combobox/examples/functionality/autocompleteclientside/defaultcs.aspx)

Due to internal specifics of these 2 logics, combo box **Filtering** and **MarkFirstMatch** are incompatible with **CheckBoxes** layout by default. Since it can be desired and meaningful to have these both features work together, we created a sample addressing this case. 

The following code library example demonstrates how the combo box can be filtered when **CheckBox** support is enabled by embedding a TextBox in the combo box' Header Template:

[Code-Library - Filter ComboBox with CheckBoxes support enabled](https://www.telerik.com/support/code-library/filter-combobox-with-checkboxes-support-enabled) 

