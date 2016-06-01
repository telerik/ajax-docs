---
title: Known Limitations
page_title: Known Limitations | RadProgressArea for ASP.NET AJAX Documentation
description: Known Limitations
slug: progressarea/known-limitations
tags: known,limitations
published: True
position: 11
---

# Known Limitations



## 

Here are the known limitations of **RadProgressArea**:

* **RadProgressArea** now works under the Safari browser, but the **Cancel** button is always hidden. It is not possible to stop the upload under Safari due to the way the browser deals with the file upload and javascript. The client-side events **OnClientProgressBarUpdating** and **OnClientProgressUpdating** do not fire under Safari.

* Progress monitoring requires **ReflectionPermission** in order to operate correctly. This means that in normal circumstances you will have to run your application with **Full Trust** permission set, unless you create a [custom security policy](http://msdn2.microsoft.com/en-us/library/ms998326.aspx) that allows **ReflectionPermission**. If you are unable to set Full Trust or a custom security policy, the solution is to put the controls assembly in **GAC**.

* The current mechanism for canceling a file upload sometimes does not notify the server for the performed action and the latter continues to process the upload request. This often happens on Windows 2003 Server with a browser other than **IE**.

* When an application is using RadUpload control with RadProgressArea and is deployed on IIS server the progress indicators are not working. The issue appears only when you open a web site e.g. **http://localhost/testpage/** and the Default.aspx (the Default.aspx file is the default document of the application) file is opened and the URL is without Default.aspx. If you open e.g. **http://localhost/testpage/Default.apsx** URL the RadProgressArea is working correct. The issue appears because of the HttpRequest object.

* When an application is run with Visual Studio (under Cassini) it is not possible to cancel the RadProgressArea. The to able to cancel the progress the project should be deployed on IIS.

* There is a possibility that an exception will be thrown if the **RadUploadModule**'s **legacyCasModel**  property is set to true : "Assembly does not allow partially trusted caller "

* **RadProgressArea** works properly in SharePoint environment if the **RadUploadModule** is not present in the web.config

* **RadProgressArea** freezes during upload postback on iOS (7-9). This is a browser limitation already reported to Apple. As a workaround **RadProgressArea** can be placed inside a **RadAjaxPanel**, which will allow the **RadProgressArea** to be visible during the upload postback. 

