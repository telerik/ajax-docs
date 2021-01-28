---
title: Structure
page_title: Structure - RadProgressArea
description: Check our Web Forms article about Structure.
slug: progressarea/structure
tags: structure
published: True
position: 1
---

# Structure



## 

The structure of the **RadProgressArea** progress dialog is shown below:

![upload radprogressarea structure](images/radprogressarea_structure.png)

Every element of the dialog can be optionally removed.

 The **Total Progress Bar** gives a graphical representation of how much of the upload has completed, based on the request size. It appears when the **ProgressIndicators** property includes "TotalProgressBar".

* The **Total Progress Indicators** include (in order)

	1. Total Progress Percent (the percentage of the request that is complete)

	1. Total Progress (the total number of bytes already uploaded)

	1. Request Size (the total number of bytes to upload)These indicators appear when the **ProgressIndicators** property includes "TotalProgressPercent", "TotalProgress", and "RequestSize", respectively.

* The **Files Count Bar** gives a graphical representation of how much of the upload has completed, based on the number of files. It appears when the **ProgressIndicators** property includes "FilesCountBar".

* The **Files Count Indicators** include (in order)

	1. Files Count Percent (the percentage of the requested files that have been uploaded)

	1. Files Count(the number of files that have been uploaded)

	1. Selected Files Count (the total number of files to upload)These indicators appear when the **ProgressIndicators** property includes "FilesCountPercent", "FilesCount", and "SelectedFilesCount", respectively.

* The **Current File Name** gives the name of the file currently being uploaded. This is included when the **ProgressIndicators** property includes "CurrentFileName".

* The **Time and Speed Indicators** include (in order).

	1. Elapsed Time (the time that has already elapsed servicing the upload request)

	1. Estimated Time (the estimated amount of time remaining )

	1. Speed (the speed of the process)These indicators appear when the **ProgressIndicators** property includes "TimeElapsed", "TimeEstimated", and "TransferSpeed", respectively.

* The **Cancel Button** lets the user cancel length upload processes. It appears when the **DisplayCancelButton** property is set to **True**.

# See Also

 * [Configuraton]({%slug progressarea/configuraton%})
