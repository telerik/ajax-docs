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

**Problem**

When transferting data from one **RadListBox** to another the **“Sys.WebForms.PageRequestManagerServerErrorException: Index was out of range. Must be non-negative and less than the size of the collection.”** is thrown.

**Solution**

This error occurs when the state of the two RadListBox controls is not yet updated after transferring/reordering items. By setting the **AutoPostBackOnTransfer** property to **True**, you could ensure that **PostBack** is performed after each action is made. Thus you do not need to rely on the state of the controls and you could easily avoid the exception.
