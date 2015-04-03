---
title: OnSearch
page_title: OnSearch | UI for ASP.NET AJAX Documentation
description: OnSearch
slug: searchbox/server-side-programming/server-events/onsearch
tags: onsearch
published: True
position: 1
---

# OnSearch



## OnSearch

The __OnSearch__ event is raised when the search button is clicked, Enter is pressed, or an item from the searchBox dropdown is clicked.

The event handler receives two parameters:

1. The instance of the SearchBox firing the event

1. An event arguments parameter that contains the following properties:

* __Text__ - returns the text that is typed in the searchBox, or the text of the selected result item.

* __Value__ - returns the value of the selected result item.

* __DataItem__ - returns the dataItem that is associated with the selected result item.
