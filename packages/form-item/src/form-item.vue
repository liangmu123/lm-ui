<template>
  <div class="lm-form-item">
    <div
      v-if="label"
      class="label"
      :style="{
        width: width + 'px'
      }"
    >
      {{ label }}
    </div>
    <div
      class="block"
      :class="{
        isError: isError,
        isWarning: isWarning
      }"
    >
      <slot></slot>
      <div class="error">
        <transition name="slide">
          <span v-show="isError">{{ errorMsg }}</span>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
import valicate from './valicator'
import { ELINPUT, ELSELECT, ELDATEPICKER } from './constant'

export default {
  name: 'lm-form-item',
  inject: ['form'],
  props: {
    prop: {
      type: String
    },
    data: Object,
    label: String,
    width: {
      type: [Number, String]
    }
  },
  data () {
    return {
      isError: false,
      isWarning: false,
      errorMsg: null
    }
  },
  mounted () {
    this.child = null
    this.onChildEvent()
  },
  methods: {
    async onChildEvent () {
      if (this.prop) {
        await Promise.resolve()
        this.child = this.catchChild()
        if (!this.child) {
          return
        }
        let rule = this.form.rules[this.prop]
        let eventName = rule[0].trigger
        this.child.$on(eventName, async () => {
          await Promise.resolve()
          this.valicate()
        })
      }
    },
    catchChild (children = this.$children) {
      let length = children && children.length
      if (length) {
        let child = null
        for (let i = 0; i < length; i++) {
          child = children[i]
          if (
            [ELINPUT, ELSELECT, ELDATEPICKER].includes(
              child.$options._componentTag
            )
          ) {
            return child
          } else if (child.$children) {
            return this.catchChild(child.$children)
          }
        }
      }
    },
    valicate () {
      let rule = this.form.rules[this.prop]
      this.isWarning = false
      if (rule && this.child) {
        let res = valicate(this.child.value, rule, this.data)
        if (res === true) {
          this.isError = false
        } else {
          this.isError = true
          this.errorMsg = res.data.message
          if (res.data.ignore) {
            this.isWarning = true
            return false
          }
        }
      } else {
        this.isError = false
      }
      return this.isError
    }
  }
}
</script>

<style scoped lang="scss">
$errorColor: #f56c6c;
$warnColor: orange;
$bottomHeight: 16px;
.lm-form-item {
  display: flex;
  align-items: center;
  .label {
    white-space: nowrap;
    text-align: right;
    padding-bottom: $bottomHeight;
    margin-right: 15px;
  }
  .block {
    flex: 1;
    flex-basis: auto;
    > .error {
      height: $bottomHeight;
      > span {
        display: inline-block;
        font-size: 12px;
        line-height: $bottomHeight;
        height: $bottomHeight;
        color: $errorColor;
      }
    }
    ::v-deep .el-input .el-input__inner {
      transition: all 0.5s;
    }
    &.isError {
      &.isWarning {
        ::v-deep .el-input .el-input__inner {
          border: 1px solid $warnColor;
        }
        & .error {
          color: $warnColor;
          > span {
            color: $warnColor;
          }
        }
      }
      ::v-deep .el-input .el-input__inner {
        border: 1px solid $errorColor;
      }
      & .error {
        color: $errorColor;
      }
    }
    // .slide-enter-active, .slide-leave-active {
    //   transition: opacity .5s
    // }
    // .slide-enter, .slide-leave-active {
    //   opacity: 0;
    //   color: $errorColor;
    // }
    .slide-enter-active,
    .slide-leave-active {
      transition: all 0.3s ease;
    }
    .slide-enter,
    .slide-leave-to {
      transform: translateX(10px);
      opacity: 0;
    }
  }
}
</style>
