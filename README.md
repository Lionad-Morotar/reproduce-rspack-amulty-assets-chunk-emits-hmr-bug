# reproduce rspack image assets chunk error bug

1. pnpm install
2. pnpm serve
3. remove line 9 in test-page.vue, save to trigger hmr
4. restore step 3, save to trigger hmr
5. error occurred
