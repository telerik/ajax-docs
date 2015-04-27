---
title: Validation
page_title: Validation | RadTreeView for ASP.NET AJAX Documentation
description: Validation
slug: treeview/web-pages/validation
tags: validation
published: True
position: 1
---

# Validation



## 

You can use the built in ASP.NET validation with **RadTreeView**. The TreeView can trigger validation of other controls on the form when it performs a post-back to the server. Simply set the **CausesValidation** property to **True**.

By default, all validators on the Web page must be successful before the postback can occur. You can limit the controls that must be validated when the Treeview Performs a postback, while still allowing other controls on the Web page to be validated, by using **Validation Groups**. The validator controls have a **ValidationGroup** property. The TreeView also has a **ValidationGroup** property. The TreeView only causes validation by those validators whose **ValidationGroup** property matches the **ValidationGroup** property of the TreeView (the reason the default behavior is for all validators to execute on postback is because the default value of the **ValidationGroup** property on both the RadTreeView and the validators is an empty string).
