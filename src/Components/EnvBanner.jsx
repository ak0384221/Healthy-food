const ENV_STYLES = {
  development: { label: "DEV", classes: "bg-red-400 text-white" },
  staging: { label: "STAGING", classes: "bg-blue-500 text-white" },
  production: { label: "PROD", classes: "bg-green-500 text-white" },
};

export default function EnvBanner() {
  const env = import.meta.env?.VITE_APP_ENV || "unknown";
  const style = ENV_STYLES[env];

  if (!style) return null; // don't show anything if env var is missing/unrecognized

  return (
    <div
      className={`text-center py-1.25 mb-4 text-xs font-semibold tracking-wide  ${style.classes}`}
    >
      {style.label} ENVIRONMENT
    </div>
  );
}
