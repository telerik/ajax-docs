---
title: Resizing Rows
page_title: Resizing Rows | UI for ASP.NET AJAX Documentation
description: Resizing Rows
slug: grid/rows/resizing-rows
tags: resizing,rows
published: True
position: 2
---

# Resizing Rows



## 

You can allow row resizing by setting the __ClientSettings.Resizing.AllowRowResize__ property to __true__. When you set this property, __RadGrid__ automatically generates a column of type __GridRowIndicatorColumn__, to make it easier for users to resize rows. Rows can be resized by dragging any part of their bottom edge, so if you prefer to hide the RowIndicatorColumn, please set __ClientSettings.Resizing.ShowRowIndicatorColumn__ to __false__.

![Row Resize and GridRowIndicatorColumn](images/grd_RowIndicatorColumn.png)

````ASPNET
	  <telerik:RadGrid ID="RadGrid1" runat="server" DataSourceID="AccessDataSource1" Skin="WebBlue">
	    <MasterTableView DataSourceID="AccessDataSource1" TableLayout="Auto">
	    </MasterTableView>
	    <ClientSettings>
	      <Scrolling AllowScroll="True" UseStaticHeaders="True" />
	      <Resizing AllowRowResize="True" />
	    </ClientSettings>
	  </telerik:RadGrid>
````


