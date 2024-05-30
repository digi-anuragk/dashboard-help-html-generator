# Defect Trend Dashboard

The Defect Trend dashboard helps you see how defects in your chosen planning level or program change over time. Defect trend analysis involves systematically tracking and monitoring the evolution and patterns of defects over time. With this dashboard, you can check how well your testing is progressing and find any problems that need fixing. You can also look at specific factors like portfolio items or teams to get a clearer picture.

The Last refresh date on this dashboard refers to the date and time when the data displayed on the dashboard was last updated or refreshed from the underlying data sources. You can know the data's freshness and make informed decisions based on the most recent information.

This dashboard is built using the defect_snapshot_daily dataset. 

### Defect Trend
Displays trend analysis of the defect count. Using the Group By filter, you can view the trend of defects on different dimensions like defect type, status, and priority. Each bar on this panel represents a date. The bar's height represents the total number of defects in the selected planning level or program on that date. The priority levels are high, medium, and low. The defect types are unspecified, release, pre-release, and documentation. The status values are unspecified, completed, and in progress. The x-axis represents the calendar date, and the y-axis represents the defect count. You can hover the cursor over the panel to see the dimension, defect count, and calendar date.

Here is an example defect trend panel.
![Defect Trend](./images/defect_trend.PNG)

You can filter and view the required data using the following filters:

- Planning level: Displays data of defects in the selected planning level and all child planning levels that belong to the planning level.
:::note

  - The following filters display filter values based on the filtered planning level.
  - The following filters cascade each other except the Start date and Duration filters.

:::
- Program: Displays data on defects in the selected program.
- Backlog group: Displays data of defects in the selected backlog group and child backlog group that belongs to the backlog group.
- Team: Displays data of a specific group of cross-functional members.
- Iteration: Displays data of a specific planning period for an Agile team.
- Portfolio item: Displays data of defects in the selected portfolio item and all child portfolio items that belong to the portfolio item.
- Backlog goal: Displays data of defects in the selected backlog goal.
- Defect state: Displays data of defects in any of the following defect states: unspecified, completed, and in progress.
- Start date: Displays data of defects in the selected start date.
- Duration: Displays data of defects in the selected duration types like 50 days, 20 weeks, and 10 months.
- Group by: Displays data of defects in any of the following dimensions: status, priority, and defect type.

You can use these filters to refine the displayed data. For example, you can choose an iteration from the Iteration filter to view the corresponding defects trend dashboard. Here is an example iteration filtered panel.

![Defect Trend filtered panel](./images/defect_trend_filtered_panel.PNG)

### Components of dataset
The following components of the dataset are used in this dashboard: 

### Attributes
| Attribute Name  | Description |
|:-------------|:------------|
|Calendar date|Gregorian calendar date displayed in the format 'D/M/YYYY'|
|Defect type|Type of defect, as in the source|
|Priority|Priority of the defects|
|Status|Current status of the defects|

### Metrics
| Metric Name  | Description |Metric Formula|
|-------------|------------|-------------|
|Defect Count|Count of Defects in program or planning level|Count([Workitem ID])|


