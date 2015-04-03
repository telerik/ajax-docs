---
title: Making Postback or AJAX Request on Client Row Click
page_title: Making Postback or AJAX Request on Client Row Click | UI for ASP.NET AJAX Documentation
description: Making Postback or AJAX Request on Client Row Click
slug: grid/client-side-programming/making-postback-or-ajax-request-on-client-row-click
tags: making,postback,or,ajax,request,on,client,row,click
published: True
position: 2
---

# Making Postback or AJAX Request on Client Row Click



## 

There are cases in which you may want to trigger postback/ajax request to the server when the user clicks a grid data row anywhere (not only when hitting a button/checkbox/other control in the row). This is the time when the new autopostback-on-row-click feature of Telerik RadGrid comes handy.

To enable this new feature, just set the __ClientSettings-EnablePostBackOnRowClick__ property of the grid to __true__ (the default value is false). Thus when the user click an arbitrary cell in a grid row, a postback/ajax request will be started automatically depending on whether the control has been ajaxified, for example by using the RadAjaxManager. To intercept the request and execute custom logic from the code-behind, wire the __ItemCommand__ event of the grid. From within the ItemCommand event handler, you can check specifically for whether the command was raised by clicking on a row, by checking is "e.CommandName" is equal to "RowClick".

[On this demo](http://demos.telerik.com/aspnet-ajax/grid/examples/programming/selectedvalue/defaultcs.aspx) the clicked grid row will be selected server-side and the id of the chosen item will be used to populate the related grids with data.

How to start and handle postback/ajax requests from other client grid events you can learn from the knowledge base article linked below:

[Postback/AJAX request from grid client events](http://www.telerik.com/support/kb/article/b454K-kce-b454T-cba.aspx)
