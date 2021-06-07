<template>
  <button class="btn" :class="{operation, double, triple}"
  @click="$emit('clickEmit', label)">
      {{ label }}
  </button>
</template>

<script>
export default {
    props: {
        label: {},
        operation: {type: Boolean},
        double: {type: Boolean},
        triple: {type: Boolean}
    }
}
</script>

<style>
:root {
    --bg-button: #f0f0f0;
    --border-buton: solid 1px #888;
}
.btn {
    font-size: 1.4em;
    background: var(--bg-button);
    border: none;
    border-right: var(--border-buton);
    border-bottom: var(--border-buton);
    outline: none;
    transition: background .1s;
}
.btn:hover {
    background: rgb(223, 223, 223);
}
.btn:active {
    background: #ccc;
}
.btn.double {
    grid-column: span 2;
}
.btn.triple {
    grid-column: span 3;
}
.btn.operation {
    background: #fa8231;
    color: white;
}
.btn.operation:hover {
    background: #e9782d;
}
.btn.operation:active {
    background: #d36d28;
}

</style>