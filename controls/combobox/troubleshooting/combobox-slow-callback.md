---
title: Combobox Slow Callback
page_title: Combobox Slow Callback | UI for ASP.NET AJAX Documentation
description: Combobox Slow Callback
slug: combobox/troubleshooting/combobox-slow-callback
tags: combobox,slow,callback
published: True
position: 3
---

# Combobox Slow Callback



## 

Imagine the following approach:

* Combobox items are added in the __Page_Load__ event. The items are added from a huge datasource. The code is placed inif (!Page.IsPostBack){//Initialization code}Telerik RadComboBox is in a callback mode - the items are also added in the __ItemsRequested__ event of the combobox.

* The code in the if (!Page.IsPostBack) block is executed upon each postback. This is what makes the combobox performance slow.

Telerik RadComboBox performs a "light" callback to the server - no *ViewState* information is sent to the server and the __Page.IsPostBack__ property is set to __False__ when the combobox is in a callback mode.

In addition, the __Page_Load__ method is called before the __ItemsRequested__ event. Therefore, all page initialization code is fired, too.To avoid re-executing of the code in the __Page_Load__ event, you should check for both __Page.IsPostBack__ and __Page.IsCallBack__:

````C#
	    protected void Page_Load(object sender, EventArgs e)
	    { 
	        if (!Page.IsPostBack && !Page.IsCallBack)
	        { 
	            //Initialization code 
	        }
	    }
````


