<template lang="">
    <div class="card">
        <h1>
            <slot name="slotTitle">
                404 Title
            </slot>
        </h1>
        <h1>
            <slot>
                404 Default
            </slot>
        </h1>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    div{
        border: 3px solid black;
        border-radius: 10%;
        width: 300px;
        margin: auto;
    }
</style>