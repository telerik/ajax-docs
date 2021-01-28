---
title: Client Templates
page_title: Client Templates - RadDropDownTree
description: Check our Web Forms article about Client Templates.
slug: dropdowntree/templates/client-templates
tags: client,templates
published: True
position: 1
---

# Client Templates



## Overview

As of **Q2 2013** **RadDropDownTree** provides support for client templates. The template itself contains mark up and binding expressions which are evaluated against a **DataItem** and then rendered as the Entry's content on the client. The templates support the following type of expressions which are evaluated at run-time:

* **#=...#** - DATA- Evaluates the JavaScript code expression or a string property from the data item and outputs the result in the template.

* **#...#** - CODE- Evaluates the JavaScript code expression inside, but doesn't output value.

* **#:...#** - HTML- Evaluates the JavaScript code expression or a string property from the data item and outputs the result in the template which is HTML encoeded.

>important Client templates **CAN NOT** contain server-side controls.
>


## 

## 
