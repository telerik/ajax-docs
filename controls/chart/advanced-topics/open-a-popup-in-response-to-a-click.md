---
title: Open a Popup in Response to a Click
page_title: Open a Popup in Response to a Click | RadChart for ASP.NET AJAX Documentation
description: Open a Popup in Response to a Click
slug: chart/advanced-topics/open-a-popup-in-response-to-a-click
tags: open,a,popup,in,response,to,a,click
published: True
position: 2
---

# Open a Popup in Response to a Click



>caution  **RadChart** has been replaced by[RadHtmlChart](http://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component.	If you are considering **RadChart** for new development, examine the[RadHtmlChart documentation](ffd58685-7423-4c50-9554-f92c70a75138)and[online demos](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx)first to see if it will fit your development needs.	If you are already using **RadChart** in your projects, you can migrate to **RadHtmlChart** by following these articles:[Migrating Series](2f393f28-bc31-459c-92aa-c3599785f6cc),[Migrating Axes](3f1bea81-87b9-4324-b0d2-d13131031048),[Migrating Date Axes](93226130-bc3c-4c53-862a-f9e17b2eb7dd),[Migrating Databinding](d6c5e2f1-280c-4fb0-b5b0-2f507697511d),[Feature parity](010dc716-ce38-480b-9157-572e0f140169).	Support for **RadChart** is discontinued as of **Q3 2014** , but the control will remain in the assembly so it can still be used.	We encourage you to use **RadHtmlChart** for new development.
>


## 

To open a window in response to a click you can use the [ActiveRegion]({%slug chart/advanced-topics/image-maps%})Url property and assign a javascript that will in turn open the window:

* In the ASP.NET HTML markup define a JavaScript method that will display the popup window:

````JavaScript
	
	        function ShowPopUpDialog(url) {
	            window.open(url, 'MyPopUpWindow', 'height = 300px, width = 300px', true);
	        }
	
````



* Locate a [ActiveRegion]({%slug chart/advanced-topics/image-maps%}) property, e.g. from a chart series item and assign a call to the JavaScript using the [ActiveRegion]({%slug chart/advanced-topics/image-maps%})Url property:



````C#
	     
	RadChart1.Series[0].Items[0].ActiveRegion.Url =  "javascript:ShowPopUpDialog('SalesDetail.aspx');";
				
````
````VB.NET
	
	
	RadChart1.Series(0).Items(0).ActiveRegion.Url =  "javascript:ShowPopUpDialog('SalesDetail.aspx');"
	
````







