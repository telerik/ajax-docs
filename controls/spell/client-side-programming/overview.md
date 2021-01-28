---
title: Overview
page_title: Client-side Programming Overview - RadSpell
description: Check our Web Forms article about Overview.
slug: spell/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview

RadSpell provides a flexible client-side API that allows you to interact with the spell checker on the client.

## Getting the RadSpell client-side object

**RadSpell ClientID**

````JavaScript
var spell = $find("<%= RadSpell1.ClientID %>");
````

## Client-Side Properties

Many public properties that are defined on the server are available on the client-side object. You can get/set a property value on the client using the following notation:

RadSpell1.get_[PROPERTY_NAME];RadSpell1.set_[PROPERTY_NAME];

For example to get/set the **ControlToCheck** property using the client-side object:

````JavaScript
var spell = $find('<%= RadSpell1.ClientID %>');
spell.set_controlToCheck("<%= TextBox1.ClientID %>");
spell.startSpellCheck();
````


