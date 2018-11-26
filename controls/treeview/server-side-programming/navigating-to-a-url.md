---
title: Navigating to a URL
page_title: Navigating to a URL | RadTreeView for ASP.NET AJAX Documentation
description: Navigating to a URL
slug: treeview/server-side-programming/navigating-to-a-url
tags: navigating,to,a,url
published: True
position: 5
---

# Navigating to a URL



**RadTreeView** allows three types of **Node** actions:

* URL navigation (**NavigateUrl** attribute)

* [Client-side JavaScript events]({%slug treeview/client-side-programming/events/overview%}) (**ClientEvent** attribute)

* [Server-side postback events]({%slug treeview/server-side-programming/events/overview%}) (**PostBack** attribute)

## URL Navigation

If you want a particular **Node** to navigate to a given URL location, set the **NavigateUrl** attribute.


>caption  

| This code sets the tree Node myNode to be a link to relative URL location "auctions.aspx?id=4". | //codeRadTreeNode myNode= new RadTreeNode ();myNode.NavigateUrl = "auctions.aspx?id=4"; |
| ------ | ------ |
|This XML code has the same effect as the one above. It sets the tree Node "MyLabel" to be a link to the same URL location "auctions.aspx?id=4"|// xml<Node Text= "MyLabel" NavigateUrl= "auctions.aspx?id=4" />|

## URL Navigation (frames)

RadTreeView fully supports frames, as well. You can set URL Navigation for a specified frame by using the **Target** attribute. Note: **Target** supports "**_blank**" for opening in a new window.



````C#
RadTreeNode myNode = new RadTreeNode ();
myNode.NavigateUrl = "auctions.aspx?id=4";
myNode.Target = "contentFrame"; 		
````
````VB.NET
Dim myNode As New RadTreeNode()
myNode.NavigateUrl = "auctions.aspx?id=4"
myNode.Target = "contentFrame" 
````


````ASPNET
<node text="MyLabel" navigateurl="auctions.aspx?id=4" target="contentFrame" />
````



>note For URL links outside your site you must provide full URL, i.e. NavigateUrl="[http://www.yahoo.com](http://www.yahoo.com/)"
>

