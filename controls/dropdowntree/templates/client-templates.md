---
title: Client Templates
page_title: Client Templates | UI for ASP.NET AJAX Documentation
description: Client Templates
slug: dropdowntree/templates/client-templates
tags: client,templates
published: True
position: 1
---

# Client Templates



## Overview

As of __Q2 2013____RadDropDownTree__ provides support for client templates. The template itself contains mark up and binding expressions which are evaluated against a __DataItem__ and then rendered as the Entry's content on the client. The templates support the following type of expressions which are evaluated at run-time:

* __#=...#__ - DATA- Evaluates the JavaScript code expression or a string property from the data item and outputs the result in the template.

* __#...#__ - CODE- Evaluates the JavaScript code expression inside, but doesn't output value.

* __#:...#__ - HTML- Evaluates the JavaScript code expression or a string property from the data item and outputs the result in the template which is HTML encoeded.

>important Client templates __CAN NOT__ contain server-side controls.
>


## 

## 
