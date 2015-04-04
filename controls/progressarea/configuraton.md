---
title: Configuraton
page_title: Configuraton | UI for ASP.NET AJAX Documentation
description: Configuraton
slug: progressarea/configuraton
tags: configuraton
published: True
position: 3
---

# Configuraton



## 

The indicators in the __RadProgressArea__ dialog can all be optionally included or excluded using the __ProgressIndicators__ property:

* The __Total Progress Bar__ appears when __ProgressIndicators__ includes "TotalProgressBar".

* The __Total Progress Percent__ appears when __ProgressIndicators__ includes "TotalProgressPercent".

* The __Total Progress__ size appears when __ProgressIndicators__ includes "TotalProgress".

* The __Request Size__ appears when __ProgressIndicators__ includes "RequestSize".

* The __Files Count Bar__ appears when __ProgressIndicators__ includes "FilesCountBar".

* The __Files Count Percent__ appears when __ProgressIndicators__ includes "FilesCountPercent".

* The __Files Count__ appears when __ProgressIndicators__ includes "FilesCount".

* The __Selected Files Count__ appears when __ProgressIndicators__ includes "SelectedFilesCount".

* The __Current File Name__ appears when __ProgressIndicators__ includes "CurrentFileName".

* The __Elapsed Time__ appears when __ProgressIndicators__ includes "TimeElapsed".

* The __Estimated Time__ appears when __ProgressIndicators__ includes "TimeEstimated".

* The __Speed__ appears when __ProgressIndicators__ includes "TransferSpeed".

In addition, you can optionally display or hide the __Cancel__ button by setting the __DisplayCancelButton__ property.

The following example shows a __RadProgressArea__ that shows only the files indicators and a cancel button:

````ASPNET
	    <telerik:radprogressarea id="RadProgressArea1" runat="server" displaycancelbutton="True"
	        progressindicators="FilesCountBar, FilesCount, FilesCountPercent, SelectedFilesCount, CurrentFileName">
	    </telerik:radprogressarea>
````



When setting the __ProgressIndicators__ property at runtime, use the "or" operator to combine values:



>tabbedCode

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
>end

>note The __ProgressIndicators__ type is defined in the Telerik.Web.UI.Upload namespace.
>


>note You can modify the positions and the HTML elements of the progress indicators by creating a[Progress Template]({%slug progressarea/progress-template%}).
>


# See Also

 * [Structure]({%slug progressarea/structure%})
