<script setup lang="ts">
const columns = [{
  label: 'Services',
  children: [{
    label: 'Standard Trailer Transport',
    to: '/services/standard-trailer'
  }, {
    label: 'Drop Trailer Transport',
    to: '/services/drop-trailer'
  }, {
    label: 'Sideloader Transport',
    to: '/services/sideloader'
  }, {
    label: 'Container Storage',
    to: '/services/container-storage'
  }, {
    label: 'Logistics Automation',
    to: '/services/logistics-automation'
  }, {
    label: 'Smart Quote Calculator',
    to: '/services/quote-calculator'
  }]
}, {
  label: 'Company',
  children: [{
    label: 'About Us',
    to: '/about'
  }, {
    label: 'Careers',
    to: '/careers'
  }, {
    label: 'Privacy Policy',
    to: '/privacy'
  }, {
    label: 'Terms of Service',
    to: '/terms'
  }]
}, {
  label: 'Contact',
  children: [{
    label: 'Phone: +61 456 881 666',
    href: 'tel:+61456881666'
  }, {
    label: 'Email: ops@bsbtransport.com.au',
    href: 'mailto:ops@bsbtransport.com.au'
  }, {
    label: '7 hume hwy, Warwick Farm NSW 2170, Australia',
    href: 'https://maps.google.com/?q=7+Hume+Highway,+Warwick+Farm+NSW+2170,+Australia',
    target: '_blank'
  }, {
    label: 'Get Quote',
    to: '/quote'
  }]
}]

const toast = useToast()

const email = ref('')
const loading = ref(false)

function onSubmit() {
  loading.value = true

  toast.add({
    title: 'Subscribed!',
    description: 'You\'ve been subscribed to our newsletter.'
  })
}
</script>

<template>
  <USeparator
    icon="i-lucide-truck"
    class="h-px"
  />

  <UFooter :ui="{ top: 'border-b border-default' }">
    <template #top>
      <UContainer>
        <UFooterColumns :columns="columns">
          <template #right>
            <form @submit.prevent="onSubmit">
              <UFormField
                name="email"
                label="Subscribe to our newsletter"
                size="lg"
              >
                <UInput
                  v-model="email"
                  type="email"
                  class="w-full"
                  placeholder="Enter your email"
                >
                  <template #trailing>
                    <UButton
                      type="submit"
                      size="xs"
                      label="Subscribe"
                    />
                  </template>
                </UInput>
              </UFormField>
            </form>
          </template>
        </UFooterColumns>
      </UContainer>
    </template>

    <template #left>
      <p class="text-sm text-muted">
        © {{ new Date().getFullYear() }} BSB Transport Australia. All rights reserved.
      </p>
    </template>

    <template #right>
      <UButton
        to="https://www.facebook.com/bsbtransportaus"
        target="_blank"
        icon="i-lucide-facebook"
        aria-label="BSB Transport on Facebook"
        color="neutral"
        variant="ghost"
      />
      <UButton
        to="https://www.linkedin.com/company/bsb-transport-australia"
        target="_blank"
        icon="i-lucide-linkedin"
        aria-label="BSB Transport on LinkedIn"
        color="neutral"
        variant="ghost"
      />
      <UButton
        to="https://www.instagram.com/bsbtransportaus"
        target="_blank"
        icon="i-lucide-instagram"
        aria-label="BSB Transport on Instagram"
        color="neutral"
        variant="ghost"
      />
    </template>
  </UFooter>
</template>
