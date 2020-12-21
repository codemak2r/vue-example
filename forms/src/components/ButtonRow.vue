<template>
    <div>
        <button @click="ButtonClick" class="button ui">Hoodie</button>
        <button @click="ButtonClick" class="button ui">Tee</button>
        <button @click="ButtonClick" class="button ui">Fitted Cap</button>
        <button @click="ButtonClick" class="button ui">Jacket</button>
    </div>
</template>

<script>
export default {
    name: "ButtonRow",
    methods: {
        // HoodieClick(evt){
        //     console.log(evt.target);
        //     alert("HoodieClick");
        // },
        // TeeClick(){
        //     alert("TeeClick");
        // },
        // FittedCapClick(){
        //     alert("FittedCapClick");
        // },
        // JacketClick(){
        //     alert("JacketClick");
        // }
        // evt 表示事件本身，evt.target 就是点击的元素
        ButtonClick(evt){
            console.log(evt.target);
        }
    }

}
</script>

<style>
.ui.container { margin: 20px 0; } 

</style>
