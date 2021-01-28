---
title: HTML Output
page_title: HTML Output - RadCalendar
description: Check our Web Forms article about HTML Output.
slug: calendar/appearance-and-styling/html-output
tags: html,output
published: True
position: 4
---

# HTML Output



Styles for Telerik controls are defined using Cascading Style Sheet (CSS) syntax. Each style consists of a selector that identifies an HTML element to be styled, and property/value pairs that describe each of the style specifics, e.g. color, padding, margins, etc. For example, the **table.RadCalendar_Default** style defines the default width and font styles for the entire calendar control:

````CSS
table.RadCalendar_Default
{
    border-collapse:separate;
    border:0;
    font:11px arial,tahoma,sans-serif;
    width:220px;
}
````



See [CSS Skin Selectors]({%slug calendar/appearance-and-styling/css-skin-selectors%}) for detailed information on the specific CSS selectors used for **RadCalendar** skins.

## HTML Output of RadCalendar

The typical HTML output of a **RadCalendar** control is the following (some HTML attributes have been removed for simplicity):

````HTML
<div id="RadCalendar1_wrapper">
    <table id="RadCalendar1" class="RadCalendar RadCalendar_Windows7">
        <thead>
            <tr>
                <td class="rcTitlebar">
                    <table>
                        <tr>
                            <td>
                                <a class="rcFastPrev"><<</a>
                            </td>
                            <td>
                                <a class="rcPrev"><</a>
                            </td>
                            <td class="rcTitle">
                                May 2010
                            </td>
                            <td>
                                <a class="rcNext">></a>
                            </td>
                            <td>
                                <a class="rcFastNext">>></a>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="rcMain">
                    <table class="rcMainTable">
                        <thead>
                            <tr class="rcWeek">
                                <th class="rcViewSel">
                                    x
                                </th>
                                <th>
                                    Su
                                </th>
                                <th>
                                    Mo
                                </th>
                                <th>
                                    Tu
                                </th>
                                <th>
                                    We
                                </th>
                                <th>
                                    Th
                                </th>
                                <th>
                                    Fr
                                </th>
                                <th>
                                    Sa
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="rcRow">
                                <th>
                                    18
                                </th>
                                <td>
                                    <a>25</a>
                                </td>
                                .....
                            </tr>
                            <tr class="rcRow">
                                ......</tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
    <input type="hidden" name="RadCalendar1_SD" id="RadCalendar1_SD" value="[]" />
    <input type="hidden" name="RadCalendar1_AD" id="RadCalendar1_AD" value="[[1980,1,1],[2099,12,30],[2010,5,12]]" />
</div>
````



* **div#ClientID_wrapper** - this element is not used for any styling, it only wraps the control

* **table.RadCalendar.RadCalendar_*SkinName*** - this is the main control element, which holds the skin name. It has a <*thead*> child element, which contains the header area, and a <*tbody*> child element, which contains the date matrix.

* **td.rcTitlebar** - the table cell, which wraps all elements in the header area. It contains another <*table*> and every cell of this table contains a specific element from the header (navigation arrows or title label). When month navigation is disabled (**EnableNavigation="false"**), the table cell has one more CSS class - **rcNoNav**.

* **a.rcFastPrev**, **a.rcPrev**, **a.Next**, **a.rcFastNext** - the navigation buttons in the header area.

* **td.rcTitle** - the table cell, which contains the control's title - the current month and year in the specified **TitleFormat**.

* **td.rcMain** - the table cell, which wraps all elements in the date matrix. It contains another <table> and every cell of this table contains either a day number, or a weekday name, or a week number

* **table.rcMainTable** - the table populated with the date matrix, mentioned in the previous list item. It has a <*thead*> child, which contains the column headers (usually the weekday names) and a <*tbody*> child, which contains the row headers (usually the week numbers) and the date cells

* **tr.rcWeek** - the column header row, which contains the weekday names, each in a separate <*th*> element. Depends on the **ShowColumnHeaders** property. If you set **Orientation="RenderInColumns"**, it will contain the week numbers

* **th.rcViewSel** - the table header cell, which acts as a view selector - if the user clicks it, all dates will be (un)selected. Depends on the **EnableViewSelector** property

* **tr.rcRow** - a date matrix table row, which contains day cells. The day cells can have several different CSS classes, depending on their state - **rcToday**, **rcWeekend**, **rcOtherMonth**, **rcOutOfRange** (used with RadDatePicker only). All states obtain the same CSS classes on hover and select - **rcHover** and **rcSelected**

* each day cell contains an <*a*> element inside with the day number, while out-of-range day cells contain a <*span*> element. Of course, this does not apply in the case when special day templates are used


## Notes on skinning

* If you intend to use border styles for the **RadCalendar** table cells, then the **border-collapse** CSS style of all <*table*> elements in these controls must be set to **separate**.

* The width of **RadCalendar** depends on the length of the titlebar content (i.e. the month name). In order to prevent resizing when navigating to another month, the control should have a default width (220px set in the Calendar base stylesheet).

* The **RadCalendar** navigation buttons and the **RadDateTimePicker** popup buttons have the following styles by default. This way the buttons can use background images of a set size and no visible text (it is shifted to the left) - **display:block; overflow:hidden; text-indent:-2222px; text-decoration:none;**


