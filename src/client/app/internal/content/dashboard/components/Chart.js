import React from 'react'
import { Chart, Geom, Axis, Tooltip, Coord, Legend } from 'bizcharts';

const ChartContent = props => {
  const totalExpenses = Object.values(props.expenses).reduce((accuExepenses, currentExpenses) => {
    return accuExepenses + currentExpenses.value
  }, 0)

  const dataSource = Object.values(props.categories).map(category => {
    const totalExpense = Object.values(props.expenses)
      .filter(expense => expense.category == category.id)
      .reduce((accuExepense, currentExpense) => {
        return accuExepense + currentExpense.value
      }, 0)

    return {
      item: category.title,
      count: totalExpense
    }
  })

  const cols = {
    percent: {
      formatter: val => (val = `${val * 100}%`),
    },
  }

  return (
    <>
      <span> Total Expenses: <strong>{totalExpenses}</strong></span>
      <Chart
        className="my-chart"
        data={dataSource}
        scale={cols}
        padding="auto"
        height={500}
        forceFit
        onGetG2Instance={(chart) => {
          setTimeout(() => {
            const geom = chart.get('geoms')[0]
            const items = geom.get('data')
            geom.setSelected(items[1])
          }, 2000)
        }}
        onPlotClick={(ev) => {
          console.log(ev)
        }}
      >
        <Coord type="theta" radius={0.65} />
        <Axis name="count" />
        <Legend position="right" />
        <Tooltip
          showTitle={false}
          itemTpl='
          <li>
           <span style="background-color:{color};" class="g2-tooltip-marker">
           </span>{name}: {value}</li>'
        />
        <Geom
          type="intervalStack"
          position="count"
          color="item"
          tooltip={[
            'item*count',
            (item, count) => {
              const decimal = count / totalExpenses
              count = `${Math.round(decimal * 100)}% (${count})`;
              return {
                name: item,
                value: count,
              };
            },
          ]}
          style={{
            lineWidth: 1,
            stroke: '#fff',
          }}
        />
      </Chart>
    </>
  )
}

export default ChartContent