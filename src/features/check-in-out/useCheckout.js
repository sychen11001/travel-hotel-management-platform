import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";

export function useCheckout() {
  const queryClient = useQueryClient();

  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),

    onSuccess: (data) => {
      toast.success(`预订单 #${data.id} 成功退房`);
      queryClient.invalidateQueries({ active: true });
    },

    onError: () => toast.error("退房时出现错误"),
  });

  return { checkout, isCheckingOut };
}
