---
title: RadProgressManager Client Object
page_title: RadProgressManager Client Object | UI for ASP.NET AJAX Documentation
description: RadProgressManager Client Object
slug: progressarea/client-side-programming/radprogressmanager-client-object
tags: radprogressmanager,client,object
published: True
position: 1
---

# RadProgressManager Client Object



## 

The following table lists the important methods of the __RadProgressManager__ client object:


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|startProgressPolling|none|none|Starts the progress polling.This method is useful when RadProgressManager does not handle theform.submit event by itself, or when you need to start the progress monitoring before the form is submitted.|

````ASPNET
	    <telerik:radprogressmanager runat="server" id="RadProgressManager1" registerforsubmit="false" />
	    <input type="button" value="Start" onclick="myStart()" />
	    <script type="text/javascript">
	        function myStart() {
	            getRadProgressManager().startProgressPolling(); 
	        }
	    </script>
````




>caption  

| hideProgressAreas | none | none | Hides all RadProgressArea dialogs that are currently showing. |
| ------ | ------ | ------ | ------ |

````JavaScript
	    getRadProgressManager().hideProgressAreas();
````



# See Also[](1F82B925-525C-49A2-AA66-75583DC2708E)[](DC7391D9-6EB3-4A58-B707-85C390C3A6AD)

 * [ProgressData]({%slug progressarea/client-side-programming/progressdata%})
