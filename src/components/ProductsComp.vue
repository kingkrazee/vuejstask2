<template lang="">
    <div :style="{
        backgroundImage: `url(${cover})`,
        backgroundSize: `cover`,
        filter: `blur(4px)`
    }">
    </div>
    <div>
        <h1>
            This is the product component 🏳️‍⚧️
            <!-- {{bookTitle.title}}
            <br>
            {{bookTitle.author}}
            <br>
            {{bookTitle.year}}
            <br>
            {{bookTitle.genre}}
            <br>
            {{bookTitle.pages}}
            <br>
            {{bookTitle.publisher}}
            <br>
            {{bookTitle.isbn}} -->
            <slot name="heading"></slot>
            <slot name="author"></slot>
            <slot name="pages"></slot>
            <slot></slot>
        </h1>
    </div>
</template>
<script>
export default {
    // props:['bookTitle']
    props:['cover']
}
</script>
<style>
    
</style>