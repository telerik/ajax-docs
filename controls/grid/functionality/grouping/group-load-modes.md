---
title: Group Load Modes
page_title: Group Load Modes | UI for ASP.NET AJAX Documentation
description: Group Load Modes
slug: grid/functionality/grouping/group-load-modes
tags: group,load,modes
published: True
position: 2
---

# Group Load Modes



## 

You can specify whether a table view in the grid handles grouping on the client or on the server:

* __Server-side grouping__: To enable grouping on the server, set the __GroupLoadMode__ property of a table view to "Server". (this is the default behavior). When grouping is handled on the server, the grid performs a postback to the server every time a group is expanded.

````ASPNET
	  <MasterTableView GroupLoadMode="Server" />
````



* __Client-side grouping__: To enable grouping on the client, set the __GroupLoadMode__ property of a table view to "Client" and the __ClientSettings.AllowGroupExpandCollapse__ property to __True__. When grouping is handled on the client, groups are expanded client-side, without a postback. This means that the data for all groups, whether they are expanded or not, must be loaded on the client.

````ASPNET
	  <MasterTableView GroupLoadMode="Client" />
	  <ClientSettings AllowGroupExpandCollapse="True" />
````



>caution Note that with client load mode of the groups the __GroupsDefaultExpanded="false"__ setting will work only for the root items. Once you expand a root group, its child groups will get expanded too.
>


For a live example that demonstrates the __GroupLoadMode__ property, see [Client group load](http://demos.telerik.com/aspnet-ajax/Grid/Examples/GroupBy/GroupLoadModeClient/DefaultCS.aspx).
