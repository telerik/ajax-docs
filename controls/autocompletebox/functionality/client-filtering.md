---
title: Client Filtering
page_title: Client Filtering - RadAutoCompleteBox
description: Check our Web Forms article about Client Filtering.
slug: autocompletebox/functionality/client-filtering
tags: client,filtering
published: True
position: 6
---

# Client Filtering



>note Note that the property is valid after 2013 Q3 and above.
>


As of Q3 2013 release, we introduced a feature that is related to the filtering of the **RadAutoCompleteBox - Client Filtering**. The functionality could be easily managed by the **EnableClientFiltering** property, which accepts two values : **true** or **false**.

## How Does the Client Filtering Work

Unlike the default behavior of the control, a callback is not fired upon each character typed in the input area. In contrast to that, if the **Client Filtering** is enabled, the **RadAutoCompleteBox** is initially supplied with the underlying DataSource. When you type characters in the input of the control, you only manage the visibility of the already loaded data.

## Usage of the Client Filtering

The **Client Filtering** could be very useful, if the **RadAutoCompleteBox** is populated with a third part **WebService** or **ODataSource**. As the filtering could not be custom implemented in such databinding scenarios, the usage of the **Client Filtering** is quite appropriate.

We recommend using the **Client-Filtering** feature in a scenario when small amount of data is used for the **RadAutoCompleteBox** population. Considering the fact that the entire data is initially retrieved, iterating trough a large items collection could reflect as a slow-responsive page.
