---
title: OnClientProgressUpdating
page_title: OnClientProgressUpdating | UI for ASP.NET AJAX Documentation
description: OnClientProgressUpdating
slug: progressarea/client-side-programming/onclientprogressupdating
tags: onclientprogressupdating
published: True
position: 5
---

# OnClientProgressUpdating



The __OnClientProgressUpdating__ client-side event occurs when a __RadProgressArea__ dialog is about to update its indicators. This event occurs for both __RadProgressArea__ and __RadProgressManager__. The event fires for __RadProgressManager__ before it fires for __RadProgressArea__.

The event handler receives two parameters:

1. The instance of the __RadProgressArea or RadProgressManager__ control firing the event.

1. An eventArgs parameter. This parameter differs, depending on the control firing the event:

* On __RadProgressManager__, the eventArgs parameter has a single property: __ProgressData__, which contains the data the progress manager sends to the __RadProgressArea__ controls on the page.

* On __RadProgressArea__, the eventArgs parameter has three methods:

* __get_progressData__ returns a [progressData]({%slug progressarea/client-side-programming/progressdata%}) object, containing the values that are about to be used to update the __RadProgressArea__ dialog.

* __set_cancel__ lets you cancel the update to the dialog.

* __get_cancel__ returns whether the updates to the dialog have been cancelled.

Use the __OnClientProgressUpdating__ event to make changes to the values that are about to be used to update the progress dialog or, on __RadProgressArea__, to update custom controls that have been added using a [progress template]({%slug progressarea/progress-template%}).

## RadProgressArea example

The following example uses the __OnClientProgressUpdating__ event to cancel an upload if it exceeds a maximum upload size:

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

The following example uses the __OnClientProgressUpdating__ event to change one of the values that all progress dialogs display:

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
