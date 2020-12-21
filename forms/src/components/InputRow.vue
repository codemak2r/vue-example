<template>
    <div class="input-form">
        <form action="" @submit="submitForm">
            <div class="filed">
                <input type="text" v-model="newItem" placeholder="add an item"/>
            </div>
            <button class="ui button"> submit </button>
        </form>
        <div>
            <ul>
                <li  v-for="(item,index) in items" :key="index" class="item">{{ item }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "InputRow",
    data(){
        return {
            newItem: "",
            items: []
        }
    },
    methods:{
        submitForm(evt){
            
            console.log(this.newItem);
            this.items.push(this.newItem);
            this.newItem = "";
            evt.preventDefault();
        }
    }

}
</script>

<style>

</style>
