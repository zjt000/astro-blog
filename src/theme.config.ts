// cannot use path alias here because unocss can not resolve it
import { defineConfig } from "./toolkit/themeConfig";

export default defineConfig({
    siteName: "朱朱小站",
    locale: "zh-CN",   // zh-CN | zh-TW | ja | en
});
