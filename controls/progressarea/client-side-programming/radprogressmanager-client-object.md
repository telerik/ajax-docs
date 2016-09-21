---
title: RadProgressManager Client Object
page_title: RadProgressManager Client Object | RadProgressArea for ASP.NET AJAX Documentation
description: RadProgressManager Client Object
slug: progressarea/client-side-programming/radprogressmanager-client-object
tags: radprogressmanager,client,object
published: True
position: 1
---

# RadProgressManager Client Object



## 

The following table lists the important methods of the **RadProgressManager** client object:



| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|startProgressPolling|none|none|Starts the progress polling. This method is useful when RadProgressManager does not handle theform.submit event by itself, or when you need to start the progress monitoring before the form is submitted. See **Example 1**. |
| hideProgressAreas | none | none | Hides all RadProgressArea dialogs that are currently showing. See **Example 2**. |




>caption Example 1: Start the progress polling.
````ASPNET
<telerik:RadProgressManager runat="server" id="RadProgressManager1" registerforsubmit="false" />
<input type="button" value="Start" onclick="myStart()" />
<script type="text/javascript">
	function myStart() {
		getRadProgressManager().startProgressPolling(); 
	}
</script>
````


>caption Example 2: Hide all RadProgressArea dialogs.
````JavaScript
getRadProgressManager().hideProgressAreas();
````


# See Also

 * [RadAsyncUpload Client-side Programming Overview]({%slug asyncupload/client-side-programming/overview%})
 
 * [RadAsyncUpload Client-side events]({%slug asyncupload/client-side-programming/events%})

 * [ProgressData]({%slug progressarea/client-side-programming/progressdata%})
