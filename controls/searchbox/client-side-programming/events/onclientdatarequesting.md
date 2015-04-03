---
title: OnClientDataRequesting
page_title: OnClientDataRequesting | UI for ASP.NET AJAX Documentation
description: OnClientDataRequesting
slug: searchbox/client-side-programming/events/onclientdatarequesting
tags: onclientdatarequesting
published: True
position: 2
---

# OnClientDataRequesting



## OnClientDataRequesting

The __OnClientDataRequesting__ client-side event occurs when a new text is entered and a request for items is about to be sent.

The event handler receives two parameters:

1. The instance of __RadSearchBox__ firing the event.

1. An eventArgs parameter containing the following methods:

* __get_text()__ - returns the text of the searchBox.

* __get_showAllResults()__ - returns a boolean value indicating whether all results should be shown,or just a portion of them, depending on the MaxResultsCount property value.

* __set_cancel(boolean)__ - cancels the event depending on the value passed as an argument.

* __get_userContext()__ - returns the userContext object of type IDictionary that is passed after that to the [OnDataSourceSelect]({%slug searchbox/server-side-programming/server-events/ondatasourceselect%}) event handler or to the Web Service method.
