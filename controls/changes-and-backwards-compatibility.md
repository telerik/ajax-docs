---
title: Changes and Backwards Compatibility
page_title: Changes and Backwards Compatibility | UI for ASP.NET AJAX Documentation
description: Changes and Backwards Compatibility
slug: controls/changes-and-backwards-compatibility
previous_url: what's-new-and-backwards-compatibility
tags: changes,and,backwards,compatibility
published: True
position: 18
---

# Changes and Backwards Compatibility

For information about new functionality, improvements and fixes, [visit the What's New page](https://www.telerik.com/support/whats-new/aspnet-ajax).

Since Q2 2010 all major changes in Telerik® UI for ASP.NET AJAX are listed in the [Release Notes page](https://www.telerik.com/support/whats-new/aspnet-ajax/release-history).

When looking to upgrade, follow the [Upgrade to a Newer Version of Telerik® UI for ASP.NET AJAX]({%slug introduction/installation/upgrading-instructions/upgrading-a-trial-to-a-developer-license-or-to-a-newer-version%}#upgrade-to-a-newer-version-of-telerik-ui-for-aspnet-ajax) article.

Below you can find the release notes for versions prior to Q2 2010.

## Telerik® UI for ASP.NET AJAX Q1 2010

* **RadAjaxLoadingPanel** control has new images for its build-in Skins. These new images are suitable for any background. The obsolete loading images which are not part of the RadAjaxLoadingPanel Skins are removed from the Telerik.Web.UI assembly.

* **RadTimeView** control can be used on a page standalone, without RadTimePicker/RadDateTimePicker added on the page. When you are using it with disabled embedded scripts, you need to reference the below script files as described in the [Disabling Embedded Resources]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/performance/disabling-embedded-resources%}) article.

* **RadGrid** has a base stylesheet file for its skins. Note that when you are using a custom skin with the latest release, you need to set the **EnableEmbeddedBaseStylesheet** property to **false**.

* **RadInputManager** textboxes will by default have no CSS class if the Skin is set to an empty string (no skin). This ensures interoperability with RadFormDecorator, which only decorates textboxes with no CSS class. When using RadInputManager with custom CSS classes and no Skin, it is recommended to set all state CSS classes for the InputSettings, instead of just one or two - EnabledCssClass, HoveredCssClass, FocusedCssClass, InvalidCssClass, EmptyMessageCssClass, ReadOnlyCssClass, DisabledCssClass (or at least all CSS classes for states that will be used).In order to decorate RadInputManager textboxes with RadFormDecorator, set Skin="" and EnableEmbeddedBaseStylesheet="false" to the RadInputManager control.

* **RadFormDecorator:** Buttons' height is increased to 22px. in order to fit and look better when placed next to RadInput or RadComboBox items. The previous button height was 21px. If you are using a custom skin, based on previous version, you should change your main skin's CSS as shown in [this sticky forum thread](http://www.telerik.com/community/forums/aspnet-ajax/form-decorator/q1-2010-button-s-height-change.aspx).

## Telerik® UI for ASP.NET AJAX Q3 2009 SP1

* From Q3 2009 SP1, **RadToolTip** uses a base stylesheet file for its skins. If you want to use a custom (pre-Q3 2009 SP1) skin with the latest release, you need to set the **EnableEmbeddedBaseStylesheet** property to **false**.

## Telerik® UI for ASP.NET AJAX Q3 2009 (Version Number 2009.3.1103)

All controls from the Telerik® UI for ASP.NET AJAX suite are fully backwards compatible with their previous version with the following exceptions:

* **RadDock for ASP.NET AJAX** - Custom RadDock skins are not compatible with the improved rendering of the control that was introduced with Q3 2009. An article that explains how to rework old custom skins is available on the following page:[http://www.telerik.com/community/forums/aspnet-ajax/docking/using-old-custom-skins-with-raddock-q3-2009.aspx](http://www.telerik.com/community/forums/aspnet-ajax/docking/using-old-custom-skins-with-raddock-q3-2009.aspx)

* **RadXmlHttpPanel for ASP.NET AJAX** - public delegate void XmlHttpPanelEventHandler(object sender, RadXmlHttpPanelEventArgs e); is taken out from RadXmlHttpPanel class

* **RadScheduler for ASP.NET AJAX -** Cumulative list of removed or obsolete properties over the last few releases and their counterparts for Q3 2009 if applicable.

* SchedulerFormCreatingEventArgs.Time -> e.Appointment.Start or e.Appointment.End

* SchedulerNavigationCommandEventArgs.SelectedDay -> e.SelectedDate.Day

* SchedulerStrings.Insert -> Localization-Save

* SchedulerStrings.Update -> Localization-Save

* SchedulerStrings.AdvancedMoreDetails -> Localization-ShowAdvancedForm

* SchedulerStrings.AdvancedRecurringAppointment -> Localization-AdvancedRecurrence

* SchedulerStrings.AdvancedRange -> N/A

* SchedulerProviderBase.SupportsMultipleResourceValues ->Use ResourceType.AllowMultipleValues to indicate if a resource type supports multiple values

* RadScheduler.MonthVisibleAppointmentsPerDay -> MonthView-VisibleAppointmentsPerDay

* RadScheduler.ShowWeeklyColumnHeader -> WeekView-ShowDateHeaders

* RadScheduler.ShowMonthlyColumnHeader -> MonthView-ShowDateHeaders

* RadScheduler.DayHeaderDateFormat -> DayView-HeaderDateFormat

* RadScheduler.WeekHeaderDateFormat -> WeekView-HeaderDateFormat

* RadScheduler.MonthHeaderDateFormat -> MonthView-HeaderDateFormat

* RadScheduler.WeekColumnHeaderDateFormat -> WeekView-ColumnHeaderDateFormat

* RadScheduler.MonthColumnHeaderDateFormat -> MonthView-ColumnHeaderDateFormat

* RadScheduler.StartInFullTime -> ShowFullTime

* RecurrenceRange.MaxOccurences (misspelling) -> MaxOccurrences

* RecurrenceState.Occurence (misspelling) -> Occurrence

* SchedulerViewType.ResourceView -> N/A

* **RadMultiPage for ASP.NET AJAX** - some changes have been introduced in the rendering of the **RadMultiPage** in order to improve its **SEO** performance.The control now relies on a base stylesheet instead of inline styles.If you have set **Telerik.EnableEmbeddedBaseStylesheet** to "false" in the **web.config/appSettings** RadMultiPage will not render correctly.You have to set **EnableEmbeddedBaseStylesheet to "true"** on the control itself to fix this issue

* **RadComboBox for ASP.NET AJAX** control in Q3 2009 has a brand new base stylesheet instead of skin file only. This could be a possible breaking change if you use custom skins. You have to set **EnableEmbeddedBaseStylesheet** to "**false**" in order to fix the issues introduced by this change.

## Telerik® UI for ASP.NET AJAX Q2 2009

All controls from the Telerik® UI for ASP.NET AJAX suite are fully backwards compatible with their previous version with the following exceptions:

## RadScheduler

**Breaking change**:

Customized advanced templates will not be styled correctly due to rendering changes. Please, see this KB article - [http://www.telerik.com/support/kb/aspnet-ajax/scheduler.aspx](http://www.telerik.com/support/kb/aspnet-ajax/scheduler.aspx)

**Potentially breaking changes**:

* The Subject text box in the integrated advanced form is now of type RadTextBox (was TextBox)

* The custom attribute editing text boxes in the integrated advanced form are now of type RadTextBox (were TextBox)

## RadPanelBar

* Skinning: background-position declarations were moved from base stylesheet to skins. Migration tool is available [here](http://www.telerik.com/community/forums/aspnet-ajax/general-discussions/q2-breaks-my-custom-skins-help.aspx).





## Telerik® UI for ASP.NET AJAX Q1 2009





## Common for all controls

* Face lift for all skins and consistency in CSS naming conventions which result in breaking changes for certain scenarios. Please, test before upgrading to the new version. For more details refer to [this blog post](http://blogs.telerik.com/aspnet-ajax/posts/09-02-23/radcontrols-for-asp-net-ajax-receive-a-major-face-lift.aspx)

* Default2006, Gray, Inox and SkyBlue skins are discontinued -- we are recommending the new Default skin for anyone that might have used the obsolete skins. If you decide that you still want the obsolete skins in your application please contact us in a support ticket.

>note To apply the old embedded skins of Telerik® UI for ASP.NET AJAX as external with versions of the control after Q1 2009 (2009.1.311), download them from [this location](http://www.telerik.com/support/skins.aspx)and follow the steps concerning how to register an external skin from [here]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/controlling-visual-appearance/skin-registration%}) and [this]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/performance/disabling-embedded-resources%})topic.
>


* New Telerik.Web.Design.dll to separate the design-time code from the web control implementation code. If you do not have VS 2008 SP1 installed you might have design-time problems. For possible solutions please refer to this [blogpost](http://blogs.telerik.com/aspnet-ajax/posts/09-03-06/meet-telerik-web-design-dll.aspx) as well as the bottom paragraph of [this help topic]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/troubleshooting/general-troubleshooting%}).

## Telerik RadAjax for ASP.NET AJAX Q1 2009#
````ASPNET
<telerik:RadAjaxLoadingPanel id="LoadingPanel1" Runat="server" Skin=""> <asp:Image id="Image1" runat="server" ImageUrl="~/loading1.gif" > </asp:Image></telerik:RadAjaxLoadingPanel> 
````




## RadCalendar for ASP.NET AJAX Q1 2009

* Embedded skins improvements - all calendar skins received major improvements/enhancements. See [this forum thread](http://www.telerik.com/community/forums/aspnet-ajax/calendar/radcalendar-q3-2008-skins-available-for-download.aspx) explaining how to apply the old skins as external if necessary.

## RadComboBox for ASP.NET AJAX Q1 2009

* Animations are using the jQuery library now. If you have disabled the embedded scripts you need to manually register the jQuery.js and jQueryPlugins.js files as described here: [Disabling Embedded Resources]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/performance/disabling-embedded-resources%})

## Telerik RadGrid for ASP.NET AJAX Q1 2009

In this version of the control, a number of changes have been made with respect to the pager rendering, styling, as well as the status item. Below is a short list, introducing the changes:

* The main wrapper for the pager has a CSS class name of **rdPager**. In terms of html this renders as: `<tr class="rgPager">`

* **GridStatusBarItem** is now obsolete. Presently, the pager hosts a table, with one or two cells, depending on whether there will be some status indication or not. The **GridStatusBarItem** is actually replaced by the first of these two cells.The second cell hosts most of the elements of the pager. Its CSS class name is created by concatenating "**rgPagerCell**", and the present paging mode, for example "**NextPrev**". Within this cell are rendered the blocks, pertaining to the individual elements of the pager - number links, arrows, labels and drop downs to change the page size, along with the information element showing "page x to y from z". The CSS classes, related to these elements are as shown below:**rgArrPart1** - left arrows, associated to "First Page" and "Previous Page"**rgArrPart2** - right arrows, associated to "Last Page" and "Next Page"**rgNumPart** - numeric part, associated with the numeric representations of the page indexes (e.g. 1, 2, 3) **rgAdvpart** - advanced part, associated with the controls to change the page size**rgInfoPart** - right info text, associated with the information element, reflecting the rows and items countThe slider block has no special CSS class, associated with it.

* Within the numeric part of the pager, each number is an **`<a>`** element with a `<span>` inside, and no CSS class.

* The current page (the page that the user has presently chosen as a *CurrentPageIndex*) has a CSS class of **rgCurrentPage**.

* The Labels nested within the advanced pager part have a CSS class of "**rgPagerLabel**".

* Each TextBox within the pager has a CSS class of "**rgPagerTextBox**".

* Each Button within the advanced pager has a CSS class of "**rgPagerButton**".

* The Label, associated with the slider has a CSS class of "**rgSliderLabel**".

* Embedded skins improvements - all grid skins received major improvements/enhancements. See [this topic]({%slug grid/appearance-and-styling/modifying-existing-skins%}) from the documentation for more info about the changes and [this forum thread](http://www.telerik.com/community/forums/aspnet-ajax/grid/radgrid-q3-2008-skins-available-for-download.aspx) explaining how to apply the old skins as external if necessary. Below is the most important part of it: CSS Classes Description

 Each CSS class should have a suffix with the name of the skin, e.g. "**_Vista**" before the Q1 2009 release of the product. The table below shows the classes used by the embedded Telerik RadGrid Default skin (the non-embedded skins CSS classes signature conforms to the same concepts): 



**Prior to the Q1 2009 release of RadGrid for ASP.NET AJAX**


| | |
|------|------|
| **div.RadGrid_Default** |The default Telerik RadGrid wrapper **`<div>`** . All Telerik RadGrid elements are placed inside it. Rendering Telerik RadGrid in one tag helps further integrations with other controls (Telerik RadAjax and ASP.NET AJAX for example).|
| **.RadGrid_Default,.RadGrid_Default a** |A reference to any table cell (`<td>`) and link (`<a>`) inside the main class. Using these two classes you can skin the grid cells and links in Telerik RadGrid cells.|
| **.MasterTable_Default** |A class for customizing the master table view|
| **.MasterTable_Default td,.MasterTable_Default th** |References to any table `<td>` and table header `<th>` belonging to that master table|
| **.GridDataDiv_Default** |For skinning the grid in scrolling mode.|
| **th.GridHeader_Default,th.ResizeHeader_Default** |Header class `<th>` for customizing the Telerik RadGrid header.|
| **.GridHeaderOver_Default.GridHeader_Default a.GridHeaderDiv_Default** |For skinning the hovered header item.`<a>` element belonging to the header classFor skinning the header row when scrolling the grid.|
| **.GridRow_Default,.GridRow_Default td**  **.GridRowOver_Default** |For skinning the normal grid row.For skinning the hovered grid row.|
| **.GridAltRow_Default,.GridAltRow_Default td** |For skinning the alternate grid row (zebra style tables).|
| **.SelectedRow_Default,**  **.SelectedRow_Default**  **td** |Skinning the currently selected row.|
| **.ActiveRow_Default,.ActiveRow_Default td** |Active row class - the focused row skinning|
| **.GridEditRow_Default,.GridEditRow_Default td** |For skinning the row that is currently in edit mode.|
| **.GridEditForm_Default** |For skinning the edit form of the row that is currently in edit mode.|
| **.GridCommandRow_Default** |For skinning the CommandItem.|
| **.GridGroupFooter_Default,.GridGroupFooter_Default td** |For skinning the group footers (meaning with grouping feature enabled).Defaults to the *GroupFooter_[Skin]/GroupFooter_[Skin] td* classes.|
| **.GridFilterRow_Default** |For skinning the FilteringItem.|
| **.GridPager_Default,**  **.GridPager_Default**  **td** |Skinning the grid pager|
| **.GridFooter_Default,.GridFooter_Default td.GridFooterDiv_Default** |A reference to the grid footer.For skinning the grid footer when scrolling the grid.|
| **.GridFooter_Default a** |Reference to any link `<a>` belonging to the footer.|
| **.GridPager_Default a** |Reference to any link `<a>` belonging to the pager.|
| **.GridPager_Default a:hover,.GridFooter_Default a:hover** |Reference to any hovered link `<a>` in the pager or footer.|
| **tr.GroupHeader_Default td** |For skinning the group panel row (grouping must be enabled).|
| **.GroupPanel_Default** |For skinning the group panel (grouping must be enabled).|
| **.GroupPanelItems_Default** |Reference to items belonging to the group panel (grouping must be enabled).|
| **td.GridHeader_Default input** |Reference to the `<input>` element belonging to the grid header (grouping must be enabled)|
| **.GridCaption_Default** |Reference to the table caption in each level of the grid hierarchy|
| **.GridToolTip_Default** |For customizing the scroller when the virtual scrolling feature is enabled (`<Scrolling AllowScroll="True" EnableVirtualScrollPaging="True" UseStaticHeaders="True" />`). Applicable for the column resizer tooltip as well|
| **.GridRowSelector_Default** |For styling the colored rectangle when selecting multiple rows by dragging.|
| **.GridItemDropIndicator_Default** |Defines the drop indicator appearance when utilizing drag and drop of grid records.|



**After the Q1 2009 release of RadGrid for ASP.NET AJAX(note that the [SkinName] part is missing from the css classes names except for external grid elements)**

| | |
|------|------|
| **div.RadGrid_[SkinName]** |The default Telerik RadGrid wrapper **`<div>`** . All Telerik RadGrid elements are placed inside it. Rendering Telerik RadGrid in one tag helps further integrations with other controls (Telerik RadAjax and ASP.NET AJAX for example).|
| **.RadGrid_[SkinName],**  **.RadGridRTL_[SkinName],.RadGrid_[SkinName] a** |A reference to any table cell (`<td>`) and link (`<a>`) inside the main class. Using these two classes you can skin the grid cells and links in Telerik RadGrid cells.|
| **.rgMasterTable** |A class for customizing the master table view|
| **.rgMasterTable td,.rgMasterTable th** |References to any table `<td>` and table header `<th>` belonging to that master table|
| **.rgDataDiv** |For skinning the grid in scrolling mode.|
| **th.rgHeader,th.rgResizeCol** |Header class `<th>` for customizing the Telerik RadGrid header.|
| **.rgHeaderOver.rgHeaderDiv a.rgHeaderDiv** |For skinning the hovered header item.`<a>` element belonging to the header classFor skinning the header row when scrolling the grid.|
| **.rgRow,.rgRow td**  **.rgHoveredRow** |For skinning the normal grid row.For skinning the hovered grid row.|
| **.rgAltRow,.rgAltRow td** |For skinning the alternate grid row (zebra style tables).|
| **.rgSelectedRow,**  **.rgSelectedRow**  **td** |Skinning the currently selected row.|
| **.rgActiveRow,.rgActiveRow td** |Active row class - the focused row skinning|
| **.rgEditRow,.rgEditRow td** |For skinning the row that is currently in edit mode.|
| **.rgEditForm** |For skinning the edit form of the row that is currently in edit mode.|
| **.rgCommandRow** |For skinning the CommandItem.|
| **.rgFooter,.rgFooter td** |For skinning the group footers (meaning with grouping feature enabled).Defaults to the *GroupFooter_[Skin]/GroupFooter_[Skin] td* classes.|
| **.rgFilterRow** |For skinning the FilteringItem.|
| **.rgPager,**  **.rgPager**  **td** |Skinning the grid pager|
| **.rgFooter,.rgFooter td.rgFooterDiv** |A reference to the grid footer.For skinning the grid footer when scrolling the grid.|
| **.rgFooter a** |Reference to any link `<a>` belonging to the footer.|
| **.rgPager a** |Reference to any link `<a>` belonging to the pager.|
| **.rgPager a:hover,.rgFooter a:hover** |Reference to any hovered link `<a>` in the pager or footer.|
| **tr.rgGroupHeader td** |For skinning the group panel row (grouping must be enabled).|
| **.rgGroupPanel** |For skinning the group panel (grouping must be enabled).|
| **.rgGroupItem** |Reference to items belonging to the group panel (grouping must be enabled).|
| **td.rgHeader input** |Reference to the `<input>` element belonging to the grid header (grouping must be enabled)|
| **.rgCaption** |Reference to the table caption in each level of the grid hierarchy|
| **.GridToolTip_[SkinName]** |For customizing the scroller when the virtual scrolling feature is enabled (`<Scrolling AllowScroll="True" EnableVirtualScrollPaging="True" UseStaticHeaders="True" />`). Applicable for the column resizer tooltip as well|
| **.GridRowSelector_[SkinName]** |For styling the colored rectangle when selecting multiple rows by dragging.|
| **.GridItemDropIndicator_[SkinName]** |Defines the drop indicator appearance when utilizing drag and drop of grid records.|
| **.rgDetailTable** |A class for customizing the detail tables in hierarchical grid|
| **.GridReorderTop_[SkinName]** |A class to customize the embedded top image indicator when reordering grid columns|
| **.GridReorderBottom_[SkinName]** |A class to customize the embedded bottom image indicator when reordering grid columns|
| **.GridReorderTopImage_[SkinName]** |A class to customize the top image indicator when reordering grid columns and the embedded skins are disabled for the grid|
| **.GridReorderBottomImage_[SkinName]** |A class to customize the bottom image indicator when reordering grid columns and the embedded skins are disabled for the grid|
| **.rgVScroll** |A class to customize the appearance of the RadGrid virtual scroll|
| **.rgNoRecords** |A class to customize the visual appearance of the NoRecords template/text|



## RadInput for ASP.NET AJAX Q1 2009

* Embedded skins improvements - all input skins received major improvements/enhancements. See [this forum thread](http://www.telerik.com/community/forums/aspnet-ajax/input/radinput-q3-2008-skins-available-for-download.aspx) explaining how to apply the old skins as external if necessary.

## RadMenu for ASP.NET AJAX Q1 2009

* Animations are using the jQuery library now. If you have disabled the embedded scripts you need to manually register the jQuery.js and jQueryPlugins.js files as described here: [Disabling Embedded Resources]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/performance/disabling-embedded-resources%})

## RadPanelBar for ASP.NET AJAX Q1 2009

* Animations are using the jQuery library now. If you have disabled the embedded scripts you need to manually register the jQuery.js and jQueryPlugins.js files as described here: [Disabling Embedded Resources]({%slug introduction/radcontrols-for-asp.net-ajax-fundamentals/performance/disabling-embedded-resources%})

## RadScheduler for ASP.NET AJAX Q1 2009

* Obsolete SchedulerAppointmentResizeEndEventArgs.get_newTime() property; Use get_newEndTime() instead

* Obsolete the showInsertFormAt(timeSlot) client-side method; Use showInlineInsertForm(timeSlot) instead

* Obsolete the editAppointment(appointment, editSeries) client-side method; Use showInlineEditForm(appointment, editSeries) instead

* Changed the value of the "ShowAdvancedForm" localization sting to "Options" (was "options")

* The default value for MinimumInlineFormWidth is changed to 250 px (was 200 px)

* The default width of the row headers (hours column, resource headers) is now 52 px (was 100px). You can use the RowHeaderWidth to control it.

* The minimum selectable date in RadScheduler is changed from 1980 to 1900

* Breaking change (client-side): The ISchedulerTimeSlot.get_duration() now returns milliseconds instead of minutes. Use the new get_durationInMinutes() property to obtain the old behavior

* Updated jQuery to version 1.3.2



## RadSplitter for ASP.NET AJAX Q1 2009

* The **FullScreenMode** property is now obsolete.

## 

**Telerik® UI for ASP.NET AJAX Q3 2008**

All controls from the Telerik® UI for ASP.NET AJAX suite are fully backwards compatible with their previous version with the following exceptions:



**Telerik RadCalendar for ASP.NET AJAX Q3 2008**

Client-side property Owner is renamed to get_owner(). Property Owner is obsolete and will be removed in Q1 2009 release.

All CSS classes have been renamed to use Telerik current naming convention. For migration of custom skins, please refer to: [Migrating RadCalendar Skins Created Before Q3 2008]({%slug calendar/appearance-and-styling/creating-a-custom-skin%}).

**Telerik RadChart for ASP.NET AJAX Q3 2008**

With the release of Telerik® UI for ASP.NET AJAX Q3 2008 we have introduced a change related to the Telerik.Charting assembly. It is now IL merged into Telerik.Web.UI. This way the entire suite is delivered within a single assembly -- Telerik.Web.UI. When upgrading to Telerik® UI for ASP.NET AJAX Q3 2008 you will need to make this change to the pages in your project, which use RadChart for ASP.NET AJAX:

·If you have Telerik.Charting installed in GAC (this used to be the default Telerik® UI for ASP.NET AJAX installer action): Replace the following directive

|  **Old Telerik.Charting Register directive**  |
| ------ |
|`<%@ Register Assembly="Telerik.Charting, Version=2.0.5.0, Culture=neutral, PublicKeyToken=d14f3dcc8e3e8763" Namespace="Telerik.Charting" TagPrefix="telerik" %>`|

with this one

|  **New Telerik.Charting Register directive**  |
| ------ |
|`<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Charting" TagPrefix="telerik" %>`|


You will also need to remove the Telerik.Charting registration from your web.config file. In the `<system.web> <compilation> <assemblies>` section you will find this line:

|  **Old Telerik.Charting web.config registration**  |
| ------ |
|`<add assembly="Telerik.Charting, Version=2.0.5.0, Culture=neutral, PublicKeyToken=D14F3DCC8E3E8763"/>`|

Simply remove it.


* If you do not have Telerik.Charting installed in GAC (you use it from the local **Bin** folder) replace this directive

|  **Old Telerik.Charting Register directive**  |
| ------ |
|`<%@ Register Assembly="Telerik.Charting" Namespace="Telerik.Charting" TagPrefix="telerik" %>`|


with this one:


|  **New Telerik.Charting Register directive**  |
| ------ |
|`<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Charting" TagPrefix="telerik" %>`|


## 

**Telerik RadEditor for ASP.NET AJAX Q3 2008**


Removed dependency on SessionState. If your custom dialogs depend on the Session object, see the following KB - [Using Session State in Custom Editor Dialogs](http://www.telerik.com/support/kb/details/using-session-state-in-custom-editor-dialogs)



**Telerik RadInput for ASP.NET AJAX Q3 2008**



All CSS classes for RadInput and RadInputManager have been renamed to use Telerik current CSS naming convention. As a result, all RadInput skins have decreased in size by up to 25%.

All custom skins will stop working, however, migrating is very easy, by following the CSS selector scheme provided below:

|  **Current CSS class name**  |  **New CSS class name**  |
| ------ | ------ |
|radInput_Skin|RadInput_Skin|
|inputCell|riCell|
|imageCell|riBtn|
|gobutton|riBtn a(gobutton is removed)|
|spinImgCell|riSpin|
|spinbutton|riSpin a(spinbutton is removed)|
|up|riUp|
|down|riDown|
|radLabelCss_Skin|riLabel|
|radEmptyMessageCss_Skin|riEmpty|
|radEnabledCss_Skin|riEnabled|
|radHoverCss_Skin|riHover|
|radFocusedCss_Skin|riFocused|
|radReadOnlyCss_Skin|riRead|
|radDisabledCss_Skin|riDisabled|
|radNegativeCss_Skin|riNegative|
|radInvalidCss_Skin|riError|
||riTextBox(new common CSS class for the textbox)|


**RadInputManager** styles: * RadInputMgr_Skin(common CSS class), RadInput_Empty_Skin, RadInput_Enabled_Skin, RadInput_Hover_Skin, RadInput_Focused_Skin, RadInput_Disabled_Skin, RadInput_Negative_Skin and RadInput_Error_Skin *

## 

**Telerik RadSlider for ASP.NET AJAX Q3 2008 and before**

Some of the RadSlider's properties are obsolete and new ones which offer the same functionality should be used. You can find them along with the new ones below:

|  Obsolete property  |  Actual property  |
| ------ | ------ |
|ClickOffset|LargeChange|
|SlideStep|SmallChange|
|Length|Width/Height (depending on Orientation)|


Some new properties were introduced - the table below contains them along with a short explanation.

|  Property Name  |  Description  |
| ------ | ------ |
|ItemType|Sets the type of the items, can be set to **Item** and **Tick** . When set to **Tick** , the slider can be additionally configured by setting its **LargeChange** and **SmallChange** properties.|
|TrackPosition|This property is used to set the position of the track. It can be set to **TopLeft** , **BottomRight** and **Center** |
|IsSelectionRangeEnabled|When set to true, configures the slider to display two drag-handles|
|SelectionStart|Sets the first value of the slider when **IsSelectionRangeEnabled** = true|
|SelectionEnd|Sets the second value of the slider when **IsSelectionRangeEnabled** = true|
|LiveDrag|Controls when the value of the slider changes - when set to true the value changes while the handle drag is changing its position whereas when false the value changes only after the user has moved and already released the drag handle|
|IsDirectionReversed|Controls whether the minimum and the maximum values are reversed or not|
|OnClientBeforeVaueChange|event, which before the value changes. You can use the set_cancel method of the args to cancel the value change operation|
