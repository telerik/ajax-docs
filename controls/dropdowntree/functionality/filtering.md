---
title: Filtering
page_title: Filtering | UI for ASP.NET AJAX Documentation
description: Filtering
slug: dropdowntree/functionality/filtering
tags: filtering
published: True
position: 5
---

# Filtering



## Filtering

As of __Q2 2013__we introduced the filtering functionality in the RadDropDownTree. It is enabled through the __EnableFiltering__ property of the RadDropDownTree control. By using the following __FilterSettings__ the user can futher customize the functionality:

>note Note that the filtering functionality can not be used in a combination with WebService and it is not case sensitive.
>


__Filter__

The __Filter__ property accepts two values:

* __Contains__ - returns all nodes whose Texts' values contain the searched text as a substring;

* __StartsWith__ - is the __default__ value of the __Filter__ property. It returns all nodes whose text start with the searched(typed) text.

__EmptyMessage__

By using the __EmptyMessage__ property you can set a message in the filtering input to provid a hint to the user. Below is an example demonstrating the useof the property:![dropdowntree empty message](images/dropdowntree_empty_message.png)

__FilterTemplate__

This property is used when a template is applied to the node.

* __ByContent__ - when the __FilterTemplate__ is set to the __ByContent__value, the filteringis implemented in the content itself (the text that is bound to the node and the content of the template, it there are additional controls)

* __ByText__ - filters only by the text that is bound to the text of the node.

__Highlight__

* __Matches__ - enables highlighting of the node when a match to the typed text is found;![HighlightText on Filtering](images/dropdowntree-highlight.png)

* __None__ - does not highlight text when a match of the typed text is found.

__MinFilterLength__

This property defines how many letters needto be typed in in the filter input before the nodes in the dropdown tree to get filtered.

__Setting the Filter Inline__![dropdowntree inline filtering](images/dropdowntree_inline_filtering.png)

__Setting the Filter Server Side__![dropdpwntree server side filtering](images/dropdpwntree_server_side_filtering.png)
