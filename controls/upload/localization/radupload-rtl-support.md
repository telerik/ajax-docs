---
title: RadUpload RTL Support
page_title: RadUpload RTL Support - RadUpload
description: Check our Web Forms article about RadUpload RTL Support.
slug: upload/localization/radupload-rtl-support
tags: radupload,rtl,support
published: True
position: 2
---

# RadUpload RTL Support



>caution  
>


## 

**RadUpload** and **RadProgressArea** include support for right-to-left locales using the direction attribute. If you set **dir="rtl"** on the **RadUpload** and/or **RadProgressArea** objects or to any parent HTML element, the controls reverse elements order and align themselves to the right side of its container:

````ASPNET
	     
	
<telerik:RadUpload ID="RadUpload1"
    runat="server"
    dir="rtl"
    Skin="Vista"
    ControlObjectsVisibility="all">
</telerik:RadUpload><br />
<telerik:RadProgressArea RenderMode="Lightweight" ID="RadProgressArea1"
    runat="server"
    Skin="Vista"
    dir="rtl"
    DisplayCancelButton="true">
</telerik:RadProgressArea>
	
				
````



This produces the following result:

![Right to Left](images/upload_rtl.png)

# See Also

* [Localizing RadUpload]({%slug upload/localization/localizing-radupload%})

* [Localizing RadProgressArea]({%slug progressarea/localization/localizing-radprogressarea%})
