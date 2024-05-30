# Portfolio Item Completion Dashboard

The Portfolio Item Completion dashboard provides insights into overall portfolio performance, such as completion rates, average time to completion, and trends over time. The dashboard enables you to track the progress of various items within a portfolio of projects. It provides a visual representation of the status of each item, allowing stakeholders to quickly assess which items are on track, delayed, or completed.

The Last refresh date on this dashboard refers to the date and time when the data displayed on the dashboard was last updated or refreshed from the underlying data sources. You can know the data's freshness and make informed decisions based on the most recent information.

This dashboard is built using the portfolio_item_daily_snapshot dataset.

The Portfolio Item Completion dashboard consists of the following tabs:
- Total Estimate: This tab presents insights into portfolio item completion based on the total estimates assigned to the backlog items.
- Work Item Count: This tab presents details of portfolio item completion based on the count of backlog items.

Here is an example portfolio item completion panel.
![Portfolio Item Completion](./images/portfolio_item_completion.PNG)

You can filter and view the required data using the following filters:

- Planning level: Displays data of portfolio items in the selected planning level and all child planning levels that belong to the planning level.
:::note

  - The following filters display filter values based on the filtered planning level.
  - The following filters cascade each other except the As of date filter.

:::
- Program: Displays data of portfolio items in the selected program.
- Portfolio item type: Displays data of portfolio items in any of the following portfolio items: epic, feature, initiative, non-functional, sub-feature, and unspecified.
- Portfolio item: Displays data of portfolio items in the selected portfolio item and all child portfolio items that belong to the portfolio item.
- Show all- Displays data of portfolio items in any of the following item types: parent and child. 
- Portfolio item status: Displays data of portfolio items in the portfolio item statuses such as discovery, done, in progress, ready for dev, review, and unspecified.
- Portfolio item priority: Displays data of portfolio items in the portfolio item priorities such as high, medium, low, and unspecified.
- Strategic theme: Displays data of portfolio items in the strategic themes such as prototype, DevOps-SaaS, shift left uptake, and unspecified.
- As of date: Displays data of portfolio items in the selected start date.

You can use these filters to refine the displayed data. For example, you can choose a program from the Program filter to view the corresponding dashboard. Here is an example program-filtered panel.

![Portfolio Item Completion filtered panel](./images/portfolio_item_completion_filtered_panel.PNG)

### Portfolio Item Completion

Displays an overview of the status of various items within a portfolio. You can use the portfolio item type filter to view the progress of the selected portfolio item within the planning level. The different portfolio item types are epic, feature, initiative, non-functional, sub-feature, and unspecified.  The x-axis represents the percentage, and the y-axis represents the selected portfolio items. You can hover the cursor over the panel to see the name of the portfolio item and the actual or planned completion percentage.

### Portfolio item completeness

Displays details of portfolio items including calendar date, portfolio item name,  portfolio item source link, planned and actual portfolio items completed portfolio items. Each row represents a different portfolio item within the selected planning level or program. 

You can also click the ![source](./images/source_icon.PNG) icon against the portfolio item name to launch the source system and view more portfolio item details such as status, description, owner and team.



### Components used in this dashboard
The following components of the dataset are used in this dashboard:

### Attributes
| Attribute Name  | Description |
|:-------------|:------------|
|As of date|Gregorian calendar date displayed in the format ‘M/D/YYYY’|
|Portfolio item title|Title of the portfolio item|
|Portfolio item source link|source link of the portfolio item|
|Portfolio item name|Name of the portfolio item|

### Metrics
| Metric Name  | Description |Metric Formula|
|-------------|------------|-------------|
|Actual|Actual estimate completion percentage|Case(([Portfolio item total story points]>0), ([Portfolio item completed story points]/[Portfolio item total story points]), 0)|
|Actual|Actual work item completion percentage|Case(([Portfolio item total workitem count]>0), ([Portfolio item completed workitem count]/[Portfolio item total workitem count]), 0)|
|Actual estimate completion|Actual estimate greater than 15 percentage|Case((Abs(([Portfolio item planned completion]-[New MetriActual estimate completion percentagec]))>0.15), [New MetriActual estimate completion percentagec], 0)|
|Actual estimate completion|Actual estimate within 15 percentage|Case((Abs(([Portfolio item planned completion]-[New MetriActual estimate completion percentagec]))<0.15), [New MetriActual estimate completion percentagec], 0)|
|Actual work item completion |Actual work item count completion percentage greater than 15|Case((Abs(([Portfolio item planned completion]-[Actual workitem count completion percentage]))>0.15), [Actual workitem count completion percentage], 0)| 
|Actual work item completion |Actual work item count completion percentage within 15|Case((Abs(([Portfolio item planned completion]-[Actual workitem count completion percentage]))<0.15), [Actual workitem count completion percentage], 0)|
|Planned|Planned completion percentage of portfolio items|(current date - planned start date) / (planned end date - planned start date)| 
|Planned completion|Planned completion percentage of portfolio items|(current date - planned start date) / (planned end date - planned start date)|

