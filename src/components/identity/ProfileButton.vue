<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton
        class="hidden sm:inline-flex justify-center gap-x-3 rounded-md p-4 text-sm text-pop-secondary hover:bg-secondary"
      >
        <img
          class="inline-block h-6 w-6 rounded-full"
          :src="user?.picture"
          alt="User Profile Picture"
        />
        {{ user?.name }}
        <ChevronDownIcon
          class="-mr-1 h-5 w-5 text-pop-secondary"
          aria-hidden="true"
        />
      </MenuButton>
      <MenuButton class="sm:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-[30px] text-pop-primary"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </MenuButton>
    </div>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        class="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-secondary shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <MenuItem v-slot="{ active }">
          <button
            type="submit"
            @click="handleLogout"
            :class="[
              active ? 'bg-primary text-pop-secondary' : 'text-base',
              'block w-full px-4 py-3 text-right text-sm',
            ]"
          >
            Sign out
          </button>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useAuth0 } from "@auth0/auth0-vue";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";

const auth0 = useAuth0();
const { logout } = auth0;

const user = computed(() => {
  return auth0.user.value;
});

const handleLogout = () => {
  // TODO: clear all the pinia stores here
  logout({
    logoutParams: {
      returnTo: window.location.origin,
    },
  });
};
</script>
