# Work Item Trend Dashboard

The Work Item Trend dashboard enables you to observe how work items change over different periods, offering insights into their trends and evolution. It enables you to assess the progress and effectiveness of your development activities by tracking how work items advance or get resolved over time. By studying the trend data, you can identify deviations from expected patterns. This helps in spotting issues or areas that might need attention or intervention. You can break down the information based on various factors, such as portfolio items or teams. 

The Last refresh date on this dashboard refers to the date and time when the data displayed on the dashboard was last updated or refreshed from the underlying data sources. You can know the data's freshness and make informed decisions based on the most recent information.

This dashboard is built using the work_item_snapshot_daily dataset.

### Work Item Trend
Displays trend analysis and detailed information about work items in a program. Within the grid, you can find work item details such as calendar date and work item count in different work item statuses like unspecified, completed, and in progress. Using the Aggregation Type filter, you can view the trend of work items on different dimensions like work item count and total estimate. Each bar on this panel represents a date. The height of the bar represents the total number of work items in the selected planning level or program on that date. The X-axis represents the calendar date, and the Y-axis represents the work item count. You can hover over the panel to see the calendar date, state, status, and work item count.

Here is an example work item trend panel.
![Work Item Trend](../images/work_item_trend.png)

You can filter and view the required data using the following filters:

- Planning level: Displays data of work items in the selected planning level and and all child planning levels that belong to the planning level.
:::note

  - The following filters display filter values based on the filtered planning level.
  - The following filters cascade each other except the Start date and Duration filters.

:::
- Program: Displays data of work items in the selected program.
- Team: Displays data of a specific group of cross-functional members.
- Backlog group: Displays data of work items in the selected backlog group and child backlog group that belongs to the backlog group.
- Iteration: Displays data of a specific planning period for an Agile team.
- Portfolio item: Displays data of work items in the selected portfolio item and all child portfolio items that belong to the portfolio item.
- Backlog goal: Displays data of work items in the selected backlog goal.
- Work item type: Displays data of work items in any of the following work item types: Defect, Story, and Test set.
- Start date: Displays data of work items in the selected start date.
- Duration: Displays data of work items in the selected duration types like 50 days, 20 weeks, and 10 months.
- Aggregation type: Displays data of work items in any of the following aggregation types: work item count and total estimate.
 
You can use these filters to refine the displayed data. For example, you can choose an iteration from the Iteration filter to view the corresponding work item trend dashboard. Here is an example iteration-filtered panel.

![Work Item Trend filtered panel](../images/work_item_trend_filtered_panel.PNG)


### Components of dataset
The following components of the dataset are used in this dashboard: 

### Attributes
| Attribute Name  | Description |
|:-------------|:------------|
|Calendar Date|Gregorian calendar date displayed in the format 'D/M/YYYY'|
|State|Current state of the Work Item|
|Work item Status|Current status of the Work Item|

### Metrics
| Metric Name  | Description |Metric Formula|
|-------------|------------|-------------|
|Total Estimate|Summation of all estimate points of the backlog item in the iteration|Sum(story points)| 
|Work Item Count|Count of work items in an iteration|Count([Workitem ID])|


