---
title: [Character Limit: 255, recommended maximum 75 characters. Combine the main goal with the key environment statement when applicable.]
description: [Character Limit: 255, recommended maximum 155 characters. Briefly describe the how-to article without phrases such as "This article contains".]
type: how-to
page_title: [Text for the HTML head:title attribute. Use wording that covers relevant search terms and may differ from title.]
slug: [Unique identifier used for cross-referencing, for example how-to-write-an-essay-nativescript.]
position: [Leave blank for now. If omitted, articles are ordered alphabetically by file name.]
tags: [Relevant keywords, separated by commas.]
ticketid: [Support ticket ID or comma-separated IDs when applicable; leave blank for non-ticket content.]
res_type: kb
---

## Environment <!-- Mandatory -->

Determine all applicable environment fields.

## Description <!-- Mandatory -->

State the question using complete thoughts. Use relevant user wording and technical terms for searchability. Restate the problem technically when possible.

## Solution <!-- Mandatory -->

Provide the verified resolution. Use bullets or numbered steps when applicable. If there is no verified resolution, state:

> No verified solution available. Check the [suggested workarounds](#suggested-workarounds) instead.

## Suggested Workarounds <!-- Optional -->

Describe workarounds when no verified solution is available. Use an `h3` heading for each workaround when there are multiple workarounds.

### Workaround #1

Content here...

## Runnable Example <!-- Optional -->

When applicable, provide a [.NET Core REPL example](https://netcorerepl.telerik.com/) or [Dojo sample](https://dojo.telerik.com/).

For ASP.NET Core, include both examples:

- [Telerik REPL for ASP.NET Core HtmlHelper example]({link})
- [Telerik REPL for ASP.NET Core TagHelper example]({link})

For MVC, use:

> To see a full implementation of the aforementioned approach, refer to the following [REPL example on {description of the scenario}]({link}).

## Notes <!-- Optional -->

Add applicable information that does not fit above, including references to other written documents.

## More {{ site.framework }} Component_Name Resources <!-- Mandatory for Telerik UI for ASP.NET Core and MVC -->

- [{{ site.framework }} Component_Name Documentation](Component_Name_Overview_Article_Link)
- [{{ site.framework }} Component_Name Demos](https://demos.telerik.com/{{ site.platform }}/component_name/index)

{% if site.core %}
- [{{ site.framework }} Component_Name Product Page](https://www.telerik.com/aspnet-core-ui/grid)
- [Telerik UI for {{ site.framework }} Video Onboarding Course (Free for trial users and license holders)]({%slug virtualclass_uiforcore%})
- [Telerik UI for {{ site.framework }} Forums](https://www.telerik.com/forums/aspnet-core-ui)
{% else %}
- [{{ site.framework }} Component_Name Product Page](https://www.telerik.com/aspnet-mvc/component_name)
- [Telerik UI for {{ site.framework }} Video Onboarding Course (Free for trial users and license holders)]({%slug virtualclass_uiformvc%})
- [Telerik UI for {{ site.framework }} Forums](https://www.telerik.com/forums/aspnet-mvc)
{% endif %}

## See Also

- [Client-Side API Reference of the Grid for {{ site.framework }}](https://docs.telerik.com/kendo-ui/api/javascript/ui/component_name) <!-- only for Telerik UI -->
- [Server-Side API Reference of the Grid for {{ site.framework }}](https://docs.telerik.com/{{ site.platform }}/api/component_name)
{% if site.core %}
- [TagHelper API reference of the Scheduler](https://docs.telerik.com/aspnet-core/api/taghelpers/scheduler)
{% endif %}
- [Telerik REPL Example for {describe the scenario}]({link})
- [Telerik UI for {{ site.framework }} Breaking Changes]({%slug breakingchanges_2023%})
- [Telerik UI for {{ site.framework }} Knowledge Base](https://docs.telerik.com/{{ site.platform }}/knowledge-base)
