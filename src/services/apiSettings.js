import supabase from "./supabase";

export async function getSettings() {
  const { data, error } = await supabase.from("settings").select("*").single();

  if (error) {
    console.error(error);
    throw new Error("无法加载设置");
  }
  return data;
}

// 我们期望的 newSetting 对象格式为 {setting: newValue}
export async function updateSetting(newSetting) {
  const { data, error } = await supabase
    .from("settings")
    .update(newSetting)
    // 设置表只有一行数据，其 ID 为 1，因此更新这一行
    .eq("id", 1)
    .single();

  if (error) {
    console.error(error);
    throw new Error("无法更新设置");
  }
  return data;
}
