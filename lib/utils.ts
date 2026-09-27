export function currency(value: number, language: "en" | "fr") {
  return new Intl.NumberFormat(language === "fr" ? "fr-FR" : "en-US", {
    style: "currency",
    currency: "XOF",
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatDate(value: string, language: "en" | "fr") {
  return new Intl.DateTimeFormat(language === "fr" ? "fr-FR" : "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(`${value}T12:00:00`));
}

export function downloadText(filename: string, contents: string) {
  const blob = new Blob([contents], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

export function nextDemoId(prefix: string) {
  const suffix = Math.floor(Date.now() % 100000).toString().padStart(5, "0");
  return `${prefix}-2026-${suffix}`;
}
