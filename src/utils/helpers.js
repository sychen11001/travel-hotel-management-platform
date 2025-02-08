import { formatDistance, parseISO, setDefaultOptions } from "date-fns";
import { differenceInDays } from "date-fns/esm";
import { zhCN } from "date-fns/locale";
setDefaultOptions({ locale: zhCN });

// 我们想让这个函数同时适用于Date对象和字符串（来自Supabase）
export const subtractDates = (dateStr1, dateStr2) =>
  differenceInDays(parseISO(String(dateStr1)), parseISO(String(dateStr2)));

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  });

// Supbase 需要一个 ISO 日期字符串。然而，这个字符串在每次渲染时都会有所不同，因为 MS 或 SEC 已经改变了，这是不好的。因此，我们使用这个技巧，删除任何时间
export const getToday = function (options = {}) {
  const today = new Date();

  // 这是为了与Supabase的created_at字段进行比较所必需的，因为Supabase的时间不是从0.0.0.0开始的，
  // 所以当我们需要与较早日期比较时，需要将日期设置为当天的最后一刻
  if (options?.end)
    // 设置为当天的最后一秒
    today.setUTCHours(23, 59, 59, 999);
  else today.setUTCHours(0, 0, 0, 0);
  return today.toISOString();
};

export const formatCurrency = (value) =>
  new Intl.NumberFormat("zh-CN", { style: "currency", currency: "CNY" }).format(
    value
  );
