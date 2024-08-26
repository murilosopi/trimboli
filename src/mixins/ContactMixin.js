import { mapActions, mapMutations } from "vuex";

export default {
  methods: {
    ...mapActions("contact", [
      "becomeSecuritizationCostumer",
      "becomeBuildingManagementCostumer",
    ]),
    ...mapMutations("contact", [
      "updateName",
      "updateTel",
      "updateEmail",
      "updateSubject",
      "updateSubjectSpecify",
      "updateService",
      "updateMessage",
    ]),
  },
};
