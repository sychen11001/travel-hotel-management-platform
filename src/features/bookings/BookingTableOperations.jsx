import SortBy from "../../ui/SortBy";
import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function BookingTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "全部" },
          { value: "checked-out", label: "登记离开" },
          { value: "checked-in", label: "登记入住" },
          { value: "unconfirmed", label: "未确认" },
        ]}
      />

      <SortBy
        options={[
          { value: "startDate-desc", label: "按日期排序（从近到远）" },
          { value: "startDate-asc", label: "按日期排序（从远到近）" },
          {
            value: "totalPrice-desc",
            label: "按金额排序（从高到低）",
          },
          { value: "totalPrice-asc", label: "按金额排序（从低到高）" },
        ]}
      />
    </TableOperations>
  );
}

export default BookingTableOperations;
