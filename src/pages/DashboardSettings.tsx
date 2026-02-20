export default function DashboardSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-sm text-muted-foreground">Manage your dashboard preferences</p>
      </div>

      <div className="grid gap-6 max-w-2xl">
        {[
          { title: "Notifications", desc: "Get alerts for high-priority complaints", enabled: true },
          { title: "Auto-refresh", desc: "Refresh dashboard data every 30 seconds", enabled: true },
          { title: "Email Digests", desc: "Daily summary of sentiment trends", enabled: false },
          { title: "Slack Integration", desc: "Post urgent alerts to your Slack channel", enabled: false },
        ].map((setting) => (
          <div key={setting.title} className="glass-card flex items-center justify-between p-5">
            <div>
              <p className="text-sm font-medium text-foreground">{setting.title}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{setting.desc}</p>
            </div>
            <div
              className={`relative h-6 w-11 cursor-pointer rounded-full transition-colors ${
                setting.enabled ? "bg-primary" : "bg-muted"
              }`}
            >
              <div
                className={`absolute top-0.5 h-5 w-5 rounded-full bg-foreground transition-transform ${
                  setting.enabled ? "left-[22px]" : "left-0.5"
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
