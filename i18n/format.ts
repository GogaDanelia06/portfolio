/** Replaces `{key}` placeholders, e.g. format("{count} screens", { count: 3 }). */
export function format(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match
  );
}
