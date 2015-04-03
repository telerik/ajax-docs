---
title: Ajaxified Control Still Makes Postbacks
page_title: Ajaxified Control Still Makes Postbacks | UI for ASP.NET AJAX Documentation
description: Ajaxified Control Still Makes Postbacks
slug: ajax/radajaxmanager/troubleshooting/ajaxified-control-still-makes-postbacks
tags: ajaxified,control,still,makes,postbacks
published: True
position: 1
---

# Ajaxified Control Still Makes Postbacks



This troubleshooting help article covers some solutions for when you have add an __AjaxSetting__for a control that you wantto AJAX enable.

## 

If you have added __AjaxSetting__ for a control to be ajaxified, but it still makes regular postbacks you can try oneof the following suggestions.

* __If Your AjaxSettings Are Defined in ASPX__You should verify whether the control ID matches completely in the corresponding __AjaxSetting__. Also,you should checkwhether the __RadAjaxManager__ designer shows your control as ajaxified, which will ensure that the manager will find and ajaxifythe control at runtime.

* If Your AjaxSettings Are Defined in the Code-behindCheck if you are adding your __AjaxSettings__ on any control's event-handler? __AjaxSettings__ arenot preserved in the __ViewState__ so you have to add them on each PageLoad. In cases like this, you may find your"ajaxified" control making a postback on the first try.
