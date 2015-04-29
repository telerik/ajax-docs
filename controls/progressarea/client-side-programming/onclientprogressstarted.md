---
title: OnClientProgressStarted
page_title: OnClientProgressStarted | RadProgressArea for ASP.NET AJAX Documentation
description: OnClientProgressStarted
slug: progressarea/client-side-programming/onclientprogressstarted
tags: onclientprogressstarted
published: True
position: 3
---

# OnClientProgressStarted



## 

The **OnClientProgressStarted** client-side event occurs when the **RadProgressManager** starts monitoring progress.

The event handler receives a single parameter:

1. The instance of the **RadProgressManager** that is monitoring progress.

The following example uses the **OnClientProgressStarted** event to notify the user when progress monitoring starts:

````ASPNET
<telerik:radprogressmanager runat="server" id="RadProgressManager1" onclientprogressstarted="progressStarted" />
<script type="text/javascript">
	function progressStarted(radProgressManager) {
		alert("Progress monitoring has started....");
	} 
</script>
````


