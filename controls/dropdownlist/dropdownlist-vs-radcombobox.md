---
title: DropDownList vs RadComboBox
page_title: DropDownList vs RadComboBox | UI for ASP.NET AJAX Documentation
description: DropDownList vs RadComboBox
slug: dropdownlist/dropdownlist-vs-radcombobox
tags: dropdownlist,vs,radcombobox
published: True
position: 3
---

# DropDownList vs RadComboBox



What is the difference between RadDropDownList and RadComboBox, which at first glance will fit better to your project? They both look much the same especially when it comes to the dropdownlist and single selection functionality.How to distinguish and choose one over the other when it comes to incorporating them in your web site? What are the benefits from using each one? What are the main differences between them in terms of appearance and functionality?

## Differences between the two controls


>caption  

| Specifics | RadDropDownList | RadComboBox |
| ------ | ------ | ------ |
|Input|Represents the selected item text.|An option for typing text.|
|Selection|Single select.|Multiple selection.|
|Templates|Server/client templates. Server controls can be places inside the server templates.|Server/client templates. Server controls can be places inside the server templates.|
|Load on demand|[Virtuall Scrolling.]({%slug dropdownlist/functionality/virtual-scrolling%})|LoadOnDemand.|
|Checkbox support|Not Supported.|Supported.|
|Keyboard Support|Supported.|Supported.|
|Filtering|Not supported.|Client filtering over the already populated items.|
|API|Server/client objects representing the items in the drop-down.|Server/client objects representing the items in the drop-down.|

## What is the best fit for your project?

The difference between each control in a few words:

* __RadDropDownList__ – drop-down designed to work with large sets of data.

* __RadComboBox__ – text box with auto completion, filtering functionality.

RadDropDownList control works well in either of the cases - when used with small amount of data or with large one. Having that intuitive and lightweightUI is perfect for selection from data list. The RadDropDownList brings a very friendly enhanced mobile experience and keyboard support to the end user. It introduces also a completely new load on demand mechanism - called Virtual Scrolling. On the other hand, the RadComboBox is still the preferred choice for all other drop-down related scenarios with check box support or allowingcustom text.
