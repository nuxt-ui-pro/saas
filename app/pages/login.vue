<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})

useSeoMeta({
  title: 'Login'
})

const fields = [{
  name: 'email',
  type: 'email',
  label: 'Email',
  placeholder: 'Enter your email'
}, {
  name: 'password',
  label: 'Password',
  type: 'password',
  placeholder: 'Enter your password'
}]

const validate = (state: any) => {
  const errors = []
  if (!state.email) errors.push({ path: 'email', message: 'Email is required' })
  if (!state.password) errors.push({ path: 'password', message: 'Password is required' })
  return errors
}

const providers = [{
  label: 'Continue with GitHub',
  icon: 'i-simple-icons-github',
  onClick: () => console.log('Redirect to GitHub')
}]

function onSubmit(data: any) {
  console.log('Submitted', data)
}
</script>

<!-- eslint-disable vue/multiline-html-element-content-newline -->
<!-- eslint-disable vue/singleline-html-element-content-newline -->
<template>
  <UPageCard class="max-w-sm w-full bg-white/75 dark:bg-white/5 backdrop-blur">
    <UAuthForm
      :fields="fields"
      :validate="validate"
      :providers="providers"
      title="Welcome back"
      icon="i-lucide-lock"
      @submit="onSubmit"
    >
      <template #description>
        Don't have an account? <ULink
          to="/signup"
          class="text-primary-500 font-medium"
        >Sign up</ULink>.
      </template>

      <template #password-hint>
        <ULink
          to="/"
          class="text-primary-500 font-medium"
        >Forgot password?</ULink>
      </template>

      <template #footer>
        By signing in, you agree to our <ULink
          to="/"
          class="text-primary-500 font-medium"
        >Terms of Service</ULink>.
      </template>
    </UAuthForm>
  </UPageCard>
</template>
