---
title: Bindable Property Types
page_title: Bindable Property Types | RadGrid for ASP.NET AJAX Documentation
description: Bindable Property Types
slug: grid/data-binding/bindable-property-types
tags: bindable,property,types
published: True
position: 0
---

# Bindable Property Types



## 

**RadGrid** understands the following bindable property types:

* All primitive types - **bool**, **byte**, **sbyte**, **char**, **short**, **ushort**, **int**, **uint**, **long**, **ulong**, **decimal**, **double**, **float**, **DateTime**, etc.

* **GUID**

* **String**

* **TimeSpan**

* **Enum** types

* **Nullable** types

**RadGrid** uses the static method **RadGrid.IsBindableType()** to determine if the property of an object can be bound.
