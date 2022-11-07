/*
 * @Author: taozhiyaoyao
 * @LastEditors: taozhiyaoyao
 * @Date: 2022-11-07 19:22:07
 * @LastEditTime: 2022-11-07 19:24:30
 * @FilePath: \gcuwomd-oa\vitest.config.ts
 * @Description: 
 */
import { defineConfig } from "vitest/config";
export default defineConfig({
  test: {
    exclude:["src/tests*"]
  },
});
