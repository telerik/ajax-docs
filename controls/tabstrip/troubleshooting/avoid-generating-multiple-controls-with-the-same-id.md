---
title: Avoid generating multiple controls with the same ID
page_title: Avoid generating multiple controls with the same ID - RadTabStrip
description: Check our Web Forms article about Avoid generating multiple controls with the same ID.
slug: tabstrip/troubleshooting/avoid-generating-multiple-controls-with-the-same-id
tags: how,to,multiple,id,prevent,equal
published: True
position: 1
---

# Avoid generating multiple controls with the same ID



## Problem

It is very likely to get the following error message when creating controls at runtime:

**Multiple controls with the same ID were found. FindControl requires that controls have unique IDs**

In general it indicates that another control with the same ID has been created on a postback of the page.


## Solution

There are a couple of ways to workaround the above issue:

* To prevent the postback of the page as implemented in our [Load on Demand demo](https://demos.telerik.com/aspnet-ajax/tabstrip/examples/applicationscenarios/loadondemand/defaultcs.aspx) and using the **OnClientTabSelecting** client side event:

````JavaScript
function onTabSelecting(sender, eventArgs) {
  if (args.get_tab().get_pageViewID()) {
      args.get_tab().set_postBack(false)
  }
}
````

* If you need the page to do a postback you **do not** need to attach the client-side **OnClientTabSelecting** event but simply need to check if there is already an existing PageViewId in the **OnTabClick** server side event handler:!

````C#
function RadTabStrip1_tabClick(object sender, RadTabStripEventArgs e) {
  if (e.Tab.PageViewID == null) {
      AddPageView(e.Tab);
	  e.Tab.PageView.Selected = true;
  }
}
````

