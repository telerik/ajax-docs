---
title: OnClientCheckAllChecking
page_title: OnClientCheckAllChecking | RadListBox for ASP.NET AJAX Documentation
description: OnClientCheckAllChecking
slug: listbox/client-side-programming/events/onclientcheckallchecking
tags: onclientcheckallchecking
published: True
position: 12
---

# OnClientCheckAllChecking

## 

The **OnClientCheckAllChecking** client-side event occurs when the user clicks on the CheckAll item. The checked state of this item can be inspected from the returned DOM event object - **args.get_domEvent().target.checked**. The event can be canceled.

The event handler receives two parameters:

1. The instance of the listbox firing the event

2. An event arguments parameter containing the following methods:

* **set_cancel()** - lets you cancel the event and prevent changing the checked state of the item.

* **get_domEvent()** - returns the DOM event object




