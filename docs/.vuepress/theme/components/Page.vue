<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content" />
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />

    <footer class="footer">
      <div>
        Make with ❤️ by
        <a
          href="https://www.moonlightwork.com/"
          rel="noopener"
          target="_blank"
        >Moonlight</a>.
      </div>
      <span class="copyright">&copy; {{ new Date().getFullYear() }} Moonlight Work Inc.</span>
    </footer>
  </main>
</template>

<script>
import PageEdit from "@parent-theme/components/PageEdit.vue";
import PageNav from "@parent-theme/components/PageNav.vue";

export default {
  components: { PageEdit, PageNav },
  props: ["sidebarItems"]
};
</script>

<style lang="stylus">
$light-3 = #F6F6F6
$dark-3 = #3D3D4B
$dark-5 = #92929F
$font-xs = 0.625rem /* 10px */

.footer
  background-color $light-3
  color $dark-3
  font-size 0.875rem
  padding 2rem
  text-align center

.copyright
  color $dark-5
  font-size $font-xs
  padding 1rem

.navbar .logo
  height 2rem
  vertical-align middle

@media (min-width ($MQMobile + 1px))
  .navbar .logo
    height 1.4rem
</style>
