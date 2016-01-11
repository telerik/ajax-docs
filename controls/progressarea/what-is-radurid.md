---
title: RadUrid
page_title: RadUrid | RadProgressArea for ASP.NET AJAX Documentation
description: RadUrid
slug: progressarea/what-is-radurid
tags: radurid
published: True
position: 7
---

# What Is RadUrid?


When you put RadProgressArea (and RadProgressManager) on the page and upload a file you will notice that a QueryString parameter RadUrid is added:
 
![upload raduriid ](images/upload_radurid.png)

The **RadUrid** argument is added to the QueryString by the **RadProgressManager**. Its purpose is to be the unique identifier of the current request. For example, suppose that there are several users, uploading different files to the same page simultaneously. They all should get different progress displays in the progress areas. The **RadUrid** is the key parameter for ensuring each user will get the progress information about his own upload.

We do not pass it as a hidden field because **RadUploadHttpModule** needs this parameter in the very beginning of the upload process to identify which upload progress is being monitored. While the entire query string is being passed to the RadUploadHttpModule, we cannot ensure that the RadUrid parameter will be the very first field in the upload request.

There is a workaround you can use to remove the **RadUrid** argument (and still have the upload progress) - use a redirect page, that will display the "File Upload successful" message. This can be done via a Response.Redirect call in the button click handler. 