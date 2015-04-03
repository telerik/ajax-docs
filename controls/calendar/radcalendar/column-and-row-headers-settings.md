---
title: Column And Row Headers Settings
page_title: Column And Row Headers Settings | UI for ASP.NET AJAX Documentation
description: Column And Row Headers Settings
slug: calendar/radcalendar/column-and-row-headers-settings
tags: column,and,row,headers,settings
published: True
position: 2
---

# Column And Row Headers Settings



The column and row headers label the rows and columns of the main calendar area. Inbetween the column and row headers, a view selector can optionally appear as well:

![Row and column headers](images/RowAndColumnHeaders.png)

You can control the appearance and behavior of each of these header sections separately.

## Row Headers

The __ShowRowHeaders__ property controls whether the row headers appear on the calendar. As shown in the screen shot above, by default, when the row headers appear, they display the week number for each row of the calendar. You can replace the week numbers that appear in the row headers by setting the __RowHeaderText__ and/or the __RowHeaderImage__ property. When you assign a value to the __RowHeaderText__ property, every row in the calendar gets the same text label. When you assign a value to the __RowHeaderImage__ property, every row in the calendar is labeled by the image you specify. If you assign both properties, the image appears to the left of the text label.

If the calendar supports multi-day selection, you can use the row headers as selectors by setting the __UseRowHeadersAsSelectors__ property. See [Date Selection]({%slug calendar/radcalendar/date-selection%}) for details.

## Column Headers

The __ShowColumnHeaders__ property controls whether the column headers appear on the calendar. As shown in the screen shot above, by default, when the row headers appear, they display the first letter of the day of the week. You can change the labels for the day of the week using the __DayNameFormat__ property. The possible values are:

* __Full__ - The column headers use the entire name of each week day to label the days of the week.

* __Short__ - The column headers use 3-letter abbreviations to label each day of the week.

* __FirstLetter__ - The column headers use the first initial to label each day of the week.

* __FirstTwoLetters__ - The column headers use the first two letters of the day name to label each day of the week.

* __Shortest__ - The column headers use the shortest string that distinguishes the week days to label each day of the week.

You can replace the week day labels altogether by setting the __ColumnHeaderText__ and/or the __ColumnHeaderImage__ property. When you assign a value to the __ColumnHeaderText__ property, every column in the calendar gets the same text label. When you assign a value to the __ColumnHeaderImage__ property, every column in the calendar is labeled by the image you specify. If you assign both properties, the image appears to the left of the text label.

If the calendar supports multi-day selection, you can use the row headers as selectors by setting the __UseColumnHeadersAsSelectors__ property. See [Date Selection]({%slug calendar/radcalendar/date-selection%}) for details.

## View Selector

The __EnableViewSelector__ property controls whether a view selector appears in the upper left corner. As shown in the screen shot above, by default, the view selector appears as a small "X". You can replace this default appearance by setting the __ViewSelectorText__ and/or __ViewSelectorImage__ property. When you assign a value to the __ViewSelectorText__ property, the "X" is replaced by the text you specify. When you assign a value to the __ViewSelectorImage__ property, the "X" is replaced by the image you specify. If you assign both properties, the image appears to the left of the text label. The style applied to the view selector table cell can be altered with the __ViewSelectorStyle__ property.

If the calendar supports multi-day selection, the view selector automatically acts to change the selection of every day visible in the calendar. See [Date Selection]({%slug calendar/radcalendar/date-selection%}) for details.

# See Also

 * [OnColumnHeaderClick]({%slug calendar/client-side-programming/events/oncolumnheaderclick%})

 * [OnRowHeaderClick]({%slug calendar/client-side-programming/events/onrowheaderclick%})

 * [OnViewSelectorClick]({%slug calendar/client-side-programming/events/onviewselectorclick%})
