---
title: Server side events not fired when a Navigation control is bound via SiteMap DataSource
description: Server side events not fired when a Navigation control is bound via SiteMap DataSource - Telerik ASP.NET AJAX. Check it now!
type: how-to
page_title: Server side events not fired when a Navigation control is bound via SiteMap DataSource
slug: menu-server-side-events-not-fired-when-a-navigation-control-is-bound-via-sitemap-datasource
res_type: kb
---


   
 ## HOW-TO  
 Fire server-side events when the control is bound to SiteMap DataSource   
   
   
## SOLUTION  
 If a Navigation control is bound to a SiteMapDataSource, the NavigateUrl property of the items will be set.   
 This effectively disables PostBacks (ItemClick/NodeClick/TabClick events, etc.) because the item navigates to the particular URL rather than posting back.   
   
 One of the possible solutions is to subscribe to the ItemDataBound/NodeBound/TabDataBound events and set the NavigateUrl property to an empty string. You should, however, store the NavigateUrl property somewhere (e.g. in the Value or Attributes[] properties) so you can use it later to navigate after handling ItemClick/NodeClick/TabClick events.  
   
 Here is a simple code snippet:  
   
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

  