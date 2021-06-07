<template>
  <div class="calculator">
      <Display :value="displayValue"/>
      <Button label="AC" @clickEmit="clearMemory" triple  />
      <Button label="/" @clickEmit="setOperation" operation />
      <Button label="7" @clickEmit="addDigit" />
      <Button label="8" @clickEmit="addDigit" />
      <Button label="9" @clickEmit="addDigit" />
      <Button label="*" @clickEmit="setOperation" operation />
      <Button label="4" @clickEmit="addDigit" />
      <Button label="5" @clickEmit="addDigit" />
      <Button label="6" @clickEmit="addDigit" />
      <Button label="-" @clickEmit="setOperation" operation/>
      <Button label="1" @clickEmit="addDigit" />
      <Button label="2" @clickEmit="addDigit" />
      <Button label="3" @clickEmit="addDigit" />
      <Button label="+" @clickEmit="setOperation" operation/>
      <Button label="0" @clickEmit="addDigit" double/>
      <Button label="." @clickEmit="addDigit" />
      <Button label="=" @clickEmit="setOperation" operation/>

  </div>
</template>

<script>
import Display from '../components/display'
import Button from '../components/button'
export default {
    components: {Button, Display},
    data() {
        return {
            values: [0,0],
            displayValue: "0",
            clearDisplay: false,
            current: 0,
            operation: null
        }
    },
    methods: {
        clearMemory() {
            Object.assign(this.$data, this.$options.data())
        },
        setOperation(op) {
            if (this.current === 0) {
                this.operation = op
                this.current = 1
                this.clearDisplay = true
            } else {
                const equals = op === "="
                const currentOperation = this.operation

                try {
                    this.values[0] = eval(
                        `${this.values[0]} ${currentOperation} ${this.values[1]}`
                    )
                } catch(e) {
                    this.$emit('onError',e)
                }

                this.values[1] = 0

                this.displayValue = this.values[0]
                this.operation = equals?null:op
                this.current = equals?0:1
                this.clearDisplay = !equals
            }
        },
        addDigit(n) {
            if (n === "." && this.displayValue.includes(".")) {return}
            const clearDisplay = this.displayValue === "0" || this.clearDisplay
            const currentValue = clearDisplay?"":this.displayValue
            const displayValue = currentValue + n

            this.displayValue = displayValue
            this.clearDisplay = false

            if (n != ".") {
                const i = this.current
                const newValue = parseFloat(displayValue)
                this.values[i] = newValue
            }
        }
    }
}
</script>

<style>
    .calculator {
        height: 320px;
        width: 235px;
        border-radius: 5px;
        overflow: hidden;
        display: grid;
        grid-template-columns: repeat(4, 25%);
        grid-auto-rows: 0.7fr 48px 48px 48px 48px 48px;
    }
</style>