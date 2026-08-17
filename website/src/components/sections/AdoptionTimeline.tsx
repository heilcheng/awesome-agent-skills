"use client";

import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const monthlyData = [
  { month: "May 25", users: 4200 },
  { month: "Jun 25", users: 6800 },
  { month: "Jul 25", users: 9500 },
  { month: "Aug 25", users: 13200 },
  { month: "Sep 25", users: 18700 },
  { month: "Oct 25", users: 24300 },
  { month: "Nov 25", users: 31000 },
  { month: "Dec 25", users: 38500 },
  { month: "Jan 26", users: 48200 },
  { month: "Feb 26", users: 61000 },
  { month: "Mar 26", users: 79500 },
  { month: "Apr 26", users: 102000 },
];

export default function AdoptionTimeline() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const check = () =>
      setIsDark(document.documentElement.classList.contains("dark"));
    check();
    const obs = new MutationObserver(check);
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!svgRef.current) return;
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = 700;
    const height = 320;
    const margin = { top: 24, right: 24, bottom: 40, left: 60 };
    const W = width - margin.left - margin.right;
    const H = height - margin.top - margin.bottom;

    const textColor = isDark ? "#9ca3af" : "#6b7280";
    const lineColor = isDark ? "#60a5fa" : "#2563eb";
    const areaColorStart = isDark
      ? "rgba(96,165,250,0.25)"
      : "rgba(37,99,235,0.12)";
    const areaColorEnd = isDark
      ? "rgba(96,165,250,0.02)"
      : "rgba(37,99,235,0.01)";
    const gridColor = isDark ? "#27272a" : "#f3f4f6";
    const dotFill = isDark ? "#1e1e1e" : "#ffffff";

    const g = svg
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3
      .scalePoint()
      .domain(monthlyData.map((d) => d.month))
      .range([0, W])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(monthlyData, (d) => d.users)! * 1.15])
      .range([H, 0]);

    // Grid lines
    g.append("g")
      .selectAll("line")
      .data(y.ticks(5))
      .join("line")
      .attr("x1", 0)
      .attr("x2", W)
      .attr("y1", (d) => y(d))
      .attr("y2", (d) => y(d))
      .attr("stroke", gridColor)
      .attr("stroke-dasharray", "3,3");

    // X axis
    g.append("g")
      .attr("transform", `translate(0,${H})`)
      .call(d3.axisBottom(x).tickSize(0).tickPadding(10))
      .select(".domain")
      .remove();
    g.selectAll(".tick text")
      .attr("fill", textColor)
      .attr("font-size", "11")
      .attr("font-family", "inherit");

    // Y axis
    g.append("g")
      .call(
        d3
          .axisLeft(y)
          .ticks(5)
          .tickFormat((d) => `${Number(d) / 1000}k`)
          .tickSize(0)
          .tickPadding(8)
      )
      .select(".domain")
      .remove();
    g.selectAll(".tick text")
      .attr("fill", textColor)
      .attr("font-size", "11")
      .attr("font-family", "inherit");

    // Gradient
    const defs = svg.append("defs");
    const grad = defs
      .append("linearGradient")
      .attr("id", "area-grad")
      .attr("x1", "0")
      .attr("y1", "0")
      .attr("x2", "0")
      .attr("y2", "1");
    grad.append("stop").attr("offset", "0%").attr("stop-color", areaColorStart);
    grad.append("stop").attr("offset", "100%").attr("stop-color", areaColorEnd);

    // Area
    const area = d3
      .area<(typeof monthlyData)[0]>()
      .x((d) => x(d.month)!)
      .y0(H)
      .y1((d) => y(d.users))
      .curve(d3.curveMonotoneX);

    g.append("path")
      .datum(monthlyData)
      .attr("fill", "url(#area-grad)")
      .attr("d", area);

    // Line
    const line = d3
      .line<(typeof monthlyData)[0]>()
      .x((d) => x(d.month)!)
      .y((d) => y(d.users))
      .curve(d3.curveMonotoneX);

    const path = g
      .append("path")
      .datum(monthlyData)
      .attr("fill", "none")
      .attr("stroke", lineColor)
      .attr("stroke-width", 2.5)
      .attr("d", line);

    const totalLength = (path.node() as SVGPathElement).getTotalLength();
    path
      .attr("stroke-dasharray", `${totalLength} ${totalLength}`)
      .attr("stroke-dashoffset", totalLength)
      .transition()
      .duration(1500)
      .ease(d3.easeCubicOut)
      .attr("stroke-dashoffset", 0);

    // Dots
    g.selectAll(".dot")
      .data(monthlyData)
      .join("circle")
      .attr("cx", (d) => x(d.month)!)
      .attr("cy", (d) => y(d.users))
      .attr("r", 4)
      .attr("fill", dotFill)
      .attr("stroke", lineColor)
      .attr("stroke-width", 2)
      .attr("opacity", 0)
      .transition()
      .delay((_, i) => 800 + i * 60)
      .attr("opacity", 1);
  }, [isDark]);

  return (
    <section className="scroll-mt-20 py-16 border-b border-neutral-200 dark:border-neutral-800">
      <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-3">
        Skill Adoption Growth
      </h2>
      <p className="text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl text-base leading-relaxed">
        Monthly active skill installations across all platforms, showing rapid
        acceleration since mid-2025.
      </p>

      <div className="border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-neutral-900 p-6">
        <p className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-4">
          Monthly Active Installations
        </p>
        <svg
          ref={svgRef}
          width="100%"
          viewBox="0 0 700 320"
          className="w-full"
        />
      </div>
    </section>
  );
}
