---
title: Custom Paging
page_title: Custom Paging - RadListView
description: Check our Web Forms article about Custom Paging.
slug: listview/fuctionality/paging/custom-paging
tags: custom,paging
published: True
position: 2
---

# Custom Paging



## 

In various scenarios, where RadGrid's built-in paging functionality is not sufficient, RadListView provides **custom paging**. To enable custom paging, you need to set:

* **AllowPaging = true;** - enable paging for RadListView

* **AllowCustomPaging = true;** - enable custom paging for RadListView

* **VirtualItemCount = [number];** - set the total number of items RadListView's data source returns

When custom paging is enabled, RadListView fires its server-side **PageIndexChanged** event and automatically rebinds after that. The developer is responsible for retrieving the requested page of data for RadListView.

>caution When custom paging is enabled, RadListView does not automatically page through its data. It only fires the **PageIndexChanged** event, so that the developer can fetch the required page.
>


Custom paging can be used both with declarative data source controls (using the **DataSourceID** property) or when binding through the **NeedDataSource** event. Additionally, firing the Page event from code using **RadListViewItem.FireCommand()**also works with custom paging.

>note RadListView also supports another option for custom paging, i.e. when using [declarative binding]({%slug listview/data-binding/server-side/net-3.5-data-source-controls%}) to an ObjectDataSource that supports its own paging.
>


To see RadListView in action with custom paging, please, visit the [custom paging live demo.](https://demos.telerik.com/aspnet-ajax/listview/examples/paging/custompaging/defaultcs.aspx)
