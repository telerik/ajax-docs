---
title: Customizing the Day Matrix
page_title: Customizing the Day Matrix | RadCalendar for ASP.NET AJAX Documentation
description: Customizing the Day Matrix
slug: calendar/functionality/customizing-the-day-matrix
tags: customizing,the,day,matrix
published: True
position: 3
---

# Customizing the Day Matrix



By default, **RadCalendar** lays out its day matrix like an ordinary calendar, with 7 columns (one for each day of the week) and 6 rows (the maximum number of weeks needed in a month). You can change this default layout using two properties: **Orientation** and **MonthLayout**.

## Horizontal orientation

When **Orientation** is **RenderInRows** (the default), the days are laid out horizontally, in rows. Three values of the **MonthLayout** property are designed for showing a single month using this horizontal orientation:

* When **MonthLayout** = **Layout_7columns_x_6rows** and **Orientation** = **RenderInRows**, each row represents a single week:
![RadCalendar](images/GettingStarted_RunningTheApplication.png)

* When **MonthLayout** = **Layout_14columns_x_3rows** and **Orientation** = **RenderInRows**, each row represents two weeks:
![14x3 day matrix](images/calendar_daymatrix_14by3.png)

* When **MonthLayout** = **Layout_21columns_x_2rows** and **Orientation** = **RenderInRows**, each row represents three weeks:
![12x2 day matrix](images/calendar_daymatrix_21by2.png)

## Vertical orientation

When **Orientation** is **RenderInColumns**, the days are laid out vertically, in columns. Three values of the **MonthLayout** property are designed for showing a single month using this vertical orientation:

* When **MonthLayout** = **Layout_7rows_x_6columns** and **Orientation** = **RenderInColumns**, each column represents a single week:
![6x7 day matrix](images/calendar_daymatrix_6by7.png)

* When **MonthLayout** = **Layout_14rows_x_3columns** and **Orientation** = **RenderInColumns**, each column represents two weeks:
![3x14 day matrix](images/calendar_daymatrix_3by14.png)

* When **MonthLayout** = **Layout_21rows_x_2columns** and **Orientation** = **RenderInColumns**, each column represents three weeks:
![2x21 day matrix](images/calendar_daymatrix_2by21.png)

## Changing the dimensions of the day matrix directly

The dimensions of the day matrix are not limited to the 6 possible values of the **MonthLayout** property. You can set the number of rows and columns separately using the **SingleViewRows** and **SingleViewColumns** properties. For example, the following screen shot shows an entire year in a single matrix on a **RadCalendar** with **SingleViewRows** = 7 and **SingleViewColumns** = 53:
![One year day matrix](images/calendar_daymatrix_oneyear.png)

>note 
When using the **SingleViewRows** and **SingleViewColumns** properties, the day matrix typically does not focus on a single month. To control the first week that appears in the resulting calendar, set the **FocusedDate** property to a day in the first month you want to appear at the beginning of the calendar.
>


# See Also

 * [Multi-View Mode]({%slug calendar/functionality/multi-view-mode%})

 * [Managing Dates]({%slug calendar/functionality/managing-dates%})

 * [Column And Row Headers Settings]({%slug calendar/functionality/column-and-row-headers-settings%})

 * [DayRender]({%slug calendar/server-side-programming/server-side-events/dayrender%})
