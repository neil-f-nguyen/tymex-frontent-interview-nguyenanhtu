import { Button, Flex } from "antd";
import React from "react";

const categories = [
  "All",
  "Upper Body",
  "Lower Body",
  "Hat",
  "Shoes",
  "Accessory",
  "Legendary",
  "Mythic",
  "Epic",
  "Rare",
];

interface CategoryFilterProps {
  selected: string;
  onSelect: (category: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selected: _selected,
  onSelect,
}) => {
  const selected =
    !_selected || !categories.includes(_selected) ? "All" : _selected;

  return (
    <Flex
      gap={12}
      align="center"
      style={{ overflowX: "auto", padding: "0 1rem 1rem" }}
    >
      {categories.map((cat) => (
        <Button
          variant="filled"
          color="primary"
          key={cat}
          style={{
            background:
              cat === selected
                ? "linear-gradient(91.47deg, #DA458F -6%, #DA34DD 113.05%)"
                : "linear-gradient(91.47deg, rgba(218, 69, 143, 0.4) -6%, rgba(218, 52, 221, 0.4) 113.05%)",
          }}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </Button>
      ))}
    </Flex>
  );
};

export default CategoryFilter;
