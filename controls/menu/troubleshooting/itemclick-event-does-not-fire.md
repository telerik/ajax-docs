---
title: ItemClick Event Does Not Fire
page_title: ItemClick Event Does Not Fire | RadMenu for ASP.NET AJAX Documentation
description: ItemClick Event Does Not Fire
slug: menu/troubleshooting/itemclick-event-does-not-fire
tags: itemclick,event,does,not,fire
published: True
position: 3
---

# ItemClick Event Does Not Fire



## 

**Q:** Why does my event does not fire?

**A:** There are two reasons for not getting the **[OnItemClick]({%slug menu/server-side-programming/itemclick%})** server-side event fired:

* You have not subscribed to the **OnItemClick** event. Here is the correct subscription:

````ASPNET
	    <telerik:RadMenu ID="RadMenu1" 
	        runat="server" 
	        OnItemClick="RadMenu1_ItemClick">
````



````C#
	protected void RadMenu1_ItemClick(object sender, Telerik.Web.UI.RadMenuEventArgs e)   
	{       
	    Response.Write("You clicked: " + e.Item.Text);   
	}  
				
````





* You have set the **NavigateUrl** property of the menu item.

````ASPNET
	    <telerik:RadMenu ID="RadMenu1" runat="server" OnItemClick="RadMenu1_ItemClick">
	        <items>                
	            <telerik:RadMenuItem runat="server"                     
	                Text="This item will not fire ItemClick event"                    
	                NavigateUrl="myPage.aspx">                
	            </telerik:RadMenuItem>
````



This effectively disables PostBacks (OnItemClick event) because the item navigate to the particular URL rather than posting back. One of the possible solutions is to subscribe to the [ItemDataBound]({%slug menu/server-side-programming/itemdatabound%}) / [ItemCreated]({%slug menu/server-side-programming/itemcreated%}) event and set the NavigateUrl property to an empty string. You should, however, store the NavigateUrl property somewhere (e.g. in the Value or Attributes[] properties) so you can use it later to navigate after handling ItemClick events. Here is a simple code snippet:

````C#
	protected void RadMenu1_ItemDataBound(object sender, RadMenuEventArgs e)      
	{          
	    e.Item.Attributes["NavigateUrl"] = e.Item.NavigateUrl;          
	    e.Item.NavigateUrl = "";      
	}           
	
	protected void RadMenu1_ItemClick(object sender, RadMenuEventArgs e)
	{          
	    //Custom code here                     
	    //Navigate          
	    Response.Redirect(e.Item.Attributes["NavigateUrl"].ToString());      
	}     
				
````


