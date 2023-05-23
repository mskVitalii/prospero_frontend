import React, { useEffect, useRef, useState } from 'react'
// import classes from "./SearchByDateChart.module.scss";

import {
  BarChart,
  Bar,
  Brush,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  // ReferenceLine,
  // Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: '1', uv: 300, published: 456 },
  { name: '2', uv: -145, published: 230 },
  { name: '3', uv: -100, published: 345 },
  { name: '4', uv: -8, published: 450 },
  { name: '5', uv: 100, published: 321 },
  { name: '6', uv: 9, published: 235 },
  { name: '7', uv: 53, published: 267 },
  { name: '8', uv: 252, published: -378 },
  { name: '9', uv: 79, published: -210 },
  { name: '10', uv: 294, published: -23 },
  { name: '12', uv: 43, published: 45 },
  { name: '13', uv: -74, published: 90 },
  { name: '14', uv: -71, published: 130 },
  { name: '15', uv: -117, published: 11 },
  { name: '16', uv: -186, published: 107 },
  { name: '17', uv: -16, published: 926 },
  { name: '18', uv: -125, published: 653 },
  { name: '19', uv: 222, published: 366 },
  { name: '20', uv: 372, published: 486 },
  { name: '21', uv: 182, published: 512 },
  { name: '22', uv: 164, published: 302 },
  { name: '23', uv: 316, published: 425 },
  { name: '24', uv: 131, published: 467 },
  { name: '25', uv: 291, published: -190 },
  { name: '26', uv: -47, published: 194 },
  { name: '27', uv: -415, published: 371 },
  { name: '28', uv: -182, published: 376 },
  { name: '29', uv: -93, published: 295 },
  { name: '30', uv: -99, published: 322 },
  { name: '31', uv: -52, published: 246 },
  { name: '32', uv: 154, published: 33 },
  { name: '33', uv: 205, published: 354 },
  { name: '34', uv: 70, published: 258 },
  { name: '35', uv: -25, published: 359 },
  { name: '36', uv: -59, published: 192 },
  { name: '37', uv: -63, published: 464 },
  { name: '38', uv: -91, published: -2 },
  { name: '39', uv: -66, published: 154 },
  { name: '40', uv: -50, published: 186 },
]
  .map((x, i) => ({
    name: new Date(Date.now() - i * 1000 * 60 * 60 * 24),
    // uv: Math.abs(x.uv),
    published: Math.abs(x.published)
  }))
  .sort((a, b) => Number(a.name) - Number(b.name))
  .map((x, _) => ({
    ...x,
    name: x.name.toLocaleString("default", { month: "short", day: "2-digit" })
  }))


const SearchByDateChart = () => {

  const first = useRef()
  return <ResponsiveContainer width="100%" height="95%">
    <BarChart
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Brush dataKey="name" height={30} fill='none' stroke="#8884d8" onChange={(e) => console.log(`${data[e.startIndex ?? 0].name}, ${data[e.endIndex ?? 0].name}`)} />
      <Bar dataKey="published" fill="#8884d8" />
      {/* <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} /> */}
      {/* <ReferenceLine y={0} stroke="#000" /> */}
      {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
    </BarChart>
  </ResponsiveContainer>
}

export default SearchByDateChart
