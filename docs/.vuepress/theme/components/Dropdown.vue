<template>
  <div
    class="dropdown-wrapper dropdown"
    :class="{ open }"
  >
    <button
      class="dropdown-title"
      type="button"
      :aria-label="triggerLabel"
      @click="setOpen(!open)"
    >
      <span class="title">{{ triggerLabel }}</span>
      <span
        class="arrow"
        :class="open ? 'down' : 'right'"
      ></span>
    </button>

    <DropdownTransition>
      <div
        class="nav-dropdown dropdown"
        v-show="open"
      >
        <slot />
      </div>
    </DropdownTransition>
  </div>
</template>

<script>
import DropdownTransition from '@parent-theme/components/DropdownTransition.vue'

export default {
  name: 'Dropdown',

  components: { DropdownTransition },

  data () {
    return {
      open: false
    }
  },

  props: {
    triggerLabel: {
      type: String,
      required: true
    },
  },

  methods: {
    setOpen (value) {
      this.open = value
    },
  },

  watch: {
    $route () {
      this.open = false
    }
  }
}
</script>

<style lang="stylus">
.dropdown-wrapper.dropdown
  cursor auto

  .nav-dropdown
    padding 0

@media (min-width: ($MQMobile))
  .nav-dropdown.dropdown
    width 700px
</style>
