---
title: Session State Usage
page_title: Session State Usage | RadChart for ASP.NET AJAX Documentation
description: Session State Usage
slug: chart/advanced-topics/session-state-usage
tags: session,state,usage
published: True
position: 8
---

# Session State Usage



>caution  **RadChart** has been replaced by[RadHtmlChart](http://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component.	If you are considering **RadChart** for new development, examine the[RadHtmlChart documentation](ffd58685-7423-4c50-9554-f92c70a75138)and[online demos](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx)first to see if it will fit your development needs.	If you are already using **RadChart** in your projects, you can migrate to **RadHtmlChart** by following these articles:[Migrating Series](2f393f28-bc31-459c-92aa-c3599785f6cc),[Migrating Axes](3f1bea81-87b9-4324-b0d2-d13131031048),[Migrating Date Axes](93226130-bc3c-4c53-862a-f9e17b2eb7dd),[Migrating Databinding](d6c5e2f1-280c-4fb0-b5b0-2f507697511d),[Feature parity](010dc716-ce38-480b-9157-572e0f140169).	Support for **RadChart** is discontinued as of **Q3 2014** , but the control will remain in the assembly so it can still be used.	We encourage you to use **RadHtmlChart** for new development.
>


## 

You may want to disable Session for a web application that contains a RadChart instance.The chart image is retrieved using **Session**so you are restricted from setting **EnableSessionState**false in your Page directive or web.config file.

To disable session state and still display the chart:

* Set the RadChart **UseSession**property to **False.**

* Create a temporary folder for the chart image.

* Verify the web application has write permissions to the temporary folder.

* Set the **RadChart TempImagesFolder**property to the path of the temporary folder.




>caption  

| 
>caption 

![](images/radchart-hs_caution.gif) | The zoom and scroll features of RadChart require session state usage. |
| ------ | ------ |
