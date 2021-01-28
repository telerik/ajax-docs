---
title: RadAutoCompleteBox vs RadComboBox
page_title: RadAutoCompleteBox vs RadComboBox - RadAutoCompleteBox
description: Check our Web Forms article about RadAutoCompleteBox vs RadComboBox.
slug: autocompletebox/radautocompletebox-vs-radcombobox
tags: radautocompletebox,vs,radcombobox
published: True
position: 1
---

# RadAutoCompleteBox vs RadComboBox



What is the difference between RadComboBox and RadAutoCompleteBox, which at first glance look much the same especially when examining the auto complete functionality of RadComboBox and the RadAutoCompleteBox as a separate control? How to distinguish and choose one over the other when it comes to incorporating them in your web site? What are the benefits from using each one? What are the main differences between them in terms of appearance and functionality?

## Differences between the two controls


>caption  

| Specifics | RadComboBox | RadAutoCompleteBox |
| ------ | ------ | ------ |
|Input|Text|Collection of AutoCompleteBoxEntries. The entries can have text and value.|
|Visual represantaion|Plain text|Text/Token|
|Selection|Single/Multi select (checkboxes)|Multi select|
|Templates|Server/client templates. Server controls can be places inside the server templates.|Server/client templates. Server controls are not allowed in the server templates; only static markup and databinding espressions are allowed.|
|Load on demand|Automatic LoadOnDemand.|Automatic Web service/callback binding.|
|Custom text|Not supported.|Automatic custom entries.|
|Filtering|Client filtering over the already populated items.|Server filtering. Items are filtered on the server based on the text typed in the input area.|
|API|Server/client objects representing the items in the drop-down.|Server/client objects representing the entries present in the input area. Drop-down items are accessible neither on the server nor on the client.|
|Different use cases|Simple drop-down -- the user is given the ability to browse the items.|The user can not browse the items in the drop-down, they are filtered against the text typed in the input area, instead.|

## What is the best fit for your project?

The difference between each control in a few words:

* **RadAutoCompleteBox** – text box with auto completion.

* **RadComboBox** – drop-down containing items to choose from.

RadAutoCompleteBox is designed to take away the burden of auto completion from the RadComboBox. It is now the natural choice for search boxed with load-on-demand scenarios where everything that has to do with auto completion. On the other hand, the RadComboBox is still the preferred choice for all other drop-down related scenarios.

# See Also

 * [RadAutoCompleteBox online examples.](https://demos.telerik.com/aspnet-ajax/autocompletebox/examples/default/defaultcs.aspx)

 * [RadComboBox online examples.](https://demos.telerik.com/aspnet-ajax/combobox/examples/default/defaultcs.aspx)
