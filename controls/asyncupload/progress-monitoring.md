---
title: Progress Monitoring
page_title: Progress Monitoring | RadAsyncUpload for ASP.NET AJAX Documentation
description: Progress Monitoring
slug: asyncupload/progress-monitoring
tags: progress,monitoring
published: True
position: 12
---

# Progress Monitoring



## RadAsyncUpload Progress Monitoring

**RadAsyncUpload** allows for two distinct ways of progress monitoring. The first one, **inline progress**, is integrated in RadAsyncUpload and displays like a progress bar below the file being uploaded. You turn on/off inline progress monitoring using the **EnableInlineProgress** property (true by default).

![Progress Monitoring](images/asyncupload_progressmonitoring.png)

If Flash/Silvelight module is installed on the client machines, RadAsyncUpload will display inline progress automatically; there is no need to do anything. If there is neither Flash nor Silverlight available, a little tweak in the web.config is needed.More specifically, one needs to register the RadUploadHttpModule/Handler into the web.config. Instructions on how to do that can be found [here]({%slug progressarea/webconfing-configuraton%}).

The second approach in using monitoring progress is using RadProgressArea. In general RadProgressArea is a dedicated control for monitoring progress, both upload and a custom one. It is possible to use both inline progress monitoring and RadProgressArea monitoring. You can learn more regarding RadProgressArea [here]({%slug progressarea/getting-started%}).

>caution Please, have in mind that in order to cover all scenarios and display progress(inline or using RadProgressArea) on all client machines the RadUploadHttpModule/Handler should be registered in the web.config. Otherwise, every once in a while there will be a client computer without Flash/Silverlight installed and it is likely that no progress would be displayed for that user. The IFrame module takes care of that scenario, but it needs the module and the handler registered in the web.config
>


# See Also

 * [RadAsyncUpload Progress Monitoring Demo](https://demos.telerik.com/aspnet-ajax/upload/examples/async/monitorprogress/defaultcs.aspx?product=asyncupload)
