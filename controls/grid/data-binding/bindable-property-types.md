---
title: Bindable Property Types
page_title: Bindable Property Types | UI for ASP.NET AJAX Documentation
description: Bindable Property Types
slug: grid/data-binding/bindable-property-types
tags: bindable,property,types
published: True
position: 0
---

# Bindable Property Types



## 

__RadGrid__ understands the following bindable property types:

* All primitive types - __bool__, __byte__, __sbyte__, __char__, __short__, __ushort__, __int__, __uint__, __long__, __ulong__, __decimal__, __double__, __float__, __DateTime__, etc.

* __GUID__

* __String__

* __TimeSpan__

* __Enum__ types

* __Nullable__ types

__RadGrid__ uses the static method __RadGrid.IsBindableType()__ to determine if the property of an object can be bound.
