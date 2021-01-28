---
title: ProgressData
page_title: ProgressData - RadProgressArea
description: Check our Web Forms article about ProgressData.
slug: progressarea/client-side-programming/progressdata
tags: progressdata
published: True
position: 2
---

# ProgressData



## 

The **ProgressData** client-side object contains the information that **RadProgressArea** displays. It is required as a parameter to the **update()** method of **RadProgressArea**, and is available from the event argument object of several events.

The following table lists the properties of **ProgressData**:


>caption  

| Name | Type | Description |
| ------ | ------ | ------ |
|PrimaryPercent|integer|The percent of the primary process that is complete|
|PrimaryTotal|string|The formatted total size of the primary process (includes units)|
|PrimaryValue|string|The formatted current amount complete on the primary process (includes units)|
|SecondaryPercent|integer|The percent of the secondary process that is complete|
|SecondaryTotal|integer or string|The total size of the secondary process (may include units)|
|SecondaryValue|integer or string|The amount completed on the secondary process (may include units)|
|CurrentOperationText|string|The name of the current operation or file|
|TimeElapsed|string|The amount of time that has already elapsed (includes units)|
|TimeEstimated|string|The estimated time remaining until the process is complete (includes units)|
|TransferSpeed|string|The processing speed (includes units)|
|InProgress|boolean|Indicates whether the progress data is reflecting an ongoing progress.|
|RadUpload|Object|Provides access to the following information about the RadUpload control whose file is currently being uploaded. It has the following properties:

* Bytes - the number of bytes already uploaded to the server (equal to the unformatted value of PrimaryValue)

* CurrentFileName - the name of the current file (equal to CurrentOperationText)

* FilesCount - the number of files already uploaded to the server (equal to SecondaryValue)

* RequestLength - the total length of the current request in bytes (equal to the unformatted value of PrimaryTotal)|

# See Also

 * [RadProgressArea Client Object]({%slug progressarea/client-side-programming/radprogressarea-client-object%})

 * [RadProgressManager Client Object]({%slug progressarea/client-side-programming/radprogressmanager-client-object%})

 * [OnClientProgressBarUpdating]({%slug progressarea/client-side-programming/onclientprogressbarupdating%})

 * [OnClientProgressUpdating]({%slug progressarea/client-side-programming/onclientprogressupdating%})
