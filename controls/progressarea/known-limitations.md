---
title: Known Limitations
page_title: Known Limitations | UI for ASP.NET AJAX Documentation
description: Known Limitations
slug: progressarea/known-limitations
tags: known,limitations
published: True
position: 11
---

# Known Limitations



## 

Here are the known limitations of __RadProgressArea__:

* __RadProgressArea__ now works under the Safari browser, but the __Cancel__ button is always hidden. It is not possible to stop the upload under Safari due to the way the browser deals with the file upload and javascript. The client-side events __OnClientProgressBarUpdating__ and __OnClientProgressUpdating__ do not fire under Safari.

* Progress monitoring requires __ReflectionPermission__ in order to operate correctly. This means that in normal circumstances you will have to run your application with __Full Trust__ permission set, unless you create a [custom security policy](http://msdn2.microsoft.com/en-us/library/ms998326.aspx) that allows __ReflectionPermission__. If you are unable to set Full Trust or a custom security policy, the solution is to put the controls assembly in __GAC__.

* The current mechanism for canceling a file upload sometimes does not notify the server for the performed action and the latter continues to process the upload request. This often happens on Windows 2003 Server with a browser other than __IE__.

* When an application is using RadUpload control with RadProgressArea and is deployed on IIS server the progress indicators are not working. The issue appears only when you open a web site e.g. __http://localhost/testpage/__ and the Default.aspx (the Default.aspx file is the default document of the application) file is opened and the URL is without Default.aspx. If you open e.g. __http://localhost/testpage/Default.apsx__ URL the RadProgressArea is working correct. The issue appears because of the HttpRequest object.

* When an application is run with Visual Studio (under Cassini) it is not possible to cancel the RadProgressArea. The to able to cancel the progress the project should be deployed on IIS.

* The RadProgressArea is not supported under SharePoint. In case you need to use it, however, you can do so with the __RadAsyncUpload__ control.


