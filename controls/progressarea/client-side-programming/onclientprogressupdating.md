---
title: OnClientProgressUpdating
page_title: OnClientProgressUpdating - RadProgressArea
description: Check our Web Forms article about OnClientProgressUpdating.
slug: progressarea/client-side-programming/onclientprogressupdating
tags: onclientprogressupdating
published: True
position: 5
---

# OnClientProgressUpdating



The **OnClientProgressUpdating** client-side event occurs when a **RadProgressArea** dialog is about to update its indicators. This event occurs for both **RadProgressArea** and **RadProgressManager**. The event fires for **RadProgressManager** before it fires for **RadProgressArea**.

The event handler receives two parameters:

1. The instance of the **RadProgressArea or RadProgressManager** control firing the event.

1. An eventArgs parameter. This parameter differs, depending on the control firing the event:

	* On **RadProgressManager**, the eventArgs parameter has a single property: **ProgressData**, which contains the data the progress manager sends to the **RadProgressArea** controls on the page.

	* On **RadProgressArea**, the eventArgs parameter has three methods:

	* **get_progressData** returns a [progressData]({%slug progressarea/client-side-programming/progressdata%}) object, containing the values that are about to be used to update the **RadProgressArea** dialog.

	* **set_cancel** lets you cancel the update to the dialog.

	* **get_cancel** returns whether the updates to the dialog have been cancelled.

Use the **OnClientProgressUpdating** event to make changes to the values that are about to be used to update the progress dialog or, on **RadProgressArea**, to update custom controls that have been added using a [progress template]({%slug progressarea/progress-template%}).

## RadProgressArea example

The following example uses the **OnClientProgressUpdating** event to cancel an upload if it exceeds a maximum upload size:

````JavaScript
<script type="text/javascript">
function checkUploadedFilesSize(progressArea, args) {
	//progressArea.confirmed is a custom variable,    
	// you can use another if you want to    
	if (!progressArea.confirmed && args.get_progressData().RadUpload.RequestSize > 1000000) {
		if (confirm("The total size of the selected files" +
					   " is more than the limit." +
					   +"Do you want to cancel the upload?")) {
			progressArea.cancelRequest();
		}
		else {
			progressArea.confirmed = "confirmed";
		}
	}
}

</script>

<telerik:radprogressarea runat="server" id="RadProgressArea1" onclientprogressupdating="checkUploadedFilesSize" />
````



## RadProgressManager example

The following example uses the **OnClientProgressUpdating** event to change one of the values that all progress dialogs display:

````JavaScript
<script type="text/javascript">
	function alterProgressData(source, eventArgs) {
		var progressData = eventArgs.ProgressData();
		progressData.CurrentOperationText = "uploading files";
	}

</script>
<telerik:radprogressmanager id="RadProgressArea1" runat="server" onclientprogressupdating="alterProgressData">
</telerik:RadProgressArea>
				
````



# See Also

 * [OnClientProgressBarUpdating]({%slug progressarea/client-side-programming/onclientprogressbarupdating%})
