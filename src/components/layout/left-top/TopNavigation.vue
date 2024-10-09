<template>
  <div
    v-if="isAuthenticated"
    class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col"
  >
    <!-- Sidebar component, swap this element with another sidebar if you like -->
    <div
      class="flex grow flex-col gap-y-5 overflow-y-auto bg-primary border-secondary border-r-2 px-6"
    >
      <div class="flex h-16 shrink-0 items-center">
        <img
          class="h-8 w-auto"
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
          alt="Your Company"
        />
      </div>
      <nav class="flex flex-1 flex-col">
        <ul role="list" class="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" class="-mx-2 space-y-1">
              <li v-for="item in navigation" :key="item.name">
                <a
                  :href="item.target"
                  :class="[
                    item.current
                      ? 'bg-secondary text-pop-secondary'
                      : 'text-pop-primary hover:bg-secondary hover:text-white',
                    'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                  ]"
                >
                  <component
                    :is="item.icon"
                    class="h-6 w-6 shrink-0"
                    aria-hidden="true"
                  />
                  {{ item.name }}
                </a>
              </li>
            </ul>
          </li>
          <li>
            <ThemeToggle />
          </li>
          <li></li>
          <li class="-mx-6 mt-auto">
            <ProfileButton />
            <!-- <a
              href="#"
              class="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"
            >
              <img
                class="h-8 w-8 rounded-full bg-gray-800"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <span class="sr-only">Your profile</span>
              <span aria-hidden="true">Tom Cook</span>
            </a> -->
          </li>
        </ul>
      </nav>
    </div>
  </div>

  <!-- CONDITIONAL LOGIN -->
  <div v-else class="flex items-center">
    <LoginButton v-if="!isAuthenticated" />
  </div>
</template>

<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import { navigation } from "@helpers/lovs";
import ProfileButton from "@components/identity/ProfileButton.vue";
import ThemeToggle from "@components/ThemeToggle.vue";

const { isAuthenticated } = useAuth0();
</script>
