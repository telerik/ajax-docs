---
title: RadUpload Select-Browse Button is Not Visible in IE
page_title: RadUpload Select-Browse Button is Not Visible in IE - RadUpload
description: Check our Web Forms article about RadUpload Select-Browse Button is Not Visible in IE.
slug: upload/troubleshooting/radupload-select-browse-button-is-not-visible-in-ie
tags: radupload,select-browse,button,is,not,visible,in,ie
published: True
position: 11
---

# RadUpload Select-Browse Button is Not Visible in IE



>caution  **RadUpload** has been replaced by [RadAsyncUpload](https://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the [documentation of RadAsyncUpload ](https://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html) or the [control’s product page](https://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using **RadUpload** in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it [in this blog post](https://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for **RadUpload** has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that **RadAsyncUpload** can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


## 

In very rare cases the fileinputs and Select/Browse button do not show up at all in IE6, 7 and 8 as demonstrated in the image below. In fact the issue is a bug in IE6, 7 and 8 where the opacity filter is implemented as an ActiveX control and it gets buggy in case there are more strict security rules applied.

![IE buggy rendering](images/upload_iebug.png)

Unfortunately we could not reproduce the issue locally but we could manage to come up with several workarounds with the greatly appreciated help of our customers.

1. The first and the easiest one you could try is to set the EnableFileInputSkinning property of the RadUpload to false:

	![Property](images/upload_property.png)

1. The second one is simply to add the following css styles to the page that contains the RadUpload control:
	
	![css](images/upload_css.png)

>note Please note that if you encounter this issue it is possible that none of the above solutions work for your case since we are still investigating the actual cause and the needed solution.
>
![Correct rendering](images/upload_correctrendering.png)
