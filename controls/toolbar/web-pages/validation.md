---
title: Validation
page_title: Validation | UI for ASP.NET AJAX Documentation
description: Validation
slug: toolbar/web-pages/validation
tags: validation
published: True
position: 0
---

# Validation



You can use the built in ASP.NET validation with __RadToolBar__. The toolbar can trigger validation of other controls on the form when it performs a post-back to the server. Simply set the __CausesValidation__ property to __True__.

If you want only some of the controls on the toolbar to trigger validation, you can use the __CausesValidation__ property of the __RadToolBarButton__ or __RadToolBarSplitButton__ objects.

## Validation Groups

By default, all validators on the Web page must be successful before the postback can occur. You can limit the controls that must be validated when the toolbar performs a post-back, while still allowing other controls on the Web page to be validated, by using __Validation Groups__.

The validator controls have a __ValidationGroup__ property. The toolbar and tool buttons (both __RadToolBarButton__ and __RadToolBarSplitButton__) also have a __ValidationGroup__ property. The toolbar or button only causes validation by those validators whose __ValidationGroup__ property matches the __ValidationGroup__ property of the toolbar or button. (The reason the default behavior is for all validators to execute on post-back is because the default value of the __ValidationGroup__ property on both __RadToolBar__ and validators is an empty string.)
