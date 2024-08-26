import router from "@/router";

export default {
  namespaced: true,
  state: {
    name: "",
    tel: "",
    email: "",
    subject: "",
    subjectSpecify: "",
    service: "",
    message: "",
  },
  mutations: {
    updateName(state, value) {
      state.name = value;
    },
    updateTel(state, value) {
      state.tel = value;
    },
    updateEmail(state, value) {
      state.email = value;
    },
    updateSubject(state, value) {
      state.subject = value;
      state.subjectSpecify = "";
      state.service = "";
    },
    updateSubjectSpecify(state, value) {
      state.subjectSpecify = value;
    },
    updateService(state, value) {
      state.service = value;
    },
    updateMessage(state, value) {
      state.message = value;
    },
  },
  actions: {
    becomeSecuritizationCostumer({ commit }) {
      router.push("/contato");

      commit("updateSubject", "costumer");
      commit("updateService", "securitization");
    },
    becomeBuildingManagementCostumer({ commit }) {
      router.push("/contato");

      commit("updateSubject", "costumer");
      commit("updateService", "building-management");
    },
  },
};
