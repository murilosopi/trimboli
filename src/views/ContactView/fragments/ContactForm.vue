<template>
  <form>
    <TransitionGroup
      name="fade"
      class="grid grid-cols-1 sm:grid-cols-2 gap-5"
      mode="out-in"
    >
      <InputField key="name" label="Nome" type="text" v-model="name" />
      <InputField key="tel" label="Telefone" type="tel" v-model="tel" />
      <InputField key="email" label="E-mail" type="email" v-model="email" />
      <InputField key="subject" label="Assunto" type="select" v-model="subject">
        <option value="">Selecione</option>
        <option value="costumer">Quero me tornar cliente</option>
        <option value="support">Suporte</option>
        <option value="other">Outro</option>
      </InputField>

      <InputField
        key="service"
        class="sm:col-span-2"
        label="Produto / Serviço"
        type="select"
        v-model="service"
        v-if="subject == 'costumer'"
      >
        <option value="building-management">Gestão Imobiliária</option>
        <option value="securitization">Securitização</option>
      </InputField>
      <InputField
        key="subject-specification"
        class="sm:col-span-2"
        label="Especifíque"
        type="text"
        v-model="subjectSpecify"
        v-if="subject == 'other'"
      />
      <InputField
        key="message"
        class="sm:col-span-2"
        label="Mensagem"
        type="textarea"
        v-model="message"
      />
    </TransitionGroup>

    <div class="flex justify-between mt-2">
      <MainButton variant="light" @click.native="reset">limpar</MainButton>
      <MainButton @click="send">enviar</MainButton>
    </div>
  </form>
</template>

<script>
import InputField from "@/components/common/InputField.vue";
import MainButton from "@/components/common/MainButton.vue";
import ContactMixin from "@/mixins/ContactMixin";
import "@/styles/transitions/fade.css";

export default {
  mixins: [ContactMixin],
  name: "ContactForm",
  components: {
    InputField,
    MainButton,
  },
  computed: {
    name: {
      get() {
        return this.$store.state.contact.name;
      },
      set(value) {
        this.updateName(value);
      },
    },
    tel: {
      get() {
        return this.$store.state.contact.tel;
      },
      set(value) {
        this.updateTel(value);
      },
    },
    email: {
      get() {
        return this.$store.state.contact.email;
      },
      set(value) {
        this.updateEmail(value);
      },
    },
    subject: {
      get() {
        return this.$store.state.contact.subject;
      },
      set(value) {
        this.updateSubject(value);
      },
    },
    subjectSpecify: {
      get() {
        return this.$store.state.contact.subjectSpecify;
      },
      set(value) {
        this.updateSubjectSpecify(value);
      },
    },
    service: {
      get() {
        return this.$store.state.contact.service;
      },
      set(value) {
        this.updateService(value);
      },
    },
    message: {
      get() {
        return this.$store.state.contact.message;
      },
      set(value) {
        this.updateMessage(value);
      },
    },
  },
  methods: {
    reset() {},
    send() {},
  },
};
</script>
