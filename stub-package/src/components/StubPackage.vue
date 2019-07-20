<template>
    <div class="stub-package-component">
        \{{msg}}
    </div>
</template>

<script>
    import _ from 'lodash';

    export default {
        name: 'StubPackage',
        props: {
            msg: String
        }
    };
</script>

<style scoped>

</style>
