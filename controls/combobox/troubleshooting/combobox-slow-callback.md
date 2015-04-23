---
title: Combobox Slow Callback
page_title: Combobox Slow Callback | RadComboBox for ASP.NET AJAX Documentation
description: Combobox Slow Callback
slug: combobox/troubleshooting/combobox-slow-callback
tags: combobox,slow,callback
published: True
position: 3
---

# Combobox Slow Callback



## 

Imagine the following approach:

* Combobox items are added in the **Page_Load** event. The items are added from a huge datasource. The code is placed in **if (!Page.IsPostBack)** block RadComboBox is in a callback mode - the items are also added in the **ItemsRequested** event of the combobox.

* The code in the if (!Page.IsPostBack) block is executed upon each postback. This is what makes the combobox performance slow.

Telerik RadComboBox performs a "light" callback to the server - no *ViewState* information is sent to the server and the **Page.IsPostBack** property is set to **False** when the combobox is in a callback mode.

In addition, the **Page_Load** method is called before the **ItemsRequested** event. Therefore, all page initialization code is fired, too.To avoid re-executing of the code in the **Page_Load** event, you should check for both **Page.IsPostBack** and **Page.IsCallBack**:

````C#
protected void Page_Load(object sender, EventArgs e)
{ 
	if (!Page.IsPostBack && !Page.IsCallBack)
	{ 
		//Initialization code 
	}
}
````


