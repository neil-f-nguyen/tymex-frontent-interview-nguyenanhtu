"use client";

import React, { useEffect, useState } from "react";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import FilterSidebar from "./components/FilterSidebar";
import { Row, Col, Space, Button, Flex, Typography, Grid, message } from "antd";
import { useQuery } from "@tanstack/react-query";
import { getProducts, IProduct } from "@tymex/services/product";
import CategoryFilter from "./components/CategoryFilter";
import _ from "lodash";
import ProductCard from "./components/ProductCard";
import { queryClient } from "@tymex/libs/query-client";

const MarketplacePage = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [limit, setLimit] = useState(12);
  const [tempProducts, setTempProducts] = useState<IProduct[]>([]);
  const [filters, setFilters] = useState({
    search: "",
    sortBy: "price",
    sortOrder: "asc",
  });
  const [pendingFilters, setPendingFilters] = useState(filters);
  const { data: products = [], error } = useQuery({
    queryKey: ["products", limit, filters],
    queryFn: async () => {
      const products = await getProducts(
        _.omitBy(
          {
            _limit: limit,
            q: filters.search,
            _sort: filters.sortBy,
            _order: filters.sortOrder,
          },
          (v) => !v || v === "All"
        )
      );
      return products;
    },
    staleTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });

  useEffect(() => {
    if (products) {
      setTempProducts(products);
    }
  }, [products]);

  if (error) {
    messageApi.error("Error fetching products");
  }

  const handleViewMore = () => {
    setLimit(limit + 12);
  };

  const handleFilterChange = (newFilters: typeof filters) => {
    setPendingFilters(newFilters);
  };

  const handleApplyFilter = () => {
    setFilters(pendingFilters);
    setLimit(12);
  };
  const handleUpdate = () => {
    queryClient.invalidateQueries({
      queryKey: ["products", limit, filters],
      exact: true,
    });
  };

  const handleSelectCategory = (category: string) => {
    setFilters({ ...filters, search: category });
  };

  return (
    <>
      {contextHolder}
      <HeroBanner />
      <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
        <Col xs={24} md={6}>
          <FilterSidebar
            filters={pendingFilters}
            onFilterChange={handleFilterChange}
            onApply={handleApplyFilter}
          />
        </Col>
        <Col xs={24} md={18}>
          <Space direction="vertical" size="middle" style={{ width: "100%" }}>
            <CategoryFilter
              selected={filters.search}
              onSelect={handleSelectCategory}
            />
            <Row
              gutter={[24, 24]}
              style={{ overflowY: "auto", maxHeight: "100vh" }}
            >
              {products.map((item) => (
                <Col xs={12} sm={12} lg={8} xl={6} key={item.id}>
                  <ProductCard product={item} onUpdate={handleUpdate} />
                </Col>
              ))}
            </Row>
            <Flex justify="center">
              <Button
                color="primary"
                variant="filled"
                onClick={handleViewMore}
                size="middle"
                style={{ padding: "24px 48px" }}
              >
                <Typography.Text strong>View more</Typography.Text>
              </Button>
            </Flex>
          </Space>
        </Col>
      </Row>
    </>
  );
};

export default MarketplacePage;
