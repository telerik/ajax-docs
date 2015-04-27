---
title: OnClientSearch
page_title: OnClientSearch | RadSearchBox for ASP.NET AJAX Documentation
description: OnClientSearch
slug: searchbox/client-side-programming/events/onclientsearch
tags: onclientsearch
published: True
position: 1
---

# OnClientSearch



## OnClientSearch

The **OnClientSearch** client-side event occurs when the search button is clicked, Enter is pressed, or an item from the searchBox dropdown is clicked.

The event handler receives two parameters:

1. The instance of**RadSearchBox** firing the event.

1. An eventArgs parameter containing the following methods:

* **get_text()** - returns the text that is typed in the searchBox, or the text of the selected result item.

* **get_value()** -returns the value of the selected result item.

* **get_dataItem()** - returns the dataItem that is associated with the selected result item.
