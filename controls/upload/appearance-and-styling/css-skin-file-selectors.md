---
title: CSS Skin File Selectors
page_title: CSS Skin File Selectors | UI for ASP.NET AJAX Documentation
description: CSS Skin File Selectors
slug: upload/appearance-and-styling/css-skin-file-selectors
tags: css,skin,file,selectors
published: True
position: 5
---

# CSS Skin File Selectors



>caution  __RadUpload__ has been replaced by[RadAsyncUpload](http://demos.telerik.com/aspnet-ajax/asyncupload/examples/overview/defaultcs.aspx), Telerik’s next-generation ASP.NET upload component. If you are considering Telerik’s Upload control for new development, check out the[ documentation of RadAsyncUpload ](http://www.telerik.com/help/aspnet-ajax/asyncupload-overview.html)or the[control’s product page](http://www.telerik.com/products/aspnet-ajax/asyncupload.aspx). If you are already using __RadUpload__ in your projects, you may be interested in reading how easy the transition to RadAsyncUpload is and how you can benefit from it[in this blog post](http://blogs.telerik.com/blogs/12-12-05/the-case-of-telerik-s-new-old-asp.net-ajax-upload-control-radasyncupload). The official support for __RadUpload__ has been discontinued in June 2013 (Q2’13), although it is still be available in the suite. We deeply believe that __RadAsyncUpload__ can better serve your upload needs and we kindly ask you to transition to it to make sure you take advantage of its support and the new features we constantly add to it.
>


## 

The following table lists the CSS selectors and descriptions for __RadUpload__ style sheets.




>caption  

| Class Name | Element | Description |
| ------ | ------ | ------ |
|RadUpload_[Skin]e.g. __RadUpload_Outlook__ |DIV|Applied to the root element of the control.|
|.ruInputs|UL|Applied to the __RadUpload__ control.|
|.ruProgress|UL|Applied to the __RadProgressArea__ control.|
|.ruActions|LI|Applied to the portion of the control that contains action buttons that affect the entire control. This includes the area for the __Add__ and __Remove__ buttons on __RadUpload__ and the area for the __Cancel__ button on __RadProgressArea__ .|
|.ruFilePortion|LI|Applied to the row of __RadProgressArea__ that contains the __Total Progress Bar__ and __Total Progress Indicators__ .|
|.ruFileCount|LI|Applied to the row of __RadProgressArea__ that contains the __Files Count Bar__ and __Files Count Indicators__ .|
|.ruCurrentFile|LI|Applied to the row of __RadProgressArea__ that contains the __Current File Name__ .|
|.ruTimeSpeed|LI|Applied to the row of __RadProgressArea__ that contains the __Time and Speed Indicators__ .|
|.ruFileWrap|SPAN|Applied to the <span> around each file input area of __RadUpload__ .|
|.ruStyled|SPAN|Applied to the <span> around each file input area of __RadUpload__ when __EnableFileInputSkinning__ is __true__ .|
|.ruFileInput|INPUT|Applied to the file input element used by __RadUpload__ . This element is not visible when __EnableFileInputSkinning__ is __true__ .|
|.ruFakeInput|INPUT|Applied the the text box that the __RadUpload__ control uses to simulate the text portion of a file input element when __EnableFileInputSkinning__ is __true__ .|
|.ruReadOnly|INPUT|Applied to the text box used by __RadUpload__ when __RadOnlyFileInputs__ is __true__ .|
|.ruButton|INPUT|Applied to all buttons in the __RadUpload__ and __RadProgressArea__ controls (not just action buttons).|
|.ruBrowse|INPUT|Applied to the select button that the __RadUpload__ control uses to simulate the browse button of a file input element when __EnableFileInputSkinning__ is __true__ .|
|.ruCheck|INPUT|Applied to the __check boxes__ that __RadUpload__ uses for selecting rows.|
|.ruRemove|INPUT|Applied to the __Remove__ button that __RadUpload__ uses for deleting rows.|
|.ruAdd|INPUT|Applied to the __Add__ button in __RadUpload__ .|
|.ruDelete|INPUT|Applied to the __Delete__ button in __RadUpload__ .|
|.ruCancel|INPUT|Applied to the __Cancel__ button in __RadProgressArea__ .|
|.ruBar|DIV|Applied to the outer <div> element that __RadProgressArea__ uses for progress bars.|

# See Also

 * [Understanding the Skin CSS File]({%slug upload/appearance-and-styling/understanding-the-skin-css-file%})

 * [File Input Appearance]({%slug upload/appearance-and-styling/file-input-appearance%})
