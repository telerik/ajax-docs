---
title: Validation
page_title: Validation | UI for ASP.NET AJAX Documentation
description: Validation
slug: tabstrip/web-pages/validation
tags: validation
published: True
position: 0
---

# Validation



## 

You can use the built in ASP.NET validation with __RadTabStrip__. The tab strip can trigger validation of other controls on the form when it performs a post-back to the server. Simply set the __CausesValidation__ property to __True__.

By default, all validators on the Web page must be successful before the postback can occur. You can limit the controls that must be validated when the tab strip performs a post-back, while still allowing other controls on the Web page to be validated, by using __Validation Groups__. The validator controls have a __ValidationGroup__ property. The tab strip also has a __ValidationGroup__ property. The tab strip only causes validation by those validators whose __ValidationGroup__ property matches the __ValidationGroup__ property of the tab strip. (The reason the default behavior is for all validators to execute on post-back is because the default value of the __ValidationGroup__ property on both __RadTabStrip__ and validators is an empty string.)
