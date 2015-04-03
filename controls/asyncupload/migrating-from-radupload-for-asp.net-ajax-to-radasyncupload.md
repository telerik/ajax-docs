---
title: Migrating from RadUpload for ASP.NET AJAX to RadAsyncUpload
page_title: Migrating from RadUpload for ASP.NET AJAX to RadAsyncUpload | UI for ASP.NET AJAX Documentation
description: Migrating from RadUpload for ASP.NET AJAX to RadAsyncUpload
slug: asyncupload/migrating-from-radupload-for-asp.net-ajax-to-radasyncupload
tags: migrating,from,radupload,for,asp.net,ajax,to,radasyncupload
published: True
position: 3
---

# Migrating from RadUpload for ASP.NET AJAX to RadAsyncUpload



Since we deprecated the __RadUpload__ control in June 2013 (Q2 2013), we highly recommendusing the __RadAsyncUpload__ control instead. This article describes the steps that you needto take in order to migrate from RadUpload control to RadAsyncUpload.

## Migrating from RadUpload for ASP.NET AJAX to RadAsyncUpload

To migrate a web application from __RadUpload for ASP.NET AJAX__ to the new __RadAsyncUpload__, you need to follow these steps:

1. Make sure that you have registered the handler's URL in the web.config. This is done by using the Smart Tag of the __RadAsyncUpload__.

1. Replace the old declaration:#_ASPX_

	<telerik:RadUpload …></telerik:RadUpload> 

with the new one:#_ASPX_

	<telerik:RadAsyncUpload …></telerik:RadAsyncUpload> 



1. You can leave all old properties intact.

1. [*Optional*] Set the __TemporaryFolder__ property. In most cases it can be any folder. There are two exceptions:

* In medium trust this must be a folder that is inside your application folder

* In a web farm environment, the __TemporaryFolder__ as well as the __TargetFolder__ properties must be set to folders located on a shared drive.

## See Also

[Getting Started]({%slug asyncupload/getting-started%})

[Skins]({%slug asyncupload/appearance-and-styling/skins%})
