export type CookieOptions = {
  days?: number;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: "Strict" | "Lax" | "None";
};

export function setCookie(name: string, value: string, opts: CookieOptions = {}) {
  const { days, path = "/", domain, secure = location.protocol === "https:", sameSite = "Lax" } = opts;
  let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
  if (typeof days === "number") {
    const d = new Date();
    d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
    cookie += `; expires=${d.toUTCString()}`;
  }
  cookie += `; path=${path}`;
  if (domain) cookie += `; domain=${domain}`;
  if (secure) cookie += `; Secure`;
  if (sameSite) cookie += `; SameSite=${sameSite}`;
  document.cookie = cookie;
}

export function getCookie(name: string): string | null {
  const key = encodeURIComponent(name) + "=";
  const parts = document.cookie.split("; ");
  for (const p of parts) if (p.startsWith(key)) return decodeURIComponent(p.slice(key.length));
  return null;
}

export function deleteCookie(name: string, path = "/", domain?: string) {
  document.cookie =
    `${encodeURIComponent(name)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path}` +
    (domain ? `; domain=${domain}` : "") +
    (location.protocol === "https:" ? `; Secure` : "") +
    `; SameSite=Lax`;
}
