---
title: RadAsyncUpload Select or Browse Button Is Not Visible in IE
page_title: RadAsyncUpload Select or Browse Button Is Not Visible in IE | UI for ASP.NET AJAX Documentation
description: RadAsyncUpload Select or Browse Button Is Not Visible in IE
slug: asyncupload/troubleshooting/radasyncupload-select-or-browse-button-is-not-visible-in-ie
tags: radasyncupload,select,or,browse,button,is,not,visible,in,ie
published: True
position: 1
---

# RadAsyncUpload Select or Browse Button Is Not Visible in IE



## 

In very rare cases the fileinputs and Select/Browse button do not show up at all in IE6, 7 and 8 as demonstrated in the image below. In fact the issue is a bug in IE6, 7 and 8 where the opacity filter is implemented as an ActiveX control and it gets buggy in case there are more strict security rules applied.

![IE buggy rendering](images/asyncupload_iebug.png)

Unfortunately we could not reproduce the issue locally but we could manage to come up with several workaround with the greatly appreciated help of our customers.

1. The first and the easiest one you could try is to set the **EnableFileInputSkinning** property of the RadAsyncUpload to *false*:![Property](images/asyncupload_property.png)

1. The second one is simply to add the following css styles to the page that contains the RadAsyncUpload control:![css](images/asyncupload_css.png)

>note Please note that if you encounter this issue it is possible that none of the above solutions work for your case since we are still investigating the actual cause and the needed solution.
>


![Correct rendering](images/asyncupload_correctrendering.png)
