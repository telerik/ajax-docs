---
title: Validation
page_title: Validation | RadToolBar for ASP.NET AJAX Documentation
description: Validation
slug: toolbar/web-pages/validation
tags: validation
published: True
position: 0
---

# Validation



You can use the built in ASP.NET validation with **RadToolBar**. The toolbar can trigger validation of other controls on the form when it performs a post-back to the server. Simply set the **CausesValidation** property to **True**.

If you want only some of the controls on the toolbar to trigger validation, you can use the **CausesValidation** property of the **RadToolBarButton** or **RadToolBarSplitButton** objects.

## Validation Groups

By default, all validators on the Web page must be successful before the postback can occur. You can limit the controls that must be validated when the toolbar performs a post-back, while still allowing other controls on the Web page to be validated, by using **Validation Groups**.

The validator controls have a **ValidationGroup** property. The toolbar and tool buttons (both **RadToolBarButton** and **RadToolBarSplitButton**) also have a **ValidationGroup** property. The toolbar or button only causes validation by those validators whose **ValidationGroup** property matches the **ValidationGroup** property of the toolbar or button. (The reason the default behavior is for all validators to execute on post-back is because the default value of the **ValidationGroup** property on both **RadToolBar** and validators is an empty string.)
