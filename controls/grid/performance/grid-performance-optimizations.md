---
title: Grid Performance Optimizations
page_title: Grid Performance Optimizations
description: Improve RadGrid client and server performance by limiting rendered data, choosing suitable binding modes, and reducing unnecessary state and requests.
slug: grid/performance/grid-performance-optimizations
components: ["grid"]
tags: grid,performance,optimization,large data sets,viewstate,paging
published: True
position: 0
---

# Grid Performance Optimizations

Large data sets and complex grid features can increase rendering time, request size, and server-side data-operation costs. Use the following recommendations as a starting point, then benchmark representative data and user workflows in your application.

## Optimize client-side performance

1. Disable row-related features, such as row selection or row click handling, when the application does not need them. Each enabled client-side feature adds client resources and processing.

2. Keep CSS and image assets efficient. Avoid unnecessarily large images and repeated background images, such as `background-repeat: repeat-x`, when a smaller asset or CSS styling provides the same result.

3. Consider [RadInputManager]({%slug radinputmanager/performance%}) for edit forms with many input controls. It can replace some RadInput editors with standard text boxes and apply the configured client-side input behavior. Compare the result with the default editors for your specific form.

4. Use built-in paging, custom paging, virtual scrolling, or virtual paging so the browser renders only the records needed for the current view. See [Paging overview]({%slug grid/functionality/paging/overview%}), [Custom Paging]({%slug grid/functionality/paging/custom-paging%}), and [Virtual Scrolling]({%slug grid/functionality/scrolling/virtual-scrolling%}). For hierarchical grids, choose an appropriate **PageSize** for each **GridTableView**.

5. Disable **EnableViewState** only when the features and binding approach in your grid support it. This can reduce the state sent between the client and server, but it changes which grid features are persisted. Review [Optimizing ViewState usage]({%slug grid/performance/optimizing-viewstate-usage%}) before applying this setting.

6. If the page does not require the full date-editor behavior, evaluate a standard **TextBox** with client-side date handling instead of a **RadDatePicker**. Test the result with the validation and localization requirements of the application. See the [RadDatePicker overview]({%slug datepicker/overview%}) for the control’s supported behavior.

7. Use [RadAjaxManager]({%slug ajaxmanager/overview%}) to update only the grid and other affected controls instead of refreshing the entire page.

8. Benchmark with ASP.NET debugging disabled. Set `debug="false"` on the `compilation` element in `web.config` for a production-like test configuration.

> caption Disable ASP.NET compilation debugging for performance testing

````XML
<compilation debug="false" />
````

9. Prefer IIS 7 or later dynamic content compression for new deployments. The Telerik [RadCompression]({%slug controls/radcompression%}) module is deprecated; review its article only when maintaining a legacy application that still uses it.

## Optimize server-side performance

1. For hierarchical grids, use **HierarchyLoadMode.ServerOnDemand** and populate child tables in the **DetailTableDataBind** event so detail data is loaded as needed. Combine this approach with [single expansion]({%slug grid/how-to/hierarchy/single-expand-in-hierarchical-grid%}) when users do not need multiple expanded items at the same level.

2. If a grid is inside a **RadMultiPage** connected to a **RadTabStrip**, set **RenderSelectedPageOnly** to `True` on **RadMultiPage**, set **AutoPostBack** to `True` on the tab strip, and ajaxify the tab strip and multipage with **RadAjaxManager**. This limits rendering to the selected page view.

3. Use **LinqDataSource** when its server-side operations match the application requirements. RadGrid can use LINQ expressions for operations such as sorting, filtering, and paging. Benchmark the result with the data volume and queries used by the application.

4. Client-side binding with caching can reduce repeated server requests, but it stores the cached data in the browser. Use it only when the data volume, freshness, and data-exposure requirements are appropriate. See [Client-side binding]({%slug grid/data-binding/client-side-binding/client-side-binding%}#client-side-caching).

5. Use [Custom Paging]({%slug grid/functionality/paging/custom-paging%}) when the full data source is too large to load into RadGrid. Return only the records for the current page and provide the total item count required by the custom-paging implementation.

6. Use client-side binding when the data source and security requirements allow the data to be sent to the browser. See [Client-side binding]({%slug grid/data-binding/client-side-binding/client-side-binding%}) for the supported programmatic and declarative approaches.

7. If grouping is enabled and all group data can be sent to the browser, set **GroupLoadMode** to `Client` on the relevant **GridTableView** and enable **ClientSettings.AllowGroupExpandCollapse**. Client-side grouping avoids a request when users expand or collapse a group, but it requires all grouped data to be available on the client. See [Group load modes]({%slug grid/functionality/grouping/group-load-modes%}).

## See Also

- [UI for ASP.NET AJAX Performance Optimization]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/performance/optimizing-performance%})
