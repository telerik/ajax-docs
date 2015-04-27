---
title: Validation
page_title: Validation | RadTabStrip for ASP.NET AJAX Documentation
description: Validation
slug: tabstrip/web-pages/validation
tags: validation
published: True
position: 0
---

# Validation



## 

You can use the built in ASP.NET validation with **RadTabStrip**. The tab strip can trigger validation of other controls on the form when it performs a post-back to the server. Simply set the **CausesValidation** property to **True**.

By default, all validators on the Web page must be successful before the postback can occur. You can limit the controls that must be validated when the tab strip performs a post-back, while still allowing other controls on the Web page to be validated, by using **Validation Groups**. The validator controls have a **ValidationGroup** property. The tab strip also has a **ValidationGroup** property. The tab strip only causes validation by those validators whose **ValidationGroup** property matches the **ValidationGroup** property of the tab strip. (The reason the default behavior is for all validators to execute on post-back is because the default value of the **ValidationGroup** property on both **RadTabStrip** and validators is an empty string.)
