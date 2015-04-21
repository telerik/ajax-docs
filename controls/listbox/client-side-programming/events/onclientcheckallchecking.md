---
title: OnClientCheckAllChecking
page_title: OnClientCheckAllChecking | UI for ASP.NET AJAX Documentation
description: OnClientCheckAllChecking
slug: listbox/client-side-programming/events/onclientcheckallchecking
tags: onclientcheckallchecking
published: True
position: 12
---

# OnClientCheckAllChecking

## 

The __OnClientCheckAllChecking__ client-side event occurs when the user clicks on the CheckAll item. The checked state of this item can be inspected form the returned DOM event object - __args.get_domEvent().target.checked__. The event can be canceled.

The event handler receives two parameters:

1. The instance of the listbox firing the event

2. An event arguments parameter containing the following methods:

* __set_cancel()__ - lets you cancel the event and prevent changing the checked state of the item.

* __get_domEvent()__ - returns the DOM event object




