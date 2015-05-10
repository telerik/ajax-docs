---
title: CSS Skin File Selectors
page_title: CSS Skin File Selectors | RadUpload for ASP.NET AJAX Documentation
description: CSS Skin File Selectors
slug: upload/appearance-and-styling/css-skin-file-selectors
tags: css,skin,file,selectors
published: True
position: 5
---

# CSS Skin File Selectors



>caution  **RadUpload** has been replaced by [RadAsyncUpload](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the [documentation of RadAsyncUpload ](http://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html) or the [control’s product page](http://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using **RadUpload** in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it [in this blog post](http://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for **RadUpload** has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that **RadAsyncUpload** can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


## 

The following table lists the CSS selectors and descriptions for **RadUpload** style sheets.




>caption  

| Class Name | Element | Description |
| ------ | ------ | ------ |
|RadUpload_[Skin]e.g. **RadUpload_Outlook** |DIV|Applied to the root element of the control.|
|.ruInputs|UL|Applied to the **RadUpload** control.|
|.ruProgress|UL|Applied to the **RadProgressArea** control.|
|.ruActions|LI|Applied to the portion of the control that contains action buttons that affect the entire control. This includes the area for the **Add** and **Remove** buttons on **RadUpload** and the area for the **Cancel** button on **RadProgressArea** .|
|.ruFilePortion|LI|Applied to the row of **RadProgressArea** that contains the **Total Progress Bar** and **Total Progress Indicators** .|
|.ruFileCount|LI|Applied to the row of **RadProgressArea** that contains the **Files Count Bar** and **Files Count Indicators** .|
|.ruCurrentFile|LI|Applied to the row of **RadProgressArea** that contains the **Current File Name** .|
|.ruTimeSpeed|LI|Applied to the row of **RadProgressArea** that contains the **Time and Speed Indicators** .|
|.ruFileWrap|SPAN|Applied to the `<span>` around each file input area of **RadUpload** .|
|.ruStyled|SPAN|Applied to the `<span>` around each file input area of **RadUpload** when **EnableFileInputSkinning** is **true** .|
|.ruFileInput|INPUT|Applied to the file input element used by **RadUpload** . This element is not visible when **EnableFileInputSkinning** is **true** .|
|.ruFakeInput|INPUT|Applied the the text box that the **RadUpload** control uses to simulate the text portion of a file input element when **EnableFileInputSkinning** is **true** .|
|.ruReadOnly|INPUT|Applied to the text box used by **RadUpload** when **RadOnlyFileInputs** is **true** .|
|.ruButton|INPUT|Applied to all buttons in the **RadUpload** and **RadProgressArea** controls (not just action buttons).|
|.ruBrowse|INPUT|Applied to the select button that the **RadUpload** control uses to simulate the browse button of a file input element when **EnableFileInputSkinning** is **true** .|
|.ruCheck|INPUT|Applied to the **check boxes** that **RadUpload** uses for selecting rows.|
|.ruRemove|INPUT|Applied to the **Remove** button that **RadUpload** uses for deleting rows.|
|.ruAdd|INPUT|Applied to the **Add** button in **RadUpload** .|
|.ruDelete|INPUT|Applied to the **Delete** button in **RadUpload** .|
|.ruCancel|INPUT|Applied to the **Cancel** button in **RadProgressArea** .|
|.ruBar|DIV|Applied to the outer `<div>` element that **RadProgressArea** uses for progress bars.|

# See Also

 * [Understanding the Skin CSS File]({%slug upload/appearance-and-styling/understanding-the-skin-css-file%})

 * [File Input Appearance]({%slug upload/appearance-and-styling/file-input-appearance%})
