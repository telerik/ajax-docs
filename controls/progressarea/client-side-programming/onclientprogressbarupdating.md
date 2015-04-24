---
title: OnClientProgressBarUpdating
page_title: OnClientProgressBarUpdating | RadProgressArea for ASP.NET AJAX Documentation
description: OnClientProgressBarUpdating
slug: progressarea/client-side-programming/onclientprogressbarupdating
tags: onclientprogressbarupdating
published: True
position: 4
---

# OnClientProgressBarUpdating



## 

The **OnClientProgressBarUpdating** client-side event occurs when a **RadProgressArea** dialog is about to update one of its progress bars.

The event handler receives two parameters:

1. The instance of the **RadProgressArea** control that is about to update.

1. An eventArgs parameter containing the following methods:

* **get_progressBarElement** returns the DOM element for the progress bar that is about to be updated.

* **get_progressBarElementName** returns the name of the progress bar. This can be either "PrimaryProgressBar" or "SecondaryProgressBar".

* **get_progressData** returns the [progressData]({%slug progressarea/client-side-programming/progressdata%}) that is being used to update the progress bars.

* **get_progressValue** returns the percentage that the updated progress bar will show.

* **set_cancel** lets you cancel the update to the progress bar (for example if you handle the update from within the event handler).

* **get_cancel** returns whether the updates to the progress bar have been cancelled.

The following example uses the **OnClientProgressBarUpdating** event to implement both a vertical and a horizontal progress bar:

````JavaScript
	    <telerik:radprogressarea runat="server" id="RadProgressArea1" onclientprogressbarupdating="updateProgressBars" />
	    <script type="text/javascript">
	    function updateProgressBars(radProgressArea, args) {   
	    // The primary progress bar is horizontal (default)   
	    // note that this entire if statement could be deleted   
	    // and the default behavior would do the same thing   
	    if (args.get_progressBarElementName() == "PrimaryProgressBar") {       
	        radProgressArea.updateHorizontalProgressBar(args.get_progressBarElement(), args.get_progressValue());
	        //Skip the default progress bar updating       
	        args.set_cancel(true);   }   
	        //The secondary progress bar will be vertical   
	        if (args.get_progressBarElementName() == "SecondaryProgressBar")   
	        {       
	            radProgressArea.updateVerticalProgressBar(args.get_progressBarElement(), args.get_progressValue());
	            //Skip the default progress bar updating       
	            args.set_cancel(true);
	        }
	    }
	    
	    </script>
````



# See Also

 * [OnClientProgressUpdating]({%slug progressarea/client-side-programming/onclientprogressupdating%})

 * [Progress Template]({%slug progressarea/progress-template%})
