---
title: Client Filtering
page_title: Client Filtering | UI for ASP.NET AJAX Documentation
description: Client Filtering
slug: autocompletebox/functionality/client-filtering
tags: client,filtering
published: True
position: 6
---

# Client Filtering



>note Note that the property is valid after 2013 Q3 and above.
>


As of Q3 2013 release, we introduced a feature that is related to the filtering of the __RadAutoCompleteBox - Client Filtering__. The functionality could be easily managed by the __EnableClientFiltering__ property, which accepts two values : __true__ or __false__.

## How Does the Client Filtering Work

Unlike the default behavior of the control, a callback is not fired upon each character typed in the input area. In contrast to that, if the__Client Filtering__ is enabled, the __RadAutoCompleteBox__ is initially supplied with the underlying DataSource. When you type characters in the input of the control, you only manage the visibility of the already loaded data.

## Usage of the Client Filtering

The __Client Filtering__ could be very useful, if the __RadAutoCompleteBox__ is populated with a third part __WebService__ or __ODataSource__. As the filtering could not be custom implemented in such databinding scenarios, the usage of the __Client Filtering__ is quite appropriate.

We recommend using the __Client-Filtering__ feature in a scenario when small amount of data is used for the __RadAutoCompleteBox__ population. Considering the fact that the entire data is initially retrieved, iterating trough a large items collection could reflect as a slow-responsive page.
