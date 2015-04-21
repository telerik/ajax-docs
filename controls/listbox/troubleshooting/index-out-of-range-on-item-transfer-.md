---
title: Index Out of Range on Item Transfer 
page_title: Index Out of Range on Item Transfer  | UI for ASP.NET AJAX Documentation
description: Index Out of Range on Item Transfer 
slug: listbox/troubleshooting/index-out-of-range-on-item-transfer-
tags: index,out,of,range,on,item,transfer,
published: True
position: 2
---

# Index Out of Range on Item Transfer 

## 

__Problem__

When transferting data from one __RadListBox__ to another the __“Sys.WebForms.PageRequestManagerServerErrorException: Index was out of range. Must be non-negative and less than the size of the collection.”__ is thrown.

__Solution__

This error occurs when the state of the two RadListBox controls is not yet updated after transferring/reordering items. By setting the __AutoPostBackOnTransfer__ property to __True__, you could ensure that __PostBack__ is performed after each action is made. Thus you do not need to rely on the state of the controls and you could easily avoid the exception.
