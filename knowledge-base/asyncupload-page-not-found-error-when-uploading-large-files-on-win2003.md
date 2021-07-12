---
title: "Page Not Found" error when uploading large files on Win2003
description: "Page Not Found" error when uploading large files on Win2003. Check it now!
type: how-to
page_title: "Page Not Found" error when uploading large files on Win2003
slug: asyncupload-page-not-found-error-when-uploading-large-files-on-win2003
res_type: kb
---

## Description

Sometimes the upload of large files on a Windows 2003 server does not succeed even though the `maxRequestLength` configuration property is set to a very large value. The browser displays **"Page Not Found"** error.  
  
## Solution

The reason for the problem could be a setting in the IIS 6.0 MetaBase.XML file (located at the `%systemroot%\system32\inetsrv` directory). The property to look for is `AspMaxRequestEntityAllowed`, which specifies the maximum number of bytes allowed in the entity body of an ASP request. If a `Content-Length` header is present and specifies an amount of data greater than the value of `AspMaxRequestEntityAllowed`, IIS returns a 403 error response. This property is related in function to `MaxRequestEntityAllowed`, but is specific to ASP request. Whereas you might set the `MaxRequestEntityAllowed` property to **1 MB** at the general World Wide Web Publishing Service (WWW Service) level, you may choose to set `AspMaxRequestEntityAllowed` to a lower value, if you know that your specific ASP applications handle a smaller amount of data. In your case you should **increase this value** - for example **to 200000000** (~200MB).  
  
Open your *MetaBase.XML* which is located in *c:\Windows\System32\Inetsrv* find the line `AspMaxRequestEntityAllowed` and change it to a larger value. This change does not require stopping IIS, but to make the *Metabase.xml* file write-able, you need to go to the IIS control panel, right click the server, select properties, and check off the box that says *"allow changes to MetaBase configuration while IIS is running"*.  
  
If your application is located on a shared hosting where you have no access to the MetaBase.XML file, you should contact your hosting company for assistance.  
  
## See Also

- [AspMaxRequestEntityAllowed property in IIS 6.0 Metabase](https://docs.microsoft.com/en-us/previous-versions/iis/6.0-sdk/ms525409(v=vs.90))

 



