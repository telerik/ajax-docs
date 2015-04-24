---
title: Configuraton
page_title: Configuraton | RadProgressArea for ASP.NET AJAX Documentation
description: Configuraton
slug: progressarea/configuraton
tags: configuraton
published: True
position: 3
---

# Configuraton



## 

The indicators in the **RadProgressArea** dialog can all be optionally included or excluded using the **ProgressIndicators** property:

* The **Total Progress Bar** appears when **ProgressIndicators** includes "TotalProgressBar".

* The **Total Progress Percent** appears when **ProgressIndicators** includes "TotalProgressPercent".

* The **Total Progress** size appears when **ProgressIndicators** includes "TotalProgress".

* The **Request Size** appears when **ProgressIndicators** includes "RequestSize".

* The **Files Count Bar** appears when **ProgressIndicators** includes "FilesCountBar".

* The **Files Count Percent** appears when **ProgressIndicators** includes "FilesCountPercent".

* The **Files Count** appears when **ProgressIndicators** includes "FilesCount".

* The **Selected Files Count** appears when **ProgressIndicators** includes "SelectedFilesCount".

* The **Current File Name** appears when **ProgressIndicators** includes "CurrentFileName".

* The **Elapsed Time** appears when **ProgressIndicators** includes "TimeElapsed".

* The **Estimated Time** appears when **ProgressIndicators** includes "TimeEstimated".

* The **Speed** appears when **ProgressIndicators** includes "TransferSpeed".

In addition, you can optionally display or hide the **Cancel** button by setting the **DisplayCancelButton** property.

The following example shows a **RadProgressArea** that shows only the files indicators and a cancel button:

````ASPNET
	    <telerik:radprogressarea id="RadProgressArea1" runat="server" displaycancelbutton="True"
	        progressindicators="FilesCountBar, FilesCount, FilesCountPercent, SelectedFilesCount, CurrentFileName">
	    </telerik:radprogressarea>
````



When setting the **ProgressIndicators** property at runtime, use the "or" operator to combine values:





````C#
	     
		RadProgressArea1.ProgressIndicators =  ProgressIndicators.FilesCount 
	        |  ProgressIndicators.FilesCountBar 
	        |  ProgressIndicators.FilesCountPercent 
	        |  ProgressIndicators.SelectedFilesCount 
	        |  ProgressIndicators.CurrentFileName;
				
````
````VB.NET
	     
		RadProgressArea1.ProgressIndicators = 
		    _  ProgressIndicators.FilesCount Or 
		        _  ProgressIndicators.FilesCountBar Or 
		        _   ProgressIndicators.FilesCountPercent Or 
		        _  ProgressIndicators.SelectedFilesCount Or 
		        _  ProgressIndicators.CurrentFileName
				
````


>note The **ProgressIndicators** type is defined in the Telerik.Web.UI.Upload namespace.
>


>note You can modify the positions and the HTML elements of the progress indicators by creating a[Progress Template]({%slug progressarea/progress-template%}).
>


# See Also

 * [Structure]({%slug progressarea/structure%})
