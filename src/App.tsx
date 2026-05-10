import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

type Notification = {
  id: string;
  event: string;
  severity: string;
  message: string;
  created_at: string;
  status: string;
};

export default function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [criticalOnly, setCriticalOnly] = useState(false);

  async function fetchNotifications() {
    let query = supabase
      .from("notification_outbox")
      .select("id,event,severity,message,created_at,status")
      .eq("status", "pending")
      .order("created_at", { ascending: false });

    if (criticalOnly) {
      query = query.eq("severity", "critical");
    }

    const { data, error } = await query;

    if (error) {
      console.error("Error fetching notifications:", error);
      return;
    }

    setNotifications(data || []);
  }

  async function markAsRead(id: string) {
    const { error } = await supabase
      .from("notification_outbox")
      .update({
        status: "read",
        delivered_at: new Date().toISOString(),
      })
      .eq("id", id);

    if (error) {
      console.error("Error marking notification as read:", error);
      return;
    }

    await fetchNotifications();
  }

  useEffect(() => {
    fetchNotifications();
  }, [criticalOnly]);

  return (
    <div className="mx-auto max-w-4xl p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Notifications</h1>
          <p className="text-sm text-gray-500">
            {notifications.length} pending signal
            {notifications.length === 1 ? "" : "s"}
          </p>
        </div>

        <button
          onClick={() => setCriticalOnly(!criticalOnly)}
          className="rounded bg-black px-4 py-2 text-white"
        >
          {criticalOnly ? "Show All" : "Critical Only"}
        </button>
      </div>

      <div className="space-y-4">
        {notifications.length === 0 ? (
          <div className="rounded border p-6 text-center text-gray-500">
            No pending notifications.
          </div>
        ) : (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className="rounded-xl border p-4 shadow-sm"
            >
              <div className="mb-2 flex items-center justify-between">
                <span
                  className={`text-sm font-bold uppercase ${
                    notification.severity === "critical"
                      ? "text-red-600"
                      : notification.severity === "warning"
                      ? "text-yellow-600"
                      : "text-blue-600"
                  }`}
                >
                  {notification.severity}
                </span>

                <span className="text-sm text-gray-500">
                  {new Date(notification.created_at).toLocaleString()}
                </span>
              </div>

              <p className="mb-4 text-lg">{notification.message}</p>

              <button
                onClick={() => markAsRead(notification.id)}
                className="rounded bg-green-600 px-4 py-2 text-white"
              >
                Mark as read
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
