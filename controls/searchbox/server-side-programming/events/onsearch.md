---
title: OnSearch
page_title: OnSearch - RadSearchBox
description: Check our Web Forms article about OnSearch.
slug: searchbox/server-side-programming/events/onsearch
tags: onsearch
published: True
position: 1
---

# OnSearch




The **OnSearch** event is raised when the search button is clicked, Enter is pressed, or an item from the searchBox dropdown is clicked.

The event handler receives two parameters:

1. The instance of the SearchBox firing the event

1. An event arguments parameter that contains the following properties:

	* **Text** - returns the text that is typed in the searchBox, or the text of the selected result item.

	* **Value** - returns the value of the selected result item.

	* **DataItem** - returns the dataItem that is associated with the selected result item.
