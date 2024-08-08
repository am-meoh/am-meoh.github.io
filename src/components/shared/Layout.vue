<template>
  <div class="w-full h-screen overflow-visible p-4">
    <header class="p-4 w-full">
      <div class="text-2xl text-gray-800 font-medium">
        <slot name="pageTitle"> Default Page Title </slot>
      </div>
      <div class="text-gray-600">
        <slot name="pageSubtitle"> Default Page Subtitle </slot>
      </div>
    </header>

    <div>
      <slot name="userStats" />
    </div>

    <div>
      <slot name="userList" />
    </div>

    <div>
      <slot name="newUser" />
    </div>
    <footer class="flex h-14 items-center justify-center bg-indigo-800 pr-5">
      <div class="text-white">Copyright © MeOH</div>
    </footer>
  </div>
</template>
