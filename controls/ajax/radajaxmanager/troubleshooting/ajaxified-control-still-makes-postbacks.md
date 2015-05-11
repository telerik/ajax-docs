---
title: Ajaxified Control Still Makes Postbacks
page_title: Ajaxified Control Still Makes Postbacks | RadAjax for ASP.NET AJAX Documentation
description: Ajaxified Control Still Makes Postbacks
slug: ajax/radajaxmanager/troubleshooting/ajaxified-control-still-makes-postbacks
tags: ajaxified,control,still,makes,postbacks
published: True
position: 1
---

# Ajaxified Control Still Makes Postbacks



This troubleshooting help article covers some solutions for when you have add an **AjaxSetting**for a control that you want to AJAX enable.

## 

If you have added **AjaxSetting** for a control to be ajaxified, but it still makes regular postbacks you can try one of the following suggestions.

* **If Your AjaxSettings Are Defined in ASPX** You should verify whether the control ID matches completely in the corresponding **AjaxSetting**. Also,you should check whether the **RadAjaxManager** designer shows your control as ajaxified, which will ensure that the manager will find and ajaxifythe control at runtime.

* If Your AjaxSettings Are Defined in the Code-behindCheck if you are adding your **AjaxSettings** on any control's event-handler? **AjaxSettings** are not preserved in the **ViewState** so you have to add them on each PageLoad. In cases like this, you may find your"ajaxified" control making a postback on the first try.
