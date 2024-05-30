 # Test Trend Dashboard

The Test Trend dashboard helps you understand test trends in the selected planning level or program trend across configurable intervals. Test trend analysis involves tracking and monitoring the changes and patterns of tests over time. This helps you see the effectiveness of testing efforts and identify any unusual or unexpected tests that might need your attention.

The Last refresh date on this dashboard refers to the date and time when the data displayed on the dashboard was last updated or refreshed from the underlying data sources. You can know the data's freshness and make informed decisions based on the most recent information.

This dashboard is built using the test_trend dataset. 

### Test Trend
Displays test trends in the selected planning level or program. The height of each bar on this panel displays the number of tests in the selected planning level or program on a given date. Using the Work item type filter, you can view the test trend based on different work item types like defect, story, and test set. The defect values are unspecified, ready, passed, failed, and developing. The story values are unspecified, ready, passed, failed, and developing. The test set values are unspecified, passed, and failed. The x-axis represents the date, and the y-axis represents the test count. You can hover the cursor over the panel to see the status, calendar date, and test count.

Here is an example test trend panel.
![Test Trend](./images/Test_Trend.png)

You can filter and view the required data using the following filters:

- Planning level: Displays data of tests in the selected planning level and all child planning levels that belong to the planning level.
:::note

  - The following filters display filter values based on the filtered planning level.
  - The following filters cascade each other except the Start date, Duration and Work item type filters.

:::
- Program: Displays data of tests in the selected program.
- Team: Displays data of a specific group of cross-functional members.
- Backlog group: Displays data of tests in the selected backlog group and child backlog group that belongs to the backlog group.
- Iteration: Displays data of a specific planning period for an Agile team.
- Portfolio item: Displays data of tests in the selected portfolio item and all child portfolio items that belong to the portfolio item.
- Backlog goal: Displays data of tests assigned to the selected backlog goals.
-  Start date: Displays data of tests in the selected start date.
-  Duration: Displays data of tests in the selected duration types like 50 days, 20 weeks, and 10 months.
-  Work item type: Displays data of work items in the following work item types: defect, story, and test set.

You can use these filters to refine the displayed data. For example, you can choose an iteration from the Iteration filter to view the corresponding test trend dashboard. Here is an example iteration-filtered panel.

![Test trend filtered panel](./images/test_trend_filtered_panel.PNG)

### Components of dataset
The following components of the dataset are used in this dashboard: 

### Attributes
| Attribute Name  | Description |
|:-------------|:------------|
|Calendar Date| Gregorian calendar date displayed in the format 'M/D/YYYY'|
|Status|Status of the defect as mentioned in the source|


### Metrics
| Metric Name  | Description |Metric Formula|
|-------------|------------|-------------|
|Test Count|Count of tests in the program or planning level|Count<Distinct=True>([Test ID])|

