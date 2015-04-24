---
title: Thumbnails Mode
page_title: Thumbnails Mode | RadFileExplorer for ASP.NET AJAX Documentation
description: Thumbnails Mode
slug: fileexplorer/functionality/thumbnails-mode
tags: thumbnails,mode
published: True
position: 1
---

# Thumbnails Mode



## 

Since Q1 2012 the **RadFileExplorer** offers the Thumbnails Explorer mode. This is a new way to display the list of files, just as you would expect in Windows Explorer. The special feature is displaying images through thumbnails, not as file icons. This view utilizes the **RadListView** control and its newly implemented [Client-Side binding](247de98a-2fc1-48fa-8613-4515fb6c1d64).

You can enable this mode by setting the **ExplorerMode** property to **Thumbnails**, e.g.

````ASPNET
	    <telerik:RadFileExplorer runat="server" ID="FileExplorer1" ExplorerMode="Thumbnails"></telerik:RadFileExplorer>
````

![radfileexplorer-thumbnails-mode-preview](images/radfileexplorer-thumbnails-mode-preview.png)

# See Also[Client-Side binding for RadListView](247de98a-2fc1-48fa-8613-4515fb6c1d64)
