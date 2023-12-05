<script setup lang="ts">
definePageMeta({
  layout: false
})

const schema = [{
  name: 'email',
  type: 'text',
  label: 'Email',
  placeholder: 'Enter your email',
  required: true
}, {
  name: 'password',
  label: 'Password',
  type: 'password',
  placeholder: 'Enter your password',
  required: true
}]

const providers = [{
  label: 'Continue with GitHub',
  icon: 'i-simple-icons-github',
  color: 'gray',
  click: () => {
    console.log('Redirect to GitHub')
  }
}]

function onSubmit (data) {
  console.log('Submitted', data)
}
</script>

<template>
  <div class="h-screen flex items-center justify-center">
    <UCard class="max-w-sm w-full">
      <UAuthForm :schema="schema" :providers="providers" @submit="onSubmit" />
    </UCard>
  </div>
</template>
