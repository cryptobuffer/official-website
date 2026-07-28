<template>
  <v-theme-provider light>
    <v-container
      class="white grey--text text--darken-4"
      :class="{ 'pa-16': !$vuetify.breakpoint.smAndDown }"
    >
      <div class="legal-header text-center mt-8">
        <h1>4EVERLAND Privacy Policy</h1>
        <p><strong>Effective Date:</strong> January 1, 2026</p>
        <p><strong>Last Updated:</strong> January 1, 2026</p>
      </div>
      <div
        :class="{
          'px-16': !$vuetify.breakpoint.smAndDown,
          'px-8': $vuetify.breakpoint.smAndDown,
          'pt-16 pb-8': !$vuetify.breakpoint.smAndDown,
          'pt-8 pb-4': $vuetify.breakpoint.smAndDown,
        }"
        class="content rounded-lg mt-12 mb-16 grey lighten-4 grey--text"
      >
        <privacy-policy />
      </div>
    </v-container>
  </v-theme-provider>
</template>
<script>
import PrivacyPolicy from '../components/Markdowns/PrivacyPolicy.vue'
export default {
  components: {
    PrivacyPolicy,
  },
}
</script>
<style scoped>
.legal-header h1 {
  font-size: 48px;
  line-height: 1.2;
  font-weight: 500;
  margin-bottom: 24px;
}

.legal-header p {
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 8px;
}

@media (max-width: 600px) {
  .legal-header h1 {
    font-size: 32px;
  }
}

.content p {
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 30px;
}
</style>
