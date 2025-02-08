import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "全部" },
          { value: "no-discount", label: "没折扣" },
          { value: "with-discount", label: "有折扣" },
        ]}
      />

      <SortBy
        options={[
          { value: "name-asc", label: "按名称排序（A-Z）" },
          { value: "name-desc", label: "按名称排序 (Z-A)" },
          { value: "regularPrice-asc", label: "按定价排序（从低到高）" },
          { value: "regularPrice-desc", label: "按定价排序（从高到低）" },
          { value: "maxCapacity-asc", label: "按大小排序（从小到大）" },
          { value: "maxCapacity-desc", label: "按大小排序（从大到小）" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
