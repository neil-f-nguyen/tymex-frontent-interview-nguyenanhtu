"use client";

import React, { useEffect } from "react";
import { Input, Slider, Select, Button, Space, Typography } from "antd";
import { SearchOutlined, CloseCircleFilled } from "@ant-design/icons";
import { useRouter } from "next/navigation";

export interface FilterSidebarProps {
  filters: {
    search: string;
    sortBy: string;
    sortOrder: string;
  };
  onFilterChange: (filters: FilterSidebarProps["filters"]) => void;
  onApply: () => void;
}

const tierOptions = [
  { value: "All", label: "All" },
  { value: "Dark", label: "Dark" },
  { value: "Light", label: "Light" },
  { value: "Colorful", label: "Colorful" },
  { value: "Halloween", label: "Halloween" },
];
const themeOptions = [
  { value: "All", label: "All" },
  { value: "Dark", label: "Dark" },
  { value: "Light", label: "Light" },
  { value: "Colorful", label: "Colorful" },
  { value: "Halloween", label: "Halloween" },
];

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  onFilterChange,
  onApply,
}) => {
  const getCurrentValue = (options: { value: string; label: string }[]) => {
    if (!filters?.search) return "All";
    return (
      options.find(
        (option) =>
          option.value === filters[filters?.search as keyof typeof filters]
      )?.label || "All"
    );
  };

  const getSortOptions = (key: string) => {
    if (filters?.sortBy !== key) return "asc";
    return filters?.sortOrder === "asc" ? "asc" : "desc";
  };

  return (
    <aside
      style={{
        borderRadius: 16,
        padding: 24,
        color: "#fff",
        width: "100%",
      }}
    >
      {/* Search */}
      <Input
        size="large"
        placeholder="Quick search"
        prefix={<SearchOutlined style={{ color: "#aaa", fontSize: 20 }} />}
        style={{
          marginBottom: 32,
          background: "transparent",
          color: "#fff",
          borderColor: "#444",
        }}
        value={filters.search}
        onChange={(e) => onFilterChange({ ...filters, search: e.target.value })}
      />

      {/* Price Slider */}
      <div style={{ marginBottom: 24 }}>
        <Typography.Text
          style={{ color: "#aaa", fontWeight: 600, letterSpacing: 1 }}
        >
          PRICE
        </Typography.Text>
        <Slider
          range
          min={0.01}
          max={200}
          defaultValue={[0.01, 200]}
          tooltip={{
            formatter(value) {
              return `${value} ETH`;
            },
          }}
          styles={{
            track: {
              background: "linear-gradient(90deg, #e14fff 0%, #ff6bcb 100%)",
            },
            handle: {
              background:
                "radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, #ff54ee 100%)",
            },
            rail: {
              background: "#444",
              height: 6,
            },
          }}
          style={{ marginTop: 8 }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#aaa",
            fontWeight: 500,
          }}
        >
          <span>0.01 ETH</span>
          <span>200 ETH</span>
        </div>
      </div>
      {/* Tier */}
      <div style={{ marginBottom: 24 }}>
        <Typography.Text
          style={{ color: "#aaa", fontWeight: 600, letterSpacing: 1 }}
        >
          TIER
        </Typography.Text>
        <Select
          value={getCurrentValue(tierOptions)}
          size="middle"
          style={{ width: "100%", marginTop: 8 }}
          options={tierOptions}
          onChange={(value) => onFilterChange({ ...filters, search: value })}
        />
      </div>

      {/* Theme */}
      <div style={{ marginBottom: 24 }}>
        <Typography.Text
          style={{ color: "#aaa", fontWeight: 600, letterSpacing: 1 }}
        >
          THEME
        </Typography.Text>
        <Select
          value={getCurrentValue(themeOptions)}
          size="middle"
          style={{ width: "100%", marginTop: 8 }}
          options={themeOptions}
          onChange={(value) => onFilterChange({ ...filters, search: value })}
        />
      </div>

      {/* Time */}
      <div style={{ marginBottom: 24 }}>
        <Typography.Text
          style={{ color: "#aaa", fontWeight: 600, letterSpacing: 1 }}
        >
          TIME
        </Typography.Text>
        <Select
          value={getSortOptions("time")}
          size="large"
          style={{ width: "100%", marginTop: 8 }}
          options={[
            { value: "asc", label: "Lastest" },
            { value: "desc", label: "Oldest" },
          ]}
          onChange={(value) =>
            onFilterChange({ ...filters, sortBy: "time", sortOrder: value })
          }
        />
      </div>

      {/* Price Sort */}
      <div style={{ marginBottom: 32 }}>
        <Typography.Text
          style={{ color: "#aaa", fontWeight: 600, letterSpacing: 1 }}
        >
          PRICE
        </Typography.Text>
        <Select
          value={getSortOptions("price")}
          size="large"
          style={{ width: "100%", marginTop: 8 }}
          options={[
            { value: "asc", label: "Low to high" },
            { value: "desc", label: "High to low" },
          ]}
          onChange={(value) =>
            onFilterChange({ ...filters, sortBy: "price", sortOrder: value })
          }
        />
      </div>

      {/* Actions */}
      <Space style={{ width: "100%", justifyContent: "space-between" }}>
        <Button
          icon={
            <CloseCircleFilled style={{ color: "#FFD600", fontSize: 18 }} />
          }
          style={{
            background: "transparent",
            color: "#FFD600",
            fontWeight: 600,
            border: "none",
            boxShadow: "none",
            display: "flex",
            alignItems: "center",
          }}
          onClick={() => {
            onFilterChange({
              search: "",
              sortBy: "",
              sortOrder: "",
            });
            onApply();
          }}
        >
          Reset filter
        </Button>
        <Button
          type="primary"
          size="large"
          style={{
            background: "linear-gradient(90deg, #e14fff 0%, #ff6bcb 100%)",
            border: "none",
            fontWeight: 600,
            borderRadius: 8,
            minWidth: 120,
          }}
          onClick={onApply}
        >
          Search
        </Button>
      </Space>
    </aside>
  );
};

export default FilterSidebar;
