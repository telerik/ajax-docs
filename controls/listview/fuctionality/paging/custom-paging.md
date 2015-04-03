---
title: Custom Paging
page_title: Custom Paging | UI for ASP.NET AJAX Documentation
description: Custom Paging
slug: listview/fuctionality/paging/custom-paging
tags: custom,paging
published: True
position: 2
---

# Custom Paging



## 

In various scenarios, where RadGrid's built-in paging functionality is not sufficient, RadListView provides __custom paging__. To enable custom paging, you need to set:

* __AllowPaging = true;__ - enable paging for RadListView

* __AllowCustomPaging = true;__ - enable custom paging for RadListView

* __VirtualItemCount = [number];__ - set the total number of items RadListView's data source returns

When custom paging is enabled, RadListView fires its server-side __PageIndexChanged__ event and automatically rebinds after that. The developer is responsible for retrieving the requested page of data for RadListView.

>caution When custom paging is enabled, RadListView does not automatically page through its data. It only fires the __PageIndexChanged__ event, so that the developer can fetch the required page.
>


Custom paging can be used both with declarative data source controls (using the __DataSourceID__ property) or when binding through the __NeedDataSource__ event. Additionally, firing the Page event from code using __RadListViewItem.FireCommand()__also works with custom paging.

>note RadListView also supports another option for custom paging, i.e. when using[declarative binding]({%slug listview/data-binding/server-side/net-3.5-data-source-controls%})to an ObjectDataSource that supports its own paging.
>


To see RadListView in action with custom paging, please, visit the [custom paging live demo.](http://demos.telerik.com/aspnet-ajax/listview/examples/paging/custompaging/defaultcs.aspx)
