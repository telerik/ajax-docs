---
title: OnClientDataRequesting
page_title: OnClientDataRequesting | RadSearchBox for ASP.NET AJAX Documentation
description: OnClientDataRequesting
slug: searchbox/client-side-programming/events/onclientdatarequesting
tags: onclientdatarequesting
published: True
position: 2
---

# OnClientDataRequesting



The **OnClientDataRequesting** client-side event occurs when a new text is entered and a request for items is about to be sent.

The event handler receives two parameters:

1. The instance of **RadSearchBox** firing the event.

1. An eventArgs parameter containing the following methods:

	* **get_text()** - returns the text of the searchBox.

	* **get_showAllResults()** - returns a boolean value indicating whether all results should be shown,or just a portion of them, depending on the MaxResultsCount property value.

	* **set_cancel(boolean)** - cancels the event depending on the value passed as an argument.

	* **get_userContext()** - returns the userContext object of type IDictionary that is passed after that to the [OnDataSourceSelect]({%slug searchbox/server-side-programming/events/ondatasourceselect%}) event handler or to the Web Service method.
