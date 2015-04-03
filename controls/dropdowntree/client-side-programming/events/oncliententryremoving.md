---
title: OnClientEntryRemoving
page_title: OnClientEntryRemoving | UI for ASP.NET AJAX Documentation
description: OnClientEntryRemoving
slug: dropdowntree/client-side-programming/events/oncliententryremoving
tags: oncliententryremoving
published: True
position: 8
---

# OnClientEntryRemoving



## 

The __OnClientEntryRemoving__ client-side event is fired when an entry is about to be removed from the Entry area.

The event handler receives two parameters:

1. The instance of the RadDropDownTree client-side object.

1. An Event argument parameter.

The event can be cancelled - simply set __args.set_cancel__ to __true__ -__args.set_cancel(true);__from the event handler and the entry from the dropdown will not be removed.
