import { defineSetupVue3 } from "@histoire/plugin-vue";
import { createI18n } from "vue-i18n";

const i18n = createI18n({
  locale: "nl",
  allowComposition: true, // you need to specify that!
  messages: {
    nl: {
      hello: "hallo!",
    },
  },
});

export const setupVue3 = defineSetupVue3(({ app }) => {
  app.use(i18n);
});
