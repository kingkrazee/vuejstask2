<template lang="">
    <!-- <div>
       {{firstName}} {{lastName}}
       {{objectData}}
    </div> -->
    <h1>This is the component</h1>
    <slot></slot>
</template>
<script>
export default {
    // props: ['firstName', 'lastName', 'objectData']
    props:{
        firstName: String,
        objectData: Object,
    }
}
</script>
<style lang="">
    
</style>